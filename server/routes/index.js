
const express = require('express'),
  router = express.Router(),
  indexController = require('../controllers/index'),
  LoginController = require('../controllers/LoginController'),
  RegisterController = require('../controllers/RegisterController'),
  UserController = require('../controllers/UserController')

// ROTA PREINCIPAL (Home)
router.get('/', indexController.index);

// // Formulários
// router.get('/login', LoginController.index);
// router.post('/login', LoginController.login);

// router.get('/register', RegisterController.index);
// router.post('/register', RegisterController.create);

router.get("/edit-perfil", UserController.editPerfil);
router.put("/edit-profile/:id", UserController.editProfile);
router.post("/editar", UserController.editar);
router.get("/user/:id", UserController.show);

module.exports = router