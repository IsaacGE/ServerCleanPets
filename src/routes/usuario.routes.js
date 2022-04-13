const express = require("express")
const router = express.Router()

const usuario = require("../controllers/usuarios.ctrl");

router.get("/getUsuarios", usuario.getUsuarios);

router.post("/createUsuario", usuario.createUsuario);

router.get("/getUsuario", usuario.getUsuario);

router.put("/:id", usuario.editUsuario);

router.delete("/:id", usuario.deleteUsuario);

module.exports = router
