const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require('bcrypt')

const usuarioSchema = new Schema(
    {
        tNombre: { 
            type: String, 
            required: [true, "ingresa el nombre"] 
        },
        tApellido: { 
            type: String, 
            required: [true, "ingresa el apellido"] 
        },
        tNombreUsuario: { 
            type: String, 
            required: [true, "ingresa el nombre de usuario"] 
        },
        tTelefono: { 
            type: String, 
            required: [true, "ingresa el telefono"]
        },
        tCodPersonal: {
            type: String
        },
        tContrasena: {
            type: String,
            required: [true, "ingresa la contraseña"]
        },
        fhFechaRegistro: {
            type: Date,
            default: new Date()
        },
        bUsuarioActivo: {
            type: Boolean,
            default: true
        },
        tImagenPerfil: {
            type: String,
        },
        roles: [{
            ref: "Rol",
            type: Schema.Types.ObjectId
        }]
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

usuarioSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}
  
usuarioSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}

module.exports = mongoose.model("Usuario", usuarioSchema);
