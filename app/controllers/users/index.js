const User = require('../../models/user');
const Controller = require('../../lib/controller');
const controller = new Controller(User);

module.exports = class UserController {

    static index(req, res, next) {
        return controller.index(req, res, next);
    }

    static create(req, res, next) {
        return controller.create(req, res, next);
    }

    static show(req, res, next) {
        return controller.show(req, res, next);
    }

    static update(req, res, next) {
        return controller.update(req, res, next);
    }

    static delete(req, res, next) {
        return controller.delete(req, res, next);
    }

}
