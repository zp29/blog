
title: Node.js 读取 .db3 和 .mdb 文件
speaker: zp-29
date:  2018-05-15

[slide]


[slide]

# 安装依赖

```bash

npm i node-adodb -D
# 读取 .mdb 文件

npm i exceljs -D
# 创建 .xlsx 文件

npm i node-adodb exceljs -D
# 合并一下

```

[slide]

# 读取 .mdb 文件

```javascript

const ADODB = require('node-adodb')
// 读取 mdb 模块

const file = 'new.mdb'
const pathStr = `Provider=Microsoft.Jet.OLEDB.4.0;Data Source='${file}';`
const connection = ADODB.open(pathStr)
// 连接 .mdb

connection
  .query('SELECT * FROM Content')
  .then(data => {
    console.log(data)
  })
// 拿到数据

```

[slide]

# 创建 .xlsx 文件

```javascript
const Excel = require('exceljs')
// 创建 .xlsx 模块

const MakeXls = (data, fileName) => {
  const workbook = new Excel.stream.xlsx.WorkbookWriter({
    filename: `./data/${fileName}`
  });
  // wb -> file （文件）
  const worksheet = workbook.addWorksheet('Sheet1');
  // wb.wk -> tabl （表）
  let rowName = []
  for( let key in data[0] ){
    rowName.push({'header': key, 'key': key})
    worksheet.columns = rowName
  }
  // wk.columns -> TableHeade (表头)
  for(let val of data) {
    worksheet.addRow(val).commit();
  }
  workbook.commit()
  // wk.row -> data （数据）
  console.log(`创建 ${fileName} '成功！'`);
  // 礼貌性的提示
}
```

[slide]

# 合并一下下

```javascript
// app.js
const xls = require('xls.js')
connection
  .query('SELECT * FROM Content')
  .then(data => {
    xls.MakeXls(data, 'new.xlsx')
  })

// xls.js
module.exports = MakeXls
```

[slide]

> 创建 new.xlsx 成功！

>  new.xlsx 发送成功！

>  new.xlsx 对方已接收！

> 谢谢哈，下次请你吃饭！

[slide]

# 翌日

> 收到文件 new.db3

> 收到文件 women.db3

> 收到文件 men.db3

> 收到文件 best.db3

> 收到文件 ...

---

> 妹子：可以再帮我处理一下吗，谢谢

> *喵了一眼后缀名...*

> 我：没问题（**迷之膨胀**）

[slide]


# 安装依赖

```bash
npm i fs -D
# 可以说很常用了

npm i sql.js -D
# 读取 db3 关键

npm i async -D
# 异步

npm fs sql.js async -D
# 写一行看着牛逼
```

[slide]

# 获取 .db3 数据

```javascript

const fs = require('fs')
const sql = require('sql.js')
// 读取文件并查询

const getDbData = (dbFile) => {
  let file = fs.readFileSync(dbFile);
  // 异步读取
  let db = new sql.Database(file);
  // file to db

  let data = []
  db.each('SELECT * FROM Content', function (row) {
    data.push(row)
  });
  return data;
}

```

[slide]

# 多文件处理

```javascript
/* app.js */
const async = require('async')
const db = require('db.js')
// 依赖
let files = 'new.db3,men.db3,women.db3,bese.db3,...'
// 文件集合
async.mapLimit(files.replit(','), 1, (file, callback) => {
  // 就当遍历数组用，只有异步的。
  db.getDbData(file, callback)
})

/* db.js */
module.exports = getDbData
const getDbData = (file, callback) => {
  ...
  callback()
}
```

[slide]

# 创建 .xlsx

```javascript
const xls = require('xls.js')
// 创建 xls 模块
const data = []
async.mapLimit(files.replit(','), 1, (file, callback) => {
  // 就当遍历数组用，只有异步的。
  data.push(db.getDbData(file, callback))
})
xls.MakeXls(data, 'mian.xlsx')
```

[slide]

> 发送成功！

> 对方接收成功！

# 数日后

[slide]

# 自己想
