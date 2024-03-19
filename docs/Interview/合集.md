---
title: Interview - 面试常见问题
layout: InfoInterview
permalink: /:Interview
date: 2020/2/16
description: Interview - 面试常见问题
tag: Interview
---

# Interview - 面试常见问题
> 面试常见问题

## 运行原理 和 AST

编译过程 解析器 - 解释器 - 编译器


## __proto__ 和 prototype

原型的类别

__proto__ 隐式原型，每个对象都有属性，指向创建该对象的函数的 显示原型prototype
一般给对象添加属性和方法

prototype 显示原型，每个函数独有的属性
一般用于给构造函数添加属性和方法，比如给 date 添加自定义时间方法

## 继承

es6 class extends + super
es5 prototype = new user() 原型

## 判断继承 instanceof
admin instanceof User

## 内核

android 
    WebView 5.0<
    Chromium 5.0>
IOS
    UIWebView ios8<
    WKWebView ios8>

## Flex 面试

## Flex 常用

## flex-grow flex-shrink 有什么用

## bfc 理解和场景

- 块级格式化上下文 block format context
- 创建一个独立的渲染区域，内部不影响外界

- 常见触发 bfc
    positino : absolute / fixed
    float : not none
    overflow: visible
    display : inline-block / flex
    <html> 也是bfc 

## websocket

    websocket 是协议，
    socket 是工具
    socket.io 是封装好的 socket，当浏览器不支持的时候用轮询
    socket 认证方式
    软件已经有登录了，所有 socket emit('login') 传入用户信息，服务判定正确就返回了
    socketio-auth 做认证模块

## 轮询 和 长轮询

setInterval 实现轮询
promise 或者 callback 回调的方式实现长轮询

## node 和 chrome 环境

    node 执行 同步代码 > process.nextTick > Promise.then中的函数 > setTimeOut

<!-- 
```javascript
var a = 1,
    b = 2;

function test() {
  var b = 3;
  return new Function('c ', 'console.log(a + b + c)');        
}

```
    在函数内只能拿到自己作用域和全局作用域的数据 -->


深拷贝 浅拷贝理解
json.stringify 问题

vue 传值方式 bus

后台管理遇到的问题，怎么解决

性能优化
    http 请求优化
        合并请求（雪碧图
        本地存储（LocaStorage，保存list,chat
        Service Worker离线缓存，项目没用到
        强缓存（用firebase没有用到）
            后端 setHeader Expires 设置过期时间 或者 Cache-Control max-age
            max-age 优先级更高
    构建 webpack
        组件重复打包 CommonsChunkPlugin -> minChunks: 3
    静态资源
        gzip
    代码层面
        按需加载
        懒加载
        预加载
        减少重排重绘

    最终方案 ssr

公司官网
    SEO 问题 （Vue和React）
    vue -> prerender-spa-plugin + vue-meta-info
    react -> prerender-spa-plugin + react-helmet



## patsnap

浏览器 网页打开到渲染 过程

    URL 输入
    DNS 解析
    建立 TCP 连接
    发送 HTTP / HTTPS 请求（建立 TLS 连接）
    服务器响应请求
    浏览器解析渲染页面
    HTTP 请求结束，断开 TCP 连接
    
深拷贝和浅拷贝

```javascript
// 浅拷贝
//  Object.assign
// 遍历 赋值
function shallowClone(obj) {
    const newObj = {};
    for(let prop in obj) {
        if(obj.hasOwnProperty(prop)){
            newObj[prop] = obj[prop];
        }
    }
    return newObj;
}

// 深拷贝
// 遍历 赋值 判断是否为对象 递归
```

New 原理

```javascript
    function _New(fn, ...args) {
        const obj = {}
        obj.__proto__ = fn.prototype;
        fn.apply(obj, ...args)
        return obj
    }
```

sockt

Ajax封装（请求方式）

```javascript
let ajax = (option = "GET", path = "", async = true) => {

    return new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest()

        xhr.open(
            option,
            path,
            async
        )
        xhr.onreadystatechange = () => {
            if ( xhr.readystate == 4 && xhr.status == 200 || xhr.status == 304 ) {
                resolve( xhr.resonseURL )
            } else {
                reject(new Error(xhr.statusText))
            }
        }
    })
}
```


js 内存回收

变量提升

闭包缺点    
    
    概念：闭包就是能够读取其他函数内部变量的函数。


    + 常驻内存，增加内存使用量。
    + 使用不当会很容易造成内存泄露

前端架构


### 懒加载

IntersectionObserver


### 防抖和节流

- 节流「技能冷却中」

```javascript
() => {
    let timer = setTimeout
    if (timer ) { return }
    ...
}
```

- 防抖「回城被打断」

```javascript
let timer
() => {
    cleatimeout(timer)
    timer = setTimeout
    ...
}
```

异步
    setTimeout、Promise、Async/Await

    宏观任务队列 setTimerout, time.., ui, ajax
    微观任务队列 promise.then, asyn/await

    正常用 -> 微 -> DOM -> 宏

微前端

TS

call
apply
bind
    改变this
        fun.call({name: ...}, props1, props2)
        fun.apply({name: ...}, [props1, props2])
        let fn =  fun.bind({name: ...}, props1, props2)

    承继
        function User() {}
        function admin() { User.call(this) }


开发过程中有没有遇见什么难题，是如何解决的


自我介绍，公司软件内容















- svg 和 canvas

svg 矢量图，基于 xml 绘制.
canvas 基于 js 绘制.

    Canvas适用场景
        Canvas提供的功能更原始，适合像素处理，动态渲染和大数据量绘制
        在canvas中，一旦图形被绘制完成，它就不会继续得到浏览器的关注，如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。

    SVG适用场景
        SVG功能更完善，适合静态图片展示，高保真文档查看和打印的应用场景
        在SVG中，每个被绘制的图形均被视为对象。如果SVG对象的属性发生变化，那么浏览器能够自动重现图形。


- SPA 单页面

    优点
        快，不需要重新加载页面。
        前后端分离，架构清晰。

    缺点
        SEO，动态替换显示。
        初次消耗大，需要管理页面按需加载，切换页面需要路由管理。


- v-show 与 v-if 有什么区别？

    ...


- Vue 的单向数据流

    父传子可以用 prop
    子无法直接改变父的value，需要使用 $emit 由父组件个性


- computed 和 watch

computed
    多对一，必须有返回值有缓存
    不能进行异步

watch
    一对多
    可异步操作
    
- Vue 如何检测数组更新

    方法
    ```javascript
    Vue.set()
    this.$set()
    arr.slice()
    ```

    原理
    v2


- 生命周期
```javascript
    Create
    mount
    update
    destroyed

    //  keep-alive
    activated
    deactivated
```


- 父子组件生命周期顺序

    父beforeCreate -> 父created -> 父beforeMount -> 子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted


- Vue的优点？Vue的缺点？

    优点：
        - 渐进式
        - 组件化开发
        - 虚拟dom
        - 响应式数据
        - 单页面路由
        - 数据与视图分开

    缺点：
        - 单页面不利于seo
        - 不兼容IE
        - 首屏加载时间长


- Vue跟React的异同点？

    相同点：
        都是单向数据流
        都使用了虚拟DOM的技术
        都支持SSR
        组件化开发

    不同点：
        前者template，后者JSX
        数据改变，前者响应式，后者手动setState
        React单向绑定，Vue双向绑定
        React状态管理工具Redux、Mobx，Vue状态管理工具Vuex

- MVVM

    VM：就是View-Model，数据双向绑定
    Model：取数据的地方
    View：展示数据的地方
    思想：View和Model实现数据同步，不需要手动更新

    Vue 不完全符合 mvvm，因为用 ref 可以直接控制 dom


- 为什么data是个函数并且返回一个对象呢？

    防止组件被多个页面使用时，造成的变量互相污染


- 路由的几种模式

    hash：哈希模式，根据hash值的更改进行组件切换，而不刷新页面
    history：历史模式，依赖于HTML5的pushState和replaceState
    abstract：适用于Node


- hash 和 history

    hash模式url带#号，history模式不带#号。
    使用 history 没有#号，是个正常的URL，适合推广宣传。
    history 访问二级页面，做刷新操作，会出现404，需要后端配合


- 组件之间的传值方式

    父传子 props
    子传父 $emit
    父子可以 $parent、$chidren 获取实例
    也可以 $ref 获取实例
    vuex


- Slot 使用和原理

    默认slot
        下拉框，弹框
    具名slot
        tabs...
    作用域slot
        https://segmentfault.com/a/1190000020643548


- 为什么不建议用index做key，为什么不建议用随机数做key？

    用index和用随机数都是同理，随机数每次都在变，消耗性能


- 自定义指令的钩子函数？

    bind：指令绑定到指定元素时调用，只调用一次
    inserted：指定元素插入父节点时调用
    update：所在组件的 VNode 更新时调用
    componnetUpdated：所在组件以及其子组件 VNode 全部更新后调用
    unbind：只调用一次，指令与元素解绑时调用


- nextTick

    DOM 更新结束之后执行延迟回调
    修改数据时不能马上得到最新的DOM信息，所以需要使用nextTick，在nectTick回调中可以获取最新DOM信息


- Vue的SSR

服务器渲染

    有利于SEO：由于是在服务端，将数据填充进HTML之后再推送到浏览器，所以有利于SEO的爬取
    首屏渲染快


- Vue响应式是怎么实现的
    
    1、劫持：通过Object.defineProperty对对象进行递归劫持属性的get、set
    2、观察者模式：使用watcher进行观察数据使用的地方
    3、发布订阅模式：使用dep收集watcher，数据更改时，通过notify方法通知dep里的watcher去进行相应的更新
    4、数组：数组没有使用劫持的模式，而是通过重写数组原型上的方法，来实现数组的响应式

- 双向绑定

    1. 首先数据发生改变
    2. 通过Object.defineProperty()截取；  set()修改值、get() 获取值
    3. set方法有一个通知机制，只要你一修改，它马上就会通知watcher 监听器
    4. watcher 就会告知虚拟dom哪个节点发生了改变
    5. 经过diff算法生成新的dom树。然后两个树进行比较，发现不一样的节点
    6. 把新的节点更新到真实dom上。


- 为什么只对对象劫持，而要对数组进行方法重写？

    数组的元素大概率是成百上千的，所以对数组下标进行劫持的话会非常消耗性能。Vue通过对数组原型上方法的重写，实现数组的响应式


- Vue的computed和watch的原理

- Vue.set方法的原理？

- Vue.delete方法的原理？

- nextTick的原理？

- 说说 虚拟dom 和 diff算法 吧？

- 如果子组件改变props里的数据会发生什么？

    基础类型：如果父传给子的是基础类型，修改则会报错
    引用类型：如果父传给子的是引用类型，修改属性则会同时修改父组件数据

- watch的immediate

    Vue实例初始化的时候立即调用watch的监听回调函数


- watch监听一个对象时，如何排除某些属性的监听

```javascript
mounted() {
    Object.keys(this.params)
        .filter((_) => !["c", "d"].includes(_)) // 排除对c，d属性的监听
        .forEach((_) => {
        this.$watch((vm) => vm.params[_], handler, {
            deep: true,
        });
        });
}
```

- 审查元素时发现data-v-xxxxx

    样式模块化scoped的效果，在本组件的标签都会带上data-v-xxx的属性，然后通过属性选择器实现样式模块化的效果


- vue的hook的使用

- provide和inject是响应式的吗？

- Vue的el属性和$mount优先级？

- 相同的路由组件如何重新渲染？

    更改如有组件上的key即可

- router.push、router.replace、router.go的区别？

    router.push：跳转，并向history栈中加一个记录，可以后退到上一个页面
    router.replace：跳转，不会向history栈中加一个记录，不可以后退到上一个页面
    router.go：传正数向前跳转，传负数向后跳转

## 计算机网络基础

## Navgigate

- [OSI 七层模型](#osi-七层模型tcpip哪些层级)
- [HTTP 状态码](#HTTP-状态码)
- [cookie、sessionStorage 和 localStorage区别？](#cookiesessionstorage-和-localstorage区别)
    - [cookie](#cookie)
    - [seesionStorage](#seesionStorage)
    - [localStorage](#localStorage)
- [服务器和浏览器之间的 cookie 是怎么传的？](#服务器和浏览器之间的-cookie-是怎么传的)
- [JS 怎么实现一个类？](#JS-怎么实现一个类)
    - [构建函数模式](#构建函数模式)
    - [Object.create()](#Object.create())
    - [面向对象编程的构造](#面向对象编程的构造)
    - [ES6](#es6-class)
- [什么是跨域？跨域有哪些解决方案？](#什么是跨域跨域有哪些解决方案)
    - [是什么](#what)
        - [同源策略](#同源策略)
    - [为什么](#why)
    - [咋解决](#how)

## OSI 七层模型，tcp/ip哪些层级
    
><u>物理屋 -- 数据链路层 -- 网络层 -- 传输层 -- 会话层 -- 表示层 -- 应用层</u>
    
| OSI层      | Desc                     | 协议eg         |
|:----------:|:------------------------:|:--------------:|
| 物理层     | 直接物理数据链接（电缆    | CAT5           |
| 数据链路层 | LAN（可靠的本地数据连接   | 以太网         |
| 网络层     | 网络节点间路由与数据分发 | IP，IPSesc      |
| 传输层     | 包或流的可靠传输         | TCP、UDP        |
| 会话层     | 多连接管理               | -              |
| 表示层     | 数据表示、转换和加密      | SLL/TLS        |
| 应用层     | 应用数据                 | HTTP、SMTP、IMAP |


## HTTP 状态码

- `1**` 返回信息，服务器收到请求，需要请求都继续执行操作
    
- `2**` 成功，操作成功接收并处理
    
- `3**` 重定向，需要进一步操作以完成请求
 
- `4**` 客户端错误，请求饮包含语法错误或无法完成请求
    
- `5**` 服务器错误，服务器在处理请求的过程中发生了错误

## cookie、sessionStorage 和 localStorage区别？

- ### cookie
    http请求中携带，大小只有 `4k` ，WebStorage（sesstionStorage && localStorage）`5M`
    
- ### sessionStorage
    会话存储，当前浏览器*关闭前有有效*
    
- ### localStorage
    *始终有效*

## 服务器和浏览器之间的 cookie 是怎么传的？

### cookie

| 客户端 | 过程 | 服务器 |
|:------:|:-----------:|:------:|
| 客户端 | 用户名&密码 | 服务器 |
| 客户端 | 生成cookie  | 服务器 |
| 客户端 | cookie      | 服务器 |

### *Session*(*)

`cookie` 同理，只是返回的是 `SessionID`，服务端也会保存

## JS 怎么实现一个类？

1. ### 构建函数模式

> `prototype` 编写复杂，可读性差

```javascript
function Chat() {
    this.chatName  = "Click."
    this.channelId = UUID()
}
    
Chat.prototype.addChat = function () {
    addChat()
}
    
var chat = new Chat()
chat.addChat()
```

2. ### Object.create()
   
> 不能实现私有属性和私有方法，实例对象之间也不能共享数据。
> IE9+
    
```javascript
var Chat = {
  chatName  : "Click.",
  channelId : UUID(),
  show: function () {
    alert("show.")
  },
};
    
var person = Object.create(Person);
person.show();
```
    
3. ### 面向对象编程的构造
    
```javascript
var Chat = {
  userName: "29",
  createNew: function () {
    var chat = {}
    chat.name = "xx"
    chat.id   = UUID()
    
    chat.addChat = function () { addChat() }
    chat.delChat = function () { delChat() }
    
    return chat
  }
};
    
var chat = Chat.createNew();
    
chat.addChat();
chat.delChat();
```

4. ### ES6 class
    
```javascript
class Chat {
    constructor(pros) {
        this.name = pros.name
        this.id   = pros.id
    }
    
    addChat() { addChat() }
}
    
let chat = new Chat(chatModel)
    
chat.addChat()
```

## 什么是跨域？跨域有哪些解决方案？

- ## What
> 同源策略的一种安全手段，不满足同源策略任何一条，都需要跨域

#### 同源策略
1. 协议相同
2. 主机相同
3. 端口相同

- ## Why

    [a.com]()在*Cookie*中保存了用户信息，[b.com]()应该不能访问[a.com]()的*Cookie*

- ## How

1. ### JSONP

    #### ajax
    ```javascript
    $.ajax({
        url: 'https://xxx.xxx.xxx',
        type: 'get',
        dataType: 'jsonp',  // 请求方式为jsonp
        jsonpCallback: "show",    // 自定义回调函数名
        data: {name: "name"}
    });
    ```
    
    #### Vue
    ```javascript
    this.$jsonp('https://xxx.xxx.xxx', {
        region: "xx",
        keyword: query,
        key: "xxxx-xxxx-xxxx-xxxx", 
        output: 'jsonp'
    }).then(res => {
        // ...
    })
    ```

2. ### CORS
    **跨域资源共享** 是一个系统，它由一系列传输的 HTTP 头组成，这些 HTTP 头决定浏览器是否阻止前端 JavaScript 代码获取跨域请求的响应。只要后端实现了 `CORS`，就实现了跨域

3. ### Proxy
    代理方式

    - webpack中设置 devServer.proxy
        > 适用于开发环境
        ```javascript
        amodule.exports = {
            devServer: {
                host: '127.0.0.1',
                port: 8084,
                open: true,
                proxy: {
                    '/api': {
                        target: "http://xxx.xxx.xx.xx:8080",
                        changeOrigin: true, //是否跨域
                        pathRewrite: {
                            '^/api': "" 
                        }
                    }
                }
            }
        }
        ```

    - 服务端实现代理转发
        > express 或 nginx 实现代理
        
        ```javascript
        var express = require('express');
        const proxy = require('http-proxy-middleware')
        const app = express()
        app.use(express.static(__dirname + '/'))
        app.use('/api', proxy({ target: 'http://localhost:4000', changeOrigin: false
                              }));
        module.exports = app
        ```


## [Return](https://github.com/zp29/Offce/blob/main/README.md)


## HTMl 基础

[src-和-href的区别](#src-和-href的区别)
    [src](#src)
    [href](#href)
[doctype-作用](#doctype-作用)
[script-标签-defer-和-async](#script-标签-defer-和-async)
[meta标签](#meta标签)
[html5-更新](#html5-更新)
    [H5 标签](#标签)
    [H5 属性](#属性（表单）)
    [H5 JS](#JS)
    [H5 Canvas](#Canvas)
[html中行内元素和块级元素有哪些两者有什么区别](#html中行内元素和块级元素有哪些两者有什么区别)

## src 和 href的区别

### **src**
> 资源引用，更多用于下载并用到文档中，比如js

### **href**
> 指向，一般是网络资源。常用在a标签

## DOCTYPE 作用

告诉浏览器应该以（html或xhtml）文档类型来解析文档
  

## script 标签 defer 和 async

- `sync`是乱序，立即下载，异步执行（并行）的

- `defer`是顺序执行，立即下载，脚本延迟到页面解析完毕再运行

## meta标签

```html
<meta charset="UTF-8" >
  
<meta name="keywords" content="关键词" />
  
<meta name="description" content="页面描述内容" />
  
// 页面重定向和刷新
<meta http-equiv="refresh" content="0;url=" />
  
// 移动端
<meta name="viewport" content="" />
  
// 搜索引擎机器人
<meta name="robots" content="" />
```

## HTML5 更新

1. ### 标签

```html
<header />
<nav />
<footer />
...
  
<audio />
  
<video />
```

2. ### 属性（表单）

>email,
>url,
>number,
>search,
>time,
>placeholder,
>autofocus,
>...

3. ### JS

```javascript
document.querySelector()
document.querySelectorAll()
  
localStorage
sessionStorage
```

4. ### Canvas

```html
<html>
  <head>
    <title>Canvas tutorial</title>
    
    <script type="text/javascript">
      function draw(){
        var canvas = document.getElementById('tutorial');
        if (canvas.getContext){
          var ctx = canvas.getContext('2d');
        }
      }
    </script>
    
    <style type="text/css">
      canvas { border: 1px solid black; }
    </style>
  </head>
  
  <body onload="draw();">
    <canvas id="tutorial" width="150" height="150"></canvas>
  </body>
</html>
```

## HTML中行内元素和块级元素有哪些？两者有什么区别？

- ### 行内元素
    `<span>`、`<a>`、 `<img>`、 `<input>`、`<textarea>`、`<select>`、`<label>`
    > 都在一行，高度宽度不可控。

- ### 块级元素
    `<div>`、`<table>`、`<form>`、`<p>`、`<ul>`、`<hr>` 、`<pre>`、`<address>`、`<center>`、`<marquee>` 、`<blockquote>`、`<h1>`......`<h6>`
    > 开始都是新的一行，没有宽度是100%，块级可以包含行内元素和块级

## [Return](https://github.com/zp29/Offce/blob/main/README.md)

# CSS

- [css-有哪些选择器](#css-有哪些选择器)
    - [常用选择器](#常用选择器)
    - [属性选择器](#属性选择器)
    - [伪类选择器](#伪类选择器)
- [如何让一个块级元素水平垂直居中](#如何让一个块级元素水平垂直居中)
- [box-sizing-属性是什么](#box-sizing-属性是什么)
- [em-和-rem-的区别](#em-和-rem-的区别)
- [position-有哪几种](#position-有哪几种)
- [css-下划线怎么实现](#css-下划线怎么实现)

## CSS 有哪些选择器

- ### 常用选择器

```less
// id
#app {}

// class
.top {}

// 通用
* {}

// 元素
input {}
```

- ### 属性选择器

```less
// 存在title属性的<a> 元素
`a[title] {}`

// 存在href属性并且属性值匹配"https://example.org"的<a> 元素
a[href="https://example.org"] {}

// 存在href属性并且属性值包含"example"的<a> 元素
a[href*="example"] {}

// 存在href属性并且属性值结尾是".org"的<a> 元素
a[href$=".org"] {}

// 存在class属性并且属性值包含以空格分隔的"logo"的<a>元素
a[class~="logo"] {}
```

- ### 分组和组合选择器

```less
// 同时选择
span, div {}

// 后代选择 
ui li {}

// 兄弟选择器（同级选择器，无须紧邻
p ~ span {}

// 兄弟选择器（同级选择器，需要紧邻
img + p {}
```

- ### 伪选择器

```less
a:hover {}
li:first {}

a::after {}
a::before {}
```

## 如何让一个块级元素水平垂直居中

- ### margin + postion
```less
.box {
    width: 200px;
    height: 200px;

    position: absolute;
    left:0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
}

.box {
    width: 200px;
    height: 200px;

    position: absolute;
    left:0;
    top: 0;
    bottom: 50%;
    right: 50%;

    margin-left: -100px;
    margin-top: -100px;
    // margin-left: -calc(100% / 2);
    // margin-top: -calc(100% / 2);
}
}
```

- ### transition
```less
.box {
    width: 200px;
    height: 200px;
    // 可以没有宽度
    
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
```

- ### flex 
```less
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
    .chlid {
        ...
        // 可以没有宽度
    }
}
```

- ### tab
```less
.table {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
```

## box-sizing 属性是什么？

`box-sizing` 改变盒子模型

- ### content-box
    > 默认

    可见宽度 = `width` + `padding` + `border`

- ### border-box
    > 移动端布局方便

    可见宽度 = `(padding + border) < width` ? `width` : `width + (width - padding) + (width - border)`

- ### inherit
    继承父级

## `em` 和 `rem` 的区别

> `em` 和 `rem` 一样都是相对长度单位，都是根据font-size来决定大小
`em` 相对是`父级`
`rem` 相对是 `html`
```less
html {
    font-style: 12px;
    padding: 10rem;
    // 10rem == 120px
}
```

## `position` 有哪几种

1. `static`
2. `relative`
3. `absolute`
4. `fixed`
5. `inherit`

## CSS 下划线怎么实现

1. `text-decoration`
> 正常用
2. `border-bottom`
3. `box-shadow`
> Tab
4. `background: linear-gradient`
> 渐变，下划线需要动画时




# 浏览器重绘

- ## 重排重绘

    1. 解析 HTML，构建 DOM 节点
    2. 解析 CSS，构建 CSSOM
    3. 根据 CSSOM，确定 DOM 节点的位置
    4. 完成绘制渲染

    1. 重绘：某些元素的外观被改变
        `color` `opacity` 等。

    2. 重排：
        1. 重新生成布局，重新排列元素。
            `height` `float` `position` 等。
        2. 获取布局信息会导致重排
            `offsetTop` `getComputedStyle`


- ## 如何提升页面渲染性能(如何减少页面重排重绘)

    - 样式集中改变，减少页面重排重绘，提升渲染性能，

        ```javascript
        // bar
        el.style.left = left + "px";
        el.style.top = top + "px";
        
        // good
        el.className = "className"
        ```
        
    - 使用 absolute 或 fixed 脱离文档流

        重排开销小，不会对其他节点造成太多影响。其他节点可能只需要重绘，不需要重排。

    - DOM 离线
        
        - display: none，变更完成后再显示出来，只有一次重绘重排

        - documentFragment
        - 复制节点，在副本上工作

    - 避免因频繁读取布局信息而触发重排。
    ```javascript
    // good 
    var elmnt = document.getElementById("app")
    let top = elmnt.clientTop
    let left = elmnt.clientLeft
    // bad
    document.getElementById("app").clientTop
    document.getElementById("app").clientLeft
    ```

    - 对 `DOM` 进行批量写入和读取（虚拟 DOM 或 `createDocumentFragment`
    ```javascript
    var fragment = document.createDocumentFragment()
    for( var i=0; i<100; i++ ) {
        var item = document.createElement('div')
        $(item).text('Element-'+i)
        $(item).css({background: 'red'})
        fragment.appendChild(item)
    }
    $('body').append(fragment)
    ```
   
    - 开启 GPU 加速，适当使用 `transform: translateZ(0)` `will-change` 提高页面性能。


- ## 哪些行为会引起重排/重绘

外观变时会`重绘` : `color` `opacity`

节点内容发生变化时会`重排` : `height` `float` `position`

获取布局信息时会`重排` : `ofsetTop` `getComputedStyle`



# 浏览器跨域

# What
    
浏览器同源策略的一种安全手段，本质是浏览器限制

# Why

不满足同源策略任何一条，都需要跨域

    1. 协议相同
    2. 主机相同
    3. 端口相同

# How

- ## CORS

    > IE10+

    只需配置后端，在服务端响应头中添加 `Access-Cotrol-Allow-*` 头

    两种请求

    简单请求 `HEAD`、`GET`、`POST`
    
    非简单请求(需预检请求) `PUT`、`DELETE`、`OPTIONS`

- ## Proxy（反向代理

    > 如果项目有公共的API，如地图，天气就不方便使用反向代理

    请求服务器的时候用指定的域名

    只需要服务端支持，前端只需要写接口。

- ## JSONP

    > 只能发 `GET` 

    `script`、`img`标签是没有跨域限制的，利用`src`

- ## iframe

    > 可以发 `POST`

    空 `iframe` 加 `form`

- ## postMessage

    > 不常用

    `window.postMessage()` 是 `HTML5` 提供的接口

    LocalStorage / SessionStorage 跨域

    `iframe` 加载页面，通知此接口来发送消息

- ## document.domain

    > 不常用

    这种方式只适合主域名相同，但子域名不同的 `iframe` 跨域。

    ```javascript
    document.domain = "google.com"
    Get('img.google.com')
    ```

- ## canvas 操作图片的跨域

    > 不常用
    
    给图片添加 `crossorigin="anonymous"` 并在返回的图片文件响应头加上 `Access-Control-Allow-Origin: *` 即可解决。
    > 这样也可以捕捉到完整的错误堆栈

- ## window.name

    > 不常用

    主要是利用 `window.name` 页面跳转不改变的特性实现跨域

---

### 注

> `GET`
    > 查
    
> `POST`
    > 改
    
> `HEAD`
    > `HEAD`和`GET`本质是一样的，只需要HTTP头信息，判断某个资源是否存在，就可以用`HEAD`

> `PUT`
    > 和`POST`相似，都是向服务器发送数据，PUT指定了存放位置，既为增，使用少见
    
> `DELETE`
    > 删除某一个资源,使用少见



# Webpack


## Webpack 理解


`webpack`是一种`模块化`打包工具，通过`Loader`转换文件，`plugin`注入钩子，最后资源合并。


## webpack 与 grunt 、 gulp 的不同？

`grunt`和`gulp`是基于任务和流，多个任务就构成了整个 web 的构建流程。


webpack 是基于入口的。webpack 会自动地递归解析入口所需要加载的所有资源文件，然后用不同的`Loader`来处理不同的文件，用`Plugin`来扩展 webpack 功能。


## webpack 工作流程

- 初始化阶段
    - 初始化参数
    - 创建编译对象
    - 初始化编译环境
- 构建阶段
    - 开发编译
    - 确认入口
    - 编译模块（make
    - 完成模块编译
- 生成阶段
    - 输出资源
    - 写入文件系统



## vue 传值方式

- props
- emit
- $parent / $children 或 $refs
- $attrs和$listeners
  attrs 对象
  listeners 获取方法（v3已经移除，放在attrs里面了）
- 多层传递（provide/inject 或者 vuex

```javascript
// 父组件　
export default {
  data() {
      return {
          name: "Jack"
      };
  },
  provide() {
      return {
          parentObj: this //提供祖先组件的实例
      };
  },
  methods: {
      changeName() {
          this.name = 'Lily'
      }
  }
}
子组件

export default {
  inject: {
    parentObj: {
    　　default: () => ({})
    }
  } // 或者inject: ['parentObj']
}
```


## Vuex 原理

- vue 插件，必然有install方法
- 使用 new vue data 实现双向绑定
- Vue.mixin 在Vue生命周期 beforeCreate 全局注入store

- getters实现
- Object.key 遍历 Object.defineProperty 监听拦截用户传过来的 option
- 缓存使用 vue computed,遍历的时候 computed[key] = func(...)

- mutation 实现
- 实现 commit 接收 type、props，执行 key 对应的函数（先初始化 mutations 对象）

```javascript
import applyMixin from "./mixin";
import { forEachValue } from './util';
export let Vue;

export class Store {
  constructor(options) {
    // 1.处理state
    const state = options.state; //数据变化要更新视图 （vue的核心逻辑依赖收集）
    const computed = {};

    // 2.处理getters属性 具有缓存的 computed 带有缓存 （多次取值是如果值不变是不会重新取值）
    this.getters = {};
    forEachValue(options.getters, (fn, key) => {
      // 将用户的getters 定义在实例上， 计算属性是如何实现缓存
      computed[key] = () => fn(this.state);
      // 当取值的时候执行计算属性的逻辑，此时就有缓存功能
      Object.defineProperty(this.getters, key, {
        get: () => fn(this._vm[key])
      })
    })

    this._vm = new Vue({
      data: { // 属性如果是通过$开头的 默认不会将这个属性挂载到vm上
        $$store: state
      },
      computed,
    })

    // 3.实现mutations
    this.mutations = {};
    forEachValue(options.mutations, (fn, key) => {
      this.mutations[key] = (payload) => fn(this.state, payload)
    })

    // 4.实现actions
    this.actions = {};
    forEachValue(options.actions, (fn, key) => {
      this.actions[key] = (payload) => fn(this, payload);
    });

  }

  commit = (type, payload) => { //保证当前this 当前store实例
    this.mutations[type](payload)
  }
  
  dispatch = (type, payload) => {
    this.mutations[type](payload)
  }

  get state() { // 属性访问器   new Store().state  Object.defineProperty({get()})
    return this._vm._data.$$state
  }

}

// _vue 是Vue的构造函数
export const install = (_vue) => {
  // 需要保存Vue,用户传入的Vue构造函数
  Vue = _vue;
  // 需要将根组件中注入的store 分派给每一个组件 （子组件） Vue.mixin
  applyMixin(Vue);
}
```

## vue 如何扩展组件

- Vue.component 注册全局组件,为了方便
- Vue.extend 创建组件的构造函数,为了复用
- mixins、extends 为了扩展

## data 返回 function

- 当组件用来创建多个实例
- 使用函数形式返回一个全新的副本数据，各种实例独立，不受影响
- 使用对象形式所有的实例都将共享同一份data的数据对象，一旦某个组件修改了data，所有的实例都将受到影响

## promise 原理


```javascript
function Promise(fn) {
    var value = null,
        callbacks = [];  //callbacks为数组，因为可能同时有很多个回调

    this.then = function (onFulfilled) {
        callbacks.push(onFulfilled);
        return this // 实现链式调用
    };

    function resolve(value) {
        callbacks.forEach(function (callback) {
            callback(value);
        });
    }

    fn(resolve);
}
```

1. Promise 是异步编程的一种解决方案

2. API

  - Promise.resolve
  - Promise.reject
  - Promise.prototype.then
  - Promise.prototype.catch
  - Promise.race(多个 Promise 任务同时执行，返回最先执行结束的 Promise 任务的结果)
  - Promise.all(多个 Promise 任务同时执行，全部成功才返回)

## ajax axios 相关问题

- AJAX请求有几个步骤
```javascript
// 创建 XMLHttpRequest 对象
var xhr = new XMLHttpRequest()
// 发送信息至服务器时内容编码类型
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded") 
// 接受服务器响应数据
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) { 
        // let data = xhr.responseText;  
    }
};=
// 规定请求的类型、URL 以及是否异步处理请求。
xhr.open('GET',url,true)
// 发送请求
xhr.send(null)
```

- JSON字符串和JSON对象的相互
```javascript
//字符串转对象
JSON.parse(json)
eval('(' + jsonstr + ')')

// 对象转字符串
JSON.stringify(json)
```

- 几种请求方式？

  - get
  - post
  - delete
  - put

  1. get通过url传递参数;
  2. post设置请求头部规定请求数据类型
  3. post 比 get 安全些(post参数在请求体中。get参数在url上面)
  4. get传输速度比post快 根据传参决定的(post通过请求体传参，后台通过数据流接收。速度稍微慢一些。而get通过url传参可以直接获取)
  5. post传输文件大理论没有限制,get传输文件小大7-8k,ie4k左右
  6. get获取数据post上传数据(上传的数据比较多 而且上传数据都是重要数据。所以不论在安全性还是数据量级 post是最好的选择)

- 常见状态码

- 1xx 表示消息
  - 100 客户端继续发送请求
  - 101 服务器根据客户端的请求切换协议，主要用于websocket或http2升级

- 2xx 表示成功
  - 200（成功）：请求已成功，请求所希望的响应头或数据体将随此响应返回
  - 201（已创建）：请求成功并且服务器创建了新的资源
  - 202（已创建）：服务器已经接收请求，但尚未处理
  - 203（非授权信息）：服务器已成功处理请求，但返回的信息可能来自另一来源
  - 204（无内容）：服务器成功处理请求，但没有返回任何内容

- 3xx 表示重定向
  - 300（多种选择）：针对请求，服务器可执行多种操作。 服务器可根据请求者 (user agent) 选择一项操作，或提供操作列表供请求者选择
  - 301（永久移动）：请求的网页已永久移动到新位置。 服务器返回此响应（对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置
  - 302（临时移动）： 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求
  - 303（查看其他位置）：请求者应当对不同的位置使用单独的 GET 请求来检索响应时，服务器返回此代码
  - 304（用于浏览器缓存的状态代码）
  - 305 （使用代理）： 请求者只能使用代理访问请求的网页。 如果服务器返回此响应，还表示请求者应使用代理
  - 307 （临时重定向）： 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求

- 4xx 表示请求错误
  - 400（错误请求）： 服务器不理解请求的语法
  - 401（未授权）： 请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应。
  - 403（禁止）： 服务器拒绝请求
  - 404（未找到）： 服务器找不到请求的网页
  - 405（方法禁用）： 禁用请求中指定的方法
  - 406（不接受）： 无法使用请求的内容特性响应请求的网页
  - 407（需要代理授权）： 此状态代码与 401（未授权）类似，但指定请求者应当授权使用代理
  - 408（请求超时）： 服务器等候请求时发生超时

- 5xx 表示服务器错误
  - 503：服务器停机维护时，主动用503响应请求或 nginx 设置限速，超过限速，会返回503
  - 504：网关超时

## flex 问题

  - flex-direction
  > 确定方向
  
  - justify-content
  > 对齐 内容

  - align-items
  > 对齐 item(拉伸strech，center, flex-end)

  - align-content
  > 对齐 content(拉伸strech，center, flex-end)

  - flex-wrap
  > 根据方向，决定换行否

  - flex-flow
  > 简写 wrap + direction

  - 子元素相关 align-self 覆盖 align-items

## this 指向问题

- 默认指向 window
- function 默认指向 window，其他指向使用 this 的对象
- 事件 this 指向 dom
- new 构造函数 this 指向 New 出来赋值的对象
- setTimeout 指向 window
- 箭头函数没有 this

```javascript
var length = 4;
window.length == 4

var length = 4;
function callback() {
  console.log(this.length); // 输出什么
}

const object = {
  length: 5,
  method() {
    arguments[0]();
  }
};

object.method(callback, 1, 2);
// 3
{
  0: callback,
  1: 1, 
  2: 2, 
  length: 3 
}
```

## 内存泄漏常见问题

1. 意外的全局变量(没有声明的对象.JS就会默认将它变为全局变量)
2. dom清空时，还存在引用
3. 定时器中的内存泄漏（需要及时清理定时器）
4. 闭包

其他优化 
WeakSet 和 WeakMap

## proxy 和 Object.defineProperty

  1、Proxy 可以直接监听对象而非属性；
  2、Proxy 可以直接监听数组的变化；
  3、Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是Object.defineProperty 不具备的；
  4、Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；
  5、Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；

## 闭包是什么，闭包哪儿用

为什么要用到
  设计私有方法和变量
  避免全局变量污染
  希望变量长期驻扎在内存中(或许吧)

闭包的缺点
 常驻内存,增大内存使用量,使用不当会造成内存泄漏

闭包的优点
  变量长期驻扎在内存中
  避免全局变量的污染
  私有成员的产

## New 原理
```javascript
  function _New(fn, ...args) {
      const obj = {}
      obj.__proto__ = fn.prototype;
      fn.apply(obj, ...args)
      return obj
  }
```

## socket

```javascript
socket.emit('test1', { 'test': 1}) // 发送
socket.on('test2', data => { console.log('收到', data) }) // 接受
```

socket 断连
定时器，每5s判断一次，重新连接




