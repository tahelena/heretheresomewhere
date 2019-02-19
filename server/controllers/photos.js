const Photos = require('../models/photos')

const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'tahelena',
    api_key: '748838517216675',
    api_secret: 'DZvKAzg1tJ9Q64_U9xO38OAtTtM'
});

class PhotosController {

    async add(req, res) {
        let { name, img_url, camera, model, aperture, fStop, ISO, lens, createDate, placeID, portrait, public_id } = req.body
        console.log('r e q b o b y ', req.body)
        cloudinary.v2.api.delete_resources([`photo_project/${public_id}`], function (err, res) {
            console.log(err, res)
        });
        return false
        if (!placeID) {
            return res.send({ error: 'place id is required!' })
        }
        console.log('====================================>', req.body)
        try {
            const newPhoto = await Photos.create({ name, img_url, camera, model, aperture, fStop, ISO, lens, createDate, placeID, portrait })
            console.log({ newPhoto })
            res.send(newPhoto)
        }
        catch (error) {
            console.log({ error })
            res.send({ error })
        }
    };

    async findByPortrait(req, res) {
        try {
            const allPhotos = await Photos.find({ portrait: true });
            console.log(allPhotos)
            res.send(allPhotos)
        }
        catch (error) {
            console.log({ error })
            res.send({ error })
        }
    };
    async placeID(req, res) {
        // return console.log('**** ============>', req.params)
        let { placeID } = req.params
        try {
            const categories = await Photos.find({ placeID })
            res.send(categories)
        }
        catch (error) {
            console.log(error)
            res.send({ error })
        }
    };
    async remove(req, res) {
        let { id } = req.body
        try {
            const removed = await Photos.deleteOne({ _id: id })
            res.send(removed)
        }
        catch (error) { res.send({ error }) }
    };

}
module.exports = new PhotosController();