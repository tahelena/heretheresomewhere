const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, unique: false, required: true, minlength: 8 }
});

module.exports = mongoose.model('login', adminSchema)