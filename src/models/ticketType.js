// models/TicketType.js
const mongoose = require('mongoose');

const ticketTypeSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    }
});

module.exports = mongoose.model('TicketType', ticketTypeSchema);
