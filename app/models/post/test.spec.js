const chai = require('chai');
const Post = require('./index');

describe('Post', () => {

    let post;

    before(() => {
        post = new Post({
            title: 'test title',
            content: 'test content'
        });
    });


    it('create post', (done) => {
        return post.save(done);
    });

    it('update post', (done) => {
        return Post.findOneAndUpdate({_id: post._id }, {
            title: 'updated title'
        }, { new: true }, done);
    });

    it('find post', (done) => {
        return Post.findById(post._id, done);
    });

    it('find all posts', (done) => {
        return Post.find({}, done);
    });


    it('delete post', (done) => {
        return Post.findOneAndRemove({ _id: post._id}, {}, done);
    });


});
