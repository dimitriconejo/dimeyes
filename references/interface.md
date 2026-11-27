# Interfaces and projects

How Dimitri corrects an app screen, a web page, a flow or a whole product. Read it with `eye.md` before correcting an interface. Graphic pieces and templates follow `graphic.md` instead; nothing here applies to them.

## 1. Depth in an interface

Apply the depth decision (SKILL.md) to the task and its structure. A polish preserves the layout. A rethink earns its place when it makes the task clearer or materially easier. Two things weigh more in an interface:

- **A repeat that does another job stays.** Another job means it names a control, tells where you are or lets the eye scan; a second control for the same action is not another job (a repeated save button is still an error). A field's label names the control even when the title asks the same question; a marker in a cell's corner lets the eye scan a dense grid. Judge every removal or move by the screen after it: each control still reads as what it is (a field never looks like a button), and a view that is already full (a calendar, a table, a dashboard) never gets more on its text lines. The only two changes he rejected out of 45 in one product review broke this: *"the field would be left alone looking like a button"* (*"el campo quedaria solo pareciendo un boton"*) and *"because it saturates, it's a calendar with many elements already"* (*"porque satura, es un calendario con muchos elementos ya"*) (`calibration.md`, His tenth check).
- **Question the structure too.** On interfaces his verdict was *"the truth is it polishes very well. It's true it doesn't make big changes or rethink things better, but it does polish very well"* (*"la verdad es que pule muy bien. es cierto que no hace cambios grandes o replantea mejor las cosas pero si pule muy bien"*). After the polish, ask whether there is a clearly better way to do the task.

## 2. The rethink

A rethink is what the polish can't do because it changes the layout, the flow or the pattern: merging two steps or screens, replacing a pattern with one that already works elsewhere in the product, changing what the screen leads with. Removing a step or a field that isn't needed, moving a block or regrouping inside the layout stays in the polish.

- **The bar is his simplicity.** The rethink he takes leaves less on screen and gets to the content sooner: two stacked sections becoming tabs, or a control that rarely needs its full size shrinking to an icon that opens on click (his own idea for a search bar: *"or just show the little magnifier, and when you click it, it expands a bit so you can type"* (*"o que salga simplemente la lupita y que al, haz- que al clicar se expanda un poco. para que puedas escribir"*)).
- A rethink that adds containers, tiles or visual weight, hides an option or only moves a function elsewhere loses to the polish: in his blind check he took 1 of 5 rethinks, and passed over the ones that added cards or thumbnails, hid an option or moved a button (`calibration.md`, His eleventh check).
- When the rethink doesn't clearly clear that bar, say the structure holds. When there is a better way, propose it beside the polish: what changes, why it serves the task better and what it costs, rendered or sketched when you can. The polish is still delivered; the rethink is one whole idea, offered beside it, never more nudges and never mixed into the polish.
- It goes in review and correct modes on an existing interface, one per screen or flow (in a project, after the screens); in audit mode it is one line in What should improve; a new design has none. Never apply it to the files: render it apart or sketch it, and apply it only when the person picks it.

## 3. Grade by what the eye sees

Compare your corrected version with the original at real size: on a render when you have one, otherwise by picturing your corrections applied (in review and audit this is a judgement, never a delivered version).

- A finding about use keeps its grade even when a side by side can't show it: a touch target under 44, a missing state, a task that can't be completed.
- When the difference isn't obvious at a glance, every visual finding (a gap, a size, an alignment, a radius, a tone) is a Detail, and unless a finding about use keeps a higher grade the verdict is *I'd sign it*: list the details with their exact values (in correct mode, apply them as details) and don't present a new polished version to choose, because there is nothing to choose.
- Pixel care still applies: it decides how a fix is made and which details get listed, not how loud the verdict is.
- In his blind check on six screens from one of his own products, both versions graded three of them "with changes" with Important findings, and to him all three proposals looked like the original: *"the ones where I said I wouldn't ship any, it's that I didn't see any difference between the screens"* (*"las que he dicho que no lanzaria ninguna es que no he visto ninguna diferencia entre las screens"*) (`calibration.md`, His twelfth check). With the rule, he picked the quiet verdict on all three near-bar screens of the next check, and on websites with real flaws it kept their Critical and Important grades (His thirteenth check).

This rule is for interfaces only. A graphic piece that is not signable is never graded "I'd sign it" because a correction is hard to see; there, a correction counts when every defect you named is gone in the side by side, however small the change.

## 4. In a project: correct at the source

In an app or a site whose screens share tokens and components, the bar is a premium product, consistent everywhere, with no patches. In his words: *"in common elements like buttons, dropdowns, panels, etc., wouldn't it correct those components first and then review the content of each one properly?"* (*"en elementos que son comunes como botones, dropdowns, paneles, etc no corregiria primero esos componentes y luego revisaria el contenido de cada uno bien?"*), and *"I want a first-class premium UX/UI, botches don't work for me. There must be consistency"* (*"quiero un ux ui premium de primer nivel, no me valen chapuzas. debe haber consistencia"*).

Correct at the source, in this order, asking each screen's composition questions during step 1:
1. **See each shared piece in use.** List the tokens, the shared components (button, field, dropdown, panel, card, tag, list item…), the screens that use each one, and every one-off copy (a button rebuilt inline, a hard-coded colour). Judge a component across all its uses, never alone: a button that weighs too much beside one panel's title may be right in a form.
2. **Tokens.** The spacing scale, the colour roles (two near-identical greys become one), the type ladder and the radii, fixed in the token file, theme or config. Every value a screen uses comes from them.
3. **Shared components, in their own files.** Each one gets its corrected sizes and every state the task needs: hover, visible focus, pressed, disabled, open, loading, error. Controls that sit in one row share a height per size (a button, a field, a dropdown). A screen that genuinely needs something else gets a variant of the component, and a one-off copy becomes the shared component.
4. **Each screen and its content.** Hierarchy, composition, the gaps between sections, the copy, the empty and error states. The same relationship takes the same distance on every screen: page margins, section gaps, the header, the place of the primary action.
5. **Re-check every screen that uses what changed.** A fix at the source reaches every place the piece appears: render or read each of them and confirm nothing broke.

A local override on one screen (a one-off padding class, a forced height, a hard-coded colour) is never the fix for a shared piece. When the request is one screen and the fault lives in a shared component, fix it at the source and name the other screens it reaches. In the answer, the Corrections table is grouped by layer (Tokens, Components, then each screen), from critical to detail inside each layer, so a fix at the source is listed once; the Diagnosis stays ordered by impact.

## 5. Evidence and self-review for interfaces

- **URL or local site:** open it at 1440×900 and 390×844 and take screenshots; paste `scripts/measure.js` into the browser's JavaScript tool. It returns containers, section rhythm, grids, alignment axes, type, radii, colours, the design's own base unit with the values off that base (`offBase`), and values off his scale (`offDimitriScale`, only for his work or designs with no base).
- **Code (HTML, CSS, JSX, Tailwind):** read the tokens and classes and translate them to pixels; list the shared components, where each is used and every one-off copy.
- **Screenshot:** study it at full resolution and zoom in on doubtful areas. Calibrate with a known reference (an iPhone is 375–393 pt wide; body text is usually 16) and mark estimates with "~".
- **Flow:** list the screens in task order and walk the main task end to end; count steps, fields, decisions and taps; check that the header, the primary action, back, errors and empty states repeat; name the screen in every finding ("Step 3 · footer").
- **Figma:** if a Figma server is connected, take exact values from it.
- **Before delivering a design:** render at the target widths (1440 and 390 for web, the device width for an app screen); walk the task and its states, including keyboard focus and a longer label or value; fix everything critical and important; then judge with fresh eyes as SKILL.md says.
- **Designing for him or "like him":** read `system.md` §1, its composition and pre-delivery sections, then the relevant component or screen. Existing product tokens govern that interface. `assets/tokens.css` and `assets/tailwind-preset.js` implement his tokens. For anyone else, build colour roles from their palette, a short type ladder, one spacing base and consistent components with all their states.
