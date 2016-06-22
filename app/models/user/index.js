const mongoose = require('mongoose');

const schema = mongoose.Schema({
    username: String,
    password: String,
    admin: Boolean
});

module.exports = mongoose.model('User', schema);
