---
layout: page
title: 博客目录
permalink: /archive/
---

{% comment %}
  这个页面有两部分：
  1. 顶部「按分类」——把所有用到的 categories 列出来，点击直接跳到对应的分类页或锚点。
  2. 下面「按年份」——保留原来的时间线归档。
{% endcomment %}

## 按分类浏览

{%- assign all_categories = site.categories | sort -%}
{% if all_categories.size > 0 %}
<ul>
{% for cat in all_categories %}
  {%- assign cat_name = cat[0] -%}
  {%- assign cat_posts = cat[1] -%}
  {%- assign cat_slug = cat_name | slugify -%}
  <li>
    <a href="{{ '/' | append: cat_slug | append: '/' | relative_url }}">{{ cat_name }}</a>
    <span style="color:#888;">（{{ cat_posts.size }} 篇）</span>
  </li>
{% endfor %}
</ul>
{% else %}
还没有分类。在文章 front matter 里写 `categories: [分类名]` 就会自动出现在这里。
{% endif %}

## 按年份浏览

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for year in posts_by_year %}
### {{ year.name }}

{% for post in year.items %}
- **{{ post.date | date: "%m-%d" }}** — [{{ post.title }}]({{ post.url | prepend: site.baseurl }})
{% endfor %}
{% endfor %}

{% if site.posts.size == 0 %}
还没有文章，快去 `_posts/` 目录写一篇吧！
{% endif %}
