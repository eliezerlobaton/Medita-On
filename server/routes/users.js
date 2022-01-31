
const express = require("express"),
  router = express.Router(),
  userController = require("../controllers/UserController");

// ROTAS DE USUÁRIOS (GERAL E POR ID)



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post("/register", userController.create);
router.get("/edit-perfil", userController.editPerfil);
router.put("/edit-profile/:id", userController.editProfile);
router.post("/editar", userController.editar);
router.get("/:id", userController.show);
router.get("/", userController.index);
module.exports = router;
