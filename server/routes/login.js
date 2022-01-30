const express = require('express')
const LoginController = require('../controllers/LoginController')

const router = express.Router()

router.get('/', LoginController.index)
router.post('/access', LoginController.access)

module.exports = router