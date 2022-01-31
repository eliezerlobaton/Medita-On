const Sequelize = require('sequelize');
const config = require('../database/config');
const db = new Sequelize(config);

const LoginController = {

    index:  (req, res, next) => {
      
        return res.render('login')

    },

    access: async (req, res, next) => {

        try {

            const {email, password} = req.body

            console.log("Email: " + email)
            console.log("Password: " + password)

            const user = await db.query(`SELECT email, password 
            FROM users 
            WHERE 
            (email = :email) 
            AND 
            (password = :password);`,{

                replacements: {email, password},

                type: Sequelize.QueryTypes.SELECT

            })

            console.log(user)

            if(user.length > 0){

                return res.send("Usuario cadastrado")

            }

            else{

                return res.send("Usuario não cadastrado")

            }

        }

        catch (err){

            res.status(500).send('Erro servidor')

        }

    }

}

module.exports = LoginController