# Master Context — Alderleaf Website Rebuild (v3)

**Site:** https://alderleaf.ca/

**Version:** 3 — experimental sandbox. Stable baseline lives in `Alderleaf-v2`. See `VERSION.md`.

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

Do not change:

* Text content unless asked
* Images unless asked
* Colours unless asked
* Section backgrounds unless asked
* Gradients, tints, or overlays unless asked
* Fonts unless asked
* Layout widths unless asked
* Header unless asked
* Footer unless asked
* Navigation unless asked
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

Keep responses short.

Do not give long explanations unless asked.

Do not give multiple options unless asked.

Do not suggest future tasks unless asked.

After making a change, report only:

* what file changed
* what was changed
* whether the requested issue is fixed

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
