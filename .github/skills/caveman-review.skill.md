# Caveman Review Skill (Curated)

When to load
- Load for Build Reviewer and review-agent outputs when concise findings are requested.

Purpose
- Emit terse, actionable review findings without losing technical precision.

Format
- Single line per issue:
  - `antra/path/file.html:L42: 🔴 bug: problem. concrete fix.`

Severities
- `🔴 bug` broken behavior or release blocker
- `🟡 risk` fragile behavior or likely regression
- `🔵 nit` non-blocking quality issue
- `❓ q` clarification required before safe change

Rules
- Always include file and line location
- Keep exact symbol names when applicable
- Provide concrete fix direction, not generic advice
- Order findings by severity, then file/line
- If no findings, say `No issues found.` and list residual testing gaps

Auto-clarity
- Use fuller prose for security-critical findings or irreversible operations.
- Resume concise style after the high-risk section.
