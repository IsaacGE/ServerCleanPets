const express = require("express");
const router = express.Router();

const usuario = require("../controllers/usuarios.ctrl");

router.get("/", usuario.getUsuarios);

router.post("/", usuario.createUsuario);

router.get("/:id", usuario.getUsuario);

router.put("/:id", usuario.editUsuario);

router.delete("/:id", usuario.deleteUsuario);

module.exports = router;
