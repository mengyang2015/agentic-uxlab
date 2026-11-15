# The Agentic UX Lab — Design System v1.0

This is the approved visual direction. Change tokens and shared components, not individual pages.

## Brand and intent

- Brand: **The Agentic UX Lab**
- Voice: evidence-aware, precise, approachable, original research
- Thesis: **Give agents autonomy. Keep humans accountable.**
- Character: modern editorial publication, not a dark futuristic AI startup or corporate SaaS site
- Use one strong typographic statement and one meaningful visual rather than several stacked marketing cards

## Source of truth

- `assets/css/design-tokens.css` contains global visual tokens.
- `assets/css/site.css` contains shared components and page styles.
- `assets/js/site.js` contains shared navigation and diagram behavior.
- `assets/images/agentic-ux-lifecycle.svg` is the user's **original**, unmodified framework visual. Preserve its bytes and meaning. Do not redraw or re-interpret it without explicit approval.
- `docs/FRAMEWORK-BASELINE.md` is the approved conceptual framework reference.

## Color

| Role | Token | Value | How to use |
|---|---|---|---|
| Warm canvas | `--bg` | `#FAFAF8` | Page background |
| Surface | `--surface` | `#FFFFFF` | Sections and article surfaces |
| Subtle surface | `--surface-subtle` | `#F4F4F1` | Quiet controls |
| Primary ink | `--ink` | `#111315` | Headlines and navigation |
| Body ink | `--ink-secondary` | `#4A4D4F` | Paragraphs |
| Muted ink | `--ink-muted` | `#797D81` | Metadata |
| Terracotta | `--accent` | `#B84732` | Editorial emphasis, links, focus |
| Hover terracotta | `--accent-hover` | `#9E3A27` | Hover accents |
| Accent tint | `--accent-soft` | `#FBF0ED` | Labels and highlights |
| Charcoal panel | `--dark-panel` | `#1E2021` | Lab Dispatch and Behind the Lab |
| Hairline | `--line` | `#E5E5E0` | Separators and quiet borders |

**Do not** recolor the SVG's own visual encoding to match the site accent.

## Typography

- Primary: **Plus Jakarta Sans**, system sans fallback. Used for UI, headings, and body.
- Editorial emphasis: **Newsreader italic**, used selectively inside major headings (usually one phrase).
- Metadata: **JetBrains Mono**, used for short technical labels and numbers; never for body text.
- Hero display: `clamp(48px, 6vw, 92px)` on desktop, slightly smaller on mobile. Tight letter spacing.
- Body: 16–18px, line height 1.6–1.85; article content measure approximately 740px.
- Clear heading order: one H1 per page, H2 for major sections, H3 for subsections.

## Grid and spacing

- Max content width: 1200px; standard desktop side margin: 32px; mobile: 19px.
- Reading width: 740px, centered.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64px.
- Sections: ~64–96px vertical spacing depending on page density.
- Cards: use only for meaningful grouping. Prefer borders and whitespace over shadows.
- Dark charcoal background is reserved for high-contrast closing sections, not the entire site.

## Reusable components

1. **Utility strip:** 'Independent design research' line.
2. **Header:** logo mark, Framework / Articles / About / Subscribe navigation. Same desktop/mobile behavior across pages.
3. **Eyebrow:** concise uppercase accent label. Do not stack multiple category badges.
4. **Display headline:** one carefully chosen Newsreader italic phrase; color `--accent`.
5. **Lifecycle viewer:** original SVG in a light framed region; keyboard focus and click/tap to enlarge. On narrow viewports, allow horizontal swipe.
6. **Article row:** text-first; one article per row; restrained hover state; no decorative outbound arrows.
7. **Dispatch block:** charcoal `--dark-panel` with simple copy and a clearly marked *coming soon* state. Do not pretend subscriptions work.
8. **Behind the Lab:** same charcoal style as Dispatch; white body text and terracotta link accent.
9. **Footer:** quiet copyright and essentials only.

## Content principles

- Keep homepage copy minimal: short hero, original SVG, one founding article, small Dispatch panel.
- Avoid unverified metrics, invented publications, generic AI hype, fabricated social proof, or false newsletter submissions.
- The Lab is founded and authored by Meng Yang. Do not imply staff or fellows exist.
- Use public sources only; do not reference confidential employer work.
- Attribution for the lifecycle: **Meng Yang, The Agentic UX Lab**.

## Accessibility and performance

- Semantic landmarks, skip-to-content link, keyboard-operable menu, clear focus styles.
- Respect `prefers-reduced-motion`.
- Maintain readable contrast, especially on terracotta highlights and charcoal panels.
- Always give meaningful alt text to the framework SVG and ensure the large viewer can be dismissed.
- The site can run without client-side JavaScript except mobile menu and SVG enlargement.

## Review checklist

- [ ] Same header, footer, colors, typography and focus behavior on every page
- [ ] Original SVG byte-for-byte unchanged
- [ ] No broken links and no orphan pages
- [ ] Responsive at 390px, 768px, 1440px
- [ ] Navigation, diagram enlargement, Escape close, mobile menu tested
- [ ] Article credits and cited sources preserved
- [ ] No unsupported stats, disabled-but-successful forms, or employer materials
