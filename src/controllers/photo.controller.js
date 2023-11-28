// controllers/PhotoController.js
const Photo = require('../models/photo');

exports.createPhoto = async (req, res) => {
    try {
        const photo = new Photo({ ...req.body });
        await photo.save();
        res.status(201).send(photo);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllPhotos = async (req, res) => {
    try {
        const photos = await Photo.find({});
        res.send(photos);
    } catch (error) {
        res.status(500).send(error);
    }
};

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
