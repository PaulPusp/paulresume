# Language Switch Fix

The language dropdown was visible but the page did not translate because `script.js`
called `applyLanguage()` before the `projectDetails` constant was initialized.

In JavaScript, checking `typeof projectDetails` before a later `const projectDetails`
declaration can still trigger a Temporal Dead Zone error. That stopped the script
before the dropdown event listener could work.

Fixed by:
1. Adding a safe `projectDetailsReady` flag.
2. Replacing the unsafe `typeof projectDetails` check.
3. Enabling project-detail translation only after `projectDetails` is initialized.

Upload/replace the full folder, or at minimum replace `script.js`.
