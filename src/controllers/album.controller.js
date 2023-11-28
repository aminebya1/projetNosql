// controllers/AlbumController.js
const Album = require('../models/album');

exports.createAlbum = async (req, res) => {
    try {
        const album = new Album({ ...req.body });
        await album.save();
        res.status(201).send(album);
    } catch (error) {
        res.status(400).send(error);
    }
};
// Récupérer tout les albums de la collections
exports.getAllAlbums = async (req, res) => {
    try {
        const albums = await Album.find({}).populate('photos');
        res.send(albums);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Récupérer un album via l'ID
exports.getAlbumById = async (req, res) => {
    try {
        const album = await Album.findById(req.params.id).populate('photos');
        if (!album) {
            return res.status(404).send();
        }
        res.send(album);
    } catch (error) {
        res.status(500).send(error);
    }
};


// Update les valeurs d'un album
exports.updateAlbum = async (req, res) => {
    const updates = Object.keys(req.body);
    try {
        const album = await Album.findById(req.params.id);
        if (!album) {
            return res.status(404).send();
        }
        updates.forEach(update => album[update] = req.body[update]);
        await album.save();
        res.send(album);
    } catch (error) {
        res.status(400).send(error);
    }
};


// Supprimer un album
exports.deleteAlbum = async (req, res) => {
    try {
        const album = await Album.findByIdAndDelete(req.params.id);
        if (!album) {
            return res.status(404).send();
        }
        res.send(album);
    } catch (error) {
        res.status(500).send(error);
    }
};
