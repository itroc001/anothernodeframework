const Controller = require('../../lib/controller');
const controller = new Controller(require('../../models/post'));

module.exports = class PostController {

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
