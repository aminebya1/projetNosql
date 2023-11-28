// models/Discussion.js
const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    linkedToGroup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        default: null
    },
    linkedToEvent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        default: null
    },
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }]
});

module.exports = mongoose.model('Discussion', discussionSchema);
