/* =========================================================
   Can Crops Inc. — Login Page JavaScript
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
   Left panel — mascot, welcome text, facts
   --------------------------------------------------------- */
function buildLeftPanel(login, company) {
  /* mascot */
  const mascot = document.getElementById('left-mascot');
  mascot.src   = company.mascot_url;
  mascot.alt   = company.name;

  /* welcome copy */
  document.getElementById('left-welcome-heading').textContent = login.left_panel.welcome_heading;
  document.getElementById('left-welcome-text').textContent    = login.left_panel.welcome_text;

  /* facts list */
  const factList = document.getElementById('left-facts');
  login.left_panel.facts.forEach(fact => {
    const row     = document.createElement('div');
    row.className = 'fact-row';
    row.innerHTML = `
      <span class="fact-dot"></span>
      <span class="fact-text">${fact}</span>
    `;
    factList.appendChild(row);
  });
}

/* ---------------------------------------------------------
   Right panel — form labels & text
   --------------------------------------------------------- */
function buildRightPanel(login, company) {
  /* back link */
  const backLink       = document.getElementById('back-link');
  backLink.textContent = login.back_label;

  /* heading / subtitle */
  document.getElementById('form-heading').textContent  = login.heading;
  document.getElementById('form-subtitle').textContent = login.subtitle;

  /* email field */
  document.getElementById('email-label').textContent      = login.email_label;
  document.getElementById('email-input').placeholder      = login.email_placeholder;

  /* password field */
  document.getElementById('password-label').textContent   = login.password_label;
  document.getElementById('password-input').placeholder   = login.password_placeholder;

  /* options row */
  document.getElementById('remember-text').textContent    = login.remember_label;
  document.getElementById('forgot-link').textContent      = login.forgot_label;

  /* buttons */
  document.getElementById('btn-submit').textContent       = login.submit_label;
  document.getElementById('divider-text').textContent     = login.divider_text;
  document.getElementById('btn-guest').textContent        = login.guest_label;

  /* footer text */
  const registerLink       = document.getElementById('register-link');
  registerLink.textContent = login.register_label;

  document.getElementById('register-prompt').textContent  = login.register_prompt;
  document.getElementById('contact-prompt').textContent   = login.contact_prompt;

  const contactLink       = document.getElementById('contact-link');
  contactLink.textContent = company.email;
  contactLink.href        = `mailto:${company.email}`;
}

/* ---------------------------------------------------------
   Form submission handler
   --------------------------------------------------------- */
function bindFormEvents() {
  const form = document.getElementById('login-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email    = document.getElementById('email-input').value.trim();
    const password = document.getElementById('password-input').value;

    if (!email || !password) {
      showFormError('Please fill in all fields.');
      return;
    }

    clearFormError();

    /* TODO: replace with real auth call */
    console.log('[Can Crops] Login attempt:', email);
  });

  const guestBtn = document.getElementById('btn-guest');
  guestBtn.addEventListener('click', function () {
    /* TODO: handle guest access */
    console.log('[Can Crops] Guest access requested');
  });
}

function showFormError(message) {
  let errEl = document.getElementById('form-error');
  if (!errEl) {
    errEl           = document.createElement('p');
    errEl.id        = 'form-error';
    errEl.style.cssText = 'color:#c0392b; font-size:13px; margin-bottom:14px; text-align:center;';
    const form = document.getElementById('login-form');
    form.insertAdjacentElement('afterbegin', errEl);
  }
  errEl.textContent = message;
}

function clearFormError() {
  const errEl = document.getElementById('form-error');
  if (errEl) errEl.remove();
}

/* ---------------------------------------------------------
   Init
   --------------------------------------------------------- */
async function init() {
  try {
    const data = await loadContent();

    buildLeftPanel(data.login, data.company);
    buildRightPanel(data.login, data.company);
    bindFormEvents();

  } catch (err) {
    console.error('[Can Crops] Content load failed:', err.message);
  }
}

document.addEventListener('DOMContentLoaded', init);
