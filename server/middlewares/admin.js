const { Permissions } = require('../models')
const jwt = require('../helpers/jwt');

const admin = async (req, res, next) => {

    const jwService = require('jsonwebtoken')

  let user = await Permissions.findOne({ where: { id_user } });
  
  if ((user.administrator == false) && (jwt.verifyToken(jwService))) {
    res.render('/')
    console.log("Voce não tem acesso a essa opção")
    return
  }

  next()
  
  return

}

module.exports = admin