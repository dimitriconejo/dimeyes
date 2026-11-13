# Dimeyes

An agent skill that reviews, audits, corrects and designs with the eye of Dimitri Conejo Sanz, a strict, detail-obsessed UX/UI designer in Madrid whose north star is harmony.

It follows the open `SKILL.md` standard, so it works in Claude, Codex and any agent that reads skills.

Skill page: [skills.dimitriconejo.com/dimeyes](https://skills.dimitriconejo.com/dimeyes)

## What it does

Dimeyes looks at a design the way Dimitri looks at it and reviews it as hard as he would: down to the detail, without beating around the bush. Every correction comes with an exact value from the design's own system, such as "24 → 32" or "radius 12 → 8".

**His eye, not his style.** The skill keeps two layers apart. His eye is how he sees and judges design, and it applies to every design, whatever its style, brand or medium. His style is how his own work looks; it is documented as a reference, never a template, and it is only used when designing for him, for his own products, or when asked to design "like him". A colourful kids' app, a brutalist poster or a corporate dashboard is never pushed towards his look.

**Harmony is the north star.** In his words: *"A design is beautiful when you feel a harmony; when the eye feels a harmony."* Harmony comes from a rhythm built from a few repeated values, shared alignment axes, a coherent typographic voice, colour with clear roles, consistent components, and nothing that pulls the eye without a reason. The skill runs a harmony test on every design and keeps the counts (distinct gaps, alignment axes, type sizes and weights, colour roles, the odd element out) as evidence.

**Any design, in its own language.** Web, app, UX flow, dashboard, graphic piece, template or logo. It first reads the design's own system (spacing base, type scale, palette, radii, components, tone) and judges against that system and against his eye. A design built on a base of 4 or 8 is corrected to its own values, not re-scaled to his. Consistently bad is still bad.

**It measures when it can.** On a website it renders at 1440×900 and 390×844 and runs `scripts/measure.js` in the browser. On a screenshot it calibrates against known references and marks estimates with "~". With a Figma server connected, it takes exact values from Figma. Without a browser tool, it audits the CSS values directly and says the render was not checked.

## Modes

| Mode | What it does | Ask in English | Spanish it also understands | Touches files? |
|---|---|---|---|---|
| **Review** | Verdict, diagnosis and corrections with exact values | "Review this", "What would you change?", "Is this OK?", `/dimeyes` | "pásale el ojo", "revísalo", "critica", "¿qué le cambiarías?", "¿está bien?", "¿lo firmarías?", "dame feedback" | No |
| **Correct** | Reviews, then applies the corrections and runs a final polish sweep | "Correct it", "Polish it", "Fix it" | "corrígelo", "púlelo", "arréglalo", "mejóralo", "aplícalo" | Editable files only |
| **Audit** | Objective evaluation by dimension and a prioritised list of improvements | "Just audit it", "Only your opinion, don't change anything", `/dimeyes audit` | "solo audita", "solo tu opinión", "sin tocar nada", "qué habría que mejorar" | Never |
| **Design** | Designs or redesigns with his process, then self-reviews with his eye | "Design…", "Redesign…", "Design it the way Dimitri would", `/dimeyes design …` | "diseña", "crea", "maqueta", "hazme", "rediseña", "diseña como yo" | Yes |

When the ask is ambiguous, it reviews and offers to correct. It never edits a file you only asked an opinion about.

In correct mode, an editable file in your workspace (HTML, CSS, JSX…) is edited after the corrections are shown, with a list of what changed. For an image, a URL or a Figma frame, the corrections table plus a corrected spec is the correction.

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

**Verdict.** One of three, in the language of your request, with one sentence on what makes or breaks the harmony: *I'd sign it*, *I'd sign it with changes* or *I wouldn't sign it*.

**Diagnosis.** Three to six points ordered by impact, not by list position. What repeats is grouped into one finding.

**Corrections.** A table with `# · Severity · Where · What's wrong · Correction`, from critical to detail, with exact values from the design's own system:

| Severity | What it covers |
|---|---|
| Critical | Breaks hierarchy, legibility or use: colour chaos, no structure, illegible text, controls that can't be tapped, a task that can't be completed |
| Important | Inconsistency, compression, broken rhythm, superfluous elements, missing states |
| Detail | Pixels, radii, alignments, microcopy |

**Keep.** What works and shouldn't be touched, three points at most.

**Corrected version.** Only when asked, or in correct mode.

Audit mode replaces the corrections with an **evaluation by dimension** (colour, hierarchy and focus, space and composition, coherence and consistency, legibility, interaction and UX, detail and scale), each rated Good, Needs work or Poor with the evidence behind it, followed by **what should improve**. No code and no corrected version.

Anything it corrects or designs goes through a final polish sweep on the render before delivery: content word by word, the harmony test again, hierarchy, consistency, detail, and a check that no area got worse than the original.

## Benchmark

Measured on v1.0 over 14 cases and 85 checks.

| Run | Checks passed | Score |
|---|---|---|
| With Dimeyes | 79 / 85 | 92.9 % |
| Without the skill | 56 / 85 | 65.8 % |

The skill runs used a copy of the skill without the verbatim critiques of the test screens. The test cases are kept in a separate private repository so the skill stays lean. Version 1.0.1 doesn't change the skill's behaviour.

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
│   └── measure.js            Measures a rendered layout in the browser
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

- **1.0.2** (13 November 2026): labels and verdicts follow the language of the answer; the skill is named Dimeyes in prose.
- **1.0.1** (13 November 2026): public release: README, license, release ZIP. Skill behaviour unchanged.
- **1.0** (13 November 2026): first version, built from Dimitri's sites, boards, two calibration tests and seven rounds of corrections with an independent judge.
