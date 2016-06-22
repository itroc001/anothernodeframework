const PostController = require('./controllers/posts');
const UserController = require('./controllers/users');

module.exports = function(app) {

    // Posts
    app.route('/posts').get(PostController.index);
    app.route('/posts').post(PostController.create);
    app.route('/posts/:id').get(PostController.show);
    app.route('/posts/:id').put(PostController.update);
    app.route('/posts/:id').delete(PostController.delete);

    // Users
    app.route('/users').get(UserController.index);
    app.route('/users').post(UserController.create);
    app.route('/users/:id').get(UserController.show);
    app.route('/users/:id').put(UserController.update);
    app.route('/users/:id').delete(UserController.delete);

}
