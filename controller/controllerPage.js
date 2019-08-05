const express = require('express');

// 前台页面
exports.getIndexPage = (req, res) => {
    res.render('index');
}
exports.getDetailPage = (req, res) => {
    res.render('detail');
}
exports.getListPage = (req, res) => {
    res.render('list');
}

// 后台页面
exports.getAdminIndexPage = (req, res) => {


    // if (req.session.isLogin && req.session.isLogin == 'true') {
        res.render('admin/index')
    // }else{
    //     res.writeHead(301,{
    //         'Location':'/admin/login'
    //     })
    //     res.end();
    // }
}
exports.getAdminLoginPage = (req, res) => {
    res.render('admin/login')
}
exports.getAdminCategoriesPage = (req, res) => {
    res.render('admin/categories')
}
exports.getAdminCommentsPage = (req, res) => {
    res.render('admin/comments')
}
exports.getAdminNavMenusPage = (req, res) => {
    res.render('admin/nav-menus')
}
exports.getAdminPasswordResetPage = (req, res) => {
    res.render('admin/password-reset')
}
exports.getAdminPostAddPage = (req, res) => {
    res.render('admin/post-add')
}
exports.getAdminPostsPage = (req, res) => {
    res.render('admin/posts')
}
exports.getAdminProfilePage = (req, res) => {
    res.render('admin/profile')
}
exports.getAdminSettingsPage = (req, res) => {
    res.render('admin/settings')
}
exports.getAdminSlidesPage = (req, res) => {
    res.render('admin/slides')
}
exports.getAdminUsersPage = (req, res) => {
    res.render('admin/users')
}
