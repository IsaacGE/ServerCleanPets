const mongoose = require("mongoose");
const { Schema } = mongoose;

const usuarioSchema = new Schema(
    {
        idRol: {
            type: Number,
            default: 1,
        },
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
            type: Number, 
            required: [true, "ingresa el telefono"]
        },
        tCodPersonal: {
            type: String,
            default: ""
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
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("Usuario", usuarioSchema);
