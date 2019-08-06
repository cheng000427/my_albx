

$(function () {
    // 点击登录跳转
    $('.btn-block').on('click', function () {
        // 非空判断 
        if ($('#email').val().trim().length === 0 || $('#password').val().trim().length === 0) {
            alert('用户名或者密码不能为空')
            return;
        }
        // 获取数据
        let data = $('form').serialize();
        $.ajax({
            type: 'post',
            url: '/login',
            data: data,
            dataType: 'json',
            success: function (res) {
                // console.log(res);
                if (res.code == 200) {
                    location.href = '/admin/index'
                } else {
                    alert(res.msg)
                    console.log(res.msg)
                    
                }
            }
        });
    })
})


// $(function () {
//     // 点击登录
//     $('.btn-block').on('click', function () {
//         // 非空判断
//         if ($('#email').val().trim().length === 0||$('#password').val().trim().length===0){
//             alert('用户名或者密码不能为空')
//         }else{
//             let data=$('form').serialize();
//             $.ajax({
//                 type:'post',
//                 url:'/login',
//                 data:data,
//                 dataType:'json',
//                 success:function(res){
//                     if(res.code==200){
//                         location.href='/admin/login'
//                     }else{

//                     }
//                 }
//             });
//         }
//     })
// })