const userModel = require('../modules/userModel');

// 用户登录验证
exports.Login = (req, res) => {
    // 获取数据
    var obj = req.body;
    // console.log(obj);
    // 两个参数，一个是邮箱，一个是数据和错误提示
    userModel.Login(obj.email, (err, data) => {
        // console.log(obj.email)
        // console.log(err)
        if (err) {
            // 可以将js对象转换成json字符串返回
            res.json({ code: 503, msg: '服务器异常' })
        } else {
            // 如果有结果集
            if (data) {
                // 判断密码是否正确
                if (data.password == obj.password) {

                    // 登录状态
                    req.session.isLogin = 'true';
                    // 获取用户数据
                    req.session.currentUser = data;

                    res.end(JSON.stringify({ code: 200, msg: '登录成功' }))
                } else {
                    res.json({ code: 503, msg: '密码错误' })
                }
            } else {
                res.json({ code: 503, msg: '邮箱错误' })
            }
        }
    })
}