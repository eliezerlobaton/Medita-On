const Sequelize = require('sequelize');
const config = require('../database/config');
const db = new Sequelize(config);

const RegisterController = {

    index: (req, res, next) => {
      
        return res.render('register')

    }, 
    
    add: async (req, res, next) =>{

        try {

            const {email, frist_name, last_name, birth, password} = req.body

                const envio = await db.query(`INSERT INTO users(frist_name, last_name, birth, email, password) 
                VALUES 
                (:frist_name, :last_name, :birth, :email, aes_encrypt(:password, 'dh2021'));`, {

                    replacements: {email, frist_name, last_name, birth, password},
        
                    type: Sequelize.QueryTypes.INPUT
        
                })
        
                if(envio){
        
                    res.redirect('/')
            
                }
            
                else{
            
                    res.status(500).send('Ops... Algo de errado não deu certo!')
            
                }

        }

        catch(err){


            res.status(500).send('Erro servidor')

        }

    }

}

module.exports = RegisterController