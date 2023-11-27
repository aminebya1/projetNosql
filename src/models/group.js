// models/Group.js
const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    icon: String,
    coverPhoto: String,
    type: {
        type: String,
        enum: ['public', 'private', 'secret'],
        default: 'public'
    },
    allowMembersToPost: {
        type: Boolean,
        default: false
    },
    allowMembersToCreateEvents: {
        type: Boolean,
        default: false
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    admins: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = mongoose.model('Group', groupSchema);
