const express = require('express'),
  router = express.Router(),
  acessoController = require('../controllers/acesso'),
  authMiddleware = require('../middlewares/auth')

// ROTAS DE CADATRO
router.get('/cadastro', acessoController.register) // Form de cadastro
router.post('/cadastro', acessoController.add) // Execução de cadastro
router.post('/cadastro/:id', acessoController.edit) // Form de edição de cadastro

// ROTAS DE LOGIN
router.get('/login', acessoController.login) // Form de login
router.post('/login', authMiddleware, acessoController.auth) // Execução de login
router.get('/logout', acessoController.logout) // Execução de logout

// ROTA DE ESQUECI A SENHA
router.get('/recuperar-senha', acessoController.lostPass) // Form de recuperação de senha

module.exports = router
