// controllers/EventController.js
const Event = require('../models/event');

exports.createEvent = async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.status(201).send(event);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find({});
        res.send(events);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).send();
        }
        res.send(event);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateEvent = async (req, res) => {
    const updates = Object.keys(req.body);
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).send();
        }
        updates.forEach(update => event[update] = req.body[update]);
        await event.save();
        res.send(event);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) {
            return res.status(404).send();
        }
        res.send(event);
    } catch (error) {
        res.status(500).send(error);
    }
};
