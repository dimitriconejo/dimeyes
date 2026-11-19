# His eye: how to judge any design

How Dimitri looks at a design, turned into checks you can run on **any** piece in **any** style. This file is about his way of seeing, not his look: judge every design in its own language. His own look lives in `profile.md` and `system.md`.

**Contents:** 1. The harmony test · 2. Read the design's language first · 3. Review dimensions · 4. By medium · 5. Severity calibration · 6. Writing corrections

---

## 1. The harmony test

His north star: *"a design is beautiful when the eye feels a harmony"* (*"un diseño es precioso cuando el ojo siente una armonía"*). Harmony is not a mood; you can check it.

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

**A base unit is evidence of a system.** If most values are multiples of 4 or 8, use the design’s own repeated values to repair a broken rhythm. An off-base distance can compensate for a glyph, the crop of a photo or a platform convention. Compare its optical effect with other members of its group before rounding it. Use his scale when the design has no discernible rhythm and say which values you supplied. `scripts/measure.js` reports the detected `base` and candidates in `offBase`.

---

## 3. Review dimensions

Look at the piece at its intended size and name what draws attention before consulting these dimensions. Use them for a second pass to catch what the first impression missed. Colour led Dimitri’s three critiques of saturated screens. On another piece, start with whatever most affects its purpose, composition or use (§5).

### 3.1 Colour
- Does every colour have a role? Is emphasis rare enough to work, or is the accent scattered everywhere?
- Does colour compete with the hierarchy? A saturated decorative element can steal the focus from the main action.
- Gradients, glows and heavy shadows: do they have a reason, or are they "exaggerated" (*exagerado*) or "too flashy" (*cantoso*)?
  - Gradients are not banned. He uses them himself when they are subtle and make the piece more beautiful without saturating it: one hue or two neighbouring hues, a small lightness step, on a surface that can carry it.
  - Flag the misused ones: multi-hue, high chroma, on text or small badges, on everything, competing with the content.
  - When fixing a misused gradient, a subtler gradient is a valid fix. Removing it is not the only option.
- Value messages use semantic colour: a saving or a positive change in success green, a loss or a warning in red or muted. *"When it's something positive, when it's a saving, it has to have a success colour."* (*"Cuando es algo positivo, cuando es un ahorro, tiene que tener un color de éxito."*)
- Is colour encoding something that doesn't need it? (In his finance critique, every amount in a different colour "hugely hinders reading" (*dificulta muchísimo la lectura*).)
- **A colour code needs a meaning the reader can see.** Rows or bands in different colours make the reader ask what the colours mean: *"I'd make sure the user understands what the colours mean"* (*"me aseguraría de que el usuario entienda qué significan los colores"*). Tie each colour to something (a legend, a category named in the piece), or use one colour.
- **Scrims are dark.** Behind text on a photo, the overlay is a gradient from clear to a near-black or a dark tone of the palette or the photo, only where the text sits. A mid-grey wash looks dirty: *"a dark overlay… and not that grey, which looks stale"* (*"un overlay oscuro… y no ese gris que es rancio"*).
- **Text on colour or photos:** if almost every text is the same white at close sizes, there is "barely any colour hierarchy" (*apenas hay jerarquía de color*). When size, weight or typeface already separate the levels clearly (1.4× or more apart), one flat colour at full strength is enough and cleaner: every reference he signed with type on a photo does it, and takes its contrast from where the text sits (a calm dark or light zone of the photo). When the levels sit close in size, step them with opacity: white at 100 for the headline and the key datum, around 60–64 for secondary text that qualifies the message (a tagline, credits, a note), or tints of the background. The practical data shares one level, and inside it the key datum leads by weight (§4). He likes playing with transparency for this, but with few tones: one level for all the icons, not one per row.
- **Colour is judged as a pair, and a palette that works stays.** He looks at how the colours work together, not at how much colour there is: a mustard ground with a deep blue title gave him *"more visual harmony"* (*"más armonía visual"*) than the same piece turned all blue with yellow type. A working colour pair can carry an existing piece’s identity through a full recomposition. Try changing its proportions or contrast when the hierarchy calls for it. A brief for a fresh visual direction can justify exploring a different pair. Two limits from his references: none of the 26 he signed sets type on a neon ground (lime, acid green), and a new dark field in a redo, other than a brand colour, is near-black or a clean deep tone, never a muddy brown or olive, which reads as dirty as a grey wash (*"that ugly brown colour is horrible"* (*"ese color marrón tan feo es horrible"*)). A client's brand colour keeps its exact value; only its area changes.
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
- **Text and image keep their distance:** a word that nearly touches a photo breaks the harmony. Keep at least the gap between blocks. The exception is type that deliberately sits on the image or overlaps it as one lockup (§4, Graphic design): there the contact is the point.

### 3.4 Coherence and consistency
- The same thing is solved the same way everywhere: labels, input heights, button shapes and sizes, card structures, icon set and stroke, radii, date and number formats.
- Sibling elements, such as plan cards or list rows, share the same internal structure and alignment.
- **Icons in one group share one size** and one optical weight: the header actions, a toolbar, a tab bar, the rows of a list. Compare the drawn glyphs, not their boxes: a magnifier and a bell in the same 24 box can still look different sizes. Measure each glyph's ink, and remember that a badge sitting on a glyph makes it look smaller. The fix is optical: scale the one that looks off until the inks match. Shrinking both by the same amount fixes nothing.
- Patterns stay the same across screens: the header, the back action, how a primary action looks, how errors appear.
- No duplicates: two "Save" buttons, two names for the same destination, one label or one icon used for two different things.
- **Every typeface owns a role, and the voice stays.** *"Three different typefaces are being used, and that's a lot; you use two at most."* (*"Se están utilizando tres tipografías diferentes, y eso es mucho; como mucho se usan dos."*) He said it while correcting one of his catalogue templates: flag a sprawl of faces in the review. When you pick the faces yourself (a new piece, or a redo that replaces them), use two at most, a script or accent face included. Otherwise, in someone else's piece, the face that carries its voice (the script kicker of a warm invitation, the condensed headline of a sports poster, a display italic) usually stays for its role and is used well: once, at a size that relates to the title, at most one deliberate angle. The voice is the face, not its effects: an outline, a glow or a drop shadow on it is execution and is fixed. Cut a face that has no role of its own (a second rounded sans that says what the first already says, a face used for one stray line or only for half of a split title), whose mood goes against the piece's tone, or that fights the title for the lead. In his blind picks, the version that kept a voice-carrying third face won 7 of 9 (`calibration.md`, His sixth blind check). After any cut, check that the piece still sounds like itself: warm stays warm, devotional stays devotional, loud stays loud.
- **Every style owns a role.** Spaced capitals, an italic lede, a serif body, a condensed bold data line and another caps label in one small piece, is too many in little space: *"I wouldn't use so many different text styles in so little space… very flashy, very, very inelegant"* (*"no usaría tantos estilos de textos diferentes en tan poco espacio… muy cantoso, muy muy poco elegante"*). Fix a sprawl by giving each role one style and removing the styles that repeat a role or mean nothing. The small tier never grows: add no new italic or caps style to it, and set no small role two ways. Small roles that say different things (credits, date and place, small print) each keep a style that tells them apart; never fold them into one body style to save a style. The key datum may take one weight step. Never merge two roles into one style to reach a number. A flat piece where the title, the offer, the credits and the data all share two styles reads poorer to him than one style too many. When you pick a second typeface, it contrasts with the first in class: serif against grotesk, script against plain capitals.
- **One unit, one style.** A title, a quote or a reference is one message: one typeface, one size, one weight. A title split into two faces (*"I wouldn't use a font combination in one title"* (*"no usaría font combination en un mismo título"*)) or a verse split into two sizes reads as two messages. Parts of one reference ("Mark" and "10:14") share one size: *"they're part of the same context"* (*"forman parte de un mismo contexto"*). When the voice face is one of a title's two faces, the combination goes, not the voice: set the whole title in the one face that best carries its tone, and keep the voice face in any role of its own (a kicker on its own line).
- **Repeated forms match:** the four corners of a frame share one curve, and every chip in a set has one shape.
- **Brand traits and ornament.** Look at the piece with the device covered, then put it back. Does it establish rhythm, recognition, tone or a meaningful boundary? Keep that contribution and fix its execution. Remove the device when it adds competition or a grouping the content does not support. Protect the client’s marks and brand identity.
- The tone of the copy is consistent, and so is its casing.

### 3.5 Legibility
- Judge text by eye at its real size and viewing distance. Body text on a phone is about 16; captions go down to about 12; 10–11 only for platform micro labels such as tab-bar labels, and only if they still read. Those are pt in an interface, not px on a canvas: a 1080-wide post shows at about 375–390 pt on a phone, so divide its px by about 2.8. On a 1080 post his smallest tested text, the 24 px spaced uppercase meta, reads well; text clearly below that doesn't. On a poster, think of the distance people read it from.
- Contrast is judged by eye (his choice: visual criterion). If it is hard to read, flag it. In an audit, a measured ratio can back the judgement. For a public product, mention WCAG as context, never as a blind rule. Grey on grey, text over busy photos and hairlines that disappear are common failures.
- Logos and images that carry information must be visible.
- Reading text runs about 60–75 characters per line.

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
- Radii should be concentric: inner = outer − padding. If the child would look almost square, add a little.
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

### Graphic design: posters, social posts, print
Measured in his second calibration test (values on a 1080 canvas; scale them for other sizes).

- Read in the order the composition invites. Does that order deliver the message at the intended distance?
- **What makes a piece elegant to him.** Not script faces: *"the premium feeling it conveys"* (*"la sensación premium que transmite"*), from a logical composition, a very clear hierarchy, things in their place, not everything the same size, modern rather than boring, and good play with type, space, movement and colour. The posts he loves (`calibration.md`, The reference study) show four things. Use them as lenses to judge any piece and to compose a redo or a new one. Their numbers describe his taste on art and culture posts with little text; never impose them on someone else's piece by dropping, merging, shrinking or restyling what it carries.
  - **One protagonist that clearly wins.** This worked on the single-message reference posts. If two elements compete for that role, test whether scale, position or a shared shape helps them read as one. When comparison is the message, keep the subjects comparable and assess the group as a whole.
  - **Groups, not a chain of bands.** In the rejected posters, unrelated blocks at similar intervals obscured the path through them (*"little visual hierarchy, little composition"* (*"poca jerarquía visual, poca composición"*)). Group by meaning and compare the rhythm between groups. An even sequence works when the items actually share a level.
  - **Small information is anchored.** Dates, places, credits and prices sit pinned to the frame (a corner, an edge, the margin column, a row of columns on one baseline) or hang tight under what they qualify, never as a band floating in the middle of the canvas. This is the secondary information only: a date, price or offer that is the piece's hook keeps its scale and weight. The corner or edge that holds the logo slot stays the logo's.
  - **Life.** Movement where the content offers it (type on a calm area of the image, an image cropped by the canvas edge, an asymmetric mass with its counterweight, a staggered path), or a calm, reduced piece. "Colour and little more" can work; what fails is how it is placed (*"the thing is how you place it"* (*"la cosa es cómo lo pones"*)). A piece's own character, its hook face, its loud headline, its playful badge done well, is life too: keep it.
- **Margins:** on a feed post, a safe margin of about 9 % of the width (96 on 1080 at the sides) keeps text inside the platform's safe zone, and the top and bottom margins are never smaller than the safe area below (120 at the foot of a 1080×1350 post). A story keeps the larger of that side margin and the platform's side safe area, and needs more room at the top and bottom, where the platform's interface sits. For an inset photograph, identify which edges of the frame the reader sees together. Check their relationship separately from the safe margins for text.
- **Safe areas are a hard limit, not a matter of taste.** Platforms crop the edges and lay their interface over them, so every text, the logo and any key content (a face, a date, a QR code) stay inside the safe area. A photo, colour field or texture that bleeds, running to the canvas edge on purpose, may cross it. Where the edges of a photo grid carry its structure, protect the whole group. Dimitri explained why on the square tiles: *“las imágenes sí deben respetar el safe zone porque son cuadradas y forman una estructura entre sí”*. For a single photograph behind other content, check what the export protects and which parts of the subject must survive the crop. Then judge its exposed border as part of the composition. When the product defines its own safe area, that one wins; otherwise use the platform's (px):

  | Format | Top | Sides | Bottom |
  |---|---|---|---|
  | Feed square 1080×1080 (Instagram, Facebook, LinkedIn) | 80 | 80 | 80 |
  | Feed portrait 1080×1350 | 96 | 80 | 120 |
  | Story or reel 1080×1920 (Instagram, Facebook) | 250 | 64 left, 100 right | 420 |
  | TikTok 1080×1920 | 170 | 64 left, 120 right | 280 |
  | YouTube Shorts 1080×1920 | 260 | 90 | 260 |

  One template catalogue uses 88 on each side of a square and 112 top, 96 sides, 120 bottom on a 1080×1440 portrait. Its 1080×1920 story protects 340 at the foot, 96 at the sides, 240 above the text and 250 above the brand. If an export preset or an auditor reports different limits, check which preset is active and which layers the check covers. A protected strip still belongs to the composition: a background can continue through it, and the visible content above it still needs an anchor.
- **The logo slot.** Any post or template that will carry someone's logo (a parish, a client, a brand, an event) reserves a slot for it, whatever tool made it: a placeholder in a Canva or Figma template, a reserved box in a product's editor, or nothing at all yet. Design with the logo in, never with that space counted as air. If nothing marks a slot but the piece will be published by an organisation, plan one; if you can't tell, say so.
  - **Where:** a corner or the foot (end, centre or start), or at the top (start or centre) as the sender. A corner works only where the content uses that edge as an axis; a centred piece signs top centre or foot centre. Inside the safe area, on one of the content's axes (the margin column of a left-aligned piece, the centre axis of a centred one), clear of every text by at least the gap between blocks, on a calm ground (flat colour or a quiet part of the photo), never on a face or a busy detail. In a series, the same place on every piece; this overrides only the one-off placement sentence below, never the rule that the logo isn't a sibling of the content.
  - **Aligned with what it faces.** In a foot with text opposite the signature, compare the visible top and bottom of the applied mark with the letters in the first and last lines. Look at the composition at feed size. A mark can fit its slot and still hang below the text or feel heavier than the block it signs (*"I'd set the logo's height equal to the two lines together on the opposite side, to create visual harmony and avoid visual jumps"* (*"la altura del logo la pondria al igual que las dos lineas juntas del lado contrario para crear armonia visual y evitar saltos visuales"*)). Where the product fixes the slot's size, fit the block to the slot instead. An image beside the slot ends on the slot's edge or bleeds to the canvas edge, never stopping in between. Before moving or shrinking content to make room, look for free space the composition already has, such as a margin or the ground outside a card: his complaint was about *"trying to fit the logo in however it can, when it could have gone outside the box"* (*"intentando encajar el logo como sea cunado podia haber ido fuera del box"*).
  - **Not a sibling of the content.** The logo never shares a line with the title or the call to action as if they were peers, and it is never stacked as the last line of a text block: it is anchored to an edge or a corner of the layout. In a one-off piece, it takes the end the content leaves free: if the title owns the top, the logo signs at the foot; if the practical data or the call to action own the foot, it goes at the top, centred or at the start, as the sender. When both ends hold content, the title keeps the top and the logo signs at the foot, in a corner that a short note or date leaves free. It goes to the top, as the sender, only when the foot holds the call to action or leaves no calm corner.
  - **Which version:** use the mark intended for its ground. Follow the eye from the main content to the signature. If it jumps to the mark before the information it signs, compare placement, optical size and contrast with that information. Where the brand allows it, a small reduction in opacity can quiet a bright mark. Verify recognition on the final background with the mark actually applied.
  - **Size:** read the placement of the particular template. The same template catalogue uses 300×96 on square, 300×100 on portrait and 324×108 on story. Honour any size required by the product or the brief. If the template author controls the placement, adjust it against the visible content and reapply the brand to check the result. Keep the mark’s own proportions: a wide wordmark fills the box's width, a square or round emblem fills its height. It signs the piece: it never competes with the headline or the key datum.
  - A slot that collides with content, sits off every axis, falls outside the safe area or lands on a busy part of the photo is an Important finding. A correction that moves blocks places the slot again.
- **Spacing inside a text block.** It is his most repeated note on the skill's corrections: *"I'd adjust the spacing of the texts in one block quite a lot"* (*"ajustaría bastante los espacios de los textos en un mismo bloque"*), *"everything is very close together"* (*"está todo muy unido"*).
  - If distinct roles fuse, measure the gap between the bodies of the lines. In the tested pieces he used 20 under a 40 line and 40 between a display title and a 40 lede. Signed posts ranged from 0.7–1.6× the smaller text size (median about 1×), compared with about 0.3× where lines fused. Use these as trial distances when the same relationship fails.
  - Two neighbouring lines in one block that read almost alike: tell them apart by the gap, weight or tone, or by enlarging the more important one. Never shrink the hook or the key datum, never add a typeface or a text style, and never merge two roles.
  - Outside a compact group, the gaps between blocks stay clearly larger than the gaps inside a block; inside one compact group, a change of role and a change of block can take the same distance (Rhythm by equal distances, below).
- **Rhythm by equal distances.** Inside one compact group, such as a centred stack where the message and the practical data travel together, he composes by balance more than by interface proximity. When the piece splits into separate groups anchored to different parts of the frame, the groups sit far apart instead (Groups, not a chain of bands, above). What fails is the in-between: several blocks spread over the canvas at similar medium gaps.
  - Read the title once at viewing size. Where do the breaks in the layout make you pause? If one word looks like a separate heading but the words after it complete the phrase, compare its scale, posture, alignment and optical gap with the rhythm of the other lines. Separate editable fields can form one sentence. A genuine subtitle can sit farther away.
  - In one compact stack he chose a little more space where image met text, about 1.2× the in-text gap (48 against 40). It marked the change in content while keeping the stack together.
  - One hairline between the message and the practical data is welcome when it evens out that rhythm (40 · rule · 40): *"it creates a feeling that all the text elements are the same distance apart"* (*"genera una sensación de que entre todos los elementos de texto haya misma distancia"*). Centre it optically, between the bodies of the lines, not their boxes: extra ink next to the rule (loose descenders above, a tall initial below) moves it a touch away from that ink. In his test, with a descender-heavy italic above, he set 42 above and 38 below the 2 px rule, halfway between the baseline centre and the descender centre. A line that doesn't separate two groups, or clashes with the style, goes.
- **The funnel.** A centred stack can read from big to small. When it does, the display title is narrower than the image or frame above it (in his test about 85 % of its width, so it never fills it) and wider than every line below it: *"it creates a kind of visual funnel… it reads from bigger to smaller"* (*"se genera como un embudo visual… se lee de más grande a más pequeño"*). Never shrink the title below the lines that follow, and don't let it fill the whole frame. This holds when the title is its own block under a framed image; when a big title and a big image are fused by width, the title takes the image's exact width and the funnel runs from the title down.
- **Size by relation, not only by ratio.** Size and place elements against the shapes around them. For example, a date sized so it reaches up beside the photo's silhouette, leaves air above the image and joins the title's block. Judge the composition, not just the scale.
- **The empty middle is valid** in a tall piece when the content splits by type: what happens on top (title, programme), how to attend at the bottom (date, place, entry), and the image breathing in between. It is not a dead gap.
- **Typography:**
  - every face and every style owns a role, and the face that carries the voice stays (see §3.4); clear size contrast between the levels, never two neighbours almost alike;
  - **The title.** Decide how it relates to the subject. A title meant to lead needs sufficient presence. A title introducing a figure, quotation or photograph can sit a level below it. Compare the line breaks, leading and tracking on the actual words. On a multiline title, look at the space between its lines alongside the gaps to the image and the text below. Can the reader take in the whole title as one phrase? He preferred two balanced lines on one piece and tighter leading on another. His display examples used roughly 1.0–1.1 leading, and 0.85–0.95 on very large type (about 96 px on 1080) where accents and descenders stayed clear (§3.7).
  - when designing or redoing, pick the hook face that matches the piece's own hand: an expressive hook (script, hand-lettered) adds personality when it fits. In a piece where everything looked handwritten he chose a script and found the neutral sans and serif options "boring and ugly" (*aburridas y feas*) there; in a piece with no hand-drawn voice, a neutral hook can be right. In a polish, the hook face the piece already has is its voice: it stays and is used well (§3.4);
  - consistent alignment, not centred and left mixed without a reason;
  - comfortable line spacing.
- **His sizes on a 1080 post.** These measured results can guide trials where a similar relationship needs work.
  - uppercase, spaced meta at 24 "reads well and doesn't look silly" (about 0.6 of the lede). Don't push it up to compete with the lede;
  - a programme at 48 against practical data at 44 gave the description slightly more presence when the two sat in separate blocks. An intervening gap helped distinguish these close sizes.
  - one tested set of 40 px data rows read comfortably with a gap of 20. In a schedule, compare the gap below a one-line item with the gap below a wrapped item at reading size. Try column width, row spacing or a modest change in the size of the items, and keep the version that preserves legibility and makes the next entry easy to find.
- **Colour on photos:** when size, weight or typeface already separate the levels (1.4× or more), one flat colour at full strength on a calm zone. When they sit close, the headline and key datum at 100 %, secondary text around 60–64 % so it doesn't compete, and as few tones as possible (see §3.1).
- **The call to action.** Decide what the reader needs to understand before acting. On an invitation, the action may follow the event in prominence. On an instruction to act now, it may lead. Check that the intended action is unmistakable at reading size.
- **Practical information** (date, time, place, price) needs its own rhythm. A tight, uniform stack is "very monotonous and very cramped" (*muy monótono y muy pegado*).
  - Separate the items a step more than their line spacing.
  - **Categorise it.** When, where and the conditions (entry, price, booking) each read as their own line or group, with the key datum first and clearly leading. Setting all of it in one uniform small block fuses it, even when the spacing is right: *"it categorises the information better… in the other one everything fuses a bit"* (*"categoriza mejor la información… en la otra todo se funde un poco"*), *"it structures the information better and it doesn't all look so compressed"* (*"estructura mejor la información y no aparece todo tan comprimido"*). Categories come from line breaks, order and gaps, plus the one weight step the key datum may take; never from new text styles or from added labels such as "When:" or "Where:" (*"without going as far as saturating it… I don't want a lot of different text styles"* (*"sin llegar a saturar… no quiero un montón de diferentes estilos de texto"*)).
  - **Its figures read big.** The data the reader acts on (prices and sizes, dates and times) is a level of its own, at a size that reads at a glance; only the conditions are small print. In his seventh check, the bakery's sizes and prices set as big figures beat the same data categorised but small.
  - **Not a flyer.** On a one-off post, keep what the reader needs to act and move the rest to the caption, listed in the answer (*"information overload"* (*"saturación de información"*)); in his seventh check, the nursery school with three lines of practical data beat the one with seven.
  - Don't stack every kind of information at the top: an eyebrow or badge, the title, a description and an availability line piled together *"overloads the top"* (*"sobrecarga arriba"*). Spread them across the groups, or set two short items on one line with a middle dot, every word kept.
  - Stacked rows may carry small icons where they help scanning: one set, one size and **one opacity for the whole set**, a secondary level of about 64 %, not one per row. *"that way you don't create visual noise by putting in a lot of shades of white"* (*"así no se genera ruido visual poniendo un montón de tonalidades de blanco"*).
  - Inline data inside one category (day · time): separate items with middle dots (·), and no icons.
  - In his grouped date-and-time example, weight identified the key datum while preserving the size and readability of its neighbours.
- It must read at its real size: a story at phone size, a poster from a few metres away.
- **Fewer elements.** Apply the ornament check (§3.4). A frame can carry the shape of an image and a rule can anchor a quotation. Remove what competes with the subject or divides content that belongs together. Retain the marks, imagery and character that carry the message.
- **Crops:** the photo yields first. Adjust or crop it to keep the composition, even losing part of the image, but never leave a head or a face touching the edge. Crop and scale, never stretch or squash.
- **The photo’s protagonism.** When a photograph carries the emotion, reducing it to a thumbnail can drain the piece. Compare the crop, the subject’s scale and its relationship with the type. When a frame illustrates the theme, compare it with the same photo presented directly. At reading size, what does the shape contribute once the subject is already clear? He valued the outline around an arched photograph. On a reading programme, he recognised the open book and preferred the photograph at full width. For a familiar emblem, check the proportions of the whole silhouette after fitting the images.
- **Life.** Even a tidy composition can feel *insípida*. Identify what gives this piece its energy and look for what has weakened it. In a series, keep the shared grid while allowing each subject its own emphasis.
- **Space freed is space used.** Check what the space now does for the subject and the neighbouring groups. Preserve breathing room that gives the composition balance. When a field feels abandoned, compare leaving it open with moving the group or scaling the element that deserves greater weight. A meaningful motif can also support the message. Dimitri suggested a wheat ear for a Eucharistic prayer. Keep the change only when it improves the whole at viewing size.

### Templates (social sets, presentations, documents, emails)
- The series stays consistent: the same grid, margins, type roles, colour roles and logo position on every piece.
- The safe area and the logo slot belong to every template (§4, Graphic design): the content fits around them for any logo shape the user drops in.
- The editable slots survive real content: long titles, short titles, light photos and dark photos.
- When the user replaces the photo, its calm area is unknown: type and the logo over the photo sit on a dark scrim or a fixed flat field, or stay off the photo. Never fuse them to the sample photo's calm zone.
- Hierarchy holds when someone else fills the template in.
- Emails: one column, one main action, readable sizes on mobile, and images that are not essential to understand the message.

### Logos and identity
- Derive the concept from the content. In one media identity he designed, the rising sun in the mark takes its meaning from the accompanying Benedictus quotation.
- The mark holds at small sizes and in one colour.
- The mark and the wordmark are optically balanced, with consistent strokes and corner treatment.
- The lockup and its clear space are defined.
- A short palette with roles; type that matches the tone.

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
