const mysql = require('mysql');

var conn = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'alxb'
})


// 登录验证
exports.Login = (email, callback) => {
    // 创建sql语句
    var sql = `SELECT * FROM users WHERE email='${email}'`;
    // 执行sql语句
    conn.query(sql, (err, results) => {
        // 如果有错，就返回错误信息
        if (err) {
            callback(err)
        } else {
            // 否则返回第一个结果
            callback(null, results[0])
        }
    })
}

// // 登录验证
// exports.Login=(email,callback)=>{
//     // 创建sql语句
//     var sql=`SELECT * FROM users WHERE email='${email}'`;
//     // 执行sql语句
//     conn.query(sql,(err,results)=>{
//         if(err){
//             callback(err)
//         }else{
//             callback(null,results[0])
//         }
//     })
// }