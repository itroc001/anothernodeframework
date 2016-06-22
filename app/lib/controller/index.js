module.exports = class Controller {

    constructor(_model) {
        this.model = _model;
    }

    // Index
    index(req, res, next) {
        this.model.find(function(err, results) {
            return res.json(err || results)
        });
    }

    // Create
    create(req, res, next) {
        let model = new this.model(req.body);
        model.save((err, entity) => {
            return res.json(err || entity);
        });
    }

    // Show
    show(req, res, next) {
        this.model.findById(req.params['id'], (err, entity) => {
            return res.json(err || entity)
        });
    }

    // Update
    update(req, res, next) {
        this.model.findOneAndUpdate({
            _id: req.params['id']
        }, req.body, {
            new: true
        }, (err, entity) => {
            return res.json(err || entity);
        })
    }

    // Delete
    delete(req, res, next) {
        this.model.findOneAndRemove({
            _id: req.params['id']
        }, {}, (err) => {
            return res.json(err || {
                success: true
            })
        });
    }
}
