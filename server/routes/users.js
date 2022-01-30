<<<<<<< HEAD
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
=======
const express = require('express'),
  router = express.Router(),
  userController = require('../controllers/users')

// ROTAS DE USUÁRIOS (GERAL E POR ID)
router.get('/:id', userController.show)
router.get('/', userController.index)

module.exports = router
>>>>>>> dev
