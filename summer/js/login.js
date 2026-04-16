/* =========================================================
   Can Crops Inc. — Login Page JavaScript
   ========================================================= */

/* ---------------------------------------------------------
   Inline content  (works with file:// and any server)
   --------------------------------------------------------- */
const LOGIN_CONTENT = {
  company: {
    name:       "Can Crops Inc.",
    email:      "contact@cancrops.com",
    mascot_url: "https://clipart-library.com/images_k/transparent-gif-cute/transparent-gif-cute-17.jpg"
  },
  login: {
    heading:              "Sign In",
    subtitle:             "Enter your credentials to access your account",
    email_label:          "Email Address",
    email_placeholder:    "you@example.com",
    password_label:       "Password",
    password_placeholder: "Enter your password",
    remember_label:       "Remember me",
    forgot_label:         "Forgot password?",
    submit_label:         "Sign In",
    divider_text:         "or",
    guest_label:          "Continue as Guest",
    register_prompt:      "Don\u2019t have an account?",
    register_label:       "Request Access",
    contact_prompt:       "Questions? Email us at",
    back_label:           "Back to Home",
    left_panel: {
      welcome_heading: "Welcome Back!",
      welcome_text:    "Login to access your Can Crops account and manage your agricultural import-export orders, track shipments, and explore our product catalogue.",
      facts: [
        "6 specialty coffee bean varieties",
        "Sourced from Ethiopia, Kenya, Colombia and Brazil",
        "Canadian-based with global reach"
      ]
    }
  }
};

/* ---------------------------------------------------------
   Left panel — mascot, welcome text, facts
   --------------------------------------------------------- */
function buildLeftPanel(login, company) {
  const mascot = document.getElementById('left-mascot');
  mascot.src   = company.mascot_url;
  mascot.alt   = company.name;

  document.getElementById('left-welcome-heading').textContent = login.left_panel.welcome_heading;
  document.getElementById('left-welcome-text').textContent    = login.left_panel.welcome_text;

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
  document.getElementById('back-link').textContent         = login.back_label;
  document.getElementById('form-heading').textContent      = login.heading;
  document.getElementById('form-subtitle').textContent     = login.subtitle;
  document.getElementById('email-label').textContent       = login.email_label;
  document.getElementById('email-input').placeholder       = login.email_placeholder;
  document.getElementById('password-label').textContent    = login.password_label;
  document.getElementById('password-input').placeholder    = login.password_placeholder;
  document.getElementById('remember-text').textContent     = login.remember_label;
  document.getElementById('forgot-link').textContent       = login.forgot_label;
  document.getElementById('btn-submit').textContent        = login.submit_label;
  document.getElementById('divider-text').textContent      = login.divider_text;
  document.getElementById('btn-guest').textContent         = login.guest_label;
  document.getElementById('register-prompt').textContent   = login.register_prompt;
  document.getElementById('register-link').textContent     = login.register_label;
  document.getElementById('contact-prompt').textContent    = login.contact_prompt;

  const contactLink       = document.getElementById('contact-link');
  contactLink.textContent = company.email;
  contactLink.href        = `mailto:${company.email}`;
}

/* ---------------------------------------------------------
   Show / hide password toggle
   --------------------------------------------------------- */
function bindPasswordToggle() {
  const btn   = document.getElementById('toggle-password');
  const input = document.getElementById('password-input');
  if (!btn || !input) return;

  btn.addEventListener('click', () => {
    const show   = input.type === 'password';
    input.type   = show ? 'text' : 'password';
    btn.textContent = show ? 'Hide' : 'Show';
  });
}

/* ---------------------------------------------------------
   Form submission
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
    console.log('[Can Crops] Login attempt:', email);
  });

  document.getElementById('btn-guest').addEventListener('click', () => {
    console.log('[Can Crops] Guest access requested');
  });
}

function showFormError(message) {
  let errEl = document.getElementById('form-error');
  if (!errEl) {
    errEl               = document.createElement('p');
    errEl.id            = 'form-error';
    errEl.style.cssText = 'color:#c0392b; font-size:13px; margin-bottom:14px; text-align:center;';
    document.getElementById('login-form').insertAdjacentElement('afterbegin', errEl);
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
function init() {
  const { login, company } = LOGIN_CONTENT;
  buildLeftPanel(login, company);
  buildRightPanel(login, company);
  bindPasswordToggle();
  bindFormEvents();
}

document.addEventListener('DOMContentLoaded', init);
