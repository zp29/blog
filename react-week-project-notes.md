# React 一周速通执行手册

这份文档不是博客正文，而是执行手册。

用途有两个：

1. 记录这一周每天要交付什么。
2. 存放示例项目的设计、拆分、练习题和后续扩展方向。

---

## 本周主项目

项目名：`React Learning Dashboard`

定位：一个帮助自己管理学习任务、学习资源和进度统计的 React 小项目。

为什么选它：

- 足够贴近真实产品
- 能覆盖 React 核心知识点
- 不需要先写后端
- 后续可以自然扩展到 Web3 Dashboard

---

## 技术范围

第一周先只用这些：

- React
- Vite
- JavaScript
- React Router
- CSS Modules 或普通 CSS
- Local Storage
- Fetch API

先不要上这些，避免分心：

- Redux
- Zustand
- TypeScript
- Next.js
- Tailwind
- 复杂 UI 库

---

## 每日交付物

## Day 1

交付：

- 初始化 React 项目
- 完成基础页面框架
- 至少拆出 5 个组件

必须出现的组件：

- `Header`
- `DailyGoalCard`
- `TaskList`
- `TaskItem`
- `FilterTabs`

练习题：

- `props` 为什么是单向的？
- 列表渲染为什么需要 `key`？
- 组件拆分的边界应该怎么定？

---

## Day 2

交付：

- 支持新增任务
- 支持删除任务
- 支持切换任务状态
- 支持任务统计

建议状态结构：

```js
const [tasks, setTasks] = useState([
  {
    id: 1,
    title: "Learn JSX",
    done: false,
    priority: "high",
    category: "react"
  }
]);
```

练习题：

- 为什么不能直接 `tasks.push(newTask)`？
- 什么时候应该做状态提升？
- 受控组件解决了什么问题？

---

## Day 3

交付：

- 新增资源列表模块
- 从公开 API 获取数据
- 支持 loading / error / empty
- 支持搜索

推荐可练习的数据源：

- `https://jsonplaceholder.typicode.com/posts`
- `https://jsonplaceholder.typicode.com/users`

建议状态结构：

```js
const [resources, setResources] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const [keyword, setKeyword] = useState("");
```

练习题：

- `useEffect` 为什么容易写出无限循环？
- effect 里为什么经常会出现闭包问题？
- 拉数据时为什么建议把 loading 和 error 显式管理？

---

## Day 4

交付：

- 提取自定义 Hook
- 提取基础 UI 组件
- 清理项目目录

建议抽出的 Hook：

- `useTasks`
- `useLocalStorage`
- `useFetchResources`

建议抽出的 UI 组件：

- `Button`
- `Card`
- `Input`
- `EmptyState`
- `SectionTitle`

练习题：

- 什么逻辑适合抽成 Hook？
- Hook 和普通工具函数的区别是什么？
- 什么是组件组合？

---

## Day 5

交付：

- 加入搜索防抖
- 加入统计信息计算
- 使用 `useRef` 做输入聚焦
- 修复一个 effect 依赖问题

推荐练习：

- 给搜索框做 300ms 防抖
- 给统计卡片做已完成率计算
- 页面加载后自动聚焦输入框

练习题：

- `useRef` 和 `useState` 的区别是什么？
- 为什么有些优化反而会让代码更难维护？
- `useMemo` 适合缓存什么？

---

## Day 6

交付：

- 引入 React Router
- 完成多页面
- 做出统一布局

推荐页面：

- `/` Dashboard
- `/tasks`
- `/resources`
- `/stats`

建议布局结构：

```txt
App
└── AppLayout
    ├── Sidebar
    ├── Topbar
    └── Outlet
```

练习题：

- 页面级组件和通用组件的区别是什么？
- 哪些状态该留在页面层，哪些该下放？
- Router 的价值除了跳页面还有什么？

---

## Day 7

交付：

- 完成主项目
- 做一次代码整理
- 写一次项目复盘
- 准备可继续迭代的版本 2

最终最小可用版本必须具备：

- 可添加 / 删除 / 完成任务
- 可查看学习资源
- 可进行搜索和筛选
- 可看统计数据
- 可在刷新后保留本地数据

加分项：

- 暗黑模式
- 标签过滤
- 排序
- URL 参数同步
- mock Web3 资产面板

---

## 推荐目录

```txt
src/
  components/
    layout/
    tasks/
    resources/
    ui/
  hooks/
  pages/
  services/
  utils/
  styles/
```

---

## 推荐拆分方式

### 1. 任务模块

建议包含：

- 任务列表
- 任务项
- 新增任务表单
- 筛选栏
- 统计卡片

### 2. 资源模块

建议包含：

- 资源搜索框
- 资源列表
- 资源卡片
- 加载态
- 错误态

### 3. 统计模块

建议包含：

- 总任务数
- 已完成数
- 完成率
- 今日目标

---

## 示例项目 V2 方向

当第一周完成后，可以把这个项目升级成 Web3 方向：

项目名建议：`React Web3 Study Dashboard`

扩展模块：

- Wallet 输入区
- Token Watchlist
- Gas Tracker
- Mock Portfolio

到那时再逐步接入：

- `viem`
- `wagmi`
- 钱包连接
- 链上读数据

---

## 本周每天的学习节奏

建议时间块：

- `09:00 - 11:30` 学概念 + 小练习
- `14:00 - 18:00` 做主项目
- `20:00 - 21:00` 复盘 + 记录 bug + 总结

---

## 每日复盘模板

每天结束后补这段：

```md
## Day X 复盘

今天完成了：

遇到的问题：

我搞懂了什么：

我还没搞懂什么：

明天第一件事：
```

---

## 下一步我们可以直接做什么

如果你要我继续带着学，最顺的节奏是：

1. 我先帮你在这个仓库里把 Day 1 的 React 学习笔记继续细化。
2. 然后我给你直接生成一个 `Vite + React` 的项目脚手架方案。
3. 再按 Day 1 到 Day 7，每天给你布置“讲解 + 练习 + 小作业 + 项目推进”。

从现在开始，这份文件就当成你的 React 冲刺总控台。
