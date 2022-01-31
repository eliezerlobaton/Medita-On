const { Users } = require('../models');

const controller = {

    index:( req, res ) => {
        return res.render('register');
    },

    create: async (req, res, next) => {
        const { frist_name, birth, last_name, email, password } = req.body;

        console.log(frist_name)

        


        try {
            const newUser = await Users.create({
                frist_name: frist_name,
                birth, last_name, email, password });

            res.status(200).json({
                message: "Conta criada com sucesso!",
                newUser
            });
        }catch(error){
            res.status(400).json({
                message: "Erro ao criar conta.",
                error,
            });
        }
    },
}

module.exports = controller;
