const { Users } = require('../models')

const auth = async (req, res, next) => {

  // LIMPEZA DE COOKIES
  res.clearCookie('usuario')
  res.clearCookie('admin')

  // CAPTURA DO EMAIL E SENHA ENVIADOS
  const { email, password } = await req.body

  // BUSCA POR USUÁRIO RELACIONADO AOS DADOS ENVIADOS
  const usuarioLogado = await Users.findOne({where:{ email, password }});

  try{
  
    if(usuarioLogado){
      console.log('usuarioLogado: ', usuarioLogado)
      // if(usuarioLogado.administrator){

      //   res.cookie('admin', usuarioLogado.administrator)

      // }

      // else{

        res.cookie('usuario', usuarioLogado)

      // }

      res.render('index',{
        usuarioLogado: usuarioLogado,
        // usuarioAdmin: req.cookies.admin
      })

    }

    else{

      res.render('login',{

        message: "Usuario invalido",
        usuarioLogado: req.cookies.usuario,
        // usuarioAdmin: req.cookies.admin
  
  
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