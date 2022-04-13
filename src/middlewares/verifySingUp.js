const User = require('../models/usuario.model');
const Rol = require("../models/roles.model");

const verifySingUp = {}

verifySingUp.checkDuplicateUsername = async (req, res, next) => {
    try {
        const user = await User.findOne({ tNombreUsuario: req.body.nombreUsuario });
        if (user) {
            return res.status(400).json({ 
                ok: false,
                message: "The userNAme already exists"
            });
        } else {
            next();
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

verifySingUp.checkRolesExisted = async (req, res, next) => {
    if (req.body.rol) {
        const checkRol = await Rol.findOne({tNombre: req.body.rol})
        if (!checkRol) {
            return res.status(400).json({
                message: `Role ${req.body.rol} does not exist`,
            });
        }
    }
    next();
};

module.exports = verifySingUp
