const express = require('express');
const bodyParser = require('body-parser');

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

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// Controllers
require('./app/controllers/posts.controller')(app);

// Register Routes
app.use('/api', router);

// Start server
app.listen(port);
console.log('Magic happens on port ' + port);