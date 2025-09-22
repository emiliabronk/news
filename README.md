# TRS News

Minimal news-only satire site with search and styled like a newspaper.

## How to deploy
1. Create a new GitHub repo, upload all files to root.
2. Settings → Pages → Deploy from branch → main / root.
3. Site will appear at USERNAME.github.io/REPO.

## Add new posts
Make a file in `_posts/` like `2025-09-23-new-story.md`:

```
---
layout: post
title: "Your Headline"
standfirst: "Short summary goes here."
author: "Your Name"
date: 2025-09-23
---
Your story body in Markdown.
```

## Images
Upload into `assets/` and reference as:

```
![alt text](/assets/filename.jpg)
```
