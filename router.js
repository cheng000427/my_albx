const express = require('express');
const router = express.Router();
const controllerPage = require('./controller/controllerPage');
// 渲染前台页面
router.get('/', (req, res) => {
    controllerPage.getIndexPage(req, res);
})
router.get('/detail', (req, res) => {
    controllerPage.getDetailPage(req,res);
})
router.get('/list', (req, res) => {
    controllerPage.getListPage(req,res);
})


// 渲染后台页面   后台统一加admin
router.get('/admin/index', (req, res) => {
    controllerPage.getAdminIndexPage(req,res);
})
router.get('/admin/login', (req, res) => {
    controllerPage.getAdminLoginPage(req,res);
})
router.get('/admin/categories', (req, res) => {
    controllerPage.getAdminCategoriesPage(req,res);
})
router.get('/admin/comments', (req, res) => {
    controllerPage.getAdminCommentsPage(req,res);
})
router.get('/admin/nav-menus ', (req, res) => {
    controllerPage.getAdminNavMenusPage(req,res);
})
router.get('/admin/password-reset', (req, res) => {
    controllerPage.getAdminPasswordResetPage(req,res);
})
router.get('/admin/post-add', (req, res) => {
    controllerPage.getAdminPostAddPage(req,res);
})
router.get('/admin/posts', (req, res) => {
    controllerPage.getAdminPostsPage(req,res);
})
router.get('/admin/profile', (req, res) => {
    controllerPage.getAdminProfilePage(req,res);
})
router.get('/admin/settings', (req, res) => {
    controllerPage.getAdminSettingsPage(req,res);
})
router.get('/admin/slides', (req, res) => {
    controllerPage.getAdminSlidesPage(req,res);
})
router.get('/admin/users', (req, res) => {
    controllerPage.getAdminUsersPage(req,res);
})


// 暴露
module.exports = router;