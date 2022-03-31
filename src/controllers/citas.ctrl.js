const Cita = require("../models/citas.model");

const citaCtrl = {};

citaCtrl.getCitas = async(req, res, next) => {
    const citas = await Cita.find()
    res.status(200).json({
        citas
    })
};

citaCtrl.createCita = async(req, res, next) => {
    const cita = new Cita({
        idUsuario: req.body.idUsuario,
        idServicio: req.body.idServicio,
        tNombreCita: req.body.nombreCita,
        fhFechaCita: req.body.fechaCita
    });
    await cita.save();
    res.json({ 
        status: "cita created",
        cita
    });
};

citaCtrl.getCita = async(req, res, next) => {
    const { id } = req.params;
    const cita = await Cita.findById(id);
    res.json(cita);
};

citaCtrl.editCita = async(req, res, next) => {
    const { id } = req.params;
    await Cita.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.json({ status: "cita Updated" });
};

citaCtrl.deleteCita = async(req, res, next) => {
    await Cita.findByIdAndUpdate(req.params.id);
    res.json({ status: "cita Deleted" });
};

module.exports = citaCtrl;