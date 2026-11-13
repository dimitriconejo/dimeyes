# Referents

> **Scope: his taste, not a template.** This file documents sites he admires. Use it to set the finish bar when designing for him or "like him". Never use it to push another design toward his look: other designs are judged in their own language with `eye.md` (see "Two layers" in SKILL.md).

Sites Dimitri explicitly admires. They set the finish level he aims for and the influences he absorbs. They are **not** his signature: when designing, his own system (`system.md`, `profile.md`, `layouts.md`) decides; a referent only raises the bar or settles a choice his system leaves open. When critiquing, "this is how Flodesk does it" is never a reason on its own; tie every point to his rules.

He also named **Apple**, **Linear** and **Mobbin** as references (not measured here).

## What the two measured referents share (and he shares with them)
- Neutral UI, colour in the content: warm or pure off-white grounds, near-black ink (never #000 in Flodesk), muted text by tone or opacity; the accent appears almost nowhere.
- Separation by tone instead of lines: light surfaces with radius 16–24; almost no borders or shadows.
- One button spec, pill-shaped, black primary; at most two actions per group.
- A disciplined rhythm built from a few repeated values (Flodesk: 240 between sections, 48 heading→content, 16 → 32 cadence; ls.graphics: one 12 unit everywhere).
- Elements cut to the essentials; imagery carries personality.

## Two typographic registers
- **Flodesk: wide scale.** Single grotesk at weight 500, display sizes up to 160 with line-height 1.0 and −2% tracking. Use when the surface persuades (landing, marketing).
- **ls.graphics: compressed scale.** 9 / 12 / 16 / 24 only, weights 400/500; hierarchy from space, position and black vs grey. Use for dense catalogues, tools and product UI.

---

# Flodesk: measured layout and visual audit (2026-11-12)
Referent Dimitri loves. Measured home, pricing, /templates/email and /checkout at 1440×900 and 390×844.

## Shared system (home, pricing, checkout)
- Colours: page bg #F8F8F5; surface #F0F0EB (table rows, stat cards, demo panels, footer panel); toggle track/dividers #E1E1DB; ink #111110 (never #000); muted text = ink at 65% opacity; on dark: text #F0F0EB, muted at 60%, dark cards #F0F0EB at 5%. Accent blue #4081F4 only twice (pricing: "One flat rate.", "(2 months free)"); pale blue #DDEBFF "Most popular" band; promo bar #A7C9FD. Pure white only on pricing cards. All saturated colour comes from content (email card fills #FDEDA9, #576F54, #410D26, #DFD8AC, #A6BFF1).
- Type: one family "Flodesk Sans". Weight 500 for all headings, nav, buttons; 400 body. Scale 12/16, 14/20, 16/20, 24/24, 32/32, 48/48, 64/64, 80/80, 160/160. Display sizes line-height 1.0, tracking −0.02em. Body tight 16/20 (CEO letter 16/28).
- Radii: 16 (most), 24 (large panels, bento, pricing cards), 12 (mobile cards, video), 100 (pills), 8 (icon buttons).
- Shadows: none on home. Only pricing cards: rgba(0,0,0,.1) 4px 4px 25px. Borders: almost none (1px outline button).
- Motion: entrance fade, auto-scrolling template marquees, autoplay demo videos, 0.2s opacity/background transitions.

## Home desktop 1440
- Promo bar 49, header 80 (not sticky). Logo 95×20 at x=40. Centred nav Products▾ Resources▾ Templates Pricing (14/500, ~24 apart). Right: "Log in" ghost pill 48h pad 12 + "Try it free" black pill 48h pad 24, 8 apart.
- Containers: full-bleed panels and bento 40 side margins (content 1360); comparison table 1080 (x=180); FAQ 896; paragraphs 436–600; headlines 595–900.
- Hero centred: h1 160 below header, 64/64 w500, 655 wide, 2 lines → 16 → subcopy 16/20 at 65%, 436 wide, 2 lines → 32 → one CTA pill 126×64 pad 32 text 14/500 → ~50 → card marquee 576×720 (4:5) radius 16 gap 12 bleeding off edges.
- Vertical rhythm: ~240 between every section (242, 240, 240; dark section top padding 240). Heading→content 48 (64 for table, 72 under 80px FAQ heading). Section intros repeat hero cadence: h2 48 → 16 → paragraph → 32 → 64h CTA.
- Comparison table rows 1080×92, padding 24/48, radius 16, fill #F0F0EB, 12 apart; 4 columns gap 48.
- Bento: 2 columns 668 wide gap 24 radius 24 padding 48; card title 24/24 → 12 → copy 16/20 at 65%.
- Dark section full-bleed #111110; cards 437×248, 3 cols gap 24, radius 16, padding 48/120/48/48; title→text 48.
- Stat cards 437×440 radius 24 padding 40; numerals 160/160 vs 12–14 captions.
- FAQ rows 896×84 radius 16, 8 apart.
- Final CTA panel inset 40, #111110, radius 24, top padding 160; h2 80/80 → 32 → inverted #F8F8F5 pill 172×64.
- Footer #F0F0EB panel inset 40, inner padding 64; links 14/20 on 24 step; muted column headers; legal 12/16.

## Home mobile 390
- Promo 66, sticky header 64: centred logo, 40×40 hamburger 12 from right. Side margins 24.
- Hero: h1 80 below header, 32/32 −0.64px, 240 wide, 3 lines → 16 → 14/20 subcopy 236 wide → 24 → CTA 110×48 pad 24 → ~34 → marquee cards ~324×485 radius 12.
- ~160 between sections. h2 drops to 24/24 (same as card titles): hierarchy relies on spacing more than size. FAQ and final h2 stay 48.
- Centred desktop section headings become left-aligned; hero stays centred. Grids → 1 column; table → 2-col stacked rows (gap 16/8). Bento cards 342 wide, padding 32, gap 24, radius 16.

## Pricing desktop 1440
- Hero: h1 120 below header, 64/64, 3 lines, last line blue → 24 → paragraph 480 wide → 40 → CTA 142×64 → 16 → 12/16 caption → 80 → toggle.
- Toggle: track 284×48 #E1E1DB radius 24 padding 4; thumb #F8F8F6 40h radius 20 no shadow; right edge aligns with card grid right edge (x=1245).
- Cards: 3 × 334 gap 24 (1050), white, radius 24, padding 40. Name 24 → 32 → price 48/48 ("/mo" 24) → 4 → "Billed yearly" 12 → 32 → list (14/20 on 28 step) → 32 → full-width 254×48 button. Free = 1px outline button; paid = filled. "Most popular" = 48h #DDEBFF band, 12/500 text.
- Below: "Compare plans" link 40 below cards, then 240. Dark slider panel inset 40 radius 24 padding 120/40, h2 64. Feature table 1130 wide, no fills, 1px #E1E1DB dividers, rows ~72. CEO letter 2 cols 548 gap 24, text 16/28, scalloped portrait mask, script signature.

## Pricing mobile 390
- h1 48/48, 5 lines → 24 → paragraph → 32 → CTA 110×48. Toggle full size. Cards 1 col 342 wide padding 32 gap 24, same shadow.

## Templates page = older system (ignore as reference)
- Warm brown ink #241A17, serif JJannon in FAQ, off-scale values throughout, square tiles with hairline borders. /checkout returns to the main system.

## What makes Flodesk distinctive
1. One voice: single grotesk, single weight 500 for headings and controls, lh 1.0, −2% tracking. Hierarchy only by size steps (16 → 24 → 48 → 64 → 80 → 160) and space.
2. Neutral UI, colourful content: warm off-white + near-black ink + three neutral tints; muted text by opacity, not a separate grey. Colour lives in the imagery; UI accent appears twice.
3. One big rhythm repeated: 240 between sections on desktop (~27% of a 900 viewport), 160 on mobile; heading→content almost always 48.
4. Strict micro-cadence: heading → 16 → subcopy → 32 → CTA; card padding 48 (40 stat, 32 mobile); card title→text 12.
5. One CTA per block, always the same black pill (64h in hero/section intros, 48h elsewhere). Nav plain text, no icons.
6. Separation by tone, not lines: #F0F0EB surfaces on #F8F8F5 with radius; no shadows or borders on home; white + one shadow reserved to lift pricing cards.
7. Framed page: full-bleed panels sit 40 in from the edges with radius 24 — a constant 40 frame down the page.
8. Art direction: real email designs in 4:5 portrait cards, earthy saturated colours, editorial serif inside images; images carry the personality, chrome stays quiet; cards move as marquees.
9. Extreme scale contrast in a few places (160 numerals over 12 captions; 80 "FAQ").
10. Two alignment axes: centred for narrative intros, left for dense blocks; paragraphs (436–600) much narrower than headlines (595–900); dark cards use 120 right padding to keep copy short.
11. Dark as chapter break: one full-bleed #111110 section mid-page and a dark CTA panel at the end, same components inverted.
12. Very short copy blocks (hero subcopy 2 lines, card copy ~3 lines).

## Off-scale vs Dimitri's scale
- 120 (pricing hero offset, dark panel padding: visible); 60 (42 instances home, not visible as gaps); 49/50 (read as 48); ~34 mobile CTA→cards (visible); 10 (pricing, location unclear); 108 (mobile pricing header→h1); 25 (shadow blur). Main rhythm values (240, 160, 48, 40, 32, 24, 16, 12) are on scale.

---

# ls.graphics: measured layout analysis (Nov 2026)
Referent Dimitri admires. Measured home, product page (/assets/nothing-phone-4a-pro-015) and catalog (/mockups) at 1440 and 390. A Black Friday promo was live (368px display hero + fixed black toast); the permanent hero is the second plate.

## Global system
- Font: Inter only; weights 400 and 500 only.
- Type scale: 9/13 and 9/16 (counts, tags, fine print); 12/19–12/20 (all UI, body, captions, nav, buttons); 16/24/500 (row titles, sidebar items); 16/26/400 (product description, max-width 640); 24/32/500 −0.5px (every H1/H2). Nothing larger except the promo display (368/0.84, −5%).
- Colour: no hue in the UI. Backgrounds #FFFFFF body, #F9F9F9 plates/panels/placeholders, #F2F2F2 segmented track, #E3E3E3 deck cards and 1px inset rings. Text #000, #707070 secondary, #858585 breadcrumbs/intros, #333 some captions. Black pill is the only accent.
- Radii: 24 plates and pricing card; 16 images, sticky panels, sidebar; 20 every pill (fully round at 32h); 8 thumbnails; 40/50%/999 logo, icon buttons, toast.
- Shadows: only hero deck cards (0 3 6 rgba(0,0,0,.1) top card, .02 others) and toggle thumb (0 4 4 rgba(0,0,0,.07)). Outlined buttons use a 1px inset box-shadow #E3E3E3, never a border.
- Buttons: one spec 32h, padding 4/12, 12/400 text, radius 20. Fills: black/white primary; #F9F9F9 on white; white on grey plates; transparent (nav); inset ring. Purchase buttons 40h full width, padding 4/28. Max 2 CTAs per group, 12 apart (8 in header).
- Grid: full-bleed with 12 side margin at both widths, no centred max-width container. Desktop 4 columns of 345 with 12 gutters (1416 content).
- Motion: spring-like linear() easing (button bg 0.3s, card opacity 0.15s), page fade-in, sticky stacked slides, autoplay product videos, canvas refraction on promo.

## Home 1440
- Header 58, static, white, padding 12, 1px bottom border #F9F9F9. Left: 32 circular logo, Catalog (icon), Platform, Free Mockups, "Open Editor" + 9px "new" tag — 32h transparent pills 4 apart. Right: 32 search icon, Login, black CTA pill 156×32.
- Plates stacked with 12 gap.
  1. Promo plate 1416×818 #F9F9F9 radius 24 padding 71/16/64, 12 below header; 818 = viewport height minus header and gaps. Centred: H2 → 12 → 12px grey paragraph → 12 → two CTAs → 12 → 9px VAT note.
  2. Permanent hero same plate size: fanned deck of 6 rotated cards (~344×286 r24) centred; H1 24/32/500 centred 482 wide 2 lines ~60 below deck box; → 12 → buttons → 12 → 12px grey price line. Corners: 9px "last update" bottom-left (x=28), greyscale client logos 9–14 tall bottom-right.
  3. Sticky scrollytelling: grid 480 | 924, gap 12. Left list sticky (top 12), 118 left padding: 12px grey eyebrow, tab titles 24/32/500 (active #000, inactive #707070); active expands to 271-wide note + 2 pills. Right: 3 sticky slides 924×876 #F9F9F9 r24 padding 69, each with 785×479 video r16.
  4. Figma plugin block: margins 108 top / 84 bottom, inset 119 each side (1178 wide); header row H2 24/32 with note 4 below on the left, buttons right-aligned on the same row; 25 below a 1178×643 video plate.
  5. Ten category rows: 24 top padding, 32 head: H2 16/24/500 + grey "View All" pill inline 12 after it (not pushed right); 8 below, 4-column cards; rows every 349. Card: image 345×249 #F9F9F9 r16 no border; 4 below, 12/20 grey title left + 9px tag right.
  6. Pricing plate: padding 80/16; centred 2-line H2 → 8 → segmented toggle (track #F2F2F2 padding 2, white thumb 82×28) → 12 → grey wrapper 385 wide padding 24 holding white card 337 wide r24 with 24-padded sections; 12px checklist; full-width black 40 CTA; 3 grey reassurance lines (27 pitch); 9px VAT note.
  7. Footer: padding 12/12/72; 4 columns of 310 with 48 gap; 12px grey labels, 12px black links on 27 pitch.

## Home 390
- Same 12 margin (366 content). Header: logo, search, menu (32 #F9F9F9 circle). Hero plate still viewport height. Scrollytelling list hidden, slides stack with 24 padding. Cards 1 column 366 wide. Footer 1 column. Type unchanged (24/32 headings, 12 body).

## Product page 1440
- Body padding 38/12/0. Grid 1059 | 345 with 12 gap (3 + 1 of the home columns).
- Left: breadcrumb 12/19 #858585 → 4 → H1 24/32/500 → 22 → three 1059×794 (4:3) images r16, 12 apart; description 16/26 max-width 640; 96 below: "Similar assets" 16/24/500 → 8 → 4-col cards.
- Right buy panel: sticky (top 12), #F9F9F9, r16, padding 24, viewport-height 782, content gap 32: 12px checklist (27 pitch); "Part of the set" white card r16 padding 12 with 48 thumb; "Open in Editor" 40 pill with 1px inset ring; white 32 chips (Photoshop/Sketch/Figma) + underlined grey "Download Files"; buy block pinned to panel bottom: black 40 "Subscribe…", grey underlined "or buy pack…", 9px fine print.
- Mobile: single column, H1 16/24, images 366×275, panel becomes in-flow grey block (24 padding), buttons 318×40.

## Catalog /mockups 1440
- Grid 345 | 1059 (1 + 3 columns), gap 12, padding 40/12/16.
- Sidebar sticky (top 70), #F9F9F9, r16, padding 24, viewport-height: 12px grey group label → items 16/24/500 + 9px grey count, 37 pitch; "more ⌄" 12px grey; 36 between groups.
- Content: H1 "Featured Mockups" 24/32 left; opposite, top-aligned far right, a 12/20 #858585 intro, right-aligned, exactly one column wide (342). Sticky white toolbar (top 58, padding 12, 56 tall): "All" dropdown pill left, centred segmented "Assets / Products", ringed "Open in Editor" right. 3-column card grid, rows every 281.
- Mobile: sidebar gone, intro left-aligned full width, sticky toolbar, cards 1 column 366×288.

## What makes ls.graphics distinctive
1. One 12px unit runs the layout: page margin, gutter, gap between plates, header-to-plate, heading→CTA gaps. Reads as continuous tiles.
2. Plates instead of sections: #F9F9F9 r24 rectangles inset 12. Separation by one very light grey tone, never rules or shadows. Hero plates and side panels sized to the viewport.
3. Very compressed type: 9 / 12 / 16 / 24, weights 400/500; largest regular heading 24. Hierarchy from space, position and black vs #707070, not size.
4. Imagery is the colour: zero UI hue; monochrome device renders with studio lighting carry the drama; captions outside images.
5. Strict 4×345 module reused everywhere (home 4, product 3+1, catalog 1+3, footer 4; sticky panel one column wide).
6. Single button spec: 32h 12px pill for nav, CTAs, chips, "View All"; only fill changes; purchase grows to 40.
7. Tight inside, generous outside: components 4–12 internally; plates 64–80 vertical padding; 96 before related content.
8. Centred only for heroes and pricing (text columns ~320–480); everything else left on the 12 axis.
9. Compact inline section heads: title + grey "View All" pill 12 after, then 8 to the grid.
10. Metadata as 9px micro-type (counts, tags, update stamp).
11. Depth nearly absent; motion carries delight (1px inset rings, two shadows, sticky stacking, autoplay video, spring easing).
12. Elements cut to essentials: card = image + title + tag; header 4 links + 1 CTA; no decorative icons, dividers or badges.

## Off-scale vs Dimitri's scale
- Visible: sidebar 5 gaps / 36 between groups (37 pitch); product H1→image 22 and body top 38; plate padding 71 vs 64; plugin margins 108/84 and head→plate 25; deck→H1 ~60; purchase button padding 28; line heights 19 and 13; 9px font.
- Probably computed/invisible: 69.3, 118/119, 15/27, 3, 10, 14.
- On scale (bulk): 4, 8, 12, 16, 24, 32, 64, 80.
