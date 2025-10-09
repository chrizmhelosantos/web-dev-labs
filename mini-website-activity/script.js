// script.js — interactivity: mobile menu, FAQ toggles, back-to-top, form validation, simple gallery
document.addEventListener('DOMContentLoaded', () => {
  // year in footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // mobile menu toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      const nav = document.querySelector('.main-nav');
      if (nav) nav.style.display = nav.style.display === 'block' ? '' : 'block';
    });
  }

  // FAQ toggles
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.parentElement.querySelector('.faq-answer');
      if (!answer) return;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      q.classList.toggle('open');
    });
  });

  // Back to top smoothing
  document.querySelectorAll('.back-to-top').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Contact form basic validation
  const form = document.querySelector('form[data-contact]');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('input[name="name"]');
      const email = form.querySelector('input[name="email"]');
      const msg = form.querySelector('textarea[name="message"]');
      let ok = true;
      [name, email, msg].forEach(el => el.classList.remove('error'));
      if (!name.value.trim()) { ok = false; name.classList.add('error'); }
      if (!email.value.includes('@')) { ok = false; email.classList.add('error'); }
      if (msg.value.trim().length < 20) { ok = false; msg.classList.add('error'); }

      const status = document.getElementById('form-status');
      if (!ok) {
        if (status) status.textContent = 'Please complete the form (message at least 20 characters).';
        return;
      }
      // Fake submit — no backend
      if (status) status.textContent = 'Thanks — your message looks good! (This demo doesn’t send data.)';
      form.reset();
    });
  }
});
