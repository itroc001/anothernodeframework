const DataStore = require('../datastore.model');
const model = new DataStore('User');

class User {

    constructor(attrs = {}) {
        this.username = attrs.username;
        this.password = attrs.password;
        this.admin = attrs.admin || false;
    }

    save(cb) {
      return model.save(this, cb);
    }

    static findAll(cb) {
      return model.findAll(cb);
    }


}

module.exports = User;
