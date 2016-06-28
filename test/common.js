const mongoose = require('mongoose');

require('../app'); // for full app coverage and DB connection

// Chai
global.chai = require('chai');
global.expect = global.chai.expect;

// Sinon-Chai
global.sinon = require('sinon')
chai.use(require('sinon-chai'));

// Drop DB after each test is done...
afterEach((done) => {
    mongoose.connection.db.dropDatabase(done);
});

