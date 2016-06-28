const UserController = require('./controllers/users');

module.exports = function(app) {

    const userController = new UserController();

    // Users
    app.get('/users', userController.index);
    app.post('/users', userController.create);
    app.get('/users/:id', userController.show);
    app.put('/users/:id', userController.update);
    app.delete('/users/:id', userController.delete);

}
