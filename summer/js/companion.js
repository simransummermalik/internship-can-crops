/* =========================================================
   Coffee Companion — JavaScript
   Sponsored by Can Crops Inc.
   Loads all content from data/companion.json
   ========================================================= */

const DATA_URL = 'data/companion.json';

async function loadContent() {
  const res = await fetch(DATA_URL);
  if (!res.ok) throw new Error(`Failed to load ${DATA_URL} — ${res.status}`);
  return res.json();
}

/* ---------------------------------------------------------
   Navigation
   --------------------------------------------------------- */
function buildNav(data) {
  const wordmark = document.getElementById('nav-app-name');
  wordmark.textContent = data.brand.name;

  document.getElementById('nav-sponsor-line').textContent = data.brand.sponsor_line;

  const list = document.getElementById('companion-nav-links');
  data.nav.links.forEach(link => {
    const li = document.createElement('li');
    const a  = document.createElement('a');
    a.href        = link.href;
    a.textContent = link.label;
    li.appendChild(a);
    list.appendChild(li);
  });

  const navLogo = document.getElementById('nav-logo');
  navLogo.src = '../assets/logo.png';
  navLogo.alt = data.brand.sponsor_line;
}

/* ---------------------------------------------------------
   Hero
   --------------------------------------------------------- */
function buildHero(data) {
  document.getElementById('hero-eyebrow').textContent     = data.brand.name;
  document.getElementById('hero-heading').innerHTML       =
    data.hero.heading.replace('story', '<span class="accent">story</span>');
  document.getElementById('hero-description').textContent = data.hero.description;

  const ctaPrimary       = document.getElementById('hero-cta-primary');
  ctaPrimary.textContent = data.hero.cta_primary;

  const ctaSecondary       = document.getElementById('hero-cta-secondary');
  ctaSecondary.textContent = data.hero.cta_secondary;

  const mascot = document.getElementById('hero-mascot');
  mascot.src   = data.brand.mascot_url;
  mascot.alt   = data.brand.name;

  document.getElementById('hero-sponsor-text').textContent = data.brand.sponsor_line;

  const sponsorLogo = document.getElementById('hero-sponsor-logo');
  sponsorLogo.src   = '../assets/logo.png';
  sponsorLogo.alt   = data.brand.sponsor_line;
}

/* ---------------------------------------------------------
   Features
   --------------------------------------------------------- */
function buildFeatures(data) {
  document.getElementById('features-heading').textContent    = data.features.heading;
  document.getElementById('features-subheading').textContent = data.features.subheading;

  const grid = document.getElementById('features-grid');
  data.features.items.forEach(item => {
    const card     = document.createElement('div');
    card.className = 'feature-card';
    card.innerHTML = `
      <div class="feature-code">${item.code}</div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;
    grid.appendChild(card);
  });
}

/* ---------------------------------------------------------
   Origins
   --------------------------------------------------------- */
function buildOrigins(data) {
  document.getElementById('origins-heading').textContent    = data.origins.heading;
  document.getElementById('origins-subheading').textContent = data.origins.subheading;

  const grid = document.getElementById('origins-grid');
  data.origins.items.forEach(item => {
    const card     = document.createElement('div');
    card.className = 'origin-card';
    card.innerHTML = `
      <div class="origin-card-top">
        <span class="country-badge" data-code="${item.country_code}">${item.country}</span>
        <span class="origin-alt-badge">${item.bean}</span>
      </div>
      <h3>${item.country}</h3>
      <p class="region-line">${item.region}</p>
      <p class="profile-text">${item.profile}</p>
      <div class="origin-meta">
        <div class="meta-item">
          <div class="meta-label">Altitude</div>
          <div class="meta-value">${item.altitude}</div>
        </div>
        <div class="meta-item">
          <div class="meta-label">Process</div>
          <div class="meta-value">${item.process}</div>
        </div>
        <div class="meta-item" style="grid-column: span 2;">
          <div class="meta-label">Roast Range</div>
          <div class="meta-value">${item.roast}</div>
        </div>
      </div>
      <p class="sustainability-note">${item.sustainability}</p>
    `;
    grid.appendChild(card);
  });
}

/* ---------------------------------------------------------
   Brewing Methods
   --------------------------------------------------------- */
function buildBrewing(data) {
  document.getElementById('brewing-heading').textContent    = data.brewing.heading;
  document.getElementById('brewing-subheading').textContent = data.brewing.subheading;

  const grid = document.getElementById('brewing-grid');
  data.brewing.items.forEach(item => {
    const card     = document.createElement('div');
    card.className = 'brew-card';
    card.innerHTML = `
      <div class="brew-code-block" data-code="${item.code}">${item.code}</div>
      <div class="brew-info">
        <h3>${item.method}</h3>
        <div class="brew-specs">
          <span class="brew-spec">${item.time}</span>
          <span class="brew-spec">${item.grind} grind</span>
        </div>
        <p>${item.description}</p>
        <p class="brew-best-for">Best with: <strong>${item.best_for}</strong></p>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ---------------------------------------------------------
   Sustainability
   --------------------------------------------------------- */
function buildSustainability(data) {
  const grid = document.getElementById('sustainability-grid');
  data.sustainability.pillars.forEach(pillar => {
    const card     = document.createElement('div');
    card.className = 'pillar-card';
    card.innerHTML = `
      <div class="pillar-code">${pillar.code}</div>
      <h3>${pillar.title}</h3>
      <p>${pillar.description}</p>
    `;
    grid.appendChild(card);
  });

  document.getElementById('sustainability-heading').textContent    = data.sustainability.heading;
  document.getElementById('sustainability-subheading').textContent = data.sustainability.subheading;
}

/* ---------------------------------------------------------
   Community
   --------------------------------------------------------- */
function buildCommunity(data) {
  document.getElementById('community-heading').textContent    = data.community.heading;
  document.getElementById('community-subheading').textContent = data.community.subheading;

  const statsRow = document.getElementById('community-stats');
  data.community.stats.forEach(stat => {
    const div     = document.createElement('div');
    div.className = 'community-stat';
    div.innerHTML = `
      <div class="cstat-number">${stat.number}</div>
      <div class="cstat-label">${stat.label}</div>
    `;
    statsRow.appendChild(div);
  });

  const cta       = document.getElementById('community-cta');
  cta.textContent = data.community.cta_label;
}

/* ---------------------------------------------------------
   Shop CTA
   --------------------------------------------------------- */
function buildShop(data) {
  document.getElementById('shop-heading').textContent    = data.shop.heading;
  document.getElementById('shop-subheading').textContent = data.shop.subheading;
  document.getElementById('shop-note').textContent       = data.shop.note;

  const cta   = document.getElementById('shop-cta');
  cta.textContent = data.shop.cta_label;
  cta.href        = data.shop.cta_href;
}

/* ---------------------------------------------------------
   Footer
   --------------------------------------------------------- */
function buildFooter(data) {
  document.getElementById('footer-app-name').textContent = data.brand.name;
  document.getElementById('footer-tagline').textContent  = data.footer.tagline;

  const footerLogo = document.getElementById('footer-logo');
  footerLogo.src   = '../assets/logo.png';
  footerLogo.alt   = data.brand.name;

  document.getElementById('footer-copy').innerHTML = `
    &copy; ${data.footer.copyright}
    &nbsp;&mdash;&nbsp;
    <a href="mailto:${data.footer.email}">${data.footer.email}</a>
    &nbsp;&mdash;&nbsp;
    ${data.footer.website}
  `;
}

/* ---------------------------------------------------------
   Init
   --------------------------------------------------------- */
async function init() {
  try {
    const data = await loadContent();

    buildNav(data);
    buildHero(data);
    buildFeatures(data);
    buildOrigins(data);
    buildBrewing(data);
    buildSustainability(data);
    buildCommunity(data);
    buildShop(data);
    buildFooter(data);

  } catch (err) {
    console.error('[Coffee Companion] Failed to load content:', err.message);
  }
}

document.addEventListener('DOMContentLoaded', init);
