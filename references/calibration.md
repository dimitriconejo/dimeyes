# Calibration: how Dimitri decides

His 18 A/B decisions from a test with near-identical design pairs, his three written critiques and his open answers. ✓ = matched what his principles predicted · ✗ = contradicted them (the most valuable: these are the rules you can't deduce from what he says) · ~ = nuance.

## Comparisons

| # | Round | Chose | Prediction | Takeaway |
|---|-------|--------|-----------|-------------|
| 1 | Rhythm (scale vs. near-scale) | B (scale) | B ✓ | He spots it, but explains it through **grouping**: the metadata line should sit closer to the text than to the buttons. He sees proximity first and pixels second. |
| 2 | Proximity | A (8/24/32) | A ✓ | Label tight to its field = "little clusters of information" (*grupitos de información*). No groups, no hierarchy. |
| 3 | Separation | A (space) | A ✓ ~ | A line on every row "saturates" (*satura*). But space alone isn't enough for him either: **between sections** he would add some separator. Dividers between groups, yes; between every row, no. |
| 4 | Containers | B (cards) | A ✗ | He finds cards "more visual and consistent" (*más visuales y consistentes*). **He is not anti-container:** he accepts cards when they group consistently. |
| 5 | Hierarchy devices | B (minimal) | B ✓ | "Says the same without unnecessary elements." (*Dice lo mismo sin elementos innecesarios.*) Core rule. |
| 6 | Type scale | A (clear jumps) | A ✓ | He wants obvious size jumps. |
| 7 | Actions (redundant X + checkbox) | B | B ✓ ~ | "I like both." (*Ambas me gustan.*) Mild redundancy (X + Cancelar) doesn't bother him: low severity. |
| 8 | Concentric radii | A | A ✓ | Radius consistency. His exception: if the child's radius ends up almost square, he adds a bit. |
| 9 | Icons in navigation | B (icon + text) | open | Icons help tell items apart. Consistent with his app menus. |
| 10 | Color | B (accent on the CTA only) | B ✓ | A spread-out accent is misuse of color. |
| 11 | States | A (filled pills) | B ✗ | He prefers pills: the state is recognized faster. State legibility beats restraint. |
| 12 | Empty state | Neither (leans A) | A ~ | He finds the concise version **too simple**. Minimal, but not poor: he wants some visual anchor without sliding into chatty copy or decorative emoji. |
| 13 | 2–4 px alignment | B (aligned) | B ✓ | He spots 2–4 px misalignments ("better fit of the space" (*mejor ajuste del espacio*)). |
| 14 | Depth | A (border + soft shadow) | open | "Elegant, without overdoing it." (*Elegante, sin exagerar.*) Subtle shadows. |
| 15 | Density | A (rows of 56) | open | He prefers air even in a daily-use table (56 over 40). Compact only when the task needs many rows visible at once, and say why. |
| 16 | Labels vs. placeholder | No pick | A ✗ | "I like both techniques." (*Ambas técnicas me gustan.*) In his app he uses a third way: a small label inside the field. |
| 17 | Contrast | B (legible) | B ✓ | Legibility beats aesthetics. |
| 18 | Hero composition | Neither | open | Neither convinces him, and he doesn't say why. Still to ask. |

**Hit rate:** 11 of the 13 rounds with a prediction, plus two nuances.

## Critiques: what he spots and in what order

**Order in all three:** color always comes first → hierarchy → cramped space → component inconsistency → legibility → interaction (touch targets, flat bar).

- **Settings:** overused accent; little hierarchy, everything mixed together; sections hard to tell apart; labels that differ from each other; inputs of different heights; PRO badge gradient "too flashy" (*cantoso*); repeated save buttons; the real avatar is missing; the email is barely readable.
- **Pricing:** exaggerated gradients and shadow; too many buttons; cramped information; each card with a different structure; too many colors; invisible logos; "in a vertical sweep the spaces don't exist" (*en un barrido vertical los espacios no existen*).
- **Finance:** exaggerated, misused color; little hierarchy; poor composition; everything cramped; top buttons impossible to tap; amounts in different colors that make reading harder; the bottom bar looks flat and should float over the content; exaggerated purple gradient.

**What he didn't mention** among the planted flaws. He later explained that the test screens were so saturated it was hard to tell everything apart, so read these as drowned out by the saturation (low priority, or folded into "little hierarchy" (*poca jerarquía*)), not as accepted:
- Emojis. Neither accepted nor rejected: "I may not have even mentioned the emojis because the interface was so saturated that it's hard for me to tell absolutely everything apart. I'm not against minimal use of emojis, as long as it really adds value. But bear in mind that the emoji also adds colour." (*A ver, los emojis quizás ni los he mencionado porque la interfaz estaba tan saturada que me cuesta distinguir absolutamente todo. No soy contrario al uso mínimo de emojis, siempre que aporte realmente un valor. Pero teniendo en cuenta que el emoji aporta color también.*) Rule: one meaningful emoji is fine and counts against the colour budget; flag decorative, repeated or colour-noise emojis.
- Eyebrow + breadcrumb stacked.
- More space below the title than above it.
- Sizes of 11/12/13/14/15 px.
- Line height of 1.05.
- Discount redundancy (strikethrough + -20 % + "Ahorra").
- ">" character instead of an icon.
- Mixed date formats.
- Misaligned icon.

**Conclusion:** he critiques from macro to micro. In written critiques he names the problem without giving the value, though he says that in Figma he does give exact values. The skill must do both: macro diagnosis first, then corrections with values.

## Questions

- **Work:** Catholic audience, organizations, startups and his own products (his company).
- **Scale:** 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96, 112, 128, 144, 160… (in steps of 16 from 80 on: "continúa con 112, 128 y así, 144, 160").
  - It applies to type and line height, though for font sizes he adds 14 and 18.
  - Widths: golden ratio and Tailwind conventions as a reference.
  - 6 is a regular step of the scale, not an exception. 36 is tolerated. 10 was added later: his for small-component distances where 8 is tight and 12 loose, never for section, card or layout gaps, and never flagged (see "Later decisions").
- **Instant rejection:** bad structure, lack of composition and hierarchy, poor use of space and sizes, misplaced colors, focus where it shouldn't be.
- **References:** Apple, Linear, Mobbin.
- **Color:** a full system.
  - Brand color first, chosen from the project's context.
  - From the brand color he derives 9 shades (100–900).
  - Grays tinted with the brand, in steps of 50.
  - Semantic colors (success, info, warning, danger) in 100–900, consistent with the brand.
  - He didn't answer the typography part.
- **Feedback:** exact values: "2 px missing here" (*aquí faltan 2 px*), "the radius should be 8 instead of 12" (*el radio debería ser 8 en vez de 12*).
- **Exceptions:** he uses 36 when needed (6 is a regular step). In nested radii, if the child ends up almost square, he adds a bit "without it looking broken" (*sin que se vea roto*).
- **What the skill should do:** analyze any design (web, UI, graphic) and correct it as if he had corrected it himself, attentive to every detail.

## Later decisions (his words)

- **Off-scale values:** "When 10 px works better for the composition, it's fine to use it." (*En ocasiones donde a nivel de composición queda mejor 10 px, no pasa nada si se aplica.*) 6 is a regular step, 10 is his (next entry) and 36 is tolerated when it improves the composition. Flag arbitrary values and those that break the rhythm.
- **10 px** (12 November 2026): "Some values, like the 10 pixels one, I sometimes need, OK? Because 8 pixels doesn't convince me, nor 12 pixels. The distance." (*Hay códigos como el de 10 píxeles que a veces lo necesito, ¿vale? Porque no me convence el 8 píxeles ni el 12 píxeles. La distancia.*) 10 is a legitimate value of his system for small-component distances where 8 is tight and 12 loose, not a deviation: never list it as a contradiction or a flaw. It is not for section, card or layout gaps.
- **Emojis** (12 November 2026): see "What he didn't mention". A single meaningful emoji is acceptable and counts against the colour budget.
- **Eyebrows** (small uppercase labels above headings): a valid device. Don't penalize them.
- **Contrast:** judged by eye. Flag text when it's genuinely hard to read.
- **Holydemia** is old work. It isn't a reference for his current judgment.

## His review of dimeyes' corrections (12 November 2026)

These are his reactions to four specific designs, kept as evidence. The general rules drawn from them live in `eye.md` and in SKILL.md. Never apply a case-specific remark literally to another design: apply the principle behind it.

He reviewed four corrections made with dimeyes. His verdict: they "improve quite a lot" (*se mejora bastante*). What he would still change:

- **Pricing landing.**
  - The "new, now integrated" badge ended up too subtle for a feature: *"lo veo un poco como que sutil. No llama la atención y creo que es un feature, por tanto tendría que ir un pelín más destacado."*
  - The buttons looked "very square". His rule: side padding is twice the top and bottom padding (*"el espacio de los laterales es el doble del espacio de arriba y abajo… esa personalmente es la que uso"*).
  - The plan cards were fine. Text hierarchy was weak: the subtitle and the feature lists were about the same size, and secondary text ("Para empezar", "antes 29 €/mes") should be smaller.
  - "Hablemos" at the price size is big, but it makes sense because it matches the other numbers.
- **Finance home.**
  - The search and bell icons were different sizes: *"los iconos deberían de conservar el mismo tamaño dependiendo del grupo que formen."*
  - Gradients are not banned: *"te dije lo de los gradientes que era muy cantoso porque se estaban utilizando mal. Ahora, eso no quiere decir que nunca se usen gradientes… de hecho, en algún diseño uso gradientes pero de manera… para que no sature, para que sea como más bonito."*
  - In the transactions list the icon had too much prominence, and the text wouldn't survive one more digit in an amount: *"esas cosas también hay que pensarlas."*
- **Advent post.**
  - He likes it, but almost every text was white: *"apenas hay jerarquía de color. O de transparencia, me gusta a veces jugar con transparencia."*
  - The date, place and entry lines were "very monotonous and very cramped". He'd separate them a bit more and make them more visual, with icons: *"me gusta tirar de iconos cuando hace falta… pueden quedar muy bien y sumar."*
- **Pixelito.** It "is still Pixelito" and dimeyes improved it. The style isn't his taste, "but that's a matter of taste". Respecting another brand's language was right.
- **General.** He usually applies negative letter-spacing to headings, following web and app conventions: *"suelo aplicar interletrado negativo en los headings."*

The rules from this review live in `eye.md` (§3.1, §3.2, §3.4, §3.6, §3.7, §4, §5, §6) and in SKILL.md's principles.

## Source tiers (his words, 12 November 2026)

- **Canon:** Cathopic, the production site ("los míos creados por mí es Cathopic, lo que hay en producción ahora"), plus the beta pricing screenshot; Christicons; and Flodesk, a referent, as the closest expression of "mi forma de verlo y de pensarlo".
- **Secondary:** the Catholic network's app boards and website, his portfolio and the dimconex identity.
- **Weak:** Mater Coeli ("un proyecto bonito, pero creo que está anticuado") and Paulable ("se hizo con IA, tuve poco margen para valorar dimensiones"). Don't derive rules from them; their deviations are not his.
- **Excluded:** Holydemia (old) and Mailgami (a collaboration).

## The final polish sweep (his words, 12 November 2026)

After a second round repeated the parish's name in one post and made its top worse, he asked for a final sweep: *"después de realizar el diseño, que haya un barrido final de pulido para darte cuenta de si queda alguna inconsistencia… siempre con un ojo crítico como el mío, muy duro."* He accepts that two runs on the same design come out slightly different. What he won't accept is repeated information or a lack of attention. The sweep is Process §6 in SKILL.md.

## Second calibration test: at the pixel (12 November 2026)

24 probes, two thirds graphic design, each isolating one variable. Values are on a 1080 canvas unless noted. These are evidence; the general rules drawn from them live in `eye.md` (§3.1, §3.3, §4 Graphic design, §6).

| Probe | His answer | His reason (short) |
|---|---|---|
| Hairline or only space between message and data (Sunday) | Hairline, 40 · 2 · 40 | *"genera… misma distancia… un buen equilibrio"* |
| Display title size (Sunday, photo 920 wide) | 168, about 85 % of the photo | *"embudo visual… de más grande a más pequeño"* |
| Outer margin | 96, about 9 % | Instagram safe zone; the photo is a square inside the square |
| Photo → title, with title → lede at 40 | 48, about 1.2× | *"un poquito más de aire… empieza otro tipo de contenido"* |
| Uppercase meta size | 24, about 0.6 of the lede | *"se lee bien… no parece ridículo"* |
| Optical centre of a 2 px hairline in 82 | 42 above, 38 below (descender-heavy italic above) | — |
| When to touch another designer's sizes | Only when they aren't coherent | *"valores… random… no habla en el diseño"* |
| What to remove from a crowded poster | The oval around the date, the off-style script line, the hairline | *"no aporta ningún valor… desentona con el estilo"* |
| Date size under a 452 display title (Fiesta) | 128 | Sits beside the arch's silhouette, leaves air above the image, joins FIESTA |
| Gap between two info groups | 52 | The block is equidistant from the band above and the text below |
| Where the empty space goes in a tall post | Top block and bottom block, empty middle | What happens on top, how to attend at the bottom |
| Programme size against 44 data | 48 | *"no queda más pequeño… tampoco… cantoso"* |
| Hook face | Script | Personality, matches the handwritten feel; the others are *"aburridas y feas"* |
| Icon opacity (rows at 100/80/64) | All at 64 % | *"no se genera ruido… un montón de tonalidades de blanco"* |
| Description opacity on a dark photo | 60 % | Doesn't compete with the title or the time |
| Gap between stacked data rows (40 px text) | 20 | *"un pelín de aire… muy fácil de leer"* |
| How the date leads | Weight | — |
| Inline data separator | Middle dots | — |
| Icons in an inline data line | No | — |
| What yields when the photo doesn't fit | The photo: adjust or crop it, even losing parts | *"depende mucho del diseño"* |
| Plan name over a 14 list (UI) | 16/500 | — |
| Savings note colour (UI) | Success green | Positive in green; negative in red or muted |
| Icon container in a 64 row (UI) | 36 | *"me gusta cómo está"* |
| Header icon group gaps (UI) | 16, equal box to box | Equal gaps, enough to tap |
