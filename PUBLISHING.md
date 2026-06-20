# The Agentic Times — Image & Consistency Guide

A quick reference for publishing stories that keep the retro-terminal / blueprint
look cohesive. This is about imagery and consistency, not the click-by-click CMS
process.

## One image per story does everything

Each story has a single **Hero Image** field. That same image is reused, cropped
differently, in several places:

| Where it appears | How it's cropped |
|---|---|
| Article page (top of story) | **Full image, uncropped** — shown at its natural shape |
| Homepage hero + section "lead story" | Cropped to a wide landscape panel |
| Card grids (Perspective, "From the Wire") + "More from" rows | Cropped to **4:3** |
| Story-page sidebar thumbnail | Cropped to a small ~5:4 tile |

Because it gets cropped multiple ways, **keep the subject centered** with a little
breathing room — anything important near an edge can get cut.

## Dimensions

- **Master size: 1600 × 1000 px (16:10), landscape.** Shows full on the article
  page and crops cleanly to 4:3 everywhere else.
- **Minimum: 1280 × 800.** Below this the hero looks soft.
- **Always landscape.** Portrait/square images crop badly in the hero and cards.
- **File size: aim under ~300 KB.** Compressed JPG or WebP for photos, PNG for flat
  illustrations/graphics. Lean files keep the site fast (GitHub Pages serves them directly).

## Visual consistency

- The site **automatically adds a scanline overlay** and sits images on a blue panel —
  no need to add retro effects yourself.
- For a cohesive gallery, keep a **consistent treatment** across stories: the
  blueprint-blue / retro-CRT / pixel-illustration look the design was built around.
  Flat stock photos will feel out of place next to it.
- High-contrast, blue-leaning images read best against the palette.
- **Always add an image.** A story with none shows a `▸ NO_SIGNAL.PNG` placeholder —
  fine as a fallback, but not the goal.

## Text consistency (quick hits)

- **Title:** short and punchy. Departure Mono is wide, so long headlines wrap heavily —
  ~6–10 words looks best on cards.
- **Deck:** this is the excerpt shown on cards (truncated ~28 words there, ~40 in the
  hero). Write 1–2 tight sentences; ~20–30 words so it doesn't cut mid-thought.
- **Read time:** auto-calculated from the body. Only **Perspective** has a manual
  "Read Time" field if you want to override it.
- **Category:** set automatically by which section you create the post in — just start
  the entry in the right collection (Dispatches / Industry / Governance / Coding / Perspective).
- **The homepage hero is always the newest Dispatches post** — make sure your latest
  dispatch has a strong image and headline.
- **Filename convention** (optional but tidy): existing uploads follow
  `at_<section>_<topic>_<DDMMYY>.png` — worth keeping for easy housekeeping.
