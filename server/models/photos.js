const mongoose = require('mongoose');

const photosSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, minlength: 6 },
    img_url: { type: String, unique: true, required: true },
    camera: { type: String, required: true },
    model: { type: String, required: true },
    aperture: { type: String, required: true },
    fStop: { type: String, required: true },
    ISO: { type: String, required: true },
    lens: { type: String },
    createDate: { type: String, required: true, unique: true },
    portrait: { type: Boolean, required: true },
    placeID: { type: mongoose.Types.ObjectId, ref: 'Places', required: true }

})


module.exports = mongoose.model('photos', photosSchema)
