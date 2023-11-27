// controllers/GroupController.js
const Group = require('../models/Group');
const User = require('../models/User');

exports.createGroup = async (req, res) => {
    try {
        const group = new Group(req.body);
        await group.save();
        res.status(201).send(group);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllGroups = async (req, res) => {
    try {
        const groups = await Group.find({});
        res.send(groups);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getGroupById = async (req, res) => {
    try {
        const group = await Group.findById(req.params.id);
        if (!group) {
            return res.status(404).send();
        }
        res.send(group);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateGroup = async (req, res) => {
    const updates = Object.keys(req.body);
    try {
        const group = await Group.findById(req.params.id);
        if (!group) {
            return res.status(404).send();
        }
        updates.forEach(update => group[update] = req.body[update]);
        await group.save();
        res.send(group);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteGroup = async (req, res) => {
    try {
        const group = await Group.findByIdAndDelete(req.params.id);
        if (!group) {
            return res.status(404).send();
        }
        await User.updateMany({}, { $pull: { groups: group._id } });
        res.send(group);
    } catch (error) {
        res.status(500).send(error);
    }
};
