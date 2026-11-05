# KC Galaxy Management Company — Static HTML Website

A clean static HTML rebuild of [kcgalaxy.com](https://kcgalaxy.com) (converted from WordPress).
No WordPress, no database, no build step — plain HTML, CSS and JavaScript that can be hosted anywhere.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home — about, expertise, process, story, counters |
| `about.html` | About Us |
| `leadership.html` | Leadership Team — 4 executives + 11 team members |
| `locations.html` | Our Locations — all 49 properties by category |
| `contact.html` | Contact Us — details, map and feedback form |

Assets (styles, script, images) are in `assets/`.

## View it locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Publish with GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repository: **Settings → Pages → Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The site goes live at `https://<username>.github.io/<repo-name>/`.

## Contact form — one-time activation

The form on `contact.html` sends submissions to **info@kcgalaxy.com** through
[FormSubmit](https://formsubmit.co). The **first** submission sends a confirmation
email to info@kcgalaxy.com — click the confirmation link in that email once, and
all later submissions arrive as email. No account or API key is needed.

To send the form to a different email address instead, change the `action`
attribute of the `<form>` in `contact.html`.

## Notes

- Content, addresses and photos were carried over from the live WordPress site.
- Leftover WordPress theme demo content (demo news posts, events, services and
  template pages that were never linked in the menu) was intentionally dropped.
- The Mission page on the old site contained unrelated theme demo text, so it
  was not rebuilt.
