module.exports = class BaseController {

    constructor(_model) {
        this.model = _model;
    }

    // Index
    index(done = () => {}) {
        this.model.find((err, doc) => {
            done(err, (doc || null))
        });
    }

    // Create
    create(data, done = () => {}) {
        let model = new this.model(data);
        model.save((err, doc) => {
            done(err, (doc || null))
        });
    }

    // Show
    show(condition, done = () => {}) {
        this.model.findOne(condition, (err, doc) => {
            done(err, (doc || null))
        });
    }

    // Update
    update(condition, newData, done = () => {}) {
        this.model.findOneAndUpdate(condition, newData, {
            new: true
        }, (err, doc) => {
            done(err, (doc || null));
        })
    }

    // Delete
    delete(condition, done = () => {}) {
        this.model.findOneAndRemove(condition, (err, doc) => {
            done(err, (doc ? true : false));
        })
    }
}
