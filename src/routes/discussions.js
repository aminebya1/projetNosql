// routes/discussions.js
const express = require('express');
const router = express.Router();
const Discussion = require('../models/discussion');

// Create
router.post('/create', async (req, res) => {
    try {
        const discussion = await Discussion.create(req.body);
        res.json(discussion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read
router.get('/:id', async (req, res) => {
    try {
        const discussion = await Discussion.findById(req.params.id)
            .populate('group event creator messages.creator messages.comments.creator', 'name email'); // Inclure seulement les champs nécessaires
        res.json(discussion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update
router.put('/:id', async (req, res) => {
    try {
        const discussion = await Discussion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(discussion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        await Discussion.findByIdAndDelete(req.params.id);
        res.json({ message: 'Discussion supprimée avec succès.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
