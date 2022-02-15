const { events } = require('../data.json')
const { Users } = require('../models')

const controller = {
  
  index: (req, res) => {
    res.render('index', {
      events,
      Users: Users,
      usuarioLogado: req.cookies.usuario,
      usuarioLogado: req.cookies.admin
    });
  },
}



module.exports = controller
