const express = require('express'),
router = express.Router(),
EventsController = require('../controllers/EventsController')

router.get('/', EventsController.index);


module.exports = router