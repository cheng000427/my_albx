const conn = require('../utail/myconn')

// 获取所有数据
exports.getAllCate = (callback) => {
    // 创建sql语句
    var sql=`SELECT * FROM categories`;
    // 执行sql语句
    conn.query(sql,(err,data)=>{
        if(err){ 
            callback(err)
        }else{
            callback(null,data)
        }
    })
}