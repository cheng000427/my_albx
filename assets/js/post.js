$(function () {

    let pageNum = 1;
    let pageSize = 4;

    function init(sech) {
        $.ajax({
            type: 'get',
            url: '/getAllPost',
            data: {
                pageNum: pageNum,
                pageSize: pageSize,
                ...sech
            },
            success: function (res) {
                // console.log(res)
                var html = template('Posttemplate', res.data);
                // console.log(html)
                $('tbody').html(html);
                setPagination(Math.ceil(res.data.total / pageSize))
            }
        });
    }
    init();

    function setPagination(total) {
        // 初始化
        $('.pagination').bootstrapPaginator({
            // 配置
            bootstrapMajorVersion: 3,//版本
            currentPage: pageNum,//显示第几页
            totalPages: total,//总页
            onPageClicked: function (event, originalEvent, type, page) {
                pageNum = page;
                init();
            }
        })
    }
    // 加载分类数据
    $.ajax({
        type: 'get',
        url: '/getAllCate',
        dataType: 'json',
        success: function (res) {
            console.log(res)
            // 动态生成下拉列表
            let html = `<option value="all">所有分类</option>`;
            for (var i = 0; i < res.data.length; i++) {
                html += `<option value="${res.data[i].id}">${res.data[i].name}</option>`;
            }
            $('.cateSelector').html(html);
        }
    });

    // 筛选
    $('.btn-search').on('click', function () {
        var obj = {
            cate: $('.cateSelector').val(),
            status: $('.statuSelector').val()
        }
        console.log(obj)
        init(obj)
    })

})