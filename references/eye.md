# His eye: how to judge any design

How Dimitri looks at a design, turned into checks you can run on **any** piece in **any** style. This file is about his way of seeing, not his look: judge every design in its own language. His own look lives in `profile.md` and `system.md`. For graphic pieces, templates and logos, `graphic.md` is complete on its own; this file serves interfaces.

**Contents:** 1. The harmony test · 2. Read the design's language first · 3. Review dimensions · 4. By medium · 5. Severity calibration · 6. Writing corrections

---

## 1. The harmony test

His north star: *"a design is beautiful when you feel a harmony; when the eye feels a harmony"* (*"un diseño es precioso cuando se siente una armonía. Que el ojo siente una armonía"*). Harmony is not a mood; you can check it.

| Check | How | Harmonious when |
|---|---|---|
| Squint | Look briefly at a reduced view, then again at reading size. | The intended subject draws attention. Elements the reader needs to compare remain equally easy to find. |
| Rhythm count | List the distinct gaps between blocks and inside groups. | A few values repeat, and similar relationships use the same value. |
| Axes count | Trace the visible edges, centres and baselines of elements that belong together. | Their optical alignment makes the relationship clear. Check both ends of a group (§3.3). |
| Type count | Count the typefaces, sizes and weights, and the text styles: each mix of typeface, size, weight, case, tracking and italic is one style (an opacity step of the same style is not a new one). Then name the role of each. | Every face and every style has a role, and no role is set two ways. A short scale with clear jumps: about 4–6 sizes on a screen, 2–3 weights. The count finds a sprawl; it is never a target to reach by cutting a piece's voice. |
| Colour roles | Name the role of every colour: background, surface, text, muted text, emphasis, status. | Every colour has a role, and emphasis is rare enough to work. |
| Odd one out | Find the treatment that stands apart and ask what the difference tells the reader. | A distinction signals something that matters or gives the piece its character. |
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
1. **A repeated relationship breaks down.** Compare elements serving the same role and state. Point to where their treatment makes them read differently.
2. **The system gets in the way.** Even consistent choices can obscure the message, misdirect attention or make a task harder. Show where that happens and what is worth preserving.

Judge these relationships within the design’s own visual language.

**A base unit is evidence of a system.** If most values are multiples of 4 or 8, use the design’s own repeated values to repair a broken rhythm. An off-base distance can compensate for a glyph, the crop of a photo or a platform convention. Compare its optical effect with other members of its group before rounding it. Use his scale when the design has no discernible rhythm and say which values you supplied. On his own products, including every template in a catalogue he publishes, the distances you set come from his scale (SKILL.md, The north star). `scripts/measure.js` reports the detected `base` and candidates in `offBase`.

---

## 3. Review dimensions

Look at the piece at its intended size and name what draws attention before consulting these dimensions. Use them for a second pass to catch what the first impression missed. Colour led Dimitri’s three critiques of saturated screens. On another piece, start with whatever most affects its purpose, composition or use (§5).

### 3.1 Colour
- Does every colour have a role? Is emphasis rare enough to work, or is the accent scattered everywhere?
- Does colour compete with the hierarchy? A saturated decorative element can steal the focus from the main action.
- Gradients, glows and heavy shadows: do they have a reason, or are they "exaggerated" (*exagerado*) or "too flashy" (*cantoso*)?
  - Gradients are not banned. He uses them himself when they are subtle and make the piece more beautiful without saturating it: one hue or two neighbouring hues, a small lightness step, on a surface that can carry it.
  - Flag the misused ones: multi-hue, high chroma, on text or small badges, on everything, competing with the content.
  - Every gradient looks smooth: no visible cut, band or step where it ends or meets another layer, checked on the export at 100 % (*"gradients must always be smooth, so the cut doesn't show"* (*"los gradientes siempre deben ser smooth y que no se note el corte"*)). A subtler gradient is a valid fix for a misused one; removing it is not the only option. Technique in `graphic.md` §5.
- Value messages use semantic colour: a saving or a positive change in success green, a loss or a warning in red or muted. *"When it's something positive, when it's a saving, it has to have a success colour."* (*"Cuando es algo positivo, cuando es un ahorro, tiene que tener un color de éxito."*)
- Is colour encoding something that doesn't need it? (In his finance critique, every amount in a different colour "hugely hinders reading" (*dificulta muchísimo la lectura*).)
- **A colour code needs a meaning the reader can see.** Rows or bands in different colours make the reader ask what the colours mean: *"I'd make sure the user understands what the colours mean"* (*"me aseguraría de que el usuario entienda qué significan los colores"*). Tie each colour to something (a legend, a category named in the piece), or use one colour.
- **Scrims are dark.** Behind text on a photo, the overlay is a gradient from clear to a near-black or a dark tone of the palette or the photo, only where the text sits. A mid-grey wash looks dirty: *"a dark overlay… and not that grey, which looks stale"* (*"un overlay oscuro… y no ese gris que es rancio"*).
- **Text on colour or photos:** if almost every text is the same white at close sizes, there is "barely any colour hierarchy" (*apenas hay jerarquía de color*). When size, weight or typeface already separate the levels clearly (1.4× or more apart), one flat colour at full strength is enough and cleaner: every reference he signed with type on a photo does it, and takes its contrast from where the text sits (a calm dark or light zone of the photo). When the levels sit close in size, step them with opacity: white at 100 for the headline and the key datum, around 60–64 for secondary text that qualifies the message (a tagline, credits, a note), or tints of the background. The practical data shares one level, and inside it the key datum leads by weight (`graphic.md` §8). He likes playing with transparency for this, but with few tones: one level for all the icons, not one per row.
- **Colour is judged as a pair, and a palette that works stays.** He looks at how the colours work together, not at how much colour there is: a mustard ground with a deep blue title gave him *"more visual harmony"* (*"más armonía visual"*) than the same piece turned all blue with yellow type. A working colour pair can carry an existing piece’s identity through a full recomposition. Try changing its proportions or contrast when the hierarchy calls for it. A brief for a fresh visual direction can justify exploring a different pair. Two limits from his references: none of the 26 he signed sets type on a neon ground (lime, acid green), and a new dark field in a redo, other than a brand colour, is near-black or a clean deep tone, never a muddy brown or olive, which reads as dirty as a grey wash (*"that ugly brown colour is horrible"* (*"el color marrón ese tan feo es horrible"*)). A client's brand colour keeps its exact value; only its area changes.
- Emojis add colour. One meaningful emoji is fine; decorative or repeated ones are noise.
- In a colourful brand, judge restraint relative to the brand. The question is whether the colour is organised, not whether there is little of it.

### 3.2 Hierarchy and focus
- In two seconds, what is seen first, second, third? Does that order match importance?
- What needs to lead here? Where the reader is meant to compare peers, can they scan each on equal terms?
- Is hierarchy built with size, weight, tone and space, or with stacked devices (badges, icons, colour, uppercase, dividers all at once)?
- Can sections be told apart at a glance? Watch for "everything mixed together" (*todo mezclado*).
- When the user needs to act, is the next action easy to find? Can they distinguish it from alternatives?
- **Emphasis where it's due.** What must be noticed has to pull the eye: a "new" or feature badge, the recommended option, the primary action. A badge that announces a feature and reads as "subtle" (*sutil*) needs "a touch more emphasis" (*un pelín más destacado*), for example a tinted fill with accent text, or a solid accent dot.
- **Text hierarchy.** Identify the relationship that feels flat. A subtitle may need to lead into a feature list, while a date and time may need to read together. Look at their rendered size, weight, position and neighbours before changing a style. When related headings echo each other, read the whole stack at normal size: can the eye tell where the overarching title ends and the peer items begin? Test grouping and type separately when the cause is uncertain.
  - In his interface examples, a jump from 14 to 18 or a change in size plus weight made two close levels easier to distinguish. Test the actual face and content. If context and spacing already establish the roles, an extra jump can break the group.
  - An old price must read as qualifying the offer. Compare it with the current price at reading size. A smaller size, lighter tone or another familiar cue can do that job.

### 3.3 Space and composition
- **Measure to the optical mass:** a gap is read between the bodies of the lines (x-height and cap height), not from one stray descender or one tall letter. Two gaps that are equal in the code can look unequal, and the eye wins.
- **Proximity.** Can the reader tell what belongs together? Compare the optical gap inside a group with the distance to its nearest competing neighbour. A smaller inner gap often establishes that relationship. Equal gaps can express equal rank or a deliberate rhythm.
- **Air:** do a vertical sweep. Do the spaces between elements exist, or is everything compressed (*todo comprimido*)?
- **Rhythm:** similar relationships use the same gap. Sections are separated more than items.
- **Separation:** use space first. One subtle divider between sections is welcome; a line under every row of a short list that needs no structure saturates (rules that structure a list of items may stay, at full width with equal gaps). Platform-standard inset separators (iOS grouped lists) are not "a line on every row".
- **Containers:** cards are fine when they group consistently. No card inside a card of the same surface and weight. A tonal step that groups one set of actions, like a grey panel holding a white card, is fine.
- **Density:** prefer air, even in daily-use tools: he chose 56 px rows over 40 in a table used all day. Flag rows that feel compressed for their type size and propose the next step on the design's own scale. Compact only when the task needs many rows visible at once (logs, trading screens), and say why.
- **Margins and edges.** Trace the exposed edges of an inset panel or photo. When the background reads as one continuous frame, compare its visible depth above and beside the content, including where an overlay interrupts it. An unequal margin can serve a caption, an optical correction or a deliberate asymmetry. Where the eye expects one border and sees an accidental step, bring those edges into rhythm.
- **Optical alignment.** Identify what each element belongs to and which visible edge, centre or baseline establishes that relationship. Check both ends of the group in its ordinary appearance. For two columns meant to start level, compare the visible tops of their opening letters in the actual fonts. A later ascender or dot can sit above that line. Verify the relationship across the rows at reading size. For a numeral or icon centred in an outlined shape, compare the visible gaps between its ink and the inner stroke above and below. Check the repeated set at its actual size: centring the font’s line box can leave all the digits riding high. An inset can follow a frame, a column, a perceptible state or an expressive offset the composition makes clear. An invisible box alone cannot explain it. In an interactive piece, compare rest and interaction to see whether the cue changes while the relationship holds.
- **Text and image keep their distance:** a word that nearly touches a photo breaks the harmony. Keep at least the gap between blocks. The exception is type that deliberately sits on the image or overlaps it as one lockup (`graphic.md` §3): there the contact is the point.

### 3.4 Coherence and consistency
- The same thing is solved the same way everywhere: labels, input heights, button shapes and sizes, card structures, icon set and stroke, radii, date and number formats.
- Sibling elements, such as plan cards or list rows, share the same internal structure and alignment.
- **Icons in one group share one size** and one optical weight: the header actions, a toolbar, a tab bar, the rows of a list. Compare the drawn glyphs, not their boxes: a magnifier and a bell in the same 24 box can still look different sizes. Measure each glyph's ink, and remember that a badge sitting on a glyph makes it look smaller. The fix is optical: scale the one that looks off until the inks match. Shrinking both by the same amount fixes nothing.
- Patterns stay the same across screens: the header, the back action, how a primary action looks, how errors appear.
- No duplicates: two "Save" buttons, two names for the same destination, one label or one icon used for two different things.
- **Every typeface owns a role, and the voice stays.** *"Three different typefaces are being used, and that's a lot; you use two at most."* (*"se están utilizando tres diferentes tipografías. Y eso es mucho, como mucho se usan dos."*) He said it while correcting one of his catalogue templates: flag a sprawl of faces in the review. When you pick the faces yourself (a new piece, or a redo that replaces them), use two at most, a script or accent face included. Otherwise, in someone else's piece, the face that carries its voice (the script kicker of a warm invitation, the condensed headline of a sports poster, a display italic) usually stays for its role and is used well: once, at a size that relates to the title, at most one deliberate angle. The voice is the face, not its effects: an outline, a glow or a drop shadow on it is execution and is fixed. Cut a face that has no role of its own (a second rounded sans that says what the first already says, a face used for one stray line or only for half of a split title) or that fights the title for the lead. When the voice face itself is ugly or goes against the tone, replace it with a better face of the same class (`graphic.md` §4). In his blind picks, the version that kept a voice-carrying third face won 7 of 9 (`calibration.md`, His sixth blind check). After any cut, check that the piece still sounds like itself: warm stays warm, devotional stays devotional, loud stays loud.
- **Every style owns a role.** Spaced capitals, an italic lede, a serif body, a condensed bold data line and another caps label in one small piece, is too many in little space: *"I wouldn't use so many different text styles in so little space… very flashy, very, very inelegant"* (*"no usaría tantos estilos de textos diferentes en tan poco espacio… muy cantoso, muy muy poco elegante"*). Fix a sprawl by giving each role one style and removing the styles that repeat a role or mean nothing. The small tier never grows: add no new italic or caps style to it, and set no small role two ways. Small roles that say different things (credits, date and place, small print) each keep a style that tells them apart; never fold them into one body style to save a style. The key datum may take one weight step. Never merge two roles into one style to reach a number. A flat piece where the title, the offer, the credits and the data all share two styles reads poorer to him than one style too many. When you pick a second typeface, it contrasts with the first in class: serif against grotesk, script against plain capitals.
- **One unit, one style.** A title, a quote or a reference is one message: one typeface, one size, one weight. A title split into two faces (*"I wouldn't use a font combination in one title"* (*"no usaría font combination en un mismo título"*)) or a verse split into two sizes reads as two messages. Parts of one reference ("Mark" and "10:14") share one size: *"they're part of the same context"* (*"forman parte de un mismo contexto"*). When the voice face is one of a title's two faces, the combination goes, not the voice: set the whole title in the one face that best carries its tone, and keep the voice face in any role of its own (a kicker on its own line).
- **Repeated forms match:** the four corners of a frame share one curve, and every chip in a set has one shape. When a line is drawn as an inset of a cut-out frame, follow the strip between the contours through a straight, the join and the concave turn. Compare its thickness there. A line that nearly touches the corner can look pinched even when both paths have the same radius value. For a photograph inside an oval, arch or ruled frame, inspect the visible strip at its widest and narrowest points, through the curve and at the joins. Check where the crop really ends on each side. A proportional enlargement of a noncircular outline can produce unequal clearances.
- **Brand traits and ornament.** Look at the piece with the device covered, then put it back. Does it establish rhythm, recognition, tone or a meaningful boundary? Keep that contribution and fix its execution. Remove the device when it adds competition or a grouping the content does not support. Protect the client’s marks and brand identity.
- The tone of the copy is consistent, and so is its casing.

### 3.5 Legibility
- Judge text by eye at its real size and viewing distance. Body text on a phone is about 16; captions go down to about 12; 10–11 only for platform micro labels such as tab-bar labels, and only if they still read. Those are pt in an interface, not px on a canvas: a 1080-wide post shows at about 375–390 pt on a phone, so divide its px by about 2.8. On a 1080 post his smallest tested text, the 24 px spaced uppercase meta, reads well; text clearly below that doesn't. On a poster, think of the distance people read it from.
- Contrast is judged by eye (his choice: visual criterion). If it is hard to read, flag it. In an audit, a measured ratio can back the judgement. For a public product, mention WCAG as context, never as a blind rule. Grey on grey, text over busy photos and hairlines that disappear are common failures.
- Logos and images that carry information must be visible.
- On a web page, reading text runs about 60–75 characters per line. Social pieces use far shorter lines, broken by meaning (`graphic.md` §4, Line breaks).

### 3.6 Interaction and UX
- **Task:** can the main task be completed without thinking? Is the path obvious?
- **Touch targets:** 44 or more, with enough space between them. "It won't be tappable" (*no se va a poder pulsar*) is critical.
- **States:** default, hover, focus, active, selected, disabled, loading, empty and error. All the needed states must exist and look consistent.
- **Feedback:** every action shows a result. Destructive actions are clear and confirmed in proportion to their risk.
- **Navigation:** where am I, how do I go back, what is selected. Icons get labels when recognition matters.
- **Affordance:** in an interface, every control reads as what it is at a glance: a field by its label and its fill or border, a button by its shape and weight, a tab by its row. A cleanup that makes one kind of control look like another is a regression, even when it removes a repeat: a lone field between a title and two buttons, at the buttons' height and shape, reads as a button once its label goes (*"the field would be left alone looking like a button"* (*"el campo quedaria solo pareciendo un boton"*)).
- **Forms:**
  - Labels: a label above the field and a persistent label inside it are both fine. A placeholder that vanishes on typing is a finding in forms of more than 2–3 fields, and so is a missing label on any field that would read as another control without it (Affordance).
  - Errors say how to fix them.
  - Defaults are sensible.
- **Real content:** test every slot with longer content, such as an amount with one more digit, a long name or a translation. "Those things have to be thought through too" (*esas cosas también hay que pensarlas*). In a list row, the amount keeps its width and never wraps or clips (tabular figures, no shrink); the name truncates first. If one more digit would break the row, flag it.
- **Mobile:** the bottom bar reads as a separate layer above the content (elevation, blur or a clear edge), so the content doesn't run flat into it. A docked platform bar is valid; a floating pill is his style, not a rule. Thumb reach matters.
- **Accessibility:** visible focus, reduced motion, meaning not carried by colour alone.

### 3.7 Detail
- Compare suspect distances with the design’s base and the visible rhythm (§2).
  - With no base, use his scale: 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96, 112, 128, 144, 160, then +16.
  - 6 is a regular step. 10 is his for small-component distances where 8 is tight and 12 loose; never flag it there (as a layout gap, or a stray in a 4 or 8 base, the normal rules apply). 36 is tolerated.
  - Values such as 13, 15, 45 or 116 warrant investigation when comparable relationships use a different step.
- Inspect discrepancies as small as 2–4 px. Check the ink, the baseline and the balance of the group before deciding whether to move a box (§3.3).
- **Radii are concentric:** inner radius = outer radius − padding (if the inner shape would look almost square, add a little so it doesn't look broken). Around a concave cut-out the inset curve grows: inner = outer + inset. Arcs meant to form an even band share one centre. Check the strip on a straight, at the join and halfway through the turn, from visible edge to visible edge. An intentionally changing border is judged by its own rhythm.
- **Buttons:** the horizontal padding is twice the vertical padding (8/16, 12/24, 16/32). This is his rule. A button whose side padding is close to its top padding looks "very square" (*muy cuadrado*). With a fixed height, the side padding equals the height minus the line height. Icon-only buttons are the exception.
- **Heading tracking.** Read the actual word, including its counters and adjacent pairs, at its final size. If it comes apart visually, compare the existing setting with a tighter one. Keep the setting that gives the word a coherent shape and leaves the tightest pair open.
  - On grotesks such as Inter, his starting adjustments for loose headings are about −0.01em at 20–24, −0.02em at 32–48 and −0.03em at display sizes. Check the effect on the specific title or figure.
  - The iOS and Android system fonts already adjust tracking by size, so don't add more.
  - Body text stays at 0. Uppercase labels never go negative: use 0 or slightly positive.
  - A brand that deliberately sets open tracking keeps it.
  - A display face that visibly separates letters may need a stronger adjustment. On one display serif he asked for *"more negative letter-spacing, because the typeface spreads the letters a lot"* (*"mas interletrado negativo porque la tipografia separa mucho las letras"*).
- Type steps close together (13/14/15/16), weight changes or uneven leading can flatten distinctions or split a phrase. Identify which relationship suffers.
- Microcopy: short and specific. Controls say what they do. No chatty filler.

---

## 4. By medium

### Websites and landing pages
- On a landing page, can the visitor grasp the offer and find what to do next above the fold? One headline, a supporting line and a clear action often accomplish that.
- A consistent container. Text measures narrower than the container, around 480–700 for paragraphs.
- Section rhythm: the same gap between sections and the same cadence from heading to text to action.
- Navigation exposes the destinations the visitor needs. Give an action prominence when it belongs in that path.
- Social proof that can actually be seen: logos at a readable size and contrast.
- Mobile: margins of 16–24, sensible stacking order, and no element that shrinks into illegibility.

### App screens
- Check whether the main task is clear and whether back, title and actions sit in predictable places for this platform.
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
- In a data view, check whether the reader could mistake a decorative colour for a value or state.
- A move or a cleanup never adds to the text lines of a view that is already full (a calendar, a table, a dashboard): a cue that sits apart from the text, such as a marker at a cell's edge, stays there unless moving it into the line removes something else from it (*"because it saturates, it's a calendar with many elements already"* (*"porque satura, es un calendario con muchos elementos ya"*)).

### Graphic pieces, templates and logos
Read `graphic.md`: composition, space, type, images and gradients, colour, devices, lists, the signature, formats, templates other people fill, logos, and the gates a piece passes before he sees it.

---

## 5. Severity calibration

Judge the consequence at the size and in the situation where the work will be used.

- **Critical.** The intended message cannot be read, the main action cannot be completed or the emphasis communicates something materially wrong.
- **Important.** The reader can proceed, but a broken relationship leads them to the wrong group, obscures a distinction or materially weakens the composition. Name the effect on the actual piece.
- **Detail.** A local correction improves precision while preserving the reading order, intended character and use. Care extends to these details after the larger issues are resolved.
- Colour, noise, compression and inconsistent execution all occurred in his written critiques. Any of them can take priority when its consequence is greatest.

**He also marks down what is correct but flat:** he works toward *"beauty and harmony… and not flat or insipid things"* (*"belleza y armonía… y no cosas planas o insípidas"*).

**On an interface, check at normal size and in use.** A ruler can reveal a discrepancy. Whether it changes recognition, grouping or use determines its severity. A screenshot can hide a broken hit target or a missing state (§3.6).

Small deviations can accumulate. If several 2–4 px shifts make a set look unstable, assess the set together. A single optical offset that improves balance should stay.

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
- **Prefer the fewest elements that do the work.** Compare what each treatment contributes to meaning, identity, use or composition.
- **Check the result at use size.** Trace the intended reading order or carry out the task again. Check the neighbouring elements for losses and stop once further changes add no perceptible or functional benefit.
- **Keep what works.** Name it so the fix doesn't break it.
- **Keep coherent sizes when polishing.** Adjust a size when its relationship fails in the composition, including when a consistent scale hides the important content. Protect the force of the hook and the readability of the key datum. Choose the correction that resolves the relationship in the piece’s own language.
- **Keep the visual identity through a rebuild.** On an existing piece, use the source palette, type voice and shape language to judge whether the result still belongs to its family. A different grid, crop or reading order may solve the whole composition. A restyle changes what identifies the piece and belongs to a brief that asks for a new direction. Honour the client’s supplied identity in either case.
