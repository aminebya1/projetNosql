// controllers/TicketController.js
const Ticket = require('../models/ticket');

exports.createTicket = async (req, res) => {
    try {
        const ticket = new Ticket(req.body);
        await ticket.save();
        res.status(201).send(ticket);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find({}).populate('ticketType');
        res.send(tickets);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getTicketById = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id).populate('ticketType');
        if (!ticket) {
            return res.status(404).send();
        }
        res.send(ticket);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateTicket = async (req, res) => {
    const updates = Object.keys(req.body);
    try {
        const ticket = await Ticket.findById(req.params.id);
        if (!ticket) {
            return res.status(404).send();
        }
        updates.forEach(update => ticket[update] = req.body[update]);
        await ticket.save();
        res.send(ticket);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndDelete(req.params.id);
        if (!ticket) {
            return res.status(404).send();
        }
        res.send(ticket);
    } catch (error) {
        res.status(500).send(error);
    }
};
