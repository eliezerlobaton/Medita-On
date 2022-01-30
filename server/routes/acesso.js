const express = require('express'),
  router = express.Router(),
  acessoController = require('../controllers/acesso')
// ROTAS DE CADATRO
router.get('/register', acessoController.register) // Form de cadastro
 router.post('/register', acessoController.add) // Execução de cadastro
router.post('/register/:id', acessoController.edit) // Form de edição de cadastro

// ROTAS DE LOGIN
router.get('/login', acessoController.loginView) // Form de login
router.post('/login', acessoController.loginAuth) // Execução de login
router.get('/logout', acessoController.logout) // Execução de logout

// ROTA DE ESQUECI A SENHA
router.get('/recuperar-senha', acessoController.lostPass) // Form de recuperação de senha

module.exports = router
