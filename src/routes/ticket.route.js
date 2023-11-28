// routes/ticketRoutes.js
const express = require('express');
const TicketController = require('../controllers/ticket.controller');
const router = express.Router();

router.post('', TicketController.createTicket);
router.get('', TicketController.getAllTickets);
router.get('/:id', TicketController.getTicketById);
router.put('/:id', TicketController.updateTicket);
router.delete('/:id', TicketController.deleteTicket);

module.exports = router;
