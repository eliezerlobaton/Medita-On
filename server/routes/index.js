
const express = require('express'),
  router = express.Router(),
  indexController = require('../controllers/index'),
  LoginController = require('../controllers/LoginController'),
  RegisterController = require('../controllers/RegisterController'),
  UserController = require('../controllers/UserController'),
  authMiddleware = require('../middlewares/auth')

// ROTA PREINCIPAL (Home)
router.get('/', indexController.index);

// // Formulários
router.get('/login', LoginController.login);
router.post('/login', authMiddleware, LoginController.auth);
router.get('/logout', LoginController.logout);

router.get('/register', RegisterController.index);
router.post('/register', RegisterController.create);

router.get("/edit-perfil", UserController.editPerfil);
router.put("/edit-profile/:id", UserController.editProfile);
router.post("/editar", UserController.editar);
router.get("/user/:id", UserController.show);
router.get('/user/:id/excluir', UserController.delete);

module.exports = router