Validate Build Skill

Purpose
- Run a deterministic set of checks to ensure the Antra template compiles, contains no placeholder content, and is deployment-ready for a static site.

Inputs
- The workspace `antra/` folder and build scripts from `package.json`.

Outputs
- `static-site-ai-system/static-page-agent/outputs/build-report.md` with results and remediation steps

Checks to run
1. SCSS compilation
	- Command: `cd antra && npm run sass` (or production build using `npx sass` as recommended by deploy-preparer)
	- Verify exit code 0 and `antra/assets/css/main.css` file size > 0

2. Placeholder detection
	- Command:
	  `grep -RIn "lorem ipsum\|REPLACE-ME\|placeholder@\|example\.com\|your-email@" antra/ --include="*.html"`
	- Report any matches and file locations

3. JS console & debug statements
	- Search for `console.log`, `debugger`, `alert(` in `antra/assets/js/` and report occurrences

4. External HTTP references
	- Search for `http://` references in `antra/` and flag them as warnings

5. Missing assets
	- Verify all referenced `src` and `data-img` paths exist in `antra/assets/img/` — list missing files

6. Accessibility spot checks
	- Ensure each page has a `<title>` and `<meta name="description">`
	- Basic ARIA presence on forms (labels for inputs)

7. Local preview
	- Start preview: `cd antra && npm run start` and report whether browser-sync starts successfully

Report format
- For each check include: `status: pass|fail|warn`, details, suggested remediation and relevant commands to fix.

Changelog
- Append a short summary to `static-site-ai-system/static-page-agent/outputs/changes-log.md` with the Build Report status and any files you generated (e.g., `antra/.nojekyll`).

Notes
- Do not run deploy commands (netlify/vercel) — only prepare and report readiness.
