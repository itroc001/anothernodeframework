const colors = require('colors');
const mongoose = require('mongoose');

const database = 'mongodb://localhost/fnhipster';

module.exports = class Database {

    constructor(env = 'development') {
        this.dbName = database + '_' + env;
    }

    connect() {
        console.log(`\nConnected to database ${this.dbName.underline} \n`.cyan);
        return mongoose.connect(this.dbName);
    }

    disconnect() {
        console.log(`\nDisconnected from database ${this.dbName.underline} \n`.cyan);
        return mongoose.connection.close();
    }

    dropAndDisconnect() {
        console.log(`\nDropped database ${this.dbName.underline} (to the ground) ... and disconnected. \n`.cyan);
        mongoose.connection.db.dropDatabase()
        return mongoose.connection.close();
    }


}
