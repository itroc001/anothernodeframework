const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fnhipster_development');

const schema = mongoose.Schema({
    title: String,
    content: String
});

module.exports = mongoose.model('User', schema);
