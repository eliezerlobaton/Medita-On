const usuariosPlaceholder = require('../data/usuariosPlaceholder.json')
const produtosPlaceholder = require('../data/produtosPlaceholder.json')

const controller = {
  index: (req, res, next) => {
    res.render('index');
  }
}

module.exports = controller
