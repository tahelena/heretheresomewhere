const router = require('express').Router();
controller = require('../controllers/photos');

router.get('/photo/:photoID', controller.addToCart)

router.get('/', controller.findByHome);
router.get('/portrait', controller.findByPortrait);
router.post('/add', controller.add);
router.get('/place/:placeID', controller.placeID)
router.post('/remove', controller.remove);
router.post('/payment', controller.payment);



module.exports = router;