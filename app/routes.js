const UserController = require('./controllers/users');

module.exports = function(app) {

    // Users
    app.route('/users').get(UserController.index);
    app.route('/users').post(UserController.create);
    app.route('/users/:id').get(UserController.show);
    app.route('/users/:id').put(UserController.update);
    app.route('/users/:id').delete(UserController.delete);

}
