// Dimeyes · spacing measure for a fixed-canvas graphic piece (post, story, poster) built in HTML.
// Run it with scripts/measure-graphic.py, or paste the whole file into a browser JavaScript tool on the page
// (set window.DIMEYES_OPTS = {width, height, safe: [top, right, bottom, left]} first if the viewport isn't the canvas).
// The last expression is the report (JSON). It measures every rendered text line between the bodies of the
// letters (cap height or x-height down to the baseline), the gaps between neighbouring lines, the text styles,
// the alignment axes, the safe area and the logo, and flags what breaks references/eye.md §4.
// Not counted as typography: icon-font ligatures, symbol-only text (❦ ♪ ✔ 👉), the logo's own wordmark, and (for the
// typefaces, styles and sizes) text drawn on a depicted object such as a book cover.
// Limits: text drawn inside <svg> and CSS ::before/::after content are not measured; rotated or skewed text is only
// listed. Ink comes from canvas, which ignores OpenType features: figure styles and other features set in CSS are
// measured with the font's defaults (lining figures set with lnum are taken at cap height). A web font that fails to
// load is measured on its fallback face; the report warns only when the browser knows a declared face failed, not when
// a font was never declared or its stylesheet didn't load.
(() => {
  const O = window.DIMEYES_OPTS || {};
  const W = Math.round(O.width > 0 ? O.width : innerWidth), H = Math.round(O.height > 0 ? O.height : innerHeight);
  const r1 = v => Math.round(v * 10) / 10, r2 = v => Math.round(v * 100) / 100;
  const css = e => getComputedStyle(e);
  const TOL = 2; // px a measured edge may miss a threshold by before it counts: below what the eye sees

  // Platform safe areas in px on the canvas (top, right, bottom, left), eye.md §4. Other sizes scale from the nearest shape.
  const PRESETS = [
    { w: 1080, h: 1080, s: [80, 80, 80, 80], name: 'feed square' },
    { w: 1080, h: 1350, s: [96, 80, 120, 80], name: 'feed portrait' },
    { w: 1080, h: 1920, s: [250, 100, 420, 64], name: 'story or reel' },
  ];
  let safe = O.safe, safeName = 'given';
  if (!safe) {
    const ratio = W / H;
    const p = PRESETS.reduce((a, b) => Math.abs(b.w / b.h - ratio) < Math.abs(a.w / a.h - ratio) ? b : a);
    const k = W / p.w;
    safe = p.s.map(v => Math.round(v * k));
    safeName = p.name + (k === 1 ? '' : ' (scaled ×' + r1(k) + ')');
  }
  const [sT, sR, sB, sL] = safe;

  // ---------- Boxes ----------
  const boxOf = el => { const r = el.getBoundingClientRect(); return { x0: r1(r.left), y0: r1(r.top), x1: r1(r.right), y1: r1(r.bottom) }; };
  const union = (a, b) => !a ? b : !b ? a : { x0: Math.min(a.x0, b.x0), y0: Math.min(a.y0, b.y0), x1: Math.max(a.x1, b.x1), y1: Math.max(a.y1, b.y1) };
  // What shows of an element: its box cut by every ancestor that clips it (overflow, clip-path).
  const visBox = el => {
    const b = boxOf(el);
    for (let e = el.parentElement; e && e !== document.body && e !== document.documentElement; e = e.parentElement) {
      const s = css(e), c = boxOf(e), clip = s.clipPath !== 'none';
      if (clip || s.overflowX !== 'visible') { b.x0 = Math.max(b.x0, c.x0); b.x1 = Math.min(b.x1, c.x1); }
      if (clip || s.overflowY !== 'visible') { b.y0 = Math.max(b.y0, c.y0); b.y1 = Math.min(b.y1, c.y1); }
    }
    return b;
  };
  const area = b => Math.max(0, b.x1 - b.x0) * Math.max(0, b.y1 - b.y0);
  const isClear = c => c === 'transparent' || /^rgba\(.*,\s*0\)$/.test(c) || /\/\s*0\)$/.test(c);
  const groundOf = e => { for (e = e.parentElement; e; e = e.parentElement) { const c = css(e).backgroundColor; if (!isClear(c)) return c; } return 'rgb(255, 255, 255)'; };
  const hasFill = (e, s = css(e)) => (!isClear(s.backgroundColor) && s.backgroundColor !== groundOf(e)) || s.backgroundImage.includes('gradient');
  // A pill, button or badge: a small box with its own fill (unlike the ground behind it), a gradient or a full border.
  const massCache = new Map();
  const isMass = e => {
    if (massCache.has(e)) return massCache.get(e);
    const s = css(e);
    let m = !s.display.startsWith('table') && !(s.display === 'inline' && e.getClientRects().length !== 1) && area(boxOf(e)) < 0.1 * W * H;
    if (m) m = hasFill(e, s) || ['Top', 'Right', 'Bottom', 'Left'].every(k => parseFloat(s['border' + k + 'Width']) >= 1 && s['border' + k + 'Style'] !== 'none' && !isClear(s['border' + k + 'Color']));
    massCache.set(e, m);
    return m;
  };
  // A depicted object, such as a book cover: its own fill, under half the canvas, with an illustration over 40 % of it.
  const artOf = e => {
    for (; e && e !== document.body; e = e.parentElement) {
      const a = area(boxOf(e));
      if (a < 0.5 * W * H && hasFill(e) && [...e.querySelectorAll('svg, img')].some(i => area(boxOf(i)) >= 0.4 * a)) return e;
    }
    return null;
  };

  // ---------- Logos (found first, so their wordmark text isn't counted as the piece's text) ----------
  const logoEls = [...document.querySelectorAll('img, svg, [class*=logo i], [id*=logo i], [class*=partner i], [class*=sponsor i]')].filter(el => {
    const s = ['src', 'alt', 'class', 'id', 'aria-label'].map(a => el.getAttribute(a) || '').join(' ').toLowerCase();
    return /logo|\bbrand|\bmarca\b|partner|sponsor/.test(s);
  }).filter((el, _, all) => !all.some(o => o !== el && o.contains(el)));

  // ---------- Text lines ----------
  const ctx = document.createElement('canvas').getContext('2d');
  const metricsCache = {};
  const metrics = (font) => {
    if (metricsCache[font]) return metricsCache[font];
    ctx.font = font;
    const H_ = ctx.measureText('H'), x_ = ctx.measureText('x'), g = ctx.measureText('Hg');
    return (metricsCache[font] = { cap: H_.actualBoundingBoxAscent, xh: x_.actualBoundingBoxAscent, asc: g.fontBoundingBoxAscent, desc: g.fontBoundingBoxDescent });
  };
  const opacityOf = (el) => { let o = 1; for (let e = el; e && e.nodeType === 1; e = e.parentElement) o *= parseFloat(css(e).opacity); return o; };
  // The nearest block-level box: spans and <b> inside a heading or paragraph belong to that one text.
  const blockOf = e => { while (e.parentElement && e !== document.body && /^(inline|contents)$/.test(css(e).display)) e = e.parentElement; return e; };
  // The element that rotates, skews, flips or sets the text vertically, if any: such text has no horizontal lines to measure.
  const turnedBy = e => {
    for (; e && e.nodeType === 1; e = e.parentElement) {
      const s = css(e);
      if (!s.writingMode.startsWith('horizontal') || (s.rotate !== 'none' && parseFloat(s.rotate.split(' ').pop()) % 360 !== 0)) return e;
      if (s.transform !== 'none') { const m = new DOMMatrix(s.transform); if (Math.abs(m.b) > 1e-3 || Math.abs(m.c) > 1e-3 || m.a < 0 || m.d < 0) return e; }
    }
    return null;
  };
  const cased = (c, t, prev) => t === 'uppercase' ? c.toUpperCase() : t === 'lowercase' ? c.toLowerCase() : t === 'capitalize' && !/[\p{L}\p{N}]/u.test(prev || '') ? c.toUpperCase() : c;
  const ICON_FONT = /material (icons|symbols)|font ?awesome|icomoon|glyphicons|\bicons?\b/i;
  const frags = [], turned = new Map(), logoText = new Map(), unloaded = new Set();
  const blockIds = new Map();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, { acceptNode: n => n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT });
  const range = document.createRange();
  let node;
  while ((node = walker.nextNode())) {
    const el = node.parentElement;
    if (!el || el.closest('svg, script, style, noscript, title')) continue;
    const cs = css(el);
    if (cs.visibility === 'hidden' || cs.display === 'none' || opacityOf(el) < 0.05) continue;
    const text = node.nodeValue;
    // Icon-font ligatures and symbol-only text (❦ ♪ ✔ 👉) are pictograms, not typography.
    if (ICON_FONT.test(cs.fontFamily) || !/[\p{L}\p{N}\p{Sc}]/u.test(text)) continue;
    const family = cs.fontFamily.split(',')[0].replace(/["']/g, '').trim();
    const size = parseFloat(cs.fontSize);
    const font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    const m = metrics(font);
    try { if (!document.fonts.check(font, text.trim().slice(0, 40))) unloaded.add(family); } catch (e) { /* a font string the API can't parse */ }
    const transform = cs.textTransform;
    const ls = cs.letterSpacing === 'normal' ? 0 : parseFloat(cs.letterSpacing);
    const lsEm = Math.round(ls / size * 20) / 20; // tracking in 0.05 em steps: closer values look the same
    const key = [family, r1(size), cs.fontWeight, cs.fontStyle === 'normal' ? '' : cs.fontStyle, transform === 'none' ? '' : transform, lsEm ? lsEm + 'em' : ''].join('|');
    const logo = logoEls.find(o => o.contains(el));
    const turn = turnedBy(el);
    if (turn && !logo) {
      if (!turned.has(turn)) turned.set(turn, { text: turn.innerText.replace(/\s+/g, ' ').trim().slice(0, 60), keys: [] });
      turned.get(turn).keys.push(key);
      continue;
    }
    const blk = blockOf(el);
    if (!blockIds.has(blk)) blockIds.set(blk, blockIds.size);
    // A text that starts after a <br> is a new item inside the same block (a stacked data line), not a wrap.
    let prev = node.previousSibling; while (prev && prev.nodeType === 3 && !prev.nodeValue.trim()) prev = prev.previousSibling;
    if (!prev && el !== blk) { prev = el.previousSibling; while (prev && prev.nodeType === 3 && !prev.nodeValue.trim()) prev = prev.previousSibling; }
    const afterBr = !!(prev && prev.nodeName === 'BR');
    // Group characters into rendered lines: a character joins the line of the one before it when their tops agree.
    const groups = [];
    for (let i = 0; i < text.length; i++) {
      if (!text[i].trim()) { if (groups.length && !groups[groups.length - 1].chars.endsWith(' ')) groups[groups.length - 1].chars += ' '; continue; }
      range.setStart(node, i); range.setEnd(node, i + 1);
      const r = range.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) continue;
      let g = groups.length && Math.abs(groups[groups.length - 1].lastTop - r.top) < size * 0.5 ? groups[groups.length - 1] : null;
      if (!g) { if (groups.length) groups[groups.length - 1].chars = groups[groups.length - 1].chars.trimEnd(); g = { top: r.top, x0: r.left, x1: r.right, chars: '', cs: [] }; groups.push(g); }
      g.lastTop = r.top; g.x0 = Math.min(g.x0, r.left); g.x1 = Math.max(g.x1, r.right);
      const c = cased(text[i], transform, text[i - 1]);
      g.chars += c; g.cs.push([r.left, c, r.right - ls]);
    }
    const lnum = /lining-nums/.test(cs.fontVariantNumeric) || /lnum/.test(cs.fontFeatureSettings);
    ctx.font = font;
    for (const [gi, g] of groups.entries()) {
      const shown = g.chars.trim();
      const tall = /[\p{Lu}\p{Lt}\p{N}bdfhklt]/u.test(shown);
      const baseline = g.top + m.asc;
      // Ink per glyph, placed where the browser put it (kerning and letter-spacing included); canvas gives only its side bearings and height.
      // o and e are where the glyph's advance starts and ends (without tracking).
      const glyphs = g.cs.map(([o, c, e]) => {
        const t = ctx.measureText(c), l = o - t.actualBoundingBoxLeft, r = o + t.actualBoundingBoxRight;
        if (lnum && /[0-9]/.test(c)) return { c, o, e, l, r, top: baseline - m.cap, bot: baseline };
        return { c, o, e, l, r, top: baseline - t.actualBoundingBoxAscent, bot: baseline + t.actualBoundingBoxDescent };
      });
      const frag = {
        text: shown, el: blockIds.get(blk), blk, art: !!artOf(el), key, keys: [key], family, size: r1(size), weight: parseInt(cs.fontWeight, 10) || 400, italic: cs.fontStyle !== 'normal',
        align: cs.textAlign, lh: cs.lineHeight === 'normal' ? null : r2(parseFloat(cs.lineHeight) / size), lhPx: cs.lineHeight === 'normal' ? (m.asc + m.desc) : parseFloat(cs.lineHeight),
        bodyH: tall ? m.cap : m.xh, ls,
        x0: r1(Math.min(...glyphs.map(q => q.l))), x1: r1(Math.max(...glyphs.map(q => q.r))), boxX0: r1(g.x0), boxX1: r1(g.x1), baseline: r1(baseline),
        bodyTop: r1(baseline - (tall ? m.cap : m.xh)),
        inkTop: r1(Math.min(...glyphs.map(q => q.top))), inkBottom: r1(Math.max(...glyphs.map(q => q.bot))), glyphs, afterBr: afterBr && gi === 0 && size < 40, // a <br> inside a title is a line break, not a new item
      };
      if (logo) { if (!logoText.has(logo)) logoText.set(logo, []); logoText.get(logo).push(frag); } else frags.push(frag);
    }
  }

  // Fragments of one rendered line (a <b> or <span> inside it) become one line; the longest fragment of the largest size sets its style.
  frags.sort((a, b) => a.baseline - b.baseline || a.boxX0 - b.boxX0);
  const lines = [];
  for (const f of frags) {
    const l = lines.find(o => o.el === f.el && Math.abs(o.baseline - f.baseline) < Math.max(1.5, 0.05 * Math.max(o.size, f.size)));
    if (!l) { lines.push(Object.assign(f, { mainLen: f.text.length })); continue; }
    const main = f.size > l.size || (f.size === l.size && f.text.length > l.mainLen);
    if (main) l.mainLen = f.text.length;
    l.text += (f.boxX0 - l.boxX1 > 0.15 * Math.max(l.size, f.size) ? ' ' : '') + f.text;
    if ((f.text.match(/[\p{L}\p{N}]/gu) || []).length > 1) l.keys.push(f.key); // a currency sign or unit set apart is part of its figure, not a style
    l.glyphs.push(...f.glyphs);
    for (const k of ['x0', 'boxX0', 'inkTop', 'bodyTop']) l[k] = Math.min(l[k], f[k]);
    for (const k of ['x1', 'boxX1', 'inkBottom']) l[k] = Math.max(l[k], f[k]);
    if (f.boxX1 >= l.boxX1) l.ls = f.ls;
    if (main) Object.assign(l, { key: f.key, family: f.family, size: f.size, weight: f.weight, italic: f.italic, align: f.align, lh: f.lh, lhPx: f.lhPx, baseline: f.baseline });
    l.bodyH = l.baseline - l.bodyTop;
  }
  lines.sort((a, b) => a.baseline - b.baseline || a.x0 - b.x0);
  lines.forEach((l, i) => { l.i = i; l.caps = /\p{L}/u.test(l.text) && l.text === l.text.toUpperCase(); l.text = l.text.slice(0, 60); delete l.mainLen; });

  const flags = [];
  const flag = (level, code, msg) => flags.push({ level, code, msg });
  const tx = l => `"${l.text.slice(0, 28)}"`;

  // ---------- Neighbouring lines and gaps ----------
  const overlapX = (a, b) => Math.min(a.x1, b.x1) - Math.max(a.x0, b.x0) > 0;
  const pairs = [];
  for (const a of lines) {
    let best = null;
    for (const b of lines) {
      if (b === a || b.baseline <= a.baseline + 1 || !overlapX(a, b)) continue;
      if (!best || b.bodyTop < best.bodyTop) best = b;
    }
    if (best) pairs.push({ a: a.i, b: best.i });
  }
  const own = lines.filter(l => !l.art); // the piece's own typography, without the text drawn on a depicted object
  const sizes = [...new Set(own.map(l => l.size))].sort((a, b) => b - a);
  // A title set one element per line, at one style and the spacing of a wrap, is one text.
  const textOf = new Map(lines.map(l => [l.el, l.el]));
  const find = x => textOf.get(x) === x ? x : find(textOf.get(x));
  for (const p of pairs) {
    const a = lines[p.a], b = lines[p.b];
    if (a.el !== b.el && a.key === b.key && (a.size >= 64 || a.size === sizes[0]) && b.baseline - a.baseline <= a.lhPx + 0.15 * a.size) textOf.set(find(b.el), find(a.el));
  }
  // Text inside a pill, button or badge is measured to that box, the mass the eye sees: the outermost one that holds only this side.
  const massesOf = l => { const out = []; for (let e = l.blk; e && e !== document.body; e = e.parentElement) if (isMass(e)) out.push(e); return out; };
  const edgeMass = (l, other) => { const ms = massesOf(l).filter(e => !e.contains(other.blk)); return ms.length ? visBox(ms[ms.length - 1]) : null; };
  for (const p of pairs) {
    const a = lines[p.a], b = lines[p.b], small = Math.min(a.size, b.size), big = Math.max(a.size, b.size);
    const ma = edgeMass(a, b), mb = edgeMass(b, a), bodyGap = r1(b.bodyTop - a.baseline), massGap = r1((mb ? mb.y0 : b.bodyTop) - (ma ? ma.y1 : a.baseline));
    const mass = !!(ma || mb) && massGap > 0; // boxes that touch (cells, a tab on its card) are one object: measure the text inside
    Object.assign(p, {
      bodyGap, gap: mass ? massGap : bodyGap, mass,
      sameStyle: a.key === b.key, wrap: !b.afterBr && find(a.el) === find(b.el) && (a.key === b.key || (a.el === b.el && a.size === b.size && a.family === b.family)), sizeRatio: r2(big / small),
    });
    p.ratio = r2(p.gap / small);
  }
  const weightClass = w => w >= 600 ? 2 : w >= 400 ? 1 : 0;
  for (const p of pairs) {
    const a = lines[p.a], b = lines[p.b], small = Math.min(a.size, b.size);
    if (p.wrap) {
      const lead = (b.baseline - a.baseline) / a.size;
      if (a.size < 40 && lead < 1.15 && (lines.filter(l => find(l.el) === find(a.el)).length > 2 || lead < 1.05)) flag('WARN', 'tight-leading', `${tx(a)}: ${r2(lead)} leading at ${a.size} px reads cramped; small text takes about 1.2–1.4.`);
      if (a.size >= 64 && lead > 1.15) flag('WARN', 'title-leading', `${tx(a)}: display leading ${r2(lead)} at ${a.size} px; titles sit at about 1.0–1.1 (0.85–0.95 for very large display).`);
      // Only glyphs that stand over each other can touch.
      const touch = Math.max(0, ...a.glyphs.flatMap(ga => b.glyphs.filter(gb => Math.min(ga.r, gb.r) > Math.max(ga.l, gb.l)).map(gb => ga.bot - gb.top)));
      if (touch > 1) flag('WARN', 'collision', `${tx(a)} → ${tx(b)}: ascenders and descenders touch (${r1(touch)} px); check accents.`);
      continue;
    }
    if (p.gap < 0) { flag('FAIL', 'overlap', `${tx(a)} and ${tx(b)} overlap by ${-p.gap} px between their letter bodies.`); continue; }
    const g = p.mass ? ` (to the box around the text)` : '';
    if (p.sameStyle) {
      const plain = a.lhPx - b.bodyH; // the gap the same text would have if it simply wrapped
      if (p.gap < 0.5 * a.size - TOL && p.gap <= plain + 0.15 * a.size) flag('WARN', 'items-fused', `${tx(a)} → ${tx(b)}: separate items at plain line spacing (${p.gap} px${g}). Give each item a step more than its line spacing, about half the text size.`);
    }
    else if (p.gap < 0.5 * small - TOL && small >= 64) flag('WARN', 'display-stack', `${tx(a)} → ${tx(b)}: two display lines ${p.gap} px apart (half the smaller is ${r1(small * 0.5)} px). Tight is right only when they read as one lockup.`);
    else if (p.gap < 0.5 * small - TOL) flag('FAIL', 'fused', `${tx(a)} → ${tx(b)}: ${p.gap} px${g} between bodies, under half the smaller text (${r1(small * 0.5)} px). A change of role needs at least that.`);
    else if (a.size >= 1.8 * b.size && p.gap < b.size - TOL) flag('WARN', 'tight-under-title', `${tx(a)} → ${tx(b)}: ${p.gap} px${g} under a display line; aim for about the smaller text's size (${b.size} px).`);
    const toldApart = weightClass(a.weight) !== weightClass(b.weight) || a.caps !== b.caps;
    if (!toldApart && a.family === b.family && p.sizeRatio > 1.02 && p.sizeRatio < 1.4 && p.gap < 2 * small) flag('WARN', 'near-sizes', `${tx(a)} (${a.size}) and ${tx(b)} (${b.size}) are ${p.sizeRatio}× apart in one typeface: if they read almost alike, tell them apart by the gap, weight or tone, or enlarge the more important one; never shrink the hook or the key datum, add a face or merge two roles.`);
  }

  // Rhythm: gaps between blocks that are almost equal but not equal read as a mistake (36 and 41 px); similar relationships take one value.
  const blockGaps = pairs.filter(p => !p.wrap && p.gap > 0).map(p => ({ g: p.gap, a: lines[p.a], b: lines[p.b] }));
  const near = [];
  for (let i = 0; i < blockGaps.length; i++) for (let j = i + 1; j < blockGaps.length; j++) {
    const x = blockGaps[i], y = blockGaps[j], d = Math.abs(x.g - y.g);
    if (d > TOL && d <= Math.max(4, 0.15 * Math.min(x.g, y.g)) && Math.max(x.g, y.g) <= 160) near.push([x, y, d]);
  }
  if (near.length) flag('WARN', 'uneven-rhythm', `Near-equal gaps between blocks: ${near.slice(0, 3).map(([x, y]) => `${x.g} px (${tx(x.a)} → ${tx(x.b)}) vs ${y.g} px (${tx(y.a)} → ${tx(y.b)})`).join('; ')}. Make each pair one value, or clearly different if the relationship differs.`);

  // Group gaps: the biggest jump in the sorted non-wrap gaps splits in-group from between-group distances.
  const gaps = pairs.filter(p => !p.wrap && p.gap >= 0).map(p => p.gap).sort((x, y) => x - y);
  let groups = null;
  if (gaps.length >= 2) {
    let jump = 0, at = 0;
    for (let i = 1; i < gaps.length; i++) { const j = gaps[i] / Math.max(gaps[i - 1], 1); if (j > jump) { jump = j; at = i; } }
    const inside = gaps.slice(0, at), between = gaps.slice(at);
    groups = { inGroupMax: inside.length ? inside[inside.length - 1] : null, betweenMin: between[0], ratio: inside.length ? r1(between[0] / Math.max(inside[inside.length - 1], 1)) : null, distinct: [...new Set(gaps.map(Math.round))] };
    if (groups.ratio !== null && groups.ratio < 2 && gaps.length >= 3) flag('INFO', 'chain', `Gaps between blocks (${groups.betweenMin} px) are only ${groups.ratio}× the largest gap inside a block (${groups.inGroupMax} px): either one compact group at equal distances, or separate groups clearly apart.`);
  }

  // ---------- Safe area ----------
  // The glyph whose ink sets a line's edge, and whether designers hang it past the axis (round, diagonal, open or italic shapes).
  const HANG = /[OCGQSDAVWYTJoceadgqsvwy0-9¡!¿?“”‘’«»"'.,:;\-–—()]/;
  const edgeGlyph = (l, side) => l.glyphs.reduce((a, g) => (side === 'left' ? g.l < a.l : g.r > a.r) ? g : a);
  const hangs = (l, side) => HANG.test(edgeGlyph(l, side).c) || l.italic;
  // A FAIL needs the letter bodies, or at the sides the ink, over the line by more than TOL. Round overshoot and a hang up to 4 % of the
  // size pass; accents, ascenders, descenders and a swash past a well-placed letter only WARN.
  for (const l of lines) {
    const hard = [], soft = [];
    for (const [side, over, line] of [['left', sL - l.x0, sL], ['right', l.x1 - (W - sR), sR]]) {
      if (over <= TOL || (hangs(l, side) && over <= 0.04 * l.size)) continue;
      const g = edgeGlyph(l, side), placed = side === 'left' ? g.o >= sL - TOL : g.e <= W - sR + TOL;
      (placed ? soft : hard).push(placed ? `a swash or overhang crosses the ${side} line by ${r1(over)} px` : `${side} ${r1(line - over)} < ${line}`);
    }
    if (l.bodyTop < sT - TOL) hard.push(`top ${l.bodyTop} < ${sT}`);
    else if (l.inkTop < sT - Math.max(TOL, 0.03 * l.size)) soft.push(`accents or ascenders reach ${l.inkTop}, line ${sT}`);
    if (l.baseline > H - sB + TOL) hard.push(`bottom ${r1(H - l.baseline)} < ${sB}`);
    else if (l.inkBottom > H - sB + Math.max(TOL, 0.03 * l.size)) soft.push(`descenders reach ${r1(H - l.inkBottom)} from the bottom, line ${sB}`);
    if (hard.length) flag('FAIL', 'safe-area', `${tx(l)} is outside the ${safeName} safe area (${hard.join(', ')}).`);
    else if (soft.length) flag('WARN', 'safe-overshoot', `${tx(l)}: only ${soft.join('; ')}. Fine for an accent, a descender or a swash; keep the letter bodies inside.`);
  }

  // Pills, buttons, badges and cards are content too: their boxes stay inside the safe area.
  const boxed = new Set(lines.flatMap(l => massesOf(l)));
  for (const e of boxed) {
    if (logoEls.some(o => o.contains(e) || e.contains(o))) continue;
    const b = visBox(e), over = r1(Math.max(sL - b.x0, sT - b.y0, b.x1 - (W - sR), b.y1 - (H - sB)));
    const name = (e.innerText || '').replace(/\s+/g, ' ').trim().slice(0, 28);
    if (over > TOL) flag('FAIL', 'box-safe-area', `The box around "${name}" (${b.x0}, ${b.y0}) – (${b.x1}, ${b.y1}) is ${over} px outside the ${safeName} safe area.`);
  }

  // ---------- Logo and images ----------
  // Inline SVG art by its drawn shapes (<text> by its glyphs, not its em box), clipped to the SVG's own box.
  const svgInk = svg => {
    let b = null;
    const add = (x0, y0, x1, y1, m) => { const p = new DOMPoint(x0, y0).matrixTransform(m), q = new DOMPoint(x1, y1).matrixTransform(m); b = union(b, { x0: Math.min(p.x, q.x), y0: Math.min(p.y, q.y), x1: Math.max(p.x, q.x), y1: Math.max(p.y, q.y) }); };
    for (const e of svg.querySelectorAll('path, rect, circle, ellipse, line, polyline, polygon, image, use, text')) {
      if (e.closest('defs, clipPath, mask, symbol, pattern')) continue;
      const s = css(e);
      if (s.display === 'none' || s.visibility === 'hidden' || parseFloat(s.opacity) === 0 || (s.fill === 'none' && s.stroke === 'none')) continue;
      const bb = e.getBBox(), m = e.getScreenCTM();
      if (!m || !(bb.width || bb.height)) continue;
      if (e.tagName === 'text') {
        if (!e.textContent.trim()) continue;
        ctx.font = `${s.fontStyle} ${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
        const t = ctx.measureText(e.textContent), y = e.getStartPositionOfChar(0).y, ls = parseFloat(s.letterSpacing) || 0;
        add(bb.x, y - t.actualBoundingBoxAscent, bb.x + bb.width - ls, y + t.actualBoundingBoxDescent, m);
      } else { const w = s.stroke !== 'none' ? parseFloat(s.strokeWidth) / 2 : 0; add(bb.x - w, bb.y - w, bb.x + bb.width + w, bb.y + bb.height + w, m); }
    }
    if (!b) return null;
    const v = visBox(svg);
    return { x0: r1(Math.max(b.x0, v.x0)), y0: r1(Math.max(b.y0, v.y0)), x1: r1(Math.min(b.x1, v.x1)), y1: r1(Math.min(b.y1, v.y1)) };
  };
  // A raster or SVG file by its opaque pixels, where object-fit drew it (needs a readable image: same origin, data:, or file:// with --allow-file-access-from-files).
  const imgInk = img => {
    try {
      const w = img.naturalWidth, h = img.naturalHeight;
      if (!w || !h) return null;
      const c = document.createElement('canvas'); c.width = w; c.height = h;
      const g = c.getContext('2d'); g.drawImage(img, 0, 0);
      const d = g.getImageData(0, 0, w, h).data;
      let x0 = w, y0 = h, x1 = -1, y1 = -1;
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (d[(y * w + x) * 4 + 3] > 24) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
      if (x1 < 0) return null;
      const s = css(img), r = img.getBoundingClientRect(), px = k => parseFloat(s[k]) || 0;
      const cx = r.left + px('borderLeftWidth') + px('paddingLeft'), cy = r.top + px('borderTopWidth') + px('paddingTop');
      const cw = r.right - px('borderRightWidth') - px('paddingRight') - cx, ch = r.bottom - px('borderBottomWidth') - px('paddingBottom') - cy;
      let kx = cw / w, ky = ch / h, ox = 0, oy = 0;
      if (s.objectFit !== 'fill') {
        const k = s.objectFit === 'cover' ? Math.max(kx, ky) : s.objectFit === 'none' ? 1 : s.objectFit === 'scale-down' ? Math.min(1, kx, ky) : Math.min(kx, ky);
        const [opx, opy] = s.objectPosition.split(' '), pos = (v, free) => v.endsWith('%') ? parseFloat(v) / 100 * free : parseFloat(v);
        kx = ky = k; ox = pos(opx, cw - w * k); oy = pos(opy || '50%', ch - h * k);
      }
      return { x0: r1(Math.max(cx, cx + ox + x0 * kx)), y0: r1(Math.max(cy, cy + oy + y0 * ky)), x1: r1(Math.min(cx + cw, cx + ox + (x1 + 1) * kx)), y1: r1(Math.min(cy + ch, cy + oy + (y1 + 1) * ky)) };
    } catch (e) { return null; }
  };
  const artInk = e => (e.tagName.toLowerCase() === 'svg' ? svgInk(e) : imgInk(e)) || visBox(e);
  const logos = logoEls.map(el => {
    const arts = el.matches('img, svg') ? [el] : [...el.querySelectorAll('img, svg')].filter(e => area(boxOf(e)) > 0);
    let box = arts.reduce((b, e) => union(b, artInk(e)), null);
    for (const f of logoText.get(el) || []) box = union(box, { x0: f.x0, y0: f.inkTop, x1: f.x1, y1: f.inkBottom });
    return { el, box: box || visBox(el) };
  }).filter(o => o.box.x1 - o.box.x0 > 4);
  for (const { box } of logos) {
    const over = r1(Math.max(sL - box.x0, sT - box.y0, box.x1 - (W - sR), box.y1 - (H - sB)));
    if (over > TOL) flag('FAIL', 'logo-safe-area', `The logo's ink (${box.x0}, ${box.y0}) – (${box.x1}, ${box.y1}) is ${over} px outside the ${safeName} safe area.`);
    for (const l of lines) {
      if (l.x0 >= box.x0 - 1 && l.x1 <= box.x1 + 1 && l.bodyTop >= box.y0 - 1 && l.baseline <= box.y1 + 1) continue; // text that belongs to the logo
      const dx = Math.max(box.x0 - l.x1, l.x0 - box.x1, 0), dy = Math.max(box.y0 - l.baseline, l.bodyTop - box.y1, 0);
      const d = Math.hypot(dx, dy);
      if (d < 24) flag('WARN', 'logo-crowded', `${tx(l)} is ${r1(d)} px from the logo; keep at least the gap between blocks.`);
    }
  }
  const images = [...document.body.querySelectorAll('*')].filter(el => {
    if (logos.some(o => o.el.contains(el))) return false;
    if (el.tagName === 'IMG' || el.tagName === 'VIDEO') return true;
    const bg = css(el).backgroundImage; return bg && bg.includes('url(');
  }).map(el => ({ tag: el.tagName.toLowerCase(), box: visBox(el) })).filter(o => area(o.box) > 0.02 * W * H);
  for (const { box } of images) {
    const sides = [[box.x0, sL, 'left'], [box.y0, sT, 'top'], [W - box.x1, sR, 'right'], [H - box.y1, sB, 'bottom']];
    for (const [d, s, side] of sides) if (d > 2 && d < s - 2) flag('WARN', 'image-between', `An image stops ${r1(d)} px from the ${side} edge: bleed it to the edge or keep it inside the safe area (${s}).`);
  }
  const onImage = lines.filter(l => images.some(({ box }) => l.x1 > box.x0 && l.x0 < box.x1 && l.baseline > box.y0 && l.bodyTop < box.y1));
  if (onImage.length) flag('INFO', 'text-on-image', `${onImage.length} line(s) sit on an image (${onImage.slice(0, 3).map(tx).join(', ')}): check contrast and a calm zone, never a face.`);

  // ---------- Styles, typefaces, sizes ----------
  if (unloaded.size) flag('WARN', 'font-not-loaded', `${[...unloaded].join(', ')} did not load: the render and these numbers use a fallback face. Fix the font link or path and measure again.`);
  const turnedList = [...turned.values()];
  if (turnedList.length) flag('INFO', 'rotated', `${turnedList.length} rotated or skewed text(s) not measured (${turnedList.slice(0, 3).map(tx).join(', ')}): check their safe area and gaps on the render.`);
  const art = lines.filter(l => l.art);
  if (art.length) flag('INFO', 'art-text', `${art.length} line(s) on a depicted object (${art.slice(0, 3).map(tx).join(', ')}) are left out of the typefaces, styles and sizes.`);
  const keys = [...new Set([...own, ...turnedList].flatMap(l => l.keys))];
  const families = [...new Set(keys.map(k => k.split('|')[0]))];
  // A weight change at the same family, size, case and tracking is a weight step inside one style (eye.md: the key datum's step).
  const byBase = new Map();
  for (const k of keys) { const p = k.split('|'), w = p.splice(2, 1)[0], base = p.join('|'); if (!byBase.has(base)) byBase.set(base, new Set()); byBase.get(base).add(w); }
  const styleCount = byBase.size, weightSteps = [...byBase.values()].reduce((n, s) => n + s.size - 1, 0);
  const styleTxt = `${styleCount} text styles${weightSteps ? ` (+${weightSteps} weight step${weightSteps > 1 ? 's' : ''})` : ''}`;
  // Counts are information, not faults: the voice of a piece can need a third face (SKILL.md, How he corrects).
  if (families.length > 2 || styleCount > 4) flag('INFO', 'styles', `${families.length} typefaces, ${styleTxt}: check that each one owns a role and no role is set two ways; never cut the face that carries the voice to lower this.`);
  if (sizes.length) {
    const topTexts = new Set(own.filter(l => l.size === sizes[0]).map(l => find(l.el)));
    if (topTexts.size > 1) flag('WARN', 'title-shared', `${topTexts.size} separate texts share the largest size (${sizes[0]} px): the title (or the hook figure) stands alone at its size.`);
  }

  // ---------- Alignment axes ----------
  // Layout edges, where each line's box starts, ends or centres, without the trailing letter-spacing the browser adds to the box
  // (tracked caps centred or right-aligned by CSS sit off by it). Ink differences on one layout edge are optical corrections.
  const edges = l => ({ left: l.boxX0, right: l.boxX1 - l.ls, centre: (l.boxX0 + l.boxX1 - l.ls) / 2 });
  const kindOf = l => l.align === 'center' ? 'centre' : (l.align === 'right' || l.align === 'end') ? 'right' : 'left';
  const axes = [];
  for (const l of lines) {
    const kind = kindOf(l), v = edges(l)[kind];
    const hit = axes.find(x => x.kind === kind && Math.abs(x.v - v) <= 1.5);
    if (hit) { hit.n++; hit.lines.push(l); } else axes.push({ v: r1(v), kind, n: 1, lines: [l] });
  }
  // Two lines are off one axis only when their ink is off too, it isn't an optical hang, and they don't share another edge
  // (prices right-aligned in a row but set with text-align left). Two axes are off only when no pair of their lines lines up.
  const inkEdge = (l, kind) => kind === 'left' ? l.x0 : kind === 'right' ? l.x1 : (l.x0 + l.x1) / 2;
  const misaligned = (p, q, kind) => {
    const d = Math.abs(inkEdge(p, kind) - inkEdge(q, kind));
    if (d <= 1.5 || Object.entries(edges(p)).some(([k, v]) => k !== kind && Math.abs(v - edges(q)[k]) <= 1)) return false;
    const out = kind === 'left' ? (p.x0 < q.x0 ? p : q) : kind === 'right' ? (p.x1 > q.x1 ? p : q) : null;
    return !(out && hangs(out, kind) && d <= Math.max(TOL, 0.04 * out.size));
  };
  for (let i = 0; i < axes.length; i++) for (let j = i + 1; j < axes.length; j++) {
    const a = axes[i], b = axes[j];
    if (a.kind !== b.kind || Math.abs(a.v - b.v) <= 1.5 || Math.abs(a.v - b.v) > 8) continue;
    if (a.lines.some(p => b.lines.some(q => !misaligned(p, q, a.kind)))) continue;
    const tracked = a.kind !== 'left' && [...a.lines, ...b.lines].some(l => Math.abs(l.ls) >= 1) ? ' (a tracked line: offset its trailing letter-spacing)' : '';
    flag('WARN', 'near-axis', `${a.kind} edges at ${a.v} and ${b.v} px are ${r1(Math.abs(a.v - b.v))} px apart: put them on one axis${tracked}.`);
  }

  // ---------- Report ----------
  const order = { FAIL: 0, WARN: 1, INFO: 2 };
  flags.sort((a, b) => order[a.level] - order[b.level]);
  const minMargin = lines.length ? { left: r1(Math.min(...lines.map(l => l.x0))), right: r1(W - Math.max(...lines.map(l => l.x1))), top: r1(Math.min(...lines.map(l => l.inkTop))), bottom: r1(H - Math.max(...lines.map(l => l.inkBottom))) } : null;
  const counts = { FAIL: flags.filter(f => f.level === 'FAIL').length, WARN: flags.filter(f => f.level === 'WARN').length };
  lines.forEach(l => { l.text_id = find(l.el); delete l.glyphs; delete l.blk; });
  axes.forEach(a => delete a.lines);
  const summary = [
    `Canvas ${W}×${H}, ${safeName} safe area ${safe.join('/')} (top/right/bottom/left).`,
    `${lines.length} text lines · ${families.length} typefaces · ${styleTxt} · sizes ${sizes.join(', ')}.`,
    minMargin ? `Text margins: left ${minMargin.left}, right ${minMargin.right}, top ${minMargin.top}, bottom ${minMargin.bottom}.` : 'No text.',
    groups ? `Gaps between line bodies: ${groups.distinct.join(', ')} px; largest inside a block ${groups.inGroupMax}, smallest between blocks ${groups.betweenMin}${groups.ratio ? ' (' + groups.ratio + '×)' : ''}.` : '',
    `${counts.FAIL} FAIL · ${counts.WARN} WARN.`,
    ...flags.map(f => `${f.level} ${f.code}: ${f.msg}`),
  ].filter(Boolean).join('\n');
  return { canvas: { width: W, height: H }, safe: { area: safeName, px: safe }, summary, flags, counts, lines, pairs, groups, styles: keys, styleCount, weightSteps, families, sizes, axes, logos: logos.map(o => o.box), images: images.map(o => o.box), rotated: turnedList };
})();
