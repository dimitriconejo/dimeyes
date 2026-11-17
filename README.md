# Dimeyes

An agent skill that reviews, audits, corrects and designs with the eye of Dimitri Conejo Sanz, a strict, detail-obsessed UX/UI designer in Madrid whose north star is harmony.

It follows the open `SKILL.md` standard, so it works in Claude, Codex and any agent that reads skills.

Skill page: [skills.dimitriconejo.com/dimeyes](https://skills.dimitriconejo.com/dimeyes)

## What it does

Dimeyes looks at a design the way Dimitri looks at it and reviews it as hard as he would: down to the detail, without beating around the bush. Every correction comes with an exact value from the design's own system, such as "24 → 32" or "radius 12 → 8".

**His eye, not his style.** The skill keeps two layers apart. His eye is how he sees and judges design, and it applies to every design, whatever its style, brand or medium. His style is how his own work looks; it is documented as a reference, never a template, and it is only used when designing for him, for his own products, or when asked to design "like him". A colourful kids' app, a brutalist poster or a corporate dashboard is never pushed towards his look.

**Harmony is the north star.** In his words: *"A design is beautiful when you feel a harmony; when the eye feels a harmony."* Harmony comes from a rhythm built from a few repeated values, shared alignment axes, a coherent typographic voice, colour with clear roles, consistent components, and nothing that pulls the eye without a reason. The skill runs a harmony test on every design and keeps the counts (distinct gaps, alignment axes, type sizes and weights, colour roles, the odd element out) as evidence.

**Any design, in its own language.** Web, app, UX flow, dashboard, graphic piece, template or logo. It first reads the design's own system (spacing base, type scale, palette, radii, components, tone) and judges against that system and against his eye. A design built on a base of 4 or 8 is corrected to its own values, not re-scaled to his. Consistently bad is still bad.

**It measures when it can.** On a website it renders at 1440×900 and 390×844 and runs `scripts/measure.js` in the browser. On a graphic piece built in HTML it runs `scripts/measure-graphic.py`, which measures the gaps between letter bodies, the margins, the rhythm between blocks, the safe area and the logo, and fixes what it flags. On a screenshot it calibrates against known references and marks estimates with "~". With a Figma server connected, it takes exact values from Figma. Without a browser tool, it audits the CSS values directly and says the render was not checked.

## Modes

| Mode | What it does | Ask in English | Spanish it also understands | Touches files? |
|---|---|---|---|---|
| **Review** | Verdict, diagnosis and corrections with exact values | "Review this", "What would you change?", "Is this OK?", `/dimeyes` | "pásale el ojo", "revísalo", "critica", "¿qué le cambiarías?", "¿está bien?", "¿lo firmarías?", "dame feedback" | No |
| **Correct** | Reviews, then applies the corrections and runs a final polish sweep | "Correct it", "Polish it", "Fix it" | "corrígelo", "púlelo", "arréglalo", "mejóralo", "aplícalo" | Editable files only |
| **Audit** | Objective evaluation by dimension and a prioritised list of improvements | "Just audit it", "Only your opinion, don't change anything", `/dimeyes audit` | "solo audita", "solo tu opinión", "sin tocar nada", "qué habría que mejorar" | Never |
| **Design** | Designs or redesigns with his process, then self-reviews with his eye | "Design…", "Redesign…", "Design it the way Dimitri would", `/dimeyes design …` | "diseña", "crea", "maqueta", "hazme", "rediseña", "diseña como yo" | Yes |

When the ask is ambiguous, it reviews and offers to correct. It never edits a file you only asked an opinion about.

In correct mode, an editable file in your workspace (HTML, CSS, JSX…) is edited after the corrections are shown, with a list of what changed. For an image, a URL or a Figma frame, the corrections table plus a corrected spec is the correction. In an app or a site whose screens share tokens and components, a fix lands at the source (the token file, the shared component) even when you named one screen, and the answer names the other screens it reaches. A rethink is shown apart and applied only when you pick it.

## Install

### skills CLI

Uses the [`skills`](https://github.com/vercel-labs/skills) CLI, which finds the `SKILL.md` at the root of this repository and installs it for the agents you choose: Claude Code, Codex, Cursor and others.

```bash
npx skills add dimitriconejo/dimeyes
```

This installs into the current project. Add `-g` to make it available in every project.

### Claude Code

Clone it into your personal skills folder:

```bash
git clone https://github.com/dimitriconejo/dimeyes.git ~/.claude/skills/dimeyes
```

If you want to work on the skill, clone it anywhere and link it instead:

```bash
git clone https://github.com/dimitriconejo/dimeyes.git
mkdir -p ~/.claude/skills
ln -s "$PWD/dimeyes" ~/.claude/skills/dimeyes
```

### Codex

Codex reads personal skills from `~/.agents/skills`:

```bash
git clone https://github.com/dimitriconejo/dimeyes.git ~/.agents/skills/dimeyes
```

Mention it with `$dimeyes`, or let Codex pick it when your task matches.

### Other agents

Any agent that supports the `SKILL.md` standard can load the folder as it is. Clone or unzip it into that agent's skills folder.

### Claude.ai and Claude desktop

1. Download [dimeyes.zip](https://github.com/dimitriconejo/dimeyes/releases/latest/download/dimeyes.zip) from the latest release.
2. In Claude, open **Customize → Skills**, click **+**, choose **Create skill → Upload a skill** and select the ZIP as it is, without unzipping it.

Skills on Claude.ai and Claude desktop need code execution turned on.

## Usage

It triggers on its own when you ask for a review, a correction or a design. You can also call it by name: `/dimeyes` in Claude Code, `$dimeyes` in Codex. It works on screenshots, mockups, Figma files, websites, UI code, templates and graphic pieces.

```text
Review this checkout screen.                      (attach a screenshot)
/dimeyes audit https://example.com
Pásale el ojo a este post de Instagram.           (attach the image)
Polish the spacing in components/PricingCard.tsx.
Radius 12 or 8 here?
Design the onboarding screen for this brand.
Diseña como yo una pantalla de ajustes.
```

A narrow question about one value or one component gets a short answer, under about 100 words: the answer, the reason and the exception if there is one. A whole screen, page or piece gets the full review.

If other design skills are installed, Dimeyes owns the process, the order and the output format while it is active, and consults them only for technical checks it doesn't cover, such as accessibility specifics, performance or motion code.

## What you get back

It answers in the language you write in, in the first person and in his voice: direct, short sentences and concrete values. Hard on the design, never on the person.

**Verdict.** One of three, in the language of your request, with one sentence on what makes or breaks the harmony: *I'd sign it*, *I'd sign it with changes* or *I wouldn't sign it*. On a screen or a page the verdict follows what the eye sees: when the corrected version isn't visibly different at real size and nothing about use is wrong, it is *I'd sign it*, with the fixes listed as Details. A problem of use (a small touch target, a missing state) keeps its grade, and the verdict with it.

**Depth.** *Polish*, *Rebuild parts* or *Redo*, with one sentence on why. In correct mode the polish is the default: it respects the piece and makes it work. Its voice stays (structure, hook, colour pair, typefaces, concept graphics) and the execution is fixed (noise, hierarchy, spacing to the pixel, axes, safe area, logo). It recomposes only when the structure fails (the content can't fit the safe area and the logo slot, or a polish can't give it a protagonist); other recompositions are offered as alternatives, never delivered instead.

**Diagnosis.** Three to six points ordered by impact, not by list position. What repeats is grouped into one finding.

**Corrections.** A table with `# · Severity · Where · What's wrong · Correction`, from critical to detail, with exact values from the design's own system. In a project it is grouped by layer (tokens, components, then each screen), from critical to detail inside each:

| Severity | What it covers |
|---|---|
| Critical | Breaks hierarchy, legibility or use: colour chaos, no structure, illegible text, controls that can't be tapped, a task that can't be completed |
| Important | Inconsistency, compression, broken rhythm, superfluous elements, missing states |
| Detail | Pixels, radii, alignments, microcopy |

**Keep.** What works and shouldn't be touched, three points at most.

**Rethink.** On a screen or a flow, one better structure offered beside the polish (what changes, why it serves the task better, what it costs), only when it leaves less on screen and gets to the content sooner. Otherwise, one line saying the structure holds. It is never applied to your files until you pick it.

**Corrected version.** Only when asked, or in correct mode. When the delivered version is a redo, the corrections table lists its decisions instead of pixel nudges.

Audit mode replaces the corrections with an **evaluation by dimension** (colour, hierarchy and focus, space and composition, coherence and consistency, legibility, interaction and UX, detail and scale), each rated Good, Needs work or Poor with the evidence behind it, followed by **what should improve**. No code and no corrected version.

Anything it corrects or designs goes through a final polish sweep on the render before delivery: content word by word, the harmony test again, hierarchy, consistency, detail, and a check that no area got worse than the original.

## Benchmark

Measured on v1.3 over 23 cases and 146 checks, each case run with and without the skill in a clean session.

| Run | Checks passed | Score |
|---|---|---|
| With Dimeyes | 137 / 146 | 93.8 % |
| Without the skill | 104 / 146 | 71.2 % |

- **The 14 cases of the 1.0 benchmark:** 80 / 85 with Dimeyes (94.1 %, 92.9 % on v1.0) and 61 / 85 without (71.8 %).
- **Nine cases new in 1.3:** two near-finished Cathopic 5 screens, two live parish and diocese sites, a project whose screens share tokens and components, a dialog, a settings screen that repeats a list, and two catalogue templates: 57 / 61 with Dimeyes (93.4 %) and 43 / 61 without (70.5 %).

Each run was graded blind by two independent graders. They agreed on 286 of the 292 checks, and a third grader settled the other 6. The checks were fixed before the runs. The skill runs used a copy of the skill without the verbatim critiques of the test screens and without his thirteenth check, which names the new screens. The test cases are kept in a separate private repository so the skill stays lean.

Judged by Dimitri himself, blind: he accepted 42 of 45 interface corrections change by change, and in three A/B rounds on 18 screens he picked the 1.3 rules 11 times, the build before them 4, and neither 3.

## Repository structure

```text
dimeyes/
├── SKILL.md                  Process, modes, response format and the principles that travel to any style
├── references/
│   ├── eye.md                Checks by dimension and medium, the harmony test, severity calibration
│   ├── voice.md              His real critiques, a complete example, the Spanish labels
│   ├── calibration.md        His A/B decisions with reasons, critique priorities, source tiers
│   ├── system.md             How he builds: tokens, layout recipes, component specs, screen patterns
│   ├── profile.md            His signature, with evidence
│   ├── layouts.md            Measured layouts of his sites
│   └── referents.md          Flodesk and ls.graphics, measured
├── scripts/
│   ├── measure.js            Measures a rendered layout in the browser
│   ├── measure-graphic.js    Measures a graphic piece's spacing, rhythm and safe area
│   └── measure-graphic.py    Runs it in headless Chrome at the canvas size
└── assets/
    ├── tokens.css            His tokens in CSS
    └── tailwind-preset.js    His tokens as a Tailwind preset
```

`eye.md` and `voice.md` are enough for anyone else's design. `system.md`, `profile.md`, `layouts.md`, `referents.md` and the assets are read only when designing for him or "like him", or when reviewing his own work.

## Updating

skills CLI:

```bash
npx skills update dimeyes
```

Claude Code or Codex, if you cloned or linked the repository:

```bash
git -C ~/.claude/skills/dimeyes pull
git -C ~/.agents/skills/dimeyes pull
```

Claude.ai and Claude desktop: download the latest [dimeyes.zip](https://github.com/dimitriconejo/dimeyes/releases/latest/download/dimeyes.zip) and upload it again in place of the previous version.

## License

[MIT](LICENSE) © 2026 Dimitri Conejo Sanz · [dimitriconejo.com](https://www.dimitriconejo.com) · [hello@dimitriconejo.com](mailto:hello@dimitriconejo.com)

## Changelog

- **1.3** (17 November 2026): interfaces, from Dimitri's checks on Cathopic 5 and on public websites. In an app or a site whose screens share tokens and components, it corrects at the source, in order: tokens, shared components, each screen, then every screen a fix reaches, with the corrections grouped by layer and no one-screen patches. A repeat that does another job stays (a field's label, a marker in a corner), every control still reads as what it is, and a full view never gets more on its text lines. Beside the polish it questions the structure: one rethink per screen or flow, only when it leaves less on screen and gets to the content sooner, never applied until you pick it. A screen is graded by what the eye sees: when the corrected version isn't visibly different at real size, the fixes are Details and the verdict is *I'd sign it*, unless a problem of use keeps a higher grade. Graphic pieces are judged and corrected as in 1.2.1. Change by change he accepted 42 of 45 corrections, one more with a nuance. In his blind picks the internal builds behind this release won 4 to 2 on the rethink round (1 of 5 rethinks picked), 2 to 1 with none on 3 on fresh screens, and 5 to 1 once screens were graded by sight, all three near-bar screens included.
- **1.2.1** (16 November 2026): the skill reads in English again. Every quote of Dimitri's carries its English rendering, with his original Spanish kept word for word in parentheses, and the example answers are in English. The trigger phrases and the Spanish answer labels stay Spanish on purpose. No rule changed.
- **1.2** (16 November 2026): the correction core, rewritten from nine blind checks against 1.0.2. Dimeyes now respects the piece and makes it work. The voice stays: the structure, the hook, the colour pair, the typefaces (including the face that carries the voice), the concept graphics and every line of content. The execution is fixed without timidity: noise and effects, one clear hierarchy, spacing to the pixel, composition, axes, safe area and logo. Counting typefaces and styles only finds a sprawl, and the numbers measured on the posts he loves describe his taste; they are never imposed on someone else's piece. A calm badge can carry the offer and a starburst cannot; the data the reader acts on reads big; a post is not a flyer, so what overloads it moves to the caption. The polish is the default delivery, and a recomposition comes only when the structure fails. New `scripts/measure-graphic.py` measures a graphic piece's spacing on the render: gaps between letter bodies, rhythm, axes, safe area and logo. In his blind picks the rewritten core won its three checks against 1.0.2, 25 to 18, and of the 25 pieces it won he would sign 14 as they are.
- **1.1** (15 November 2026): from Dimitri's depth test on twelve catalogue templates. It decides how deep to go by comparing a polish with a recomposition. It follows his redo process. His polish removes noise even when it is the template's signature. New rules: two typefaces at most and few text styles, the title's leading and line count, dark scrims, the photo's protagonism and life. Noise is told apart from graphics that say something. The content list is a contract, and the call to action and the piece's hook keep their force. No leftover voids. Safe areas and the logo slot apply to any social post. In Dimitri's own blind check on twelve unseen pieces it won 4, lost 6 and tied 2 against 1.0.2. Judges given only his words had predicted 23 to 1. So a redo must now be clearly more elegant and keep the piece's hook, close calls are shown as alternatives, and spacing inside text blocks has a minimum.
- **1.0.2** (13 November 2026): labels and verdicts follow the language of the answer; the skill is named Dimeyes in prose.
- **1.0.1** (13 November 2026): public release: README, license, release ZIP. Skill behaviour unchanged.
- **1.0** (13 November 2026): first version, built from Dimitri's sites, boards, two calibration tests and seven rounds of corrections with an independent judge.
