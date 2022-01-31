const { Users } = require('../models');

const RegisterController = {

    
    index:( req, res ) => {
        return res.render('register')
    },

    create: async (req, res) => {
        const { frist_name, phone, birth, last_name, email, password } = req.body;

        try {
            let newUser = await Users.create({ frist_name, last_name, birth, email, password} );

            res.status(200).json({
                message: "Conta criada com sucesso!",
                newUser
            });
        }catch(error){
            res.status(200).json({
                message: "Erro ao criar conta.",
            });
        }
    },

}


module.exports = RegisterController
