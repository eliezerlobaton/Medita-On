const express = require('express'),
  router = express.Router(),
  userController = require('../controllers/users')

// ROTAS DE USUÁRIOS (GERAL E POR ID)
router.get('/:id', userController.show)
router.get('/', userController.index)

module.exports = router
