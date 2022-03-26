const mongoose = require("mongoose");
const { Schema } = mongoose;

const rolSchema = new Schema(
    {
        tNombre: { 
            type: String, 
            required: [true, "nombre de rol requerido"] 
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("Rol", rolSchema);
