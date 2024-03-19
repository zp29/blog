
/*
宏观任务
script、setTimeout、setInterval、I/O、UI交互事件、postMessage、MessageChannel、setImmediate(Node.js 环境)；

微观任务
promise async await  

所以整体的执行顺序为：
同步任务>微观任务>宏观任务


正常 -> es6 -> 其他异步

async function a1 () {
    await a2() 正常任务
    await a3() 微任务(es6
    console.log('a1 end') 微任务(es6   
}

*/

// 微
async function async1() {
    console.log('1')
    // 微
    await async2()
    console.log('3')
}
// 微
async function async2() {
    console.log('2')
}

// 同s
console.log('1')
// 宏s
setTimeout(() => {
    console.log('7')
}, 0);
// 微s
async1()
// 微s
new Promise(resolve => {
    console.log('4')
    resolve()
}).then(() => {
    console.log('5')
})
// 同s
console.log('6')

