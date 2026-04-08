/* =========================================================
   Can Crops Inc. — Home Page JavaScript
   Loads all text content from data/content.json
   ========================================================= */

const DATA_URL = 'data/content.json';

/* ---------------------------------------------------------
   Fetch content from JSON
   --------------------------------------------------------- */
async function loadContent() {
  const response = await fetch(DATA_URL);
  if (!response.ok) {
    throw new Error(`Could not load ${DATA_URL} — status ${response.status}`);
  }
  return response.json();
}

/* ---------------------------------------------------------
   Navigation
   --------------------------------------------------------- */
function buildNav(nav) {
  const list = document.getElementById('nav-links');
  nav.links.forEach(link => {
    const li  = document.createElement('li');
    const a   = document.createElement('a');
    a.href        = link.href;
    a.textContent = link.label;
    li.appendChild(a);
    list.appendChild(li);
  });

  const cta       = document.getElementById('nav-cta');
  cta.href        = nav.cta_href;
  cta.textContent = nav.cta_label;
}

/* ---------------------------------------------------------
   Hero
   --------------------------------------------------------- */
function buildHero(hero, company) {
  const heading = document.getElementById('hero-heading');
  heading.innerHTML = `${hero.heading_line1}<br>
    <span class="accent">${hero.heading_line2}</span>`;

  document.getElementById('hero-description').textContent = hero.description;

  const primary       = document.getElementById('hero-cta-primary');
  primary.textContent = hero.cta_primary;

  const secondary       = document.getElementById('hero-cta-secondary');
  secondary.textContent = hero.cta_secondary;

  const mascot = document.getElementById('hero-mascot');
  mascot.src   = company.mascot_url;
  mascot.alt   = company.name;
}

/* ---------------------------------------------------------
   Stats bar
   --------------------------------------------------------- */
function buildStats(stats) {
  const bar = document.getElementById('stats-bar');
  stats.forEach(item => {
    const div       = document.createElement('div');
    div.className   = 'stat-item';
    div.innerHTML   = `
      <div class="stat-number">${item.number}</div>
      <div class="stat-label">${item.label}</div>
    `;
    bar.appendChild(div);
  });
}

/* ---------------------------------------------------------
   Generic product/export grid builder
   --------------------------------------------------------- */
function buildProductGrid(section, gridId, sectionHeadingId, sectionSubId) {
  document.getElementById(sectionHeadingId).textContent = section.heading;
  document.getElementById(sectionSubId).textContent     = section.subheading;

  const grid = document.getElementById(gridId);
  section.items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <span class="category-badge" data-cat="${item.category}">${item.category}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;
    grid.appendChild(card);
  });
}

/* ---------------------------------------------------------
   Coffee section
   --------------------------------------------------------- */
function buildCoffee(coffee) {
  document.getElementById('coffee-heading').textContent    = coffee.heading;
  document.getElementById('coffee-subheading').textContent = coffee.subheading;

  const grid = document.getElementById('coffee-grid');
  coffee.items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'coffee-card';

    const tagsHTML = item.tags
      .map(tag => `<span class="coffee-tag">${tag}</span>`)
      .join('');

    card.innerHTML = `
      <div class="coffee-card-header">
        <span class="origin-badge" data-code="${item.country_code}">${item.origin}</span>
        <span class="roast-label">${item.roast}</span>
      </div>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <div class="coffee-tags">${tagsHTML}</div>
    `;
    grid.appendChild(card);
  });
}

/* ---------------------------------------------------------
   About section
   --------------------------------------------------------- */
function buildAbout(about) {
  document.getElementById('about-heading').textContent = about.heading;

  const container = document.getElementById('about-paragraphs');
  about.paragraphs.forEach(text => {
    const p       = document.createElement('p');
    p.textContent = text;
    container.appendChild(p);
  });
}

/* ---------------------------------------------------------
   Contact banner
   --------------------------------------------------------- */
function buildContactBanner(contact) {
  document.getElementById('contact-heading').textContent     = contact.heading;
  document.getElementById('contact-description').textContent = contact.description;

  const cta       = document.getElementById('contact-cta');
  cta.href        = contact.cta_href;
  cta.textContent = contact.cta_label;
}

/* ---------------------------------------------------------
   Footer
   --------------------------------------------------------- */
function buildFooter(footer) {
  const el = document.getElementById('footer-text');
  el.innerHTML = `&copy; ${footer.copyright}
    &nbsp;&mdash;&nbsp;
    <a href="mailto:${footer.email}">${footer.email}</a>
    &nbsp;&mdash;&nbsp;
    ${footer.website}`;
}

/* ---------------------------------------------------------
   Init
   --------------------------------------------------------- */
async function init() {
  try {
    const data = await loadContent();

    buildNav(data.nav);
    buildHero(data.hero, data.company);
    buildStats(data.stats);
    buildProductGrid(data.imports, 'imports-grid', 'imports-heading', 'imports-subheading');
    buildCoffee(data.coffee);
    buildAbout(data.about);
    buildProductGrid(data.exports, 'exports-grid', 'exports-heading', 'exports-subheading');
    buildContactBanner(data.contact_banner);
    buildFooter(data.footer);

  } catch (err) {
    console.error('[Can Crops] Content load failed:', err.message);
  }
}

document.addEventListener('DOMContentLoaded', init);
