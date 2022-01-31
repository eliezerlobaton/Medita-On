const { Users } = require('../models');
const jwt = require('../helpers/jwt');

const controller = {

    index:(req,res) =>{
        return res.render('login');
    },

    login: async (req, res, next) => {
        const { email, password } = req.body;
         
        let user = await Users.findOne({ attributes: { exclude: [ password ]}, where: { email } })

         if(user && password === user.password) {
           const token = jwt.generateToken(user.id)
           return res.status(200).json({ token, user })

         } else {
            return  res.render('login', {
                error: "error",
                message: 'Usuário ou senha inválidos.',
            });

         }

    },
}

module.exports = controller;