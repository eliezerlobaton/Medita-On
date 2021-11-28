const produtosPlaceholder = require('../data/produtosPlaceholder.json')

const controller = {
  index: async (req, res, next) => {
    return res.render('products', {
      titulo: 'Produtos',
      subtitulo: 'Produtos incríveis para você',
      produtos: produtosPlaceholder,
      textoPromo: 'Ofertas imperdíveis',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      bannerTopo: '/images/banner-topo-produtos-1564x472.png',
      bannerMeio: '/images/banner-meio-produtos-1920x1080.png'
    })
  },
  show: async (req, res, next) => {
    const { id } = await req.params
    const produto = produtosPlaceholder[id]
    res.render('product', {
      titulo: `${produto.nome}`,
      subtitulo: `${produto.nome} | ${produto.categoria}`,
      produto,
      textoPromo: 'Últimas unidades!',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      bannerTopo: '/images/banner-topo-produto-1564x472.png',
            bannerMeio: '/images/banner-meio-produto-1920x1080.png'
    });
  },
  list: (req, res, next) => {
    let admin = req.cookies.admin
    if (!admin || admin === 'false') {
      res.render('products', {
        titulo: 'Ops!',
        subtitulo: 'Você não pode gerenciar produtos, apenas visualizá-los.',
        produtos: produtosPlaceholder,
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: admin,
        bannerTopo: '/images/banner-topo-produtos-1564x472.png',
        bannerMeio: '/images/banner-meio-produtos-1920x1080.png'
      });
    } else {
      res.render('productsList', {
        titulo: 'Produtos',
        subtitulo: 'Listagem de Produtos',
        produtos: produtosPlaceholder,
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: admin
      });
    }
  }
}

module.exports = controller
