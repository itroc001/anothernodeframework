const User = require('../../models/user');
const BaseController = require('../../lib/BaseController');
const controller = new BaseController(User);

module.exports = class UserController {

    // Index
    static index(req, res) {
        return controller.index((err, doc) => res.json(err || doc));
    }

    // Create
    static create(req, res) {
        return controller.create(req.body.user, (err, doc) => res.json(err || doc));
    }

    // Show
    static show(req, res) {
        return controller.show({
            _id: req.params.id
        }, (err, doc) => res.json(err || doc))
    }

    // Update
    static update(req, res) {
        return controller.update({
            _id: req.params.id
        }, req.body.user, (err, doc) => res.json(err || doc));
    };

    // Delete
    static delete(req, res) {
        return controller.delete({
            _id: req.params.id
        }, (err, doc) => res.json(err || doc));
    }

}
