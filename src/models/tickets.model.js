const mongoose = require("mongoose");
const { Schema } = mongoose;

const ticketSchema = new Schema(
    {
        idCita: { 
            type: String, 
            required: [true, "id de la cita requerido"] 
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("Ticket", ticketSchema);
