const bodyParser = require('body-parser');
const morgan = require('morgan');
const colors =  require('colors');

// Express App
const express = require('express');
const app = express();

// Port
const port = process.env.PORT || 8080;

// Environment
const environment = process.env.NODE_ENV || 'test';

// Database Connection
const Database = require('../database');
const db = new Database(environment);
db.connect();

// Body Parser to get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Routes
const router = express.Router();

// use morgan to log requests to the console
app.use(morgan('dev'));

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    next(); // make sure we go to the next routes and don't stop here
});

// Routes
require('./routes')(app);

// Register Routes
app.use('/api', router);

// Start server
app.listen(port);
console.log(`\nServer running on port ${port}...\n`.green);
