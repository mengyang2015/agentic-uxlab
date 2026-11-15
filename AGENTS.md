# Agentic UX Lab — Instructions for Codex / Claude Code

## Goal

Build and maintain The Agentic UX Lab (`agentic-uxlab.com`) as a clean, accessible, light editorial research publication. Preserve the human-approved design and content. Do not redesign unrequested elements or swap in another AI lifecycle.

## Before editing

1. Read `DESIGN_SYSTEM.md` and follow the design tokens.
2. Read `docs/FRAMEWORK-BASELINE.md` for the framework's meaning, loops, and gates.
3. Inspect the affected page and the shared CSS/JS before adding new styles or interaction.
4. Keep `assets/images/agentic-ux-lifecycle.svg` byte-for-byte unchanged. Its source is the user-supplied *From delegation to better outcomes.svg*.

## Scope

- Pages: Home, Framework, Articles, founding article, About, internal Style Guide.
- Headline: “Designing the human side of autonomous AI agents.”
- Principle: “Give agents autonomy. Keep humans accountable.”
- Design: warm off-white #FAFAF8, terracotta #B84732, near-black #111315, charcoal #1E2021 panels, Plus Jakarta Sans + Newsreader + JetBrains Mono.
- Keep copy concise and editorial; no long lists of marketing claims or fake metrics.
- Preserve full Prepare review checkpoint and return-to-Test loop, continuous Run rhythm, evidence-triggered Improve, approval gates, and human touchpoints.

## Workflow

- Make changes in a separate branch/PR, never deploy directly without a user review.
- Prefer edits to shared tokens/components before one-off CSS overrides.
- No heavy animation, dark-page theme, generic SaaS layouts, diagonal arrows on links, or replacement framework illustrations.
- Keep public examples original or from verified public sources; do not expose employer/customer/private research.
- Keep newsletter labeled “Coming soon” until an actual provider is connected.
- Validate mobile nav, image viewer, keyboard usage, citation links, and original SVG checksum.

## Technology

This first release is **dependency-free static HTML/CSS/JS**, suitable for GitHub Pages. The shared design system is in `/assets/css/`. It is intentionally easy for Codex to inspect and customize.

If migrating to Astro + MDX for future posts, preserve exact design tokens, page URLs, authored text, and untouched SVG; implement a shared layout/header/footer. Migrate only with the owner's approval, and verify the build before opening a PR.

## Definition of done

Pass the checks in `DESIGN_SYSTEM.md`, include before/after screenshots, and document any decisions or unverified behavior in the PR description.
