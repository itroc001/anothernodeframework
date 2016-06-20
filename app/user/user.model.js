const DataStoreModel = require('../datastore.model');

class UserModel extends DataStoreModel {


    constructor(attrs = {}) {
        super('User', attrs.id);

        this.params = {
            username: attrs.username,
            password: attrs.password,
            admin: attrs.admin || false
        };


    }


}

module.exports = UserModel;
