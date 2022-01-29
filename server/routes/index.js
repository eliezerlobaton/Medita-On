const express = require('express'),
  router = express.Router(),
  indexController = require('../controllers/index')

// ROTA PREINCIPAL (Home)
router.get('/', indexController.index)

module.exports = router
