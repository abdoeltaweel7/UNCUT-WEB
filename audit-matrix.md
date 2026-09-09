# Uncuts Production Audit Matrix

| Area | Preconditions | Actions | Expected | Observed | Severity | Retest |
|---|---|---|---|---|---|---|
| Home opening | Fresh load | Open / and inspect the first viewport | Home opens directly on the supplied spotlight-video Hero with no curtain overlay or media error | Passed | P1 | Passed |
| Home scene pacing | Home loaded | Wheel/touch-scroll through the page | Each Home act settles on a native smooth proximity snap point without locking the page or jumping to the final section | Passed | P1 | Passed |
| Home services | Home loaded | Select each service tab | Active state and featured copy update | Passed | P2 | Passed |
| Home reels | Home loaded | Open reel card, activate player, close modal | In-site poster, embedded Vimeo player, and fallback action appear | Passed | P1 | Passed |
| Home partners | Home loaded | Scroll to partner exhibition and wait/use controls | A responsive auto-advancing carousel presents all 13 partners in the same complete museum frame system, with controls, spotlights, plaques, stats, and no overflow | Passed | P1 | Passed |
| Work import | /work | Load gallery | Shared red theatre gallery background renders with 61 unique reference works: 49 video and 12 photography | Passed | P2 | Passed |
| Work filtering | /work | Select VIDEO / PHOTOGRAPHY | Only the matching media set remains | Passed | P2 | Passed |
| Work media viewer | /work | Open video and image cards | Media opens inside site; Escape and close action work | Passed | P1 | Passed |
| Work detail | /work | Open project detail link | Detail route renders cover, metadata, embedded media, and fallback | Passed | P2 | Passed |
| About | /about | Load and scroll | Museum room composition, exhibit plinth, wall label, story copy, and CTA render | Passed | P2 | Passed |
| Services | /services | Load and hover/scroll | Full-width film-set service scenes, staged lighting, and readable copy render | Passed | P2 | Passed |
| Partners | /partners | Load partner exhibition | Supplied red gallery background renders behind all 13 reusable museum exhibits with complete frame overlays, depth, and no overflow | Passed | P2 | Passed |
| Why Us | /why-uncuts | Load reasons list | Five reasons render with Arabic supporting copy | Passed | P3 | Passed |
| Mobile navigation | 390 x 844 | Open menu, choose Contact | Menu opens with ARIA state and route changes | Passed | P2 | Passed |
| Mobile layout | 390 x 844 | Sweep all routes | No horizontal overflow | Passed | P2 | Passed |
| Contact form | /contact | Fill required fields and submit | Confirmation state and WhatsApp next step uses +966 56 777 9785 | Passed | P2 | Passed |
| Error handling | Invalid project id | Request /work/does-not-exist | Next not-found handling | Build verified | P3 | Passed |
