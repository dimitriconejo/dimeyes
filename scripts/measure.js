// dimeyes · rendered-layout measurement.
// Paste the whole file into the browser JavaScript tool; the last expression is the result (JSON).
// Returns header, sections with vertical rhythm, grids, alignment axes, spacing tally,
// the design's own base unit, type, radii and colours.
// Spacing: use offBase for any design; offDimitriScale only for his own work or designs with no base.
// - base / offBase: base is 8 (or 4) when at least 80% of spacing occurrences are multiples of it, else null.
//   offBase lists the values off that base with their counts: the primary list for third-party designs.
// - offDimitriScale: elements whose spacing is off his scale, rarest values first, capped at 40.
//   6 and 10 are on his scale; 36 is tolerated and not listed. Set window.DIMEYES_SCALE to override the scale.
(() => {
  const vw = innerWidth, vh = innerHeight;
  const px = v => Math.round(parseFloat(v) || 0);
  const SCALE = window.DIMEYES_SCALE || [2,4,6,8,10,12,16,20,24,32,40,48,56,64,72,80,96,112,128,144,160,176,192,208,224,240,256];
  const TOLERATED = [36];
  const onScale = v => SCALE.includes(v) || (v > 256 && v % 16 === 0);
  const vis = el => { const r = el.getBoundingClientRect(); const cs = getComputedStyle(el); return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none'; };
  const all = [...document.querySelectorAll('body *')].filter(vis).slice(0, 5000);

  // Header
  const header = document.querySelector('header, [role=banner]') || document.querySelector('nav');
  let headerInfo = null;
  if (header) {
    const r = header.getBoundingClientRect(), cs = getComputedStyle(header);
    const items = [...header.querySelectorAll('a, button')].filter(vis).map(e => e.textContent.trim()).filter(Boolean).slice(0, 15);
    headerInfo = { h: Math.round(r.height), position: cs.position, padX: [px(cs.paddingLeft), px(cs.paddingRight)], items };
  }

  // Top-level blocks (sections)
  const main = document.querySelector('main') || document.body;
  let blocks = [...main.children].filter(vis);
  for (let i = 0; i < 3 && blocks.length < 3; i++) {
    const big = blocks.slice().sort((a, b) => b.getBoundingClientRect().height - a.getBoundingClientRect().height)[0];
    if (!big) break;
    blocks = [...big.children].filter(vis);
  }
  // Split blocks much taller than the viewport into their children, so each entry is one visual section.
  for (let pass = 0; pass < 3; pass++) {
    blocks = blocks.flatMap(b => (b.getBoundingClientRect().height > vh * 1.4 && [...b.children].filter(vis).length > 1) ? [...b.children].filter(vis) : [b]);
  }
  const sections = blocks.slice(0, 30).map(el => {
    const r = el.getBoundingClientRect(), cs = getComputedStyle(el);
    let inner = el, d = 0;
    while (inner.children.length === 1 && d < 5) { inner = inner.children[0]; d++; }
    const kids = [...inner.children].filter(vis);
    const contentLeft = kids.length ? Math.min(...kids.map(k => k.getBoundingClientRect().left)) : r.left;
    const contentRight = kids.length ? Math.max(...kids.map(k => k.getBoundingClientRect().right)) : r.right;
    const firstTop = kids.length ? Math.min(...kids.map(k => k.getBoundingClientRect().top)) - r.top : 0;
    const lastBottom = kids.length ? r.bottom - Math.max(...kids.map(k => k.getBoundingClientRect().bottom)) : 0;
    const h = el.querySelector('h1, h2, h3');
    const hcs = h && getComputedStyle(h);
    const p = el.querySelector('p');
    const pcs = p && getComputedStyle(p);
    return {
      top: Math.round(r.top + scrollY), h: Math.round(r.height), bg: cs.backgroundColor,
      padY: [px(cs.paddingTop), px(cs.paddingBottom)], insetTop: Math.round(firstTop), insetBottom: Math.round(lastBottom),
      contentX: [Math.round(contentLeft), Math.round(vw - contentRight)], contentW: Math.round(contentRight - contentLeft),
      heading: h ? { text: h.textContent.trim().replace(/\s+/g, ' ').slice(0, 60), tag: h.tagName, size: px(hcs.fontSize), lh: hcs.lineHeight, weight: hcs.fontWeight, tracking: hcs.letterSpacing, align: hcs.textAlign, family: hcs.fontFamily.split(',')[0], w: Math.round(h.getBoundingClientRect().width), gapToNext: h.nextElementSibling ? Math.round(h.nextElementSibling.getBoundingClientRect().top - h.getBoundingClientRect().bottom) : null } : null,
      para: p ? { size: px(pcs.fontSize), lh: pcs.lineHeight, color: pcs.color, w: Math.round(p.getBoundingClientRect().width), align: pcs.textAlign } : null,
      buttons: [...el.querySelectorAll('a, button')].filter(b => { const c = getComputedStyle(b), bh = b.getBoundingClientRect().height; return vis(b) && bh >= 24 && bh <= 72 && (c.backgroundColor !== 'rgba(0, 0, 0, 0)' || c.borderTopWidth !== '0px'); }).slice(0, 4).map(b => { const c = getComputedStyle(b), br = b.getBoundingClientRect(); return { text: b.textContent.trim().slice(0, 24), h: Math.round(br.height), padX: px(c.paddingLeft), radius: c.borderTopLeftRadius, bg: c.backgroundColor }; })
    };
  });

  // Grids and multi-column flex rows
  const gridEls = [];
  all.forEach(el => { const cs = getComputedStyle(el); if ((cs.display.includes('grid') || (cs.display.includes('flex') && cs.flexDirection.startsWith('row') && cs.flexWrap === 'wrap')) && el.children.length > 1 && el.getBoundingClientRect().width >= vw * 0.3 && !gridEls.some(g => g.contains(el))) gridEls.push(el); });
  const grids = gridEls
    .slice(0, 20).map(el => { const cs = getComputedStyle(el), r = el.getBoundingClientRect(); const c0 = el.children[0].getBoundingClientRect(); return { display: cs.display, cols: cs.display.includes('grid') ? cs.gridTemplateColumns.split(' ').length : Math.round(r.width / Math.max(1, c0.width)), colGap: cs.columnGap, rowGap: cs.rowGap, x: Math.round(r.left), w: Math.round(r.width), top: Math.round(r.top + scrollY), items: el.children.length, itemW: Math.round(c0.width) }; });

  // Alignment axes: left edges of text runs
  const texts = all.filter(el => [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 2));
  const lefts = {};
  texts.forEach(el => { const x = Math.round(el.getBoundingClientRect().left); lefts[x] = (lefts[x] || 0) + 1; });
  const axes = Object.entries(lefts).sort((a, b) => b[1] - a[1]).slice(0, 12).map(([x, n]) => ({ x: +x, n }));
  const centered = texts.filter(el => getComputedStyle(el).textAlign === 'center').length;

  // Spacing tally (padding, margin, gap)
  const tally = {};
  all.forEach(el => { const cs = getComputedStyle(el); ['paddingTop','paddingBottom','paddingLeft','paddingRight','marginTop','marginBottom','rowGap','columnGap'].forEach(k => { if (cs[k] === 'normal') return; const v = px(cs[k]); if (v > 0) tally[v] = (tally[v] || 0) + 1; }); });
  const spacing = Object.entries(tally).map(([v, n]) => ({ v: +v, n, onDimitriScale: onScale(+v) })).sort((a, b) => b.n - a.n);

  // The design's own base unit, judged on occurrences, and the values that stray from it
  const total = spacing.reduce((s, x) => s + x.n, 0);
  const share = b => total ? spacing.filter(x => x.v % b === 0).reduce((s, x) => s + x.n, 0) / total : 0;
  const base = share(8) >= 0.8 ? 8 : share(4) >= 0.8 ? 4 : null;
  const offBase = base ? spacing.filter(x => x.v % base).map(({ v, n }) => ({ v, n })) : null;

  // Elements with spacing off his scale, so a critique of his work can point at the exact place
  const label = el => { const c = typeof el.className === 'string' ? el.className.trim().split(/\s+/)[0] : ''; const t = (el.innerText || '').trim().replace(/\s+/g, ' ').slice(0, 32); return `${el.tagName.toLowerCase()}${c ? '.' + c : ''}${t ? ' «' + t + '»' : ''}`; };
  const off = [], freq = {};
  all.forEach(el => { const cs = getComputedStyle(el); ['paddingTop','paddingBottom','paddingLeft','paddingRight','marginTop','marginBottom','rowGap','columnGap'].forEach(k => { if (cs[k] === 'normal') return; const v = px(cs[k]); if (v > 0 && !onScale(v) && !TOLERATED.includes(v)) { off.push({ el, prop: k, v }); freq[v] = (freq[v] || 0) + 1; } }); });
  // Rarest values first, so a heavily repeated value cannot fill the 40 slots and hide the strays.
  const offDimitriScale = off.sort((a, b) => freq[a.v] - freq[b.v]).slice(0, 40).map(o => ({ ...o, el: label(o.el), count: freq[o.v] }));

  // Type tally
  const tt = {};
  texts.forEach(el => { const cs = getComputedStyle(el); const k = `${px(cs.fontSize)}/${cs.lineHeight === 'normal' ? 'n' : px(cs.lineHeight)}/${cs.fontWeight}/${cs.fontFamily.split(',')[0].replace(/"/g, '')}${px(cs.fontSize) >= 20 ? ' ls ' + cs.letterSpacing : ''}`; tt[k] = (tt[k] || 0) + 1; });

  // Radii and colors
  const rt = {}, ct = {}, bgt = {};
  all.forEach(el => { const cs = getComputedStyle(el); if (cs.borderTopLeftRadius !== '0px') rt[cs.borderTopLeftRadius] = (rt[cs.borderTopLeftRadius] || 0) + 1; bgt[cs.backgroundColor] = (bgt[cs.backgroundColor] || 0) + 1; });
  texts.forEach(el => { const c = getComputedStyle(el).color; ct[c] = (ct[c] || 0) + 1; });
  const top = (o, n) => Object.entries(o).sort((a, b) => b[1] - a[1]).slice(0, n);

  // Visual gap between the content of consecutive sections
  const sectionGaps = sections.slice(1).map((s, i) => { const p = sections[i]; return (s.top + s.insetTop) - (p.top + p.h - p.insetBottom); });

  return {
    url: location.href, vw, vh, docH: document.documentElement.scrollHeight,
    header: headerInfo, sections, sectionGaps, grids, axes, centeredTextRuns: centered, textRuns: texts.length,
    spacingTop: spacing.slice(0, 24), base, offBase, offDimitriScale,
    type: top(tt, 18), radii: top(rt, 10), textColors: top(ct, 8), backgrounds: top(bgt, 8)
  };
})()
