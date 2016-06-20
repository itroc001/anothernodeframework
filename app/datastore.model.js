const datastore = require('./db');

class DataStoreModel {

    constructor(_kind, _id) {
        this.key = datastore.key([_kind, _id]);
        this.params = null;
    }


    save(callback = () => {}) {
        return datastore.save({
            key: this.key,
            data: this.params
        }, (err) => {
            return callback(err);
        });
    }

    delete(callback = () => {}) {
        return datastore.delete(this.key, (err) => {
            return callback(err);
        });
    }

    find(callback = () => {}) {
        return datastore.get(this.key, (err, response) => {
            return callback(err, response);
        });
    }

    findAll(callback = () => {}) {
        let query = datastore.createQuery(this.key.kind);
        return datastore.runQuery(query, (err, response) => {
            return callback(err, response);
        });
    }

}

module.exports = DataStoreModel;
