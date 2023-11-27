// routes/events.js
const express = require('express');
const router = express.Router();
const Event = require('../models/event');

// Create
router.post('/create', async (req, res) => {
    try {
        const event = await Event.create(req.body);
        res.json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read
router.get('/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id)
            .populate('organizers')  // Remplir les détails des organisateurs
            .populate('members');    // Remplir les détails des membres
        res.json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id/members', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id)
            .populate('members', 'name email'); // Include only necessary fields
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json(event.members);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id/organizers', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id)
            .populate('organizers', 'name email'); // Include only necessary fields
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json(event.organizers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Update
router.put('/:id', async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        await Event.findByIdAndDelete(req.params.id);
        res.json({ message: 'Événement supprimé avec succès.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;