# Combined site: redirect map (DRAFT, not live)

This goes with the `/combined/` mockup, where everything moves onto **www.michellegaloob.com**. Nothing here is live. These are the 301 redirects to set up **if** Jason picks the one-domain option.

New URLs are written as they would appear in production (`https://www.michellegaloob.com/...`).

## 1. michellegaloobtraining.com to michellegaloob.com

| Old URL (michellegaloobtraining.com) | New URL (www.michellegaloob.com) | Notes |
|---|---|---|
| `/` | `/training/starter-kit` | Free Intuition Activation Starter Kit |
| `/intuition-mastery` | `/training/intuition-mastery` | ⚠️ **Do not redirect yet.** See "Checkout caveat" below. |
| `/intuition-mastery#pricing` | `/training/intuition-mastery#pricing` | Same caveat |
| `/testimonials` | `/success-stories` | One merged, de-duplicated page |
| `/activate` | `/training` | Stale page: free workshop dated "Wed, April 22nd" |
| `/privacy-policy`, `/terms` | keep, or merge into `/privacy-policy` | Needs legal review before merging |
| `/reality-check` | keep on the app (not ported) | Starter Kit Step 2 interactive guide. The mockup links to the live page. |
| `/priority` | keep on the app (not ported) | Starter Kit Step 4 priority waitlist form |
| `/masterclass`, `/flash-sale`, `/reading-flash`, `/momentum`, `/breakthrough`, `/astro-reading`, `/waitlist` | keep on the app (not ported) | Promo, offer and application pages with their own checkout or forms. Not part of the main nav. |
| any other path | `/training` | Catch-all |

**Checkout caveat.** The Intuition Mastery "Trust Your Gut — $1,197" button creates its Stripe checkout session on the training app's server. A static or Wix page can't do this. Every program button in the mockup still points at `https://michellegaloobtraining.com/intuition-mastery#pricing`.

If you redirect that URL before checkout moves, the buy button breaks. Options (TO CONFIRM):
- (a) Keep the app on its own host, for example a subdomain like `learn.michellegaloob.com`, and point the buttons there.
- (b) Move checkout to a Stripe Payment Link or Wix pricing plan first, then redirect.

The same applies to `/reality-check`, `/priority`, and the promo pages listed above.

## 2. Old Wix duplicate and legacy URLs on michellegaloob.com

| Old URL | New URL | Notes |
|---|---|---|
| `/general-1` | `/success-stories` | Old "Success Stories" menu item |
| `/testimonials` | `/success-stories` | Duplicate of `/general-1` |
| `/services` | `/readings` | Duplicate of `/readings` |
| `/live-events` | `/training/intuition-mastery` | Old "Intuition Mastery Program" menu item |
| `/live-event-draft`, `/product1` to `/product5`, `/paywall`, `/events-page` | `/` (or unpublish) | Draft pages that show up in the Wix sitemap |

## 3. Unchanged (no redirect)

- Booking pages stay exactly as they are live: `/1-hour-reading`, `/30-min-reading`, `/package-of-2-sessions`, `/package-of-4-sessions`, and Calendly `calendly.com/michellegaloob-aoy/45min-phone-reading`.
- These also stay as they are: `/packages` (Intuitive Coaching), `/pricing-plans/packages` (Breakthrough Program), `/feed` (Blog), `/privacy-policy`.
