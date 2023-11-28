// controllers/SondageController.js
const Sondage = require('../models/sondage');

exports.createSondage = async (req, res) => {
    try {
        const sondage = new Sondage({ ...req.body });
        await sondage.save();
        res.status(201).send(sondage);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllSondages = async (req, res) => {
    try {
        const sondages = await Sondage.find({}).populate('questions');
        res.send(sondages);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getSondageById = async (req, res) => {
    try {
        const sondage = await Sondage.findById(req.params.id).populate('questions');
        if (!sondage) {
            return res.status(404).send();
        }
        res.send(sondage);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateSondage = async (req, res) => {
    const updates = Object.keys(req.body);
    try {
        const sondage = await Sondage.findById(req.params.id);
        if (!sondage) {
            return res.status(404).send();
        }
        updates.forEach(update => sondage[update] = req.body[update]);
        await sondage.save();
        res.send(sondage);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteSondage = async (req, res) => {
    try {
        const sondage = await Sondage.findByIdAndDelete(req.params.id);
        if (!sondage) {
            return res.status(404).send();
        }
        res.send(sondage);
    } catch (error) {
        res.status(500).send(error);
    }
};
