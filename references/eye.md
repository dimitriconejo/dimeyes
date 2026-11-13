# His eye: how to judge any design

How Dimitri looks at a design, turned into checks you can run on **any** piece in **any** style. This file is about his way of seeing, not his look: judge every design in its own language. His own look lives in `profile.md` and `system.md`.

**Contents:** 1. The harmony test · 2. Read the design's language first · 3. Checks in his reading order · 4. By medium · 5. Severity calibration · 6. Writing corrections

---

## 1. The harmony test

His north star: *"a design is beautiful when the eye feels a harmony"* (*"un diseño es precioso cuando el ojo siente una armonía"*). Harmony is not a mood; you can check it.

| Check | How | Harmonious when |
|---|---|---|
| Squint | Blur your view, or look at a heavily scaled-down screenshot. | Two or three masses read in a clear order, and the main one is what matters most. |
| Rhythm count | List the distinct gaps between blocks and inside groups. | A few values repeat, and similar relationships use the same value. |
| Axes count | Count the left edges and the centre lines that text and blocks align to. | A small number of shared axes; nothing sits 2–4 px off an axis. |
| Type count | Count the distinct sizes and weights. | A short scale with clear jumps: about 4–6 sizes on a screen, 2–3 weights. |
| Colour roles | Name the role of every colour: background, surface, text, muted text, emphasis, status. | Every colour has a role, and emphasis is rare enough to work. |
| Odd one out | Look for the element that doesn't belong: another radius, another icon style or size, another button shape, a stray colour or emoji. | There isn't one. |
| Breathing | Look at the margins and at the space around the focal element. | The space looks intended. Nothing is cramped against an edge or against its neighbour. |

Something can follow every rule and still jar. When that happens, it is still wrong: say what pulls the eye and why.

---

## 2. Read the design's language first

Before judging anything, take inventory. You will judge the design **against its own system** plus his principles.

- **Medium and purpose:** web, app, flow, dashboard, poster, social post, print, template, logo. Who it's for, and the one thing it must achieve.
- **Spacing unit:** the base it seems to use (4, 8, 12 or none). Collect the actual values.
- **Type system:** the families, the sizes, the weights and the role of each size.
- **Palette:** every colour and its role. A brand with five vivid colours is a valid language if each colour has a job.
- **Shape language:** the radius family, or sharp corners; stroke weights; how icons are drawn.
- **Component vocabulary:** button types, cards, inputs, chips and list rows.
- **Tone:** playful, editorial, corporate, devotional, technical.

The design can then fail in two ways:
1. **It breaks its own system.** This is inconsistency; always flag it.
2. **Its system works against his principles**: no hierarchy, no air, colour noise, too many elements. Flag it, and fix it inside the same language. Consistently bad is still bad.

It never fails for not looking like Cathopic.

**A base unit is a system.** If most values are multiples of 4 or 8 (28, 44, 52, 88 and 120 included), judge against that base and the values it repeats. Flag only the strays (13, 15, 45) and fix them to the nearest value of the design's own set. Use his scale only when the values are arbitrary and have no base, and say so. `scripts/measure.js` reports the detected `base` and the values that fall off it (`offBase`).

---

## 3. Checks in his reading order

Look in this order, but **report by impact**: whatever most breaks harmony or the main task goes first. Colour led his three written critiques because those screens were saturated; structure, composition, hierarchy and space top his own list of what makes him reject a design. When colour is chaotic (gradients, several competing hues, an accent on everything), it opens the critique: it is what he punishes most (§5). When a dimension is fine, say so in one line.

### 3.1 Colour
- Does every colour have a role? Is emphasis rare enough to work, or is the accent scattered everywhere?
- Does colour compete with the hierarchy? A saturated decorative element can steal the focus from the main action.
- Gradients, glows and heavy shadows: do they have a reason, or are they "exaggerated" (*exagerado*) or "too flashy" (*cantoso*)?
  - Gradients are not banned. He uses them himself when they are subtle and make the piece more beautiful without saturating it: one hue or two neighbouring hues, a small lightness step, on a surface that can carry it.
  - Flag the misused ones: multi-hue, high chroma, on text or small badges, on everything, competing with the content.
  - When fixing a misused gradient, a subtler gradient is a valid fix. Removing it is not the only option.
- Value messages use semantic colour: a saving or a positive change in success green, a loss or a warning in red or muted. *"Cuando es algo positivo, cuando es un ahorro, tiene que tener un color de éxito."*
- Is colour encoding something that doesn't need it? (In his finance critique, every amount in a different colour "hugely hinders reading" (*dificulta muchísimo la lectura*).)
- **Text on colour or photos:** if almost every text is the same white, there is "barely any colour hierarchy" (*apenas hay jerarquía de color*). Step it with opacity: white at 100 for the headline and the key datum, around 60–64 for secondary text, or tints of the background. He likes playing with transparency for this, but with few tones: one level for all the icons, not one per row.
- Emojis add colour. One meaningful emoji is fine; decorative or repeated ones are noise.
- In a colourful brand, judge restraint relative to the brand. The question is whether the colour is organised, not whether there is little of it.

### 3.2 Hierarchy and focus
- In two seconds, what is seen first, second, third? Does that order match importance?
- Is there exactly one focal point per view or block?
- Is hierarchy built with size, weight, tone and space, or with stacked devices (badges, icons, colour, uppercase, dividers all at once)?
- Can sections be told apart at a glance? Watch for "everything mixed together" (*todo mezclado*).
- Is there one primary action per block? Are the secondary actions visibly secondary?
- **Emphasis where it's due.** What must be noticed has to pull the eye: a "new" or feature badge, the recommended option, the primary action. A badge that announces a feature and reads as "subtle" (*sutil*) needs "a touch more emphasis" (*un pelín más destacado*), for example a tinted fill with accent text, or a solid accent dot.
- **Text hierarchy.** List the text roles that share one size. A page subtitle, a card tagline and a feature list at about the same size read flat. Secondary text (a plan's tagline, an old price, a note under a price) goes a step smaller or lighter than the content it qualifies.
  - At body sizes a 2 px step (14 → 16) does not read as a new level. Jump at least a step and a half on the scale (14 → 18), or pair the step with a change of tone or weight that goes the same way: the larger, more important text is also darker or heavier. A larger text set lighter than the one below it (a 16 grey subtitle over a 14 ink list) cancels the step and reads flat.
  - Secondary text is never the same size as the content it qualifies: an old price sits below both the price and the list, for example at 12 when the list is 14.

### 3.3 Space and composition
- **Measure to the optical mass:** a gap is read between the bodies of the lines (x-height and cap height), not from one stray descender or one tall letter. Two gaps that are equal in the code can look unequal, and the eye wins.
- **Proximity:** spacing inside a group must be clearly smaller than spacing between groups, around half. A step of a few pixels doesn't separate anything. Labels sit with their fields, meta information with its text, and actions after the content they act on. This holds in graphic pieces too for lines inside a group: in his test, two groups of data lines took about 3× the in-group gap (52 against 17, cap to cap). What changes in graphic pieces is the gap between consecutive blocks (title, lede, data): it rests on equal distances, with only a small step at a change of content (see §4, Graphic design).
- **Air:** do a vertical sweep. Do the spaces between elements exist, or is everything compressed (*todo comprimido*)?
- **Rhythm:** similar relationships use the same gap. Sections are separated more than items.
- **Separation:** use space first. One subtle divider between sections is welcome; a line on every row saturates. Platform-standard inset separators (iOS grouped lists) are not "a line on every row".
- **Containers:** cards are fine when they group consistently. No card inside a card of the same surface and weight. A tonal step that groups one set of actions, like a grey panel holding a white card, is fine.
- **Density:** prefer air, even in daily-use tools: he chose 56 px rows over 40 in a table used all day. Flag rows that feel compressed for their type size and propose the next step on the design's own scale. Compact only when the task needs many rows visible at once (logs, trading screens), and say why.
- **Margins and edges:** consistent page and component margins; nothing cramped against an edge.

### 3.4 Coherence and consistency
- The same thing is solved the same way everywhere: labels, input heights, button shapes and sizes, card structures, icon set and stroke, radii, date and number formats.
- Sibling elements, such as plan cards or list rows, share the same internal structure and alignment.
- **Icons in one group share one size** and one optical weight: the header actions, a toolbar, a tab bar, the rows of a list. Compare the drawn glyphs, not their boxes: a magnifier and a bell in the same 24 box can still look different sizes. Measure each glyph's ink, and remember that a badge sitting on a glyph makes it look smaller. The fix is optical: scale the one that looks off until the inks match. Shrinking both by the same amount fixes nothing.
- Patterns stay the same across screens: the header, the back action, how a primary action looks, how errors appear.
- No duplicates: two "Save" buttons, two names for the same destination, one label or one icon used for two different things.
- **Fewer typefaces without losing the voice.** Cutting families is about removing noise, not character. An expressive piece (a poster, an invitation, a celebration) can keep one accent face for one role, like a hook or a display word, if that face carries the tone. When you cut, check that the piece still sounds like itself: warm stays warm, devotional stays devotional.
- **Brand traits stay, clutter goes:** open tracking on uppercase labels, a signature colour, a particular corner are the design's language. A decoration that carries no information (an outlined oval around a label, a hairline that separates nothing, a line on every row) is not a trait, even when the brand repeats it: it is noise.
- The tone of the copy is consistent, and so is its casing.

### 3.5 Legibility
- Judge text by eye at its real size and viewing distance. Body text on a phone is about 16; captions go down to about 12; 10–11 only for platform micro labels such as tab-bar labels, and only if they still read. On a poster, think of the distance people read it from.
- Contrast is judged by eye (his choice: visual criterion). If it is hard to read, flag it. In an audit, a measured ratio can back the judgement. For a public product, mention WCAG as context, never as a blind rule. Grey on grey, text over busy photos and hairlines that disappear are common failures.
- Logos and images that carry information must be visible.
- Reading text runs about 60–75 characters per line.

### 3.6 Interaction and UX
- **Task:** can the main task be completed without thinking? Is the path obvious?
- **Touch targets:** 44 or more, with enough space between them. "It won't be tappable" (*no se va a poder pulsar*) is critical.
- **States:** default, hover, focus, active, selected, disabled, loading, empty and error. All the needed states must exist and look consistent.
- **Feedback:** every action shows a result. Destructive actions are clear and confirmed in proportion to their risk.
- **Navigation:** where am I, how do I go back, what is selected. Icons get labels when recognition matters.
- **Forms:**
  - Labels: a label above the field and a persistent label inside it are both fine. A placeholder that vanishes on typing is a finding in forms of more than 2–3 fields.
  - Errors say how to fix them.
  - Defaults are sensible.
- **Real content:** test every slot with longer content, such as an amount with one more digit, a long name or a translation. "Those things have to be thought through too" (*esas cosas también hay que pensarlas*). In a list row, the amount keeps its width and never wraps or clips (tabular figures, no shrink); the name truncates first. If one more digit would break the row, flag it.
- **Mobile:** the bottom bar reads as a separate layer above the content (elevation, blur or a clear edge), so the content doesn't run flat into it. A docked platform bar is valid; a floating pill is his style, not a rule. Thumb reach matters.
- **Accessibility:** visible focus, reduced motion, meaning not carried by colour alone.

### 3.7 Detail
- Values off the design's own base (see §2).
  - With no base, use his scale: 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96, 112, 128, 144, 160, then +16.
  - 6 is a regular step. 10 is his for small-component distances where 8 is tight and 12 loose; never flag it. 36 is tolerated.
  - Arbitrary values (13, 15, 45, 116) break rhythm.
- 2–4 px misalignments, icons off the text's optical centre, baselines that don't match.
- Radii should be concentric: inner = outer − padding. If the child would look almost square, add a little.
- **Buttons:** the horizontal padding is twice the vertical padding (8/16, 12/24, 16/32). This is his rule. A button whose side padding is close to its top padding looks "very square" (*muy cuadrado*). With a fixed height, the side padding equals the height minus the line height. Icon-only buttons are the exception.
- **Heading tracking:** headings take negative letter-spacing, following the conventions of the typeface and platform. That includes display figures (prices, a balance, big numbers) and secondary headings from about 20 px up. A large heading at 0 or with positive tracking looks loose.
  - For grotesks like Inter, use about −0.01em at 20–24, −0.02em at 32–48 and −0.03em or more at display sizes.
  - The iOS and Android system fonts already adjust tracking by size, so don't add more.
  - Body text stays at 0. Uppercase labels never go negative: use 0 or slightly positive.
  - A brand that deliberately sets open tracking keeps it.
- Type steps that are too close together (13/14/15/16); too many weights; inconsistent line heights.
- Microcopy: short and specific. Controls say what they do. No chatty filler.

---

## 4. By medium

### Websites and landing pages
- A single message above the fold: one headline, one supporting line, and at most two actions, the second quieter.
- A consistent container. Text measures narrower than the container, around 480–700 for paragraphs.
- Section rhythm: the same gap between sections and the same cadence from heading to text to action.
- The navigation has few items and one clear call to action.
- Social proof that can actually be seen: logos at a readable size and contrast.
- Mobile: margins of 16–24, sensible stacking order, and no element that shrinks into illegibility.

### App screens
- One job per screen. The header puts back, title and action in predictable places.
- Group settings and lists by space, or with one separator between groups. Platform-standard inset row separators are fine.
- Touch targets of 44 or more. The states the task needs are designed. The bottom navigation reads as a layer above the content.
- Respect platform conventions (iOS, Android) unless there is a reason not to.
- **Header action groups:** equal box-to-box gaps between icons and avatar (16 on a phone), whatever the badge does, and enough room to tap each one.
- **Card headings:** a plan or card name at 16/500 over a 14 list is enough of a step: size plus weight.
- **List rows:** the leading icon supports the text, it doesn't lead; about 36 in a 64 row (glyph 18) is his measure. If the icon has "a lot of prominence" (*mucho protagonismo*), size its container to the row (about 32–40 in a 56–64 row) and keep its fill soft, so the name and the amount are read first.

### UX flows (several screens)
- Every step has one clear purpose and a visible way forward and back.
- Elements stay in the same place from step to step: buttons don't jump around.
- No dead ends. Errors and empty states are designed.
- The flow is as short as possible: remove steps and fields that aren't necessary.

### Dashboards and data-dense UI
- Summary before detail; the key numbers are grouped consistently, and cards are fine for this.
- Status uses words plus colour or shape, never colour alone. A soft-fill pill is his preference; a dot with a label is equally valid if it reads quickly.
- Tables: aligned numbers (tabular figures), right-aligned amounts, rows that breathe for their type size (he prefers about 56), and hairlines only where they help scanning.
- Colour is reserved for meaning, never for decoration.

### Graphic design: posters, social posts, print
Measured in his second calibration test (values on a 1080 canvas; scale them for other sizes).

- A clear focal point and a reading path: headline → key information → secondary information → small print.
- **Margins:** on a feed post, a safe margin of about 9 % of the width (96 on 1080, the same on 1080×1350) keeps text inside the platform's safe zone. A story keeps that side margin but needs more room at the top and bottom, where the platform's interface sits. When a framed photo is part of the design, it shares that margin on every side: a frame inside the frame.
- **Rhythm by equal distances.** In graphic pieces he composes by balance more than by interface proximity:
  - Consecutive text blocks keep the same distance (title → lede → data), measured to the optical mass.
  - A change of content type (an image → text) gets only a little more: about 1.2× the in-text gap (48 against 40), not double. Between the message and the practical data, keep equal distances, with a hairline when it evens them out (below). *"Un poquito más de aire… para indicar que empieza otro tipo de contenido."*
  - A block between two neighbours sits at the same distance from both.
  - One hairline between the message and the practical data is welcome when it evens out that rhythm (40 · rule · 40): *"genera una sensación de que entre todos los elementos de texto haya misma distancia"*. Centre it optically, between the bodies of the lines, not their boxes: extra ink next to the rule (loose descenders above, a tall initial below) moves it a touch away from that ink. In his test, with a descender-heavy italic above, he set 42 above and 38 below the 2 px rule, halfway between the baseline centre and the descender centre. A line that doesn't separate two groups, or clashes with the style, goes.
- **The funnel.** A centred stack can read from big to small. When it does, the display title is narrower than the image or frame above it (in his test about 85 % of its width, so it never fills it) and wider than every line below it: *"se genera como un embudo visual… se lee de más grande a más pequeño"*. Never shrink the title below the lines that follow, and don't let it fill the whole frame.
- **Size by relation, not only by ratio.** Size and place elements against the shapes around them. For example, a date sized so it reaches up beside the photo's silhouette, leaves air above the image and joins the title's block. Judge the composition, not just the scale.
- **The empty middle is valid** in a tall piece when the content splits by type: what happens on top (title, programme), how to attend at the bottom (date, place, entry), and the image breathing in between. It is not a dead gap.
- **Typography:**
  - two families as a rule, plus one accent face only if it carries the tone in a single role (see §3.4); clear size contrast;
  - pick the hook face that matches the piece's own hand: an expressive hook (script, hand-lettered) adds personality when it fits. In a piece where everything looked handwritten he chose a script and found the neutral sans and serif options "boring and ugly" (*aburridas y feas*) there; in a piece with no hand-drawn voice, a script hook clashes and a neutral one can be right;
  - consistent alignment, not centred and left mixed without a reason;
  - comfortable line spacing.
- **His sizes on a 1080 post:**
  - uppercase, spaced meta at 24 "reads well and doesn't look silly" (about 0.6 of the lede). Don't push it up to compete with the lede;
  - when descriptive content (a programme, a description) and the practical data sit in separate blocks, keep them close in size, the descriptive a touch larger (about 1.1×: 48 against 44 in his test), never visibly smaller and never loud;
  - stacked data rows take a gap of about half their text size (20 at 40).
- **Colour on photos:** headline and key datum at 100 %, secondary text around 60–64 % so it doesn't compete, and as few tones as possible (see §3.1).
- **Practical information** (date, time, place, price) needs its own rhythm. A tight, uniform stack is "very monotonous and very cramped" (*muy monótono y muy pegado*).
  - Separate the items a step more than their line spacing.
  - Stacked rows may carry small icons where they help scanning: one set, one size and **one opacity for the whole set**, a secondary level of about 64 %, not one per row. *"No se genera ruido visual poniendo un montón de tonalidades de blanco."*
  - Inline data: separate items with middle dots (·), and no icons.
  - The key datum (date and time) leads by weight, not by size and not by dimming the rest.
- It must read at its real size: a story at phone size, a poster from a few metres away.
- **Fewer elements:** remove what adds no information or clashes with the style: a decorative oval around a date, a script line in a piece that has no script, a hairline that separates nothing. Brand marks and the elements that carry the message stay.
- **Crops:** the photo yields first. Adjust or crop it to keep the composition, even losing part of the image, but never leave a head or a face touching the edge.

### Templates (social sets, presentations, documents, emails)
- The series stays consistent: the same grid, margins, type roles, colour roles and logo position on every piece.
- The editable slots survive real content: long titles, short titles, light photos and dark photos.
- Hierarchy holds when someone else fills the template in.
- Emails: one column, one main action, readable sizes on mobile, and images that are not essential to understand the message.

### Logos and identity
- The concept comes from the content (his dimconex sun comes from the Benedictus quote).
- The mark holds at small sizes and in one colour.
- The mark and the wordmark are optically balanced, with consistent strokes and corner treatment.
- The lockup and its clear space are defined.
- A short palette with roles; type that matches the tone.

---

## 5. Severity calibration

From his three written critiques and his calibration choices:

**He punishes most, in this order:**
1. Colour chaos: misused gradients, too many colours, an accent everywhere, colour as decoration.
2. No visual hierarchy: everything mixed together, sections that can't be told apart.
3. Compression: missing space, everything crammed together.
4. Inconsistency: labels, heights and card structures that differ; duplicated actions.
5. Illegibility: text that can barely be read, logos that can't be seen.
6. Usability failures: targets that can't be tapped, a flat bottom bar, missing states.

**He notices but ranks lower:** 2–4 px misalignments, non-concentric radii, type steps that are too close, icons of different sizes in one group, square-looking buttons, loose heading tracking, microcopy.

**He tolerates or accepts:**
- a mild redundancy (an X plus Cancel);
- subtle gradients that add beauty without saturating;
- icons that make information scannable;
- a word in place of a number at the number's size (like "Hablemos" in a row of prices): big, but it keeps the siblings aligned;
- 10 px for small-component distances (his own value);
- labels above fields or persistent labels inside them;
- eyebrows;
- one meaningful emoji;
- an empty middle in a tall graphic piece, between the event on top and the practical data at the bottom;
- one hairline between the message and the practical data of a post, when it evens the rhythm out.

**Not mentioned ≠ accepted.** In saturated designs he skipped emojis, type sprawl and odd line heights because everything else was louder. Mention them after the macro issues, as lower priority.

---

## 6. Writing corrections

- **Name it, place it, explain it, fix it with a value:** "The meta line belongs with the text, not the buttons: 15 → 12 above, 19 → 24 below."
- **Use the design's own system** for values: its spacing unit, its type scale and its colours. If it has no system, propose one, with his scale as the default, and say so.
- **Group repeated issues** into one finding with one rule: "Unify every label to 14/20 medium, 8 from its field."
- **Prefer removing to adding.** Every fix should leave the same number of elements or fewer, unless something necessary is missing (a state, a label, a way back, an icon that makes practical information scannable).
- **Don't over-correct.** Calming a saturated design can kill the emphasis it needs. After correcting, check that the feature badge, the recommended option and the primary action still pull the eye, and that the text still has at least three clear levels.
- **Keep what works.** Name it so the fix doesn't break it.
- **Keep coherent sizes.** In someone else's design, keep the sizes when they form a coherent scale. Change only the ones that look random or don't relate to the rest (*"valores puestos random… no habla en el diseño y genera una sensación de ridículo"*).
- **Don't restyle.** A fix that changes the brand, the typeface or the shape language is a redesign. Only propose it when the language itself is the problem, and say so explicitly.
