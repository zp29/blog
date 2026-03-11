---
layout: page
title: 博客目录
permalink: /archive/
---

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for year in posts_by_year %}
## {{ year.name }}

{% for post in year.items %}
- **{{ post.date | date: "%m-%d" }}** — [{{ post.title }}]({{ post.url | prepend: site.baseurl }})
{% endfor %}
{% endfor %}

{% if site.posts.size == 0 %}
还没有文章，快去 `_posts/` 目录写一篇吧！
{% endif %}
