const User = require('../../models/user');
const BaseController = require('../');
const controller = new BaseController(User);

module.exports = class UserController {

    // Index
    static index(req, res) {
        return controller.index((err, data) => {
            res.contentType('application/json');
            if (data) {
                res.render('users/index', { data: data });
            } else if (err) {
                res.status('400');
                res.render('users/error', { data: err });
            } else {
                res.status('404');
                res.render('404');
            }
        });
    }

    // Create
    static create(req, res) {
        return controller.create(req.body.user, (err, data) => {
            res.contentType('application/json');
            if (data) {
                res.render('users/create', { data: data });
            } else if (err) {
                res.status('400');
                res.render('users/error', { data: err });
            } else {
                res.status('404');
                res.render('404');
            }
        });
    }

    // Show
    static show(req, res) {
        return controller.show({
            _id: req.params.id
        }, (err, data) => {
            res.contentType('application/json');
            if (err) {
                res.status('400');
                res.render('users/error', { data: err });
            } else if (data) {
                res.render('users/show', { data: data });
            } else {
                res.status('404');
                res.render('404');
            }
        });
    }

    // Update
    static update(req, res) {
        return controller.update({
            _id: req.params.id
        }, req.body.user, (err, data) => {
            res.contentType('application/json');
            if (err) {
                res.status('400');
                res.render('users/error', { data: err });
            } else if (data) {
                res.render('users/update', { data: data });
            } else {
                res.status('404');
                res.render('404');
            }
        });
    };

    // Delete
    static delete(req, res) {
        return controller.delete({
            _id: req.params.id
        }, (err, data) => {
            res.contentType('application/json');
            if (err) {
                res.status('400');
                res.render('users/error', { data: err });
            } else if (data) {
                res.render('users/delete', { data: data });
            } else {
                res.status('404');
                res.render('404');
            }
        });
    }

}
