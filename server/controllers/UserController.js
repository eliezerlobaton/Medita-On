const { Users } = require('../models');

const controller = {

  index: async (req, res) => {
    const users = await Users.findAll();
    res.render('index', {
      users: users,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
    });
  },

  show: async (req, res, next) => {
    const { id } = req.params;

    try{
      let Profile = await Users.findOne({ where: { id } });

      if (Profile) {
        res.render('user', {
          Profile,
          usuarioLogado: req.cookies.usuario,
          usuarioAdmin: req.cookies.admin
        });
      } else {
        res.status(404).json({
          result: 'success',
          message: "Não existe usuário cadastrado com esse id."
        });
      }

    }catch(error) {
      res.status(400).json({
        result: error,
        message: "Não foi possível listar os usuários."
      });
    }
  },

  list: async (req, res) => {
   const Users = await Users.findAll();
   let admin = req.cookies.admin;
   if(!admin || admin === false){
      res.render('usuarios', {
        Users,
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin
      });
    }else{
      res.render('admin/userslist', {
        Users,
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin
      });
    }
  },


  create: async (req, res) => {
    const { frist_name, last_name, birth, email, password } = req.body;

    try{
      let NewUser = await Users.create({
        frist_name,
        last_name,
        birth,
        email,
        password,
      });

      res.status(200).json({
        result: "success",
        message: "Usuário cadastrado com sucesso!",
        NewUser
      });

    }catch(error) {
      res.status(400).json({
        result: error,
        message: "Não foi possível cadastrar o usuário."
      });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;

    try{
      let Profile = await Users.destroy({ where: { id } });

      res.status(200).json({
        result: 'success',
        message: "Usuário excluído com sucesso!"
      });

    }catch(error) {
      res.status(400).json({
        result: error,
        message: "Não foi possível listar os usuários."
      });
    }
  },
  
  editProfile: async (req, res) => {
    const { id } = req.params;
    let { frist_name, last_name, birth, email, password } = req.body;
    try {
      // let Profile = await Users.findOne({ where: { id } });

      const user = await Users.update(
        {
          frist_name,
          last_name,
          birth,
          email,
          password,
        },
        { where: { id } }
      );

      res.status(200).json({
        result: "success",
        message: "Usuário editado!",
        user,
      });
    } catch (error) {
      res.status(400).json({
        result: error,
        message: "Não foi possível listar os usuários.",
      });
    }
  },

  editPerfil: async (req, res) => {
    try {
      let Profile = await Users.findOne({ where: { id: 1 } });
      console.log(Profile);

      if (Profile) {
        res.render("editarPerfil", { usuario: Profile });
      } else {
        res.status(404).json({
          result: "success",
          message: "Não existe usuário cadastrado com esse id.",
        });
      }
    } catch (error) {
      res.status(400).json({
        result: error,
        message: "Não foi possível listar os usuários.",
      });
    }
  },

  editar: async (req, res) => {
    // const { id } = req.params;
    let { frist_name, last_name, birth, email, password } = req.body;
    try {
      // let Profile = await Users.findOne({ where: { id } });

      const user = await Users.update(
        {
          frist_name,
          last_name,
          birth,
          email,
          password,
        },
        { where: { id: 1 } }
      );

      if (user) {
        res.render("editarPerfil", { usuario: user });
      } else {
        res.status(404).json({
          result: "success",
          message: "Não existe usuário cadastrado com esse id.",
        });
      }
    } catch (error) {
      res.status(400).json({
        result: error,
        message: "Não foi possível listar os usuários.",
      });
    }
  },
}

module.exports = controller
