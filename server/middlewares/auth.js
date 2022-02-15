const { Users } = require('../models')

const auth = async (req, res, next) => {

  // LIMPEZA DE COOKIES
  res.clearCookie('usuario')
  res.clearCookie('admin')

  // CAPTURA DO EMAIL E SENHA ENVIADOS
  const { email, password } = await req.body

  // BUSCA POR USUÁRIO RELACIONADO AOS DADOS ENVIADOS
  const user = await Users.findOne({where:{ email, password }});

  // VERIFICAÇÃO DE USUÁRIO E SENHA
  if(!user) {
    return res.render('login', {
      error: 'Usuário ou senha inválidos',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
    })
  } else {
    // COOKIES
    res.cookie('usuario', user.email)
    res.cookie('admin', user.admin)

  } 

 
  next()

  return

}

module.exports = auth