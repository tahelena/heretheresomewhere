const mongoose = require('mongoose');

const placesSchema = new mongoose.Schema({
    place: { type: String, unique: true, required: true },
})

module.exports = mongoose.model('places', placesSchema)