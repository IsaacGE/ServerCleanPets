const Ticket = require("../models/tickets.model");

const ticketCtrl = {};

ticketCtrl.getTickets = async(req, res, next) => {
    await Ticket.find()
    .exec((err, tickets) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        return res.status(200).json({
            ok: true,
            status: 200,
            count: tickets.length,
            tickets
        })
    })
};

ticketCtrl.createTicket = async(req, res, next) => {
    const ticket = new Ticket({
        idCita: req.body.idCita
    });
    await ticket.save();
    res.json({ 
        status: "ticket created",
        ticket
    });
};

ticketCtrl.getTicket = async(req, res, next) => {
    const { id } = req.params;
    const ticket = await Ticket.findById(id);
    res.json(ticket);
};

ticketCtrl.deleteTicket = async(req, res, next) => {
    await Ticket.findByIdAndRemove(req.params.id);
    res.json({ status: "ticket Deleted" });
};

module.exports = ticketCtrl;