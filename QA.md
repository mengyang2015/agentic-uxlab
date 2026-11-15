# Initial QA (November 15, 2026)

Verified before handoff:

- All internal links, scripts, images, and CSS files resolve to existing files.
- The original lifecycle SVG is byte-identical to the supplied SVG. SHA-256:
  `f6911d217f51d065b49dfbcf5c2b6168d3dcd7b95652eea3a4232dd7d9bcc2c2`
- Home, About, Framework, Articles, founding article and Style Guide render at 1440px desktop and 390px mobile widths without horizontal overflow of the document.
- Every page has one H1 and four shared navigation links.
- Mobile menu open/close works.
- Original SVG focus + Enter opens the enlargement dialog. Escape closes it.
- No JavaScript errors in the self-contained browser render test.

Environment limitation: browser navigation to local HTTP/file URLs was blocked by administrator, so visual verification was performed by inlining the project's unchanged CSS/JS/SVG into the browser test pages. Link destinations were also checked directly on disk. This **does not replace** a public-hosting test.

Still needs verification after deployment: actual URLs, external fonts, browser/device compatibility, screen-reader usability, and site analytics/newsletter configuration if added.
