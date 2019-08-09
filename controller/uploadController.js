const formidable = require('formidable')
const path = require('path')

exports.uploadFile = (req, res) => {
    // 创建formidable对象
    var form = new formidable.IncomingForm()
    // 设置字符集
    form.encoding = 'utf-8';
    // 设置图片存储路径
    form.uploadDir = __dirname + "/../uploads";
    // 设置保留文件拓展名
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        console.log(fields)
        // console.log(files)
        if (err) {
            res.json({ code: 400, msg: '上传失败' })
        } else {
            var imgname = path.basename(files.img.path)
            
            res.json({ code: 200, msg: '上传成功', img: imgname })
        }
    })
}