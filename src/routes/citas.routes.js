const express = require("express")
const router = express.Router()

const cita = require("../controllers/citas.ctrl");

router.get("/getCitas", cita.getCitas);

router.post("/createCita", cita.createCita);

router.get("/:id", cita.getCita);

router.put("/:id", cita.editCita);

router.delete("/:id", cita.deleteCita);

module.exports = router
