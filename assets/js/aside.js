// 导航的高亮以及切换的操作
$(function () {
    // 获取元素
    let menuPosts = $('#menu-posts')
    let menuSettings = $('#menu-settings')
    // 查询参数标记
   let navName=common.getCommon(location.href)
    if (navName == 'posts' || navName == 'post-add' || navName == 'categories') {
        menuPosts.addClass('in').attr('aria-expanded', true);
        menuPosts.parent().find('.collapse').removeClass('.collapse')
    }
    if (navName == 'nav-menus' || navName == 'slides' || navName == 'settings') {
        menuSettings.addClass('in').attr('aria-expanded', true);
        menuSettings.parent().find('.collapse').removeClass('.collapse')
    }

    $('.' + navName).addClass('active')
})