const Usuario = require("../models/usuario.model");

const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async(req, res, next) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
};

usuarioCtrl.createUsuario = async(req, res, next) => {
    const usuario = new Usuario({
        tNombre: req.body.nombre,
        tApellido: req.body.apellido,
        tNombreUsuario: req.body.uName,
        tTelefono: req.body.telefono,
        tContrasena: req.body.contrasena,
        tImagenPerfil: req.body.imagePerfil
    });
    await usuario.save();
    res.json({ 
        status: "usuario created",
        usuario: usuario
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