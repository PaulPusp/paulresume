# Multilingual feature added

This version adds English / Chinese / French switching.

## Behavior

- Visitors from China are shown Chinese by default when the browser language is Chinese or the timezone is detected as a China-region timezone.
- Visitors using French browser settings or French-region timezones are shown French by default.
- Everyone else sees English by default.
- Manual selection is saved in `localStorage`, so the visitor's choice remains on the next visit.

## Important limitation

This is a static GitHub Pages website. It does not run a backend and should not use invasive IP geolocation.
The implementation uses privacy-safe browser language and timezone detection.

## Files changed

- `index.html`: added language selector and translation keys.
- `styles.css`: added language selector styles.
- `script.js`: added detection logic and translation dictionary.
