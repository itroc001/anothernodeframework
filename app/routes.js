const PostController = require('./controllers/posts');

module.exports = function(app) {

    // Posts
    app.route('/posts').get(PostController.index);
    app.route('/posts').post(PostController.create);
    app.route('/posts/:id').get(PostController.show);
    app.route('/posts/:id').put(PostController.update);
    app.route('/posts/:id').delete(PostController.delete);

}
