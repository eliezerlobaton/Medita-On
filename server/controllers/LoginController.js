// const { Users } = require('../models');

const controller = {


    login: async (req, res, next) => {
  
        res.render('login', {

            usuarioLogado: req.cookies.usuario,
            // usuarioAdmin: req.cookies.admin

        })

    },

    auth: (req, res, next) => {

        res.redirect('../');
    
    },

    logout: (req, res, next) => {
        res.clearCookie('usuario').clearCookie('admin').redirect('../../')
      }
}

module.exports = controller;