const express = require('express'),
  router = express.Router(),
  userController = require('../controllers/UserController')

// ROTAS DE USUÁRIOS (GERAL E POR ID)
router.get('/:id', userController.show)
router.get('/', userController.index)
router.post('/register', userController.create)
router.delete('/:id', userController.delete)


module.exports = router
