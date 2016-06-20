const express = require('express');
const bodyParser = require('body-parser');

const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

var morgan = require('morgan');

// Express App
const app = express();

// Configure bodyParser to get data from POST
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Port
const port = process.env.PORT || 8080;

// Routes
const router = express.Router();

// Secret Token
app.set('secretToken', keys.secret);

// use morgan to log requests to the console
app.use(morgan('dev'));

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    next(); // make sure we go to the next routes and don't stop here
});

// Components
// require('./post')(app);
require('./user')(app);

// Register Routes
app.use('/api', router);

// Start server
app.listen(port);
console.log('\nServer running on port ' + port + '...\n');