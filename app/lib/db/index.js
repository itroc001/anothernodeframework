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
