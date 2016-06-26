const UserController = require('./controllers/users');

module.exports = function(app) {

    // Users
    app.get('/users', UserController.index);
    app.post('/users', UserController.create);
    app.get('/users/:id', UserController.show);
    app.put('/users/:id', UserController.update);
    app.delete('/users/:id', UserController.delete);

}
