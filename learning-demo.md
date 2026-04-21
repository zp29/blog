---
# 这是一个「分类索引页」，专门列出 Learning demo 分类下的所有文章
# layout: page 表示使用 minima 主题里的普通页面布局（带站点头/尾）
# permalink: 定义这个页面的访问 URL，访问 /learning-demo/ 就能打开它
layout: page
title: Learning demo
permalink: /learning-demo/
---

这里收集我在学习过程中做的 demo 和笔记，按时间倒序排列。

{% comment %}
  Jekyll 会自动根据每篇 post 的 front matter 中 `categories` 字段，
  把文章归入 site.categories 这个对象。访问方式是 site.categories["分类名"]。
  因为我们的分类名叫 "Learning demo"（带空格），所以用方括号+字符串写法最稳。
{% endcomment %}

{% assign posts = site.categories["Learning demo"] %}

{% if posts and posts.size > 0 %}
  <ul class="post-list">
  {% for post in posts %}
    <li>
      {%- assign date_format = site.minima.date_format | default: "%Y-%m-%d" -%}
      <span class="post-meta">{{ post.date | date: date_format }}</span>
      <h3>
        <a class="post-link" href="{{ post.url | relative_url }}">
          {{ post.title | escape }}
        </a>
      </h3>
      {%- if post.excerpt -%}
        <p>{{ post.excerpt | strip_html | truncate: 120 }}</p>
      {%- endif -%}
    </li>
  {% endfor %}
  </ul>
{% else %}
  还没有 Learning demo 分类的文章，快去写一篇吧！
  
  > 新手提示：在 `_posts/Learning demo/` 目录下新建 `YYYY-MM-DD-标题.md`，
  > 然后在文件开头的 front matter 里加上 `categories: [Learning demo]` 就会自动出现在这里。
{% endif %}
