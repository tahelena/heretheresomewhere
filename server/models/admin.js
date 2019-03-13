const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const adminSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true, lowercase: true },
    password: { type: String, required: true }
});
//it's called automaticaly before saving to encript the password
adminSchema.pre('save', function (next) {
    const user = this;
    bcrypt.genSalt(10, function (err, salt) {
        if (err) { return next(err); }
        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) { return next(err); }
            user.password = hash;
            next();
        });
    });
});
//check the string password and the candidate password and login
adminSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) { return callback(err); }

        callback(null, isMatch);
    });
}
module.exports = mongoose.model('Admin', adminSchema)