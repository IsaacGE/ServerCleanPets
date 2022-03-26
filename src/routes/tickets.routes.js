const express = require("express")
const router = express.Router()

const ticket = require("../controllers/tickets.ctrl");

router.get("/", ticket.getTickets);

router.post("/", ticket.createTicket);

router.get("/:id", ticket.getTicket);

router.delete("/:id", ticket.deleteTicket);

module.exports = router
