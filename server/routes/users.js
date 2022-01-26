const express = require("express"),
  router = express.Router(),
  userController = require("../controllers/UserController");

// ROTAS DE USUÁRIOS (GERAL E POR ID)

router.post("/register", userController.create);
router.get("/edit-perfil", userController.editPerfil);
router.put("/edit-profile/:id", userController.editProfile);
router.get("/:id", userController.show);
router.get("/", userController.index);
module.exports = router;
