const { Users } = require('../models')

const auth = async (req, res, next) => {

  // LIMPEZA DE COOKIES
  res.clearCookie('usuario')
  res.clearCookie('admin')

  // CAPTURA DO EMAIL E SENHA ENVIADOS
  const { email, password } = await req.body

  // BUSCA POR USUÁRIO RELACIONADO AOS DADOS ENVIADOS
  const user = await Users.findOne({where:{ email, password }});

  try{
  
    if(user){

      if(user.administrator){

        res.cookie('admin', user.administrator)

      }

      else{

        res.cookie('usuario', user)

      }

      res.render('index')

    }

    else{

      res.render('login',{

        message: "Usuario invalido",
        usuarioLogado: req.cookies.usuario,
        usuarioLogado: req.cookies.admin
  
  
      })

    }

  }

  catch(err){

    res.send("EITA!!!")


  }

  next()

  return

}

module.exports = auth