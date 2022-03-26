const mongoose = require("mongoose");
const { Schema } = mongoose;

const bitacoraSchema = new Schema(
    {
        idUsuario: {
            type: String,
            required: [true, "id usuario requerido"]
        },
        fhFechaRegistro: {
            type: Date,
            default: new Date()
        },
        tCodEstatus: {
            type: String,
            required: [true, "codigo estatus requerido"]
        }
    },
    {
        versionKey: false,
        timestamps: false,
    }
);

module.exports = mongoose.model("Servicio", bitacoraSchema);
