// controllers/MessageController.js
const Discussion = require('../models/discussion');
const Message = require('../models/message');

// Créer un message
exports.createMessage = async (req, res) => {
    try {
        const message = new Message({ ...req.body, createdBy: req.user._id });
        await message.save();

        // Associer le message à une discussion
        if (req.body.discussion) {
            const discussion = await Discussion.findById(req.body.discussion);
            discussion.messages.push(message._id);
            await discussion.save();
        }

        res.status(201).send(message);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Obtenir tous les messages
exports.getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find({});
        res.send(messages);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Obtenir un message par ID
exports.getMessageById = async (req, res) => {
    try {
        const message = await Message.findById(req.params.id);
        if (!message) {
            return res.status(404).send();
        }
        res.send(message);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Mettre à jour un message
exports.updateMessage = async (req, res) => {
    const updates = Object.keys(req.body);
    try {
        const message = await Message.findById(req.params.id);
        if (!message) {
            return res.status(404).send();
        }
        updates.forEach(update => message[update] = req.body[update]);
        await message.save();
        res.send(message);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Supprimer un message
exports.deleteMessage = async (req, res) => {
    try {
        const message = await Message.findByIdAndDelete(req.params.id);
        if (!message) {
            return res.status(404).send();
        }

        // Supprimer la référence du message dans la discussion
        if (message.discussion) {
            const discussion = await Discussion.findById(message.discussion);
            discussion.messages.pull(message._id);
            await discussion.save();
        }

        res.send(message);
    } catch (error) {
        res.status(500).send(error);
    }
};
