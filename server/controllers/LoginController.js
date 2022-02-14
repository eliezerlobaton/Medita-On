// const { Users } = require('../models');

const controller = {

    // index:(req,res) =>{
    //     return res.render('login');
    // },

    login: async (req, res, next) => {
  
        res.render('login', {

            usuarioLogado: req.cookies.usuario,
            usuarioAdmin: req.cookies.admin

        })

    },

    auth: (req, res, next) => {

        const {user} = req.user;

        res.redirect('index', {

            user: user

        })
    
    }
}

module.exports = controller;