// models/Photo.js
const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    album: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',
        required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

module.exports = mongoose.model('Photo', photoSchema);
