// controllers/DiscussionController.js
const Discussion = require('../models/discussion');
const Message = require('../models/message');

// Crée un fil de discussions
exports.createDiscussion = async (req, res) => {
    try {
        const discussion = new Discussion(req.body);
        await discussion.save();
        res.status(201).send(discussion);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Récupérer toutes les dicussions de la collections
exports.getAllDiscussions = async (req, res) => {
    try {
        const discussions = await Discussion.find({}).populate('messages');
        res.send(discussions);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Récuperer une discussion via l'iD
exports.getDiscussionById = async (req, res) => {
    try {
        const discussion = await Discussion.findById(req.params.id).populate('messages');
        if (!discussion) {
            return res.status(404).send();
        }
        res.send(discussion);
    } catch (error) {
        res.status(500).send(error);
    }
};


// Update un fil de discussion
exports.updateDiscussion = async (req, res) => {
    const updates = Object.keys(req.body);
    try {
        const discussion = await Discussion.findById(req.params.id);
        if (!discussion) {
            return res.status(404).send();
        }
        updates.forEach(update => discussion[update] = req.body[update]);
        await discussion.save();
        res.send(discussion);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete une discussion de la collection
exports.deleteDiscussion = async (req, res) => {
    try {
        const discussion = await Discussion.findByIdAndDelete(req.params.id);
        if (!discussion) {
            return res.status(404).send();
        }
        await Message.deleteMany({ _id: { $in: discussion.messages } });
        res.send(discussion);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Méthodes CRUD pour les messages sont définies ici également
