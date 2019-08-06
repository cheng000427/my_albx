
const conn=require('../utail/myconn')

exports.getAllPost = (obj,callback) => {
    // 创建sql语句
    var sql = `select posts.*,users.nickname,categories.name
    from posts
    join users on posts.user_id=users.id
    join categories on posts.category_id=categories.id
    order by id desc
    limit ${(obj.pageNum-1)*obj.pageSize},${obj.pageSize}`;

    conn.query(sql,(err,results)=>{
        if(err){
            callback(err)

        }else{
            callback(null,results)
        }
    })
}