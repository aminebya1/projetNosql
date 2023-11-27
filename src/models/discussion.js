// models/discussion.js
const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
    content: String,
    group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    messages: [
        {
            content: String,
            creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            comments: [
                {
                    content: String,
                    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
                }
            ],
        }
    ],
});

module.exports = mongoose.model('Discussion', discussionSchema);
