# AGENTS.md

Static HTML/CSS/JS personal portfolio. Hosted on GitHub Pages at `edplayer0.github.io`. No build step, no package manager, no CI pipeline, no test framework.

## Local dev

Use VS Code Live Server (port 5500, configured in `.vscode/settings.json`). Open `index.html` directly also works.

## Architecture

- `index.html` — main page (landing)
- `about.html`, `contact.html` — secondary pages
- `skills/*.html` — individual skill detail pages
- `style/` — CSS (split into `style.css`, `home-style.css`, `secondary-pages.css`, `fonts.css`)
- `script/` — JS modules: `darkmode-detect.js` (runs in `<head>`), `darkmode-setter.js`, `settings.js`, `language.js`, `skills.js`, `carousel.js`
- `lang/` — translation JSON files (`es.json`, `fr.json`, `pt.json`). English is the default (no JSON).
- `fonts/` — local Montserrat TTFs and icon font (`.woff2`)
- `images/` — project screenshots and certificates

## i18n

Translations use element ID matching: each key in a `lang/*.json` file corresponds to an HTML element's `id`. When a non-English language is selected, `script/language.js` fetches the JSON and replaces `textContent` of matching elements. English has no JSON — it's the raw HTML text. If you add translatable text, give the element an `id` and add the key to every `lang/*.json`.

## Dark mode

`script/darkmode-detect.js` runs in `<head>` to prevent flash of wrong theme. It reads a cookie and sets the `<body>` class before paint. `script/darkmode-setter.js` handles toggle persistence via cookie.

## Deployment

Push to `main` branch. GitHub Pages serves from root. No build or deploy command needed.

## Conventions

- Material Icons used via CSS classes (`<span class="material-icons">icon_name</span>`)
- All pages share the same header/nav/settings markup — keep them in sync across HTML files
- Mobile menu uses checkbox hack (`#mobile-menu__checkbox`), same pattern for settings toggle
- No minification or bundling — files are served as-is
