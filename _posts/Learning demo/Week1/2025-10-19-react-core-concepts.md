---
layout: post
title: React 核心概念速通（Vue 开发者视角）
date: 2025-10-19
categories: [Learning demo]
---

> 目标：用你熟悉的 Vue 概念作为参照，快速打通 React 的核心知识。

---

## 一、组件：从 `.vue` 到 `.jsx` / `.tsx`

### Vue（单文件组件 SFC）
Vue 把一个组件的模板、脚本、样式放在同一个 `.vue` 文件里，结构清晰但文件类型特殊。

```vue
<!-- Vue: 一个单文件组件 Counter.vue -->
<template>
  <!-- 模板区：写 HTML-like 的模板语法 -->
  <div class="counter">
    <p>Count: {{ count }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script setup>
// 脚本区：写 JavaScript 逻辑
import { ref } from 'vue'

// ref = 创建响应式数据（类似 React 的 useState）
const count = ref(0)

function increment() {
  count.value++
}
</script>

<style scoped>
/* 样式区： scoped 表示只作用于本组件 */
.counter { color: #333; }
</style>
```

### React（函数组件 + JSX）
React 没有特殊的文件类型，**组件就是一个返回 JSX 的 JavaScript 函数**。

```jsx
// React: 一个函数组件 Counter.jsx
// 导入 React 核心 API（useState 是管理状态的 Hook）
import { useState } from 'react'

// 组件名必须大写开头（这是 React 识别自定义组件的规则）
function Counter() {
  // useState(0) = 创建状态，返回 [当前值, 修改函数]
  // 用数组解构赋值获取 count 和 setCount
  const [count, setCount] = useState(0)

  // 定义事件处理函数
  function handleClick() {
    // ❌ 不能直接 count++，必须用 setCount 修改
    // ✅ React 状态是不可变的：要传入新值，而不是修改旧值
    setCount(count + 1)
  }

  // 返回值是 JSX（JavaScript XML 语法）
  // 注意：不是字符串！经过编译后变成 JavaScript 对象
  return (
    <div className="counter">
      <p>Count: {count}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  )
}

export default Counter
```

> **核心对比**
> | 概念 | Vue | React |
> |------|-----|-------|
> | 文件类型 | `.vue` 特殊格式 | `.jsx` / `.tsx` 普通 JS 文件 |
> | 模板语法 | `<template>` 区 | JSX（在 JS 里写 HTML） |
> | 样式 | `<style scoped>` | 需要 CSS Modules / styled-components 等方案 |
> | 响应式 | `ref()` / `reactive()` | `useState()` + 不可变更新 |
> | 变量渲染 | `{{ count }}` | `{count}` |

---

## 二、JSX：在 JavaScript 里写“模板”

JSX 不是字符串，也不是 HTML，它是 JavaScript 的语法扩展。编译后变成 `React.createElement()` 调用。

```jsx
// JSX 本质：会被编译成 JavaScript 函数调用
// <div className="box">Hello</div>
// 编译后 ≈ React.createElement('div', { className: 'box' }, 'Hello')

function Greeting({ name, isAdmin }) {
  // 1. 插值：用 {} 包裹任意 JS 表达式
  // Vue: {{ name.toUpperCase() }}
  // React: {name.toUpperCase()}
  const upperName = name.toUpperCase()

  // 2. class 要写成 className（因为 class 是 JS 保留字）
  // Vue: class="active"
  // React: className="active"

  // 3. 条件渲染：三目运算符 || 逻辑与
  // Vue: v-if="isAdmin" 或 v-show="isAdmin"
  // React: 直接用 JS 表达式
  return (
    <div className="greeting">
      {/* 条件渲染：三目运算符 */}
      {isAdmin ? <span>管理员</span> : <span>访客</span>}

      {/* 条件渲染：逻辑与（只有 true 才渲染后面） */}
      {isAdmin && <AdminPanel />}

      {/* 列表渲染：用 map 返回数组 */}
      {/* Vue: v-for="item in list" :key="item.id" */}
      {/* React: list.map(item => <li key={item.id}>...</li>) */}
      <ul>
        {[1, 2, 3].map(num => (
          <li key={num}>第 {num} 项</li>
        ))}
      </ul>

      <h1>Hello, {upperName}!</h1>
    </div>
  )
}
```

> **注意**：JSX 里 `{}` 只能放**表达式**，不能放语句（如 `if`、`for`）。
> 如果需要条件判断，提前在函数里处理好，或改用三目/逻辑与运算符。

---

## 三、Props：父子通信

### Vue 版（defineProps）

```vue
<script setup>
// Vue 3 组合式 API：用 defineProps 声明接收的属性
const props = defineProps({
  title: String,
  count: { type: Number, default: 0 }
})

console.log(props.title) // 读取 props（是响应式的）
</script>
```

### React 版

```jsx
// React 没有 defineProps，props 就是函数的第一个参数对象
// 可以用解构直接取出需要的属性
function Child({ title, count = 0 }) {
  // ✅ props 是只读的！不能修改 title 或 count
  // 如果要改，应该通知父组件改（通过回调函数）

  return (
    <div>
      <h2>{title}</h2>
      <p>数量: {count}</p>
    </div>
  )
}

// 父组件中使用
function Parent() {
  return (
    <div>
      {/* 传值：和 Vue 类似，直接用属性名 */}
      <Child title="商品列表" count={5} />

      {/* 字符串值可以省略花括号，其他类型必须加 {} */}
      <Child title="纯字符串" />
    </div>
  )
}
```

> **核心对比**
> - Vue: `defineProps` 声明 + 自动响应式 + 可设默认值
> - React: 函数参数直接接收 + 用解构取属性 + 默认值在解构中设置

---

## 四、State 状态管理

### Vue 响应式：`ref` 和 `reactive`

```vue
<script setup>
import { ref, reactive } from 'vue'

// ref：包装任意类型，用 .value 读写
const count = ref(0)
console.log(count.value) // 读取：0
count.value++            // 修改：1

// reactive：只包装对象（自动代理属性）
const user = reactive({ name: 'Tom', age: 20 })
user.age++  // 直接改属性，自动响应
</script>
```

### React 响应式：`useState`

```jsx
import { useState } from 'react'

function Counter() {
  // useState(初始值) 返回数组：[当前值, 修改函数]
  // 用解构赋值取：count = 当前值，setCount = 修改函数
  const [count, setCount] = useState(0)

  function add() {
    // ❌ 错误：直接改不会触发重新渲染
    // count++

    // ✅ 正确：调用 setXxx 传入新值（不可变更新）
    setCount(count + 1)

    // ⚠️ 注意：setCount 是异步的，不会立即改变 count
    console.log(count) // 这里还是旧值！
  }

  // 基于旧值更新时，用回调函数更安全
  function addSafe() {
    // prevCount 一定是当前最新值
    setCount(prevCount => prevCount + 1)
  }

  // 对象状态也要遵循不可变原则：创建新对象，不要修改原对象
  const [user, setUser] = useState({ name: 'Tom', age: 20 })

  function grow() {
    // ❌ 错误：直接修改原对象
    // user.age++

    // ✅ 正确：展开运算符创建新对象
    setUser({ ...user, age: user.age + 1 })

    // 或者用回调
    // setUser(prev => ({ ...prev, age: prev.age + 1 }))
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={add}>+1</button>
      <p>{user.name} 今年 {user.age} 岁</p>
      <button onClick={grow}>长大一岁</button>
    </div>
  )
}
```

> **核心差异**
> | | Vue | React |
> |--|-----|-------|
> | 声明 | `const count = ref(0)` | `const [count, setCount] = useState(0)` |
> | 读取 | `count.value` | `count` |
> | 修改 | `count.value = 1` | `setCount(1)` |
> | 更新方式 | 可变（直接修改属性） | 不可变（传入新值/新对象） |
> | 响应式原理 | Proxy 代理 | 重新执行组件函数 |

---

## 五、事件处理

### Vue

```vue
<template>
  <!-- 事件修饰符：@click.prevent 阻止默认行为 -->
  <form @submit.prevent="handleSubmit">
    <input @input="e => text = e.target.value" />
    <button @click.stop="doSomething">点我</button>
  </form>
</template>
```

### React

```jsx
function FormDemo() {
  function handleSubmit(event) {
    // ❌ React 没有 .prevent 修饰符，要手动调用
    event.preventDefault()
    console.log('表单提交被阻止')
  }

  const [text, setText] = useState('')

  return (
    <form onSubmit={handleSubmit}>
      {/* onChange 在 React 里是受控组件的标准写法 */}
      {/* 每输入一个字符，就会触发 onChange，更新 state，再渲染 input */}
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />

      {/* 原生 DOM 事件对象 event 需要手动调用 stopPropagation */}
      <button onClick={e => {
        e.stopPropagation()
        doSomething()
      }}>
        点我
      </button>
    </form>
  )
}
```

> **对比**
> - Vue: `@click.prevent` 等修饰符简洁
> - React: 传原生事件对象 `event`，需要手动调用 `preventDefault()` / `stopPropagation()`

---

## 六、生命周期 / 副作用

### Vue（组合式 API 生命周期钩子）

```vue
<script setup>
import { onMounted, onUnmounted, watch } from 'vue'

// onMounted = 组件挂载到 DOM 后执行
onMounted(() => {
  console.log('组件挂载了！')
  // 常见用途：发请求、操作 DOM、订阅事件
})

// onUnmounted = 组件卸载前执行（清理副作用）
onUnmounted(() => {
  console.log('组件即将卸载')
  // 常见用途：取消订阅、清除定时器
})

// watch = 监听某个值的变化
import { ref, watch } from 'vue'
const count = ref(0)
watch(count, (newVal, oldVal) => {
  console.log(`count 变了: ${oldVal} -> ${newVal}`)
})
</script>
```

### React（useEffect）

`useEffect` 一个 Hook 承担了 Vue 中 `onMounted`、`onUpdated`、`onUnmounted`、`watch` 的所有职责。

```jsx
import { useState, useEffect } from 'react'

function UserProfile({ userId }) {
  const [user, setUser] = useState(null)

  // useEffect(副作用函数, 依赖数组)
  // 依赖数组决定什么时候重新执行副作用
  useEffect(() => {
    // ============ 这部分 ≈ Vue onMounted ============
    console.log('副作用执行了')

    let isCancelled = false // 取消标志，防止竞态条件

    // 发请求
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        if (!isCancelled) setUser(data)
      })

    // 订阅示例（如 WebSocket）
    // const ws = new WebSocket('...')

    // ============ return 的函数 ≈ Vue onUnmounted ============
    // 组件卸载或依赖变化前，React 会先调用清理函数
    return () => {
      isCancelled = true
      console.log('清理副作用')
      // ws.close()
    }
  }, [userId])
  // ☝️ 依赖数组：
  // []        = 只执行一次（≈ onMounted）
  // [userId]  = userId 变化时重新执行（≈ watch + onMounted）
  // 不写      = 每次渲染都执行（一般不用）

  return <div>{user?.name || '加载中...'}</div>
}
```

> **useEffect 依赖数组总结**
> | 写法 | 行为 | 类比 Vue |
> |------|------|----------|
> | `useEffect(fn, [])` | 只执行一次（挂载时） | `onMounted` |
> | `useEffect(fn, [a])` | a 变化时执行 | `watch(a, ...)` |
> | `useEffect(fn)` | 每次渲染都执行 | 少用 |
> | `return () => {}` | 清理函数 | `onUnmounted` |

---

## 七、计算属性 vs useMemo

### Vue（computed）

```vue
<script setup>
import { ref, computed } from 'vue'
const firstName = ref('张')
const lastName = ref('三')

// computed = 缓存计算结果，只有依赖变化时才重新计算
const fullName = computed(() => {
  console.log('重新计算 fullName')
  return firstName.value + lastName.value
})
</script>
```

### React（useMemo）

```jsx
import { useState, useMemo } from 'react'

function NameDisplay() {
  const [firstName, setFirstName] = useState('张')
  const [lastName, setLastName] = useState('三')
  const [age, setAge] = useState(20)

  // useMemo(计算函数, 依赖数组)
  // 只有依赖变化时才重新计算，避免不必要的重算
  const fullName = useMemo(() => {
    console.log('重新计算 fullName')
    return firstName + lastName
  }, [firstName, lastName])
  // ☝️ age 变了不会触发重新计算

  return (
    <div>
      <p>全名: {fullName}</p>
      <p>年龄: {age}</p>
      <button onClick={() => setAge(age + 1)}>长大一岁</button>
    </div>
  )
}
```

> **对比**
> - Vue: `computed()` 自动追踪依赖，写法更简洁
> - React: `useMemo()` 需要手动声明依赖数组，更容易出错（忘记加依赖）

---

## 八、模板引用 / DOM 操作

### Vue（ref 属性）

```vue
<template>
  <!-- ref="inputEl" 绑定到 script 里的同名 ref -->
  <input ref="inputEl" />
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 创建一个 ref，和模板里的 ref="inputEl" 绑定
const inputEl = ref(null)

onMounted(() => {
  // 挂载后通过 .value 访问真实 DOM
  inputEl.value.focus()
})
</script>
```

### React（useRef）

```jsx
import { useRef, useEffect } from 'react'

function InputDemo() {
  // useRef(null) 创建一个可变的引用对象
  // inputRef.current 指向真实的 DOM 节点
  const inputRef = useRef(null)

  useEffect(() => {
    // DOM 操作放在 useEffect 里，确保组件已挂载
    inputRef.current?.focus()
  }, []) // [] = 只执行一次

  return (
    <div>
      {/* ref={inputRef} 把 DOM 节点绑定到这个引用 */}
      <input ref={inputRef} type="text" />
    </div>
  )
}
```

> **注意**：`useRef` 和 `useState` 的区别
> - `useState`: 变化会触发重新渲染
> - `useRef`: `.current` 变化**不会**触发重新渲染，适合保存定时器 ID、DOM 引用等不需要 UI 响应的值

---

## 九、Context：跨层级传数据

当你不想逐层 props 传递（prop drilling）时：

### Vue（provide / inject）

```vue
<!-- 祖先组件 -->
<script setup>
import { provide, ref } from 'vue'
const theme = ref('dark')
provide('theme', theme)
</script>

<!-- 深层后代组件 -->
<script setup>
import { inject } from 'vue'
const theme = inject('theme')
</script>
```

### React（createContext + useContext）

```jsx
import { createContext, useContext, useState } from 'react'

// 1. 创建上下文对象（一般放在单独文件里）
const ThemeContext = createContext('light') // 默认值

// 2. Provider 组件：提供数据
function App() {
  const [theme, setTheme] = useState('dark')

  return (
    // value 里放要传递的数据
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

// 3. 后代组件消费数据（不用一层层传 props）
function Toolbar() {
  return <ThemeButton />
}

function ThemeButton() {
  // useContext(上下文对象) 取出 provider 传递的值
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      当前主题: {theme}
    </button>
  )
}
```

---

## 十、自定义 Hooks vs Vue Composables

把可复用逻辑抽离成函数：

### Vue Composable

```js
// useCounter.js
import { ref } from 'vue'

export function useCounter(initial = 0) {
  const count = ref(initial)
  const add = () => count.value++
  const sub = () => count.value--
  return { count, add, sub }
}
```

### React Custom Hook

```jsx
// useCounter.js
import { useState, useCallback } from 'react'

// 自定义 Hook 命名规范：必须以 use 开头
// 这样 React 才能识别它并应用 Hooks 规则（如只能在顶层调用）
export function useCounter(initial = 0) {
  const [count, setCount] = useState(initial)

  // useCallback = 缓存函数引用，避免子组件不必要的重渲染
  const add = useCallback(() => setCount(c => c + 1), [])
  const sub = useCallback(() => setCount(c => c - 1), [])

  return { count, add, sub }
}

// 在组件中使用
function CounterA() {
  const { count, add } = useCounter(10)
  return <button onClick={add}>A: {count}</button>
}

function CounterB() {
  const { count, add } = useCounter(100)
  return <button onClick={add}>B: {count}</button>
}
```

---

## 十一、React 独有的核心规则

### 1. Hooks 规则（必须牢记！）

```jsx
function MyComponent() {
  // ✅ 正确：Hooks 只能在组件顶层调用
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  if (count > 0) {
    // ❌ 错误：不能在 if/for/函数里调用 Hook
    // useEffect(() => {}, [])
  }

  // ✅ 正确：可以按条件执行副作用，但 useEffect 本身必须放在顶层
  useEffect(() => {
    if (count > 0) {
      console.log('count > 0')
    }
  }, [count])

  return <div>...</div>
}
```

> **两条铁律**：
> 1. 只在最顶层调用 Hook，不要在循环、条件或嵌套函数中调用
> 2. 只在 React 函数组件或自定义 Hook 中调用 Hook

### 2. 状态不可变性（Immutability）

```jsx
const [items, setItems] = useState([1, 2, 3])

// ❌ 错误：直接修改原数组
items.push(4)
setItems(items)

// ✅ 正确：创建新数组
setItems([...items, 4])

// ✅ 正确：map/filter 等返回新数组的方法天然安全
setItems(items.filter(i => i !== 2))
```

### 3. 组件更新机制

Vue: 依赖追踪 → 精确更新变化的组件。
React: 状态变化 → 重新执行组件函数 → 对比 Virtual DOM（Diff）→ 更新真实 DOM。

---

## 速查表：Vue vs React 概念映射

| Vue 概念 | React 等价概念 | 说明 |
|----------|---------------|------|
| `<template>` | JSX | 都是声明式 UI，JSX 就是 JS |
| `ref()` / `reactive()` | `useState()` | 响应式状态 |
| `computed()` | `useMemo()` | 缓存计算值 |
| `watch()` | `useEffect()` | 监听变化执行副作用 |
| `onMounted` | `useEffect(fn, [])` | 挂载后执行 |
| `onUnmounted` | `useEffect` 的 return | 卸载前清理 |
| `provide/inject` | `createContext/useContext` | 跨层级传数据 |
| `v-if` | `{condition && <A/>}` / 三目 | 条件渲染 |
| `v-for` | `.map()` | 列表渲染 |
| `v-model` | `value + onChange` | 双向绑定（React 是单向数据流） |
| `v-bind` / `:` | `{}` 插值 | 绑定变量 |
| `@click` | `onClick` | 事件绑定 |
| `ref` (模板引用) | `useRef()` | DOM 引用 |
| Composable | Custom Hook | 逻辑复用 |
| SFC | 函数组件 | 组件定义方式 |

---

## 下一步

你已经掌握了 React 最核心的概念！接下来可以深入：

1. **useReducer**：复杂状态管理（类似 Vuex/Pinia 的 reducer 模式）
2. **性能优化**：`React.memo`、`useCallback`、`useMemo` 的组合使用
3. **状态管理库**：Zustand、Jotai（轻量）或 Redux（经典）
4. **路由**：React Router（对比 Vue Router）
5. **服务端渲染**：Next.js（对比 Nuxt.js）