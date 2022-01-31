const { Users, Permissions } = require('../models');

const controller = {

    index:( req, res ) => {
        return res.render('register');
    },

    create: async (req, res, next) => {
        const { frist_name, birth, last_name, email, password } = req.body;

        try {
            let emailUnique = await Users.findOne({ where: { email } })

            if( !emailUnique ) {

                const newUser = await Users.create({
                    frist_name: frist_name,
                    birth, last_name, email, password });
    
                const newPermission = await Permissions.create({
                    id_user: newUser.id,
                    administrator: true,
                    speaker: false
                })
    
                res.render('login', {
                    message: 'Conta criada com sucesso!',
                });
            } else {
                res.render('register', {
                    error: 'error',
                    message: 'Já existe uma conta com esse e-mail.',
                });
            }
            

        }catch(error){
            res.status(400).json({
                message: "Erro ao criar conta.",
                error,
            });
        }
    },

    
}

module.exports = controller;
