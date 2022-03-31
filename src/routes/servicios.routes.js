const express = require("express")
const router = express.Router()

const servicio = require("../controllers/servicios.ctrl");

router.get("/getServicios", servicio.getServicios);

router.post("/createServicio", servicio.createServicio);

router.get("/:id", servicio.getServicio);

router.put("/:id", servicio.editServicio);

router.delete("/:id", servicio.deleteServicio);

module.exports = router
