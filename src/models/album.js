// models/Album.js
const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    photos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Photo'
    }]
});

module.exports = mongoose.model('Album', albumSchema);
