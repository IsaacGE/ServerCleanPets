const Rol = require('../models/roles.model')

const rolCtrl = {};

rolCtrl.getRolName = async(req, res, next) => {
    const id = req.query.id
    const rolName = await Rol.findById(id);
    res.json(rolName);
};


module.exports = rolCtrl;