const User = require('../../models/user');
const Controller = require('../');
// const controller = new Controller(User);

module.exports = class UserController {

    constructor() {
        this._controller = new Controller(User)
    }

    // Index
    index(req, res) {
        this._controller.index((err, data) => {
            this._controller._renderViewAsJSON(res, err, data);
        });
    }

    // Create
    create(req, res) {
        this._controller.create(req.body.user, (err, data) => {
            this._controller._renderViewAsJSON(res, err, data);
        });
    }

    // Show
    show(req, res) {
        this._controller.show({
            _id: req.params.id
        }, (err, data) => {
            this._controller._renderViewAsJSON(res, err, data);
        });
    }

    // Update
    update(req, res) {
        this._controller.update({
            _id: req.params.id
        }, req.body.user, (err, data) => {
            this._controller._renderViewAsJSON(res, err, data);
        });
    };

    // Delete
    delete(req, res) {
        this._controller.delete({
            _id: req.params.id
        }, (err, data) => {
            this._controller._renderViewAsJSON(res, err, data);
        });
    }

}
