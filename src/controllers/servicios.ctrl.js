const Servicio = require("../models/servicios.model");

const sericioCtrl = {};

sericioCtrl.getServicios = async(req, res, next) => {
    await Servicio.find()
    .exec((err, servicios) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        return res.status(200).json({
            ok: true,
            status: 200,
            count: servicios.length,
            servicios
        })
    })
};

sericioCtrl.createServicio = async(req, res, next) => {
    const servicio = new Servicio({
        tNombre: req.body.nombre,
        tDescripcion: req.body.descripcion,
        dCosto: req.body.costo,
        tTiempo: req.body.tiempo
    });
    await servicio.save();
    res.json({ 
        status: "servicio created",
        servicio
    });
};

sericioCtrl.getServicio = async(req, res, next) => {
    const { id } = req.params;
    const servicio = await Servicio.findById(id);
    res.json(servicio);
};

sericioCtrl.editServicio = async(req, res, next) => {
    const { id } = req.params;
    await Servicio.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.json({ status: "servicio Updated" });
};

sericioCtrl.deleteServicio = async(req, res, next) => {
    await Servicio.findByIdAndRemove(req.params.id);
    res.json({ status: "servicio Deleted" });
};

module.exports = sericioCtrl;