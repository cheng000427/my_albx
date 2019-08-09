$(function () {

    $('#feature').on('change', function () {
        // 获取对象文件
        let file = this.files[0];
        // 创建forndata对象
        let fd = new FormData();
        // 在formdata里面追加数据
        fd.append('img', file);
        // 发送ajax请求
        $.ajax({
            type: 'post',
            url: '/uploadFile',
            data: fd,
            // 不要动请求头
            contentType: false,
            // 不要动数据
            processData: false,
            success: function (res) {
                console.log(res)
                if (res.code == 200) {
                    $('.thumbnail').attr('src', '/uploads/' + res.img).show();
                    $('[name="feature"]').val(res.img)
                }else{
                    $('.alert-danger>span').text(res.msg).fadeIn(300).delay(2000).fadeOut(300)
                }
            }
        })
    })
    // 渲染分类
    $.ajax({
        type:'get',
        url:'/getAllCate',
        dataType:'json',
        success:function(res){
            var html=`<option value="all">所有分类</option>`;
            for(var i = 0; i< res.data.length;i++){
                html += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
            }
            $('#category').html(html);
        }
    })

    // 初始化    文本域
    CKEDITOR.replace('content')

    // 点击保存
    $('.btn-primary').on('click',function(){
        // 把文本域同步
        CKEDITOR.instances.content.updateElement()
    // 发送ajax请求   
    $.ajax({
        type:'post',
        url:'/getAddPost',
        data:$('form').serialize(),
        success:function(res){
            console.log(res)
            if(res.code==200){
                location.href='/admin/posts'
            }else{
                alert(res.msg)
            }
        }
    })

    })


})