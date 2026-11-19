# Calibration: how Dimitri decides

This is a chronological record. Some working rules changed after later tests. Use the current decision process in `SKILL.md` and the observations in `references/eye.md` when applying these examples. A choice between versions and approval to publish are different verdicts.

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
- **Scale:** 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96, 112, 128, 144, 160… (in steps of 16 from 80 on: "it goes on with 112, 128 and so on, 144, 160" (*"continúa con 112, 128 y así, 144, 160"*)).
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

## His review of Dimeyes' corrections (12 November 2026)

These are his reactions to four specific designs, kept as evidence. The general rules drawn from them live in `eye.md` and in SKILL.md. Never apply a case-specific remark literally to another design: apply the principle behind it.

He reviewed four corrections made with Dimeyes. His verdict: they "improve quite a lot" (*se mejora bastante*). What he would still change:

- **Pricing landing.**
  - The "new, now integrated" badge ended up too subtle for a feature: *"I see it as a bit, like, subtle. It doesn't draw attention and I think it's a feature, so it should be a touch more prominent."* (*"lo veo un poco como que sutil. No llama la atención y creo que es un feature, por tanto tendría que ir un pelín más destacado."*)
  - The buttons looked "very square". His rule: side padding is twice the top and bottom padding (*"el espacio de los laterales es el doble del espacio de arriba y abajo… esa personalmente es la que uso"*).
  - The plan cards were fine. Text hierarchy was weak: the subtitle and the feature lists were about the same size, and secondary text ("Para empezar", "antes 29 €/mes") should be smaller.
  - "Hablemos" at the price size is big, but it makes sense because it matches the other numbers.
- **Finance home.**
  - The search and bell icons were different sizes: *"icons should keep the same size depending on the group they form."* (*"los iconos deberían de conservar el mismo tamaño dependiendo del grupo que formen."*)
  - Gradients are not banned: *"I told you the gradients were very flashy because they were being misused. Now, that doesn't mean gradients are never used… in fact, in some designs I use gradients but in a way… so it doesn't saturate, so it's sort of more beautiful."* (*"te dije lo de los gradientes que era muy cantoso porque se estaban utilizando mal. Ahora, eso no quiere decir que nunca se usen gradientes… de hecho, en algún diseño uso gradientes pero de manera… para que no sature, para que sea como más bonito."*)
  - In the transactions list the icon had too much prominence, and the text wouldn't survive one more digit in an amount: *"those things have to be thought about too."* (*"esas cosas también hay que pensarlas."*)
- **Advent post.**
  - He likes it, but almost every text was white: *"there's hardly any colour hierarchy. Or transparency hierarchy, I sometimes like to play with transparency."* (*"apenas hay jerarquía de color. O de transparencia, me gusta a veces jugar con transparencia."*)
  - The date, place and entry lines were "very monotonous and very cramped". He'd separate them a bit more and make them more visual, with icons: *"I like to use icons when needed… they can look really good and add something."* (*"me gusta tirar de iconos cuando hace falta… pueden quedar muy bien y sumar."*)
- **Pixelito.** It "is still Pixelito" and Dimeyes improved it. The style isn't his taste, "but that's a matter of taste". Respecting another brand's language was right.
- **General.** He usually applies negative letter-spacing to headings, following web and app conventions: *"suelo aplicar interletrado negativo en los headings."*

The rules from this review live in `eye.md` (§3.1, §3.2, §3.4, §3.6, §3.7, §4, §5, §6) and in SKILL.md's principles.

## Source tiers (his words, 12 November 2026)

- **Canon:** Cathopic, the production site ("my own, created by me, is Cathopic, what's in production now" (*"los míos creados por mí es Cathopic, lo que hay en producción ahora"*)), plus the beta pricing screenshot; Christicons; and Flodesk, a referent, as the closest expression of "my way of seeing it and thinking about it" (*"mi forma de verlo y de pensarlo"*).
- **Secondary:** the Catholic network's app boards and website, his portfolio and the dimconex identity.
- **Weak:** Mater Coeli ("a nice project, but I think it's dated" (*"un proyecto bonito, pero creo que está anticuado"*)) and Paulable ("it was made with AI, I had little room to judge dimensions" (*"se hizo con IA, tuve poco margen para valorar dimensiones"*)). Don't derive rules from them; their deviations are not his.
- **Excluded:** Holydemia (old) and Mailgami (a collaboration).

## The final polish sweep (his words, 12 November 2026)

After a second round repeated the parish's name in one post and made its top worse, he asked for a final sweep: *"after making the design, there should be a final polish sweep so you notice whether any inconsistency is left… always with a critical eye like mine, very hard."* (*"después de realizar el diseño, que haya un barrido final de pulido para darte cuenta de si queda alguna inconsistencia… siempre con un ojo crítico como el mío, muy duro."*) He accepts that two runs on the same design come out slightly different. What he won't accept is repeated information or a lack of attention. The sweep is Process §6 in SKILL.md.

## Second calibration test: at the pixel (12 November 2026)

24 probes, two thirds graphic design, each isolating one variable. Values are on a 1080 canvas unless noted. These are evidence; the general rules drawn from them live in `eye.md` (§3.1, §3.3, §4 Graphic design, §6).

| Probe | His answer | His reason (short) |
|---|---|---|
| Hairline or only space between message and data (Sunday) | Hairline, 40 · 2 · 40 | *"it creates… the same distance… a good balance"* (*"genera… misma distancia… un buen equilibrio"*) |
| Display title size (Sunday, photo 920 wide) | 168, about 85 % of the photo | *"visual funnel… from biggest to smallest"* (*"embudo visual… de más grande a más pequeño"*) |
| Outer margin | 96, about 9 % | Instagram safe zone; the photo is a square inside the square |
| Photo → title, with title → lede at 40 | 48, about 1.2× | *"a little more air… another kind of content begins"* (*"un poquito más de aire… empieza otro tipo de contenido"*) |
| Uppercase meta size | 24, about 0.6 of the lede | *"it reads well… it doesn't look ridiculous"* (*"se lee bien… no parece ridículo"*) |
| Optical centre of a 2 px hairline in 82 | 42 above, 38 below (descender-heavy italic above) | — |
| When to touch another designer's sizes | Only when they aren't coherent | *"values… random… it doesn't speak in the design"* (*"valores… random… no habla en el diseño"*) |
| What to remove from a crowded poster | The oval around the date, the off-style script line, the hairline | *"it adds no value… it clashes with the style"* (*"no aporta ningún valor… desentona con el estilo"*) |
| Date size under a 452 display title (Fiesta) | 128 | Sits beside the arch's silhouette, leaves air above the image, joins FIESTA |
| Gap between two info groups | 52 | The block is equidistant from the band above and the text below |
| Where the empty space goes in a tall post | Top block and bottom block, empty middle | What happens on top, how to attend at the bottom |
| Programme size against 44 data | 48 | *"it doesn't look smaller… nor… flashy"* (*"no queda más pequeño… tampoco… cantoso"*) |
| Hook face | Script | Personality, matches the handwritten feel; the others are *"boring and ugly"* (*"aburridas y feas"*) |
| Icon opacity (rows at 100/80/64) | All at 64 % | *"that way you don't create visual noise by putting in lots of shades of white"* (*"así no se genera ruido visual poniendo un montón de tonalidades de blanco"*) |
| Description opacity on a dark photo | 60 % | Doesn't compete with the title or the time |
| Gap between stacked data rows (40 px text) | 20 | *"a touch of air… very easy to read"* (*"un pelín de aire… muy fácil de leer"*) |
| How the date leads | Weight | — |
| Inline data separator | Middle dots | — |
| Icons in an inline data line | No | — |
| What yields when the photo doesn't fit | The photo: adjust or crop it, even losing parts | *"it depends a lot on the design"* (*"depende mucho del diseño"*) |
| Plan name over a 14 list (UI) | 16/500 | — |
| Savings note colour (UI) | Success green | Positive in green; negative in red or muted |
| Icon container in a 64 row (UI) | 36 | *"I like it as it is"* (*"me gusta cómo está"*) |
| Header icon group gaps (UI) | 16, equal box to box | Equal gaps, enough to tap |

## The catalogue templates test (13 November 2026)

Five random Cathopic catalogue templates corrected with Dimeyes came back with pixel nudges only (2 to 12 px), all with "with changes", while the outlined ovals, a hairline that separated nothing, a line under every data row and an unchanged composition stayed. His reaction: *"the adjustments it made are minimal… it improves, yes, but it doesn't solve everything and it doesn't fully think like me."* (*"los ajustes que hizo son mínimos… mejora, sí, pero no soluciona todo y no piensa del todo como yo."*) The brief had told it to judge the templates "in their own language, not his style". The general rules drawn from this are in SKILL.md: ownership decides the style, not how hard the eye works; what ships in his products reaches his bar; language is not noise; composition first; and the verdict and bar check.

## Logo slot and safe areas (15 November 2026)

While preparing a test on Cathopic templates he pointed out that every template has an invisible slot for the user's logo and that the editor marks the safe areas the social networks require. In his words: *"I want the skill to know how to place the logo in the perfect spot, for social networks, the logo sizes can vary"* (*"quiero que el skill sepa colocar el logo en el lugar perfecto, para redes sociales, pueden variar los tamaños de los logos"*), and the safe areas *"affect the texts/content"* (*"afectan a los textos/contenido"*), while an image doesn't have to stay inside them. He stressed it is not one case: *"the skill must always work well on graphic designs, whether Cathopic or not"* (*"el skill debe funcionar bien siempre en los diseños gráficos sea cathopic o no"*).

Rules drawn from it (general, in `eye.md` §4 Graphic design): safe areas are a hard limit for text, logo and key content, while images and colour fields that bleed to the edge may cross them (an image sitting inside the canvas as an object keeps them; see the depth test below); the logo slot is part of the composition in any post or template that will carry a logo, placed on a content axis inside the safe area, on a calm ground, in the contrasting version, and fitted to the box by the logo's own shape.

## The depth test (15 November 2026)

He said Dimeyes was too timid: *"it does a very subtle polish without daring… some designs simply need polish, but others need a redefinition"* (*"hace un pulido muy sutil sin atreverse… hay diseños que simplemente necesitan pulido, pero otros necesitan una redefinición"*). To learn when and how he redoes a piece, he judged twelve real Cathopic catalogue templates. For each one he first said, seeing only the original, how deep he would go. Then he picked, blind, one of three versions Dimeyes had made: a polish, a partial rebuild and a full redo.

| Template | First sight | Picked | His words |
|---|---|---|---|
| First Communion, framed oval photo | Rebuild parts | Polish | Three typefaces, *"two at most are used"* (*"como mucho se usan dos"*); frame corners with different curves; the rule under the parish name *"it only creates noise"* (*"solo genera ruido"*) |
| Read with a class, stacked photo cards | Polish | Redo | *"it gives the image prominence and takes away the stack effect, which adds nothing"* (*"le da protagonismo a la imagen y le quita el efecto stack, que no suma"*); the logo shouldn't sit at the call to action's level, it goes top centre |
| Lent series, schedule list | Rebuild parts | Polish | Redo the title, no font combination in it; the logo at the foot, not beside the title |
| Holy hour, arch photo | Polish | Rebuild parts | A word too close to the image, the image too elongated: *"it doesn't give me harmony"* (*"no me genera armonía"*) |
| Rosary, three square photos | Polish | Polish | The photos form a structure, so they keep the safe zone; too many text styles, *"very flashy, very inelegant"* (*"muy cantoso, muy poco elegante"*) |
| Archangels | Rebuild parts | Redo | No font combination in one title; two lines, not three; the redo is right *"even if it seems a touch boring to me"* (*"aunque me parezca un pelín aburrido"*) |
| Veiled crosses | Redo | Redo | *"quite ugly"* (*"bastante feo"*); the redo still had too many text styles |
| Spirit Week, colour bands | Redo | Rebuild parts | Good concept, badly executed; the bands go to 100 % width, and the colours need a meaning |
| Mark 10:14 | Polish | Redo | One reference, one size; the whole verse at one size |
| Before you arrive, A–D list | Polish | Redo | Rules full width, equal gaps; the redo changed the concept *"but it's very well done and improves on the original"* (*"pero está muy bien conseguido y mejora el original"*) |
| Blessing of fields | Redo | Redo | *"boring… little hierarchy, too many things, badly categorised information"* (*"aburrido… poca jerarquía, demasiadas cosas, información mal categorizada"*); a bigger title |
| I am the resurrection | Polish | Polish | A dark overlay, *"not that grey, which is stale"* (*"no ese gris que es rancio"*); a touch less leading on the title |

His first impression matched his pick in only four of twelve. Once he saw the versions he picked the redo six times, the partial rebuild twice and the polish four times. His comments on the polishes he picked asked for more than they had done: a third typeface removed, a noise rule removed, the title redone, the logo moved.

His open answers:
- **What makes him redo:** *"when I see a lot of senseless noise and I tell myself, this has to be redone and properly defined"* (*"cuando veo mucho ruido sin sentido y me digo a mí mismo, esto hay que rehacerlo y definirlo bien"*).
- **What can change:** *"first order the information properly, and then I start redefining or removing things… see which text can be replaced by some graphic element… I try to respect everything, but I make all the changes I want, so that a piece ends up really consistent, beautiful"* (*"primero ordenar bien la información y ahí empiezo a redefinir o quitar cosas… ver qué cosas de texto se pueden sustituir por algún elemento gráfico… intento respetar todo, pero hago todos los cambios que me da la gana, para que una pieza quede bien consistente, preciosa"*).
- **Where he starts:** *"I start reordering the information, changing sizes, trying until I reach a hierarchy and a composition that make me feel beauty and harmony in my eyes… and not flat or insipid things"* (*"comienzo a reordenar la información, cambiar tamaños, probar hasta lograr una jerarquía y una composición que me hace sentir belleza y armonía en los ojos… y no cosas planas o insípidas"*).

The general rules drawn from it are in SKILL.md and `eye.md`:
- How deep to go: compare a polish with a recomposition and keep the better result.
- His redo process.
- Whose identity is protected.
- Noise devices go even when they are the signature.
- Two typefaces at most, few text styles, one unit one style.
- The title's leading and line count.
- One width for a set, and a colour code needs a meaning.
- Dark scrims.
- An image bleeds or keeps the safe area.
- The logo is not a sibling of the content.
- The photo's protagonism.
- Life.

## First blind check of the depth rules (15 November 2026)

Clean sessions corrected twelve unseen pieces with the rewritten skill and with the previous one: six catalogue templates, plus posts for a bakery, a jazz club story, a yoga studio, a webinar, an NGO and a bookshop. Two judges per piece, who knew only his answers from the depth test, preferred the rewrite 22 to 2, and they agreed when the order was swapped. The rewrite was bolder and better composed in eleven pieces. It also showed five faults, now turned into general rules in SKILL.md and `eye.md`:
- **It removed graphics that said something:** a stamp-edged card that was the piece's concept, a podcast waveform, a bookshop's stack of books, the highlight on the one special class. Rule: noise is not the same as a graphic that says something.
- **It dropped lines without saying so:** a "presents" line, a badge, a kicker. Rule: the content list is a contract.
- **It weakened the call to action** by turning buttons into plain lines. Rule: the call to action stays the second level.
- **It left voids in split layouts.** Rule: every column is composed on its own.
- **It put a story logo in the top interface band.** Rule: the story safe area is 250 at the top.

The one piece the judges gave to the old skill was a clean polish: the new skill had removed the stamp-edged card and left a flat field.

## His blind check of the rewrite (15 November 2026)

He then judged the same twelve unseen pieces himself, blind, comparing the rewritten skill (after the fixes above) with 1.0.2. Two judges with only his words had predicted 23 to 1 for the rewrite. He picked the rewrite 4 times, 1.0.2 six times, and neither twice.
- **The rewrite won** where it kept the concept and executed it better: the stamp card rebuilt with the logo at the foot (*"I'd make the logo white"* (*"le pondría el logo en blanco"*)), the office hours with a dark title band, the webinar with the photo on top, and the jazz story.
- **1.0.2 won** where the rewrite had changed the concept and lost force: the podcast's giant 24 became a small numeral (*"an image plus a small number 24 doesn't convince me… I don't find it attractive"* (*"no me convence una imagen más el número 24 en pequeño… no lo veo atractivo"*)), a medallion became a sparse outline, the photo turned into a narrow strip, and calm polishes became busier.
- **Neither, for the bakery and the NGO post:** *"all the proposals seem quite ugly to me; they're neither elegant nor well thought out"* (*"todas las propuestas me parecen bastante feas; no son elegantes ni están bien planteadas"*), *"they're all very ugly"* (*"son muy feos todos"*).
- **His most repeated note was spacing inside text blocks:** *"I'd adjust the spaces between texts in one block quite a bit"* (*"ajustaría bastante los espacios de los textos en un mismo bloque"*), *"the spacing fails a bit, everything is very tight"* (*"los espacios fallan un poco, está todo muy unido"*).
- **What it still lacks, in his words:** *"more creativity, a better understanding of what it's doing, good hierarchies, compositions, conveying elegance… consistency, well-defined spaces, the human eye quickly seeing the important information"* (*"más creatividad, entender mejor lo que está haciendo, tener buenas jerarquías, composiciones, que transmita elegancia… consistencia, bien definidos los espacios, que el ojo humano vea rápidamente la información importante"*).

Lessons:
- Judges given only his words are not a proxy for his eye; only his own picks count.
- A redo has to be clearly more elegant and keep the hook, or the polish wins; a close call is shown to him as an alternative (SKILL.md, How he corrects).
- Spacing inside text blocks gets a concrete minimum (`eye.md` §4).

## The reference study (16 November 2026)

To teach the skill what he calls elegant, 36 social posts were preselected from collections that designers curate on Are.na (events, products, music, food, editorial pieces) and shown to him on one board. He marked the ones he would sign: 26 signed, 10 rejected. Each post was then measured in pixels, with sizes and distances as a percentage of the canvas width.

His words on the signed ones: *"when we talk about elegance it isn't using super elegant script typefaces… I mean the premium feeling it conveys… a very logical composition, you see a very clear visual hierarchy, things are well placed where they belong, not everything seems to be the same size… they're not boring designs, they're modern… how you play with the typography, the spaces, the movement… good colour combinations"* (*"cuando hablamos de elegancia no es usar tipografías cursivas súper elegantes… hablo de la sensación premium que transmite… una composición muy lógica, se ve una jerarquía visual muy clara, las cosas están puestas bien en su sitio, no todo parece que tiene el mismo tamaño… no son diseños aburridos, son modernos… cómo se juega con la tipografía, los espacios, el movimiento… buenas combinaciones de color"*). On the rejected ones: *"ugly illustrations or huge blobs… little visual hierarchy, little composition… very simple, typical colour and little else. You can put colour and little else, that can work perfectly well. The thing is how you put it"* (*"ilustraciones feas o manchas enormes… poca jerarquía visual, poca composición… muy simple, típico color y poco más. Tú puedes poner color y poco más, que eso puede funcionar perfectamente. La cosa es cómo lo pones"*).

| Measure | Signed (median) | Rejected (median) |
|---|---|---|
| Typefaces | 1 | 2 |
| Text styles | 2 | 3.5 |
| Distinct type sizes | 2 | 3 |
| Smallest gap between groups | 9.8 % of the width | 5.5 % |
| Gap between groups ÷ largest gap inside a group | 5.6× | 2.6× |
| Gap at a change of role ÷ the smaller text's size | about 1× | about 0.4× |
| Protagonist's area | 46 % | 34 % |
| Elements | 5 | 6 |
| Empty ground | 52 % | 50 % |
| Largest size ÷ smallest | 3.2× | 5.6× |

What did not separate them: the amount of empty ground, the side margins and the scale ratio (two rejected posts had titles 16–20× their small text). A bigger title or more air does not make a piece elegant, and the size-ratio row is not a target: never shrink a hook to bring it down.

Rules drawn (`eye.md` §3.1, §3.4 and §4, What makes a piece elegant to him; SKILL.md, the redo process and the sweep):
- **One protagonist that clearly wins,** fused with the image when both are big. All 26 signed posts have one leader; when type and image are both large, the type sits on the image, crosses a cut-out or takes the image's width. The rejected posts stack two masses of similar weight (plates against a title, two equal portraits, a table against a title).
- **Groups, not a chain of bands,** with the small information anchored to the frame.
- **Two or three sizes, never two neighbours almost alike.** Near sizes in one face (1.03–1.3×) appear in four rejected posts and in no signed one.
- **Movement, or a reduced static piece.** Signed posts use a median of 2.5 spatial devices; the static ones he signed are reduced (about four or five elements, two sizes, a calm field of 60 % or more).
- **Type on a photo in one flat colour** when size already separates the levels; contrast from where the text sits.
- **No neon ground behind the type:** no signed post has a neon, lime or mustard ground behind the type; four rejected ones do. His third blind check (below) narrowed this: a mustard ground with a deep blue title won, so only neon grounds stay as a limit, and colour is judged as a pair (`eye.md` §3.1).

Limits: these are art, culture and design posts more than small-business ones, and most ignore platform safe areas, so the safe-area rules stand unchanged. His earlier calibrations (equal distances inside a compact centred stack, 48 over 44 between separate blocks) stay, now scoped to where he chose them.

## His third blind check (16 November 2026)

Clean sessions corrected twelve unseen pieces (six catalogue templates never used in any test, and posts for a florist, a physiotherapy clinic, a choir's story, a charity market, a language school and a café) with the skill carrying the reference-study rules and with 1.0.2. He picked the new skill 5 times, 1.0.2 five times, and neither twice. His words: *"in this batch it does come closer to what I'm looking for, I see more coherence. I'm not saying they're perfect designs or 100 % how I'd do it, but it's getting closer"* (*"en esta tanda sí que se acerca más a lo que estoy buscando, veo más coherencia. No estoy diciendo que sean diseños perfectos ni al 100 % de cómo lo haría yo, pero se va acercando"*).
- **The new skill won** with recompositions that kept the concept and gave it one strong idea: the organ recital's title enlarged and the floating band removed, the Veritas masthead turned along the right edge beside a bleeding photo, the clinic's header band, the charity market on a dark photo, and the florist's title reset without its script.
- **1.0.2 won on the Camino template** because of the colour pair: *"I'm much more convinced by how the yellow background works with the contrast the rest of the blue creates… in B I'm not fully convinced by everything blue with the text showing in yellow"* (*"me convence mucho más cómo funciona el fondo amarillo con el contraste que genera el resto del azul… en la B no me termina de convencer todo azul y que se vea el texto en amarillo"*).
- **1.0.2 won on the choir story** for the data, not the header: *"it categorises the information below better. In B everything blends together a bit, though I like B's header more… I'd do the top part from B and the bottom part from A, without saturating it"* (*"categoriza mejor la información que aparece abajo. En la B todo se funde un poco, aunque la cabecera me guste más la de la B… haría la parte de arriba de la B y la parte de abajo de la A, sin llegar a saturar"*).
- **1.0.2 won on the caregivers' circle** because it *"structures the information better and not everything looks so compressed… cleaner, clearer, less noise"* (*"estructura mejor la información y no aparece todo tan comprimido… más limpio, más claro, menos ruido"*), though he would not sign its composition either.
- **Neither for the language school:** the old version categorised the information better, but its bordered circle photo *"looks like something from the 2000s to me, it's hideous"* (*"me parece de los años 2000, es feísimo"*); he liked the new version's photo, but not its round "Solo 290 €" badge.
- **Neither for the café:** the old version *"overloads the top"* (*"sobrecarga arriba"*) (badge, title, description and availability stacked), the new one solved that but its brown panel *"is horrible"* (*"es horrible"*); the new title face was better than the original.
- Two pieces were near ties (the rosaries and the silent weekend).

Lessons, now in SKILL.md and `eye.md`:
- Colour is judged as a pair; a palette that works stays in a polish, and a new dark field is near-black or a clean deep tone, never a muddy brown.
- Practical information is categorised: when, where and the conditions each on its own line, the key datum leading, with no new text styles. One uniform small block fuses.
- A bordered circle photo is a dated device. A price badge is judged by its execution: his objection was the air inside it, and in the sixth check the version that kept the bike workshop's badge won.
- When one version has the better header and another the better data, combine them.

## His fourth blind check (16 November 2026)

Twelve more unseen pieces, eight of them commercial posts from outside Cathopic (a restaurant, a hair salon, an estate agent, a clothing shop's story, a gym, a vet, a pottery class and a LinkedIn webinar) and four catalogue templates, corrected by 1.2 and by 1.0.2. The goal set before he saw them was 8 of 12 for 1.2. He picked 1.2 four times and 1.0.2 eight times, and signed one of the two every time. His words: *"it does come closer, I'm missing spacing polish, but overall I see it as more robust"* (*"sí se acerca más, me faltan pulidos de espacios, pero en general lo veo más robusto"*).

Across the three blind checks against 1.0.2: 4–6–2, 5–5–2 and 4–8–0, so 13 for the rewrite, 19 for 1.0.2 and 4 neither. The rewrite delivered a plain polish in one of 24 pieces; every other time it delivered a partial or full rebuild, while 1.0.2 corrected inside the original structure more often. Its rebuilds won 9 of 23. He prefers the correction that stays closer to the original structure and gets the spacing right, more often than a recomposition made by a clean session.

At the time, this led to treating polish as the default delivery. Later catalogue reviews exposed the limit of that interpretation. The current depth decision is in “How he corrects” in `SKILL.md`.

## His fifth blind check (16 November 2026)

Twelve more unseen pieces (eight commercial: a bookshop, a pharmacy, a driving school, a rural hotel's story, a burger bar, a coworking space, a music school and a law firm's LinkedIn talk; four catalogue templates), corrected by the polish-first skill and by 1.0.2. The polish-first skill polished all twelve inside their structure. He picked it five times, 1.0.2 six times, and neither once (the law firm: *"information saturation"* (*"saturación de información"*)). His words: *"it comes closer; I liked that it tries, as far as possible, to keep the original style but doing it well, and in the cases where it doesn't, that it has improved the design"* (*"se acerca más; me ha gustado que se intente, en la medida de lo posible, conservar el estilo original pero haciéndolo bien, y en los casos que no, que haya mejorado el diseño"*).

Across the four blind checks against 1.0.2: 18 for the rewrite, 25 for 1.0.2 and 5 neither. That gap is within what chance gives on 43 picks, so the rewrite is level with 1.0.2 in his blind picks, not better, while every round he said it comes closer. This round 1.0.2 won several times with the more transformed version, so how much a correction changes does not decide his pick on its own. What he names most is spacing finish (*"I'm missing spacing polish"* (*"me faltan pulidos de espacios"*)).

## His sixth blind check (16 November 2026)

Twelve more unseen pieces: six catalogue templates drawn at random and six commercial posts (an optician, a 10K race story, a theatre, a bike workshop, an ice-cream shop, a software webinar on LinkedIn), corrected with the spacing measure and by 1.0.2. He picked the measured version five times and 1.0.2 seven times. On the templates the measured version won 4 to 2; on the commercial posts 1.0.2 won 5 to 1. He would sign 2 of the 12 picks as they are (both 1.0.2's), 9 with retouches. Over the five checks against 1.0.2: 23 to 32, with 5 neither.

Measured on the 96 corrections of the last four checks, the rewrite left fewer text styles than 1.0.2 in 30 of 48 pieces and never more (3.4 against 4.7 on average). In those pieces it won 10 of the 27 he decided. When 1.0.2 kept a third typeface that carried the piece's voice (a script hook, a condensed display face), 1.0.2 won 7 of 9. The commercial losses show the same thing on the render: the rewrite cut the script hook and the price badge of the bike workshop, set the optician's offer as a small subline, turned the theatre's credits and date into one flat body style, and dropped the race's italic display face and its colours. 1.0.2 kept each of those and fixed how it was used.

Rule drawn: respect the piece and make it work (SKILL.md, How he corrects). The voice stays, its faces included, and the counts only find a sprawl: one role set several ways, or styles that mean nothing. Never cut the voice or merge roles to reach a number. The numbers of The reference study describe the posts he loves; they judge and compose, they are never imposed on someone else's piece.

## His seventh blind check (16 November 2026)

Twelve more unseen pieces: six catalogue templates drawn at random and six commercial posts (a bakery, a jazz festival, a nursery school, a winery story, a sports-shop sale, a dental clinic), corrected by the rewritten core (respect the piece, make it work) and by 1.0.2. The rewrite won for the first time: 7 to 5 (templates 4 to 2, commercial posts 3 to 3). He would sign 6 of the 12 picks as they are, 4 of them the rewrite's, against 2 in the sixth check. His words: *"it's getting closer"* (*"se acerca"*). Over the six checks against 1.0.2: 30 to 37, with 5 neither.

What 1.0.2 still did better, on the render:
- **Starbursts and seals.** In the bakery and the sports-shop sale the rewrite kept the offer's starburst or scalloped seal, cleaned up; 1.0.2 removed it and set the figure as type, and won both. On the race story of the sixth check, removing the stickers also won. On the bike workshop a calm flat circle was kept and won. A calm badge can carry the offer; an explosion shape cannot.
- **The data the reader acts on.** In the bakery 1.0.2 set the three sizes and prices as a level of their own, with big figures; the rewrite categorised them but kept them small. His comments on the third check ask for the same (*"it categorises the information better"* (*"categoriza mejor la información"*), *"not everything looks so compressed"* (*"no aparece todo tan comprimido"*)).
- **Too much text on a post.** In the nursery school 1.0.2 kept only when, where and how to book, with icons, in the calm band above the photo; the rewrite kept all seven lines under the photo. He had already called a law firm's post *"information saturation"* (*"saturación de información"*).
The two templates 1.0.2 won were near-identical pairs.

## His eighth blind check (16 November 2026)

A confirmation round on twelve more unseen pieces: six catalogue templates drawn at random and six commercial posts (a summer cinema, a dance school story, a craft brewery, a Christmas market, a tax adviser's LinkedIn webinar, a yoga retreat), corrected by the rewritten core with the three rules drawn from the seventh check (starbursts become type, the data the reader acts on reads big, a post is not a flyer) and by 1.0.2. The rewrite won again: 7 to 4, with neither for the Christmas market (templates 4 to 2, commercial posts 3 to 2). He would sign 6 of the 11 picks as they are, 3 for each version. His words: *"it's getting closer"* (*"se acerca"*).

The rewritten core has now won two checks in a row, 14 to 9 with one neither, where every earlier version lost to 1.0.2. Over the eight checks against 1.0.2: 37 to 41, with 6 neither.

What 1.0.2 won this time: the summer cinema, where it kept a small "ESTRENO" starburst on the marquee and set the five films as one centred list (he would sign it as it is), while the rewrite set the badge as type and the films as a wide table; the dance school story, where 1.0.2 set the title larger (its logo sat in Instagram's covered zone); and two near-identical templates. A small starburst that belongs to a retro concept was not punished here, so the rule stands for the offer's sticker, not for every badge-shaped device.

## His ninth blind check (16 November 2026)

Twenty catalogue templates only, drawn at random from twenty different categories and twenty different layouts, half with a photo, none seen before, corrected by the unchanged rewritten core and by 1.0.2. The rewrite won 11 to 9. He would sign 13 of the 20 picks as they are (7 the rewrite's, 6 1.0.2's) and the other 7 with retouches; he rejected none. His words: *"it's getting closer"* (*"se acerca"*).

On clean templates both versions now reach his bar most of the time, and the pairs differ in details, so a pick here is close to a coin toss. The rewritten core has won three checks in a row, 25 to 18 with one neither, and 19 to 13 on catalogue templates. Over the nine checks against 1.0.2: 48 to 50, with 6 neither.

## His tenth check: Cathopic 5 interfaces, change by change (17 November 2026)

The first check on interfaces. Six Cathopic 5 screens (Home with the Assistant, My designs, the liturgical calendar, the Planner, Settings › Plan, the Brand kit) and six shared components (buttons, fields, tabs and chips, an open menu, a form dialog, the sidebar), rendered from the local app. Dimeyes 1.2.2, an internal test build (1.2.1 plus the project rule), corrected each one as at most five independent changes, each rendered alone and with the others, and he accepted or rejected every change.

He accepted 42 of 45, one more with a nuance, and rejected two. Every change about spacing (8), consistency (12, and one more with a nuance), interaction and states (5), hierarchy (5), copy (5), legibility (2) and detail (1) was accepted, and 4 of the 6 noise removals, on screens and components alike, at the token, component and screen layers.
- Both rejections were "noise" removals justified as a repeat. Hiding a dialog's field label because the title asked the same question: *"the field would be left alone looking like a button"* (*"el campo quedaria solo pareciendo un boton"*). Moving a calendar cell's corner rank icon inline before its word: *"because it saturates, it's a calendar with many elements already"* (*"porque satura, es un calendario con muchos elementos ya"*). A repeat that does another job is not noise, and a cleanup never adds to the text lines of a full view.
- The nuance: he accepted putting My designs' folders on the designs' grid, but wants six per row: *"better that 6 appear in each row, that way long titles don't look bad"* (*"que aparezcan 6 mejor en cada fila, asi no quedan titulos largos mal"*).
- His verdict: *"the truth is it polishes very well. It's true it doesn't make big changes or rethink things better, but it does polish very well"* (*"la verdad es que pule muy bien. es cierto que no hace cambios grandes o replantea mejor las cosas pero si pule muy bien"*).

The format asked for small independent changes, so it could not show a rethink: that half of his verdict rests on his words, not on a pick. The polish layer of the eye holds on interfaces.

## His eleventh check: the interface rethink, blind (17 November 2026)

Six Cathopic 5 screens (Home, My designs, the Planner, Settings › Plan, the Brand kit, Settings › Account), corrected in clean sessions by 1.2.2 and by 1.2.3, an internal build that adds the interface rules (repeats that do another job, affordance, full views, and a rethink beside the polish). Each version showed its delivered correction and, when its answer proposed one, its alternative: two to four proposals per screen, shuffled, rendered on the local app.

- The new version proposed a rethink on 5 of the 6 screens and said the structure holds on Home; 1.2.2 offered an alternative only on My designs.
- His picks: the new version 4, 1.2.2 2. By kind: a polish on 5 screens (new 3, 1.2.2 2) and one rethink, on My designs: Designs and Folders as two tabs, signed with retouches. On it he asked for the search bar to shrink: *"or just show the little magnifier, and when you click it, it expands a bit so you can type"* (*"o que salga simplemente la lupita y que al, haz- que al clicar se expanda un poco. para que puedas escribir"*).
- The rethinks he passed over: the Planner's posts as thumbnails, Plan's people and credits as two side-by-side cards, the Brand kit's single logo target that hides the dark version until the first upload, and Account's photo action moved into the identity row. They add containers or visual weight, hide an option or only move a function.
- His verdict: *"well... it's not bad. It's not that it does it perfectly, and I don't notice significant improvements in UX/UI either, but what it does isn't bad"* (*"bueno... no esta mal. no es que lo haga perfecto y tampoco noto mejoras significativas en ux ui, pero tampoco lo que hace es malo"*).

He picked the first proposal (A) on 4 of the 6 screens, so a position effect can't be ruled out in so few picks. The rethink earns its place only when it simplifies; the rule now says so.

## His twelfth check: six fresh Cathopic 5 screens, blind (17 November 2026)

My templates, Pricing, Settings › People, Preferences, Downloads and the Help Center, none seen before, corrected in clean sessions by 1.2.2 and by 1.2.4, an internal build that raises the rethink bar, positions rotated per screen.

- The new version proposed one rethink (People without its summary plate) and said the structure holds on the other five, each with a reason. He did not pick the rethink.
- His picks: the new version 2 (Downloads with retouches, the Help Center as it is), 1.2.2 1 (People, as it is) and none on three screens. His reason for the three: *"the ones where I said I wouldn't ship any, it's that I didn't see any difference between the screens"* (*"las que he dicho que no lanzaria ninguna es que no he visto ninguna diferencia entre las screens"*).
- On those three, both versions had graded the screen "with changes", with findings marked Important. They were nudges the eye doesn't see at real size.

Across both interface checks: the new version 6, 1.2.2 3, none 3, and 1 of 6 rethinks picked. On screens already near his bar the polish is invisible, so the verdict must say so: the rule is now to grade by what the eye sees side by side.

## His thirteenth check: the visibility rule, blind (17 November 2026)

Three fresh Cathopic 5 settings screens near his bar (Workspace, Assistant, Privacy and AI) and three public parish and diocese websites with real flaws, corrected in clean sessions by 1.2.4 and by 1.2.5, an internal build that grades interfaces by what the eye sees, positions alternated. 1.2.5 was released as 1.3, with findings about use kept at their grade.

- On the three Cathopic screens the new version said "I'd sign it" with Details only, and 1.2.4 said "with changes" with Important findings. He picked the new version on all three.
- On the websites the rule never turned a real flaw into a Detail: both versions kept Critical or Important findings, but on the diocese the new version said "with changes" where 1.2.4 said "I wouldn't sign it". He picked the new version on two. On the diocese he picked 1.2.4, which caught four more details (a cut ellipsis, a missing hyphen, an off-palette accessibility button, the date below the title) and moved the carousel arrows to the section's title row instead of the page margins.
- He skipped the question on his own verdict and gave no reasons. Asked whether it now grades like him: *"more or less"* (*"más o menos"*).

The rule holds where it acts (3 of 3). On the diocese he picked the harsher verdict and the fuller correction without a reason, so the milder verdict can't be ruled out as the cause. To watch: on the websites the new version listed fewer findings in all (23 against 30: 6 against 9, 8 against 8, 9 against 13); the rule decides how loud a finding is, never whether a detail gets listed.

## His fourteenth check: thirty catalogue templates, two approaches, blind (18 November 2026)

Thirty Cathopic Signature templates (ten chosen and twenty drawn at random), each corrected in another session by Dimeyes alone and by Dimeyes with Impeccable, rendered from their native layers with the logo slot drawn on top. He picked blind between the two, positions balanced.

- His picks: Dimeyes alone 11, with Impeccable 9, neither 10. The combination added nothing on graphic pieces.
- **Neither, ten times,** in his words *"very bland"* (*"muy sosas"*), *"not very creative and bad solutions"* (*"poco creativo y malas soluciones"*), *"terrible redesign, pointless"* (*"malisimo rediseño en ambos casos, sin sentido"*), *"bad use of the spaces and barely any hierarchy"* (*"mal uso de los espacio y apenas hay jeraquia"*). Most of the ten were stripped of their frames, rules and ornaments and reflowed to free the logo slot.
- **Lines and frames.** Both approaches removed the frames or rules of seven pieces. He took neither on five and asked for the line back on three: the double frame of a creed, kept but stopping a few pixels short of the logo at the bottom; the outline around an arched image (*"I like the line around the original image in this case"* (*"la linea alrededor de la imagen original me gusta en este caso"*)); a top rule that answers the bottom one and gives the layout its symmetry.
- **Depth.** The partial rebuilds won 4 of 20 and drew 11 "neither". The polishes did better: Dimeyes alone won 10 of its 25 polishes.
- **Grouping by meaning.** Four of his comments on the pieces he picked ask for the line that completes the title to sit closer to it and farther from the next one (*"to create visual hierarchy"* (*"para crear jerarquia visual"*)); one asks for a title to sit at the same distance from the image above and the subtitle below.
- **The logo slot.** Twice he asked for the slot's height to match the two lines facing it across the foot; once he rejected a slot squeezed into a card when it could sit outside it; once he asked for the image to run down to the slot's lower edge.
- **Display tracking.** Twice he asked for tighter tracking on a display serif that spreads its letters.
- **Space.** Three comments on wasted or deserted space, one with his own fix: a small wheat ear in an empty corner of a Eucharistic prayer.

Rules drawn (SKILL.md, Language is not noise and How he corrects; `eye.md` §3.7 and §4): lines and frames are judged by their job; a slot collision is not a structural failure on its own; a partial rebuild that only reflows is poorer; the line that completes the title joins its group; the slot aligns with the block it faces; freed space is used.

## His fifteenth check: twenty templates, 1.3 against the round-fourteen rules, blind (18 November 2026)

The ten templates he had rejected in the fourteenth check and ten never tested, corrected from the original in clean sessions by 1.3 and by the build with the fourteenth check's rules, on the template's native layers, rendered with the catalogue's own renderer and checked for execution. Positions balanced.

- His picks: 1.3 8, the new build 5, tie 4, neither 1, two unanswered. On the ten he had rejected: 1.3 5, the new build 3, tie 1, neither 1, against ten "neither" a round earlier. That gain belongs to both versions, so it comes from correcting the native layers carefully, not from the new rules. Asked whether it has improved: *"yes, I see an improvement"* (*"si veo una mejora"*).
- **Lines, over-kept.** The new build kept every line; 1.3 removed most. He picked the arch outlines kept (two of two) and a quote's rule kept, and picked the versions without an oval around a quote, a divider between two figures and the second line of a double frame. On the saint's profile he picked the new build but asked for the divider between the photo and the text to go.
- **Growth.** Where 1.3 won it had grown what matters: a hero figure, the event data, a photo bled to the canvas edge. On the worship night he asked for exactly that: *"it put the tape, but it could have increased the size of a relevant text instead"* (*"ha puesto la cinta pero podia haber inrementado el tamaño de un texto relevante instead"*).
- **Still neither:** the missionary visit, whose wide side band he finds flat (*"I don't understand the right strip being so big, it all looks flat and ugly"* (*"no entiendo la franja derecha tan grande, queda como todo plano y feo"*)): a structure a polish can't save.

The working rules at this stage judged a line by what it draws, ornaments or anchors, and gave freed space first to the protagonist or the key data. The first-look follow-up below records where that use of space was too prescriptive.

## His sixteenth check: twenty templates, 1.3 against the round-fifteen rules, blind (18 November 2026)

Eight templates that 1.3 had won in the fifteenth check and twelve never tested, corrected again from the original in clean sessions by 1.3 and by the build with the fifteenth check's rules (lines judged by their job, freed space to the protagonist first). Native layers, the catalogue's renderer, execution checked, positions balanced. He gave one reason about an individual piece (the Mass request). The observations about size and space below came from inspecting the renders after his votes.

- His picks: the new build 12, 1.3 4, tie 1, neither 3. On the twelve never tested: the new build 6, 1.3 3, tie 1, neither 2. On the eight that 1.3 had won: the new build 6, 1.3 1, neither 1. The new build won 6 of 10 in each position overall. The sides were uneven within the fresh and repeated groups. Asked whether it has improved: *"improvement"* (*"mejora"*).
- **Size differences.** Where the new build's title or hero figure grew, it won 6 of 8. The four pairs that 1.3 won had these visible differences in the new build: a title kept at the original size while 1.3 grew it (ten minutes in the church), a photo grown less than 1.3's (lector training), a smaller photo and the data crammed under the band with the field empty below (worship night), and the text pushed down its shape leaving the top empty (Easter egg hunt).
- **Voids in the renders.** A post-vote inspection of the three "neither" picks and the tie found a field with its group sitting high and the rest empty (the parish mission's panel, the livestream's left column) or a piece left as it was. Both versions kept voids the original already had.
- **Lines: the rule is right, the runs vary.** On the Mass request he chose neither and wrote *"the design from the previous round was better"* (*"era mejor el diseño de la ronda anterior"*): that one kept the outer frame and one rule under the title, with no dividers between the data. This round 1.3 removed the frame and the new build kept it but added dividers between every row. Each run broke the rule a different way.

The 1.4 build used these post-vote observations to introduce two checks: measure the space above and below a group, and try a larger protagonist where the field has room. The follow-up below tests whether position or scale actually explains a decision on an individual piece.

## First-look follow-up on two catalogue pieces and a workshop screen (18 November 2026)

He reviewed each piece on its own and gave a signing verdict before seeing alternatives. The predictions below were written before his answers.

- **Annual giving report.** Predicted: sign with retouches, try a finer top rule. He would sign with retouches. The headline and 212 caught his eye first, as intended. The caption immediately under 212 looked tightly tracked for ordinary text (its layer actually uses zero letter spacing). The size of the logo and its alignment with the source credit bothered him more. He suggested stacking the two parts of the credit so the block relates to the logo. He was looking at a logo placeholder. He gave no target size for an actual mark.
- **Sunday Mass livestream.** Predicted: keep the initial vertical position of the data because its top aligns with the photo. He chose that position, explaining that the higher option crowded the title band and the lower one crowded the logo. He would still rebuild the piece. He liked the top photo and the light title band, wanted to open up the title lettering towards the safe-area edges, and questioned what the second photo contributed. His own reason for rejecting the layout reaches beyond the unused space identified in the earlier render review.
- **Workshop sessions.** This was a new, fictional interface. Predicted: A for its availability labels. He chose B, which he read as showing a hover state that explained the inset at both ends of the row. All three versions were static. Looking at the initial screen alone, he objected to the dates and the right-hand ends sitting inside the section axes and to an illustration that told him nothing about the workshop. He would rethink the screen, including B. He then compared the initial screen with a working correction: at rest the dates aligned with the section title and the arrows reached the opposite edge. On hover or focus, the background extended around the stationary contents. Asked specifically about the two edges, he considered them resolved. His last verdict on the whole screen was still to rethink it.

## What he expects of Cathopic 5 catalogue work (18 November 2026)

His publication standard is a template he would design himself. He explicitly includes changing several pieces together or rethinking the design: *“muchas veces hay que editar o cambiar varias piezas o incluso el diseño.”* Read his feedback about one relationship at that scope. After he accepted the two edge alignments in the workshop screen, his wider objection to its composition still stood. When a catalogue piece is tidy yet the image, type and information still tell the wrong story, work on that organising idea and judge the resulting template as a whole.

## Publication decision on two Cathopic 5 templates (18 November 2026)

He compared two versions of each template blind, with the catalogue original available. Both runs used the same editable content. The B label referred to a different skill version in each pair.

- **Stories for bedtime.** *“La de cuentos B sí la sacaría tal cual.”* He approved the yellow bookshelf composition from the earlier build for publication as shown. He gave no reason for choosing it over the night scene with the lamb.
- **Plant a tree this spring.** He chose B, the revised build’s leaf-shaped photograph on a light ground, and identified his first correction: *“Ese «Plant» se me queda un poco suelto respecto a «a tree this spring».”* The first word and the remaining phrase already used the same type family. Their scale, posture and spacing differed. He identified the break in the reading and left the typographic remedy open. His verdict applies to the version shown.
  On seeing the revised headline he confirmed: *“Sí, ahora ya leo «Plant a tree this spring» de corrido. El titular lo daría por resuelto.”* He approved the continuous reading of the headline. The revised rendering used Lora italic at one size across three lines. The type choice belongs to this solution. His last verdict on the whole template remains a preference for B.

## Blind prediction on the All Saints party (18 November 2026)

He saw the original square catalogue preview of “All Saints party: come as your favorite saint”. The prediction was recorded before showing it. The preview omitted the customer’s mark.

| Question | Prediction | His reading |
| --- | --- | --- |
| What would he keep? | The large black “SAINTS” on yellow as the main typographic gesture. | He specifically liked the repetition and its treatment across all three lines. The prediction identified the word and missed why he would keep it. |
| What would he touch first? | Give the event details a recognisable block at the foot and make them read before the description. | He wanted a little more space between the paragraph and the data line, then clearer hierarchy within the data so they feel less compressed. He did not request a reversal of reading order. |
| Would he publish it as shown? | No. Recompose the foot first. | He later made his verdict explicit: *“yo no sacaría tal cual la plantilla porque habría que aplicar los ajustes que te he comentado.”* He tied that verdict to the text adjustments already identified before seeing the logo. |

He also pointed out that every Cathopic 5 template must accommodate the customer’s branding. This was an existing production requirement that the blind presentation failed to make visible. In subsequent catalogue tests, show the brand applied so he can judge the actual relationship between the signature and the content.

With a sample horizontal mark in the actual slot, he asked to recompose the whole lower area, including the long paragraph, while preserving the overall composition. The two views elicited different scopes: first he saw a crowded data line, then he saw how the paragraph, data and signature needed to work together. Credit the prediction for the publication verdict and the location of the problem. His reason for keeping the title treatment and the full effect of branding required his feedback.

The first correction was assisted: an executor used Dimeyes, Dimitri’s feedback and an art-direction brief, and a second agent reviewed the result. He would still withhold it from the catalogue. The applied logo felt too large against the two lines opposite and extended below the last line, creating a visual step. The reserved area was clear, so the collision check had passed while the optical relationship still failed. This is evidence about the correction and its review. Keep assisted work distinct from a fresh, uncoached application of the skill when reporting how it performs.

## Blind prediction on the Easter Vigil (18 November 2026)

An independent agent used the installed skill and the original square Easter Vigil template with a sample parish brand. Before Dimitri saw the image, it recorded three predictions: retain the full-bleed bonfire with the title on its dark base, first enlarge the date and time because the white logo drew the eye, and withhold publication pending a polish of the foot. It explicitly considered the title and the composition resolved.

Dimitri also withheld publication and found the logo too prominent. He wanted a more visual, elegant treatment of the Saturday details. He described a wider problem: the stacked texts left the piece very simple and with little hierarchy. He would try a larger title on two lines, pull the sentence explaining it closer and give the other groups room. When asked, he confirmed that his final “too much” referred to the logo. He did not give a verdict on the bonfire, specify a size or prescribe weight alone for the date.

Credit the publication decision and the local observations on the mark and date. The prediction underestimated the required work on the composition. The proposed two-line title is an experiment for this piece. The relationship to test elsewhere is whether a person can see which words belong to the message and which tell them how to attend.

## Blind prediction on the conference programme (18 November 2026)

A fresh agent used the same skill revision as in the Easter Vigil test. It recorded its decision before Dimitri saw the branded portrait. It predicted that he would keep the timeline, start by evening the gaps after wrapped activities, and withhold publication until the spacing was polished.

He would withhold publication. His first stated intervention was to move the logo to the lower right, align it with the footer data and reduce its opacity a little so it attracts less attention. He also found the schedule crowded when an entry takes two lines and tentatively suggested slightly smaller items. He said the rest worked. That is consistent with keeping the timeline. He did not single out its dots or yellow times, endorse a 48 px gap or specify an opacity value.

Across the two independent predictions, both publication verdicts matched. The Vigil prediction underestimated the composition change. The programme prediction saw the wrapping issue and missed the signature as his first priority. These are judgements of existing designs. The reserved template is a separate test of whether an agent using the resulting skill can deliver a finished design without direction on that piece.

## Independent design of the mission story (18 November 2026)

A fresh agent received the original editable template, the calibrated skill and the native renderer. It chose a triptych of photographic arches for “Pray / Give / Go” and predicted it would sign its finished version. All seven text fields and three photo roles survived. It had checked the marked composition at phone size and with replacement content.

Dimitri would **not publish that version as shown**. He liked the idea of the three arches with the three verbs. The first problem he saw was the lower part as a whole: the explanations felt close together, while the logo floated in too much air. He acknowledged the safe area. He suggested trying the title’s style on the three verbs. He also described the result as *“un diseño sin más, aunque no presente muchos errores.”*

This is a missed publication verdict on an independently produced design. The accepted idea, suggested type experiment and verdict on the whole are three distinct observations. In a later revision made with this feedback, an improvement would demonstrate response to direction. Evidence of independent design requires another unseen piece.

In the directed revision the arched photos descended in steps. An ivory band stepped across the lower content, and the verbs took the headline’s italic style. He rejected that revision emphatically and preferred the preceding composition. He liked the treatment of the three verbs. The upper step extended rightwards and downwards, so what should have read as separate blocks looked to him like one laid over another. He also disliked the larger compositional choice, beyond that contour defect. The earlier triptych is a better starting point, though he had also withheld it from publication. His feedback supports carrying the type treatment back to that stronger arrangement. It establishes neither a general objection to asymmetry nor a preference for applying italics to all action words.

The next version restored the aligned arches, moved the signature into the header and set the three action words in the title’s italic. He preferred it to the stepped revision but would still withhold publication. The main title and the three column headings seemed to merge. He explicitly wanted to see alternatives before choosing a remedy. The italic echo that he liked in the previous comparison and a clear distinction between the two levels both matter. He asked to see both approaches before deciding.

In the controlled comparison he chose B: *“eligiria la opcion B”*. A kept the shared italic and increased the gap between the main title and the columns. B kept the columns in place, left all three verbs italic and set the main title in the same family in upright bold, with a slightly smaller size and adjusted leading. For this poster he preferred the combined typographic change. The test did not isolate which of the four headline properties mattered most. When asked about the whole finished story, he explicitly approved it for the catalogue as shown: *“Sí, la B ya la sacaría al catálogo tal cual.”* This was the directed final version. The independently delivered first version still received a no.

## Independent design of Closing Mass (18 November 2026)

A fresh session used Dimeyes to redesign the portrait with its original photograph, all five editable text fields and a sample parish mark. It placed the date and time on a pennon over the photograph and the title below. Its recorded verdict was to publish the branded render as delivered. Dimitri said *“lo sacaria tal cual pero con pequeños ajustes”* and was surprised by how well the piece worked overall. He accepted the composition and named two finishing details. He would match the photograph’s top inset to its side insets, and the text at the foot felt too close to the logo. He did not identify a particular footer line or request a smaller signature.

The autonomous version achieved the visual direction on this piece. Its check of the safe area, logo reserve and text collisions had passed while both details remained visible to him. The subsequent adjustments respond to this feedback. Keep the verdict on the autonomous version attached to that render.

## Three independent catalogue designs in a blind comparison (19 November 2026)

Three fresh sessions received the same skill revision. Each designed one previously unseen template and recorded “publish as shown” before Dimitri saw the results. Each of the six branded renders had its own publication verdict. Authorship was concealed for the first ballot. After the reveal, Dimitri revised his original-programme vote from “rethink” to “publish with refinements” and explained his judgements on both the programme and the collection. The table shows his latest verdicts on those same renders.

| Piece | Original, graded by Dimitri | Dimeyes proposal, graded by Dimitri |
|---|---|---|
| Youth quotation | A, publish as shown | B, publish with refinements |
| Evening programme | A, publish with refinements | B, publish with refinements |
| Holy Land collection | B, publish with refinements | A, publish with refinements |

Dimitri explicitly signed the original youth quotation. It uses the photograph as a background and a recognisable pair of opening quotation marks. In B the photo filled two elongated marks. His first reading was “parecen ojos enfadados”. He wanted more natural quotation marks and liked the photo as a background. For this piece, keeping the original would have delivered a publication-ready result. For other pieces, check which shape the viewer actually recognises and what feeling it carries at reading size. Using photography inside a symbol remains a possible treatment.

He liked both programmes. In the original (A) the logo felt misplaced. He suggested moving the content up to make room for it. In the proposal (B) the schedule worked for him, but the header shaped like an open book looked unattractive. He would use the photograph at full width there. The book was recognisable and relevant to the subject yet weakened this design in his eyes.

In the Holy Land proposal (A) the cross looked distorted. He also found too much leading in the title and an awkward sequence of gaps between the image, title and text below. In the original (B) he liked the composition and idea. The information block crowded the text and left too little room for the logo. He suggested moving the title up a little. Equal verdicts can call for different changes to each piece.

On his latest ratings, the youth proposal fell one publication category and the other two matched their originals. Only the original youth quotation was ready as shown. Dimeyes had signed all three of its proposals and Dimitri requested refinements in all three, on both ballots.

## Independent wedding invitation and blind editorial review (19 November 2026)

A fresh Dimeyes session could keep, refine or redesign the source. It chose to redesign the envelope, brought the folds together at the seal and moved the parish signature below it. It would publish its candidate as delivered. An independent reviewer saw the two branded renders in random order. The reviewer would refine the original (A) and publish the candidate (B) as shown. The candidate reached Dimitri exactly as delivered by its author.

Dimitri saw only the finished invitation, without the source identity or either verdict. He would publish it as shown. He could imagine a more realistic shape for the seal and said the invitation would also work without a logo. The reviewer's verdict matched his. The reviewer had praised the seal's role in closing the envelope and had not anticipated the point about its shape. The branded render is the signed reference. The original received no verdict from Dimitri in this round.

The seal shows the distinction between a possible refinement and a change he needs before publication. The folds and seal already give the piece a visual ending of its own. In templates with optional branding, look for what holds the composition together when the user leaves the slot empty.

## A dense parish story and continuity of style (19 November 2026)

The original story welcomed newcomers with three steps. Uppercase sans-serif type, numbered outlines, thin rules, a light ground and space gave the information its visual identity. The autonomous version kept the information but put the headline on an illustrated doormat with a tiled ground and used a serif display face. Its author predicted publication. A blind reviewer preferred that direction after a correction to the lower safe area.

Dimitri’s first reaction to the direction was that he would withhold it. He found the design reasonable in its own right, disliked the upper area and gave the deciding reason: *“la plantilla original claramente sigue un estilo minimalista, y lo que hizo dimeyes fue hacer algo mas ilustrativo”*. His observation applies to the direction; he did not distinguish the technical exports. A second attempt used his direction and returned to the original typographic treatment.

A stronger hierarchy, a new composition or a rebuilt section can still belong to the original style. Earlier approvals of illustrative motifs in other templates remain specific to those compositions. A theme shared by the original and revision establishes continuity of subject. Continuity of style must also be visible in the way the design treats the content.

The second version retained the three-line headline, outlined numbers, rules and top-right signature. Its author and a separate reviewer would both have published it. Dimitri would not. It scarcely improved the original for him: *“el diseño no respira, mal ajuste de los espacios y el logo es grande”*. He called for recomposition within the original style. Keeping the visual language had solved the previous objection. The distribution of space and the prominence of the applied mark still needed a more substantial intervention.

During the next recomposition, he noticed that the digits sat high inside the rounded outlines and that the repetition felt unstable. In the selected draft the numbered marks had roughly 8 px between the digit and the inner stroke above and 13 px below on the 1080 px artwork. This locates the cause on that render. Read other typefaces and numerals against their own outlines.

On the recomposed two-column steps, Dimitri also questioned the top alignment of the action and its description. In all three rows the opening capital of the description began 3 px below the opening capital of the action on the 1080 px render. Comparing the tops of whole lines understated it because ascenders further along the descriptions reached higher. Moving the descriptions up 3 px aligned the opening capitals in all three rows at full size and in the phone preview. Dimitri confirmed that the columns now looked aligned and that he would sign the finished two-column story as shown. His signature applies to the recomposed version with the optical corrections. It followed his feedback on style, spacing, logo scale, numeral centring and column alignment.

## Five moments at Benediction (19 November 2026)

A fresh Dimeyes session worked from the branded square template without direction from Dimitri on this piece. It kept the photograph, serif title, italic introduction and fine rules. Each rite and its explanation occupied one row. The service time and chapel shared the foot with the parish mark. An independent reviewer spotted a near-touch between two letters on successive lines of the headline at phone size. The author opened the leading and the reviewer signed the revised render before Dimitri saw it.

Dimitri first saw the finished version alone. He asked to see it beside the labelled original before giving his verdict. He would publish the finished Benediction template as shown: *“Ha respetado el estilo de la original y ahora se leen mucho mejor los cinco pasos. El logo también queda mejor con el horario al otro lado.”* His approval covers the reviewed version. He gave no separate publication verdict on the original. This is an example of how a denser piece can gain clarity within its own style by making the pairs easier to follow and giving the signature a visible relationship to the practical details.
