# 工作及生活分享 zp29

因为懒（没技术），所以在这里写一些关于工作或生活有趣或实用的东西。

🌐 **博客地址**: [https://zp29.github.io/blog](https://zp29.github.io/blog)

## 如何写博客

1. 在 `_posts/` 目录下创建 Markdown 文件
2. 文件名格式: `YYYY-MM-DD-标题.md`，例如 `2026-03-11-hello-world.md`
3. 在文件开头添加 front matter:

```markdown
---
title: "文章标题"
date: 2026-03-11
---

正文内容...
```

4. `git add` → `git commit` → `git push`
5. 等待 1-2 分钟，GitHub Actions 自动构建完成后即可访问

## 目录结构

```
blog/
├── _posts/                 # 博客文章放这里
│   └── 2026-03-11-hello-world.md
├── _config.yml             # 站点配置
├── index.md                # 首页
├── archive.md              # 博客目录（按年份列出所有文章）
└── .github/workflows/      # 自动部署配置
```
