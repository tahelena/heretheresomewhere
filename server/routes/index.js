const express = require('express'),
    router = express.Router(),
    isLoggedIn = require('../middlewares/isLoggedIn');

// mediates the access to the controller

router.get('/', isLoggedIn, (req, res) => {
    console.log('====================>>>>>>>>>>>>', req.user)
    res.send({ text: 'Welcome!!!!' })
});

module.exports = router;
