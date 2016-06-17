// https://googlecloudplatform.github.io/gcloud-node/#/docs/v0.36.0/datastore

const datastore = require('../../db');

module.exports = function(app) {    

   

    // Read All
    app.get('/posts', (req, res) => {
        let query = datastore.createQuery('Post');
        query.order('createdAt')
        // query.limit(6)
        return datastore.runQuery(query, (err, entity) => res.json(err || entity));
    });

    // Read by ID
    app.get('/posts/:id', (req, res) => {
        let _id = Number(req.params.id);
        let key = datastore.key(['Post', _id]);
        return datastore.get(key, (err, entity) => res.json(err || entity))
    });


}