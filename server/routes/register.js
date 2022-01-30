const express = require('express')
const RegisterController = require('../controllers/RegisterController')

const router = express.Router()

router.get('/', RegisterController.index)
router.post('/add', RegisterController.add)

module.exports = router