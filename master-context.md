# Master Context — Alderleaf Website Rebuild (v3)

**Site:** https://alderleaf.ca/

**Version:** 3 — experimental sandbox. Stable baseline lives in `Alderleaf-v2`. See `VERSION.md`.

## New to this? Start here

This section is for you if you are learning to work with Cursor (the AI editor) on this website. Use plain steps; ignore jargon until you need it.

### What the main files are

| File or folder | What it is |
|----------------|------------|
| `index.html` | Home page |
| `about.html`, `services.html`, `gallery.html`, `quote.html`, `contact.html` | Other pages — **one file per page** |
| `css/styles.css` | Shared styles — changes here can affect **many pages at once** |
| `assets/images/` | Photos and logos |
| `design-reference.md` | Notes on how things should look; some parts say **LOCKED** (do not change without saying so) |
| `master-context.md` | Full project rules (this file) |
| `.cursor/rules/` | Short rules Cursor reads automatically every time you chat |

**Stable backup:** If v3 gets messy, `Alderleaf-v2` on GitHub is the last known-good copy.

### Baby steps — asking for one change

1. **Pick one thing** — e.g. "About page banner" not "fix all banners."
2. **Open chat in Cursor** and describe it in plain English.
3. **Add scope** (copy this and change the page name):

   > Scope: `about.html` only. Do not change other pages, the menu, the footer, or shared banner CSS.

4. **Send one request.** Wait for the answer. Open the site in your browser and check **that page only**.
5. **Happy?** Move to the next task in a **new message**. **Not happy?** Say what still looks wrong — on which page — before asking for something else.

### Baby steps — checking after the agent works

1. Refresh the page you cared about in the browser.
2. Click through **one or two other pages** you did **not** ask to change — they should look the same as before.
3. If something else changed, say: "You changed [page/section] but I only asked for [X]. Please undo that."

### Baby steps — if the wrong things changed (undo)

You do not have to fix the code yourself. In chat you can say:

> "Revert everything except `about.html`" (use your actual page name)

Or ask the agent to use git to put files back. **Uncommitted changes** can often be undone file by file. If you are unsure, say: "I only wanted About changed — please help me undo the rest."

### Words you might see

| Term | Plain meaning |
|------|----------------|
| **Scope** | Which files/pages are allowed to change |
| **Drift** | The site changing in places you did not ask about |
| **Shared CSS** | Styles in `styles.css` used on more than one page |
| **LOCKED** | That design is finished — do not change unless you name it |
| **HTML file** | One page of the website |

### For the agent — every task in order

1. Read what the user asked and any **Scope** line.
2. Check `design-reference.md` if the task touches a banner or layout.
3. Say which files you will edit **before** editing (see `change-control.mdc`).
4. Make the **smallest** change that fixes the one request.
5. Stop. Say which file(s) changed and what you did. Do not start the next job.

---

## Project Direction

This is a fresh rebuild of the Alderleaf website.

The new site should feel **impressive** compared to the current live site, while remaining **professional** and **approachable**.

Do not use Vite.

Do not use Astro.

Do not use React.

Do not use a build system unless specifically requested.

Use simple, plain HTML and CSS first.

The goal is a clean, professional, mobile-friendly small business website that is easy to understand, easy to edit, and easy to maintain.

## Core Rules

Follow the user's instructions exactly.

Do only what is specifically asked.

Do not invent, redesign, refactor, restructure, optimize, modernize, or expand the task unless specifically requested.

Do not make assumptions.

If something is unclear, stop and ask one short question before changing anything.

## Workflow Rules

Work one task at a time.

**Step-by-step for each task:**

1. Read the user's message — especially any **Scope** line (which page/file is allowed).
2. Decide which **one** problem you are solving; do not add extra fixes.
3. List the file(s) you will touch **before** you edit them.
4. Make the smallest change that solves that one problem.
5. Stop. Tell the user what changed. Do not continue to the next problem unless they ask.

Before changing files, identify the exact task being done.

Make the smallest change needed.

Do not change unrelated files.

Do not bundle multiple fixes together.

Do not continue into the next task unless the user asks.

## Design Rules

Create beautiful, clean, user-friendly websites that work well on mobile.

Use plain language.

Use consistent spacing, readable text, strong contrast, and simple navigation.

Do not overcomplicate layouts.

Do not use hidden JavaScript injection for header, footer, navigation, or main content.

Header, footer, and page content should be real HTML.

## Technical Direction

Preferred setup:

* Plain HTML files
* Tailwind CSS for layout and styling
* One supplementary CSS file (`css/styles.css`) for custom styles Tailwind does not cover
* Optional small JavaScript file only if needed
* Local image assets
* No hotlinked images
* No unnecessary dependencies
* No framework unless specifically approved

### Tailwind Rules

Tailwind is approved for this project.

Use Tailwind utility classes directly in HTML.

Prefer Tailwind for spacing, layout, typography, responsive breakpoints, and common UI patterns.

Use `css/styles.css` only for custom styles, brand tokens, or effects that are awkward with utilities alone.

Do not add Vite, Astro, React, or other frameworks to use Tailwind.

Use the Tailwind standalone CLI or Play CDN unless the user approves a different setup.

Keep the file structure simple.

Suggested structure:

```
/alderleaf
  index.html
  services.html
  about.html
  contact.html
  /assets
    /images
  /css
    styles.css
  /js
    main.js
```

## Strict Change Control

**Enforced in every session:** `.cursor/rules/change-control.mdc` (file allowlist, shared CSS protection, LOCKED sections, pre-flight declaration). Read it before editing.

**Locked design:** `design-reference.md` — sections marked **LOCKED** must not change unless the user names that section in the request. **Header & desktop nav are LOCKED** (June 2026).

Do not change:

* Text content unless asked
* Images unless asked
* Colours unless asked
* Section backgrounds unless asked
* Gradients, tints, or overlays unless asked
* Fonts unless asked
* Layout widths unless asked
* Header unless asked — **LOCKED** (logo, nav, CTA, mobile menu; see `design-reference.md`)
* Footer unless asked
* Navigation unless asked — **LOCKED** (part of header; see `design-reference.md`)
* Mobile layout unless asked
* File names unless asked
* Folder structure unless asked

When asked to style one section only (banner, hero, intro, etc.):

* Change only that section’s CSS selector or HTML class.
* Do not extend the same background, gradient, or tint to adjacent sections or the page body.
* Example: a green gradient on a contact banner must stay on the banner — not spill into the main content area below.

## Visual Work Rules

When fixing a visual issue:

1. Identify the exact issue.
2. Find the exact CSS selector or HTML section causing it.
3. Change only that issue.
4. Stop.

Do not fix multiple visual issues at once.

Do not redesign when asked to adjust.

Do not replace a section when asked to modify it.

Do not make "helpful improvements" that were not requested.

## Image Rules

Use local images only.

Do not hotlink images from the live website.

Do not crop important parts of images awkwardly.

When using service cards, keep image sizes consistent.

Use `object-fit` and `object-position` carefully.

Do not darken, tint, filter, or overlay images unless specifically asked.

## Mobile Rules

Mobile must be clean and easy to use.

Check mobile layout before considering a page complete.

Navigation must work from anywhere on the page.

Mobile menu must not hide links off-screen.

Text must be readable without zooming.

Buttons must be easy to tap.

Images must not create horizontal scrolling.

## Communication Rules

Keep responses short and in **plain language** unless the user asks for technical detail.

Do not give long explanations unless asked.

Do not give multiple options unless asked.

Do not suggest future tasks unless asked.

After making a change, report only:

* which file(s) changed (use plain page names too, e.g. "About page — `about.html`")
* what you changed, in simple terms
* whether the thing they asked for is fixed

If you are about to touch more than one page or shared CSS, say so first and wait if the rules require it.

## Approval Rules

Ask for approval before:

* Changing stack
* Adding JavaScript
* Adding dependencies
* Changing layouts globally
* Changing design direction
* Replacing images
* Renaming files
* Moving files
* Refactoring

## Stop Conditions

Stop after completing the exact requested task.

Do not continue polishing.

Do not start the next issue.

Do not make additional improvements.

When uncertain, ask one focused question and wait.
