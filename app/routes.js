const UserController = require('./controllers/users');

module.exports = function(app) {

    // Controllers
    const userController = new UserController();


    // Users
    app.get('/users', (req, res) => userController.index(req, res));
    app.post('/users', (req, res) => userController.create(req, res));
    app.get('/users/:id', (req, res) => userController.show(req, res));
    app.put('/users/:id', (req, res) => userController.update(req, res));
    app.delete('/users/:id', (req, res) => userController.delete(req, res));

}
