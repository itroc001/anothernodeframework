// Database Connection
const Database = require('./lib/db');
let db = new Database('test');

before(() => {
    db.connect();
});

after(() => {
    db.dropAndDisconnect();
});
