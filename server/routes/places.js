const router = require('express').Router();
controller = require('../controllers/places');


router.post('/add', controller.add);
router.post('/remove', controller.remove);
router.post('/update', controller.update);
router.get('/', controller.find);
router.get('/place/:place', controller.place)

module.exports = router;