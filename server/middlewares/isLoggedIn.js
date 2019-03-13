var jwt = require('jsonwebtoken'),
    config = require('../config');

// this goes inbetween the route and the controller function

// ======================MIDDLEWARE====================== \\
var isLoggedIn = (req, res, next) => {
    //next => allows to go to the next function (the controllers)
    var token = req.headers.authorization // always put the token in the headers in the Autorization
    if (token) {
        try {
            //dicrypt token
            const decoded = jwt.verify(JSON.parse(token), config.secret)
            req.token = token
            req.user = decoded;
            if (decoded) {
                console.log('we are in business!')
                return next();
            }
        }
        catch (error) {
            res.json({ error: error })
        }
    }


}
module.exports = isLoggedIn;