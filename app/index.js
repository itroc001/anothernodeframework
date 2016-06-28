const bodyParser = require('body-parser');
const colors =  require('colors');

// Express App
const express = require('express');
const app = express();

// Port
const port = process.env.PORT || 8080;

// Environment
const environment = process.env.NODE_ENV || 'test';

// Database
const Database = require('../database');

// Body Parser to get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Views Engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Routes
const router = express.Router();

// use morgan to log requests to the console
const morgan = require('morgan');
app.use(morgan('dev'));

// middleware to use for all requests
router.use((req, res, next) => next());

// Routes
require('./routes')(app);


// Start server
module.exports = app.listen(port, () => {
    console.log(`\nServer running on port ${port}...`.green);
    new Database(environment).connect();
});
