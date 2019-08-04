// 搭建服务器
const express = require('express');
const app = express();
const router=require('./router')
const bodyParser = require('body-parser');
app.listen(8080, () => {
    console.log('http://127.0.0.1:8080')
})

// 处理静态资源
app.use('/assets', express.static('assets'));
app.use('/uploads', express.static('uploads'));

// bodyParser中间件
app.use(bodyParser.urlencoded({ extended: false }));

// 设置默认模板引擎
app.set('view engine','ejs')
app.set('views',__dirname+'/views')

app.use(router);