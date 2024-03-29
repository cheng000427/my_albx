const express = require('express');
const router = express.Router();
const controllerPage = require('./controller/controllerPage');
const Userscontroller=require('./controller/Userscontroller');
const postController=require('./controller/postController');
const catecontroller=require('./controller/cateController');
const uploadController=require('./controller/uploadController')
// 渲染前台页面
router.get('/', controllerPage.getIndexPage)
    .get('/detail', controllerPage.getDetailPage)
    .get('/list', controllerPage.getListPage)


    // 渲染后台页面   后台统一加admin
    .get('/admin/index', controllerPage.getAdminIndexPage)
    .get('/admin/login', controllerPage.getAdminLoginPage)
    .get('/admin/categories', controllerPage.getAdminCategoriesPage)
    .get('/admin/comments', controllerPage.getAdminCommentsPage)
    .get('/admin/nav-menus', controllerPage.getAdminNavMenusPage)
    .get('/admin/password-reset', controllerPage.getAdminPasswordResetPage)
    .get('/admin/post-add', controllerPage.getAdminPostAddPage)
    .get('/admin/posts', controllerPage.getAdminPostsPage)
    .get('/admin/profile', controllerPage.getAdminProfilePage)
    .get('/admin/settings', controllerPage.getAdminSettingsPage)
    .get('/admin/slides', controllerPage.getAdminSlidesPage)
    .get('/admin/users', controllerPage.getAdminUsersPage)

    // 处理后台业务逻辑
    .post('/login',Userscontroller.Login)
    .get('/getAllPost',postController.getAllPost)
    .get('/getAllCate',catecontroller.getAllCate)
    
    .post('/getAddPost',postController.getAddPost)
    

    // 实现上传
    .post('/uploadFile',uploadController.uploadFile)
// 暴露
module.exports = router;