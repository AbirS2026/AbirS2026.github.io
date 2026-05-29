# Abir Academic Website Template

This is a custom GitHub Pages + Jekyll academic website.

## Publish without terminal

1. Create a GitHub repository named `as4458.github.io` or `yourusername.github.io`.
2. Download this folder and unzip it.
3. On GitHub, open the repository and click **Add file → Upload files**.
4. Drag all files and folders from inside this template folder into GitHub.
5. Commit the upload.
6. Go to **Settings → Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**.
8. Choose branch `main` and folder `/root`, then save.
9. Wait 1–3 minutes. Your site should appear at `https://yourusername.github.io`.

## Edit basics

- Homepage: `index.md`
- Research page: `research.md`
- Writing/blog page: `writing.md`
- Teaching page: `teaching.md`
- CV page: `cv.md`
- Blog posts: `_posts/YYYY-MM-DD-title.md`
- Styling: `assets/css/style.css`
- Theme toggle: `assets/js/theme.js`
- Profile image: replace `assets/img/profile.svg` with your own image and update the link in `index.md` if needed.
- CV: upload your PDF as `files/cv.pdf`.

## Blog post naming rule

Jekyll posts must be named like:

`2026-05-29-my-post-title.md`

with this header:

```
---
layout: post
title: "My post title"
date: 2026-05-29
categories: [econometrics, notes]
---
```
