var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    bcrypt = require('bcrypt-nodejs'),
    jwt = require('jsonwebtoken'),
    config = require('../config'),
    Admin = require('../models/admin'),
    controller = require('../controllers/admin');

router.get('/', controller.find);
// router.post('/register', controller.register);
router.post('/login', controller.login);
module.exports = router