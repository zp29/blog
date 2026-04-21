# 工作及生活分享 zp29

因为懒（没技术），所以在这里写一些关于工作或生活有趣或实用的东西。

🌐 **博客地址**: [https://zp29.github.io/blog](https://zp29.github.io/blog)

## 如何写博客

1. 在 `_posts/` 目录下创建 Markdown 文件
2. **文件名格式必须是** `YYYY-MM-DD-标题.md`，例如 `2026-03-11-hello-world.md`
   - ⚠️ 这是 Jekyll 的硬性要求，不符合命名格式的文件**不会出现在博客上**
   - 子目录里的文件（比如 `_posts/Learning demo/xxx.md`）同样需要这种命名格式
3. 在文件开头添加 front matter：

```markdown
---
title: "文章标题"
date: 2026-03-11
categories: [Learning demo]   # 可选，给文章分类
---

正文内容...
```

4. `git add` → `git commit` → `git push`
5. 等待 1-2 分钟，GitHub Actions 自动构建完成后即可访问

## 分类（categories）

如果想把某一类文章单独归集到一个目录里（比如「Learning demo」），按以下步骤：

1. **给文章打分类标签**：在 front matter 加 `categories: [分类名]`
2. **（可选）把相关文章放到同名子目录**：例如 `_posts/Learning demo/2025-10-19-react-core-concepts.md`
   - 子目录只是为了本地管理方便，Jekyll **不会**根据目录名自动分类
   - 真正决定分类的，是 front matter 里的 `categories` 字段
3. **为分类建一个索引页**：在项目根目录新建 `分类slug.md`，参考 `learning-demo.md` 的写法即可
   - minima 主题会自动把根目录下所有带 `title` 的页面放到顶部导航栏

## 目录结构

```
blog/
├── _posts/                           # 博客文章放这里
│   ├── 2026-03-11-hello-world.md     # 普通文章
│   └── Learning demo/                # 分类子目录（仅用于本地整理）
│       └── 2025-10-19-react-core-concepts.md
├── _config.yml                       # 站点配置
├── _layouts/post.html                # 文章页布局（自定义了目录侧边栏）
├── _includes/                        # 可复用的模板片段
├── index.md                          # 首页
├── archive.md                        # 博客目录（按分类 + 按年份）
├── learning-demo.md                  # Learning demo 分类索引页
├── about.md                          # 关于页
└── .github/workflows/                # 自动部署配置
```
