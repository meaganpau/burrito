# Burrito Tinder

Build your own burrito and find a match! A Tinder-style burrito builder.

## Local development

This is a static site with no build step — plain HTML/CSS/JS, jQuery, and Tooltipster. Serve it with any local HTTP server:

```
npx serve .
```

or

```
python3 -m http.server 3000
```

Then open the printed local URL (e.g. `http://localhost:3000`) in your browser.

### Don't open `index.html` directly (`file://`)

`index.html` sets its base URL at runtime via a small inline script at the top of `<head>`, so its relative asset paths (`css/main.css`, `img/tortilla.png`, etc.) resolve correctly both on its own and when proxied under `/burrito` in production. That script assumes it's being served over HTTP from the project root — on a `file://` URL it resolves relative paths against your filesystem root instead, breaking every image and stylesheet. Always use a local server as above.

## Deployment

Deployed on Vercel as its own project (currently `burrito-sage.vercel.app`), and also reachable at `meaganpau.com/burrito` via a rewrite rule in the `meaganpau-portfolio` project (see that project's `vercel.json`). The base-URL script in `index.html` is what makes both URLs work from the exact same code, with no build-time configuration needed — it checks `location.pathname` at load time and sets `<base href="/burrito/">` only when actually being served under that prefix.
