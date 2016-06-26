const User = require('../../models/user');
const BaseController = require('../');
const controller = new BaseController(User);

module.exports = class UserController {

    // Index
    static index(req, res) {
        return controller.index((err, data) => {
            res.contentType('application/json');
            res.render('users/index', { data: data, error: err });
        });
    }

    // Create
    static create(req, res) {
        return controller.create(req.body.user, (err, data) => {
            res.contentType('application/json');
            res.render('users/create', { data: data, error: err });
        });
    }

    // Show
    static show(req, res) {
        return controller.show({
            _id: req.params.id
        }, (err, data) => {
            res.contentType('application/json');
            res.render('users/show', { data: data, error: err });
        });
    }

    // Update
    static update(req, res) {
        return controller.update({
            _id: req.params.id
        }, req.body.user, (err, data) => {
            res.contentType('application/json');
            res.render('users/update', { data: data, error: err });
        });
    };

    // Delete
    static delete(req, res) {
        return controller.delete({
            _id: req.params.id
        }, (err, data) => {
            res.contentType('application/json');
            res.render('users/delete', { data: data, error: err });
        });
    }

}
