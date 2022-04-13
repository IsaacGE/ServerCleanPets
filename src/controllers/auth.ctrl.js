const Usuario = require('../models/usuario.model')
const Rol = require('../models/roles.model')
const jwt = require('jsonwebtoken')
require('../config/config')

const authCtrl = {}

authCtrl.register = async (req, res, next) => {
    const { nombre, apellido, nombreUsuario, pass, telefono, codPersonal, imagenPerfil, rol } = req.body;
    const newUser = new Usuario({
        tNombre: nombre,
        tApellido: apellido, 
        tNombreUsuario: nombreUsuario,
        tContrasena: await Usuario.encryptPassword(pass), 
        tTelefono: telefono,
        tCodPersonal: codPersonal,
        tImagenPerfil: imagenPerfil
    })
    if (rol) {
        const rolFound = await Rol.findOne({ tNombre:  rol });
        newUser.rol = rolFound._id;
    } else {
        const rol = await Rol.findOne({ tNombre: "user" });
        newUser.rol = rol._id;
    }

    const savedUser = await newUser.save();
    
    res.status(200).json({
        ok: true,
        msg: "User registered OK",
        savedUser
    })
}

authCtrl.login = async (req, res, next) => {
    const userFound = await Usuario.findOne({$or:[{ tNombreUsuario: req.body.nombreUsuario}, {tCodPersonal: req.body.nombreUsuario }]}).populate(
        "rol"
    );
    if (!userFound) {
        res.status(200).json({
            ok: false,
            msg: "User Not Found" 
        });
    } else {
        const matchPassword = await Usuario.comparePassword(
            req.body.pass,
            userFound.tContrasena
        );
        if (!matchPassword) {
            res.status(200).json({
                ok: false,
                token: null,
                message: "Invalid Password",
            });
        } else {
            const token = jwt.sign({ id: userFound._id }, process.env.SEED, {
                expiresIn: 7200, // 2hrs
            });
            res.json({ 
                ok: true,
                token 
            });
        }
    }
}

module.exports = authCtrl