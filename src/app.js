const DATA_URL = "./data/ms-security-products.json";
const THEME_KEY = "rey-theme-ms-security-cheatsheet";

const categoryMeta = {
  Identity: {
    title: "Identity",
    description: "Core IAM, identity risk, and least-privilege products.",
  },
  Endpoint: {
    title: "Endpoint",
    description: "Device management, EDR, and endpoint security controls.",
  },
  Cloud: {
    title: "Cloud",
    description: "Cloud posture, SaaS governance, and cloud app visibility.",
  },
  "SIEM/SOAR": {
    title: "SIEM / SOAR",
    description: "Cross-domain investigation, logging, correlation, and automation.",
  },
  Compliance: {
    title: "Compliance",
    description: "Governance, data protection, privacy, and legal workflows.",
  },
  "Email/Collab": {
    title: "Email / Collaboration",
    description: "Advanced protection for Exchange Online, Teams, and collaboration flows.",
  },
};

const quickReferenceRows = [
  {
    need: "I need to detect endpoint malware.",
    productId: "defender-endpoint",
    reason: "Enterprise EDR, threat prevention, investigation, and device isolation.",
  },
  {
    need: "I need to investigate cross-domain attacks across users, email, endpoints, and identity.",
    productId: "defender-xdr",
    reason: "Correlates incidents across Microsoft security signals into a single attack story.",
  },
  {
    need: "I need a SIEM with log ingestion from many sources.",
    productId: "sentinel",
    reason: "Cloud-native SIEM/SOAR for broad log collection, detections, and playbooks.",
  },
  {
    need: "I need cloud posture management and workload protection.",
    productId: "defender-cloud",
    reason: "CSPM + CWPP coverage for Azure, AWS, GCP, and hybrid resources.",
  },
  {
    need: "I need identity, MFA, Conditional Access, and SSO.",
    productId: "entra-id",
    reason: "Foundation IAM service for Microsoft 365, Azure, and Zero Trust access.",
  },
  {
    need: "I need to stop phishing and malicious attachments in Microsoft 365.",
    productId: "defender-office365",
    reason: "Adds Safe Links, Safe Attachments, anti-phishing, and training features.",
  },
  {
    need: "I need to prevent sensitive data from leaving Teams, email, OneDrive, or endpoints.",
    productId: "purview-dlp",
    reason: "DLP policies inspect content and block, warn, or audit risky sharing.",
  },
  {
    need: "I need to classify and encrypt files so protection travels with them.",
    productId: "purview-information-protection",
    reason: "Sensitivity labels and encryption persist with the document itself.",
  },
  {
    need: "I need legal hold, case management, or eDiscovery workflows.",
    productId: "purview-ediscovery",
    reason: "Preservation, collection, search, and export for investigations and litigation.",
  },
];

const state = {
  products: [],
};

document.addEventListener("DOMContentLoaded", async () => {
  setupTheme();

  try {
    const response = await fetch(DATA_URL);
    if (!response.ok) {
      throw new Error(`Failed to load ${DATA_URL}`);
    }

    const data = await response.json();
    state.products = (data.products || []).slice().sort((left, right) => left.name.localeCompare(right.name));
    render();
  } catch (error) {
    renderError(error);
  }
});

function setupTheme() {
  const toggle = document.querySelector("#theme-toggle");
  const storedTheme = localStorage.getItem(THEME_KEY);
  const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = storedTheme || (preferredDark ? "dark" : "light");

  applyTheme(theme);

  toggle?.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
  });
}

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  const toggle = document.querySelector("#theme-toggle");
  if (toggle) {
    toggle.textContent = theme === "dark" ? "Dark mode" : "Light mode";
    toggle.setAttribute("aria-pressed", String(theme === "dark"));
  }
}

function render() {
  renderQuickReference();
  renderTableOfContents();
  renderCategorySections();
}

function renderQuickReference() {
  const container = document.querySelector("#quick-reference");
  const productsById = new Map(state.products.map((product) => [product.id, product]));

  container.innerHTML = `
    <table class="comparison-table">
      <thead>
        <tr>
          <th scope="col">What you need</th>
          <th scope="col">Best fit</th>
          <th scope="col">Why</th>
        </tr>
      </thead>
      <tbody>
        ${quickReferenceRows
          .map((row) => {
            const product = productsById.get(row.productId);
            const productLabel = product
              ? `<a href="#${product.id}">${product.name}</a>`
              : "Reference missing";

            return `
              <tr>
                <td>${row.need}</td>
                <td>${productLabel}</td>
                <td>${row.reason}</td>
              </tr>
            `;
          })
          .join("")}
      </tbody>
    </table>
  `;
}

function renderTableOfContents() {
  const toc = document.querySelector("#toc-nav");
  const groupedProducts = groupProductsByCategory();

  toc.innerHTML = Object.entries(groupedProducts)
    .map(([category, products]) => {
      const metadata = categoryMeta[category] || { title: category, description: "" };
      const sectionId = getCategoryId(category);

      return `
        <a class="toc-link" href="#${sectionId}">
          <span>${metadata.title}</span>
          <small>${products.length} products</small>
        </a>
      `;
    })
    .join("");
}

function renderCategorySections() {
  const container = document.querySelector("#category-sections");
  const groupedProducts = groupProductsByCategory();

  container.innerHTML = Object.entries(groupedProducts)
    .map(([category, products]) => {
      const metadata = categoryMeta[category] || { title: category, description: "" };
      const sectionId = getCategoryId(category);

      return `
        <section class="category-section" id="${sectionId}" data-category="${category}">
          <div class="category-heading">
            <div>
              <p class="section-kicker">${metadata.title}</p>
              <h3>${metadata.title}</h3>
            </div>
            <p>${metadata.description}</p>
          </div>
          <div class="product-grid">
            ${products.map(renderProductCard).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderProductCard(product) {
  const capabilities = product.key_capabilities
    .map((capability) => `<li>${capability}</li>`)
    .join("");

  return `
    <article class="product-card" id="${product.id}">
      <div class="card-header">
        <p class="card-category">${product.category}</p>
        <h4>${product.name}</h4>
        <p class="card-summary">${product.one_line}</p>
      </div>
      <div class="card-body">
        <div>
          <h5>Key capabilities</h5>
          <ul>${capabilities}</ul>
        </div>
        <div class="callout-block">
          <h5>When to use</h5>
          <p>${product.when_to_use}</p>
        </div>
        <div class="callout-block confusion-block">
          <h5>Commonly confused with</h5>
          <p>${product.common_confusion}</p>
        </div>
      </div>
      <div class="card-footer">
        <a href="${product.source}" target="_blank" rel="noreferrer">Learn more →</a>
      </div>
    </article>
  `;
}

function groupProductsByCategory() {
  const order = ["Identity", "Endpoint", "Cloud", "SIEM/SOAR", "Compliance", "Email/Collab"];

  return order.reduce((groups, category) => {
    const matches = state.products.filter((product) => product.category === category);
    if (matches.length) {
      groups[category] = matches;
    }
    return groups;
  }, {});
}

function getCategoryId(category) {
  return `category-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

function renderError(error) {
  const quickReference = document.querySelector("#quick-reference");
  const categories = document.querySelector("#category-sections");
  const toc = document.querySelector("#toc-nav");
  const message = `<p class="error-message">Unable to load the cheat sheet data. ${error.message}</p>`;

  quickReference.innerHTML = message;
  categories.innerHTML = message;
  toc.innerHTML = "";
}
