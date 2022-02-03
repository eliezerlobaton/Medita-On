
const express = require('express'),
  router = express.Router(),
  indexController = require('../controllers/index'),
  LoginController = require('../controllers/LoginController'),
  RegisterController = require('../controllers/RegisterController')

// ROTA PREINCIPAL (Home)
router.get('/', indexController.index);

// // Formulários
router.get('/login', LoginController.index);
router.post('/login', LoginController.login);

router.get('/register', RegisterController.index);
router.post('/register', RegisterController.create);


module.exports = router