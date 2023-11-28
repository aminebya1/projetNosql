// routes/ticketTypeRoutes.js
const express = require('express');
const TicketTypeController = require('../controllers/ticketType.controller');
const router = express.Router();

router.post('', TicketTypeController.createTicketType);
router.get('', TicketTypeController.getAllTicketTypes);
router.get('/:id', TicketTypeController.getTicketTypeById);
router.put('/:id', TicketTypeController.updateTicketType);
router.delete('/:id', TicketTypeController.deleteTicketType);

module.exports = router;
