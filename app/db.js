const mongoose = require('mongoose');
const config = require('./config.json');

module.exports = (env) => {
    let dbName = config.database + '_' + env;
    mongoose.connect(dbName);
    console.log('Database: ' + dbName);
}
