// controllers/TicketTypeController.js
const TicketType = require('../models/ticketType');

// Crée un type de ticket
exports.createTicketType = async (req, res) => {
    try {
        const ticketType = new TicketType(req.body);
        await ticketType.save();
        res.status(201).send(ticketType);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Récuperer les types de tickets 
exports.getAllTicketTypes = async (req, res) => {
    try {
        const ticketTypes = await TicketType.find({});
        res.send(ticketTypes);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Récuperer le type via l'iD 
exports.getTicketTypeById = async (req, res) => {
    try {
        const ticketType = await TicketType.findById(req.params.id);
        if (!ticketType) {
            return res.status(404).send();
        }
        res.send(ticketType);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update un type de ticket
exports.updateTicketType = async (req, res) => {
    const updates = Object.keys(req.body);
    try {
        const ticketType = await TicketType.findById(req.params.id);
        if (!ticketType) {
            return res.status(404).send();
        }
        updates.forEach(update => ticketType[update] = req.body[update]);
        await ticketType.save();
        res.send(ticketType);
    } catch (error) {
        res.status(400).send(error);
    }
};


// Delete un ticket
exports.deleteTicketType = async (req, res) => {
    try {
        const ticketType = await TicketType.findByIdAndDelete(req.params.id);
        if (!ticketType) {
            return res.status(404).send();
        }
        res.send(ticketType);
    } catch (error) {
        res.status(500).send(error);
    }
};
