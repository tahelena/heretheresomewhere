const Places = require('../models/places')

class PlacesController {
    async find(req, res) {
        try {
            const allPlaces = await Places.find({});
            // console.log({ allPlaces })
            res.send(allPlaces)
        }
        catch (error) {
            console.log({ error })
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
            // await Photos.deleteMany({ placeID: id })
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