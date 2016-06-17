const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Configure bodyParser to get data from POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Port
const port = process.env.PORT || 8080;

// Routes
const router = express.Router();

router.get('/', (req, res) => { 
    res.json({ message: 'Yo!' }) 
});

// Register Routes
app.use('/api', router);

// Start server
app.listen(port);
console.log('Magic happens on port ' + port);
