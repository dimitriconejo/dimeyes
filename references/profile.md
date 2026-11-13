# Dimitri's design profile

Reference for the Dimeyes skill: his signature, his words, his calibration choices and how he solves each component.

> **Scope: his style, not a template.** This file documents how Dimitri's own work looks and is built. Use it to design for him, for his own products (Cathopic, Christicons, dimconex and the Catholic network apps he designs) or "like him", and to recognise his signature when reviewing his own work. A Catholic or parish subject is not his product. Never use it to push another design toward his look: other designs are judged in their own language with `eye.md` (see "Two layers" in SKILL.md). When a design has no system, fill the gap with his eye, not his look: his spacing scale, a short type ladder, concentric radii and colour roles built from the design's own palette, type and shapes; say which values were added.

**Contents:** Source weighting · Stated principles · In his own words · Calibration: surprising decisions · Critique priorities · Signature (numbered rules with evidence) · Components · Typography · Color · Space and rhythm · Imagery · Microcopy · Exceptions and tensions · Evolution · Flaws seen live · Open questions. Find the section with grep (`^## `) instead of reading the whole file when you only need one part.

**Order of authority.** What he has said ("In his own words", "Calibration" and "Critique priorities") outranks what we have inferred from his work. Within his work, canon outranks secondary, and weak sources are never evidence (see "Source weighting"). Within a source, tokens measured in code outrank what was measured in screenshots.

**Measurements.** Screenshot measurements are estimates (~): in the app, in pt on a 375 pt-wide iPhone; on the websites, in px. In a screenshot measurement, a deviation of 1–2 may be rounding. In a Figma file or in code, the value is real.

## Source weighting

His own ranking (12 November 2026) of which work represents his eye. Derive rules from canon first; secondary work confirms or adds; weak sources never count as evidence, and their deviations are not his.

- **Canon.**
  - **Cathopic**, the production site: "the ones I created myself are Cathopic, what's in production now" (*los míos creados por mí es Cathopic, lo que hay en producción ahora*). The beta pricing screenshot (**Pricing**) is also his.
  - **Christicons** (christicons.com): his, and one he highlights.
  - **Flodesk** (flodesk.com): a referent, not his signature, but the one he points to as closest to how he sees and thinks design: "so you get an idea of my way of seeing it and thinking it" (*para que te hagas una idea, mi forma de verlo y de pensarlo*).
- **Secondary** (his work, lower weight): the Catholic network's app boards (Intentions, Rosary, Media, Detail, H1–H3, B1, B2) and its website (W1), the portfolio (dimitriconejo.com) and the dimconex identity.
- **Weak** (no rules are derived from them):
  - **Mater Coeli**: "a pretty project, but I think it's dated" (*un proyecto bonito, pero creo que está anticuado*).
  - **Paulable**: "it was made with AI, so I had little room to judge dimensions" (*se hizo con IA, tuve poco margen para valorar dimensiones*). Its type sprawl and off-scale values are not his.
- **Excluded**: Holydemia (old work) and Mailgami (a collaboration).
- **Other referents**: ls.graphics, Apple, Linear and Mobbin.

**Source tags.** Every piece of evidence names its source. Cathopic, Pricing and Christicons are canon; H1–H3, B1, B2, Intentions, Rosary, Media, Detail, W1, the portfolio and dimconex are secondary. A rule that only weak sources support is dropped or marked *weak*.

**Sources**
- His answers to the calibration test, three critiques he wrote, four later decisions, and his source ranking with two corrections (emojis and 10 px).
- Canon, measured live in the DOM at 1440 and 390 (November 2026): cathopic.com (home, pricing, search results and empty search, photo detail, collection, collections, sign-in and sign-up, contribute, contributor profile, legal, help centre, 404 and mobile drawer) and christicons.com (home, Customize panel, colour picker, dialogs and mobile menu), with the tokens from their compiled CSS. Earlier Cathopic tokens via Wayback (7 October 2026).
- Secondary website: dimitriconejo.com (portfolio), with the tokens measured in its code.
- dimconex media identity (rising sun with the Benedictus quote).
- Product screenshots: Cathopic's beta pricing page (**Pricing**) and, from the Catholic network's app (EWTN), **Intentions**, **Rosary**, **Media** and program **Detail**.
- Boards from the same app:
  - **H1**: account sheets (menu, edit account, notifications and time modal).
  - **H2**: Reading Preferences and account deletion confirmation.
  - **H3**: "Concept 4", account menu.
  - **B1**: Bible (book cover, scrolling reading, daily readings and loading skeleton).
  - **B2**: Bible (navigation, chapter picker, calendar and audio mode).
- **W1**: the network's website on desktop at 1440, signed-out user.
- Weak, kept for reference only: matercoeli.com and paulable.com.
- Holydemia is old work: anti-reference only, in "Evolution". It is never evidence of his judgment.

## Stated principles

- Simplicity and clarity. The fewest elements possible, and only the necessary ones.
- Space is king: hierarchy, zero noise, composition.
- Every element in its place, with the weight its importance deserves.
- Scale: 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96, 112, 128, 144, 160… (detail in "In his own words").

## In his own words

**North star.** "In the end a design is beautiful when you feel harmony. When the eye feels harmony." (*Al final un diseño es precioso cuando se siente una armonía. Que el ojo siente una armonía.*) He used the word in the calibration test too: he chose the on-scale card because "the spaces are better cared for, they convey more harmony" (*los espacios están mejor cuidados, transmiten más armonía*). Harmony is the final test every rule serves: repeated rhythm from a few scale values, proportional relationships, shared alignment axes, one typographic voice, colour restraint, concentric radii, consistent components and nothing that pulls the eye without a reason.

**Who he works for.** Catholic audiences, organizations, startups and his own products (his company).

**What the skill must do.** Analyze any design (web, interface or graphic piece) and correct it as if he had corrected it himself, attentive to every detail.

**Why he discards a design immediately.** Poor structure, lack of composition and hierarchy, poor use of space and sizes, badly placed colors and focus where it shouldn't be.

**References.** Apple, Linear and Mobbin; also ls.graphics. Flodesk is the one closest to how he thinks (see "Source weighting").

**Scale.**
- 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96, 112, 128, 144, 160… From 80 up it rises in steps of 16.
- Applies to spacing, font sizes and line height. For font sizes he adds 14 and 18.
- Widths: the golden ratio and Tailwind conventions as reference.
- 10: "some values, like 10 pixels, I sometimes need, because 8 pixels doesn't convince me, nor 12. The distance." (*hay códigos como el de 10 píxeles que a veces lo necesito, porque no me convence el 8 píxeles ni el 12 píxeles. La distancia.*) Earlier: "on occasions where 10px works better compositionally, it's fine to use it" (*en ocasiones donde a nivel de composición queda mejor 10px, no pasa nada si se aplica*). 10 is a legitimate value of his system for small-component distances where 8 is tight and 12 loose, not a deviation: his code uses it in every Cathopic button gap and in Christicons' small optical gaps. It is never a section, card or layout gap. Never flag it.
- 6 is a regular step. Off-scale: he tolerates 36 when the composition calls for it; values stay multiples of 2 or 4. Flag arbitrary values (45, 116, odd numbers) and those that break the rhythm.

**Color.** A complete system:
- First the brand color, chosen according to the project's context.
- From it, nine shades (100–900).
- Grays tinted with the brand color, in steps of 50.
- Semantic colors (success, info, warning and danger) in 100–900, consistent with the brand.

**Radii.** Concentric: the child has a smaller radius than its container. His exception: if the child ends up nearly square, he adds a little "so it doesn't look broken" (*sin que se vea roto*).

**Contrast.** His choice is visual judgement (*criterio visual*): judge by eye at real size and distance, never by a blind numeric rule. Flag text that is genuinely hard to read. In audit mode a measured ratio may back the judgement as evidence, and for a public product WCAG can be mentioned as context. In the test he chose the most legible gray "because it reads better" (*porque se lee mejor*).

**Eyebrows** (small uppercase labels above headings). A valid device; they are not penalized.

**Feedback.** With exact values: "2 px missing here" (*aquí faltan 2 px*), "the radius should be 8 instead of 12" (*el radio debería ser 8 en vez de 12*). In his written critiques he names the problem without giving the value; in Figma he gives exact values. The skill does both: first the diagnosis of the big issues, then the corrections with values.

**Holydemia.** Old work. Anti-reference only.

**Not yet answered.** Typography: families, number of sizes and weights.

## Calibration: surprising decisions

We got 11 of 13 predictions right. These answers contradict what we expected from his work and change how the skill critiques:

- **Cards over loose figures.** In a KPI row we predicted he'd prefer the figures without containers, grouped by space. He chose cards: "more visual and consistent" (*más visuales y consistentes*). He is not anti-container. The critic does not ask to remove cards that group coherently; it does ask to remove those that only add noise, and a card inside a card of the same surface and weight. A tonal step that groups one set of actions (a grey panel holding a white card, as on his Cathopic detail page) is fine.
- **Filled status pills over a dot with text.** He wants status to be told apart quickly. There, legibility outweighs restraint.
- **The concise empty state seems "too simple" (*demasiado simple*) to him.** He chose neither version, though he leans toward the concise one. Minimal is not poor: he wants some visual anchor, with no chatter or decorative emoji.
- **Label above or placeholder: "I like both techniques" (*ambas técnicas me gustan*).** A label above and a persistent label inside the field are both fine; in his app he uses the latter, a small label inside the box, above the value. A placeholder that vanishes on typing is a finding only in forms of more than 2–3 fields.
- **He tolerates mild redundancy.** Close X and Cancel button together: "I like both" (*ambas me gustan*). Low severity. Repeated save buttons, however, he did flag in his Settings critique.
- **Separators between sections, yes; between every row, no.** A line on every row "clutters" (*satura*), but space alone isn't enough for him either: one subtle divider between sections is welcome. Platform-standard inset separators (iOS grouped lists) are not "a line on every row".
- **Icon with label in navigation.** Icons help tell items apart. Consistent with his app menus.
- **Comfortable 56 rows in a daily-use table.** He prefers air even in a tool used every day (he chose 56 over 40). The critic does not ask to compact for efficiency; compact only when the task needs many rows visible at once, and say why.

**What he confirmed**
- He spots off-scale rhythm, but explains it through grouping: the meta must sit closer to its text than to the buttons. He sees proximity first and pixels second.
- Proximity 8/24/32: the label tight to its field, "little groups of information" (*grupitos de información*). Without groups there is no hierarchy.
- The version with fewer hierarchy devices: "says the same without unnecessary elements" (*dice lo mismo sin elementos innecesarios*).
- Obvious size jumps in the type scale.
- Concentric radii.
- Accent only on the CTA. Spread around, it's misuse of color.
- He spots 2–4 px alignment mismatches.
- In contrast, legibility wins.
- Depth: border with soft shadow, "elegant, without overdoing it" (*elegante, sin exagerar*).
- Cover: neither of the two convinced him and he didn't say why.

## Critique priorities

Drawn from his three written critiques (Settings, Pricing and Finance). It goes from big to small and always repeats this order:

1. **Color.** Always first: overused accent, too many colors, color "overdone and misused" (*exagerado y mal usado*), overdone gradients and shadows (the PRO badge gradient, "flashy" (*cantoso*); the purple in Finance), amounts in different colors that make reading harder, and emojis that add colour without a job (one meaningful emoji is fine).
2. **Hierarchy.** "Little hierarchy, everything mixed together" (*poca jerarquía, todo mezclado*), poor composition, focus where it shouldn't be.
3. **Compressed space.** Cramped information and sections that can't be told apart: "in a vertical sweep the spaces don't exist" (*en un barrido vertical los espacios no existen*).
4. **Component inconsistency.** Each card with a different structure, fields of different heights, labels that differ from one another, too many buttons, repeated save buttons.
5. **Legibility.** The email that can barely be read, invisible logos.
6. **Interaction.** Top buttons impossible to tap (touch targets) and a flat bottom bar that should float over the content.
7. **Details.** Last. For example, the missing real avatar.

**What he didn't mention** among the things we had planted in those screens:
- emojis (in his words, the screens were so saturated he could hardly tell everything apart: neither accepted nor rejected; see "Color");
- eyebrow and breadcrumbs stacked;
- more space below the heading than above;
- font sizes of 11, 12, 13, 14 and 15 on the same screen;
- line height of 1.05;
- redundant discount (strikethrough, -20 % and "Ahorra");
- the ">" character instead of an icon;
- mixed date formats;
- an icon misaligned by 2 px.

Read this as low priority, not as acceptance. In the direct comparison he did spot 2–4 px, and he asks the skill to be attentive to every detail; he may have counted some of them under "little hierarchy". The critic flags them at the end, in the details block and with the exact value, without letting them hide the big issues.

**Critique format.** See SKILL.md, "Response format". Values come from the design's own system; his scale only where it has none.

## Signature

What recurs in his work. Each rule says where it holds and leads with canon evidence (Cathopic, Christicons). If it has only been seen in one product, it counts as a hint for that kind of product, not as a general law. Mater Coeli and Paulable are weak sources and never count as support.

1. **Monochrome first, with a single brand color per product, used sparingly.**
   Evidence: Cathopic: teal #007D8C carries only primary actions and eyebrows (3 text uses on the home); everything else is a teal-tinted neutral ramp, and ink #141819 is the second, "loud" surface (active tab, sign-up band, footer, overflow tile, 404 button). Christicons: near-monochrome warm gray; teal #2D6970 appears only in the two overlines and the footer credit hover (2 of ~230 text runs), and third-party package logos are forced to gray-500. Pricing keeps teal for the recommended plan. The network's app uses red. In the app, the primary is a blue-black ink and red appears at most once per screen: the rule under the title in Rosary, the curved-edge line in Media and Detail, the Listen icon in B1 and the delete button in H2. Besides the accent he allows semantic colors (green for active or discount, red for destructive, orange for warnings, yellow for the pin) and muted content color (category strips and reading highlight in B2). In the test he chose the accent only on the CTA. The critic does not flag as a second accent a color with a semantic or content function; it does flag the brand color repeated without a function (W1) and off-palette accents, in his canon too: Cathopic's info-blue Follow button, the cyan gradient text on "Liturgical calendar" and the multicolour affiliate gradient (see "Exceptions and tensions").

2. **Tinted blacks and grays, not #000 or neutral gray.**
   Evidence: in the network's app and website, blue-black ink (~#131B22–#141B24; midnight blue in Rosary), although there are headings in #000 (H1, H2, B1). In code, each site has its own tinted ramp: cool teal-gray in Cathopic (gray-50 #FBFDFD, 100 #F4F7F7, 200 #E3E8E8, 300 #CED6D6, 400 #ABB6B7, 500 #838F91, 600 #636D6F, 700 #434B4D, 800 #272D2F, 900 #141819), warm in Christicons (#F6F5F2 / #EFEDE8 / #E8E5DF / #D7D2C9 / #978F84 / #756E64 / #524C43 / #0B0A08) and warm in the portfolio (#1a1713 / #716b64 / #f6f3ef). Secondary text is a ramp step, not reduced opacity (Cathopic gray-600 and 700), and Christicons even tints its shadows (gray-700 and 800). Background with temperature in Pricing (greenish gray) and in the portfolio (warm white); Christicons has a white page with warm gray-100 tiles. This is what his system states: grays tinted with the brand. The light grays in the network's app are neutral and deviate from that system.

3. **Serif for content and names; sans for chrome. No fixed rule for headings.**
   Evidence: in the network's app and website, serif for the Bible text and the drop cap (H2, B1, B2), proper names (user in H1 and H3, books and feast day in B2, programs) and moment headlines (deletion question and consent in H2, hero and locked state in W1). Sans for chrome, labels, controls and the B1 headings ("Introduction", "Chapter 24"). Screen and section titles are serif in Intentions, Rosary, Media and Detail, and sans in "Today", "Bible" and B1. On the websites it depends on the brand. Canon uses a single sans family: Inter in Cathopic (variable, stylistic sets ss03, cv01 and cv11) with a large, tight headline; Basier Square in Christicons, with its mono sibling only for meta and "system" text ("Created by:", MENU, npm names). Instrument Serif appears in the portfolio headlines (with stray italic alternates inside the word: "D*i*mitri", "*p*eople"). The critic does not demand serif or sans based on this rule.

4. **Hierarchy comes from size, weight and tone, not ornament.**
   Evidence: Cathopic gives every heading one treatment (weight 630, line height 1.15, tracking -0.044em, -0.035em at 16–20) on a ladder that steps at 768, 1100 and 1300; buttons and navigation 550, body 400 at 1.55. Christicons uses only weights 400 and 500 with tracking 0; the second line of its headline turns gray-500 at the same size and weight, and primary, secondary and meta text are gray-800, 600 and 500. Large headlines with negative tracking also in Pricing (~80) and W1 (~64 with line height 1.0). In H1 and H3, a ladder of grays with icons one tone below the text. In dimconex, the quote steps down in tone against the logo. In the test he chose obvious size jumps and the version with fewer devices.

5. **Buttons, chips, segmented controls and context pills as pills; icon-only buttons as circles.**
   Evidence: Cathopic: every button, chip, tab, toggle and the header search are pills (radius 9999 ×47 on the home) with fixed heights of 40, 44, 52 and 60; icon-only buttons are circles of 40, 44, 48 and 52; only form inputs (12) and the semi-rounded button variant (10–12) leave the pill. Anual/Mensual selector (Pricing); segmented controls (Intentions, Detail, B2); buttons (H1–H3, W1); chips (H2); circles for back, more, close and menu. Not pills: text links (navigation, "Iniciar sesión", "Comparar todos los planes", "Delete account"), underlined tabs (B2), list rows, chapter picker cells and option cards (H2). Christicons is the exception: text controls take its single radius token (16), and only icon-only ghost buttons, swatches, the slider and the avatar are round.

6. **A single filled primary action per block (sheet, card or hero); the rest goes gray, outline or text.**
   Evidence: Cathopic: one filled teal "Join free" in the header; the home hero has a single action (search); each pricing card has one CTA; the auth pages have one teal pill and a text link; contribute pairs one primary with one white pill. Christicons has no filled control on the page (search and an outline Customize); its only filled primary, Subscribe, lives in a dialog. My List (H1, H3) and Save (H1, H2) are the only filled element in their view. The portfolio combines outline and black. In code, the hero has at most two CTAs and the second is always understated. Exceptions seen: the Pricing header repeats the sign-up CTA in black ("Únete gratis") next to the recommended plan, and in Media every row has a black circular play. W1 breaks the rule. In his Pricing critique he flagged "too many buttons" (*demasiados botones*).

7. **Group with space. Separators between sections, not between every row.**
   Evidence: Cathopic separates surfaces by tint (gray-100 bands, cards and accordion items on white), with no lines between sections; lines appear only as functional hairlines (mobile accordion rows, drawer section labels, footer bottom bar). Christicons separates by tonal fill too, with a hairline at each edge of the Packages section and dashed dividers between FAQ rows. H2 has no lines at all. The B2 book list groups with space only (~48 between groups, ~24 from the label to the first book and 12–16 between books). The H1 settings have no dividers. Thin lines appear in lists and tables (Rosary mysteries, Pricing table, Christicons FAQ, H1 and H3 menu), under section headers (B1) and as functional separators: under the tabs, between columns in the chapter picker and under "Chapter 2" in audio mode (B2), in the wheel band (H1), before the legal notice (B1) and between the logo and the launcher (W1). In the test, a line on every row "clutters" (*satura*), but between sections he'd put some separator. And he chose 8/24/32 so the label sits tight to its field.

8. **Resting structure sits at the edge of visibility.**
   Evidence: in the light app, dividers, chevrons, grabber and resting outlines hover around 1.05–1.5:1 (H1, H2, H3, B2). Borders that mark selection or something special do have contrast (H2, Pricing, Intentions, W1). It is a trait of his and also a recurring flaw. The critic flags it when, by eye, the line or chevron stops doing its job (doesn't separate, doesn't signal that you can go in), not because of the number. The canon has it too: Christicons' input border (gray-400, ~1.5:1), FAQ chevrons and dialog close icon, and Cathopic's inactive tab counts (#ABB6B7, 2.08:1).

9. **Content cards by fill and borderless; option cards and chips with a thin outline.**
   Evidence: Cathopic: category, feature and collection cards, accordion items and the detail panel are gray-100 fills (or white on gray-100), borderless, with at most a 0 3px 6px rgba(0,0,0,.03) shadow; borders only for white on white (white buttons and Filters with 1px #E3E8E8, testimonial and help cards with 1px gray-200). Christicons: tiles and Customize cards are gray-100 with no border or shadow; package cards on white get an inset 1px #E8E5DF ring. Borderless are also the Pricing and Intentions cards, the B1 video card (#F5F5F5), the B2 calendar card and the H2 preview box (#F9F9F9). The H2 option cards and chips have a thin outline at rest; selection darkens it and adds gray fill and shadow. A colored border or thick white marks what is special: the recommended plan (teal), the Pope's card, W1's expanded card. In the test he preferred cards to loose figures because they group coherently.

10. **Concentric radii: the inner element has a smaller radius than its container.**
    Evidence: sheet ~24 > field ~10–12 (H1); card ~12 > thumbnail ~6 (B1); modal ~18–20, less than the sheet (H1). He confirmed it in the test and in his own words, with his exception: if the child ends up nearly square, he adds a little. Across products there is no single radius scale. Cathopic grows radius with surface size (inputs 12, small cards 16, feature cards and side panel 20, collection, pricing and use-case cards 24, sign-up band 32) but not strictly (cards of similar width carry 16, 20 and 24), and nests concentrically in the detail panel (20 > 16 > 12). Christicons uses one token for everything (16; 14 for small controls, 24 for dialogs). W1 uses ~6, and ~12 on the expanded card. Photography in browse grids is never rounded (Cathopic masonry, contribute images and auth collage at 0); UI thumbnails are. The critic does not demand a radius by size, but coherence within the composition and between sibling elements (Christicons' 12 Subscribe button 4 px from a 16 field is the kind of mismatch to flag).

11. **In navigation and options, selection is marked by dimming the rest, with a pale fill or with ink, never with a block of brand color.**
    Evidence: Cathopic marks the active legal-nav pill with gray-200/75 and weight 600, the billing toggle and download options with a white indicator on a gray track, and the active media tab with ink #141819 and light text, never teal. Christicons' open Customize trigger turns gray-200. In B2 the book column and the non-active verses are dimmed, and the current one sits in a pale circle; in H2, #F5 fill, darker border and shadow; in B1's tab bar, a gray ellipse with the filled icon. Exceptions with color: the current day and chapter number in blue (B2), the active toggle in green (H1) and the amber highlight of the verse being played (B2). This applies to selection, not status: for statuses (active, pending, error) he preferred filled colored pills in the test.

12. **Centered for identity, dialogs and moments; left-aligned for forms, rows and reading.**
    Evidence: Cathopic centres the hero, the pricing intro, the collection hero, the sign-up card, the auth stack and the 404, and left-aligns the search, collections and legal page headers and all card content. Christicons centres the hero (and the Packages head on desktop) and left-aligns the grid and the FAQ. Also centered are the sheet identity (H1, H3), the book hero (B1), dialogs (H1), the deletion confirmation (H2), W1's locked state, the Pricing headline and the dimconex composition. Left-aligned: forms, rows and the reading body. The desktop hero over an image is left-aligned (W1) and a short list in an overlay can be centered (Media). The daily readings title appears both ways (centered in B1, left-aligned in B2).

13. **Three-position headers in sheets and modals, two-position in root screens.** Only in the network's app.
    Evidence: in sheets and modals, back or close circle, title or context pill in the center and action pill or circle on the right (back, title and Save in H1 and H2). In B2's navigation there are only X and pill, with the right empty, and the pill doesn't move when opened. A confirmation sheet may carry only the back button (H2). In root screens, large title on the left and one or two circles on the right ("Bible" with menu on B1's cover; "Bible" with share and menu in Daily Readings; "Today" with pause in H1 and H2, and with menu in H3). On scroll the context pill appears in the center (B1, B2).

14. **Full-bleed image as atmosphere, darkened or blended with the background.** Not across all his work.
    Evidence: sacred art under the sheets (H1–H3), mosaic (Rosary), poster (Detail), black-and-white photography where only the red remains (W1), photo with search bar under four stacked scrims (Cathopic home), a cover that fades into white (Cathopic collection) and desaturated sunrise with a heavy dark overlay (dimconex). On edge pages Cathopic uses quiet photography instead of illustration (auth collage, faded photos on the 404). Not used by the Bible (B1, B2), Pricing, Christicons or the portfolio; there, typography, typographic texture or isolated objects lead. The critic does not ask for full-bleed imagery by default.

15. **Icon buttons in a translucent circle over the image; the main action stands out by size and contrast.** Only in the network's app and website.
    Evidence: translucent circles in Intentions, in Detail and over "Today" (pause in H1 and H2, menu in H3). The main action is a white pill between two circles in Rosary ("Pray the Rosary"), a larger white circle in the center in Detail, and in W1's expanded card a red play pill followed by two circles, on the card's dark surface rather than over an image.

16. **Curved bottom edge, traced with a thin red line, between image and content.** Only in Media and Detail.
    Evidence: Media and Detail. Intentions crops the image in an arc. The sheets and the Bible don't use a curve.

17. **Eyebrows: small labels above sections.** He considers them a valid device and they are not penalized. Impeccable forbids them; the skill follows his judgment. Letter case varies.
    Evidence: Cathopic: 14/600 uppercase teal, no tracking, 8 above the title (12 px on mobile), two or three words ("WHY CATHOPIC"). Christicons: 12 uppercase teal, tracking 0, 8 above the title ("PACKAGES", "FAQ"). Uppercase with tracking in the portfolio, Intentions (month), B2 ("GOSPELS") and H2 ("PREVIEW"). In B1 they are in sentence case without tracking ("Daily Readings").

18. **Metadata separated by a middle dot; outlined badges in the app.**
    Evidence: Cathopic: "@zvonim · 3 Followers · 0 Following", "Recent searches · Clear". Middle dot in Media, Detail, Intentions and B2 ("Series · 9 episodes", "2026 · Drama · 125 min", "Name · 30 minutes ago", "Jonah · Psalms · Luke · +3 more"); on the web, "3 min de lectura". Outlined CC, HD and TV-G badges in Detail and W1. Exceptions: in W1's expanded card the meta is separated by space only ("3 seasons   Drama"), and in B1's video card the duration is right-aligned.

19. **Line icons one tone below the text; fill only for the selected item or playback.**
    Evidence: Cathopic: monoline SVGs (stroke 1.5–2.25, no fill) in gray-600 at 16, 20, 24 and 32, coloured only for state (info-blue verified check, green money-back shield); in white and light buttons, icons sit at 50 %. Christicons: 24 line icons at stroke 1.5 with round caps. In the light app, line icons (~1.5 stroke, ~18–20) in mid gray (H1, H3, B1). On dark backgrounds they go white, like the text (W1). Inside a button they take its color (H1), and the Listen one is in brand red (B1). Fill on the active tab (B1) and on the playback controls (B2). In the test he preferred icon with label in navigation.

20. **Reading is typeset like an edition.** Only in the app's Bible.
    Evidence: serif at ~15–17 with ~25–28 line height (~25 in B1 and B2, ~28 in the H2 preview), superscript verse numbers in gray, three-line drop cap, verse 1 without a number and legal notice at the end in gray sans (H2, B1, B2).

21. **Show the value instead of naming it.** The network's app and website.
    Evidence: in H2, "Aa" chips at their real size, layout pictograms and live preview. In B2, "Verse 8" follows the thumb when dragging. In W1, the real content appears blurred in the locked state.

22. **The account and its settings open in a bottom sheet over the live screen.** Only in the app.
    Evidence: H1, H2 and H3. Bible navigation (B2) and Media categories open full screen, and one-off settings in a centered dialog (the time, in H1).

23. **Floating pill-shaped tab bar.** Only in the app.
    Evidence: Media (glass effect, active tab in a pill) and B1 (inset ~32, five tabs, diffuse shadow). In his Finance critique he asked for the bottom bar to float over the content instead of looking flat.

24. **Designs states as named frames.** The network's app and website.
    Evidence: skeleton, "actions show" and "license advice" in B1; "1440px - SIGNED OUT USER" in W1; four states of the same sheet in H1; versions V2, V3 and "Concept 4".

25. **Ornament comes from the theme or is discreet atmosphere.**
    Evidence: thematic in the drop cap (B1) and the twelve-ray sun of dimconex, which springs from the Benedictus quote that accompanies the piece. Atmospheric or brand-driven, always discreet: B1's lavender glow, Rosary's red rule and the red line of the curved edge. The critic distinguishes these discreet ornaments from ornament without a function. In his canon, the animated multicolour gradient and rotating border on Cathopic's affiliate promo are ornament without a function.

26. **Short, purposeful microcopy.**
    Evidence: Cathopic: "Explore trending content", "Join free", "Browse more content", "Search by saint, feast, or theme". Christicons: "Search 61 icons...", "Size (px)", "No icons found" / "Try a different search term." Pricing: "Precios claros para tu misión". Portfolio: "Things I made that people use". App: "Listen", "+3 more".

27. **Discreet depth: soft shadow only for what floats or is selected.**
    Evidence: shadows on the tab bar, the scrolled header and the hero menu circle (B1), the selection in H2 and H3's avatar. No shadow on sheets, fill cards and fields. Cathopic: cards 0 3px 6px rgba(0,0,0,.03); buttons a 1–2 px shadow at 4.5–7 % with an inset 1 px white top highlight and a faint sheen (white 6 % to black 1.6 %); heavy shadow only on floating layers (dropdown 0 10px 50px /.15, search panel 0 10px 30px /.12, drawer 0 15px 60px /.18). Christicons: no shadow on tiles or cards; floating layers get warm-tinted ones (popover 0 20px 60px gray-800/.14). In the test he chose border with soft shadow, "elegant, without overdoing it" (*elegante, sin exagerar*), and in his critiques he flagged overdone gradients and shadows as a flaw. Apart from that faint button sheen and the photo scrims, the only gradient seen in his work is B1's ambient glow; Cathopic's gradient text and affiliate gradient break his own rule.

28. **Reduced motion as standard; visible focus is his weak spot.**
    Evidence: both canon sites respect prefers-reduced-motion (Cathopic with a global reset plus rules for the price roll, marquee and toasts; Christicons on every animated component), and Christicons gates hover behind fine pointers. But Cathopic kills focus on links and plain buttons (`a:focus, button:focus {outline: transparent !important}`) and gives .btn a 10 %-teal ring; Christicons' gray-200 ring on outline and ghost buttons is ~1.17:1, and its search shows focus only as a border shift. The critic flags invisible focus, in his work too.

29. **Motion is fast, decelerating and tokenised; feedback moves one tonal step.** Cathopic and Christicons.
    Evidence: Cathopic: --ease-out cubic-bezier(.23,1,.32,1), --dur-press .14s, --dur-hover .18s, --dur-modal .22s; hover moves one ramp step (white → gray-100 → gray-200, gray-600 text → ink) over 180 ms and press shrinks to scale .97; no colour jumps or bounce. Christicons: the same curve (--ease-ui-out) at 80–240 ms, press .97 (.99 on cards), hover gated to fine pointers. Accordions use cubic-bezier(.77,0,.175,1) in both. Flaws: Cathopic's drawer enters on an ease-in curve (.75,0,1,1) while its --ease-drawer token goes unused, and legacy 150 ms Tailwind easing coexists with the tokens.

30. **Mobile restructures components instead of shrinking them.** Cathopic and Christicons.
    Evidence: Cathopic: the feature grid becomes an accordion (77-tall rows), collection cards turn horizontal (358×160), media tabs collapse into a "Photos 1.4k ⌄" pill plus a 44 filter icon, navigation becomes a 300 drawer and the hero search a 52 button; component heights hold (inputs 52 with 14 text, buttons 52 → 48 and 60 → 56) while type drops a step; "Join free" stays in the header. Christicons: Customize becomes a 52 icon-only button with an aria-label, section heads switch to left alignment, and a tap opens the tile tray instead of hover.

31. **Tools open in context; chrome steps aside on task pages.** Cathopic and Christicons.
    Evidence: Christicons: Customize expands inline between the hero and the grid, the colour picker is a popover and copy feedback is an overlay inside the tile; modals only for off-task flows (newsletter, share). Cathopic: filters expand inline as a 96 row; pricing drops navigation and search from the header; sign-in, sign-up and 404 have no header or footer.

## Components

**Buttons**
- Filled or outlined buttons are always full pills. Tertiary actions are text links, with no shape ("Delete account" in H1; "Iniciar sesión" and "Comparar todos los planes" in Pricing).
- Heights: Cathopic codes xs 40 / sm 44 / default 48 → 52 at ≥768 / lg 56 → 60, with padX 16 / 16 / 24 / 32, weight 550 and a 10 icon gap; header actions use 40, in-card and hero actions 52, section CTAs 60. Christicons: xs 32 / sm 40 / md 52 / lg 64, gap 12, weight 500. In the app, 40 in the header and 44 in the body; on desktop (W1), 40 in the header and ~56 in the hero and cards.
- In the light app, the primary has an ink fill (~#131B22) with white semibold text at ~16, and the secondary a gray fill (~#EAEAEC) with ink text, no border. On dark backgrounds the primary inverts to white (Rosary, Detail). In Pricing it's black (not measured) and in W1, brand red with a dark gray secondary.
- Width: fit to the text with 16–24 side padding (H2) or fixed and wide (~46 per side in H3). Full width in pricing cards and modals, where they stack with the primary on top.
- Leading icon only if it adds something (bookmark or heart in My List, play in Watch Now).
- Disabled: appears mid gray (~#8A8E91) with white text. That equals the ink at ~50 % on white, so the screenshot can't tell whether it's a solid fill or opacity (a single sample, in H1). In code: opacity .3 (Cathopic) and .6 (Christicons).
- On the websites: Cathopic primary teal #007D8C (hover #006C7A), dark #141819, white with 1px #E3E8E8, light gray-100 without border, primary-outline, and an information blue used only for Follow (a flaw); Christicons primary gray-800 (hover gray-700), secondary gray-200, outline white with 1px gray-400; portfolio outline and black.
- Destructive: two patterns. A red ~13 text link isolated at the bottom (H1) or a single centered red pill (H2).

**Pills and segmented controls**
- Segmented control in the app (B2): full-width pill ~36 high, track ~#E9E9E9, white selection with a thin line, active label dark in medium weight and inactive gray in regular. On the web it may be centered and fit to content (Anual/Mensual in Pricing, with the discount in green). Other examples: Intentions and Details / More Like This (Detail).
- Discrete options: separate outlined chips, ~79×40 and 6 apart (H2).
- Centered context pill of ~160×36 with the book and chapter or the date (B1, B2).
- Value chip ~#EFEFEF of ~70×29 (H1). Filter chip with x (Media).
- Pill dropdown with chevron (B1) and pill date picker with arrows on either side (B1).
- In B2 they coexist with underlined tabs: a dark 2 line over a full-width thin gray line.
- For statuses, in the test he preferred filled pills to a dot with text.
- Cathopic: billing toggle 270×49 (track rgba(227,232,232,.5) with blur, padding 4, 41-tall buttons with padX 20, white indicator sliding over .22s); downloads segmented control 54 tall with 64×48 options and 3 padding (off-scale, visible). Media-type tabs: 48 pills (padding 12/20), 4 apart, 16/550 gray-600 with a gray-400 count; active is ink #141819 with light text. Keyword chips: gray-100 pills, 40 (14/550, padX 16) or 48 (16, padX 24), 8 apart, forced lowercase, scrolling horizontally.

**Bottom sheets** (app, H1–H3)
- White surface without shadow, top radius ~24 (~27–28 in Concept 4).
- Grabber of ~40×4 in ~#DADADA–#ECECEC, ~10 from the edge.
- Fixed height with the top edge at ~223 of 812 in H1 and H2; in Concept 4, almost full screen (~102 from the top).
- Subpages stack inside without changing the height.
- Overlay over the art up to ~#1E2429.
- Inner padding of 20 on the sides and header 20 from the top edge. The root sheet has no title bar (H3).

**Screen headers**
- App root screens:
  - Large sans title on the left: "Today" ~22 regular in white over the image; "Bible" ~24 medium.
  - Circles of ~34–36 on the right: translucent pause, two-line "=" menu, share.
- On scroll, the header switches to a solid white background with a soft shadow (no line) and the centered context pill appears (B1). In audio mode with scroll, the header disappears (B2).
- Inside sheets: 40 back circle (#EAEAEC), centered title in ~16–18 medium sans and dark Save pill of ~60×40.
- Intentions, Rosary and Media: serif titles. Rosary adds a small date and a short red rule.
- Web:
  - Pricing: logo with BETA chip, centered three-item navigation, search, "Iniciar sesión" as text and black "Únete gratis" pill.
  - W1: logo, divider, launcher, Live pill, four links, language, Get Started, Donate, search and hamburger. That's 13 elements.
  - Cathopic: 72 tall, white, no border or shadow, padding 32; logo 176×40, a 489×44 search pill, 40-tall menu items (padX 16, radius 10, 16/550 gray-600, ink when active), a 1×36 separator with 16 on each side and a teal "Join free" of 102×40. Mobile: 64 with a 36 hamburger, logo mark, 40 search circle and "Join free"; the menu is a 300 drawer.
  - Christicons: 64, sticky, white at 90 % with blur; logo and credit sit in equal 170 boxes so the four 15px links land on the true centre. Mobile: logo and a mono MENU text toggle.

**Lists and rows**
- Menu (H1, H3):
  - 20 line icon in mid gray, 12 gap and 16 regular label.
  - Very light chevron only on rows that open a subpage inside the app.
  - Thin line between rows, spanning the content width (starts under the icon, not under the text), with no line at the top or bottom. Clashes with what he chose in the test (see "Exceptions and tensions").
  - Row pitch ~50.5.
- Settings (H1): no dividers, with 12–13 gray helper text right under the label.
- Books (B2): vertical strip of 2–3 in the category color, ~20 serif title and 11–12 gray meta below. No chevrons, icons or separators.
- Media: thumbnail, truncated title, "Series · 9 episodes" meta and black circular play button or "Resume" pill.
- Others: numbered list with thin lines (Rosary); uppercase month label with the count right-aligned (Intentions).
- FAQ: Cathopic uses gray-100 items with radius 16, header padding 40 (28 on mobile), 12 apart, and a 24 plus that rotates 45°; Christicons uses rows with dashed 1px gray-300 dividers, padding 32 (24 on mobile) and a 20 gray-400 chevron.
- Density: in the test he preferred 56 rows over 40 in a daily-use table. Compact only when the task needs many rows visible at once, and say why.

**Cards**
- Pricing: white on greenish gray, radius ~24, borderless. The recommended one has a light teal fill, a 1 teal border and the "Recomendado" pill.
- Intentions: light gray, radius ~20, with date, text and a circular "..." button. The Pope's is white, with a 1 border, avatar, serif title and yellow pin.
- Video (B1): #F5F5F5, radius ~12, 16:9 thumbnail with radius ~6 and white play disc, gray eyebrow, medium title and duration on the right.
- Options (H2): 160×80, radius 12, only a pictogram and a thin outline at rest.
- Web (W1): 4 columns at 16:9 or 6 columns at 2:3 over 1280, with 20 gap and radius ~6. On hover, the card grows ~1.6× over its neighbors, with a white 2–3 border and radius ~12.
- Cathopic: category 178×231 (white, radius 16, padding 8/8/20, square image at radius 8); collection 310 wide (radius 24, padding 32, a 2×2 mosaic of 120 tiles at radius 12 with gap 6, the fourth tile ink with "+94"); feature 310×251 (gray-100, radius 20, padding 32, 32 line icon → 32 → 20 title → 12 → 14 text); pricing 421 (white, radius 24, padding 48, shadow 0 1px 2px /.05). Hover shifts the fill one ramp step over 180 ms.
- Christicons: icon tiles 150×150, gray-100, radius 16, padding 24, centred 24 icon and a 12 gray-500 name; on hover the preview shrinks to make room for a 48 action tray (SVG / JSX / download). Package cards 320×112, white, radius 16, inset 1px ring.
- In the test he chose cards to group KPIs.

**Form fields**
- App (H1, a single sample): outlined box ~56 high, radius ~10–12 and an almost invisible 1 border (#F0F0F0).
- Small ~12 label inside the box, above the ~16 value.
- Inner padding ~16–18 horizontal and ~12 vertical.
- Read-only fields are shown in gray instead of hidden. Editing is sent elsewhere with a secondary pill with ↗.
- Label above or a persistent label inside: in the test both work for him. A placeholder that vanishes on typing is a finding only in forms of more than 2–3 fields.
- Cathopic: filled and label-less, 52 tall, radius 12, no border, fill #ECF0F0, padding 16/20, 16/600 text (14 on mobile); hover and focus darken the fill one step (#E3E8E8) and focus adds a 2px inset ink ring. Missing autocomplete and 14 px text on mobile (iOS zooms) are flaws; the missing labels only where a form has more than 2–3 fields.
- Christicons: search 52 tall, radius 16, 1px gray-400 border, 24 icon 20 from the left, placeholder with live data ("Search 61 icons..."); focus only shifts the border to gray-500, which is too weak.

**Toggles and pickers**
- Custom toggle of ~55×25, flatter than the native one, with #C6C6C6 track, "O" glyph and green when on (H1). Toggle rows carry a title and gray description (Rosary).
- Three-column wheel without the colon, with the selection band marked by two thin lines (H1).
- Chapter picker in a 3-column grid with square cells; the current one sits in a pale circle with the number in color (B2).
- Native iOS calendar inside a #F5F5F5 card with radius ~32, unadapted (B2).
- Circular #F2F2F2 consent checkbox without border (H2).

**Modals**
- Centered white dialog with radius ~18–20 (less than the sheet), inner padding ~26–28 and bluish-gray overlay at ~33 %. Actions stacked full width with the primary on top, 44 high and ~9–10 apart (H1).
- Full-screen modal without grabber, with a circular X (B2).
- Blurred category overlay with centered list, serif title and a large close circle (Media).
- Christicons: centred dialog with radius 24, padding 40 (24 on mobile), backdrop rgb(11 10 8/.25) without blur, close as a 32 ghost circle 16 from the corner; enters from translateY 8 and scale .96 over 220 ms. Modals only for off-task flows (newsletter, share); tools open inline.
- Cathopic: mobile drawer of 300 over rgba(20,24,25,.6); dropdowns with radius 12, padding 8 and shadow 0 10px 50px /.15.

**Tab bar**
- Floating and inset, ~309×58, ~32 from the sides and ~20 from the bottom edge, with a diffuse shadow.
- Five tabs with icon and ~10 label.
- Active: gray ellipse (#DCDEDF), filled icon and semibold label. Inactive: line icon and gray label (B1).
- In Media, glass effect with the active tab in a pill.

**Player**
- Rosary: bottom bar with the white "Pray the Rosary" pill between two circles.
- Detail: row of translucent circles around a larger white play.
- Bible audio (B2):
  - Floating capsule in charcoal gray (~#4B5056, not black), radius ~32, ~14 from the sides and ~16 from the bottom.
  - Controls: "1x" as text, filled previous and next, pause in a 48 white circle and close in a darker 36 circle. Red progress 2 thick with the times.
  - When dragging, the controls fade, the track thickens and "Verse 8" follows the red thumb.
  - On scroll it collapses into a centered mini pill of ~130×58.
  - Karaoke-style highlight: amber (#FFD579) for what's already read and cream (#FFF2D4) for the rest of the verse.
- W1: icon-only red play pill and two 56 circles.

**Badges and metadata**
- Metadata badges with a ~1.5 gray outline, radius ~4, ~22–24 high and 8 apart (Detail, W1).
- "Recomendado" pill in teal (Pricing) and BETA chip (Pricing).
- LIVE: red dot with label (W1).
- Small orange notification dot (Rosary), yellow pin (Intentions) and vertical pill with praying hands and count (Intentions).
- Meta goes in small gray ("28 chapters", "3 min").
- Cathopic: badges are pills with padding 6/10 at 12/600 on tinted fills (success #E9FAED / #088E4D, danger #FFEFEE / #E22D45); the savings pill is 24 tall, padX 10, 12 uppercase.

**Loading, empty, locked and destructive states**
- Loading (B1): skeleton that reproduces the real geometry 1:1, with the real chrome (title, menu, tab bar and glow), gray pill blocks with a shimmer and the last line of each paragraph short.
- Signed-out lock (W1): real content blurred, padlock next to the row title, centered serif headline, one reassuring line and a single CTA.
- Destructive: isolated red link (H1), or a sheet with a centered serif question, gray explanation, consent checkbox and one red pill, with no cancel button; you exit via back (H2).
- Empty: in the test, the concise version seemed "too simple" (*demasiado simple*) to him: he wants a visual anchor without chatter or decorative emoji. In his canon: Cathopic's empty search shows a ghost masonry of gray-100 blocks, a 140×96 gray illustration and one 14 gray-500 line, with no action, while the chip skeletons keep shimmering; Christicons shows two lines ("No icons found" / "Try a different search term.") and no action. Both lack a way out: flag it.
- 404 (Cathopic): gray-100 page with no header or footer, 44 title, one 16/500 line, a 44 dark button with an arrow, faded floating photos behind.
- Pressed: scale .97 in both canon sites (.99 on Christicons cards). Focus: see rule 28. Error and disabled form states haven't been seen.

## Typography

- **Families.**
  - App: a neo-grotesque sans (Roboto or Inter type) and a text serif with wedge serifs and a large x-height (Tiempos, Source Serif or Merriweather type). B1 adds a condensed display serif only for the book hero: three families.
  - Canon websites (code): Cathopic is Inter variable only, headings at weight 630, 115 % line height, -0.044em tracking (-0.035em at 16–20) and features ss03, cv01 and cv11. Christicons is Basier Square, with Basier Square Mono for meta and system text, weights 400 and 500 and tracking 0.
  - Portfolio: Instrument Serif for headlines (with italic alternates) over Inter.
- **Scale.** His own, with 14 and 18 added: 12, 14, 16, 18, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96… 10 is fine when the composition calls for it (tab bar labels, Christicons' version label). Both canon sites also code 28 as a step (Cathopic xl and h3; Christicons' compact title and mobile hero), and Cathopic codes 36: don't flag them. Odd sizes (11, 13, 15, 17) are out, though his canon has a few: Cathopic 13 (footer) and 11 (drawer label), Christicons 15 (nav) and 13 (small body); also Cathopic's 44 page title and 22 quaternary title. In his app screenshots they appear as estimates. In the test he didn't mention the mix of 11–15 on one screen: flag it, at low priority.
- **Sizes in the app.**
  - Sheet titles: 16–18 medium. Rows and labels: 16. Buttons: 16 semibold (13–14 medium in the B1 pills).
  - Helpers and meta: 11–13. Eyebrows: 9–12.
  - Reading: serif at 15–17 with ~25–28 line height (~25 in B1 and B2, ~28 in the H2 preview).
  - User name: serif 20–22 semibold. Feast day: serif ~20–22 with ~1.15 line height. Book hero: ~56 light.
- **Sizes on the websites.** Cathopic: hero 60.56/1.0 (36 on mobile), page titles 44–48, section titles 40/46 (28 on mobile), card titles 20/23, body 16/24.8 (14 on mobile), meta 12–14, price 48/55. Christicons: hero and section titles 32/38.4 at weight 500 (28 and 24 on mobile), card titles 20, FAQ questions 18, body 16/23.2, captions 12. Pricing (beta): ~80 headline on two lines with tight tracking, ~48 bold price, ~24 plan name. W1: hero ~64/64 bold, description 18/28, row titles 20 medium, navigation 16 medium.
- **Weights.** In the app's interface, three: 400, 500 and 600. Outside it, extremes appear: light (~300) in the book hero (B1) and bold (~700) in W1's hero and the Pricing price. In code: Cathopic 400, 500, 550 (buttons, nav), 600 (field values, card titles) and 630 (headings); Christicons only 400 and 500.
- **Line height.** Tight in headlines (1.0–1.15) and generous in reading (1.45–1.65). According to him, it also follows the scale. Canon: Cathopic 1.0 display, 1.15 headings, 1.55 body; Christicons 1.2 and 1.45.
- **Case.**
  - In his own English products, sentence case: Cathopic headings and most CTAs ("Explore trending content", "Browse more content"), with Title Case slips that read as inconsistency ("Share Collection", "Become an Affiliate"); Christicons headings end with a full stop when they are statements. Canon keeps uppercase for tiny meta labels (eyebrows, footer column heads, badges).
  - In the network's app (English), Title Case in most titles, buttons and rows, with sentence-case exceptions ("More details", "Delete account", "Log in to resume your progress"). Sentence case with a final period in helper text. Uppercase in eyebrows and in short badges and chips (NEW, LIVE, TOP 10, BETA, CC/HD/TV-G).
  - In Spanish, sentence case.
  - There are mixes, detailed in "Microcopy".
- **Editorial details.** Three-line drop cap, superscript verse numbers in gray, verse 1 without a number and typographic quotes (“ ”) in dimconex.

## Color

- **His system** (stated by him). Brand color according to the project's context, with nine shades (100–900); grays tinted with the brand in steps of 50; semantic colors (success, info, warning and danger) in 100–900, consistent with the brand.
- **Observed base.** Blue-black ink (#131B22–#141B24) and a gray ladder that reads as 3–4 steps, although the files contain about ten grays and three or four blacks (see "Tokens without a system"). Near-white surfaces (#F5–#F9) and thin lines (#E7–#F6).
- **Accent per product.**
  - Cathopic: teal #007D8C (ramp 50 #E6F7F7 to 900 #003D47) on primary actions and eyebrows, with ink #141819 as the second action colour (active tabs, dark buttons); in the pricing beta teal is kept only for the recommended plan. Off-system in production, and flagged: info blue #007DA7 on Follow, cyan gradient text (#0396C6 → #39C0DC) on "Liturgical calendar", a purple-pink animated gradient on the affiliate promo.
  - Christicons: teal #2D6970 only on the overlines and the footer credit hover; everything else is warm gray. Semantic colours exist only as picker swatches; the only polychrome is the social logos in the Share dialog.
  - Portfolio: warm white and black.
  - The network's app: the brand red as a thin thread. W1: saturated red (~#E50A2A).
- **Semantic.** Red for destructive, green for active and discount, orange for warnings and yellow for the pin. Cathopic codes full ramps: success #088E4D, info #0396C6, warning #F2BD00 and danger #E22D45, each with a pale background (#E9FAED, #E8F8FF, #FFF8E2, #FFEFEE).
- **Content color, not interface color (B2).** Strips per biblical category (slate blue, slate green, violet, brick and teal, all muted) and the reading highlight in amber.
- **Ambience (B1).** Lavender or mauve radial glow at the top of root screens. Chapter reading is on pure white, but the daily readings sit on #F9F9F9 with the glow.
- **Temperature.** Cool teal-tinted grays in Cathopic; warm in Christicons and the portfolio; midnight blue in Rosary and navy in W1. The app's light grays are neutral, outside his stated system.
- **Contrast.** Judged by eye at real size and distance: flag text that is genuinely hard to read. A measured ratio is supporting evidence, not a threshold (see "In his own words"). In the test he chose the most legible gray.
- **Emojis.** An emoji adds colour, so it counts against the colour budget. In his words: "I'm not against minimal use of emojis, as long as it really adds value. But bear in mind that the emoji also adds colour." (*No soy contrario al uso mínimo de emojis, siempre que aporte realmente un valor. Pero teniendo en cuenta que el emoji aporta color también.*) A single meaningful emoji is acceptable. Flag emojis that are decorative, repeated or add colour noise. Canon: none in Christicons; in Cathopic production the only one is "👉 How it works?" on Contribute, decorative and next to the teal step numbers, so flag it.

## Space and rhythm

- **Scale.** 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96, 112, 128, 144, 160… for spacing, font sizes and line height. The strongest proof is in the code: in both canon sites he rewrote Tailwind's spacing tokens so ordinary classes land on it. Cathopic: 1=2, 2=4, 1.5=6, 3=8, 4=12, 5=16, 6=20, 7=24, 7.5=28, 8=32, 8.5=36, 9=40, 9.5=44, 10=48, 11=56, 12=64, 13=72, 14=80, 15=96, 16=112, 17=128, 18=144, 19=160, 20=176, 21=192, 22=208, 24=240 (90 % of the measured home spacing is on scale; the rest is 10 and 28). Christicons: 1=2, 2=4, 3=8, 4=12, 5=16, 6=20, 7=24, 8=32, 9=40, 10=48, 12=64, 15=96, 16=112, 17=128, 21=192, plus 9.5=44 for size.
- **10.** His value for small-component distances where 8 doesn't convince him and neither does 12 (*no me convence el 8 ni el 12*); never a section, card or layout gap. Cathopic writes it as [10px] in 79 rules: the icon–label gap in every button, menu-item radius, legal nav padding, hover-plate insets. Christicons: logo → version label, small input gap. Never flag it.
- **Rhythm in canon.** Cathopic: 112 between sections on desktop and 72 on mobile, 56 from heading block to content, 8 from eyebrow to title, 20 from title to lede (16 on mobile), 96 from page header to content, 56 between form groups. Christicons: 96 on each side of a band edge (80 on mobile), 64 from heading to content (40), 8 from overline to title, 20 from title to body (12), 48 from the hero title to the search row, and the last section hands its bottom space to a 192 footer gap.
- **Widths.** Golden ratio and Tailwind conventions as reference.
- **Side margins.** Cathopic: container 1312 with 64 at 1440 and 16 on mobile (but the header uses 32 and the detail page 40: three gutters, a flaw). Christicons: one 1000 column (220 at 1440), header and footer at 64, 16 on mobile. 20 in sheets, ~14–16 on the app screens and 80 with a 1280 container on desktop (W1). The tab bar sits ~32 from the sides.
- **Proximity.**
  - What he chose in the test: 8 from the label to its field, 24 and 32 between groups. The meta, closer to its text than to the buttons.
  - In the app: 32–48 between groups, 16–20 from label to control, 2–4 from title to helper, 4–8 from title to meta and 6–12 between sibling options.
  - On the web (W1): ~24 from row title to cards, 64–72 between rows and ~124–130 from the hero CTA to the first row.
- **Heroes.** A very tight block and then air: in B1, 11 inside the title block and 40–80 to the content. In code, one message, one paragraph and at most two CTAs.
- **Grids.** Canon: card gaps 24 (Cathopic) or 20 (Christicons), 16 or 12 on mobile; text columns 48–64 apart; grids divide the container with no remainder (Christicons 6×150 + 5×20 = 1000; Cathopic 4×310 + 3×24 = 1312). App: square cells in numeric grids (chapters and calendar) and 20 gap in carousels.
- **Off-scale: how to judge it.**
  - A base unit is a system: if most of a design's values are multiples of 4 or 8, judge it against that base and flag only the strays. His scale is the yardstick only for his own work or a design with no system.
  - Accepted: 10 (his value, see above); 6 as a regular step; 36 when it improves the composition (said by him); 44 as the touch minimum and button height (coded as size 9.5 in both canon sites); 52 as a control height (Cathopic's default button at ≥768, Christicons' main controls).
  - Flagged: odd or decimal values, arbitrary values (45, 108, 116) and any value, even an even one, that breaks the rhythm or the proximity.
  - When correcting, propose the nearest step of the design's own scale (his only where it has none) that respects the grouping, with the exact value.
- **Off-scale in his work.** Row pitch ~50.5, field spacing 13–14, modal inner padding 26–28, button spacing 9–10, grabber at ~10, several ~36 gaps, 14–15 margins, 28–30 in B2 and 44–46 in W1's navigation. Heights of 36, 29 and 25. These are screenshot estimates: 10 and 36 fall within his criteria; the odd ones (13, 15, 25, 29) and 50.5 would be flagged in a real file. In canon code: 28 (Cathopic's 7.5 key: pricing badge margin, use-case track, mobile FAQ padding), 3 (pricing segment padding, visible), 52 (Cathopic cards → carousel arrows) and 73 (Christicons' mobile hero).

## Imagery

- Classical sacred art, full bleed and darkened so the white text reads (Virgin and Child and Annunciation in H1–H3). It stays visible above the sheet as continuous context.
- Mosaic blended with the background (Rosary) and full poster (Detail).
- Dramatic black-and-white photography where the only color allowed is a red that repeats the brand's (W1).
- On the websites: hero photo with search bar (Cathopic), square-cornered photography in masonry grids and a slow collage on the auth pages (Cathopic), monochrome 3D figures (portfolio) and line icons on gray tiles (Christicons). Text over photos is protected with layered scrims, never one flat overlay (Cathopic hero: 4 layers; tiles: a 15-stop gradient).
- The Bible has no imagery; typography leads there.
- Circular ~84 avatar with a soft shadow, the only shadow in its sheet (H3). In his Settings critique he missed the real avatar.
- **Identity (dimconex media).**
  - Conceptual symbol: a twelve-ray rising sun (square-ended bars, different lengths and slightly irregular rotation) springing from the Benedictus quote (Lk 1:78-79). The symbol is born from the content.
  - Lowercase logotype, geometric-humanist sans (Proxima Nova type), on two lines with tight line height. The symbol spans the height of the two lines and aligns with them.
  - Two-element composition over a full-bleed photo: logo optically centered and quote below, centered, in italics of the same family. Desaturated sunrise with a heavy dark overlay; almost the whole canvas is space.
  - It sums up his signature: the sacred as the origin of the concept, lots of space, few elements and a single expressive gesture.

## Microcopy

- **Canon websites in English.** Cathopic: sentence case, mission vocabulary ("Empower your mission today", "Everything you need to evangelize"), eyebrows of 2–3 uppercase words, ledes of one or two sentences, imperative CTAs of 1–4 words ("Join free", "Browse more content"), stats with a separator and plus ("57,600+"), lowercase search chips. Christicons: plain and personal ("Get notified when I add new icons to the collection… No spam, promise."), FAQ answers that open with "Yes." or "No.", placeholders with live data and units in labels ("Search 61 icons...", "Size (px)"), quiet but explicit authorship ("Crafted by Dimitri. Ad Maiorem Dei Gloriam.").
- **Pricing beta in Spanish.** Short and purposeful: "Precios claros para tu misión", "Todo lo de X, y además", "Únete gratis", "Comparar todos los planes". Portfolio in English: "Things I made that people use", "Why I only work on this".
- **App in English.** Functional and institutional: "Listen", "Verse 8", "+3 more", "28 chapters", "Today, Sep 20". Combines relative and absolute dates.
- **Recurring flaws:**
  - "Logout" as a verb (H1, H3).
  - Title Case and sentence case on the same screen ("Edit Account" above "Delete account").
  - One destination with two names (the "Account Settings" row and the "Edit Account" sheet) and the same label for two different destinations (the "Edit Account" sheet and the external "Edit Account ↗" link) (H1).
  - "FAQ / Help Center".
  - Three verbs for getting in on W1 (Get Started / Log in / Join FREE) and "Join FREE" with emphasis capitals.
  - The same label in two cases ("More details" in the hero and "More Details" in the tooltip) and two episode formats ("S1 E4" vs "S1:E4") in the same view (W1).
  - Mixed time formats ("17:56 H" next to "9 AM"). In his critique he didn't mention the mixed date formats: low priority.
  - Filler in destructive text ("Please note that", "Are you sure…") and redundancy between the explanation and the consent checkbox.
  - In the canon: Title Case slips among sentence case (Cathopic "Share Collection", "Sign In" on the button vs "Sign in" in the header; Christicons "Copy Link", "SUBSCRIBE"); empty and error copy without a next step (Cathopic "Sorry, there are no items to display at the moment."); the ungrammatical "How it works?".

## Exceptions and tensions

Criterion for the critic: apply his principles to his own work as strictly as to anyone's. Whatever comes from the client or the platform is flagged as context; whatever is his own decision, as a flaw.

- **Brand and client (W1).** Red appears about 11 times and means donate, play, new, live, top 10 and join all at once. Donate and Watch Now are two red pills competing on the first screen, and the header has 13 elements. Donate in red and the presence of Live or Shop are probably imposed by the client. Launcher and hamburger together are redundant under any brief, and there are four different shapes of status badge.
- **Scale.** Outside his criteria fall, in screenshots, the ~50.5 row pitch, 13 gaps, heights of 29 and 25 and 15 margins (estimates that may be rounding); in canon code, Cathopic's 3 px segment padding (visible), 52 from cards to carousel arrows, 50 promo padding and 73 from masonry to button, and Christicons' 73 mobile hero padding; in the portfolio, section paddings of 108 and 116. He hasn't validated the repeated 28 as spacing (Cathopic's 7.5 key: pricing badge margin, use-case track, mobile FAQ padding). The scale holds in large gaps and is lost in small ones and in heights (Cathopic 45, 49, 59 and 67, from padding plus line height).
- **Tokens without a system.** Clashes with the system he states (100–900 and grays in steps of 50):
  - about ten grays and three or four blacks doing almost the same thing: #EFEFEF vs #EAEAEC, #F0F0F0 vs #F6F7F7, headings in #000 and labels in #131718 (H1, H2);
  - dividers that change tone between B1 screens;
  - the same tokens with different names depending on the website;
  - in Cathopic, a search and input fill (#ECF0F0) between two ramp steps, legacy Tailwind easing (150 ms, ×71) beside his motion tokens, and a stray blue-600 focus ring from the forms plugin.
- **Contrast.** Judged by eye: flag text that is hard to read and structure that stops doing its job, not the number. Values measured in his work, for reference:
  - text: read-only labels at ~2.1:1, "28 chapters" meta at ~1.8–2:1, eyebrows at ~2.6–3.5:1, ~11 helper text at ~3.6:1 on a screen meant for comfortable reading, and the dimconex quote in gray over a dark photo;
  - canon text: Cathopic's inactive tab counts at 2.08:1 and footer column heads at 3.36:1 (13 px, uppercase with negative tracking); Christicons' gray-500 for 12 px icon names, placeholder and meta at 3.2:1 (~2.9:1 on the tiles);
  - canon focus: Christicons' gray-200 ring at ~1.17:1; Cathopic's 10 %-teal ring, or none on links;
  - structure: dividers at ~1.05:1, chevrons at ~1.4–1.5:1 and the consent checkbox at ~1.1:1, which also looks like a radio button.
  Read these numbers as evidence, not thresholds: judge at real size and distance, and hold others to the bar he sets himself (in his own designs small text sits at Cathopic's gray-600 or darker), so small grey text that takes effort to read is a finding. In audit mode, cite the measured ratio as support; for a public product, WCAG can be noted as context. In his critiques he flagged "the email can barely be read" (*el email apenas se lee*) and "invisible logos" (*logos invisibles*). Our inference: with an older audience, such as the devotional one, what's hard to read weighs more.
- **Space doesn't create hierarchy in long lists.** The seven-row menu is flat (H1, H3) and mixes account, help, session and mission with the same weight. Donate sits under Logout, and Logout is neither at the end nor separated. It does the opposite of what he chose in the test: a line on every row and no break between groups. By contrast, in the identity block of the same sheet he does group well with space.
- **Redundancies against the minimum of elements.** Mild redundancy (X and Cancel) he tolerates; repeated saves he flagged himself.
  - the Profile row repeats the identity header (H3);
  - the "Introduction" pill and the "Introduction" header (B1);
  - in B1 the "Bible" title, the Bible tab, the "Genesis 24" pill and "Chapter 24" are all visible at once;
  - the date appears three times (B2);
  - two Save buttons in the time flow (H1);
  - a Save next to a preview that already applies the change (H2);
  - pager and chevron at once (W1);
  - a 24-hour toggle that the device language already decides (H1).
- **Inconsistencies between sibling screens:**
  - the header sits 8 higher in Daily Readings than on the book cover (B1);
  - white background vs #F9F9F9;
  - two different dropdowns;
  - the context pill in two styles (B2);
  - two stacked navigation levels with two different visual languages: pill segmented control and underlined tabs (B2);
  - two destructive patterns and two heights for Save (40 and 44);
  - two side margins on the same screen (20 in the sheet and 14–16 below);
  - screen titles in serif (Intentions, Media) vs sans ("Today", "Bible", sheets).
- **Missing states that depend on others:**
  - the consent checkbox enables nothing and the red button is already active (H2);
  - "Set Custom Time" stays active with notifications off (H1);
  - the time modal doesn't reflect the current value: the chip says 17:56 H and the wheel opens at 9:41 AM, in 12-hour format (H1);
  - Save has a disabled state (Notifications, H1), but it is applied inconsistently: it's active in Edit Account, where almost nothing is editable, and in Reading Preferences, where the preview already applies the change.
- **Dead space from the fixed sheet height.** About 213 of white below the CTA in H2 and about 370 in H1's notifications sheet. It's air with no function in the composition, not space that creates hierarchy. "Delete account" falls inside the home indicator area.
- **Unadapted native components.** The iOS calendar keeps the system blue and SF (B2) and has the weekday header wrong: SUN repeated and no TUE.
- **Colors with clashing meanings.** Violet indicates the Pauline epistles, the selected book and the feast day. There are two blues for "current". Red marks audio progress. The category strips have no legend (B2).
- **Off-style icons.** Gold padlock and lime chip with headphones (W1); Donate's hand with heart, denser than the rest (H1, H3).
- **Floating elements that cover text without a fade.** The tab bar (B1), the player and the mini pill (B2). Also, the text runs up to the Dynamic Island when the header hides (B2).
- **Careless placeholder content for a Catholic client:**
  - Made-up Scripture ("and he is awesome") and LORD in capitals instead of small caps, mixed with Lord (H2);
  - Paul Miki (6 February) under "September 20" (B1, B2);
  - Cathopic watermarks on the art (H3) and lorem ipsum as reading and description text (B1, B2 and W1's expanded card);
  - W1's hero text doesn't match its title.
  In his Settings critique he missed the real avatar: sample content matters to him, as a detail.
- **Off-palette colour in his canon.** Cathopic's info-blue Follow, the cyan gradient text in its menu and the animated purple-pink affiliate gradient break the one-accent rule; Christicons' brand-coloured social logos in the Share dialog are its only polychrome icons. The decorative "👉" on Cathopic's Contribute heading is colour noise by his own emoji rule. Flag them first, as he would.
- **Inconsistencies inside the canon.** Cathopic: three gutters (header 32, content 64, detail page 40); the same chip at 48 / 16 px and 40 / 14 px; cards of similar width at radius 16, 20 and 24; page titles of 44 and 48; the drawer enters on an ease-in curve while his --ease-drawer goes unused. Christicons: a 12 Subscribe button against a 16 field; the footer copyright 32 left of centre; the popover radius 18 around a 14 field with 8 padding (not concentric).
- **Touch targets in the canon.** Cathopic's 36 hamburger and 22-tall text buttons; Christicons' 35×21 MENU, 29-tall menu rows and 16-tall footer links.
- **Exploration vs final version.** "Concept 4", V2 and V3 are iterations with different values: radius, sheet height, header. Don't treat an exploration as a closed system.

## Evolution

- **Holydemia: old work that no longer represents him.** Only useful as an anti-reference: Bootstrap aesthetic, blue and teal, cards with many parts (play, author, stars, students, struck-through price, button) and a cookie banner with emoji. In the code, ~20 font sizes, seven weights and five accents. If a design looks like this, it's a step backwards. It is never evidence of his judgment.
- **Cathopic.** The pricing beta is more restrained than the production home: black instead of teal on the CTA, teal relegated to the recommended plan, more air, a bigger and tighter headline and borderless cards. The production pricing page keeps teal CTAs on white 24-radius cards over gray-100. Production is what he points to as his own; the beta shows where his restraint goes. It's not enough to set an overall direction, because the work for the network from the same period uses more color (W1, B2).
- **Mater Coeli and Paulable.** Weak sources: Mater Coeli is "dated" in his words, and Paulable was built with AI, with little control over dimensions. Their deviations say nothing about his judgment.
- **The network's app.** Iterates through named versions (V2, V3, Concept 4). It's unknown which variant of the account sheet is the current one.

## Flaws seen live (useful for calibrating severity)

- Cathopic: the counters show "0+" at rest; the real number only appears with the animation.
- dimitriconejo.com: in my screenshot, the content stays faded until the entrance animation finishes. If the observer fails, the page looks empty.
- Portfolio: the cookie banner is large and covers content on desktop.
- Cathopic: focus suppressed on links and navigation; the mobile drawer slides in on an ease-in curve; the empty search keeps its chip skeletons shimmering beside "no items", with no way out; the active tab drops to 50 % opacity when a query has no results; all ten category thumbnails on Contribute return 404.
- Christicons: Escape doesn't close the colour popover; the slider announces its index ("2") while showing 24; search has no result count or live region; the mobile menu has no edge, so the page shows through.

## Open questions

- What didn't convince him about the two covers in the test.
- What the concise empty state is missing: an icon, an illustration or some context.
- Typography: the canon answers part of it (one sans family per product; Cathopic 400–630, Christicons 400 and 500). Still open: whether the serif goes in screen titles or only in content and names.
- Whether he accepts 28 as spacing the way he accepts 10 (as a type size it is coded in both canon sites).
- Which of Flodesk's choices he would carry into his own work (it is measured in `referents.md`): the 240 section rhythm, weight 500 headings at −0.02em, or text muted by opacity rather than a grey step.
- Destructive: red link or red pill, with or without a consent checkbox.
- Whether the critic should flag brand or client constraints (EWTN red, Donate) and placeholder content, or only his decisions.
- Current version of the account sheet, and whether the fixed height is deliberate even though it leaves dead air.
- Whether Title Case in the network's app is the client's convention: his own English products use sentence case.
