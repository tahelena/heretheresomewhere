const router = require('express').Router();
controller = require('../controllers/photos');

router.get('/', controller.findByPortrait);
router.post('/add', controller.add);
router.get('/place/:placeID', controller.placeID)
router.post('/remove', controller.remove);


module.exports = router;