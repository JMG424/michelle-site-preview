# Michelle Galoob website preview: what changed and why

**This is a preview. It is not live.** Every page has `noindex,nofollow`, `/robots.txt` blocks all crawlers, and each page shows a "Preview — not live" banner. Production (Wix, Railway, DNS) was not touched.

- `/main/` rebuilds www.michellegaloob.com (Wix): Home, About, Readings, Success Stories, Intuition Mastery Program, Media
- `/training/` rebuilds michellegaloobtraining.com (Express/React on Railway): Free Starter Kit, Intuition Mastery, Success Stories

The original Claude Code review from the Mac Studio could not be found. I searched Drive, both Gmail accounts, and the `mgc-funnel` and `michelle-galoob-funnel` repos. This preview comes from a fresh audit, plus the Ahrefs Site Audit alerts in jason@meta57.xyz: health 75, 12 errors, broken links, orphan pages, slow pages, oversized CSS, and slow responses to AI crawlers.

## Problems found on the live sites
- **The training site is invisible to search and AI crawlers.** It is a client-rendered app, so its HTML is an empty `<div id="root">`. Every page shares one title and description ("Intuition Mastery Program … 12-month immersive experience"). `/robots.txt` and `/sitemap.xml` return the app's HTML instead of real files.
- **Wix home page has no H1.** The title is "Akashic Records Reading | Michelle Galoob", and the inner pages have no meta descriptions. Headings are used only for styling: testimonial names are H2s, and Readings uses H5s.
- **The email link on every Wix page is broken.** It shows michellegaloob@gmail.com but links to `mailto:info@mysite.com`, which is leftover template text. The Twitter icon links to the twitter.com home page.
- **Images are very heavy.** Raw images on Wix are 1–8 MB each (about 33 MB total for the pages audited). The preview uses about 1 MB.
- **Pages are duplicated or orphaned.** `/testimonials` duplicates `/general-1` (the "Success Stories" menu item). `/services` duplicates `/readings`. Draft pages are listed in the Wix sitemap: `/live-event-draft`, `/product1`–`5`, `/paywall`, `/events-page`.
- **Stale content on the training site.** `/activate` still advertises a free workshop dated "Wed, April 22nd" with a zeroed countdown.
- **Inconsistent facts:**
  - The money-back guarantee is 14 days on `/intuition-mastery` but 7 days on `/flash-sale`.
  - The About page says the awakening was "about 13 years ago", while the training site says "15+ years".
  - The 45-minute reading books through Calendly. The other readings book through Wix Bookings.
- **No email capture on the free Starter Kit.** The free value is handed out without growing the list.

## SEO
- Each page has a unique, keyword-led title and meta description, with prices where relevant.
- Each page has one H1 and a clean H2/H3 structure. Pages use semantic `header`/`nav`/`main`/`footer` and breadcrumbs.
- Canonical tags point to the current production URLs. Pages have Open Graph and Twitter cards.
- Structured data (JSON-LD): Person (with JVP credentials), ProfessionalService (all 5 reading prices), WebSite, Organization, Course (Intuition Mastery, $1,197 and $4,997 offers), FAQPage, BreadcrumbList, PodcastEpisode.
- Review and AggregateRating markup was left off on purpose. There are no star ratings, and Google ignores self-serving reviews for a business's own services.
- Images are WebP, sized responsively and lazy-loaded below the fold. The hero image gets `fetchpriority`.
- Videos load only when clicked. About 1 KB of our own JavaScript, and no third-party scripts until someone presses play.
- Every alt text is descriptive.
- Draft `sitemap.xml` for each site. The training site gets a real draft `robots.txt` to replace the missing one.

## GEO (AI answers)
- An "At a glance" block on key pages covers Who, What, For whom, Outcome, and on the program page also Investment and Guarantee.
- FAQ sections answer in plain language using only facts already on the sites: what an Akashic Records reading is, how readings work (by phone), prices, how to prepare, "is this woo-woo?", reading vs. program, refund policy, and what happens after enrolling.
- Credentials are stated as facts from the site: JVP Mediumship Level I Certification Course, and Certified Psychic Intuitive Messenger from the James Van Praagh School of Mystical Arts. Also the 10-month Akashic Records training and 5 podcast appearances.
- Each site has an `llms.txt` with the key facts and links.
- On the training site, all content is in static HTML, so AI crawlers can read it without running JavaScript.

## Conversion
- A clear primary CTA above the fold: "Book a Reading" on the main site and "Get Started — Free" or "Trust Your Gut — $1,197" on the training site. CTAs repeat after each section, and phones get a sticky bottom bar (Book / Call).
- A "How a reading works" 3-step section and a readings price grid on the home page.
- Social proof is placed beside the CTAs, using only existing testimonials: Ken Fried, Carole Crist, Jesse Osher, Sara Mara Durufour, Marc Sonnenthal, Dr Anu Patel, Jenna Zoe, Avia Solomon, Simi, Maria, Marta, Eira, Ken, Aiyah.
- FAQs handle objections: skepticism, no experience, missed live sessions, refunds.
- The main site cross-sells to the free Starter Kit and the Intuition Mastery Program, and the training site links back to private readings.
- No invented urgency. The only scarcity line is the existing "Limited spots" on VIP.

## Links kept exactly as live
- Readings:
  - `michellegaloob.com/1-hour-reading`
  - `calendly.com/michellegaloob-aoy/45min-phone-reading`
  - `/30-min-reading`
  - `/package-of-2-sessions`
  - `/package-of-4-sessions`
- Other main-site links: `/packages` (Intuitive Coaching), `/pricing-plans/packages` (Breakthrough), `/feed` (Blog), `http://www.michellegaloobtraining.com/intuition-mastery` (Join the Program), plus Instagram, Facebook, YouTube, and the podcast links.
- Intuition Mastery checkout: the live page creates the Stripe session on its server, so a static page cannot reproduce it. Preview buttons go to `michellegaloobtraining.com/intuition-mastery#pricing`, where the real checkout button is.
- Starter Kit steps link to the live `/reality-check` and `/priority`.

## Placeholders (marked in red on the pages)
- Wix contact form and mailing-list form were not recreated, because they submit to Wix.
- Email opt-in on the Starter Kit is recommended (existing Kit form) but not wired.

## /combined/: one-domain mockup (added Oct 4, 2026)

This mockup shows both sites merged into one site under the **michellegaloob.com** brand. It uses the same look as `/main/` (main.css, plus a small combined.css). `/main/` and `/training/` are unchanged.

- **Pages:**
  - Home (shows both paths: Book a Reading, or Learn to trust your intuition)
  - Readings
  - Training overview
  - Training → Free Starter Kit
  - Training → Intuition Mastery Program
  - Success Stories (one merged, de-duplicated page)
  - About
  - Media
  - FAQ (both FAQ sets merged)
- **Navigation:** one shared nav with a Training dropdown, one footer, and a sticky Book / Call bar on phones. The banner reads "Mockup — combined site, not live", and every page has `noindex,nofollow`.
- **Links:** booking, Calendly, Wix and checkout links are unchanged. Program buttons go to `michellegaloobtraining.com/intuition-mastery#pricing`.
- **Conflicting facts:** these are flagged with yellow **TO CONFIRM** notes. The mockup uses the 14-day guarantee (some promo pages say 7 days) and keeps "15+ years" (the About story says "about 13 years ago").
- **Supporting files:** `combined/sitemap.xml` (draft, production URLs), `combined/llms.txt` (merged), `combined/REDIRECTS.md` (redirect map, including the checkout caveat).
- **Source:** built by `build/build_combined.py`. It reuses the copy and data from the `/main/` and `/training/` builds, so there is no new copy, prices or testimonials.
