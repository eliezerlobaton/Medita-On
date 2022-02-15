// const { Users } = require('../models');

const controller = {


    login: async (req, res, next) => {
  
        res.render('login', {

            usuarioLogado: req.cookies.usuario,
            usuarioAdmin: req.cookies.admin

        })

    },

    auth: (req, res, next) => {

        res.redirect('../');
    
    }
}

module.exports = controller;