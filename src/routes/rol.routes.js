const express = require("express")
const router = express.Router()

const rolCtrl = require('../controllers/rol.ctrl')

router.get("/getRolName", rolCtrl.getRolName);

module.exports = router
