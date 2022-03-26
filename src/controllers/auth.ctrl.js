const Usuario = require('../models/usuario.model')
const Rol = require('../models/roles.model')
const jwt = require('jsonwebtoken')
require('../config/config')

const authCtrl = {}

authCtrl.register = async (req, res, next) => {
    const { nombre, apellido, nombreUsuario, telefono, codPersonal, imagenPerfil, roles } = req.body;
    const newUser = new Usuario({
        nombre,
        apellido, 
        nombreUsuario, 
        telefono,
        codPersonal,
        imagenPerfil
    })
    
    if (req.body.roles) {
        const foundRoles = await Rol.find({ tNombre: { $in: roles } });
        newUser.roles = foundRoles.map((rol) => rol._id);
    } else {
        const rol = await Rol.findOne({ name: "user" });
        newUser.roles = [rol._id];
    }

    const savedUser = await newUser.save();

    const token = jwt.sign({ id: savedUser._id }, process.env.SEED, {
      expiresIn: 21600, // 6hrs
    });

    res.status(200).json({
        token
    })
}

authCtrl.login = async (req, res, next) => {
    const userFound = await Usuario.findOne({ username: req.body.username}, {codPersonal: req.body.username }).populate(
        "roles"
    );
    
    if (!userFound) {
        res.status(400).json({
            ok: false,
            message: "User Not Found" 
        });
    } else {
        const matchPassword = await Usuario.comparePassword(
            req.body.pass,
            userFound.contrasena
        );
        if (!matchPassword) {
            res.status(400).json({
                ok: false,
                token: null,
                message: "Invalid Password",
            });
        } else {
            const token = jwt.sign({ id: userFound._id }, process.env.SEED, {
                expiresIn: 21600, // 6hrs
            });
            res.json({ token });
        }
    }
}