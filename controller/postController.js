const postModel = require('../modules/postModel')

exports.getAllPost = (req, res) => {
    // 接收数据
    var obj=req.query;
    // 调用数据模块
    postModel.getAllPost(obj,(err, data) => {
        if (err) {
            res.json({ code: 400, msg: '查询失败' })
        } else {
            res.json({ code: 200, msg: '查询成功', data: data })
        }
    })
}
exports.getAddPost=(req,res)=>{
    var obj=req.body;
    obj.views=0;
    obj.likes=0;
    obj.user_id=req.session.currentUser.id
    postModel.getAddPost(obj,(err)=>{
        console.log(err)
        if(err){
            res.json({code:400,msg:'新增失败'})
        }else{
            res.json({code:200,msg:'新增成功'})
        }
    })
}