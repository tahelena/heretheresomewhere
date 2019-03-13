const app = require('express')(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),

    port = process.env.port || 4001;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> cors
const cors = require('cors') // to send request from different url
// app.use(cors())// to enable cors for any requests
app.options('*', cors())//or enable it only for the specific url

// allowing requests from the front-end to our server with api calls
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

    next();
});

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> database connection
mongoose.connect('mongodb://127.0.0.1/photo_project', () => {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> connected to photo_projectDB');
});



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> routes
const placesRoute = require('./routes/places');
const photosRoute = require('./routes/photos');
const adminRoute = require('./routes/admin')

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> user routes
app.use('/places', placesRoute)
app.use('/photos', photosRoute)
app.use('/admin', adminRoute)
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> start server
app.listen(port, () => console.log(`*************************************************** server serving on port ${port}`))
