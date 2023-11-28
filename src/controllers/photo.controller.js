// controllers/PhotoController.js
const Photo = require('../models/photo');

// Crée un photo
exports.createPhoto = async (req, res) => {
    try {
        const photo = new Photo({ ...req.body });
        await photo.save();
        res.status(201).send(photo);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Récuperer toutes les photos 
exports.getAllPhotos = async (req, res) => {
    try {
        const photos = await Photo.find({});
        res.send(photos);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Récuperer une photo via l'ID
exports.getPhotoById = async (req, res) => {
    try {
        const photo = await Photo.findById(req.params.id);
        if (!photo) {
            return res.status(404).send();
        }
        res.send(photo);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update une phot
exports.updatePhoto = async (req, res) => {
    const updates = Object.keys(req.body);
    try {
        const photo = await Photo.findById(req.params.id);
        if (!photo) {
            return res.status(404).send();
        }
        updates.forEach(update => photo[update] = req.body[update]);
        await photo.save();
        res.send(photo);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete une phots
exports.deletePhoto = async (req, res) => {
    try {
        const photo = await Photo.findByIdAndDelete(req.params.id);
        if (!photo) {
            return res.status(404).send();
        }
        res.send(photo);
    } catch (error) {
        res.status(500).send(error);
    }
};
