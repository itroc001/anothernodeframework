// https://googlecloudplatform.github.io/gcloud-node/#/docs/v0.36.0/datastore

const datastore = require('../db');
const Post = require('./model');

module.exports = function(app) {

    // [C]reate
    app.post('/posts', (req, res) => {
        let key = datastore.key('Post');
        let post = new Post(req.body);
        return datastore.save({
            key: key,
            data: post.data
        }, (err) => res.json(err || { success: true }));
    });

    // [R]ead
    app.get('/posts/:id', (req, res) => {
        let _id = Number(req.params.id);
        let key = datastore.key(['Post', _id]);
        return datastore.get(key, (err, entity) => res.json(err || entity))
    });

    // [U]pdate
    app.put('/posts/:id', (req, res) => {
        let _id = Number(req.params.id);
        let key = datastore.key(['Post', _id]);
        return datastore.save({
            key: key,
            data: post.data
        }, (err) => res.json(err || { success: true }));
    });

    // [D]elete
    app.delete('/posts/:id', (req, res) => {
        let _id = Number(req.params.id);
        let key = datastore.key(['Post', _id]);
        return datastore.delete(key, (err) => res.json(err || { success: true }));
    });

    // Read All
    app.get('/posts', (req, res) => {
        let query = datastore.createQuery('Post');
        return datastore.runQuery(query, (err, entities) => res.json(err || entities));
    });

}