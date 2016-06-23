global.chai = require('chai');
global.expect = global.chai.expect;

// Database Connection
const Database = require('../database');
let db = new Database('test');

before(() => {
    db.connect();
});

after(() => {
    db.dropAndDisconnect();
});


