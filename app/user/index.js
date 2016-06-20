// https://googlecloudplatform.github.io/gcloud-node/#/docs/v0.36.0/datastore

const User = require('./user.model');

module.exports = function(app) {

     // [C]reate
    app.post('/users', (req, res) => {
        let params = req.body;
        let user = new User(params);
        return user.save((err) => res.json(err || { success: true }));
    });

    // [R]ead
    app.get('/users/:id', (req, res) => {
        let _id = Number(req.params.id);
        let user = new User({id: _id});
        return user.find((err, entity) => res.json(err || entity))
    });

    // [U]pdate
    app.put('/users/:id', (req, res) => {
        let _id = Number(req.params.id);
        let params = req.body;
        params.id = _id;
        let user = new User(params);
        return user.save((err) => res.json(err || { success: true }));
    });

    // [D]elete
    app.delete('/users/:id', (req, res) => {
        let _id = Number(req.params.id);
        let user = new User({id: _id});
        return user.delete((err) => { res.json(err || { success: true }) });
    });

    // Read All
    app.get('/users', (req, res) => {
        let user = new User();
        return user.findAll((err, results) => { res.json(err || results) });
    });

}
