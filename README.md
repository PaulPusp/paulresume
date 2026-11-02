# Puspendu Biswas Paul — Recruiter Portfolio Website

Static GitHub Pages portfolio for Puspendu Biswas Paul, built from the supplied CV content.

## Files

- `index.html` — semantic single-page portfolio.
- `styles.css` — responsive recruiter-facing visual design.
- `script.js` — theme toggle, mobile navigation, publication filters, copy email, print profile, and project detail modal.
- `assets/site-preview.svg` — lightweight social/preview image.
- `.nojekyll` — keeps GitHub Pages from applying Jekyll processing.

## Deployment

Use GitHub Pages with:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/root`

Expected Pages URL after GitHub Pages is enabled:

`https://paulpusp.github.io/paulresume/`

## Editing rule

Do not turn this site back into a raw CV dump. Keep the recruiter-facing structure: headline value, evidence projects, skill stack, publications, and contact.


## Research & industry engagement gallery (November 2026)

The site now has an **Engagement** navigation link and a photo-story section with 12 entries: research communication (4), China space-industry visits (5), and Bangladesh agency exchanges (3).

The gallery uses one **4 × 3 image sprite** at `assets/engagement-sprite.avif`. The order is fixed:

| Sprite cell | Activity |
| --- | --- |
| 1 | China Weather |
| 2 | Bengal Delta discussion |
| 3 | FutureSpace |
| 4 | Satellite-services organization (name not independently confirmed) |
| 5 | MINOSPACE |
| 6 | PIESAT |
| 7 | Galactic Energy |
| 8 | Research presentation at Beihang |
| 9 | Beihang M.S. graduation |
| 10 | FFWC |
| 11 | SRDI |
| 12 | BWDB |

Source photographs were provided by the site owner. Card text deliberately distinguishes exposure, meetings and potential cooperation from formal contracts or technical mission-operations experience.

**Publishing gate:** Upload the file `assets/engagement-sprite.avif` before merging the gallery branch. The stylesheet expects this exact filename. The provided ZIP `portfolio_photo_asset_for_github.zip` contains the prepared sprite. Do not deploy with missing photo media.

Multilingual labels and descriptions are included in the existing Chinese, French and Bengali language switcher. The original research, projects, publications and contact sections remain in place.
