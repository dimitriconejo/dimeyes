# Dimitri's design system: the playbook

> **Scope: his style, not a template.** This file documents how Dimitri's own work looks and is built. Use it to design for him, for his own products (Cathopic, Christicons, dimconex and the Catholic network apps he designs) or "like him", and to recognise his signature when reviewing his own work. A Catholic or parish subject is not his product. When a design has no system (a consistent 4- or 8-pt base already is one), fill the gap with his eye, never this file's look: his spacing scale, a short type ladder, the concentric-radius rule and colour roles built from the design's own palette, typefaces and shapes. Say which values you added. Never use it to push another design toward his look: other designs are judged in their own language with `eye.md` (see "Two layers" in SKILL.md).

Read this before designing for Dimitri, for his products, or "like Dimitri". The result must be indistinguishable from something he designed and would sign.

**Contents:** Goal · Sources and weight · Tags · 1. How to use this file · 2. Composition rules · 3. Pre-delivery checklist · 4. Tokens (4.1 Spacing · 4.2 Type · 4.3 Radii · 4.4 Depth · 4.5 Colour · 4.6 Motion) · 5. Layout recipes · 6. Component recipes · 7. Screen patterns. Grep `^## ` or `^\*\*` to jump.

**Goal.** "Al final un diseño es precioso cuando se siente una armonía. Que el ojo siente una armonía." (*In the end a design is beautiful when you feel harmony. When the eye feels harmony.*) [his words] Every value below serves that goal: rhythm from a few scale values, shared axes, one typographic voice, colour restraint, concentric radii, consistent components, and nothing that pulls the eye without a reason. Section 3 tests it.

**Sources and weight.** Rules come from the canon first: the Cathopic production site and Christicons (both his), then Flodesk, the referent closest to how he thinks. Secondary sources confirm or add: his Catholic TV network app boards (account sheets, Reading Preferences, Bible, Media, Detail, Rosary, Intentions), the network's website (W1), his portfolio and the dimconex identity. Mater Coeli (dated) and Paulable (built with AI) are never a source. Holydemia and Mailgami are excluded.

**Tags.** [Cathopic code] / [Christicons code]: compiled CSS tokens. [Cathopic DOM] / [Christicons DOM]: measured live at 1440 and 390. [Pricing beta ~]: his Cathopic beta pricing screenshot. [Flodesk ref]: the measured referent. [app board ~]: his app boards, estimated in pt on a 375 frame. [portfolio]: dimitriconejo.com. [dimconex]: his media identity. [both canon]: Cathopic and Christicons agree. [his words]: his answers, critiques and test choices. [fix: X]: a recorded flaw in his canon, corrected with his own tokens; X is the measured value. [derived]: built from his tokens where his work shows no example. `~` = screenshot estimate.

## 1. How to use this file

Decide in this order, and settle each step before moving on.

1. **Context.** Who it is for, the single main task, and what must be seen first. Then pick the register:
   - *Content product or marketplace with conversion* → the Cathopic system: brand accent on the primary action, pills everywhere, Inter at 630 with tight headings. This is the default.
   - *Quiet tool or catalogue* → the Christicons system: monochrome, ink primary, radius 16 on controls, weights 400/500 at tracking 0, the product straight after a short hero.
   - *Persuasive landing or marketing page* → Cathopic components on the Flodesk scale: display 64–160 at line height 1.0, 240 between sections, one pill per block.
   - *iOS app* → the app-board patterns (sheets, tab bar, §7 app screens) on the same tokens.
   - If the project already has a brand or system, keep it and stop reading this file. Apply only SKILL.md "Designing → For an existing brand, client or style" and self-review with audit mode (`eye.md`). §2 and §3 describe his own work and never apply to someone else's brand.
2. **Structure and focus.** Take the section order from §7. One focal point per screen, one filled primary per block.
3. **Colour system.** Follow the §4.5 recipe, and fix the accent budget before drawing any screen.
4. **Type.** §4.2: one family (plus a serif only for what is read or felt) and a ladder with clear jumps.
5. **Grid and space.** §5 for the container, a grid with no remainder and the section token; §4.1 for every distance.
6. **Components.** §6 with exact values, and every state: hover, press, focus, disabled, empty, loading, error.
7. **Composition.** §2.
8. **Self-review.** §3 at 1440 and 390, with `scripts/measure.js`.

## 2. Composition rules

1. One focal point per screen and one filled primary per block; everything else grey, outline or text [his words][both canon].
2. Space groups first: label 8 from its field, groups 24–32, blocks 56, sections 112; the outer gap at least 7× the inner [his words test][Cathopic DOM].
3. Tint separates surfaces; a line goes only between sections or groups, or at a band edge, never on every row [his words][both canon]. No card inside a card of the same surface and weight; a tonal step that groups one set of actions (the grey detail panel holding a white action card, §7) is fine [his words][Cathopic DOM].
4. Every number comes from the scale; 10 only for small-component distances, never for section, card or layout gaps; one section token per breakpoint [his words][both canon code].
5. Grids divide the container exactly, with gaps of 20/24 (16/12 on mobile) [both canon].
6. Centre identity blocks, heroes, conversion blocks, dialogs, auth and 404; left-align catalogue, forms, lists and reading. Don't flip the axis between adjacent sections without a reason, and keep logo, page title and content on one x [both canon][fix].
7. Optical alignment over box alignment: pill padding and hover plates hang outside the text axis; equal side boxes centre the nav; card buttons share one baseline [Cathopic DOM][Christicons DOM].
8. Colour lives in the content and the chrome stays neutral: one accent, ink as the second voice, emojis counted [his words][Flodesk ref].
9. Images and tone bands go full-bleed, text never does. Photos in browse grids are square-cornered; UI thumbnails are rounded [Cathopic DOM].
10. Dark is a chapter break: at most one dark band mid-page, plus the footer [Cathopic DOM][Flodesk ref].
11. Mobile restructures (accordion, horizontal cards, dropdown tabs, drawer, icon-only buttons with an aria-label). Component heights hold, type drops a step, large spacing drops 3–5 steps [both canon].
12. Edge and funnel pages strip chrome. Tools open in place; modals only for off-task flows [both canon].
13. Show the value instead of naming it: "Aa" at real sizes, layout pictograms, a live preview, "Verse 8" [app board ~].
14. Sample content is real and fitting: no lorem ipsum, no invented Scripture, a real avatar [his words Settings critique][app board ~].
15. Ornament comes only from the theme or as discreet atmosphere (a drop cap; the dimconex sun born from the Benedictus quote), never without a job [dimconex].

## 3. Pre-delivery checklist

Only for designs for him, his own products or "like him".

Goal: the eye feels harmony [his words]. Render at 1440 and 390, run `scripts/measure.js`, then tick every item. A "no" in the first two groups blocks delivery.

**Colour and focus**
- [ ] One brand hue, only on the primary action(s) and on eyebrows or tiny labels. Count the uses.
- [ ] Every grey comes from one ramp tinted toward the brand hue (a blue brand gets blue-greys, not warm ones): no #000, no stray hex between steps.
- [ ] Semantic colours only on real states; no gradients on text, badges or buttons beyond the canon sheen. A subtle gradient on a surface or hero card is fine when it adds beauty without saturating [his words].
- [ ] Emojis: none, or a single one that adds value, counted in the colour budget; none decorative, repeated or beside the accent.
- [ ] One focal point per screen; one filled primary per block; at most two actions in a hero.

**Hierarchy and space**
- [ ] Every spacing, size and line height is on the scale (6 and 10 are steps, 10 only inside small components; 36 tolerated; 44 and 52 as heights; 28 only as a type size). No 28 as spacing, no 45, 49, 59, 67 or odd values.
- [ ] One section token per breakpoint (e.g. 112 / 72); section heads follow eyebrow 8, title 20, lede 56, content.
- [ ] Proximity: every label and meta sits closer to what it describes than to the next group; the outer gap is ≥7× the inner.
- [ ] The type ladder has clear jumps and no 11, 13, 15, 17, 22 or 44. One family (a serif only for reading, names or display). Headings at 630 and −0.044em, or 500 at tracking 0 in the Christicons register.
- [ ] Logo, page title and content share one x; grids divide with no remainder; no orphan in the last row; 2–4 px misalignments checked.

**Components**
- [ ] Siblings share height, radius, padding and structure: all fields one height, all cards one structure, one chip size.
- [ ] Radii are concentric: child smaller than parent; with small padding, inner = outer − padding; never left nearly square; no 12 beside a 16.
- [ ] Buttons on his heights (40/44/52/60, or 32/40/52/64), side padding twice the vertical (8/16, 12/24, 16/32), icon gap 10, sentence case, no repeated Save.
- [ ] Every state drawn: hover (one step), press (.97), visible focus ring, disabled, loading (skeleton matches the geometry), empty (anchor + line + action), error.
- [ ] Shadows only on floating layers (or the .03 card shadow); photos carry stacked scrims.

**Legibility and interaction**
- [ ] Small text reads by eye at real size and distance (in his palettes, gray-600 or darker); placeholders, counts and footer heads still read; text over images is readable.
- [ ] Touch targets ≥44 on mobile: the menu button, text links, close buttons, tab-bar items.
- [ ] Inputs have real labels (visible above or inside the field once filled in forms of more than 2–3 fields), autocomplete and 16 px text on mobile. Accordions and menus expose `aria-expanded`; Escape closes overlays and focus returns.
- [ ] Motion on his tokens (140 / 180 / 220 ms, `cubic-bezier(.23,1,.32,1)`): no ease-in entrances, hover gated to fine pointers, everything removed under reduced motion, no counters stuck at "0+".
- [ ] Mobile is restructured, not shrunk; floating bars fade the content beneath; no horizontal scroll.

**Final**
- [ ] Real, fitting content. Microcopy short and imperative ("Join free", "Browse more content"); placeholders with real data ("Search 61 icons...").
- [ ] Squint test: does anything pull the eye without a reason? If so, remove it or quiet it. Deliver only what he would sign.

## 4. Tokens

### 4.1 Spacing

**Scale** [his words]: 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96, 112, 128, 144, 160, then +16 (176, 192, 208, 224, 240…). It applies to spacing, type sizes and line heights.
- **10** is his value for a small-component distance where 8 feels tight and 12 loose ("no me convence el 8 ni el 12") [his words]. Never use it for section, card or layout gaps (see "Where 10 is right" below), and never flag it.
- **6** is a regular step. **36** is tolerated when the composition calls for it [his words].
- **44 and 52** are component heights, not spacing (both canon sites code them as control sizes) [Cathopic code][Christicons code].
- **Avoid** 28 (Cathopic's 7.5 key, which he has not validated), odd values, and the heights 45, 49, 59 and 67 that come from padding plus line height. Set an explicit height instead.

**Tailwind remap** he codes [Cathopic code]: 1=2 · 2=4 · 1.5=6 · 3=8 · 4=12 · 5=16 · 6=20 · 7=24 · 8=32 · 8.5=36 · 9=40 · 9.5=44 · 10=48 · 11=56 · 12=64 · 13=72 · 14=80 · 15=96 · 16=112 · 17=128 · 18=144 · 19=160 · 20=176 · 21=192 · 22=208 · 24=240, plus `[10px]` as an arbitrary value. Cathopic also maps 2.5 to 6 (an ordering quirk) and keeps 3.5=14 and 7.5=28, which `assets/tailwind-preset.js` leaves out. Christicons uses the same mapping for the keys it defines [Christicons code]. `assets/tokens.css` and `assets/tailwind-preset.js` encode this section in code.

**Usage map** (desktop → mobile)

| Distance | Value | Source |
|---|---|---|
| Icon ↔ label inside a button | 10 (sm 8, lg 12) | [Cathopic code] .btn gap |
| Icon ↔ label in a menu, dropdown or list row | 12 | [Cathopic DOM]; [app board ~] |
| Checklist: icon ↔ text; row ↔ row | 8; 10 | [Cathopic DOM] pricing |
| Label ↔ its field | 8 | [his words] test, 8/24/32 |
| Card label ↔ control group | 20 → 16 | [Christicons DOM]; [app board ~] 16–20 |
| Field ↔ field | 24 | [Cathopic DOM] auth; [his words] |
| Last field ↔ submit button | 32 | [Cathopic DOM] auth |
| Form block ↔ form block (heading, fields, switch link, legal) | 56 | [Cathopic DOM] auth |
| Title ↔ helper text under it | 2–4 | [app board ~] |
| Title ↔ meta or byline | 4–8 (6 in Christicons cards) | [Cathopic DOM][Christicons DOM] |
| Chips in a row; pill tabs in a row | 8; 4 | [Cathopic DOM] |
| Two round icon buttons | 10–12 | [Cathopic DOM] tile overlay 10, slider arrows 12 |
| Two CTAs side by side | 16 (stacked on mobile, 16 apart) | [Cathopic DOM] contribute |
| Card padding: small / medium / large | 24 / 32 / 48 → 16–20 / 24 / 36 | [Cathopic DOM]; [Christicons DOM] tile 24 |
| Card gap | 24 (Cathopic) or 20 (Christicons) → 16 (12 for small tiles) | both canon |
| Gap between text columns | 48 or 64 | [Cathopic DOM] 48 / footer 64; [Christicons DOM] FAQ 64 |
| Main column ↔ side panel | 32 | [Cathopic DOM] detail |
| Icon ↔ title in a feature card; card title ↔ text | 32; 12 | [Cathopic DOM]; [Flodesk ref] 12 |
| Eyebrow → heading | 8 | both canon |
| Heading → lede | 20 → 16 (Christicons 20 → 12); hero H1 → sub 24; page intro 16 | [Cathopic DOM][Christicons DOM] |
| Lede → CTA | hero 48 → 40; page intro 40; dark CTA band 56 → 32 | [Cathopic DOM] |
| Heading block → content | 56 (also on mobile) or 64 → 40 | [Cathopic DOM]; [Christicons DOM] |
| Content → closing CTA of the section | 64 under a card grid; 72 under a masonry | [Cathopic DOM] |
| Site header → page title; page header → content | 96 → 56; 96 | [Cathopic DOM] search, collections, legal |
| Section ↔ section | 112 → 72 (Cathopic) · 96 on each side of a band edge → 80 (Christicons) · 240 → 160 (Flodesk landing) | [Cathopic DOM][Christicons DOM][Flodesk ref] |
| Grey band padding; light strip right under the hero | py 112 → 72; py 56 | [Cathopic DOM] |
| Hero padding | photo hero 192 → 112; typographic hero 96 → 80 top, 96 → 72 bottom [fix: 73] | [Cathopic DOM][Christicons DOM] |
| Footer | mt 112, pt 64, pb 24; or the last section drops its pb and the footer opens with pt 192 | [Cathopic DOM]; [Christicons DOM] |

**Where 10 is right.** A distance inside a small component where 8 reads cramped and 12 loose: icon ↔ label in 48–52 buttons [Cathopic code]; badge and savings-pill padX [Cathopic DOM]; checklist rows [Cathopic DOM]; icon ↔ text in a trending chip [Cathopic DOM]; between two 52 round buttons [Cathopic DOM]; logo ↔ version tag and the inner gap of a small input [Christicons DOM]; −10 hover-plate insets and the padY of the legal-nav pills [Cathopic DOM]. As a radius: header menu items, semi-rounded buttons on mobile and filter selects [Cathopic code]. Never use 10 for section, card or layout distances.

### 4.2 Type

**Families**
- **Product and marketing:** one sans. Use Inter variable, antialiased, with `font-feature-settings: "calt","cv01","liga","ss03"` (headings add `"cv11"`) [Cathopic code]. Or use Basier Square, with Basier Square Mono only for meta and system text ("Created by:", MENU, package names) [Christicons code].
- **Display serif, where it fits** (editorial pages, portfolio, brand moments, the emotional headline of a gated or destructive moment; never product chrome): Instrument Serif 400, line height 1.0–1.25, tracking −1px at 64 and −0.5px at 48 [portfolio][app board ~ W1, H2].
- **Reading serif for long text** (scripture, articles, devotional text): a text serif with wedge serifs and a large x-height, of the Tiempos or Source Serif type [app board ~].
- Serif for content and names (the user's name, books, feasts, programmes); sans for chrome, labels and controls [app board ~]. Two families at most.

**Ladder** [his words]: 12, 14, 16, 18, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96… Both canon sites also code 28, and Cathopic codes 36 [Cathopic code][Christicons code]. Use 10 only for micro labels (tab-bar labels, a version tag) [app board ~][Christicons DOM]. Round 11, 13, 15, 17, 22 and 44 to 12, 14, 16, 16 or 18, 24 and 48. Line heights set in px land on the scale [his words].

**Product UI register** [Cathopic code][Cathopic DOM]

| Role | Desktop → mobile | Weight | Tracking | Colour |
|---|---|---|---|---|
| Page title | 48/55.2 → 28/32.2 [fix: 44 on search pages] | 630 | −0.044em | ink |
| Section title | 40/46 (36 ≥1100, 32 ≥768) → 28/32.2 | 630 | −0.044em | ink |
| Panel or large-card title | 24/27.6 | 630 | −0.044em | ink |
| Card title | 20/23 → 18/21.6 | 600 | −0.035em | ink |
| Small heading, FAQ question | 18/20.7 or 16/18.4 | 600–630 | −0.035em | ink |
| Body | 16/24.8 → 14/21.7 (line height 1.55) | 400 | 0 | ink; secondary gray-600/700 |
| Button, nav | 16; 14 in 40 buttons | 550 | 0 | — |
| Field value | 16/24, also on mobile [fix: 14 makes iOS zoom] | 600 | 0 | ink |
| Meta, label, caption | 12/18 to 14/21.7 | 400–500 | 0 | gray-600 |
| Eyebrow | 14/21.7 → 12, uppercase | 600 | 0 | brand |
| Micro label (drawer section, footer head) | 12, uppercase [fix: 11 and 13] | 400–600 | 0, never negative on caps [fix] | gray-600 (gray-500 on dark) |
| Price | 48/55 | 630 | −0.044em | ink |

- **Christicons variant** [Christicons code]: hero and section titles 32/38.4 at 500 (28 and 24 on mobile), card title 20/24, FAQ question 18/21.6 (16), body 16/23.2 (14/20.3), caption 12/18, nav 16 [fix: 15]. Tracking 0 everywhere, weights 400 and 500 only. Hierarchy by grey step: the second headline line is gray-500 at the same size and weight.
- **App variant** [app board ~]: sheet titles 16–18 medium, rows 16 regular, buttons 16 semibold, helpers 12, serif user name ~20–22 semibold. Weights 400, 500 and 600.

**Marketing and editorial register**

| Role | Value | Source |
|---|---|---|
| Hero display | 64/64, 630, −0.044em → 36/41.4 (Cathopic measures 60.56/1.0; its 7xl key is 64). Or 64/64, 500, −0.02em → 32/32 | [Cathopic DOM][Flodesk ref] |
| Display line length | 23–28 characters, 2 lines on desktop, 3 on mobile | [Cathopic DOM][portfolio] |
| Section display | 48/48 → 24/24, or 40/46 → 28 | [Flodesk ref]; [Cathopic DOM] |
| Closing CTA heading; stat numerals | 80/80; 160/160 over 12–14 captions | [Flodesk ref] |
| Lede | 18/27.9 at 500 on a photo (#CED6D6), or 16/24.8 gray-600; two lines, 436–600 wide | [Cathopic DOM]; [Flodesk ref] |
| Serif display | Instrument Serif 64/80 → 48 | [portfolio] |
| Reading | serif 18/28 on desktop, 16/24 on mobile and app (measured ~16–17 / 25–28); 46–50 characters in the app, a 620–700 column on the web; 16 between paragraphs | [app board ~]; [Cathopic DOM] legal 675 |
| Editorial details | 3-line drop cap on intros, grey superscript verse numbers, verse 1 unnumbered, typographic quotes “ ” | [app board ~]; [dimconex] |

**Case.** Sentence case for headings, buttons and labels; a statement heading may end with a full stop [Christicons DOM]. Uppercase only for tiny labels (eyebrows, badges, footer heads). Never mix Title Case and sentence case on one screen [fix: "Share Collection", "Sign In"].

### 4.3 Radii

Ladder [Cathopic code]: 2, 4, 8, 12, 16, 20, 24, 32, 9999 (plus 10 for the uses listed in 4.1).

| Element | Radius | Source |
|---|---|---|
| Every button, chip, tab, toggle, search field, segmented control and badge | 9999; icon-only buttons are circles | [Cathopic DOM] ×47 on the home |
| Menu and dropdown items, UI thumbnails on mobile | 8 (10 for header menu items) | [Cathopic DOM] |
| Inputs, dropdown panel, semi-rounded buttons (≥768), UI thumbnails, icon buttons inside cards | 12 | [Cathopic DOM] |
| Small cards, accordion items, inner panel cards, mobile cards | 16 | [Cathopic DOM] |
| Feature cards, side panels, the detail media box | 20 | [Cathopic DOM] |
| Large cards (collection, pricing, use case), dialogs, the top of a sheet | 24 | [Cathopic DOM][Christicons DOM][app board ~] |
| Hero or CTA band, floating player | 32 | [Cathopic DOM][app board ~] |
| Photography in browse grids, the auth collage, full-bleed images | 0 | [Cathopic DOM] |

- **Christicons variant:** one token, 16, for every control and card; 14 for small controls; 24 for dialogs; pills only for icon-only buttons, swatches, the slider and the avatar [Christicons code].
- **Concentric rule** [his words]: a child's radius is smaller than its container's. With small padding, inner = outer − padding: a 24 card with 8 padding gives a 16 image [portfolio]; a ~24 sheet holds ~10–12 fields; a ~12 card holds ~6 thumbnails [app board ~].
- **His exception:** if the subtraction leaves the child nearly square, step it back up a little "so it doesn't look broken". Cathopic's 24 collection card has 32 padding, so its tiles take 12, not 0; the detail panel (20, padding 40) holds a 16 card (padding 24), which holds 12 buttons [Cathopic DOM].
- **Pills nest in pills:** a segmented track with padding 4 holds a pill thumb; the 64 hero search holds a 48 pill inset 8 [Cathopic DOM].
- **Siblings share one radius.** No 12 button 4 px from a 16 field [fix: Christicons Subscribe]; no 18 popover around a 14 field with 8 padding: 14 + 8 = 22 is off the ladder, so use a 24 popover around a 16 field [fix: Christicons popover].

### 4.4 Depth, borders and scrims

- **Tint separates surfaces first:** gray-100 on white, or white on gray-100; the canon draws no lines between sections [Cathopic DOM][Christicons DOM][Flodesk ref]. When a divider is wanted, one subtle line between sections is welcome; a line on every row saturates [his words].
- **Cards:** no shadow, or `0 3px 6px rgba(0,0,0,.03)`. Small lift (pricing card, toggle thumb): `0 1px 2px rgba(0,0,0,.05)` [Cathopic code].
- **Buttons** [Cathopic code]:
  - rest `0 1px 2px rgb(20 24 25/.045), 0 1px 1px rgb(20 24 25/.025), inset 0 1px 0 rgb(255 255 255/.1)`;
  - filled `0 1px 2px /.07, 0 2px 8px /.05`; hover `0 4px 10px /.085, 0 1px 3px /.05`; active `inset 0 1px 2px /.1`;
  - sheen on filled buttons `linear-gradient(rgba(255,255,255,.06), rgba(0,0,0,.016))`; on the white button `linear-gradient(rgba(255,255,255,.72), rgba(20,24,25,.02))`.
- **Floating layers only:** dropdown `0 10px 50px rgba(0,0,0,.15)`; search panel `0 10px 30px rgba(0,0,0,.12)`; drawer `0 15px 60px rgba(0,0,0,.18)` [Cathopic code]; popover `0 20px 60px rgb(11 10 8/.14)` [Christicons code]. With a warm palette, tint large shadows with the ink, never an untinted shadow-xl [fix: Christicons dialog].
- **Borders:** 1px gray-200 only for white on white (white buttons, testimonial and help cards) [Cathopic DOM]; an inset 1px gray-300 ring for a white card on white [Christicons DOM]; 1px gray-400 on outline inputs [Christicons DOM]; 1px rgba(67,75,77,.5) on dark [Cathopic DOM].
- **Hairlines** go under a section header row, above legal text, at a band edge and between mobile accordion rows. Never one per list row [his words][app board ~]; platform-standard inset separators (iOS grouped lists) don't count as one. FAQ rows may use a 1px dashed gray-300 [Christicons DOM].
- **Overlays:** rgba(20,24,25,.6) behind drawers, the search panel and the megamenu [Cathopic code]; rgb(11 10 8/.25) behind dialogs [Christicons code].
- **Text over photos:** stacked scrims, never one flat layer [Cathopic DOM]:
  - the hero uses 4 layers in rgba(3,7,18,.14→.72): vertical, top radial, side vignettes and centre radial;
  - the tile overlay is a 15-stop black ease gradient, 55% at the top fading to 0 by ~50%;
  - a cover fades into white with an 85% easing gradient.
- **Backdrop blur:** 12 on blur buttons and media badges, 40 on segmented tracks [Cathopic code]; 6 on a sticky header at white/.9 [Christicons code].

### 4.5 Colour

**Recipe** [his words]
1. Choose the brand colour from the project's context.
2. Build a 100–900 ramp from it. The canon adds a 50 for pale fills; 500 is the default action, 600 hover, 700 pressed or divider.
3. Tint the greys with the brand (or with the product's temperature) in steps of 50: 9 to 12 steps. The darkest is the ink, never #000.
4. Add semantic ramps (success, info, warning, danger) consistent with the brand, each with a pale 50 background and a dark text step.
5. Assign roles before screens: page white; surface gray-100; hover one step darker; hairline gray-200; placeholder gray-500; secondary text gray-600; strong secondary gray-700; ink 900. Secondary text is a ramp step, not opacity [Cathopic code]. Flodesk's 65%-opacity ink is the referent's way, not his.

**Worked example 1: Cathopic** (cool, teal-tinted greys) [Cathopic code]
- Grey: 50 #FBFDFD · 100 #F4F7F7 · 200 #E3E8E8 · 300 #CED6D6 · 400 #ABB6B7 · 500 #838F91 · 600 #636D6F · 700 #434B4D · 800 #272D2F · 850 #1F2526 · 900 #141819 (ink) · 950 #0B0E0F. Plus #ECF0F0, named 250 though it sits between 100 and 200: the fill of inputs and the search field.
- Primary teal: 50 #E6F7F7 · 100 #CDF0F1 · 200 #A3E1E5 · 300 #74CCD3 · 400 #45B2BD · 500 #007D8C · 600 #006C7A · 700 #005A67 · 900 #003D47.
- Semantic: success #088E4D (600 #00783E, bg #E9FAED) · info #0396C6 (600 #007DA7, bg #E8F8FF) · warning #F2BD00 (700 #A68000, 800 #7F6200, bg #FFF8E2) · danger #E22D45 (700 #97182A, bg #FFEFEE).
- Roles: teal only on primary buttons and eyebrows. Ink #141819 is the second "loud" colour: the active tab, the dark band, the footer, the overflow tile, dark buttons. Hero text #F4F7F7 over a #CED6D6 lede.

**Worked example 2: Christicons** (warm greys, teal kept tiny) [Christicons code]
- Grey: 100 #F6F5F2 · 200 #EFEDE8 · 300 #E8E5DF · 400 #D7D2C9 · 500 #978F84 · 600 #756E64 · 700 #524C43 · 800 #0B0A08 (ink).
- Brand 500 #2D6970, only on the overlines and the footer credit hover. Semantic, muted to match: success #4A7C59 · info #3D6E9B · warning #C79C38 · danger #A1443C.
- Roles: the primary button is ink; tiles gray-100, hover gray-200; third-party logos forced to gray-500.
- **App variant:** blue-black ink ~#131B22 for text and the primary fill, secondary fill ~#EAEAEC, the brand red at most once per screen [app board ~].

**Accent budget per screen**
- **One brand hue.** It goes on the single primary action of each block and on eyebrows or tiny labels, nowhere else [his words test]. Cathopic's home uses teal on 3 text runs plus primary buttons [Cathopic DOM]; Christicons spends 2 of ~230 text runs [Christicons DOM].
- **Ink is the second emphasis colour:** selection, the dark CTA band, the footer [Cathopic DOM].
- **Semantic colours only where a state exists** (verified, saved, error, discount), as tinted pills [Cathopic DOM].
- **Colour lives in content** (photos, category strips, a reading highlight), not in chrome [Flodesk ref][app board ~].
- **Over colour or imagery, step text with opacity**, never one flat white, and in as few tones as possible: white at 100 for the headline and the key datum, about 60–64 for secondary text, one level for a whole icon set, not one per row [his words].
- **Emojis count in the budget** [his words]: "No soy contrario al uso mínimo de emojis, siempre que aporte realmente un valor. Pero teniendo en cuenta que el emoji aporta color también."
  - One emoji is fine when it truly adds value (meaning a word or line icon would not carry). It counts against the colour budget, so it never sits beside the accent or another coloured element.
  - Flag emojis that are decorative, repeated or add colour noise. Christicons has none; Cathopic's only one ("👉 How it works?") is decorative and sits next to the teal step numbers, so it goes [Christicons DOM][Cathopic DOM].
- **Never:** a second accent for one button (the info-blue Follow), gradient text in navigation, an animated multicolour gradient, amounts in different colours, gradients on badges [fix: Cathopic][his words critiques].
- **Contrast by eye:** judge text at its real size and viewing distance [his words]. In his palettes that puts small text (≤14) at gray-600 or darker. Christicons' gray-500 at 12 px and Cathopic's gray-400 tab counts read faint [Christicons DOM][Cathopic DOM]. A placeholder may sit at gray-500. A measured ratio (as in the [fix] notes) only backs the eye in an audit; WCAG is context for public products, never a blind numeric rule.

### 4.6 Motion

Tokens [Cathopic code]: `--dur-press 140ms` · `--dur-hover 180ms` · `--dur-popover 180ms` · `--dur-exit 160ms` · `--dur-modal 220ms` · `--ease-out cubic-bezier(.23,1,.32,1)` for hover, press, popovers, overlays and entrances · `--ease-in-out cubic-bezier(.77,0,.175,1)` for sliding indicators and accordions · `--ease-drawer cubic-bezier(.32,.72,0,1)` for drawers and sheets. Christicons uses the same curves at 80–240 ms [Christicons code].

| Interaction | Spec | Source |
|---|---|---|
| Button hover | background one ramp step + hover shadow, 180 ms ease-out | [Cathopic code] |
| Press | scale .97 (.99 on cards), 140 ms | both canon |
| Dropdown or popover | enter from translateY(4px) scale(.98), opacity 0, 180 ms, origin top; exit 160 ms | [Cathopic code] |
| Dialog | enter from translateY(8px) scale(.96), 220 ms; leave to translateY(6px) scale(.97), 160 ms; backdrop opacity 220 ms | [Christicons code] |
| Drawer or sheet | transform 200 ms on --ease-drawer [fix: ease-in .75,0,1,1] | [Cathopic code] |
| Accordion | max-height 220–240 ms ease-in-out + opacity 160–180 ms ease-out; the plus rotates 45° or the chevron flips | both canon |
| Segmented indicator | width and left, 220 ms ease-in-out | [Cathopic DOM] |
| Tile overlay or action tray | opacity + visibility 220 ms (tray translateY 180 ms) | [Cathopic DOM][Christicons DOM] |
| Inline expand (filters row, customize panel) | height and opacity, 200–220 ms | both canon |
| Page overlay | opacity 200–300 ms | [Cathopic DOM] |

- Hover effects only under `(hover:hover) and (pointer:fine)`; touch gets tap-to-reveal [Christicons code].
- `prefers-reduced-motion` removes transitions, scale, marquees and price rolls [both canon].
- No bounce, no colour jumps, no counters that show "0+" until they animate, no animated gradients or rotating borders [fix: Cathopic].
- Ambient motion only on edge pages, and slow: the auth collage loops in 360–720 s, the 404 photos fade on a 9 s cycle [Cathopic DOM].

## 5. Layout recipes

**Containers and measures**
- **Cathopic:** max-w 1440 with px 64, so content is 1312; px 16 on mobile (358). Narrow containers: 1000 + 128, 960 + 128, 450 + 128 [Cathopic code].
- **Christicons:** one centred 1000 column (x220 at 1440); header and footer at px 64 [Christicons DOM].
- **Flodesk:** a framed page, with full-bleed panels inset 40 at radius 24 (content 1360), a 1080 table and an 896 FAQ [Flodesk ref].
- **Measures:** display 637–750; lede 525–600 (max-w 550 or 600); reading 620–700; FAQ 700–875; auth stack 450; dialogs 448 or 512 [Cathopic DOM][Christicons DOM].
- **One gutter per site:** the logo, page titles and content start on the same x, as in Flodesk's 40 [Flodesk ref] [fix: Cathopic's header 32 / content 64 / detail page 40].
- **Mobile margin** 16; 20 on auth and form pages and inside app sheets [Cathopic DOM][app board ~].
- **Breakpoints:** 640, 768, 1100, 1300 [Cathopic code].

**Grids.** Columns divide the container with no remainder: (container − (n − 1) × gap) / n is a whole number.
- 1312: 4 × 310 + 3 × 24 (cards); 3 × 421 + 2 × 24 (masonry and plans; 421.33 rounded) [Cathopic DOM].
- 1360 at 40 gutters: 904 + 32 + 424 (media + side panel) [Cathopic DOM].
- 1000: 6 × 150 + 5 × 20 (tiles); 3 × 320 + 2 × 20 (cards); 2 × 468 + 64 (text columns) [Christicons DOM].
- 358 on mobile: 2 × 171 + 16 [Christicons DOM]; 2 × 173 + 12 [Cathopic DOM].
- 1280 at 80 margins: landscape 16:9 rows in 4 columns, portrait 2:3 rows in 6 columns, gap 20 [app board ~ W1].
- 2–6 columns on desktop, 1–2 on mobile. Don't leave an orphan alone in the last row: change the count or let it span [fix: 5 category cards in 2 columns].

**Vertical rhythm**
- One section token per breakpoint: 112 / 72 (Cathopic), 96 per band edge / 80 (Christicons), 240 / 160 (Flodesk landing).
- Section header stack: eyebrow → 8 → title → 20 (16 on mobile) → lede → 56–64 (40–56 on mobile) → content [both canon].
- Proximity ladder: 6–16 inside a component, 48–64 from intro to content, 96–192 between sections. The outer gap is at least 7× the inner one [Cathopic DOM][Christicons DOM].
- The last section hands its bottom space to the footer (pb 0 and footer pt 192), or the footer takes mt 112 [Christicons DOM][Cathopic DOM].
- A one-column mobile grid must not bury what follows: cap it with a full-width "Load more" pill instead of 7 screens of masonry [Cathopic DOM collections] [fix: Cathopic home].

**Header (web)**
- **Cathopic** [Cathopic DOM]: 72 tall (64 on mobile), sticky, white, no border or shadow. Logo 176×40 → 24 → search 489×44 → 24 → nav items (40 tall, px 16, radius 10, 16/550 gray-600, ink when active, colour only) → a 1×36 #E3E8E8 separator with 16 on each side → "Sign in" as a text button → 16 → one filled "Join free" pill of 40.
- **Christicons** [Christicons DOM]: 64, sticky, white/.9 + blur(6px), 1px gray-200 bottom border. Logo and right block sit in equal fixed boxes (170) so the nav lands on the true centre. 4 links, gap 32.
- **Mobile** [Cathopic DOM]: 64, px 16: a menu button with a 44 target [fix: 36], the logo mark, a 40 search circle and the one CTA at 40. The menu is a 300 white drawer over rgba(20,24,25,.6), padding 20.
- **Funnel and edge pages:** pricing and checkout drop nav and search; auth and 404 have no header or footer [Cathopic DOM].
- 3–4 visible links and one filled CTA on the right. Never 13 controls [fix: W1].

**Header (app)** [app board ~]
- **Root screen:** a large title on the left (~24 medium) and one or two 40 circles on the right (menu, share), translucent over imagery.
- **Sheet or modal:** three slots. A 40 back or close circle (#EAEAEC) on the left; a centred title (16–18 medium) or context pill (~160×36); an action pill (Save, ~60×40) or nothing on the right. 20 from the top and sides.
- **On scroll:** solid white with a soft shadow (no hairline), and the centred context pill appears.

**Hero patterns**
1. **Photo + search** (content product) [Cathopic DOM]: full-bleed photo running under the header, 4 stacked scrims; a centred 750 column, py 192 (112 on mobile). Display H1 on 2 lines → 24 → lede 18/500 → 48 → a 700×64 white search pill (56 left padding, a 48 Search pill inset 8). One action only.
2. **Typographic catalogue hero** (tool) [Christicons DOM]: pt 96; a two-tone H1 32/38.4 at 500 (ink line + gray-500 line), no paragraph → 48 → a 52 control row (search 400 + 12 + secondary 156) → pb 96 → the product itself.
3. **Persuasive hero** (landing) [Flodesk ref]: H1 64/64 at 500 on 2 lines → 16 → 2-line subcopy, 436 wide → 32 → one 64 pill with padX 32 → ~48 → a content marquee bleeding off both edges.
4. **Centred page intro** (conversion page) [Cathopic DOM pricing, collection]: a code badge or "Crafted by" pill → 24 [fix: 28] → H1 48 → 16–20 → lede 600 wide → 48 → one action.
- At most two actions. With two, one is filled and the other white or outline, 16 apart [Cathopic DOM contribute][portfolio].

**Footer**
- **Dark** [Cathopic DOM]: #141819, mt 112, pt 64, pb 24.
  - Brand column 275 (logo 176×40, a 14 [fix: 13] gray-500 blurb) + 4 link columns of 183 with gap 64.
  - Column heads 12 uppercase gray-500 [fix: 13 gray-600, 3.36:1], tracking 0, mb 40.
  - Links 14/600 gray-400 at a 38 pitch; hover #F4F7F7 plus an ::after plate rgba(67,75,77,.15) at inset −10/−16.
  - Bottom bar: 1px rgba(67,75,77,.5) top border, pt 24. Mobile: 2 columns, gap 64.
- **Light** [Christicons DOM]: pt 192 → a full-bleed 1px gray-200 rule → 24 → one bar (links gap 24 | © | credit) in 14 [fix: 13] gray-600 → pb 24. Centre the © on the true page centre with equal side blocks [fix: 32 px off]. Mobile: a centred stack, gap 40.
- **Framed** [Flodesk ref]: a #F0F0EB panel inset 40, radius 24, padding 64; links 14/20 on a 24 step; legal 12/16.

## 6. Component recipes

Defaults are Cathopic [Cathopic code][Cathopic DOM] unless another tag says otherwise.

**Buttons**

| Size | Height | Padding | Text | Icon, gap | Use |
|---|---|---|---|---|---|
| xs | 40 | 8/16 | 14/550 | 20, 10 | header actions |
| sm | 44 | 12/24 [his rule; Cathopic codes 12/16] | 14 (16 ≥768) | 18, 8 | mobile secondary, dropdown pill, 404 |
| default | 52 (48 below 768) | 16/32 [his rule; Cathopic codes 16/24] | 16/550 | 20, 10 | in-card, hero, forms, auth |
| lg | 60 (56 below 640) | 16/32 (48 for a wide white "Browse more") | 16 (18 ≥640) | 20, 12 | section CTAs, pricing |
| icon-only | circles of 40 / 44 / 52 / 60 | — | — | 20 | |

- **Padding rule** [his words]: side padding is twice the vertical padding, so a button never looks square. With a fixed height, padX = height − line height.
- **Christicons variant:** 32 / 40 / 52 / 64, radius 16, gap 12, weight 500 [Christicons code].
- **Variants:**
  - Primary: brand (#007D8C → hover #006C7A), or ink (Christicons gray-800 → 700; app ~#131B22; the Pricing beta's black).
  - White: 1px gray-200; hover border gray-500 + bg gray-100. Light: gray-100 → gray-200, no border.
  - Dark: ink, 75% on hover. Gray: rgba(227,232,232,.75) → rgba(206,214,214,.75). Primary-outline: 1px brand, hover bg brand-50.
  - Tertiary: a text link, gray-600 → ink, no shape.
- Icons take the text colour, opacity .9 → 1 on hover; at 50% inside white and light buttons.
- **Do:** one filled primary per block, the second action white or text; full width in pricing cards, modals and auth; pricing CTAs on one shared baseline.
- **Don't:** two filled buttons side by side, uppercase labels [fix: Christicons SUBSCRIBE], a 12-radius button next to a 16 field, shapes on tertiary links.
- **States:**
  - hover as above; active scale .97 with the inset shadow;
  - focus-visible: a 2px ink ring at offset 2 [Christicons DOM tiles] [fix: Cathopic's 10%-teal ring is invisible];
  - disabled: opacity .3 [Cathopic code]; in the app, a solid mid-grey (~#8A8E91) with white text [app board ~];
  - loading: a 24 spinner, 1 s linear.
- **Destructive:** one centred danger pill (#E22D45, hover #97182A) in a confirmation sheet, or an isolated red text link at the bottom of a settings sheet [app board ~].

**Search bar**
- **Header** [Cathopic DOM]: a 489×44 pill.
  - Rest: fill #ECF0F0 (hover one step to gray-200), padding 16 20 16 48, an 18 icon at x20 in gray-600, text 16/24/550, a gray-600 placeholder naming real content ("Search by saint, feast, or theme").
  - Focus: it grows to 56, turns white and opens a panel of the same width (radius 0 0 16 16, 1px gray-200 top, padding 8, shadow `0 10px 30px /.12`) over a rgba(20,24,25,.6) page overlay.
  - Panel sections ("Recent searches · Clear", "Trending searches", "Upcoming dates") with 16/18.4/600 titles, mb 16, and 40 chips.
- **Hero** [Cathopic DOM]: a 700×64 white pill, pl 56 for the icon, a scope dropdown and a 48 Search pill inset 8. On mobile, a 358×52 button (pl 20, pr 4) with a 44 brand circle.
- **Tool** [Christicons DOM]: 400×52, radius 16, 1px gray-400 (hover and focus gray-500, plus a focus ring [fix]), a 24 icon 20 from the left, pl 52, a 32 clear circle 12 from the right, a placeholder with live data ("Search 61 icons..."). Add a result count in an aria-live region [fix].
- **Mobile header:** a 40 round icon button with a 1px gray-200 border [Cathopic DOM].

**Inputs and labels**
- **Filled** (Cathopic auth): 52 tall, radius 12, no border, fill #ECF0F0, padding 16/20 (16/16 on mobile), value 16/24/600 (16 on mobile too [fix: 14]), placeholder gray-500. Hover gray-200; focus gray-200 + `inset 0 0 0 2px` ink [Cathopic DOM].
- **Outline** (Christicons): 52, radius 16, 1px gray-400. The small one is 44, radius 14, padding 8/16, gap 10 [Christicons DOM].
- **Label:** above, 8 from the field [his words test], or a small 12 label inside a ~56 box above the 16 value, padding ~16 horizontal and ~12 vertical [app board ~]. Both are his. A placeholder that vanishes on typing is fine only in short forms of 2–3 fields (search, email capture) [his words]. A placeholder-only field still needs a real (visually hidden) `<label>` and `autocomplete` [fix].
- Fields 24 apart; a 12 gray-600 helper 2–4 under its label; read-only fields stay visible in grey [app board ~]. Every field in a form shares one height [his words Settings critique].
- **Checkbox:** 24, radius 8, fill gray-200/75, brand when checked, label 14 gray-700 8 to its right [Cathopic DOM].
- **Error** (not seen in his work): an inset 2px danger ring and a 12 danger-700 message 8 below [derived].

**Chips and filters**
- **Chip:** a 40 pill, padding 8/16, gray-100, 14/550 gray-700, gap 8, shadow `0 1px 2px rgb(20 24 25/.043)`. Hover gray-200 + ink; press .97. Search suggestions are lowercase; trending chips add a 16 icon at gap 10 [Cathopic DOM]. One chip size per product [fix: 48/16 on results vs 40/14 on detail].
- **Row:** horizontal scroll with no scrollbar and a chevron button at the end (36×48, pr 16) [Cathopic DOM]. On grey mobile pages, chips turn white.
- **Filters button:** white, 128×48, 1px gray-200, a 20 sliders icon, gap 10. Open: gray-100 + a 1px ink ring.
- **Filters row:** it expands inline as a 96 row of 56 selects (radius 10, 1px gray-200, px 20, "Orientation:" 16/400 gray-600 + value 16/500 ink, a 10×6 gray-400 chevron that rotates 180°), height and opacity over 220 ms [Cathopic DOM].
- **Option chips (app):** outlined, ~79×40, 6 apart. Selected = #F5 fill + a darker 1px border + a soft shadow; no checkmark, no accent [app board ~].

**Media tiles and cards**
- **Browse masonry** [Cathopic DOM]:
  - Square corners; 3 × 421 with gap 24 (1 column, gap 16, on mobile). Loading: a flat grey gradient.
  - Hover (fine pointer), 220 ms: title 20/23/630 −0.035em #F4F7F7 top-left; bottom-right, two 52 white circles 10 apart → 10 → a 165×52 primary "Download". Cursor zoom-in.
  - Video badge: top-left, 20 inset, a 36 pill in rgba(20,24,25,.6), px 16, gap 10, "00:11 | Full HD" 14/500.
- **Category card:** 178×231, white, radius 16 (12 on mobile), padding 8/8/20, shadow .03; a square image at radius 8 with a 20% scrim, mb 20; label 18/20.7/600 centred. Hover: the scrim fades and a 40 gray-100 arrow slides in 8 px [Cathopic DOM].
- **Collection card** [Cathopic DOM]:
  - 310 wide, radius 24, padding 32: white on a grey band, gray-100 on a white page.
  - A 2×2 mosaic of 246 (gap 6, tiles 120 at radius 12); the 4th tile is ink with "+94" at 18/500 gray-200.
  - Title 20/23/600 on 1 line, mt 24, mb 8; byline 14 gray-600. Hover: background one step, 180 ms.
  - Mobile: horizontal 358×160, radius 16, padding 16, gap 20, with a 128 mosaic (gap 4, radius 8) on the right.
- **Feature card:** gray-100, radius 20 (16), padding 32 (24): a 32 line icon in gray-600 → 32 → title 20/23/600 → 12 → 14/21.7 gray-600. Grid 4 × 310, gap 24, 64 to the CTA. On mobile it becomes an accordion (77 rows, 1px gray-200 bottom borders) [Cathopic DOM].
- **Icon tile** (tool) [Christicons DOM]:
  - 150 square, gray-100, radius 16, padding 24, a centred 24 icon (stroke 1.5, round caps), name 12/18 gray-600 [fix: gray-500], 20 from the bottom.
  - Hover: the tile goes gray-200 and the preview shrinks to sit 4 above a 48 action tray (3 cells, 1px white dividers, 12/500) whose cells turn ink with white text on hover.
  - Copy feedback: an inline overlay in rgb(11 10 8/.9), 160 ms.
- **Card on white:** white, radius 16, an inset 1px gray-300 ring, padding 24 (20); hover gray-100; press .99 [Christicons DOM].
- **App video card:** #F5F5F5, radius ~12; a 16:9 thumbnail at radius ~6 with a white play disc, a grey eyebrow, a medium title and the duration on the right [app board ~].

**List and settings rows**
- **App menu row:**
  - a 20 line icon in grey (~#696E72) → 12 → a 16 regular ink label; a pale chevron only on rows that drill down inside the app [app board ~];
  - height 56 [his words: he chose 56 rows] [fix: ~50.5];
  - dividers between groups, not rows [his words]. Group account, help, session and mission; logout last and set apart [fix: H1].
- **Settings row:** a 16 label with a 12 grey helper 2–4 below, the control on the right (a toggle, or a value chip ~#EFEFEF); 32 between groups [app board ~].
- **Content row** (books): a 2–3 vertical strip in the category colour, a ~20 serif title, a 12 grey meta 4 below, no chevron or icon; 12–16 between items, 24 from the group label to the first item, 48 between groups [app board ~].
- **Web side nav:** pills 44 tall [fix: 45] (padding 10/20), 16/500 gray-600, gap 4, sticky at top 128. Active: gray-200/75 + 600 ink. The pill padding hangs outside the text axis, so the text aligns with the page title [Cathopic DOM].
- **Drawer links:** primary 20/24/600 at −0.035em on a 44 pitch; secondary 16/20/600 on 40; section labels 12 uppercase gray-600 with a hairline. Hover: an ::after plate in gray-100, radius 8, inset −10/−16; the current page keeps it [Cathopic DOM].

**Segmented controls and toggles**
- **Billing toggle** [Cathopic DOM]:
  - track rgba(227,232,232,.5) + blur 40, padding 4, pill; buttons 40 [fix: 41], px 20 (32 on mobile), 16/550;
  - inactive gray-600 → ink on hover; a white indicator with shadow-sm sliding 220 ms ease-in-out; buttons press to .97.
  - The discount goes in green text or a pill beside it, not in a second accent [Pricing beta ~].
- **Option segment** (pricing downloads): gray-100 track, padding 4 [fix: 3], 48 options; selected white, 16/600, `0 3px 6px /.03` [Cathopic DOM].
- **App:** a full-width ~36 pill, track ~#E9E9E9, white selection, active label dark medium, inactive grey regular [app board ~].
- **Toggle:** success green when on, light grey track when off; the row carries a label and a grey description [app board ~]. Dependent controls disable while it is off [fix: H1].

**Tabs**
- **Pill tabs** [Cathopic DOM]: 48 (40 below 640), padding 12/20, 16/550 gray-600, a count 8 after it in gray-500 [fix: gray-400, 2.08:1], 4 apart. Hover gray-100 + ink. Active: ink fill with gray-100 text, inert. Filters sits right-aligned on the same row. Empty tabs dim to .5, never the active one [fix].
- **Mobile:** they collapse into a white 44 dropdown pill ("Photos 1.4k ⌄", padding 12/16) plus a 44 round filter button [Cathopic DOM].
- One navigation language per level: no pill segmented control stacked over underlined tabs [fix: B2]. Underlined tabs, when used: a 2 ink line over a full-width hairline [app board ~].

**Dropdown menus**
- **Panel:** radius 12, white, padding 8, gap 4, shadow `0 10px 50px /.15`, 10 below the trigger, 160–192 wide [Cathopic DOM].
- **Item:** 40 tall [fix: 41] (padding 8/12, 16/24/400 gray-700), radius 8, icon gap 12. Hover gray-100 + ink; the current item looks the same and is inert. Divider: 1px gray-200, margin 8 −8 [Cathopic DOM].
- **Megamenu** [Cathopic DOM]:
  - a full-width white panel, pt 40, pb 72; section titles 12 uppercase gray-600 [fix: gray-500], mb 40;
  - 3 columns of 267, gap 32; item title 20/550 → 8 → 14 gray-600;
  - hover plate inset −12/−16, radius 12, gray-100.

**Bottom sheets (app)** [app board ~]
- White, top radius ~24, no shadow. Grabber ~40×4 in light grey, ~10 from the top. A 20 side gutter for everything; the header 20 from the top. The overlay darkens the art behind to ~#1E2429.
- **Root sheet:** no title bar. A centred identity block (80 avatar [fix: ~84], serif name ~20–22, 8, grey email) with 32–40 around it, one 44 ink pill (hug width, 48 side padding [fix: ~46], leading icon), then the rows.
- Subpages push inside the sheet. Size it to its content or go full height; never leave ~200–370 of dead air under the last control [fix: H1, H2]. Keep the bottom control out of the home-indicator area.

**Modals and destructive confirmations**
- **Dialog** [Christicons DOM]:
  - centred, white, radius 24 (app ~18–20, below the sheet's 24), padding 40 (24 on mobile), max-w 448 or 512; backdrop rgb(11 10 8/.25), no blur;
  - title 24/32 at 500 [fix: 24/30] → 8 → a 14 gray-600 subtitle → 32 → body;
  - close: a 32 ghost circle 16 from the corner with a 44 hit area [fix]. Escape closes it and focus returns to the trigger.
- Actions stacked full width, primary on top, 44 tall, 10 apart [app board ~]. A close X plus Cancel is tolerated [his words test].
- Modals only for off-task flows (newsletter, share, a time picker). Tools open inline: the customize panel, the filters row, popovers [Christicons DOM][Cathopic DOM].
- **Destructive sheet** [app board ~]: only a back button; a centred serif question; a centred grey explanation with no filler ("Please note that…"); an optional consent checkbox that enables the single centred danger pill [fix: H2's pill is live while unchecked].

**Floating tab bar (app)** [app board ~]
- A floating, inset pill of ~309×58, ~32 from the sides and ~20 from the bottom, with a diffuse shadow.
- 5 items, icon over a 10 label. Active: a grey ellipse (#DCDEDF), filled icon and semibold label. Inactive: outline icon and grey label. A glass variant over media.
- Content fades out beneath it, never a hard overlap with text [fix]. His Finance critique asks exactly this: the bar must float over the content, not look flat [his words].

**Badges, status pills and metadata**
- **Status pill** (filled, his test preference): radius full, padding 6/10, 12/1/600 on the pale semantic fill with its dark text: success #E9FAED / #088E4D, danger #FFEFEE / #E22D45, warning #FFF8E2 / #7F6200, info #E8F8FF / #007DA7 [Cathopic code].
- **Savings pill:** 24 tall, px 10, 12 uppercase, #E9FAED / #00783E [Cathopic DOM].
- **Code badge:** a 36 pill, white/50 + blur, 1px gray-200, 14 monospace at tracking .05em, brand text [Cathopic DOM].
- **Technical metadata** (CC, HD, TV-G): outlined in ~1.5 grey, radius ~4, ~22–24 tall, 8 apart [app board ~].
- **Meta line:** 14 gray-600 (12 on mobile) joined by " · " ("@zvonim · 3 Followers · 0 Following", "2026 · Drama · 125 min", "Jonah · Psalms · Luke · +3 more") [Cathopic DOM][app board ~]. Counts sit inline in tabs. Stats take a separator and a plus ("57,600+") and render the real number at rest [fix: "0+"].
- **Details grid:** label 12/18 gray-600 → 2 → value 16/24/500, 2 columns, gap 12; a colour row is a 16 swatch circle + hex [Cathopic DOM].
- **Verified:** an info-blue check in a 28–30 white circle, 20 inset from the card's top-right corner: the only colour on the card [Cathopic DOM].

**Pricing cards and billing toggle**
- 3 × 421, gap 24 (16 on mobile), on a gray-100 page. White, radius 24, padding 48 (36 on mobile), shadow `0 1px 2px /.05` [Cathopic DOM].
- **Inside, in order** [Cathopic DOM]:
  - title 24/27.6/630 with the savings pill on the right → description 14 gray-700;
  - a selector (label 14/550 → a 56 segment) → price 48/55/630 at −0.044em with "/mo" in 14, gap 8 → "Billed annually ($228 per year)" 12 gray-600, mt 12;
  - "What's included" 16/500 → checklist (14 gray-700, 16 check, gap 8, rows 10) → a full-width 60 CTA (52 on mobile).
  - CTAs share a baseline across the cards.
- **Recommended plan:** a pale brand fill, a 1px brand border and a "Recommended" pill; the CTAs may go ink, keeping the brand only for the recommendation [Pricing beta ~]. Every card keeps the same structure [his words Pricing critique].
- **Below the cards:** money-back line → "Included with every plan" 20/500 centred → 4 columns, gap 48 (20 icon → 16 → 16/600 title → 12 gray-700 text), 2 columns at gap 24 on mobile → FAQ [Cathopic DOM]. One discount signal, not strikethrough + % + "Save" [his words planted flaw, low].

**Tables**
- Rows of 56, even in daily-use tools: he prefers air and chose 56 over 40 [his words test]. Go compact only when the task needs many rows visible at once, and say why. Separators between groups, not on every row [his words]. Amounts in one ink colour; a sign or a semantic pill only for state [his words Finance critique].
- **Comparison table on a marketing page:** rows as gray-100 strips, 1080×92, padding 24/48, radius 16, 12 apart, 4 columns at gap 48; on mobile they stack into 2-column rows [Flodesk ref].

**FAQ accordion**
- **Cathopic (pill system)** [Cathopic DOM]: gray-100 items, radius 16, 12 apart, max-w 700 (875 on long pages). Header padding 40 (24 on mobile [fix: 28]); question 16–20/630; a 24 gray-400 plus that rotates 45° and turns ink. Body padding 0 40 40, 16/24.8.
- **Christicons (quiet system)** [Christicons DOM]: rows with 1px dashed gray-300 dividers, padding 32 (24), the first row with pt 0. Question 18/21.6/500; a 20 gray-400 chevron that flips. Answers 16/23.2 gray-600, opening with "Yes." or "No.". 2 columns of 468, gap 64.
- Both: the button exposes `aria-expanded` and `aria-controls` [fix].

**Empty, 404 and loading states**
- **Empty** (his test: concise, but not "too simple"): a visual anchor (a small grey illustration ~140×96 or a 32–48 line icon) → 24 → one 16 line naming the problem → 8 → one 14 grey line saying what to try → 24 → one action (clear the search, browse popular) [Cathopic DOM] [fix: the canon has no way out] [derived: the 8 and the last 24]. Stop every skeleton once the result is known; no decorative emoji [his words].
- **404** [Cathopic DOM]: a full gray-100 page with no header or footer. A centred 600 column (48 inset on mobile): title 48 [fix: 44] → 16 → a 16/500 gray-700 line → 32 [fix: 36, from 20 + 16] → a dark 44 pill with an 18 left arrow at gap 8 ("Back to Cathopic"). Faint floating photos behind (≤.76 opacity, 9 s), inert.
- **Loading:** the skeleton reproduces the real geometry 1:1 with the chrome live, grey pill bars, the last line of each paragraph short, a 1.2 s linear shimmer [app board ~][Cathopic DOM].

**Eyebrows**
- 2–3 words, uppercase, brand colour, tracking 0, 8 above the title: 14/21.7/600 (12 on mobile) in Cathopic; 12/14.4/400 in Christicons [both canon]. One per section header; a valid device [his words].
- In app content, a sentence-case grey eyebrow ("Daily Readings") [app board ~].

## 7. Screen patterns

**Landing** [Cathopic DOM home][Flodesk ref]
1. Header with one CTA.
2. Hero: one focus, one action.
3. Light gray-100 strip (py 56): a 300 intro column → 40 → 5 category cards.
4. Showcase: centred head → 56 → masonry → 72 → a 60 white "Browse more content" pill.
5. Grey band (py 112): left head with a right-aligned outline CTA → 56 → 4 × 310 cards.
6. Dark CTA card: 1312, radius 32, padding 160/112. A 525 text block (32/38.4 title → 24 → 16 #CED6D6 text → 56 → 60 CTA) and a collage bleeding off the right.
7. "Why": centred head → 4 × 2 feature cards → 64 → 60 CTA.
8. Grey band: a snap slider of 375×585 cards (gap 24, padding 48), 48 round arrows bottom-right at gap 12.
9. Trust: a 24/600 heading over a grayscale logo marquee, logos 56–80 tall.
10. Footer.
- 112 / 72 between every section; white and gray-100 bands alternate; one dark chapter plus the dark footer.
- For a pure marketing page, use the Flodesk cadence [Flodesk ref]: 240 / 160 between sections, heading → 48 → content, intro h2 48 → 16 → paragraph → 32 → 64 CTA; bento cards 2 × 668, radius 24, padding 48.

**Pricing** [Cathopic DOM][Pricing beta ~]
- A reduced header, not sticky, on a gray-100 page.
- Centred intro: code badge → 24 [fix: 28] → H1 48 (28 on mobile) → 16 → an 18 gray-600 sub → 80 (56) → billing toggle → 40 → 3 cards.
- Then the money-back line → the included grid → the FAQ (700, centred 40 h2) → footer. 72 between sections on mobile.

**Catalogue and search results** [Cathopic DOM]
- H1 on the left at 48 [fix: 44], 96 below the header, echoing the query in its own case [fix: title-cased query] → 32 → related chips → 96 → tabs with Filters on the right → 40 → a 3-column masonry, gap 24. Filters expand inline as a 96 row.
- Mobile: H1 28, chips scroll, the tabs become a dropdown plus a filter icon, 1 column at gap 16.
- Promo blocks inside the grid stay on the palette: gray-100, static [fix: animated multicolour title].
- Paging: a full-width white "Load more" pill of 64 (1px gray-300), or infinite scroll that still lets the footer be reached.

**Media detail (web)** [Cathopic DOM]
- The site's one gutter. "Related keywords:" 16/600 + 40 chips.
- Media box (gray-100, radius 20, image contained) + 32 + a 424 side panel (gray-100, radius 20, padding 40, gap 24):
  - H1 24/27.6/630 → byline 14 underlined gray-700 → 16 → description 14 gray-700, clamped to 3 lines;
  - action card (white, radius 16, padding 24): 3 grey icon buttons, 52 tall, radius 12, gap 12 → 12 → a split Download (52 primary at radius 12 0 0 12 + a 52 chevron at radius 0 12 12 0 with a 1px brand-700 divider) → 20 → a 12 gray-600 helper;
  - details card (label/value grid).
- Then a related masonry.
- Mobile: a gray-100 page with white cards and white chips; the image full width with square corners and a 44 white "Try" pill 12 from its corner.

**Auth** [Cathopic DOM]
- A 720/720 split, no header or footer. The language globe top-right of the form column.
- Left, a 450 centred stack, py 64:
  - logo mark 48 → 56 → title 28/32.2 → 16 → lead 16 gray-700 → 56;
  - email 52 → 24 → password 52 (a 24 eye toggle 16 from the right [fix: 14]) → 16 → remember row (checkbox + "Forgotten password?") → 32 → a full-width 52 primary;
  - → 56 → "New to X? Sign up now" (44 target [fix: 22]) → 56 → 12 gray-500 legal.
- Right: a gray-100 panel with a slow, rotated collage of square photos that stops under reduced motion.
- Sign-up step 1 asks only for the email, then "Continue". Mobile: one column, gutter 20, title 24, lead 14, button 48, legal hidden below 640. Real labels, autocomplete, 16 input text [fix].

**Settings (web)** [Cathopic DOM legal layout][his words Settings critique]
- Page title on the left, 96 below the header → 96 → a sticky 325 side nav of pill links (padding hanging off the title axis) beside a 675 form column.
- Groups with a 16/600 heading, 32 between groups, fields 24 apart, labels 8 above, every field one height. One Save per form, at its end, never repeated. The destructive area last, set apart.
- Mobile: the nav becomes a horizontal pill scroller (40 tall [fix: 38]) whose text stays on the title axis [fix: indented 14].

**Settings (iOS)** [app board ~]
- A bottom sheet over the live, dimmed screen (§6). Root: identity block + one ink pill + menu rows.
- Subpage: a three-slot header (back | title | Save, disabled until something changes); ~56 fields with the label inside; read-only fields greyed; helpers under the label; external editing through a secondary pill with ↗.
- Destructive: an isolated red link at the bottom → a confirmation sheet. Single values (a time) in a centred dialog.

**Reading screen (app)** [app board ~]
- Pure white. The root header (title + circles); on scroll, a solid header and a context pill ("Genesis 24").
- Section header row: an 18/600 sans title on the left, a compact pill action on the right ("Listen", carrying the screen's only brand-red icon), a full-column hairline below.
- Text: serif 16/24 to 18/28, 46–50 characters, 16 between paragraphs, grey superscript verse numbers, a drop cap on intros; chapter breaks with 48 above, a quiet label and a hairline; the legal attribution at the end in 12 grey sans after a hairline.
- Audio: a floating charcoal capsule (~#4B5056), radius ~32, ~16 from the edges. A 48 white play circle is its only white element. Scrubbing shows "Verse 8" following the thumb; on scroll it collapses into a centred mini pill. The floating tab bar stays. The skeleton state is designed.
- Book landing: a centred hero stack (eyebrow → big title → small grey meta → one pill control), then left-aligned content. An ambient brand glow at the top of landing screens only.

**Media detail (app)** [app board ~ Detail, Media, Rosary]
- A full-bleed poster or artwork at the top; back, share and more as translucent ~36–40 circles over it. The main action is the largest, highest-contrast element: a large white play circle, or a white "Pray the Rosary" pill between two circles. The thin red line on the curved edge is that product's brand gesture, not a default.
- Then: serif title → 8 → a grey meta line ("2026 · Drama · 125 min") → outlined CC/HD badges 8 apart → description → a segmented "Details / More Like This" → list rows (thumbnail, truncated title, "Series · 9 episodes", a play circle or "Resume" pill).
