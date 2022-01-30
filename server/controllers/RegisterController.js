const Sequelize = require('sequelize')
const config = require('../config/database')
const db = new Sequelize(config)
const RegisterController = {

    
    index:(req,res) =>{
        return res.render('register')
},
insert: async (req, res, next) => {

    const {email, nome, sobrenome, dataNascimento, senha,confirmaSenha} = req.body
    if(senha == confirmaSenha){
        const envio = await db.query('INSERT INTO users(frist_name, last_name, birth, email, password)VALUES (:nome, :sobrenome, :dataNascimento, :email, :senha);', {

        replacements: {email, nome, sobrenome, dataNascimento, senha},

        type: Sequelize.QueryTypes.INPUT

    })

    if(envio){

        res.redirect('/')

    }

    else{

        res.status(500).send('Ops... Algo de errado não deu certo!')

    }
        
    }else{
        console.log('Senha incorreta')
    }
    
  
}

}


module.exports = RegisterController
