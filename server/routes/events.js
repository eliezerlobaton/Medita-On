const express = require('express'),
router = express.Router(),
EventsController = require('../controllers/EventsController')

router.get('/', EventsController.index);
router.get('/:id', EventsController.show);


module.exports = router