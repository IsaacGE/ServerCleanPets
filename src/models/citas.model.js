const mongoose = require("mongoose");
const { Schema } = mongoose;

const citaSchema = new Schema(
    {
        idUsuario: { 
            type: String, 
            required: [true, "id de usuario requerido"] 
        },
        idServicio: { 
            type: String, 
            required: [true, "id servicio requerido"] 
        },
        idEmpleado: { 
            type: String
        },
        tNombreCita: {
            type: String,
            required: [true, "ingresa el nombre de la cita"]
        },
        fhFechaCita: {
            type: Date,
            required: [true, "ingresa la fecha en que solicitas el servicio"]
        },
        fhFechaRegistro: {
            type: Date,
            default: new Date()
        },
        fhFechaEdicion: {
            type: Date
        },
        tEstatus: {
            type: String,
            default: "Pendiente"
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("Cita", citaSchema);
