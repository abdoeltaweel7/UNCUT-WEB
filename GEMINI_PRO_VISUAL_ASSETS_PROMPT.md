# Gemini Pro Visual Assets Prompt

Use this brief with Gemini Pro to generate the visual asset package for the Uncuts Production website.

## Role

Act as a senior cinematic art director, production designer, VFX supervisor, and motion designer creating a premium digital art experience for **UNCUTS PRODUCTION**.

The visual language combines contemporary art, luxury theatre, film sets, editorial design, and dark museum interiors. The complete journey is:

**theatre opening -> museum story -> film-set craft -> cinematic exhibition -> partner legacy -> final theatre scene**

Keep the same palette, materials, camera language, and lighting in every asset:

- black and deep burgundy
- red velvet
- antique gold
- ivory highlights
- warm tungsten spotlights
- realistic shadows
- subtle haze and restrained film grain
- tactile, photographed materials

## Non-negotiable rules

1. Do not generate readable text, typography, captions, labels, brand names, logos, numbers, watermarks, UI, or fake signage inside any image or video.
2. Do not redraw or invent partner logos. Partner logos will be composited later in HTML from supplied transparent image files.
3. Leave intentional negative space for HTML overlays and preserve the requested safe areas.
4. Generate individual production-ready files, never a collage, contact sheet, moodboard grid, or presentation mockup.
5. The result must feel like a real photographed or filmed physical environment, not a generic corporate template or AI illustration.
6. Avoid gradients used as decoration, glassmorphism, neon cyberpunk, cartoon materials, plastic fabric, overexposed highlights, crushed blacks, distorted architecture, and excessive fog.

## 1. Theatre curtain opening video

Create a realistic cinematic website-opening video:

- full-screen heavy red velvet theatre curtain
- two physically separate curtain panels meet exactly at the vertical center
- deep folds, visible velvet texture, realistic weight and inertia
- warm theatre spill light and subtle dust
- hidden dark stage behind the curtain
- no logo and no text

Motion:

- hold the curtain fully closed for about 1 second
- both panels open naturally from the exact center at the same time
- left panel travels left; right panel travels right
- slow, elegant, slightly eased theatre pull, not a wipe or dissolve
- reveal a dark empty stage with one warm spotlight and faint haze
- finish with the curtains resting at the sides
- no sudden cut, camera shake, or composition-changing zoom

Output:

- desktop master: 16:9, 4K if available
- mobile master: 9:16, 4K if available
- 24 or 30 fps
- 6 to 8 seconds
- clean first frame with the curtain closed
- clean final frame with the stage visible
- H.264 MP4 and WebM when supported

Keep the central seam clean. HTML controls, the logo, and the slogan will be layered above the footage.

## 2. Empty theatre stage

Create a wide cinematic still or ambient loop:

- black theatre interior
- burgundy side curtains tied back
- antique proscenium architecture
- polished dark floor
- one warm spotlight on the stage
- subtle haze and dust
- large clean center area for an HTML logo and headline
- no text or symbols

Provide 16:9 desktop and 9:16 mobile-safe crops.

## 3. Contemporary museum room for About

Create a dark luxury museum room:

- deep burgundy wall panels
- dark columns and architectural shadows
- polished stone floor
- one sculptural plinth
- a few understated contemporary art objects
- controlled warm spotlights
- realistic foreground, middle ground, and background depth
- open negative space for Arabic HTML typography
- no readable labels, logos, or text

Use a human eye-level 35mm cinema-lens feeling and an editorial asymmetrical composition.

## 4. Film production set for Services

Create a realistic night film set:

- cinema camera on dolly rails in the foreground or right third
- director chair
- tungsten Fresnel light
- black flags, cases, cables, and restrained production equipment
- burgundy curtain in the background
- reflective dark floor
- warm haze and practical light
- large dark negative space on the left for HTML copy

Create consistent variants for:

- video production
- video editing room with an abstractly lit monitor and no screen text
- photography set with camera and light modifiers
- graphic design wall with blank posters only
- social content setup
- creative campaign storyboard area with blank sheets and no writing

## 5. Partner exhibition wall

Create a wide luxury museum exhibition environment:

- rich burgundy velvet wall
- antique gold architectural trim
- dark marble floor with subtle reflections
- multiple empty ornate frames with completely blank interiors
- museum spotlights above each frame
- red velvet ropes and metallic gold stanchions in the foreground
- clear depth between ropes, displays, and background wall
- one cinematic camera partially visible in the lower foreground, aimed at the exhibition
- shallow depth of field on the nearest camera details
- no logos, text, fake plaques, or artwork

Leave clean interior areas inside every frame for HTML-inserted partner logos. Provide:

- wide 16:9 master
- clean background plate without the foreground camera
- optional transparent camera foreground plate
- optional empty ornate frame with transparency

## 6. Isolated ornate frame overlay

Generate one antique gold museum frame:

- portrait orientation
- transparent PNG background
- carved gold with aged patina
- transparent empty center
- no artwork inside
- minimal perspective distortion
- no baked shadow inside the transparent center

## 7. Isolated pedestal and plaque

Generate reusable isolated museum components:

- dark stone pedestal
- warm edge light
- small blank plaque area
- transparent background where possible
- no text, logo, or number

## 8. Final theatre hallway

Create the closing scene that loops back to the opening:

- long dark theatre hallway
- polished floor
- red carpet toward the background
- giant red velvet curtain at the far end
- curtain moving slightly as if air is passing through
- warm side lights and deep shadows
- clean negative space for HTML contact copy
- no text or logo

## Delivery

For every video, provide a clean first and last frame, no baked-in text, no camera cuts, and motion that can be faded or scrubbed in a web experience.

For every still, provide the high-resolution master and a web-optimized WebP or JPEG, keeping the requested negative space intact.

Use these filenames:

- `curtain-opening-desktop.mp4`
- `curtain-opening-desktop.webm`
- `curtain-opening-mobile.mp4`
- `curtain-opening-mobile.webm`
- `scene-theatre-stage-desktop.webp`
- `scene-theatre-stage-mobile.webp`
- `scene-museum-about-desktop.webp`
- `scene-museum-about-mobile.webp`
- `scene-film-set-desktop.webp`
- `scene-film-set-mobile.webp`
- `scene-partners-wall-desktop.webp`
- `scene-partners-wall-mobile.webp`
- `frame-ornate-gold-portrait.png`
- `pedestal-dark-stone.png`
- `camera-foreground-transparent.png`
- `final-theatre-hallway-desktop.webp`
- `final-theatre-hallway-mobile.webp`

Return every asset as an individual file.

## Negative prompt

No text, no typography, no captions, no subtitles, no logos, no partner names, no watermark, no signage, no UI, no fake letters, no fake numbers, no collage, no split screen, no contact sheet, no generic corporate office, no standard website card, no glassmorphism, no neon cyberpunk, no cartoon, no plastic fabric, no overexposed highlights, no crushed unreadable blacks, no excessive fog, no random objects, no distorted architecture, no duplicated cameras, no malformed ropes, no broken frame geometry.
