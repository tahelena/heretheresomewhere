

const Photos = require('../models/photos')
const cloudinary = require('cloudinary');
const config = require('../cloudInfo')
const Orders = require('../models/orders')

cloudinary.config({
    cloud_name: config.cloud_name,
    api_key: config.api_key,
    api_secret: config.api_secret
});


class PhotosController {
    constructor() {
        this.payment = this.payment.bind(this)
        this.createOrder = this.createOrder.bind(this)
    }
    async createOrder(order, res) {
        console.log('=====>', order)
        try {
            const myorder = await Orders.create(order)
            res.send(myorder)
        } catch (error) {
            console.log(error)
        }
    }
    async payment(req, res) {
        let { orderInfo, total } = req.body
        orderInfo.total = total
        const stripe = require("stripe")("sk_test_iFqV8jsKdlhN0xG3wglcCVMH");
        try {
            const myPayment = await stripe.charges.create(req.body.stripe);
            if (myPayment.status === 'succeeded') {
                // res.send({ message: 'Ṕayment succesfull' })
                this.createOrder(orderInfo, res)
            } else {
                res.send({ message: 'Something went wrong...' })
            }
        } catch (error) {
            console.log(error)
            res.send({ error })
        }

    }


    async addToCart(req, res) {
        let { id } = req.params;
        try {
            const picture = await Photos.find({ _id: id }) //this is to have the separete items in an array separate by comma
            res.send(picture)
        }
        catch (error) {
            console.log(error)
        }
    }
    async add(req, res) {
        let { name, img_url, camera, model, aperture, fStop, ISO, lens, createDate, placeID, portrait, public_id, home } = req.body
        if (!placeID) {

            return res.send({ error: 'place id is required!' })
        }
        try {
            const newPhoto = await Photos.create({ name, img_url, camera, model, aperture, fStop, ISO, lens, createDate, placeID, portrait, home })
            // console.log({ newPhoto })
            res.send(newPhoto)
        }
        catch (error) {
            console.log('r e q b o b y ', req.body)
            cloudinary.v2.api.delete_resources([req.body.public_id], function (err, res) {
                console.log(err, res)
            });
            console.log({ error })
            res.send({ error })
        }
    };

    async findByPortrait(req, res) {
        try {
            const allPhotos = await Photos.find({ portrait: true });
            // console.log(allPhotos)
            res.send(allPhotos)
        }
        catch (error) {
            console.log({ error })
            res.send({ error })
        }
    };

    async findByHome(req, res) {
        try {
            const allHome = await Photos.find({ home: true });
            // console.log(allHome)
            res.send(allHome)
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
            // cloudinary.v2.api.delete_resources([req.body.public_id], function (err, res) {
            //     console.log(err, res)
            // });
            res.send(removed)
        }
        catch (error) { res.send({ error }) }
    };

}
module.exports = new PhotosController();