# TRS News (fixed with baseurl)

Deployable satire news site with working CSS under /news.

## Steps
1. Upload all files to a new repo named `news`.
2. Settings → Pages → Deploy from branch → main/root.
3. Site will appear at https://emiliabronk.github.io/news/

## Add new posts
Create `_posts/YYYY-MM-DD-title.md`:

```
---
layout: post
title: "Your Headline"
standfirst: "Short summary."
author: "Name"
date: 2025-09-23
---
Body of your story in Markdown.
```
