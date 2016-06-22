const colors =  require('colors');
const mongoose = require('mongoose');
const config = require('../../config.json');

module.exports = (env) => {
    let dbName = config.database + '_' + env;
    mongoose.connect(dbName);
    console.log('Database: ' + dbName);
}

module.exports = class Database {

    constructor(env = 'development') {
        this.dbName = config.database + '_' + env;
    }

    connect() {
        console.log(`...connected to database ${this.dbName.underline} `.cyan);
        return mongoose.connect(this.dbName);
    }

    disconnect() {
        console.log(`...disconnect from database ${this.dbName.underline} `.cyan);
        return mongoose.connection.close();
    }

    dropAndDisconnect() {
        console.log(`...dropped database ${this.dbName.underline} (to the ground) ... disconnected.`.cyan);
        mongoose.connection.db.dropDatabase()
        return mongoose.connection.close();
    }


}
