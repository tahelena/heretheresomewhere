const Places = require('../models/places')
const cloudinary = require('cloudinary');
const config = require('../cloudInfo')

cloudinary.config({
    cloud_name: config.cloud_name,
    api_key: config.api_key,
    api_secret: config.api_secret
});

class PlacesController {
    async find(req, res) {
        try {
            const allPlaces = await Places.find({});
            res.send(allPlaces)
        }
        catch (error) {
            // console.log({ error })
            res.send({ error })
        }
    };
    async add(req, res) {
        console.log('fun called')
        let { place } = req.body
        try {
            const newPlace = await Places.create({ place })

            console.log(newPlace)
            res.send(newPlace)
        }
        catch (error) { res.send({ error }) }
    };
    async remove(req, res) {
        let { id } = req.body
        try {
            const removed = await Places.deleteOne({ _id: id })
            await Photos.deleteMany({ placeID: id })
            cloudinary.v2.api.delete_resources([req.body.public_id], function (err, res) {
                console.log(err, res)
            });
            res.send(removed)
        }
        catch (error) { res.send({ error }) }
    };
    async update(req, res) {
        let { id, newPlace } = req.body
        try {
            const updated = await Places.updateOne(
                { _id: id }, { $set: { place: newPlace } }
            )
            res.send(updated)
        }
        catch (error) { res.send({ error }) }
    };
    async place(req, res) {
        let { place } = req.params
        console.log('====================================>>>>> p  a r a m s ', req.params)
        try {
            const allPlaces = await Places.find(place)
            res.send(allPlaces)
        }
        catch (error) {
            console.log(error)
            res.send({ error })
        }
    };
}
module.exports = new PlacesController();