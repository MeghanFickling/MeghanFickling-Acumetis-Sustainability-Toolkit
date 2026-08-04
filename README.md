# Acumetis Sustainability Toolkit

This repository contains the final sustainability onboarding module.

## Files

- `index.html`
- `styles.css`
- `app.js`
- `resources/`
  - `energy-efficiency-sop.pdf`
  - `waste-recycling-policy.pdf`
  - `workplace-ergonomics-sop.pdf`
  - `waste-recycling-guide.pdf`

## Upload to GitHub

Upload `index.html`, `styles.css`, `app.js`, and the entire `resources` folder to the repository root.

## Enable GitHub Pages

1. Open **Settings**.
2. Select **Pages**.
3. Choose **Deploy from a branch**.
4. Select `main`.
5. Select `/ (root)`.
6. Save.

## Add the missing policies later

When the Sustainable Procurement Policy and Environmental Policy are available:

1. Upload the PDFs into the `resources` folder.
2. Edit their two cards in `index.html`.
3. Replace the `Coming soon` label with an `Open Resource` link.

Example:

```html
<a
  class="resource-link"
  href="resources/sustainable-procurement-policy.pdf"
  target="_blank"
  rel="noopener"
>
  Open Resource →
</a>
```

## Important

GitHub Pages sites are publicly accessible. Confirm that each PDF is approved for public hosting before publishing.
