const { events } = require('../data.json')
const { Users } = require('../models')

const controller = {
  
  index: (req, res) => {
    console.log('req.cookies.usuario: ', req.cookies.usuario)
    res.render('index', {
      events,
      usuarioLogado: req.cookies.usuario,
      // usuarioAdmin: req.cookies.admin
    });
  },
}



module.exports = controller
