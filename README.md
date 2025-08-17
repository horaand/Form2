
# Fantasy Neon Sign Up (HTML + CSS + JS)

Compact neon signup card with animated clouds and glowing frame.

## Structure
```text
fantasy-neon-signup/
├─ index.html
├─ style.css
└─ script.js
```

## Quick Start
1. Put the HTML in `index.html`, CSS in `style.css`, JS in `script.js`.
2. In `<head>` keep the stylesheet link; load JS with `defer`:
```html
<link rel="stylesheet" href="style.css" />
<script src="script.js" defer></script>
```
3. Open `index.html` in a browser.

## script.js (example)
```js
function handleSubmit(event){
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const errors = [];
  if(!name) errors.push("Please enter your name.");
  if(!email.includes("@") || !email.includes(".")) errors.push("Please enter a valid email.");
  if(password.length < 6) errors.push("Password must be at least 6 characters.");

  if(errors.length){ alert(errors.join("\n")); return; }
  alert(`Welcome, ${name}!`);
}
```

## Customize
- **Glow colors**: change `--neon-1/2/3` in `:root`.
- **Glass intensity**: tweak `--glass` and `backdrop-filter`.
- **Card size**: `.fantasy-form { width: min(92vw, 360px); }`.
- **Cloud speed**: adjust `@keyframes drift` duration.

## Notes
- Decorative elements (sun/clouds) are outside the form; the form uses `.neon-card::before/::after` for the animated border.
- Accessibility: labels are placeholders—add `<label>`s for production.

