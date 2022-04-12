const mongoose = require("mongoose");
const { Schema } = mongoose;

const servicioSchema = new Schema(
    {
        tNombre: { 
            type: String, 
            required: [true, "ingresa el nombre del servicio"] 
        },
        tDescripcion: { 
            type: String, 
            required: [true, "ingresa una descripcion"] 
        },
        dCosto: { 
            type: Number,
            required: [true, "ingresa el costo del servicio"]
        },
        tTiempo: { 
            type: String, 
            required: [true, "ingresa el tiempo apoximado de aplicaion"]
        },
        bServicioActivo: {
            type: Boolean,
            default: true
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("Servicio", servicioSchema);
