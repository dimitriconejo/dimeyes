# Dimitri's layouts

> **Scope: his style, not a template.** This file documents how Dimitri's own work looks and is built. Use it to design for him, for his own products (Cathopic, Christicons, dimconex and the Catholic network apps he designs) or "like him", and to recognise his signature when reviewing his own work. A Catholic or parish subject is not his product. Never use it to push another design toward his look: other designs are judged in their own language with `eye.md` (see "Two layers" in SKILL.md). When a design has no system, fill the gap with his eye, not his look: his spacing scale, a short type ladder, concentric radii and colour roles built from the design's own palette, type and shapes; say which values were added.

**How to use:** open the section for the layout decision at hand and reuse its measured values; §10 condenses them into rules for designing in his style, and §11 lists deviations in his own work.
These are measured values (authority level 2): his own words in profile.md and calibration.md override them. Cathopic and Christicons are canon and lead every section; the portfolio is secondary; Mater Coeli and Paulable are weak (see "Weak sources") and never count as evidence. Every count ("2 of 3") is over the three strong sites: Cathopic, Christicons and Portfolio.

**Contents:** Weak sources · 1. Containers and widths · 2. Grid and columns · 3. Vertical rhythm · 4. Header and navigation · 5. Hero and first screen · 6. Alignment · 7. Typography in layout · 8. Measured components · 9. Responsive (1440 to 390) · 10. Layout rules · 11. Measured deviations · Measurement limits

This reference measures his own sites. Use it to judge his work or to design in his style. Judge anyone else's layout with `eye.md`; §10 and §11 are not criteria for third-party designs. Every measurement comes from the DOM, in CSS px, at 1440 (desktop) and 390 (mobile). For him space leads: a good distribution creates the hierarchy, removes noise and makes the composition.

**Spacing scale:** 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96, 112, 128, 144, 160 and from there +16 (176, 192, 208…). 6 is a regular step. 10 is his for small-component distances where 8 is too tight and 12 too loose ("a veces lo necesito, porque no me convence el 8 ni el 12"), never for section, card or layout gaps, and is never flagged; 36 is tolerated. Always multiples of 2. Type also uses 14 and 18.

| Key | Tier | Site | Pages measured |
|---|---|---|---|
| Cathopic | canon | cathopic.com | home, /pricing/, /search/photos/ (results and empty), /photo/, /collection/, /collections/, /auth/sign-in and sign-up, /contribute/, /@user/ profile, /legal/license/, help.cathopic.com, 404, mobile drawer |
| Christicons | canon | christicons.com | home, with #packages, #faq, the Customize panel, colour picker, dialogs and mobile menu |
| Portfolio | secondary | dimitriconejo.com | home |
| Mater Coeli | weak | matercoeli.com | home, /informacion/, /consagracion/ (step 1 only) |
| Paulable | weak | paulable.com/es | home, article, /explorar |

Flodesk (flodesk.com) is canon as the referent closest to how he thinks; its measurements live in `referents.md`, not in these tables. Mailgami (mailgami.com, home) was also measured but is excluded from every table, rule and count: it was a collaboration, so it is not evidence of his style.

### Weak sources

- **Mater Coeli:** "un proyecto bonito, pero creo que está anticuado" (pretty, but dated). **Paulable:** "se hizo con IA, tuve poco margen para valorar dimensiones" (built with AI, with little control over dimensions).
- Their rows stay in the tables, tagged *(weak)*, for reference only. They never count toward a rule, and their deviations are not his: don't cite them as proof that he accepts a value, and don't list their off-scale values as his flaws. Rules that rested only on them are dropped or marked *weak* in §10.
- Their off-scale values, kept for reference:
  - Mater Coeli: p-[45px] and px 15 cancelled with −15 (leftover code); primary button 46 / 44 with padX 28; carousel bottom padding 50; p → CTA 44 (12 + 32) in the mobile band, against 40 / 48 elsewhere; 68 (48 + 20) to the sticky CTA; social link margin 7.5 (leaves 15), insets of 60, widths 675 and 699; token --spacing-10.5 = 52. Its coded type tokens are 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 44, 52, and its spacing tokens (--spacing-1 to --spacing-18) 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 52, 56, 64, 72, 80, 96, 128, with no 6, 10, 36, 112 or 144.
  - Paulable: 28 from the H1 to p in the hero, from the tabs to the stage and as mobile card padding; header heights 75+1 / 68+1 / 57+1 / 56+1 (only 56 on the scale); em-based article margins 30.4 / 27.2 / 52.8 / 11.4 / 10.2 (would be 32 / 56 / 12); 21 from the 136 number to its meta (reads as 20); share bar 60 from the column; padX 14 on 17 buttons in explore; the logo 4 inside the axis; text sizes 13 (most used on the home and mobile), 15 (most used on explore), 17, 19, 22, 30, 42, 44, 52, 92 and 136.

---

## 1. Containers and widths

| Site | Desktop container | Side margin at 1440 | Mobile (content / margin) | Text measures | Full-bleed |
|---|---|---|---|---|---|
| Cathopic | 1312 | 64 (the header uses 32) | 358 / 16 | hero 750; paragraphs 525–600; FAQ 700 | hero photo; grey bands rgb(244,247,247); dark footer; logo marquee; carousel that runs off the right edge. The dark CTA card is **not** full-bleed: 1312 wide, radius 32. |
| Cathopic, other pages | contribute 1312; detail: media 904 + 32 + side panel 424; auth: split 720 / 720 with a 450 form stack; legal: nav 325 + reading 675; help: 960; 404: a 600 column | 64; 40 on the detail page; legal title axis x220; help x240 | 358 / 16; auth 350 / 20; 404 inset 48 (293) | collection description 600; contribute lede 600; contribute FAQ 875; legal reading 675; auth lead 450 | collection cover 606 tall fading to white; contribute photo mosaic and a 750 (70vh) photo CTA band; auth collage panel (the whole right half, 720) |
| Christicons | 1000 | 220 (header and footer: 64) | 358 / 16 | H1 637; Packages intro 550; FAQ header 415; search group 564; dialogs 512 / 448 | only the Packages section (white, with 1px gray-200 hairlines at both edges); the whole page is white |
| Portfolio | 1116 for grid and footer | 162 (the header uses 48) | 350 / 20 | hero box 1024, H1 up to 1020, lede 660; section intro 660; long text 620; CTA 500 | carousel, hero background, CTA statues |
| Mater Coeli *(weak)* | home: fixed panel of 617 (3/7) + column of 823 (4/7). Interior pages: sidebar of 360 (1/4) + panel of 1080 with padding 72, leaving 936 usable | — | 358 / 16 | reading 675, centred in the panel (203 / 202); hero 500; text over a card 450 | 6 image cards of 823×405 with no gap between them; the CTA band breaks out to 1080 (390 on mobile) |
| Paulable *(weak)* | marketing: 1192 with padding 32, leaving 1128; explore: 1040; reading: 680 | 156 / 200 / 380 | 350 / 20 | ledes and card text 480; search 560; article author-block text 560; CTA caption 640; chip row 720 | only the green hero (and the article image on mobile) |

What repeats:
- A wide container for grids and footer, with narrower text measures inside (3 of 3; the weak sites too, Mater Coeli only on its interior pages, because its home is a split screen with no container).
- The mobile side margin for content is 16 (Cathopic, Christicons) or 20 (Portfolio, Cathopic's auth pages). No other value appears. Weak: Mater Coeli 16, Paulable 20; Paulable's app header has padding 16 (the logo lands at 20 because of its own 4px padding).
- Long reading runs 620–700: Portfolio 620, Cathopic legal 675, Cathopic FAQ 700 (weak: Mater Coeli 675, Paulable 680). Ledes run 525–660: Cathopic 525–600, Christicons 550, Portfolio 660 (weak: Paulable 480).
- Only images and tone changes go full-bleed. Text never does.
- Proportions:
  - Portfolio uses φ: margin 162 ≈ 100φ, container 1116 ≈ 690φ, hero of 809 = 500φ.
  - Cathopic uses halves (auth 720 / 720) and coded containers: max-w 1440 with px 64, container-md 1000 + 128, container-sm 450 + 128, container-hc 960 + 128, content-600 at 550 / 600.
  - Christicons does not use φ (1000/637 = 1.57).
  - Tailwind widths: Portfolio max-w-5xl (1024); Cathopic's 675 legal column sits close to the 672 of max-w-2xl.
  - Weak: Mater Coeli uses simple fractions (3/7 : 4/7 and 1/4 : 3/4) and a column of 675/1080 = 0.625, close to φ.
- In 3 of 3 strong sites the header uses a different margin from the content: Cathopic (32 vs 64, and 40 on the detail page: three gutters), Portfolio (48 vs 162) and Christicons (64 vs 220).
  - Only Christicons resolves it as a system: header and footer share the 64.
  - Weak: Paulable's app-style pages (24 vs 380 / 200); its home aligns header and content at 156.

## 2. Grid and columns

| Site | Desktop | Mobile |
|---|---|---|
| Cathopic | Categories: text column of 300 + 40 + 5×178 with gap 20. Masonry 3×421, gap 24 on both axes, tiles square-cornered. Cards 4×310, gap 24 (collections; the "Why Cathopic" features run 4×2). Plans 3×421, gap 24, all 729 tall. Features 4×292, gap 48 (matches pricing's "Included with every plan": 4 columns, 48 gaps). Carousel of 375 with a step of 399 (gap 24). Footer: brand of 275 + 112 + 4×183 with gap 64. Detail: media 904 + 32 + side panel 424. Contribute: 3×421 with gap 24 and row gap 48; steps and category tiles 4×310, gap 24; testimonials in 3 CSS columns, gap 24. Help: 2×468, gap 24. | Categories 2×173, gap 12. Masonry, cards and plans to 1 column, gap 16. Features 2 columns, gap 24; "Why Cathopic" becomes an accordion. Collection cards become horizontal rows of 358×160, 16 apart. Contribute stays at 2×171 (gap 16, row gap 32). Footer 2×147, gap 64. |
| Christicons | Icons 6×150 with gap 20 (= exactly 1000). Packages and Customize 3×320, gap 20. FAQ 2×468, gap 64. | Icons 2×171 with gap 16 (= exactly 358). Customize: 3 stacked cards of 358×118, gap 12. The rest to 1 column. |
| Portfolio | Crafts 2×546, gap 24. Card carousel 580×724, gap 8 (step 588). Footer in flex, gap 32. | 1 column, gap 24. Carousel of 324×485, gap 8. |
| Mater Coeli *(weak)* | No CSS grid. Split 3/7 : 4/7 (0.75, not golden). Cards stacked with gap 0. List rows: icon of 56 + 40 to the text axis. | 1 column. Icon of 40 + 24. |
| Paulable *(weak)* | Hero 1fr + 300, gap 80. Feed 680 + aside of 368, gap 80. Trends 3×344, gap 48 between columns and 32 between rows. Explore 3×320, gap 40 / 48. Writers 2 columns, gap 64. Related 2×324, gap 32 / 40. Sign-up card 2×288, gap 40. | Everything to 1 column. Directory 2×163, gap 24 / 40. The aside moves **above** the feed. |

Guidelines:
- **Card gap:** a canon pattern (Cathopic and Christicons).
  - Desktop: 24 (Cathopic, and Portfolio's crafts) or 20 (Christicons and Cathopic's categories).
  - Mobile: 16 (Cathopic, Christicons) or 12 (Cathopic's categories, Christicons' Customize cards).
  - Measured exceptions: Portfolio's carousel uses 8; on mobile Portfolio keeps 24 in crafts. Weak: Paulable separates cards with 32 / 40 (related, 2×324) and 40 / 48 (explore).
- **Gap between text columns:** wider than the card gap. 48 in Cathopic's pricing features; 64 in Cathopic's footer and Christicons' FAQ. Weak: Paulable's trends 48, writers 64, directory 40.
- **Main column + side panel:** 32 (Cathopic detail: 904 + 32 + 424). Weak: 80 (Paulable, twice).
- **Grids divide the container with no remainder:** holds in all 3 strong sites.
  - Christicons: 6×150 + 5×20 = 1000, 3×320 + 2×20 = 1000, 2×468 + 64 = 1000 and 2×171 + 16 = 358.
  - Cathopic: 4×310 + 3×24 = 1312; 904 + 32 + 424 = 1360 = 1440 − 2×40. The masonry gives 3×421 + 2×24 = 1311 because 421 is rounded.
  - Portfolio: 2×546 + 24 = 1116.
  - Weak: Paulable 3×344 + 2×48 = 1128; 680 + 80 + 368 = 1128; 3×320 + 2×40 = 1040. Mater Coeli uses no CSS grid.
- **Columns:** 2 to 6 on desktop and almost everything to 1 on mobile.
  - These stay at 2 on mobile: Christicons' tiles, Cathopic's categories, Cathopic's pricing features (4 → 2, gap 24), Cathopic's contribute grids (2×171), Cathopic's footer (2×147, gap 64). Weak: Paulable's directory and the author block of its article (text + button).
  - Cathopic also restructures instead of only stacking: the feature grid becomes an accordion and collection cards turn horizontal (§9).

## 3. Vertical rhythm

### Between sections

| Site | Desktop | Mobile | How it is built |
|---|---|---|---|
| Cathopic | 112 (6 of 6 on home, 3 of 3 on pricing, 1 of 1 on search; contribute 64 / 112 / 112 / 112; footer mt 112 on every page) | 72 (7 of 7 on home, 3 of 3 on pricing; a later pass measured 72 / 72 / 144 on home) | margin between blocks, from coded section tokens (space-lg 72 → 112 at ≥768, space-md 72 → 80, space-xl 144 → 160); most bands use 112 / 72 as inner padding; the categories band, right after the hero, uses 56 (48 on mobile), and Editor's picks is 112 vertical and 64 horizontal; inside "Why Cathopic", 64 and 80 |
| Christicons | 192 = 96 + 96 across each band edge; 96 from the hero row to the grid and from the grid to the Packages band | 160 = 80 + 80 | each section carries padding 96 (80 on mobile); the FAQ has pb 0 on desktop and hands its space to the footer (pt 192) |
| Portfolio | padding 112 (pb 116 and 108); visible gaps of 206–228 between content and 380 before the CTA | padding 64 (work: pt 48); visible gaps of 112–128, and 185 before the CTA | section padding |
| Mater Coeli *(weak)*, interior pages | 72 | 64 | section padding-top; final CTA band 128 (64 on mobile) |
| Mater Coeli *(weak)*, home | 200 above and 200 below the hero | 188 / 207 | comes from space-between, not from a token |
| Paulable *(weak)* | 56 (trends), 40 / 64 (feed), 112 (CTA), 96 / 112 (hero) | 40, 64, 64/64 | padding + a 1px line; no single value |

- **Hero padding:** Cathopic 192/192 → 112/112 (contribute's photo CTA band 208 → 160); Christicons 96/96 → 80/73; in Portfolio, header to H1 is 208 → 64. Weak: Paulable 96/112 → 64/64.
- **Page title below the header:**
  - Cathopic search, collections and legal: 96 to the H1 (y168; 56 on mobile).
  - Cathopic pricing: 56 to the eyebrow pill; the H1 sits 120 below the header (56 + 36 + 28), 105 on mobile (56 + 29 + 20).
  - Cathopic page header to content: 96 (search p → tabs; collections and legal title → tabs or body; profile Follow → tabs).
  - Weak: Paulable 40 in the article and 64 in explore; Mater Coeli mobile 36 (112 − 76).

### Inside a section

| Site | Eyebrow → title | Title → text | Text → content | Text → CTA |
|---|---|---|---|---|
| Cathopic | 8 | 16–20 (16 on mobile; 12 for the mobile titles of pricing and search) | 56 in most home sections (also 56 on mobile); contribute H2 → grid 64 | hero: 48 (40 on mobile); CTA card: 56 (32); pricing, from p to the toggle: 80 (56); contribute hero: 40 |
| Cathopic auth | — | logo 48 → 55 → H3 → 16 → lead | lead → 55 → input → 24 → input → 16 → checkbox row → 32 → button | button → 56 → switch link → 56 → legal line |
| Christicons | 8 | 20 (12 on mobile) | 64 (40 on mobile); Customize label → 16 → cards → 48 to the grid (36 on mobile) | from the H1 to the controls 48, same on mobile |
| Portfolio | 12 (16 in the CTA) | intro 12; "Why" 24; CTA 16; hero 24 (32 on mobile) | carousel 48; grid 64 (48 on mobile) | 48 (32 on mobile) |
| Mater Coeli *(weak)* | no eyebrow: title → 32 → gold rule 48×2 → 32 → text (on mobile 24/24 with a 32×2 rule) | hero 16 | 40 (from p to the list) | hero 40; band 48 (44 on mobile) |
| Paulable *(weak)* | label 16/600 → 24 | hero 28; article 12 | from the label to the list 24; from the display to the controls 32 | 40 |

### Proximity ladder

Inside a component the gap is 6–16, from the intro to the content 48–64, and between sections 112–192. In the strong sites the gap between sections is 7× the internal gap or more:

| Site | Internal | Intro → content | Between sections | Ratio |
|---|---|---|---|---|
| Cathopic | 16 | 56 | 112 | 7× |
| Christicons | 8–20 | 64 | 192 | ≈10× |
| Portfolio | 12 | 48–64 | 112 (206–228 visible) | 9× |
| Mater Coeli *(weak)* | 16 | 40 | 72 (64 on mobile) | 4.5× |
| Paulable *(weak)* | 10–12 | 24–40 | 56–112 (the feed starts with pt 40; 40 on mobile) | 4.7× (56/12) to 11×; only 3.3× at the feed (40 vs 12) |

Wildcard values:
- In Cathopic, 56 is the intro-to-content gap in most home sections (Trending, Editor's picks, Empower, Everything, the CTA card), also on mobile, and the gap between form groups on the auth pages (55 / 56 / 56). It does not hold in Trusted (48 from the h3 to the logos), the FAQ (80 from the H2 to the first item, 48 on mobile), the pricing features (48, 32 on mobile) or pricing from p to the toggle (80, 56 on mobile).
- Weak: in Mater Coeli, 40 is the "block" gap: from p to the list, between items, from the icon to the text and from the text to the hero CTA.

## 4. Header and navigation

| Site | Desktop | Mobile |
|---|---|---|
| Cathopic | 72 tall, sticky (relative on pricing), padding 32, white, no border or shadow. 9 elements in 3 groups: logo 176×40 + 24 + search 489×44 + 24 / Explore, Contribute, More, EN / Pricing, Sign in, "Join free" 102×40. Items are 40 tall with padX 16, radius 10, 16/550 gray-600 (ink when active, colour only) and no gaps between them; a 1×36 #E3E8E8 separator with 16 on each side. Pricing reduces it to 3 elements and it is not sticky; auth and 404 pages have no header. Dropdowns: radius 12, padding 8, 41-tall items, shadow 0 10px 50px rgba(0,0,0,.15). | 64, sticky, padding 16: hamburger 36 + 16 + brand mark 36 on the left; search 40 + 16 + "Join free" 40 on the right. Drawer of 300 over rgba(20,24,25,.6), padding 20: primary links 20/24/600 at a 44 pitch, an 11px uppercase "MORE" label with a hairline, secondary links 16/20/600 at 40. |
| Christicons | 64, sticky, white at 0.9 with blur(6px) and a bottom line, padding 64. Logo and right group sit in fixed 170 boxes so the navigation (4 links, 15px, gap 32) lands at the exact centre (558 / 558). | 64, padding 16: logo + a "MENU" text button of 35×21 (Basier Square Mono 14, uppercase). The panel is fixed at 64 with padding 16, links 14/21 at a 37 pitch, no edge or shadow. |
| Portfolio | 56 tall, placed 32 from the top edge (ends at 88), margins 48, relative. 2 elements: serif logo 28 and a round menu button of 56. | 56 at 24 from the edge, margins 20, logo at 24. |
| Mater Coeli *(weak)* | No top bar. Home: fixed 3/7 panel with a 64 logo row at the top. Interior pages: fixed 360 sidebar with a photo, serif title 28 → 32 → rule 48×2 → 32 → navigation of 4 links 31 tall, centred as a block. | Fixed, 76 = 16 + 44 + 16: logo on the left; share and hamburger of 44×44 with gap 12. |
| Paulable *(weak)* | Marketing: 75 + 1 border, sticky, inside the 1192/32 container. Logo / 3 links of 40 (padX 12, gap 8) / search 40, "Iniciar sesión" 40, "Empezar" 40. App pages (article, explore): 57 + 1, full width with padding 24 and a search of 288×40. | Marketing 68 + 1. App 56 + 1, plus a fixed bottom tab bar of 61. |

Guidelines:
- **Height:** 56–72. Cathopic 72 / 64, Christicons 64, Portfolio 56 with air above. Weak: Mater Coeli mobile 76, Paulable marketing 76 (75 + 1; 69 on mobile) and app pages 58 (57 + 1; 57 on mobile, below 64).
- **Header controls:** 40 (Cathopic). Christicons uses bare text links. Weak: Paulable 40; Mater Coeli 44 on mobile.
- **CTA:** a single filled button in the header, always on the right (Cathopic; weak: Paulable). Christicons and Portfolio have none.
- **Visible links:** 3–4 (Christicons 4; weak: Paulable 3, Mater Coeli 4 in the sidebar). Cathopic is the busiest, with 9 elements.
- **Sticky:** Cathopic and Christicons (weak: Paulable). Portfolio is not. Mater Coeli (weak) fixes panels instead of a bar.
- **Mobile:** logo and, at most, search, one CTA and the menu. Cathopic keeps a 40 search icon (weak: Paulable a 40 search, Mater Coeli a 44 share button). Christicons and Portfolio have no CTA: logo + MENU and logo + menu.
- **Funnel and edge pages strip chrome:** Cathopic's pricing header drops navigation and search; sign-in, sign-up and 404 have no header or footer.

## 5. Hero and first screen

| Site | Composition | H1 | Gaps | Actions |
|---|---|---|---|---|
| Cathopic home | centred over a full-bleed dark photo with 4 stacked scrims; column of 750; 697 tall (769 including the area under the header) | 60.56/1.0, weight 630, −4.4%, 2 lines, about 23 characters per line | H1 → p 24; p → search 48 | 1: search of 700×64 with a 48 "Search" pill inset 8. No secondary. |
| Cathopic pricing | centred intro; eyebrow in a 36 pill | 48/55, 1 line | pill → H1 28; H1 → p 16; p → toggle 80; toggle → cards 40 | none in the intro; the CTAs are on the cards |
| Cathopic search | page header on the left, not a hero | 44/50.6, 1 line | 96 above; H1 → p 16; p → tabs 96 | none; tabs and filters |
| Cathopic collection | centred over a 606 cover that fades to white; 14 breadcrumb on the left | 44/50.6 (28 on mobile) | "Crafted by" pill → 24 → H1 → 20 → description (600) → 48 → button | 1: "Share Collection" 52 |
| Cathopic contribute | centred over a faded photo mosaic | 48/55.2, weight 630, −0.044em | H1 → p 16; p → buttons 40 | 2 pills of 60, 16 apart: primary + white with a 1px border |
| Christicons | centred; hero only 368 tall, leaving 2.5 product rows in the first screen | 32/1.2, weight 500, two-tone, 2 lines, about 40 characters per line, no paragraph | H1 → controls 48 | search of 400×52 + "Customize" of 156×52, both outline; no filled CTA |
| Portfolio | centred; 809 tall | serif 64/80, 3 forced lines, 24–28 characters per line, with 88×64 photo pills inside the line | H1 → lede 24; lede → CTA 48 | 2 of 56 (outline + filled), gap 20 |
| Mater Coeli home *(weak)* | centred in the left panel, 500 wide, 200 of air above and below | serif 52/1.1, 2 lines, about 24 characters per line | H1 → p 16; p → CTA 40 | 1 dark pill of 270×46 + an icon button of 46, gap 8 |
| Paulable home *(weak)* | left-aligned, asymmetric 1fr + 300 with gap 80; columns bottom-aligned (y 572); green band of 609 | 92/1.02, weight 700, −4.2%, 2 lines (12 and 16 characters) | H1 → p 28; p → CTA 40 | pill of 48 + underlined link |
| Paulable explore *(weak)* | centred title + search of 560×48 | 40/48 | H1 → search 32 | none |
| Paulable article *(weak)* | title block on the left at 680 | 42/52 | H1 → subtitle 12; → author 32; → bar 32; → image 40 | none |

Guidelines:
- On desktop the headline takes 2 lines in Cathopic and Christicons (Portfolio uses 3). At 390 it takes 3 lines in Cathopic and Christicons and 5 in Portfolio. Weak: Mater Coeli 2 and 2, Paulable 2 and 3.
- Display lines are short, 23–28 characters: Cathopic 23, Portfolio 24–28 (weak: Mater Coeli 24, Paulable 12–16). Christicons uses a small, long H1 (about 40) because the catalogue is the protagonist.
- At most 2 actions. When there is a filled CTA there is only one. With two actions, one is filled and the other is outline or white (Portfolio, Cathopic contribute). Cathopic's home uses a single action; Christicons uses no filled control because the action is to search. Weak: Paulable pairs a pill with an underlined link; Mater Coeli a single pill with a 46 icon button beside it.
- From the H1 to the text, 16–24 (weak: Paulable 28); from the text to the action, 40–48.
- The hero is centred in all 3 strong sites. Paulable (weak) is the exception: left-aligned and asymmetric.
- A single focus: nothing competes with the headline and the action (Cathopic, Christicons, Portfolio).

## 6. Alignment

| Site | Measured axes | Centred | Left-aligned |
|---|---|---|---|
| Cathopic | x64 (13 text runs); footer at 451 / 698 / 946 / 1193; on mobile x16 (36 runs). Other pages: x40 on the detail page; x220 for the legal title and nav text (the pill boxes hang 20 to the left, at x200); the auth stack centred at x135 | hero, Trending title, CTA, Empower, Trusted, pricing intro, FAQ, collection hero, contribute hero and section titles, auth, 404 | bands, Editor's picks, Everything, card content, the whole search page, collections and legal headers |
| Christicons | content at x220; header and footer at x64; centre at x720 | hero (also on mobile); Packages header (desktop only); footer stacked centred on mobile | grid, FAQ; on mobile also the Packages and FAQ headers and the cards |
| Portfolio | x162 (grid and footer), x410 ("Why" column), x195 / 765 (inside cards); the header at x48 | hero, work, CTA | crafts (x162), Why (x410) |
| Mater Coeli *(weak)* | home: central axis of the panel (x≈309) and card axis (x673 = 617 + 56). Interior pages: x563 for text and x659 for lists | the whole home inside the panel; CTA band | interior sections; card text, bottom left |
| Paulable *(weak)* | x156 (19 runs); x380 in the article; x200 / 560 / 920 in explore; x20 on mobile | only the sign-up CTA and the explore title | everything else |

Guidelines:
- Centre the hero and the conversion block. Page titles go left on catalogue and reading pages (Cathopic search, collections, legal) and centred on conversion pages (Cathopic pricing, collection hero). Catalogue, reading and lists go left. The FAQ changes by site: centred in Cathopic (a 700 column with a centred title on pricing, 875 on contribute), left in Christicons. Measured exceptions: Cathopic's Trending title (catalogue) and Portfolio's work intro are centred.
- Failures come when adjacent sections change axis:
  - Cathopic home: centred, left, centred, left, centred, centred over left, left, centred.
  - Cathopic across pages: logo at x32, page content at x64, detail page at x40.
  - Portfolio: centred → x162 → x410.
  - Christicons: Packages centred → FAQ left.
  - Weak: Paulable is the most stable site, left by default and centred in only two blocks.
- Optical alignment devices measured:
  - Equal fixed side boxes to centre the navigation (Christicons, 170 / 170).
  - Interactive pills hang their padding outside the text axis (Cathopic legal: pill boxes at x200, text at x220 on the title axis). On mobile the hang is lost and the text sits at x30.
  - Hover plates drawn with ::after and negative insets instead of padding, so link text stays on the column edge (Cathopic drawer −10 / −12 to −16, footer −10 / −16, megamenu −12 / −16).
  - Buttons of several cards on one shared baseline (Cathopic plans, y 1081).
  - Weak: space-between to centre the hero vertically (Mater Coeli, 200 / 200); hero columns aligned at the bottom (Paulable, y 572, with a pb of 4 as an adjustment); sticky button aligned with the column edge (Mater Coeli, 1237 vs 1238).

## 7. Typography in layout

| Site | Families | Scale used (desktop → mobile) | Line height | Tracking and weight |
|---|---|---|---|---|
| Cathopic | Inter (variable; ss03, cv01 and cv11 on headings) | 60.56 / 48 / 44 / 40 / 32 / 24 / 20 / 18 / 16 / 14 / 13 / 12 → 36 / 28 / 24 / 20 / 16 / 14 / 12. Coded ladder: h1 36 → 40, h2 32 → 36, h3 28 → 32, h4 24 → 28, h5 20 → 24, h6 18 → 20; .page-title 28 → 40 → 44 (≥1300); .secondary-title 28 / 32 / 36 / 40 (steps at 768 / 1100 / 1300); .tertiary-title 24 / 28 / 32; .quaternary-title 22 → 28 | display 1.0; titles 1.15; text 1.55 | −4.4% on weight-630 titles (−3.5% at 16–20); weights 400, 500, 550 (buttons, nav), 600 (field values, card titles) and 630 (headings) |
| Christicons | Basier Square + Mono | 32 (H1 and H2) / 20 / 18 / 16 / 15 / 14 / 13 / 12 / 10 → 28 / 24 / 16 / 14 / 12. Tokens: hero 32 (28), section title 32 (24), compact title 28, card title 20, FAQ question 18 (16), nav 15, body 16 (14), body-small 13, caption and overline 12 | display 1.2; text 1.45 | normal (0); weights 400 and 500 only; titles at 500 |
| Portfolio | Instrument Serif + Inter | serif 64 / 48 / 28; Inter 20 / 18 / 16 / 14 / 12 → serif 50.7 (fluid) / 48 / 40 / 24; Inter 18 / 16 / 14 / 12 | H1 1.25; CTA H2 1.0; text 1.6; long text 1.7 | −1px on the 64; −0.5px on the 48 |
| Mater Coeli *(weak)* | Instrument Serif (display) + Inter | serif 52 / 44 / 40 / 28; Inter 16 / 14 / 12 / 11 / 10 → serif 40 / 32 / 24; Inter 14 / 11 | serif 1.1; text 1.625 | normal |
| Paulable *(weak)* | Inter + Noto Serif (article body) | 136 / 92 / 44 / 42 / 40 / 30 / 24 / 22 / 20 / 19 / 18 / 17 / 16 / 15 / 14 / 13 / 12; 13 is the most used size on the home (44 runs) and on mobile; on explore 15 dominates (74 runs) | display 1.02; serif 19/32 | −4.2% on the H1 |

Guidelines:
- Two families at most. Canon uses one sans: Inter in Cathopic; Basier Square in Christicons, with its mono sibling only for meta and system text ("Created by:", MENU, npm names). In Portfolio (and Mater Coeli, weak) the serif (Instrument Serif 400) is for display only and Inter does everything else.
- Display goes at 1.0–1.25 line height. Tracking is negative on heavy sans (Cathopic; weak: Paulable) and light on the serif (Portfolio). Christicons leaves it alone (weak: Mater Coeli too).
- Running text goes at 1.45–1.7.
- On mobile the body drops from 16 to 14 (Cathopic, Christicons; weak: Mater Coeli). Long text drops from 18 to 16 (Portfolio). Weak: Paulable's serif drops from 19 to 17.
- In Christicons hierarchy comes from size, weight 500 and tone (a two-colour H1), not from a subtitle. In Cathopic it comes from one heading treatment on a responsive ladder.
- The scales he coded himself (canon):
  - Cathopic type keys: 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 64; arbitrary sizes 13 (footer), 11 (drawer label), 10, 15, 22 and 44 (page title).
  - Cathopic spacing keys: 1=2, 2=4, 1.5=6, 3=8, 4=12, 5=16, 6=20, 7=24, 7.5=28, 8=32, 8.5=36, 9=40, 9.5=44, 10=48, 11=56, 12=64, 13=72, 14=80, 15=96, 16=112, 17=128, 18=144, 19=160, 20=176, 21=192, 22=208, 24=240. 7.5 = 28 is the only key off his scale; 10 is written as an arbitrary [10px] in 79 rules.
  - Christicons spacing keys: 1=2, 2=4, 3=8, 4=12, 5=16, 6=20, 7=24, 8=32, 9=40, 10=48, 12=64, 15=96, 16=112, 17=128, 21=192, plus 9.5=44 for size; 6 only as an arbitrary value.
  - 28 is a type step in both canon sites (Cathopic xl and h3; Christicons' compact title and mobile hero) and 36 is coded in Cathopic: don't flag them as type sizes. 44 (Cathopic page title) and 13, 15, 11 and 22 are coded but off his stated ladder: low priority. 10 is fine for micro labels. As spacing, 28 is still unvalidated by him.

## 8. Measured components

### Buttons and controls

| Site | Primary | Secondary and others | Header | Mobile |
|---|---|---|---|---|
| Cathopic | 60 tall, padding 16/32, pill, text 18/550 | "Browse more" 60 with padX 48, white; tabs 48 (12/20); Filters 48; round arrows of 48 with gap 12; promo button 52 | 40 | primary 56 (52 on the plan cards); search 52; dropdown and icon 44; header 40 |
| Cathopic button system (code) | sizes xs 40 (8/16, 14px), sm 44 (12/16), default 48 → 52 at ≥768 (16/24), lg/xl 56 → 60 at ≥640 (16/32); icon-only 40 / 44 / 52 / 60 | pill by default, radius 10 / 12 when semi-rounded; weight 550; icon gap 10 (8 in sm, 12 in lg); icons 20 at stroke 2 | xs (40) | default drops 52 → 48 below 768, lg 60 → 56 |
| Christicons | none on the page; Subscribe (in the dialog) 52, radius 12, gray-800, 12/500 uppercase | search 400×52 with radius 16; "Customize" 156×52 with radius 16, outline; Copy btn-sm 40, radius 12; clear and close 32 pills | — | search 294×52 + icon 52×52 |
| Christicons button system (code) | sizes xs 32 (px 8, 12px), sm 40 (px 12, 14px), md 52 (px 20, 16px), lg 64, xl 80 | radius 16 (control), 12 (soft), pill for icon-only; gap 12; weight 500 | — | — |
| Portfolio | hero: 56, padX 32, 18/500. Final CTA: 48, padX 32, 16/500 | menu 56; pause 44 | menu 56 | hero: 350×56 stacked with gap 12; final CTA 218×48 (does not stretch) |
| Mater Coeli *(weak)* | 46, padX 28, dark pill, 12/600 uppercase, tracking 0.08em | round icon button 46; arrows 64 | — | 44, padX 24, 11px; icons 44; arrows 48; full-width sticky button, 358×44 |
| Paulable *(weak)* | hero: 48, padX 32, 17/500 | section CTA 44 with padX 24; chips 40 / 36 / 24; "Seguir" 32–40 | 40 (padX 12 on links, 20 on "Empezar") | hero 48 with padX 24; chips 44 |

- Controls with text are pills in Cathopic and Portfolio. Christicons uses radius 16 throughout (12 for soft buttons). Weak: Paulable's icon buttons use radius 6 (37 of them in the article).
- The primary carries padX 32 (Cathopic lg, Portfolio; weak: Paulable 32, Mater Coeli 28).
- Heights step by role: Cathopic 40 / 44 / 52 / 60, Christicons 32 / 40 / 52 / 64 (weak: Paulable 40 / 44 / 48).
- 44 is coded as a size key in both canon sites (Cathopic sm buttons and dropdown pills; Christicons small inputs, swatch trigger and slider thumb) and appears in Portfolio (weak: Mater Coeli, Paulable). It is not in the spacing scale, but it is used as a component height.
- 52 is Christicons' main control height and Cathopic's default button at ≥768.

### Cards

| Site | Card | Size | Padding | Radius |
|---|---|---|---|---|
| Cathopic | category | 178×231 (173×224 on mobile) | 8/8/20 | 16 (12 on mobile) |
| Cathopic | collection | 310×383 | 32 (16 as a mobile row) | 24 (16 on mobile); thumbnails of 120 with radius 12 and gap 6 |
| Cathopic | Empower / "Why Cathopic" feature | 310 wide (310×251) | 32 (24 on mobile); icon 32 → 32 → h4 → 12 → p | 20 (16 on mobile) |
| Cathopic | plan | 421×729 | 48 (36 on mobile) | 24 |
| Cathopic | dark CTA | 1312 wide | 160/112 (48/32/0 on mobile) | 32 (24 on mobile) |
| Cathopic | FAQ item | 700×104 | 40 (28 on mobile); gap 12 | 16 |
| Cathopic | use case | 375×585 (300×465 on mobile) | 48 | 24 |
| Cathopic | detail side panel | 424 wide | 40, gap 24; inner action and details cards 24 | 20; inner cards 16; icon buttons 12 |
| Cathopic | contribute step | 310×381 | 48/32 | 20 |
| Cathopic | contribute category tile | 310×144 | 32 | 20 |
| Cathopic | testimonial | 3 CSS columns | 40/32, 1px gray-200 border | 12 |
| Cathopic | help card | 468 wide | 24, 1px gray-200 border | 12 |
| Christicons | tile | 150×150 (171 on mobile) | 24 | 16 |
| Christicons | package | 320×112 | 24 (20 on mobile) | 16, 1px ring |
| Christicons | Customize | 320×130 | 24/32 (20/24 on mobile) | 16 (20 on mobile) |
| Christicons | dialog | 512 / 448 | 40 (24 on mobile) | 24 |
| Portfolio | work | 580×724 (4:5) | illustration 32/40/72; caption 32 (24 on mobile) | ring 18 / inner 16 (14/12 on mobile) |
| Portfolio | crafts | 546×195 | 8 + 24 on the text | 24 outside / 16 on the image |
| Mater Coeli *(weak)* | image | 823×405 | text 56 from the left and 56 from the bottom, up to 450 wide | 0 |
| Mater Coeli *(weak)* | saints | 400×460 (322×500 on mobile) | 40 (32 on mobile) | 16, 1px border |
| Paulable *(weak)* | feed | no box | py 24 + a 1px line (step of 48); inner gap 10; thumbnail 160×107 | 4 on the image |
| Paulable *(weak)* | sign-up | 680×460 | 32 (28/24 on mobile) | 12 |

- Padding grows with card size: Cathopic 8 → 24 → 32 → 48 (category → inner panel cards → collection and feature → plan and use case); Portfolio 8 + 24 → 32.
- Radius criteria:
  - Grows with size (Cathopic 12 / 16 / 20 / 24 / 32), though not strictly: the collection and feature cards are both 310 wide and carry radius 24 and 20.
  - Concentric (Portfolio: 24 − 8 = 16; Cathopic's detail panel: 20 > 16 > 12).
  - One for everything (Christicons, 16 on 188 of 192 elements; 14 for small controls, 24 for dialogs).
  - Weak: by role (Paulable: pill on controls, 4 on images, 6 on icon buttons, 12 on large surfaces).
- Photography in browse grids is never rounded (Cathopic masonry, contribute feature images and auth collage at 0); UI thumbnails are (Cathopic mosaics 12, 8 on mobile).
- Image ratios are fixed: 4:5 and 4:3 in Portfolio (16:9 on mobile), 4:3 in Cathopic's contribute cards. Weak: 3:2 in Paulable and 16:10 in the Paulable article.

### Fields
- **Cathopic:** hero search of 700×64 (358×52 on mobile), with an inner pill of 104×48. Header search 489×44, fill #ECF0F0, padding 16/20 with 48 on the left; on focus it grows to 56, turns white and opens a panel (radius 0 0 16 16, shadow 0 10px 30px rgba(0,0,0,.12)). Auth inputs 52, radius 12, no border, fill #ECF0F0, padding 16/20, 16/600 text (14 on mobile), 24 apart; focus darkens the fill to #E3E8E8 and adds a 2px inset ink ring. Sub-filter selects 421×56, radius 10, 1px #E3E8E8.
- **Christicons:** search of 400×52, radius 16, padding 8/52, 1px gray-400 border, 24 icon 20 from the left; focus only shifts the border to gray-500. Hex input 44, radius 14, padding 8/16, gap 10.
- **Paulable** *(weak)*: pill search of 560×48 with 48 of left padding for the icon; the header one is 288×40.

### Rows and lists
- **Cathopic:** FAQ items of 700×104 on a grey background, radius 16, gap 12; the plus rotates 45° when open. The footer uses a step of 38 (14 + 24). Drawer links at a 44 pitch (primary) and 40 (secondary). Legal nav pills 45 tall (padding 10/20), gap 4, sticky at 128.
- **Christicons, FAQ:** padding 32/32 (24/24 on mobile); the first row has no top padding; dashed line; step of 87. Mobile menu links at a 37 pitch.
- **Portfolio:** footer links at least 44 tall, gap 32.
- **Mater Coeli** *(weak)*: icon of 56 + 40 to the text; title 16/18 → 12 → text; rows 40 apart. On mobile, icon of 40 + 24 and rows at 40.
- **Paulable** *(weak)*: the feed has a step of 48. Directory links are at least 32 tall (40 on mobile), with a step of 34 (42 on mobile).

## 9. Responsive (1440 to 390)

| Site | Margin | Between sections | H1 | H2 | Body | Grids | Primary button |
|---|---|---|---|---|---|---|---|
| Cathopic | 64 → 16 | 112 → 72 | 60.56 → 36 (page titles 44 → 28) | 40 → 28 | 16 → 14 | 5 → 2, 4 → 1, 3 → 1; masonry 3 → 1 (gap 24 → 16); features → accordion | 60 → 56; 52 → 48; inputs stay 52 |
| Christicons | 220 → 16 | 192 → 160 | 32 → 28 | 32 → 24 | 16 → 14 | 6 → 2, 3 → 1, 2 → 1 | controls 52 → 52 |
| Portfolio | 162 → 20 | 112 → 64 | 64 → 50.7 | 48 → 40 | 18 → 16 (long text) | 2 → 1 | 56 in a row → 350×56 stacked |
| Mater Coeli *(weak)* | 72 → 16 | 72 → 64 (band 128 → 64) | 52 → 40 | 40 → 32 | 16 → 14 | 1 column | 46 → 44, padX 28 → 24 |
| Paulable *(weak)* | 156 / 380 / 200 → 20 | 56–112 → 40–64 | 92 → 52 | 44 → 30 | serif 19 → 17 | 3 → 1; directory 3 → 2 | 48, padX 32 → 24 |

What changes:
- **The canon restructures components instead of only shrinking them:**
  - Cathopic: the feature grid becomes an accordion (77-tall rows, 1px #E3E8E8 borders, collapsed titles at 65 % ink); collection cards turn horizontal (358×160 with a 128 mosaic on the right); media tabs collapse into a "Photos 1.4k ⌄" pill of 44 plus a 44 filter icon; navigation becomes a 300 drawer; the hero search becomes a 52 button with a 44 teal circle; "Join free" stays in the header.
  - Christicons: Customize becomes a 52 icon-only button with an aria-label; section heads switch to left alignment; a tap opens the tile tray (52 tall) instead of hover.
  - Component heights hold while type drops a step (Cathopic inputs 52 with 14 text, the 54 segmented control, the 144 avatar).
- **Small and medium values drop one or two steps of the scale** (32 → 24, 16 → 12, 56 → 40, 64 → 48). Cathopic: card padding 48 → 36, 32 → 24 and 40 → 28, category radius 16 → 12, gaps 20 → 12 and 24 → 16. Christicons: 64 → 40, 20 → 12. Weak: Mater Coeli does it explicitly (72 → 64, 32 → 24, 16 → 12, icon 56 → 40, icon → text 40 → 24, card padding 40 → 32, arrows 64 → 48, 46 → 44).
- **Large values drop 3 to 5 steps or halve:** 192 → 112 and 112 → 72 in Cathopic (208 → 160 in the contribute CTA band, 112 → 72 in its grey band); 112 → 64 in Portfolio; 64 → 40 in Christicons. Weak: 128 → 64 in Mater Coeli.
- **Some values grow:** H1 → lede 24 → 32 in Portfolio; icon → text 16 → 20 in Christicons. Weak: in Paulable, directory rows 32 → 40, "Seguir" 32 → 40 and chips 40 → 44.
- **Values that do not change:**
  - Cathopic: from p to the content, 56 (home sections); input and segmented-control heights.
  - Christicons: 48 from the H1 to the controls, and radius 16.
  - Portfolio: 48 from the intro to the carousel.
  - Weak: Mater Coeli, 40 between items.
- **Navigation:** collapses to the logo and, at most, search, one CTA and the menu.
- **Reorderings:**
  - Cathopic: "View all collections" moves from top right to bottom centre; in the footer, the brand drops below the links; in the CTA, the text sits above the collage.
  - Weak: Paulable's aside moves above the feed.
- **Secondary content is hidden:** Cathopic's auth collage and its legal line (below 640). Weak: Mater Coeli's image cards; Paulable's 136 number and excerpts.
- **The primary action goes full width:** Portfolio's hero, Cathopic's auth button. Cathopic's contribute hero keeps its two 56 buttons stacked at their own width (223 and 194). Weak: Mater Coeli's sticky button.

Recurring mobile problems:
- **Grid orphans:** Cathopic (5 categories in 2 columns) and Christicons (61 icons in 2 columns; on desktop, with 6 columns, one is also left alone).
- **A single column that buries the rest:** Cathopic's Trending section is 6,622 tall (about 7.8 screens), the masonry alone about 6,349 (about 7.5); Christicons' grid is 5,781 (72% of the page, about 6.8 screens of 844), and Packages only starts at y = 6,279 (about 7.4 screens).
- **Widows:** Portfolio ("use"). Weak: Mater Coeli ("Montfort."); in Paulable the last line ("la fe.") fills 40% of the width.
- **Fixed elements that cover content:**
  - Cathopic: sticky toggle with a background at 50% opacity.
  - Christicons: the mobile menu panel has no edge or shadow, so the hero shows through it.
  - Weak: Paulable, a floating pill over the chips; header and bottom bar add up to 118 of 844.
- **Small touch targets:** Cathopic's 36 hamburger, 22-tall "Sign up now" text button and 38 legal pills; Christicons' MENU of 35×21, menu rows of 29 and footer links of 16.

## 10. Layout rules

These are rules of his style, for designing for him, for his own products or "like him"; they are not criteria for judging anyone else's layout. Counts are over the three strong sites (Cathopic, Christicons, Portfolio). Weak sites are named only where they agree, never as support.

1. **One container per page type, and everything fits in it. Only images and bands go full-bleed.**
   - Cathopic: 1312/64 in every section (the detail page uses 40 gutters).
   - Christicons: 1000 (220 on each side) in hero, grid, packages and FAQ.
   - Portfolio: 1116.
   - Holds in 3 of 3. Weak sites agree: Paulable 1128 / 1040 / 680 by page type; Mater Coeli 675 inside the panel (interior pages only).
2. **Text carries its own measure, narrower than the container: display 500–750, lede 525–660, reading 620–700.**
   - Cathopic 525–600 / 750 / 675–700; Christicons 637 / 550; Portfolio 660 / 620 / 500.
   - 3 of 3. Weak: Mater Coeli 500 / 675; Paulable 480 / 680.
3. **One section-spacing token per site and per breakpoint.**
   - Cathopic 112 / 72; Christicons 96 per band edge (192 / 160 content to content).
   - Portfolio 112 / 64, with pb of 116 and 108 (±4, not noticeable).
   - A single padding token in 3 of 3. The visible gap is constant only in Cathopic and Christicons: in Portfolio it runs 206–228 and rises to 380 before the CTA, which has no padding; on mobile, work uses pt 48 instead of 64 and there are 185 before the CTA.
   - Weak: Mater Coeli 72 / 64 on interior pages; Paulable does not follow it (40–112 depending on the module).
4. **Stepped proximity:** 6–16 inside the group, 48–64 from intro to content and 112–192 between sections. The outer gap is at least 7× the inner one. Evidence in §3. 3 of 3 (weak: Mater Coeli 4.5×, Paulable only 3.3× at the start of its feed).
5. **Group with space and, at most, a tonal background or one subtle divider between sections (which he welcomes), never a line on every row.**
   - Cathopic alternates grey and white bands; cards and accordion items are grey fills with no lines.
   - Portfolio uses a single band.
   - Christicons uses no colour bands, but it does use lines: a 1px hairline at both edges of the Packages section and above the footer on desktop; on mobile, rules above Packages and above the footer (not between Packages and FAQ); and dashed lines between FAQ rows in both.
   - No section lines at all in Cathopic and Portfolio (2 of 3). Weak: Mater Coeli uses a closing band and a 48×2 gold rule under each title (a title ornament, not a divider); Paulable separates with 1px #f2efed lines.
6. **The section header follows a fixed stack: eyebrow → 8 → title → 16–20 → lede → 56–64 → content.**
   - Cathopic 8 / 16–20 / 56; Christicons 8 / 20 / 64. On mobile: Cathopic 8 / 16 / 56, Christicons 8 / 12 / 40.
   - Portfolio's stack is not fixed: eyebrow → title 12 (16 in the CTA), and title → text 12, 24 (Why) or 16 (CTA), as §11 records.
   - Fixed in both canon sites; an eyebrow in 3 of 3. Weak: Mater Coeli replaces it with title → 32 → rule 48×2 → 32 → text → 40; Paulable uses a small label 16/600 → 24.
7. **Hero: a 2-line headline; at most 2 actions, with a single filled one; H1 to text 16–24 and text to action 40–48.**
   - Evidence in §5.
   - 2-line headline on desktop in Cathopic and Christicons (Portfolio uses 3); 3 lines on mobile.
   - Display lines of 23–28 characters when the headline is the protagonist (Cathopic, Portfolio); a smaller, longer H1 (~40) when the catalogue is (Christicons).
   - 2 actions or fewer in 3 of 3. When there is a filled CTA it is a single one; Christicons uses no filled control because the action is to search.
   - Weak sites agree, except Paulable's 28 from the H1 to the text.
8. **Centred for the hero and conversion; left for catalogue, reading and lists.**
   - Page titles: left on catalogue and reading pages (Cathopic search, collections, legal), centred on conversion pages (Cathopic pricing, collection hero).
   - The FAQ varies by site: centred in Cathopic, left in Christicons.
   - Measured exceptions: Cathopic's Trending title and Portfolio's work intro are centred.
   - Cathopic, Portfolio and Christicons break it between adjacent sections.
9. **Controls with text have fixed heights by role: 40 in the header, 44–48 for secondaries, 48–60 for the primary, with padX 24–32.**
   - Cathopic 40 / 44 / 52 / 60 (pills); Christicons 32 / 40 / 52 / 64 (radius 16); Portfolio 56 / 48 (pills).
   - Pills in Cathopic and Portfolio; Christicons uses radius 16.
   - In the header Portfolio uses 56, not 40.
   - Weak: Paulable 40 / 44 / 48 (its app-page "Empezar" is 36); Mater Coeli's primary is 46 with padX 28.
10. **Grids divide the container with no remainder.** Cards with gap 20–24 (16 or 12 on mobile); text columns with 48–64; main + side panel with 32.
    - Evidence in §2.
    - The exact division holds in 3 of 3.
    - Exception: Portfolio's carousel, gap 8. *Weak:* main + sidebar of 80 and card gaps of 32–48 appear only in Paulable; don't apply them.
11. **Padding and radius grow with card size, or the radii are concentric.**
    - Cathopic: padding 8 / 24 / 32 / 48 and radii from 12 to 32 (not strict: two 310-wide cards carry 24 and 20); its detail panel nests 20 > 16 > 12.
    - Portfolio: 24 − 8 = 16.
    - Christicons is the exception, with a single radius (16).
    - Weak: Paulable adds a fourth criterion, radius by role.
12. **On mobile, restructure components, then step values down: small and medium values drop one or two steps of the scale, large ones drop 3 to 5 steps or halve, and the side margin is 16 or 20.**
    - Cathopic (112 → 72, 56 → 48, 192 → 112, 48 → 36; the accordion, horizontal cards, tab dropdown and drawer); Christicons (96 → 80, 64 → 40, 20 → 12; the icon-only Customize).
    - Some values grow on mobile (Portfolio, Christicons; see §9).
    - The margins hold in 3 of 3 (weak: Mater Coeli also steps down cleanly).
13. **Shared edges and baselines: what floats or sits in different columns aligns to a common edge.**
    - Cathopic: the plan buttons fall at y 1081; the legal nav text hangs on the title axis.
    - Christicons: the navigation is centred with equal fixed boxes.
    - 2 of 3 (both canon). Weak: Mater Coeli's sticky button matches the column edge; both Paulable hero columns end at y 572.
14. **Touch targets of 40–44 or more on mobile.**
    - Portfolio (footer links of 44), Cathopic (40–44).
    - The main controls comply in Cathopic and Portfolio, with exceptions in Cathopic (hamburger of 36, text buttons of 22, legal pills of 38).
    - Christicons is the serious case: MENU of 35×21, menu rows of 29, footer links of 16.
    - Weak: Mater Coeli (44, but pagination dots of 4×4), Paulable (links of 40, controls of 40–44).

## 11. Measured deviations

His values, not deviations:
- **10:** a legitimate value of his system for small-component distances where 8 is too tight and 12 too loose (never section, card or layout gaps). Cathopic: the icon–text gap in every button (×20 on the home; 12 more come from the hidden cookie widget; 79 rules in the stylesheet), menu-item radius, legal nav padY, hover-plate insets. Christicons: logo → "V2.0" badge, small input-shell gap, slider labels. Portfolio: "New" badge and title + badge group (×48). Never flag it.
- **6:** Cathopic (thumbnail gap; title → author), Christicons (name → slug, package text gap).
- **36:** Cathopic (pricing pill; plan padding on mobile; hamburger), Christicons (mobile Customize pb).

### Off-scale values

| Site | Where | Value | Visible? | Verdict |
|---|---|---|---|---|
| Cathopic | vertical padding of the carousel: the "Everything" band ends up with 112 above and 84 below (72 / 44 on mobile) | 28 | yes | deviation |
| Cathopic | from the cards to the carousel arrows | 52 | yes, a little loose | deviation |
| Cathopic | pricing: from the pill to the H1 and from the cards to the note | 28 | yes, tight next to 16 / 40 / 64 | deviation |
| Cathopic | other uses of the 7.5 = 28 key: footer description mt, use-case track py | 28 | slightly | unvalidated |
| Cathopic | padding of the downloads segmented control | 3 (odd; the toggle uses 4) | yes | deviation |
| Cathopic | from the masonry to the button | 73 | no | minor |
| Cathopic | category gap | ~20.5 (fractional) | no | minor |
| Cathopic | promo inner margin | 50 on desktop / ~34 on mobile | yes | deviation |
| Cathopic | FAQ padding on mobile | 28 | yes | deviation |
| Cathopic | heights: toggle 49, mobile pill 29; legal pills 45, "Upcoming dates" rows 59, "Load more" 67 (padding plus line height). The 60 primary and 52 buttons are coded control heights, not deviations | — | yes | off-scale |
| Cathopic | H1 of 60.56 (fluid) and 44 (search); on mobile, text of 22 and 11 (the 10 promo label is a micro label: fine) | — | yes | off-scale (44 and 22 are coded title steps: low priority) |
| Cathopic | line height 1.55, giving 21.7 / 24.8 / 27.9 | — | no | off the 2px grid |
| Cathopic | header at 32, content at 64, detail page at 40 | 32 / 40 | yes | misaligned: three gutters |
| Cathopic | the same keyword chip at 48 / 16px (results) and 40 / 14px (detail); page titles of 44 and 48 | — | yes | inconsistent |
| Christicons | control height | 52 | yes, it sets the main row | coded control height in both canon sites; not a spacing value |
| Christicons | hero bottom padding on mobile | 73 | yes | deviation (72 or 80) |
| Christicons | from the icon to the label in the tile | 25 (comes from centring) | reads as centred | tolerable |
| Christicons | navigation at 15, footer at 13 (the 10 version badge is a micro label: fine) | — | yes | off-scale (coded type tokens: low priority) |
| Christicons | control group of 568 inside a 564 container | 2 per side | no | minor |
| Christicons | widths of 637, 550 and 415 | — | — | arbitrary: neither Tailwind nor φ |
| Christicons | Customize card min-h 126 (renders 130 / 118); popover 264 wide at radius 18 around a 14 field with 8 padding | — | slightly | off-scale; not concentric (14 + 8 = 22) |
| Christicons | Subscribe at radius 12, 4 from a 16 field | — | yes | mixed radii |
| Christicons | footer copyright centred at 688 instead of 720 | 32 | to a careful eye | misaligned |
| Portfolio | bottom padding of work and crafts | 116, 108 | no | undocumented optical compensation; or use 112 |
| Portfolio | fluid H1 on mobile | 50.7/65.91 | yes | off the type scale (48/64 or 52) |
| Portfolio | line heights of 25.6 / 30.6 / 22.4 / 19.2 | — | no | off the 2px grid |
| Portfolio | work intro on mobile with px 24 over a margin of 20 | 4 | slightly (the text is centred) | misaligned |
| Portfolio | header at 48 and content at 162 | 114 | yes | misaligned |

Mater Coeli and Paulable deviations are listed under "Weak sources": they are not his.

### Structural inconsistencies
- **Axis changes:**
  - Between adjacent sections: Cathopic home; Portfolio (from x162 to x410, a jump of 248); Christicons (from Packages to FAQ).
  - Across pages: Cathopic's three gutters (32 / 64 / 40).
  - Inside a component: in Cathopic's plan card the text is left-aligned and the price centred.
  - Cathopic legal on mobile: the pill text sits at x30, 14 off the title axis.
  - Weak: in Mater Coeli's sidebar, logo and footer are centred and the navigation left-aligned; the navigation axis jumps from 78 to 85 between pages.
- **The same pattern with different gaps:** Portfolio: eyebrow to title 12, and 16 in the CTA; title to text 12 / 24 / 16. Weak: Mater Coeli, p to CTA 40 / 48 / 44.
- **Same width, different radius:** Cathopic's collection and feature cards are both 310 wide and carry radius 24 and 20.
- **Same component, different size:** Cathopic's keyword chips are 48 / 16px on results and 40 / 14px on detail.
- **Two primaries for the same action:** in Portfolio, 56 with 18 text vs 48 with 16 text. On mobile one stretches and the other does not.
- **The page title has no stable range:** in Cathopic the H1 is 60.56 / 48 / 44, and on mobile the H1 (28) equals the H2 (28).
- **Hero visually off-centre:** Portfolio sits 55 below the centre (505 vs 450). Weak: Mater Coeli on mobile leaves 188 above and 207 below.
- **Inconsistent separators in Christicons mobile:** two breaks with 80 | line | 80 and another with 160 and no line.
- **Inverted spacing in Christicons:** icon to text is 16 on desktop and 20 on mobile.
- **Layout accessibility:** Christicons, touch targets of 16 to 35; Cathopic, a 36 hamburger and 22-tall text buttons. Weak: Mater Coeli's pagination dots of 4×4 and white text over light flowers on the "Donaciones" card.
- **Layout shifts:** in Christicons, contain-intrinsic-size reserves 480 / 820 when the real content is 495 / 622, and the page jumps 279 px.
- **Weak, not his:** Paulable's trends are 3×344 inside 1128 and 3×~315 inside 1040; in Mater Coeli's saints card on mobile the content needs 467 of height and the card gives 434, so the bottom padding ends up at 0; in Paulable the email sign-up button wraps to 2 lines and is 62 tall vs the primary's 44.

## Measurement limits
- Measured only at 1440 and 390. No tablet. Hover and active values come mostly from the stylesheets; live checks only for Cathopic's media-tile overlay, header search panel and auth input focus, and for Christicons' tiles, Customize panel, colour picker, dialogs and mobile menu.
- Cathopic's signed-in states, modals, toasts, form errors and upload flow were not measured; Christicons' /about was not visited.
- Of Mater Coeli /consagracion/ only step 1 was measured.
- The desktop screenshots came out scaled: composition judgements come from small images and the numbers from the DOM.
- Cathopic search and profile, and Paulable's home, load content endlessly, so absolute heights change. That is why relative distances are given.
- Cathopic was measured twice (October tokens via Wayback, November live). Where they differ, the November value leads and the earlier one is noted.
