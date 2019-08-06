// 搭建服务器
const express = require('express');
const app = express();
const router = require('./router')
const bodyParser = require('body-parser');
const session = require('express-session');
app.listen(8080, () => {
    console.log('http://127.0.0.1:8080')
})

// 处理静态资源
app.use('/assets', express.static('assets'));
app.use('/uploads', express.static('uploads'));

// bodyParser中间件
app.use(bodyParser.urlencoded({ extended: false }));

// 设置默认模板引擎
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(session({ secret: 'my_alxb' }));

app.use(function (req, res, next) {
    // 三种场合不用经过这个中间件
    // 1.登录页面
    // 2.前台页面
    // 3.有登录状态
    if (req.session.isLogin && req.session.isLogin == 'true' || req.url == '/admin/login' || req.url.indexOf('/admin') == -1) {
        // console.log(req.session.isLogin)
        next();
    } else {
        res.redirect('/admin/login')
    }
})

app.use(router);