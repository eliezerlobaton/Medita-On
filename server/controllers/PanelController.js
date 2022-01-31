const { Phrases } = require('../models');

const controller = {

  index: async(req, res) => {

    return  res.render('admin/index', {
      // error: "error",
      // message: 'Usuário ou senha inválidos.',
    });

  },

  

}

module.exports = controller