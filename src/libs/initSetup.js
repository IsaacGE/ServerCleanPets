const Rol = require('../models/roles.model')
const User = require('../models/usuario.model')
const bcrypt = require('bcrypt')

const initSetupLib = {}

initSetupLib.createRoles = async () => {
    try {
        const count = await Rol.estimatedDocumentCount();
        if (count > 0) return;

        const values = await Promise.all([
          new Rol({ tNombre: "user" }).save(),
          new Rol({ tNombre: "employee" }).save(),
          new Rol({ tNombre: "admin" }).save(),
        ]);
    
        console.log(values);
      } catch (error) {
        console.error(error);
      }
}

initSetupLib.createAdmin = async () => {
  const user = await User.findOne({ tCodPersonal: "admin001" });
  const roles = await Rol.find({ tNombre: "admin" });

  if (!user) {
    await User.create({
        tNombre: "Admin",
        tApellido: "Administrador",
        tNombreUsuario: "admin",
        tTelefono: "449-121-31-12",
        tCodPersonal: "admin001",
        tContrasena: await bcrypt.hash("admin", 10),
        rol: roles.map((role) => role._id),
    });
    console.log('Admin User Created!')
  }
}

module.exports = initSetupLib