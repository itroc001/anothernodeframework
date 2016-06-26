const colors = require('colors');
const mongoose = require('mongoose');

const database = 'mongodb://localhost/fnhipster';

module.exports = class Database {

    constructor(env = 'development') {
        this.dbName = database + '_' + env;
    }

    connect() {
        console.log(`\nConnected to database ${this.dbName.underline} \n`.green);
        return mongoose.connect(this.dbName);
    }

}
