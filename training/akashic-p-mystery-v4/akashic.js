// LOCAL DRAFT of shared akashic.js for /akashic-reading/p mystery experiment.
// Live PRICES are flash:285 regular:375. This draft shows flash:275 for Jason's test.
// Calendly first-time event still charges $285 until Jason approves a price change.
const VARIANT = document.body.dataset.variant || 'p';

const p = new URLSearchParams({ ...(window.akashicAttribution || {}), ...Object.fromEntries(new URLSearchParams(location.search)) });
const t = new URLSearchParams();
['utm_source','utm_medium','utm_campaign','utm_term'].forEach(k => p.get(k) && t.set(k, p.get(k)));
if (!t.has('utm_source')) t.set('utm_source', p.has('gclid') ? 'google' : 'akashic-lp');
if (!t.has('utm_medium') && p.has('gclid')) t.set('utm_medium', 'cpc');
if (!t.has('utm_campaign')) t.set('utm_campaign', 'akashic-reading');
t.set('utm_content', VARIANT);
document.querySelectorAll('.cta').forEach(a => {
  const base = a.getAttribute('href').split('?')[0];
  a.href = base + '?' + t;
});

const PRICES = { flash: 275, regular: 375 };
PRICES.off = PRICES.regular - PRICES.flash;
window.AKASHIC_PRICES = PRICES;
const setPrices = () => document.querySelectorAll('[data-price]').forEach(el => {
  const k = el.dataset.price;
  if (PRICES[k] != null) el.textContent = '$' + PRICES[k];
});
setPrices();

// Inline click-to-play (same as live /s)
document.querySelectorAll('.yt[data-yt]').forEach(box => {
  const btn = box.querySelector('button');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const f = document.createElement('iframe');
    f.src = `https://www.youtube-nocookie.com/embed/${box.dataset.yt}?autoplay=1&cc_load_policy=1&rel=0`;
    f.title = box.dataset.title; f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    f.allowFullscreen = true;
    box.replaceChildren(f);
  }, { once: true });
});

// Local: skip /fr/api/akashic/visit (no server)
