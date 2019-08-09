
const conn = require('../utail/myconn')

exports.getAllPost = (obj, callback) => {
    // console.log(obj)
    // 创建sql语句
    var sql = `select posts.*,users.nickname,categories.name
    from posts
    join users on posts.user_id=users.id
    join categories on posts.category_id=categories.id
    where 1=1 `
    if (obj.cate && obj.cate != 'all') {
        sql += ` and category_id=${obj.cate} `
    }
    // console.log(obj.cate)
    if (obj.status && obj.status != 'all') {
        sql += ` and posts.status='${obj.status}' `
    }
    sql += ` order by id desc
    limit ${(obj.pageNum - 1) * obj.pageSize},${obj.pageSize}`;

    conn.query(sql, (err, results) => {
        if (err) {
            callback(err)

        } else {
            // 再次创建sql语句
            sql = `SELECT COUNT(*) AS cen 
            FROM posts
            JOIN users ON posts.user_id=users.id
            JOIN categories ON posts.category_id=categories.id`;
            conn.query(sql, (err2, results2) => {
                if (err2) {
                    callback(err2)
                } else {
                    callback(null, { data: results, total: results2[0].cen })
                }
            })

        }
    })
}

exports.getAddPost=(obj,callback)=>{
    console.log(obj)
    // 创建sql语句
    sql=`insert into posts values (null,'${obj.slug}','${obj.title}','${obj.feature}','${obj.created}','${obj.content}','${obj.views}',
        '${obj.likes}','${obj.status}','${obj.user_id}','${obj.category_id}')`;
    // 执行sql语句
    conn.query(sql,(err,result)=>{
        console.log(err)
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })    
}