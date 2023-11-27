// routes/photoAlbums.js
const express = require('express');
const router = express.Router();
const PhotoAlbum = require('../models/photoAlbum');

// Create
router.post('/create', async (req, res) => {
    try {
        const photoAlbum = await PhotoAlbum.create(req.body);
        res.json(photoAlbum);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read
router.get('/:id', async (req, res) => {
    try {
        const photoAlbum = await PhotoAlbum.findById(req.params.id)
            .populate('event participant photos.comments.commenter', 'name email'); // Inclure seulement les champs nécessaires
        res.json(photoAlbum);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update
router.put('/:id', async (req, res) => {
    try {
        const photoAlbum = await PhotoAlbum.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(photoAlbum);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        await PhotoAlbum.findByIdAndDelete(req.params.id);
        res.json({ message: 'Album photo supprimé avec succès.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
