const mysql = require('mysql');

// 连接mysql
var conn = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'alxb',
    // 时间格式
    dateStrings:'true'
})

module.exports=conn;