# The Agentic UX Lab — Initial Website

A GitHub Pages-ready static implementation of the approved Agentic UX Lab design. Designed to be maintained in Codex / Claude Code with a shared, documented design system.

## Open and review locally

The site is plain HTML/CSS/JavaScript; there are no dependencies to install.

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080/` in your browser. Pages: `/`, `/framework/`, `/articles/`, `/articles/agentic-ux-lifecycle/`, `/about/`, `/styleguide/`.

To preview a single page without a server, open its `index.html` directly. Linked navigation uses explicit `index.html` targets so article links can also work in local file previews.

## Source of truth

- Design tokens: `assets/css/design-tokens.css`
- Page/component styles: `assets/css/site.css`
- Interactions: `assets/js/site.js`
- Original lifecycle visual: `assets/images/agentic-ux-lifecycle.svg`
- Approved framework: `docs/FRAMEWORK-BASELINE.md`
- Codex rules: `AGENTS.md`
- Design review: `DESIGN_SYSTEM.md` and `/styleguide/`

## Deploy to GitHub Pages

Repository: https://github.com/mengyang2015/agentic-uxlab

GitHub Pages: https://mengyang2015.github.io/agentic-uxlab/

This release is published from `main` at the repository root. Push reviewed updates to `main` to publish them. The original source folder is preserved separately; this checkout is the GitHub-connected working copy.

1. Create a **new repository** (suggested name: `agentic-uxlab`). **Do not** add this to the existing `ux` portfolio repo.
2. Push these site files to the repository root.
3. In **Settings → Pages**, set source to “Deploy from a branch”, branch `main`, folder `/ (root)`.
4. Visit the GitHub Pages preview URL. Review homepage, About, Framework, article, mobile navigation, and SVG zoom.
5. When ready to use `agentic-uxlab.com`, set the custom domain in Pages and follow its DNS instructions. Add a `CNAME` file with that name at publication time.

A `CNAME` is deliberately **not included**: this release uses the GitHub Pages address. Connecting `agentic-uxlab.com` requires a separate DNS setup.

## Important

- Newsletter is currently **not connected**: the homepage accurately says “Coming soon.”
- No claims are made about real-world product performance. Any illustrative article scenario is labeled as such.
- SVG must stay unchanged; it carries the user's original framework.
- Current article is an editorial draft based on the user's prior source, ready for content review.
- `styleguide/` is included for design review. It can be hidden from navigation or removed from production later.

## Article page

The founding article is `articles/agentic-ux-lifecycle/index.html`. It is linked from both the homepage and the Articles index. A single-file, standalone article preview is available separately from the build package.
