const datastore = require('./db');

class DataStore {

    constructor(_kind) {
        this.kind = _kind;
    }

    save(data, callback = () => {}) {
        let key = datastore.key(this.kind);
        return datastore.save({
            key: key,
            data: data
        }, (err) => {
            return callback(err);
        });
    }

    delete(callback = () => {}) {
        let key = datastore.key([this.kind]);
        return datastore.delete(this.key, (err) => {
            return callback(err);
        });
    }


    findById(_id, callback = () => {}) {
        let key = datastore.key([this.kind, _id]);
        return datastore.get(key, (err, response) => {
            return callback(err, response);
        });
    }

    findAll(callback = () => {}) {
        let query = datastore.createQuery(this.kind);
        return datastore.runQuery(query, (err, response) => {
            return callback(err, response);
        });
    }

}

module.exports = DataStore;
