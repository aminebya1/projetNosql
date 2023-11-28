// models/Ticket.js
const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    ticketType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TicketType',
        required: true
    },
    buyerInfo: {
        firstName: String,
        lastName: String,
        address: String
    },
    purchaseDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Ticket', ticketSchema);
