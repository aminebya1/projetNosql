// routes/ticketTypeRoutes.js
const express = require('express');
const TicketTypeController = require('../controllers/ticketType.controller');
const router = express.Router();

router.post('/ticketTypes', TicketTypeController.createTicketType);
router.get('/ticketTypes', TicketTypeController.getAllTicketTypes);
router.get('/ticketTypes/:id', TicketTypeController.getTicketTypeById);
router.patch('/ticketTypes/:id', TicketTypeController.updateTicketType);
router.delete('/ticketTypes/:id', TicketTypeController.deleteTicketType);

module.exports = router;
