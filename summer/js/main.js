/* =========================================================
   Can Crops Inc. — Home Page JavaScript
   ========================================================= */

/* ---------------------------------------------------------
   Inline content  (works with file:// and any server)
   --------------------------------------------------------- */
const CONTENT = {
  company: {
    name:       "Can Crops Inc.",
    email:      "contact@cancrops.com",
    website:    "www.cancrops.com",
    mascot_url: "https://clipart-library.com/images_k/transparent-gif-cute/transparent-gif-cute-17.jpg"
  },
  nav: {
    links: [
      { label: "Home",    href: "#home"    },
      { label: "About",   href: "#about"   },
      { label: "Imports", href: "#imports" },
      { label: "Exports", href: "#exports" },
      { label: "Coffee",  href: "#coffee"  },
      { label: "Contact", href: "#contact" }
    ],
    cta_label: "Login",
    cta_href:  "login.html"
  },
  hero: {
    heading_line1: "Premium Agricultural",
    heading_line2: "Import & Export",
    description:   "Canadian-based specialists in high-quality organic coffee beans, grains, lentils, pulses, edible oils, and more \u2014 delivering tailored solutions backed by robust logistics and compliance systems.",
    cta_primary:   "Explore Products",
    cta_secondary: "Get in Touch"
  },
  stats: [
    { number: "6+",   label: "Countries Sourced" },
    { number: "6",    label: "Coffee Varieties"  },
    { number: "100%", label: "Quality Tested"    },
    { number: "4",    label: "Roast Levels"      }
  ],
  why_us: {
    heading:    "Why Choose Can Crops?",
    subheading: "From sourcing to shipment, we handle every detail so you don\u2019t have to.",
    items: [
      { title: "Certified Quality",  description: "Every batch undergoes rigorous testing and evaluation before it reaches you." },
      { title: "Global Sourcing",    description: "Direct relationships with trusted producers across Ethiopia, Kenya, Colombia, Brazil, and beyond." },
      { title: "Custom Blending",    description: "We roast from light to deep and blend to your exact specifications and brand standards." },
      { title: "Compliance Ready",   description: "Full documentation, supplier coordination, and regulatory compliance for smooth cross-border trade." },
      { title: "Cold Storage",       description: "Temperature-controlled warehousing to preserve freshness, purity, and natural quality." },
      { title: "Tailored Solutions", description: "Competitive pricing and hands-on support from first inquiry through final delivery." }
    ]
  },
  imports: {
    heading:    "What We Import",
    subheading: "Sourcing the finest agricultural commodities from around the globe to meet your market needs.",
    items: [
      { category: "Coffee", title: "Coffee Beans",     description: "Specialty organic beans sourced from Ethiopia, Kenya, Colombia and Brazil." },
      { category: "Beans",  title: "Different Beans",  description: "Wide variety of high-quality beans for industrial and niche markets." },
      { category: "Lentils",title: "Lentils",          description: "Red, green, and black lentils sourced from premium growing regions." },
      { category: "Peas",   title: "Peas",             description: "Dixie Lee, Black Eye, Brown Crowder, Pink Eye, Zipper and Whiteacre varieties." },
      { category: "Oils",   title: "Edible Oils",      description: "Premium cooking and specialty oils for diverse culinary needs." },
      { category: "Grains", title: "Cereals & Grains", description: "Quality cereals and grains stored in temperature-controlled facilities." }
    ]
  },
  coffee: {
    heading:    "Our Signature Coffee Beans",
    subheading: "Roasted from light to deep \u2014 each origin tells a unique story of flavour and terroir.",
    items: [
      {
        origin: "Ethiopia", country_code: "ET",
        name: "Ethiopia Yirgacheffe",
        description: "Floral aroma with bright citrus sweetness and a delicate tea-like body. Bright acidity with intense, clean flavours and a hint of toasted coconut.",
        tags: ["Floral", "Citrus", "Tea-like Body"], roast: "Light to Medium"
      },
      {
        origin: "Kenya", country_code: "KE",
        name: "Central Kenya AA",
        description: "Bold blackcurrant notes with wine-like acidity and a complex, rich finish. One of the top five coffees in the world with a fragrant, floral aroma.",
        tags: ["Blackcurrant", "Wine-like Acidity", "Complex Finish"], roast: "Medium to Extra Dark"
      },
      {
        origin: "Colombia", country_code: "CO",
        name: "Colombia Caldas \u2014 Lucero Supremo",
        description: "Caramel sweetness with a fruity aroma and smooth, well-rounded medium body. Grown in high-altitude regions with rich volcanic soil.",
        tags: ["Caramel", "Fruity", "Smooth Medium Body"], roast: "Medium"
      },
      {
        origin: "Colombia", country_code: "CO",
        name: "Colombia Huila \u2014 Excelso",
        description: "Bright acidity, red apple sweetness, citrus and floral notes with a clean finish. Single-origin selection from the Huila region near Santa Maria.",
        tags: ["Bright Acidity", "Citrus & Floral", "Clean Finish"], roast: "Medium to Dark"
      },
      {
        origin: "Brazil", country_code: "BR",
        name: "Brazil A Reserva Cerrado Mineiro",
        description: "Sweet fruity profile with almond and chocolate notes. Naturally processed for a sweeter taste, low acidity, with hints of dark chocolate, brown sugar and caramel.",
        tags: ["Sweet Fruity", "Almond & Chocolate", "Low Acidity"], roast: "Medium Dark"
      },
      {
        origin: "Brazil", country_code: "BR",
        name: "Brazil Mantissa \u2014 Red Catuai",
        description: "Sweet cocoa and hazelnut profile with mild red fruit acidity. From the Serra das Tres Barras estate with fruity, berry-heavy mid-palate and striking finish.",
        tags: ["Sweet Cocoa", "Hazelnut", "Mild Red Fruit Acidity"], roast: "Light to Dark"
      }
    ]
  },
  about: {
    heading: "About Can Crops Inc.",
    paragraphs: [
      "We are a Canadian-based import-export company specializing in the distribution of high-quality agricultural commodities \u2014 from specialty organic coffee beans to an extensive variety of beans, peas, lentils, edible oils, pulses, cereals and grains.",
      "Our hands-on approach covers every aspect of the process: supplier coordination, documentation, and shipment tracking \u2014 ensuring a seamless experience with high product standards and competitive pricing.",
      "Our warehouse operations include importing, roasting from light to deep, custom blending to client specifications, quality testing and evaluation, and temperature-controlled storage to preserve freshness, purity and natural quality."
    ],
    highlights: [
      { number: "6+",   label: "Source Countries"   },
      { number: "100%", label: "Quality Tested"      },
      { number: "4",    label: "Roast Levels"        },
      { number: "24/7", label: "Cold Storage"        }
    ]
  },
  exports: {
    heading:    "What We Export",
    subheading: "Proudly exporting Canadian agricultural products to global markets.",
    items: [
      { category: "Grain",    title: "Oats",                 description: "Premium Canadian oats for food and industrial use." },
      { category: "Grain",    title: "Barley",               description: "High-grade barley for brewing and food production." },
      { category: "Grain",    title: "Non-Durum Wheat",      description: "Quality wheat for milling and export markets." },
      { category: "Oil",      title: "Canola Oil & Seeds",   description: "Canadian canola \u2014 oil and raw seeds available in bulk." },
      { category: "Legume",   title: "Soya Beans & Oil",     description: "Soya seeds and refined oil for diverse industries." },
      { category: "Specialty",title: "Lavender Oil & Seeds", description: "Premium lavender for wellness and cosmetic markets." }
    ]
  },
  contact_banner: {
    heading:     "Ready to Work Together?",
    description: "Contact Manager Sukanya and our team for pricing, samples and custom orders.",
    cta_label:   "contact@cancrops.com",
    cta_href:    "mailto:contact@cancrops.com"
  },
  footer: {
    copyright: "2025 Can Crops Inc.",
    website:   "www.cancrops.com",
    email:     "contact@cancrops.com"
  }
};

/* ---------------------------------------------------------
   Navigation
   --------------------------------------------------------- */
function buildNav(nav) {
  const list = document.getElementById('nav-links');
  nav.links.forEach(link => {
    const li = document.createElement('li');
    const a  = document.createElement('a');
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
  document.getElementById('hero-cta-primary').textContent   = hero.cta_primary;
  document.getElementById('hero-cta-secondary').textContent = hero.cta_secondary;

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
    const div     = document.createElement('div');
    div.className = 'stat-item';
    div.innerHTML = `
      <div class="stat-number">${item.number}</div>
      <div class="stat-label">${item.label}</div>
    `;
    bar.appendChild(div);
  });
}

/* ---------------------------------------------------------
   Why Choose Us
   --------------------------------------------------------- */
function buildWhyUs(why) {
  document.getElementById('why-heading').textContent    = why.heading;
  document.getElementById('why-subheading').textContent = why.subheading;

  const grid = document.getElementById('why-grid');
  why.items.forEach((item, i) => {
    const card     = document.createElement('div');
    card.className = 'why-card reveal';
    card.style.transitionDelay = `${i * 0.07}s`;
    card.innerHTML = `
      <div class="why-card-num">${String(i + 1).padStart(2, '0')}</div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;
    grid.appendChild(card);
  });
}

/* ---------------------------------------------------------
   Generic product / export grid
   --------------------------------------------------------- */
function buildProductGrid(section, gridId, headingId, subId) {
  document.getElementById(headingId).textContent = section.heading;
  document.getElementById(subId).textContent     = section.subheading;

  const grid = document.getElementById(gridId);
  section.items.forEach((item, i) => {
    const card     = document.createElement('div');
    card.className = 'product-card reveal';
    card.style.transitionDelay = `${i * 0.07}s`;
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
  coffee.items.forEach((item, i) => {
    const card     = document.createElement('div');
    card.className = 'coffee-card reveal';
    card.style.transitionDelay = `${i * 0.08}s`;

    const tagsHTML = item.tags.map(t => `<span class="coffee-tag">${t}</span>`).join('');

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
    p.className   = 'reveal';
    p.textContent = text;
    container.appendChild(p);
  });

  const hlGrid = document.getElementById('about-highlights');
  if (hlGrid && about.highlights) {
    about.highlights.forEach(h => {
      const item     = document.createElement('div');
      item.className = 'about-highlight-item';
      item.innerHTML = `
        <div class="about-highlight-num">${h.number}</div>
        <div class="about-highlight-label">${h.label}</div>
      `;
      hlGrid.appendChild(item);
    });
  }
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
  document.getElementById('footer-text').innerHTML =
    `&copy; ${footer.copyright}
     &nbsp;&mdash;&nbsp;
     <a href="mailto:${footer.email}">${footer.email}</a>
     &nbsp;&mdash;&nbsp;
     ${footer.website}`;
}

/* ---------------------------------------------------------
   Scroll reveal  (IntersectionObserver)
   --------------------------------------------------------- */
function initScrollReveal() {
  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.10 }
  );
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ---------------------------------------------------------
   Active nav link on scroll
   --------------------------------------------------------- */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id], div[id="contact"]');
  const links    = document.querySelectorAll('#nav-links a');

  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`);
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(s => io.observe(s));
}

/* ---------------------------------------------------------
   Init
   --------------------------------------------------------- */
function init() {
  const d = CONTENT;

  buildNav(d.nav);
  buildHero(d.hero, d.company);
  buildStats(d.stats);
  buildWhyUs(d.why_us);
  buildProductGrid(d.imports, 'imports-grid', 'imports-heading', 'imports-subheading');
  buildCoffee(d.coffee);
  buildAbout(d.about);
  buildProductGrid(d.exports, 'exports-grid', 'exports-heading', 'exports-subheading');
  buildContactBanner(d.contact_banner);
  buildFooter(d.footer);

  initScrollReveal();
  initActiveNav();
}

document.addEventListener('DOMContentLoaded', init);
