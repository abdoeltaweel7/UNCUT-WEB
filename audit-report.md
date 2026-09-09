# Uncuts Production Audit Report

## Executive Summary

The local Next.js experience was rebuilt and audited as a cinematic Arabic-first production studio site. The public reference at https://uncuts9.com/ and the supplied creative direction were used as content and direction sources. The implementation now opens directly on the Hero with the supplied spotlight video, uses scene-by-scene scroll snapping, and presents the partner exhibition as an auto-advancing carousel of individually framed exhibits. It is ready for a client-facing walkthrough with residual risk limited to production media hosting and the intentionally demo-only form handoff.

## Scope and Environment

- Local app: http://localhost:3000
- Framework: Next.js 15.5.25, React 19, TypeScript
- Viewports: default desktop browser and 390 x 844 mobile viewport
- Routes: /, /about, /services, /work, /partners, /why-uncuts, /contact, /work/coach-joud-bush-club
- Reference reviewed: https://uncuts9.com/, /gallery/, and the reference Vimeo work links
- Imported work set: 61 unique published assets from the reference gallery: 49 Vimeo films and 12 photographs.
- Imported partner set: 13 local logos from the project `partners` folder, copied to `public/partners`.

## Verified Passes

- Home opens directly on the cinematic Hero; the previous curtain intro is no longer mounted in the page flow.
- Home Hero plays the supplied 10-second, 1920x1080 spotlight sweep locally with autoplay, muted playback, looping, inline mobile playback, and the existing poster fallback.
- The dedicated `/partners` page uses the supplied red gallery image as its exhibition-room background while preserving the framed partner exhibits above it.
- The `/work` gallery now uses the same supplied red theatre wall so the portfolio exhibition and partner room share one visual world.
- Home scenes use native smooth scrolling with proximity snap points and `scroll-snap-stop: always`, so each act settles as a visible station without locking the page at a distant section.
- The Home partner station auto-advances through all 13 partners, pauses on desktop hover, supports previous/next controls, and respects `prefers-reduced-motion`.
- Hero no longer embeds privacy-restricted Vimeo media in the first viewport.
- Hero, manifesto, services, reel showcase, partner exhibition, stats, CTA, and footer render without horizontal overflow.
- About is composed as a museum room with an architectural backdrop, plinth, exhibit label, and spatial copy.
- Services use full-width film-set scenes with light movement and depth rather than generic service cards.
- Success Partners use a reusable exhibition component with individual frames, plaques, spotlights, pedestals, red velvet ropes, and a foreground camera.
- Service tabs update selected state and featured scene copy.
- Reel cards open a clean in-site media viewer with an original poster, an embedded Vimeo player after activation, and a direct Vimeo fallback.
- Work filters update the visible video and photography sets: 49 video items and 12 image items.
- Work cards open video and image media inside the site, while the details link remains available for each project.
- Project detail pages render cover, metadata, description, Arabic copy, and the appropriate embedded film or still image.
- Mobile navigation opens, exposes all routes, and closes on route selection.
- Contact form validates required fields and shows an explicit success state with a WhatsApp handoff.
- All audited routes were checked for mobile overflow.

## Findings and Fixes

### P1 — Privacy-restricted Vimeo embed broke the hero

- Impact: first viewport showed a Vimeo privacy error instead of a cinematic opening.
- Reproduction: load / locally and inspect the hero iframe.
- Expected: hero should show the brand scene without an embedded-player error.
- Actual: Vimeo returned “Because of its privacy settings, this video cannot be played here.”
- Root cause: the reference Vimeo video does not allow playback from localhost.
- Fix: replaced the hero iframe with a reliable cinematic poster image; Vimeo is only linked from user-initiated project actions.
- Regression coverage: desktop and mobile first-viewport browser checks.
- Retest: passed.

### P1 — Private Vimeo thumbnails showed lock placeholders

- Impact: work cards looked broken and undermined client confidence.
- Reproduction: open /#reels and inspect the first three cards before the fix.
- Expected: every card should have a usable poster image.
- Actual: vumbnail.com returned lock placeholders for restricted videos.
- Root cause: third-party thumbnail endpoint did not have access to the reference videos.
- Fix: moved card and project posters to stable Unsplash images while preserving direct Vimeo links.
- Regression coverage: home reel grid, work grid, and project detail browser checks.
- Retest: passed.

### P2 — Contact form had no user-visible success behavior

- Impact: submitting the form gave no confirmation and no next step.
- Reproduction: fill required fields on /contact and submit.
- Expected: a success state and clear follow-up channel.
- Actual: native form submission behavior was undefined.
- Root cause: form had no client-side submit handler.
- Fix: added validation-aware client form, confirmation state, and WhatsApp handoff.
- Regression coverage: required field flow and successful submission on mobile.
- Retest: passed.

### P2 — Mobile experience lacked a tested navigation state

- Impact: mobile users could not reliably reach secondary routes.
- Reproduction: open the site at 390 x 844 and inspect the navigation.
- Expected: compact menu with accessible open/close state.
- Actual: prior CSS exposed a desktop-only navigation pattern.
- Root cause: navigation had no mobile interaction state or ARIA relationship.
- Fix: added controlled menu, aria-expanded, aria-controls, route-close behavior, and mobile layout.
- Regression coverage: menu open, route selection, and all-route mobile sweep.
- Retest: passed.

### P3 — Partner logo tiles had mismatched backgrounds

- Impact: reference logos with white source backgrounds appeared as awkward square blocks on dark tiles.
- Reproduction: inspect /partners.
- Expected: logos should sit cleanly inside a consistent wall.
- Actual: white logo image boxes conflicted with the dark card treatment.
- Root cause: source logo assets include opaque backgrounds.
- Fix: changed partner tiles to an ivory treatment and normalized logo rendering.
- Regression coverage: desktop partner page screenshot and accessibility content check.
- Retest: passed.

### P2 — Gallery represented only six sample works

- Impact: the client-facing gallery did not communicate the full depth of the reference studio's archive.
- Reproduction: open /work and compare the visible work set with the reference gallery pagination.
- Expected: the gallery should carry the reference site's published work set and preserve video/photo access.
- Actual: only six manually curated projects were present.
- Root cause: the local data model was seeded from the home page highlights only.
- Fix: imported 49 unique Vimeo films and 12 published reference photographs, with source categories and stable local photo posters.
- Regression coverage: work count, video filter count, photography filter count, media modal behavior, and responsive gallery sweep.
- Retest: passed.

### P2 — Gallery actions opened external media only

- Impact: visitors left the portfolio context to inspect work.
- Reproduction: select a work card from /work.
- Expected: media should open in the same experience.
- Actual: cards navigated to detail pages and Vimeo links.
- Root cause: the project card had no shared media viewer.
- Fix: added a shared viewer for embedded Vimeo films and full-size photography, with an intentional poster-first interaction for privacy-restricted local embeds.
- Regression coverage: desktop and mobile media viewer flows, Escape/click-outside close, and console error sweep.
- Retest: passed.

### P2 — Curtain reveal showed a black buffer between panels

- Impact: the first scroll could feel like the site appeared suddenly from a black screen instead of being revealed underneath the curtain.
- Reproduction: start a fresh session on / and scroll partway through the intro.
- Expected: the live hero should become visible immediately through the opening.
- Actual: the fixed curtain layer had an opaque black background.
- Root cause: the overlay background was painted above the hero while the curtain panels moved apart.
- Fix: made the overlay transparent, added a short retargetable transform transition, faded the opening lockup before it overlaps the hero, and delayed unmount until the panels finish exiting.
- Regression coverage: historical desktop/mobile opening behavior was retested after removing the curtain from the Home flow; no opening overlay or body scroll lock remains.
- Retest: passed.

### P2 — Opening state and museum frames were unreliable after the visual rebuild

- Impact: returning visitors could bypass the curtain entirely, while partner frames could collapse into small corner artifacts under legacy logo rules.
- Reproduction: revisit `/` after an earlier session, then inspect the Home and `/partners` partner scenes.
- Expected: the opening should be visible on entry and every partner logo should sit inside its own complete frame.
- Actual: session storage skipped the opening, and old `.partner-logo img` sizing rules overrode the frame overlay.
- Root cause: stale session-based dismissal and selector specificity conflict between the old partner strip and new museum frame system.
- Fix: removed the curtain from the Home flow and scoped frame overlay rules so the ornate frame owns the full tile bounds.
- Regression coverage: desktop and mobile entry checks, frame bounding-box checks on `/` and `/partners`, and type/build verification.
- Retest: passed.

### P1 — Scroll-linked seeking made the opening stutter and could keep Home locked

- Impact: the curtain advanced one seek at a time like a slideshow, and small trackpad/touch deltas could leave the page locked under the opening layer.
- Reproduction: open `/`, make several small wheel or touch movements, then try to continue down the Home page.
- Expected: the first gesture should start a smooth theatrical reveal and the page should become scrollable when it finishes.
- Actual: repeated `currentTime` assignments produced visible frame stepping, while `body` stayed `overflow:hidden` until progress reached the end.
- Root cause: the opening used gesture-by-gesture media seeking rather than continuous playback, with no guaranteed completion path for low-delta input.
- Fix: removed the scroll-linked opening from the Home flow. The Hero is now the first scene, ready for the replacement video asset when supplied.
- Regression coverage: TypeScript/build checks, route smoke tests, and focused desktop/mobile opening behavior review.
- Retest: passed.

### P1 — Partner section did not carry enough physical exhibition depth

- Impact: partner logos were framed, but the scene lacked the museum staging, foreground camera, pedestals, lighting, and velvet barriers described by the creative direction.
- Reproduction: inspect the Home legacy scene and `/partners`.
- Expected: each partner should read as a valuable exhibited object inside one coherent museum scene.
- Actual: the earlier version was a grid of framed logos over a background image.
- Root cause: the partner component modeled each item as a tile without a scene layer or physical display system.
- Fix: added `components/home/PartnerExhibition.tsx` and scene CSS for frames, pedestals, plaques, spotlights, ropes, marble-floor depth, and a camera foreground layer. Both Home and `/partners` now reuse the same exhibit component.
- Regression coverage: 13 partner items in the DOM, no overflow on mobile, and visual scene verification.
- Retest: passed.

### P1 — Home needed a continuous partner presentation and scene-to-scene pacing

- Impact: the Home partner section showed a static wall, while fast wheel or touch movement could skip past the intended cinematic stations.
- Reproduction: load `/`, scroll through the acts, then inspect the partner station.
- Expected: each act should settle cleanly, and partners should move through the same ornate frame system as a deliberate exhibition.
- Actual: the page had no root snap contract, and the Home partner section did not have a focused carousel presentation.
- Root cause: the scene layout and partner component were only composed for free-flow scrolling and grid rendering.
- Fix: added native smooth vertical snap points for the Home scenes and a responsive five-position partner carousel that reuses the existing museum frame asset and remains usable on mobile.
- Regression coverage: desktop/mobile layout checks, partner count, carousel controls, reduced-motion behavior, and build/type verification.
- Retest: passed on the current local Hero fallback and responsive Home implementation; the replacement Hero video can be added later without changing the scene contract.

### P2 — About and Services were not fully spatial scenes

- Impact: the pages communicated the copy but still read closer to styled content blocks than a museum room and film set.
- Reproduction: inspect `/about` and `/services`.
- Expected: spatial environments should carry the narrative with depth, objects, lighting, and staged composition.
- Actual: About had a simple two-column museum block and Services used expanding rows.
- Root cause: scene backgrounds were present, but the foreground composition was too flat.
- Fix: added museum room layers, exhibit typography, sculptural plinth treatment, film-set lighting, staged service rows, and responsive scene-specific layouts.
- Regression coverage: build, type check, desktop and mobile route sweep.
- Retest: passed.

## Residual Risk

- Vimeo embeds are loaded after an explicit play action because several referenced videos restrict localhost playback. On the production domain, the in-site player can play when the domain is allowed in Vimeo privacy settings; the direct Vimeo link remains the guaranteed fallback.
- The contact form currently confirms locally and hands off to WhatsApp; it does not persist leads to a CRM or email endpoint.
- WhatsApp handoff links use `+966 56 777 9785` through the shared site configuration.
- The imported photography is stored locally under `public/work`; final launch should confirm asset rights and optimize the images further if a CDN is available.
- Gemini visual assets are not generated by this code change. The complete production prompt is available in `GEMINI_PRO_VISUAL_ASSETS_PROMPT.md`; current local scene assets remain valid fallbacks for future art direction changes.
- npm run lint is not a usable baseline command in this repository because Next 15 opens an interactive ESLint setup wizard. The production build and TypeScript checks were run successfully.

## Verdict

**Ready with residual risk**

## Exact Verification Commands

- npm run build
- npx tsc --noEmit
- npm run dev
