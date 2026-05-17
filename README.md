# Microsoft Security Products Cheat Sheet

A quick-reference guide for Microsoft security products and what each one actually does.

## What it is

A static reference site that clarifies Microsoft security product positioning, common confusion points, and practical one-line explanations in a format that is easy to skim and easy to host. This stays buildless on purpose so the repo reads clearly and deploys cleanly to GitHub Pages.

## What it demonstrates

- Domain translation from vendor product names into concise learner-friendly explanations
- Semantic HTML and CSS for a polished static reference experience
- Deliberate scope control: useful documentation-style UX without unnecessary app machinery

## Live demo

https://matthewfaber.github.io/ms-security-cheatsheet/

## Screenshot

![Placeholder screenshot](docs/screenshot.png)

## How to run locally

```bash
cd projects/ms-security-cheatsheet
python -m http.server 8080
```

## Push to GitHub

This project ships as its own standalone repo. To push it to a GitHub account (e.g., a separate cybersecurity-portfolio account), follow these steps.

### 1) Authenticate with the target account

Preferred: use GitHub CLI multi-account auth.

```bash
gh auth login
gh auth switch
gh auth status
```

Per-repo git config keeps commits under the right identity even if your global git config points at another account:

```bash
git config user.name "Matthew Faber"
git config user.email "<your-github-username>@users.noreply.github.com"
```

The noreply email keeps your personal email private. Replace `<your-github-username>` with the target account username.

### 2) Initialize, commit, and push

From the workspace root:

```bash
cd projects/ms-security-cheatsheet
git init -b main
git config user.name "Matthew Faber"
git config user.email "<your-github-username>@users.noreply.github.com"
git add .
git commit -m "Initial commit"
gh repo create <your-github-username>/ms-security-cheatsheet --public --source=. --remote=origin --push --description "A quick-reference guide for Microsoft security products and what each one actually does."
```

### 3) Enable GitHub Pages

- Go to repo **Settings → Pages**.
- Under **Build and deployment**, set **Source** to **GitHub Actions** (not **Deploy from a branch**).
- The first push triggers `.github/workflows/deploy-pages.yml`; wait about 30 seconds, then visit `https://<your-github-username>.github.io/ms-security-cheatsheet/`.

### 4) Updating later

```bash
git add . && git commit -m "Describe the change" && git push
```

## Deploy your own

This repo includes `.github/workflows/deploy-pages.yml` for the modern GitHub-native Pages flow.

1. Push the repo to GitHub.
2. Open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. Push to `main` or run the workflow manually with **workflow_dispatch**.
4. After the workflow finishes, open `https://<your-github-username>.github.io/ms-security-cheatsheet/`.

## Tech stack

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages

## Project structure

```text
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── copilot-instructions.md
├── data/
│   └── ms-security-products.json
├── src/
│   └── app.js
├── styles/
│   └── main.css
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── TESTING.md
└── index.html
```

## Roadmap

- Add category filters for identity, endpoint, cloud, and compliance tooling
- Include side-by-side "not this / actually this" clarifiers for commonly confused products
- Capture a polished screenshot after content review

## Author

**Matthew Faber**  
<<<<<<< Updated upstream
Matthew Faber builds hands-on cybersecurity portfolio projects.
=======
Matthew Faber builds hands-on cybersecurity portfolio projects that turn study material into practical demos.
>>>>>>> Stashed changes


