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

exports.getAllAlbums = async (req, res) => {
    try {
        const albums = await Album.find({}).populate('photos');
        res.send(albums);
    } catch (error) {
        res.status(500).send(error);
    }
};

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
