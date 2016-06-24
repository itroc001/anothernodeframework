const mongoose = require('mongoose');

require('../app'); // for full app coverage and DB connection

global.chai = require('chai');
global.expect = global.chai.expect;

// Drop DB after each test is done...
afterEach((done) => {
    mongoose.connection.db.dropDatabase(done);
});
