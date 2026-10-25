// Mystery discount v2 — Fishwife-style tease. No % revealed on sticky, modal, or claim.
// v3: no dollar prices on page. Opt-in confirms claim only. Book appears after claim (modal).
(function () {
  const STORAGE_KEY = 'mgc_mystery_p_v4';
  const DISMISS_KEY = 'mgc_mystery_sticky_dismiss_v4';

  const $ = (id) => document.getElementById(id);
  const modal = $('md-modal');
  const sticky = $('md-sticky');
  const formPanel = $('md-panel-form');
  const claimedPanel = $('md-panel-claimed');
  const form = $('md-form');
  const err = $('md-err');

  function loadClaim() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null'); } catch (e) { return null; }
  }

  function saveClaim(claim) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(claim)); } catch (e) {}
  }

  function openModal() {
    if (!modal) return;
    const claim = loadClaim();
    if (claim) showClaimed(claim);
    else {
      formPanel.hidden = false;
      claimedPanel.hidden = true;
      if (err) err.textContent = '';
    }
    modal.hidden = false;
    document.documentElement.classList.add('md-lock');
    const focusEl = claim ? $('md-book') : $('md-email');
    if (focusEl) focusEl.focus();
  }

  function closeModal() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.documentElement.classList.remove('md-lock');
  }

  function showClaimed(claim) {
    formPanel.hidden = true;
    claimedPanel.hidden = false;
    document.body.classList.add('has-mystery-claimed');
    hideSticky();
    // Flag for future wiring — do NOT invent a % or alternate price on screen
    document.querySelectorAll('a.cta').forEach(a => {
      try {
        const u = new URL(a.href, location.href);
        u.searchParams.set('mystery_claimed', '1');
        if (claim && claim.email) u.searchParams.set('mystery_email', claim.email);
        a.href = u.toString();
      } catch (e) {}
    });
  }

  function hideSticky() {
    if (sticky) sticky.classList.add('is-hidden');
  }

  function dismissSticky() {
    hideSticky();
    try { sessionStorage.setItem(DISMISS_KEY, '1'); } catch (e) {}
  }

  document.querySelectorAll('[data-mystery-open]').forEach(el => {
    el.addEventListener('click', (e) => { e.preventDefault(); openModal(); });
  });
  $('md-close') && $('md-close').addEventListener('click', closeModal);
  $('md-later') && $('md-later').addEventListener('click', closeModal);
  $('md-sticky-dismiss') && $('md-sticky-dismiss').addEventListener('click', (e) => {
    e.stopPropagation();
    dismissSticky();
  });
  modal && modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  form && form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = ($('md-email').value || '').trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      err.textContent = 'Please enter a real email address.';
      return;
    }
    err.textContent = '';
    const claim = { email, at: Date.now(), claimed: true };
    saveClaim(claim);
    // Local only: no server lead POST. Wire later if approved.
    if (window.fbq) try { fbq('track', 'Lead', { content_name: 'mystery-discount-v2' }); } catch (e) {}
    if (typeof window.akashicLead === 'function') window.akashicLead('p-mystery-v2');
    showClaimed(claim);
  });

  // Sticky: show after short delay unless dismissed (session) or already claimed
  const existing = loadClaim();
  if (existing) {
    document.body.classList.add('has-mystery-claimed');
    hideSticky();
  } else {
    let dismissed = false;
    try { dismissed = sessionStorage.getItem(DISMISS_KEY) === '1'; } catch (e) {}
    if (dismissed) hideSticky();
    else if (sticky) {
      sticky.classList.add('is-hidden');
      setTimeout(() => {
        try { dismissed = sessionStorage.getItem(DISMISS_KEY) === '1'; } catch (e) {}
        if (!dismissed && !loadClaim()) sticky.classList.remove('is-hidden');
      }, 2800);
    }
  }
})();
