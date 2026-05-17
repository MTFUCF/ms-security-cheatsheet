# Manual Testing Guide

Project: **Microsoft Security Products Cheat Sheet**  
Baseline date: **2026-05-16**

## P0 — must pass before this repo is public
- [ ] The README title, tagline, live demo URL, and author block all match Microsoft Security Products Cheat Sheet.
- [ ] `index.html` loads from `python -m http.server 8080` with no broken relative links.
- [ ] The shipped page clearly states the project name, renders the theme toggle, and credits Matthew Faber in the footer.
- [ ] No secrets, local-only files, or editor junk appear outside the `.gitignore` baseline.
- [ ] The quick-reference table, sticky/tablet-friendly navigation, and grouped product cards all render from `data/ms-security-products.json`.
- [ ] README copy states that the project exists to reduce Microsoft product-name confusion.
- [ ] The page works correctly from the GitHub Pages subpath using relative `styles/`, `src/`, and `data/` paths.
- [ ] The product cards expose summaries, capabilities, when-to-use guidance, confusion notes, and Microsoft Learn links without requiring a redesign.

## P1 — should pass before first feature-complete share
- [ ] The landing page remains readable at 320px, 768px, and 1440px wide.
- [ ] Keyboard focus is visible and the placeholder page has a logical reading order.
- [ ] Chrome and Edge show no console errors on initial load.
- [ ] The README local-run instructions work exactly as written from the project root.
- [ ] Future filters and product cards can fit into the planned layout without breaking readability.
- [ ] Copilot instructions explicitly warn against muddying distinct Microsoft security products.
- [ ] Placeholder copy reads like a reference document, not a brochure.
- [ ] The project still feels complete enough for a recruiter to understand the intended outcome.

## P2 — polish and follow-up checks
- [ ] A fresh screenshot can eventually be dropped into `docs/screenshot.png` without changing the README contract.
- [ ] The roadmap still reflects useful next iterations instead of vague wishlist items.
- [ ] The repo still feels intentionally lightweight, with no accidental build tooling added.
- [ ] The placeholder page looks acceptable in both light and dark system themes.
- [ ] Roadmap items favor accuracy aids and navigation improvements over visual gimmicks.
- [ ] The README leaves a clean place for a screenshot of the final comparison layout.
- [ ] The repo can grow its dataset without requiring a framework migration.
- [ ] The documentation tone stays consistent across README, testing, and Copilot guidance.
