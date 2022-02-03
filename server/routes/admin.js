const express = require('express'),
  router = express.Router(),
  FrasesController = require('../controllers/FrasesController'),
  PanelController = require('../controllers/PanelController'),
  UserController = require('../controllers/UserController'),
  adminMiddleware = require('../middlewares/admin')


router.get('/', adminMiddleware, PanelController.index) // index

router.get('/users', adminMiddleware, UserController.index)


router.get('/frases',  adminMiddleware, FrasesController.index) // Lista de Frases
router.post('/frases', adminMiddleware, FrasesController.create) // Ver Frase
router.get('/frases/:id', adminMiddleware, FrasesController.show) // Ver Frase
router.put('/frases/:id', adminMiddleware, FrasesController.update) // Editar Frase
router.delete('/frases/:id', adminMiddleware, FrasesController.delete) // Apagar Frase


module.exports = router