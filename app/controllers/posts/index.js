const Post = require('../../models/post');

module.exports = class PostController {

    // Index
    static index(req, res, next) {
        Post.find(function(err, results) {
            return res.json(err || results)
        });
    }

    // Create
    static create(req, res, next) {
        let post = new Post(req.body);
        post.save((err, entity) => {
            res.json(err || entity);
        });
    }

    // Show
    static show(req, res, next) {
        Post.findById(req.params['id'], (err, entity) => {
            res.json({ error: err } || entity)
        });
    }

    // Update
    static update(req, res, next) {
        Post.findOneAndUpdate({_id: req.params['id'] }, req.body, { new: true }, (err, entity) => {
            res.json({ error: err } || entity);
        })
    }

    // Delete
    static delete(req, res, next) {
        Post.findOneAndRemove({ _id: req.params['id']}, {}, (err) => {
            res.json({ error: err } || { success: true })
        });
    }

}
