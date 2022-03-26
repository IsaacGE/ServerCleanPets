const Usuario = require("../models/usuario.model");

const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async(req, res, next) => {
    await Usuario.find()
    .exec((err, usuarios) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        return res.status(200).json({
            ok: true,
            status: 200,
            count: usuarios.length,
            usuarios
        })
    })
};

usuarioCtrl.createUsuario = async(req, res, next) => {
    const usuario = new Usuario({
        tNombre: req.body.nombre,
        tApellido: req.body.apellido,
        tNombreUsuario: req.body.userName,
        tTelefono: req.body.telefono,
        tContrasena: req.body.contrasena,
        tImagenPerfil: req.body.imgPerfil
    });
    await usuario.save();
    res.json({ 
        status: "usuario created",
        usuario
    });
};

usuarioCtrl.getUsuario = async(req, res, next) => {
    const { id } = req.params;
    const usuario = await Usuario.findById(id);
    res.json(usuario);
};

usuarioCtrl.editUsuario = async(req, res, next) => {
    const { id } = req.params;
    await Usuario.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.json({ status: "usuario Updated" });
};

usuarioCtrl.deleteUsuario = async(req, res, next) => {
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({ status: "usuario Deleted" });
};

module.exports = usuarioCtrl;