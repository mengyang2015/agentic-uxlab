# Codex task — The Agentic UX Lab

Use the code in this repository as the approved visual and content baseline. This repo is **The Agentic UX Lab**, not Meng Yang's personal portfolio.

Read `AGENTS.md`, `DESIGN_SYSTEM.md`, and `docs/FRAMEWORK-BASELINE.md` first. Inspect the current rendered pages before making changes.

## Phase 1: Review and production hardening

1. Review the six current routes, shared CSS tokens and interactions.
2. Preserve the exact original SVG bytes in `assets/images/agentic-ux-lifecycle.svg`. Do not use the alternative Prepare/Run/Improve card diagram from the design reference.
3. Check accessibility, navigation, mobile behavior, long article readability, and link integrity.
4. Improve SEO metadata and create a working GitHub Pages deployment workflow, keeping site unpublished until reviewed.
5. Keep newsletter clearly marked "Coming soon" until a real mailing provider is selected; never fake a successful subscription.
6. Open a PR containing screenshots and a test summary. Do not merge/deploy without approval.

## Phase 2: Scalable writing (after review)

Migrate the verified static implementation into **Astro + MDX**, keeping the same typography, layout, URLs, visuals and content. Create content collections for articles and shared components for page shell, framework figure, article rows and Dispatch. Preserve all citations from the founding article.

Keep code readable, prefer lightweight components and minimal JS, and avoid redesigning or adding decorative animation.
