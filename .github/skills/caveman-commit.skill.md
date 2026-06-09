# Caveman Commit Skill (Curated)

When to load
- Load when generating commit messages in the Git Workflow agent.

Purpose
- Produce high-signal Conventional Commit messages with minimal noise.

Rules
- Subject format: `type(scope): imperative summary`
- Preferred subject length: <= 50 chars, hard cap 72
- Types: `feat`, `fix`, `refactor`, `perf`, `docs`, `test`, `chore`, `build`, `ci`, `style`, `revert`
- Use imperative mood (`add`, `fix`, `remove`), not past tense
- No trailing period in subject
- Body is optional and should exist only when needed:
  - non-obvious why
  - breaking changes
  - security fixes
  - migrations
  - reverts
- Wrap body lines near 72 chars
- Avoid AI attribution, emojis, and filler text

Do not
- Restate obvious file-level changes already visible in the diff
- Use vague summaries like "update files" or "misc fixes"

Examples
```text
content(index): refresh hero and CTA copy

fix(contact): correct mail.php recipient mapping

feat(api)!: rename /v1/orders to /v1/checkout

BREAKING CHANGE: clients must migrate to /v1/checkout before 2026-06-01.
```
