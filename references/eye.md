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
| Type count | Count the typefaces, sizes and weights, and the text styles: each mix of typeface, size, weight, case, tracking and italic is one style (an opacity step of the same style is not a new one). Then name the role of each. | Every face and every style has a role, and no role is set two ways. A short scale with clear jumps: about 4–6 sizes on a screen, 2–3 weights. The count finds a sprawl; it is never a target to reach by cutting a piece's voice. |
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
- **A colour code needs a meaning the reader can see.** Rows or bands in different colours make the reader ask what the colours mean: *"me aseguraría de que el usuario entienda qué significan los colores"*. Tie each colour to something (a legend, a category named in the piece), or use one colour.
- **Scrims are dark.** Behind text on a photo, the overlay is a gradient from clear to a near-black or a dark tone of the palette or the photo, only where the text sits. A mid-grey wash looks dirty: *"un overlay oscuro… y no ese gris que es rancio"*.
- **Text on colour or photos:** if almost every text is the same white at close sizes, there is "barely any colour hierarchy" (*apenas hay jerarquía de color*). When size, weight or typeface already separate the levels clearly (1.4× or more apart), one flat colour at full strength is enough and cleaner: every reference he signed with type on a photo does it, and takes its contrast from where the text sits (a calm dark or light zone of the photo). When the levels sit close in size, step them with opacity: white at 100 for the headline and the key datum, around 60–64 for secondary text that qualifies the message (a tagline, credits, a note), or tints of the background. The practical data shares one level, and inside it the key datum leads by weight (§4). He likes playing with transparency for this, but with few tones: one level for all the icons, not one per row.
- **Colour is judged as a pair, and a palette that works stays.** He looks at how the colours work together, not at how much colour there is: a mustard ground with a deep blue title gave him *"más armonía visual"* than the same piece turned all blue with yellow type. A polish keeps a palette that works; a redo changes it only when the new pair is clearly more beautiful. Two limits from his references: none of the 26 he signed sets type on a neon ground (lime, acid green), and a new dark field in a redo, other than a brand colour, is near-black or a clean deep tone, never a muddy brown or olive, which reads as dirty as a grey wash (*"ese color marrón tan feo es horrible"*). A client's brand colour keeps its exact value; only its area changes.
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
  - In an interface, at body sizes a 2 px step (14 → 16) does not read as a new level. Jump at least a step and a half on the scale (14 → 18), or pair the step with a change of tone or weight that goes the same way: the larger, more important text is also darker or heavier. A larger text set lighter than the one below it (a 16 grey subtitle over a 14 ink list) cancels the step and reads flat.
  - Secondary text is never the same size and tone as the content it qualifies (in a graphic piece, an opacity step of the same style is enough): an old price sits below both the price and the list, for example at 12 when the list is 14.

### 3.3 Space and composition
- **Measure to the optical mass:** a gap is read between the bodies of the lines (x-height and cap height), not from one stray descender or one tall letter. Two gaps that are equal in the code can look unequal, and the eye wins.
- **Proximity:** spacing inside a group must be clearly smaller than spacing between groups, around half. A step of a few pixels doesn't separate anything. Labels sit with their fields, meta information with its text, and actions after the content they act on. In graphic pieces, separate groups are clearly told apart (§4, Groups, not a chain of bands); inside one compact group, consecutive blocks (title, lede, data) rest on equal distances, with a small step at a change of content (§4, Rhythm by equal distances).
- **Air:** do a vertical sweep. Do the spaces between elements exist, or is everything compressed (*todo comprimido*)?
- **Rhythm:** similar relationships use the same gap. Sections are separated more than items.
- **Separation:** use space first. One subtle divider between sections is welcome; a line under every row of a short list that needs no structure saturates (rules that structure a list of items may stay, at full width with equal gaps). Platform-standard inset separators (iOS grouped lists) are not "a line on every row".
- **Containers:** cards are fine when they group consistently. No card inside a card of the same surface and weight. A tonal step that groups one set of actions, like a grey panel holding a white card, is fine.
- **Density:** prefer air, even in daily-use tools: he chose 56 px rows over 40 in a table used all day. Flag rows that feel compressed for their type size and propose the next step on the design's own scale. Compact only when the task needs many rows visible at once (logs, trading screens), and say why.
- **Margins and edges:** consistent page and component margins; nothing cramped against an edge.
- **One width for a set:** rows, rules and bands in a set run the content width, with the label at the start and the value at the end. Each one stopping at its own text length looks ragged: *"pondría las líneas todas full width"*, *"alargaría las bandas de los colores al 100 %"*. Staggered widths need a reason the reader can see.
- **Text and image keep their distance:** a word that nearly touches a photo breaks the harmony. Keep at least the gap between blocks. The exception is type that deliberately sits on the image or overlaps it as one lockup (§4, Graphic design): there the contact is the point.

### 3.4 Coherence and consistency
- The same thing is solved the same way everywhere: labels, input heights, button shapes and sizes, card structures, icon set and stroke, radii, date and number formats.
- Sibling elements, such as plan cards or list rows, share the same internal structure and alignment.
- **Icons in one group share one size** and one optical weight: the header actions, a toolbar, a tab bar, the rows of a list. Compare the drawn glyphs, not their boxes: a magnifier and a bell in the same 24 box can still look different sizes. Measure each glyph's ink, and remember that a badge sitting on a glyph makes it look smaller. The fix is optical: scale the one that looks off until the inks match. Shrinking both by the same amount fixes nothing.
- Patterns stay the same across screens: the header, the back action, how a primary action looks, how errors appear.
- No duplicates: two "Save" buttons, two names for the same destination, one label or one icon used for two different things.
- **Every typeface owns a role, and the voice stays.** *"Se están utilizando tres tipografías diferentes, y eso es mucho; como mucho se usan dos."* He said it while correcting one of his catalogue templates: flag a sprawl of faces in the review. When you pick the faces yourself (a new piece, or a redo that replaces them), use two at most, a script or accent face included. Otherwise, in someone else's piece, the face that carries its voice (the script kicker of a warm invitation, the condensed headline of a sports poster, a display italic) usually stays for its role and is used well: once, at a size that relates to the title, at most one deliberate angle. The voice is the face, not its effects: an outline, a glow or a drop shadow on it is execution and is fixed. Cut a face that has no role of its own (a second rounded sans that says what the first already says, a face used for one stray line or only for half of a split title), whose mood goes against the piece's tone, or that fights the title for the lead. In his blind picks, the version that kept a voice-carrying third face won 7 of 9 (`calibration.md`, His sixth blind check). After any cut, check that the piece still sounds like itself: warm stays warm, devotional stays devotional, loud stays loud.
- **Every style owns a role.** Spaced capitals, an italic lede, a serif body, a condensed bold data line and another caps label in one small piece, is too many in little space: *"no usaría tantos estilos de textos diferentes en tan poco espacio… muy cantoso, muy muy poco elegante"*. Fix a sprawl by giving each role one style and removing the styles that repeat a role or mean nothing. The small tier never grows: add no new italic or caps style to it, and set no small role two ways. Small roles that say different things (credits, date and place, small print) each keep a style that tells them apart; never fold them into one body style to save a style. The key datum may take one weight step. Never merge two roles into one style to reach a number. A flat piece where the title, the offer, the credits and the data all share two styles reads poorer to him than one style too many. When you pick a second typeface, it contrasts with the first in class: serif against grotesk, script against plain capitals.
- **One unit, one style.** A title, a quote or a reference is one message: one typeface, one size, one weight. A title split into two faces (*"no usaría font combination en un mismo título"*) or a verse split into two sizes reads as two messages. Parts of one reference ("Mark" and "10:14") share one size: *"forman parte de un mismo contexto"*. When the voice face is one of a title's two faces, the combination goes, not the voice: set the whole title in the one face that best carries its tone, and keep the voice face in any role of its own (a kicker on its own line).
- **Repeated forms match:** the four corners of a frame share one curve, and every chip in a set has one shape.
- **Brand traits stay, clutter goes:** open tracking on uppercase labels, a signature colour, a particular corner are the design's language. A decoration that carries no information (an outlined oval around a label, a hairline that separates nothing, a line under every row of a short list that needs no structure) is not a trait, even when the brand repeats it: it is noise.
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
  - 6 is a regular step. 10 is his for small-component distances where 8 is tight and 12 loose; never flag it there (as a layout gap, or a stray in a 4 or 8 base, the normal rules apply). 36 is tolerated.
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
- **What makes a piece elegant to him.** Not script faces: *"la sensación premium que transmite"*, from a logical composition, a very clear hierarchy, things in their place, not everything the same size, modern rather than boring, and good play with type, space, movement and colour. The posts he loves (`calibration.md`, The reference study) show four things. Use them as lenses to judge any piece and to compose a redo or a new one. Their numbers describe his taste on art and culture posts with little text; never impose them on someone else's piece by dropping, merging, shrinking or restyling what it carries.
  - **One protagonist that clearly wins.** An image, a title or one lockup of both, with the next mass clearly lighter. When the image and the title are both big, a redo can fuse them instead of stacking them as two bands: the type on a calm area of the photo, overlapping a cut-out object, or matched to the image's width or edges. In a polish, the leader grows; where there is no room, the other steps down to a clear second, keeping its face, colour and weight. A small protagonist works only alone in a large calm field.
  - **Groups, not a chain of bands.** The protagonist's group and one or two of small information, clearly told apart: lines inside a group sit close, the groups sit clearly further apart. What he rejects is a stack of full-width bands at similar gaps, with two masses of similar weight and sibling texts at nearly one size: no leader, no groups, no path (*"poca jerarquía visual, poca composición"*). One compact centred group, with equal distances inside it, is the other valid structure (Rhythm by equal distances, below). Groups come apart with space, never by shrinking their type.
  - **Small information is anchored.** Dates, places, credits and prices sit pinned to the frame (a corner, an edge, the margin column, a row of columns on one baseline) or hang tight under what they qualify, never as a band floating in the middle of the canvas. This is the secondary information only: a date, price or offer that is the piece's hook keeps its scale and weight. The corner or edge that holds the logo slot stays the logo's.
  - **Life.** Movement where the content offers it (type on a calm area of the image, an image cropped by the canvas edge, an asymmetric mass with its counterweight, a staggered path), or a calm, reduced piece. "Colour and little more" can work; what fails is how it is placed (*"la cosa es cómo lo pones"*). A piece's own character, its hook face, its loud headline, its playful badge done well, is life too: keep it.
- **Margins:** on a feed post, a safe margin of about 9 % of the width (96 on 1080 at the sides) keeps text inside the platform's safe zone, and the top and bottom margins are never smaller than the safe area below (120 at the foot of a 1080×1350 post). A story keeps the larger of that side margin and the platform's side safe area, and needs more room at the top and bottom, where the platform's interface sits. When a framed photo is part of the design, it keeps those margins: a frame inside the frame.
- **Safe areas are a hard limit, not a matter of taste.** Platforms crop the edges and lay their interface over them, so every text, the logo and any key content (a face, a date, a QR code) stay inside the safe area. A photo, colour field or texture that bleeds, running to the canvas edge on purpose, may cross it. An image that sits inside the canvas as an object (a framed photo, a set of tiles, a grid of photos) keeps the safe area like text: *"las imágenes sí deben respetar el safe zone porque son cuadradas y forman una estructura entre sí"*. An image either bleeds or respects the safe area, never stops in between. When the product defines its own safe area, that one wins; otherwise use the platform's (px):

  | Format | Top | Sides | Bottom |
  |---|---|---|---|
  | Feed square 1080×1080 (Instagram, Facebook, LinkedIn) | 80 | 80 | 80 |
  | Feed portrait 1080×1350 | 96 | 80 | 120 |
  | Story or reel 1080×1920 (Instagram, Facebook) | 250 | 64 left, 100 right | 420 |
  | TikTok 1080×1920 | 170 | 64 left, 120 right | 280 |
  | YouTube Shorts 1080×1920 | 260 | 90 | 260 |

  An example of a product's own safe area, Cathopic's: 88 on every side of a 1080 square; 112 top, 96 sides, 120 bottom on a 1080×1440 portrait; 250 top, 96 sides, 340 bottom on a story. For other formats (a 16:9 thumbnail, a banner, a cover), look up the platform's safe area before placing text.
- **The logo slot.** Any post or template that will carry someone's logo (a parish, a client, a brand, an event) reserves a slot for it, whatever tool made it: a placeholder in a Canva or Figma template, a reserved box in a product's editor, or nothing at all yet. Design with the logo in, never with that space counted as air. If nothing marks a slot but the piece will be published by an organisation, plan one; if you can't tell, say so.
  - **Where:** a corner or the foot (end, centre or start), or at the top (start or centre) as the sender. A corner works only where the content uses that edge as an axis; a centred piece signs top centre or foot centre. Inside the safe area, on one of the content's axes (the margin column of a left-aligned piece, the centre axis of a centred one), clear of every text by at least the gap between blocks, on a calm ground (flat colour or a quiet part of the photo), never on a face or a busy detail. In a series, the same place on every piece; this overrides only the one-off placement sentence below, never the rule that the logo isn't a sibling of the content.
  - **Not a sibling of the content.** The logo never shares a line with the title or the call to action as if they were peers, and it is never stacked as the last line of a text block: it is anchored to an edge or a corner of the layout. In a one-off piece, it takes the end the content leaves free: if the title owns the top, the logo signs at the foot; if the practical data or the call to action own the foot, it goes at the top, centred or at the start, as the sender. When both ends hold content, the title keeps the top and the logo signs at the foot, in a corner that a short note or date leaves free. It goes to the top, as the sender, only when the foot holds the call to action or leaves no calm corner.
  - **Which version:** the one that contrasts with the ground under it: dark on a light ground, light on a dark one.
  - **Size:** the slot is a box (Cathopic's: 300×96 on a square post, 300×100 on a portrait, 324×108 on a story; when the product's editor defines it, keep its size and move it only among the places the editor supports, never shrinking it to make room) and logos vary in shape, so the logo fits inside it by its own proportions: a wide wordmark fills the box's width, a square or round emblem fills its height. It signs the piece: it never competes with the headline or the key datum.
  - A slot that collides with content, sits off every axis, falls outside the safe area or lands on a busy part of the photo is an Important finding. A correction that moves blocks places the slot again.
- **Spacing inside a text block.** It is his most repeated note on the skill's corrections: *"ajustaría bastante los espacios de los textos en un mismo bloque"*, *"está todo muy unido"*.
  - Lines with different roles in one block (eyebrow, title, subtitle, data, call to action) never sit at plain line spacing. Each change of role gets a visible gap, measured between the bodies of the lines: at least half the smaller text's size between small lines (20 under a 40 line), and the smaller text's full size under a display title (40 over a 40 lede). More is fine when there is room: the posts he signed sit at 0.7–1.6× (median about 1×), the rejected ones at about 0.3×, where lines fuse.
  - Two neighbouring lines in one block that read almost alike: tell them apart by the gap, weight or tone, or by enlarging the more important one. Never shrink the hook or the key datum, never add a typeface or a text style, and never merge two roles.
  - Outside a compact group, the gaps between blocks stay clearly larger than the gaps inside a block; inside one compact group, a change of role and a change of block can take the same distance (Rhythm by equal distances, below).
- **Rhythm by equal distances.** Inside one compact group, such as a centred stack where the message and the practical data travel together, he composes by balance more than by interface proximity. When the piece splits into separate groups anchored to different parts of the frame, the groups sit far apart instead (Groups, not a chain of bands, above). What fails is the in-between: several blocks spread over the canvas at similar medium gaps.
  - Consecutive text blocks keep the same distance (title → lede → data), measured to the optical mass.
  - A change of content type (an image → text) gets only a little more: about 1.2× the in-text gap (48 against 40), not double. Between the message and the practical data, keep equal distances, with a hairline when it evens them out (below). *"Un poquito más de aire… para indicar que empieza otro tipo de contenido."*
  - A block between two neighbours sits at the same distance from both.
  - One hairline between the message and the practical data is welcome when it evens out that rhythm (40 · rule · 40): *"genera una sensación de que entre todos los elementos de texto haya misma distancia"*. Centre it optically, between the bodies of the lines, not their boxes: extra ink next to the rule (loose descenders above, a tall initial below) moves it a touch away from that ink. In his test, with a descender-heavy italic above, he set 42 above and 38 below the 2 px rule, halfway between the baseline centre and the descender centre. A line that doesn't separate two groups, or clashes with the style, goes.
- **The funnel.** A centred stack can read from big to small. When it does, the display title is narrower than the image or frame above it (in his test about 85 % of its width, so it never fills it) and wider than every line below it: *"se genera como un embudo visual… se lee de más grande a más pequeño"*. Never shrink the title below the lines that follow, and don't let it fill the whole frame. This holds when the title is its own block under a framed image; when a big title and a big image are fused by width, the title takes the image's exact width and the funnel runs from the title down.
- **Size by relation, not only by ratio.** Size and place elements against the shapes around them. For example, a date sized so it reaches up beside the photo's silhouette, leaves air above the image and joins the title's block. Judge the composition, not just the scale.
- **The empty middle is valid** in a tall piece when the content splits by type: what happens on top (title, programme), how to attend at the bottom (date, place, entry), and the image breathing in between. It is not a dead gap.
- **Typography:**
  - every face and every style owns a role, and the face that carries the voice stays (see §3.4); clear size contrast between the levels, never two neighbours almost alike;
  - **the title:** clearly the biggest text: no label, subline or brand shares its size or is set larger (a label or the logo may still sit above it on the canvas). When the original sets the hook bigger than the title (a giant number, a price, a date, an offer, a display or script word), the hook keeps the largest size and the title is the largest text after it; never shrink the hook to obey this rule. One typeface and one size. Display leading is tight, about 1.0–1.1; he asked for *"un pelín"* less on titles set around 1.2. A very large display title (about 9 % of the width or more, ~96 px on 1080) can go to 0.85–0.95, as in the posts he signed, when no letter, accent or descender collides. Slightly negative tracking, but 0 or open in uppercase and in system fonts (§3.7). Balanced lines, and two beat three when the title fits (*"no me gusta que sean tres líneas, lo intentaría encajar en dos"*). When the hierarchy is weak because the title is too weak to lead, the first fix is a bigger title; when it is weak because two masses compete or neighbouring sizes blur, fix that first, since a bigger title alone does not;
  - when designing or redoing, pick the hook face that matches the piece's own hand: an expressive hook (script, hand-lettered) adds personality when it fits. In a piece where everything looked handwritten he chose a script and found the neutral sans and serif options "boring and ugly" (*aburridas y feas*) there; in a piece with no hand-drawn voice, a neutral hook can be right. In a polish, the hook face the piece already has is its voice: it stays and is used well (§3.4);
  - consistent alignment, not centred and left mixed without a reason;
  - comfortable line spacing.
- **His sizes on a 1080 post**, from his test pieces: they set sizes in a redo or a new piece; in a polish they only guide a size that is random or competes (§6), never resize a coherent scale or add a role:
  - uppercase, spaced meta at 24 "reads well and doesn't look silly" (about 0.6 of the lede). Don't push it up to compete with the lede;
  - when descriptive content (a programme, a description) and the practical data sit in separate blocks with a clear gap between them, keep them close in size, the descriptive a touch larger (about 1.1×: 48 against 44 in his test), never visibly smaller and never loud. Inside one block, neighbouring lines that close in size fuse (Spacing inside a text block, above);
  - stacked data rows take a gap of about half their text size (20 at 40).
- **Colour on photos:** when size, weight or typeface already separate the levels (1.4× or more), one flat colour at full strength on a calm zone. When they sit close, the headline and key datum at 100 %, secondary text around 60–64 % so it doesn't compete, and as few tones as possible (see §3.1).
- **The call to action** (book, buy, register, call) is the clear second level after the message. It may lose its button or pill if it keeps its weight through size, weight or colour, but it never becomes one more grey line.
- **Practical information** (date, time, place, price) needs its own rhythm. A tight, uniform stack is "very monotonous and very cramped" (*muy monótono y muy pegado*).
  - Separate the items a step more than their line spacing.
  - **Categorise it.** When, where and the conditions (entry, price, booking) each read as their own line or group, with the key datum first and clearly leading. Setting all of it in one uniform small block fuses it, even when the spacing is right: *"categoriza mejor la información… en la otra todo se funde un poco"*, *"estructura mejor la información y no aparece todo tan comprimido"*. Categories come from line breaks, order and gaps, plus the one weight step the key datum may take; never from new text styles or from added labels such as "Cuándo:" or "Dónde:" (*"sin llegar a saturar… no quiero un montón de diferentes estilos de texto"*).
  - **Its figures read big.** The data the reader acts on (prices and sizes, dates and times) is a level of its own, at a size that reads at a glance; only the conditions are small print. In his seventh check, the bakery's sizes and prices set as big figures beat the same data categorised but small.
  - **Not a flyer.** On a one-off post, keep what the reader needs to act and move the rest to the caption, listed in the answer (*"saturación de información"*); in his seventh check, the nursery school with three lines of practical data beat the one with seven.
  - Don't stack every kind of information at the top: an eyebrow or badge, the title, a description and an availability line piled together *"sobrecarga arriba"*. Spread them across the groups, or set two short items on one line with a middle dot, every word kept.
  - Stacked rows may carry small icons where they help scanning: one set, one size and **one opacity for the whole set**, a secondary level of about 64 %, not one per row. *"así no se genera ruido visual poniendo un montón de tonalidades de blanco"*.
  - Inline data inside one category (day · time): separate items with middle dots (·), and no icons.
  - The key datum (date and time) leads by weight, not by size and not by dimming the rest.
- It must read at its real size: a story at phone size, a poster from a few metres away.
- **Fewer elements:** remove what adds no information or clashes with the style, but never a graphic that says what the piece is about (see Language is not noise in SKILL.md): a decorative oval around a date, a script line that carries no role (a hook face that sets the piece's tone is its voice and stays), a hairline that separates nothing (his rule under a parish name *"solo genera ruido"*, said of that piece; a rule that divides two groups, edges a grid or is the line a lockup stands on is structure), an inner frame line, a stack of cards behind a photo. Brand marks and the elements that carry the message stay.
- **Crops:** the photo yields first. Adjust or crop it to keep the composition, even losing part of the image, but never leave a head or a face touching the edge. Crop and scale, never stretch or squash.
- **The photo's protagonism.** A strong photo carries the emotion of a post, so it earns a big field: a large crop that bleeds to one or more edges, with the text in its own calm field. A small framed photo with decoration around it (a stack of cards behind, an inner frame) wastes it: *"le da protagonismo a la imagen y le quita el efecto stack, que no suma"*. The image's shape relates to the text block beside it: a tall sliver next to a short block reads unbalanced (*"no me genera armonía"*). A photo cut into a circle with a border reads dated (*"me parece de los años 2000"*): crop it as a rectangle, a bleed or a clean shape the piece already uses.
- **Life.** Correct is not the goal: flat or insipid is a flaw he names (*"no cosas planas o insípidas"*), and even a redo he picked got *"está bien, aunque me parezca un pelín aburrido"*. In a polish, the life comes from inside the structure: a protagonist that wins by size, a bleed, groups clearly apart, the hook at full force, and the piece's own voice kept. A correction never ends flatter than the original. Don't repeat one layout formula or one movement device across unrelated pieces; the content chooses the composition. Inside a series, the grid stays and the composition varies within it.

### Templates (social sets, presentations, documents, emails)
- The series stays consistent: the same grid, margins, type roles, colour roles and logo position on every piece.
- The safe area and the logo slot belong to every template (§4, Graphic design): the content fits around them for any logo shape the user drops in.
- The editable slots survive real content: long titles, short titles, light photos and dark photos.
- When the user replaces the photo, its calm area is unknown: type and the logo over the photo sit on a dark scrim or a fixed flat field, or stay off the photo. Never fuse them to the sample photo's calm zone.
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
2. Noise without meaning: devices, lines and frames that carry nothing. It is what he cuts hardest: a polish removes all of it and defines the rest inside the structure; noise alone never makes the piece a redo (SKILL.md, How he corrects). Character is not noise: a hook face, a loud headline or a calm badge that carries the offer is fixed, not removed. A starburst or seal around the offer is noise; its figure becomes type.
3. No visual hierarchy: everything mixed together, sections that can't be told apart, information badly categorised.
4. Compression: missing space, everything crammed together.
5. Inconsistency: labels, heights and card structures that differ; duplicated actions; a sprawl of typefaces and text styles with no roles in a small piece.
6. Illegibility: text that can barely be read, logos that can't be seen.
7. Usability failures: targets that can't be tapped, a flat bottom bar, missing states.

**He also marks down what is correct but flat:** he works toward *"belleza y armonía… y no cosas planas o insípidas"*.

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
- **Don't over-correct.** Calming a saturated design can kill the emphasis it needs. After correcting, check that the feature badge, the recommended option and the primary action still pull the eye, and that the text still has a clear leader and a clear second level (an interface usually needs a third).
- **Keep what works.** Name it so the fix doesn't break it.
- **Keep coherent sizes when polishing.** In a polish of someone else's design, keep the sizes when they form a coherent scale. Change only the ones that look random or don't relate to the rest (*"valores puestos random… no habla en el diseño y genera una sensación de ridículo"*). The exceptions serve the protagonist: a polish may enlarge a title or a photo too weak to lead; where there is no room, a mass that competes steps down to a clear second, keeping its face, colour and weight (§4). The hook keeps its force and the key datum its size. In a graphic piece, neighbours in one block that read almost alike are not a coherent scale: tell them apart as in §4. A redo sets its own sizes.
- **Restyle only in a redo, and say so.** Swapping the typefaces, the palette or the shape language for new ones is a redo, not a polish. Cutting a typeface with no role of its own is a polish; cutting the one that carries the voice is a restyle. In a piece with no brand behind it (a catalogue template, a draft), a redo may restyle whenever the result is clearly better; a polish still keeps the palette when it works and the piece's typefaces (SKILL.md, How he corrects). A client's brand colours, typefaces and logo stay; there you change how they are used. A post made for a business or an organisation with its own logo has a brand behind it even when it was made once in Canva: its logo and the logo's colours stay, while the rest of the post's palette and typefaces are its voice: a polish keeps them, and a redo changes them only when the result is clearly better.
