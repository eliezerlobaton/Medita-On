<<<<<<< HEAD
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
=======
const express = require('express'),
  router = express.Router(),
  indexController = require('../controllers/index')

// ROTA PREINCIPAL (Home)
router.get('/', indexController.index)

module.exports = router
>>>>>>> dev
