const pluralize = require('pluralize');

module.exports = class Controller {

    constructor(_model) {
        this.model = _model;
        this.name = pluralize(_model.modelName.toLowerCase());
        this._activeAction;
    }

    // Index
    index(done = () => {}) {
        this._activeAction = 'index';
        this.model.find((err, data) => {
            done(err, data)
        });
    }

    // Create
    create(data, done = () => {}) {
        this._activeAction = 'create';
        let model = new this.model(data);
        model.save((err, data) => {
            done(err, data)
        });
    }

    // Show
    show(condition, done = () => {}) {
        this._activeAction = 'show';
        this.model.findOne(condition, (err, data) => {
            done(err, data)
        });
    }

    // Update
    update(condition, newData, done = () => {}) {
        this._activeAction = 'update';
        this.model.findOneAndUpdate(condition, newData, {
            new: true
        }, (err, data) => {
            done(err, data);
        })
    }

    // Delete
    delete(condition, done = () => {}) {
        this._activeAction = 'delete';
        this.model.findOneAndRemove(condition, (err, data) => {
            done(err, !!data);
        })
    }

    _renderView(res, _error, _data) {
        let status, view, data;

        if (_error) {
            status = 400;
            view = this.name + '/error';
            data = { data: _error };
        } else if (_data) {
            status = 200;
            view = this.name + '/' + this._activeAction;
            data = { data: _data };
        } else {
            status = 404;
            view = '404';
            data = {};
        }
        return res.status(status).render(view, data);
    }

    _renderViewAsJSON(res, _error, _data) {
        res.contentType('application/json');
        this._renderView(res, _error, _data);
    }
}
