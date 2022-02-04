const express = require('express'),
  router = express.Router(),
  FrasesController = require('../controllers/FrasesController'),
  PanelController = require('../controllers/PanelController'),
  UserController = require('../controllers/UserController')
  // adminMiddleware = require('../middlewares/admin')


router.get('/', PanelController.index) // index

router.get('/userslist', UserController.index)


router.get('/frases', FrasesController.index) // Lista de Frases
router.post('/frases', FrasesController.create) // Ver Frase
router.get('/frases/:id', FrasesController.show) // Ver Frase
router.put('/frases/:id', FrasesController.update) // Editar Frase
router.delete('/frases/:id', FrasesController.delete) // Apagar Frase


module.exports = router
