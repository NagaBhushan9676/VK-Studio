# Caveman Review Adapter

Use this adapter when the review-agent must output concise, production-ready findings.

Reference
- Load and follow `.github/skills/caveman-review.skill.md`.

Required output
- One line per issue with file and line:
  - `antra/path/file.html:L42: 🔴 bug: problem. concrete fix.`

Severity order
1. `🔴 bug`
2. `🟡 risk`
3. `🔵 nit`
4. `❓ q`

If clean
- Return `No issues found.` and include residual testing gaps.
