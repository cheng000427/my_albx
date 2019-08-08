$(function () {
    $.ajax({
        type: 'get',
        url: '/getAllPost',
        data:{
            pageNum:1,
            pageSize:4,
        },
        success: function (res) {
            console.log(res)
            var html = template('Posttemplate', res);
            // console.log(html)
            $('tbody').html(html);
        }
    });
})