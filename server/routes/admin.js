const express = require('express'),
  router = express.Router(),
  FrasesController = require('../controllers/FrasesController')
  // adminMiddleware = require('../middlewares/admin')

router.get('/frases', FrasesController.index) // Lista de Frases
router.post('/frases', FrasesController.create) // Ver Frase
router.get('/frases/:id', FrasesController.show) // Ver Frase
router.put('/frases/:id', FrasesController.update) // Editar Frase
router.delete('/frases/:id', FrasesController.delete) // Apagar Frase


module.exports = router
