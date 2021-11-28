const usuariosPlaceholder = require('../data/usuariosPlaceholder.json')
const produtosPlaceholder = require('../data/produtosPlaceholder.json')

const controller = {
  index: (req, res, next) => {
    res.render('index', {
      titulo: 'Jeff Co.',
      subtitulo: 'Confira nossos Produtos e Usuários',
      usuarios: usuariosPlaceholder,
      produtos: produtosPlaceholder,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      bannerTopo: '/images/banner-topo-index-1564x472.png',
      bannerMeio: '/images/banner-meio-index-1920x1080.png'
    });
  }
}

module.exports = controller
