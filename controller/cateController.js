const cateModel = require('../modules/cateModel')

exports.getAllCate = (req, res) => {
    module.getAllCate((err, data) => {
        if (err) {
            res.json({ code: 400, msg: '查询失败' })
        } else {
            res.json({ code: 200, msg: '查询成功', data: data })
        }
    })
}