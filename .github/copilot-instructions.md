# Copilot instructions for Microsoft Security Products Cheat Sheet

Microsoft Security Products Cheat Sheet is a focused cybersecurity portfolio project owned by Matthew Faber. The goal is straightforward: A static reference site that clarifies Microsoft security product positioning, common confusion points, and practical one-line explanations in a format that is easy to skim and easy to host. Deployment target is GitHub Pages. The stack is HTML5, CSS3, Vanilla JavaScript, GitHub Pages. Keep the repo easy to review, easy to explain in an interview, and easy to deploy from a clean branch.

When helping here, bias toward the smallest useful implementation. Preserve the deliberate no-build-step approach for the frontend. If the project uses Azure Functions, keep Node tooling isolated to `api/` and do not introduce root-level package management. Prefer plain HTML, CSS, and vanilla JavaScript that reads clearly.

What Copilot should help with:
- Tighten the information architecture so a reader can scan product categories in seconds.
- Support lightweight filtering and glossary behavior without adding a framework.
- Keep product descriptions short, precise, and easy for a reviewer to verify.

Domain guardrail: Precision matters more than breadth here: a small, correct product map beats a large but fuzzy cheatsheet. Treat copy, labels, and examples as reviewable cybersecurity content, not filler text.

What to avoid:
- Do not conflate Defender for Endpoint, Defender XDR, Sentinel, Purview, or Entra.
- Do not add marketing language that makes the reference feel vendor-scripted.
- Do not add a build tool to what should remain a static cheatsheet.

Keep README examples, testing steps, and placeholder UI text aligned whenever scope changes. This project has no secret-bearing runtime configuration in-repo. If you add data files later, keep them human-readable and stable so Matthew or another reviewer can audit the content without reverse engineering generated output.
