// models/photoAlbum.js
const mongoose = require('mongoose');

const photoAlbumSchema = new mongoose.Schema({
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
    participant: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    photos: [
        {
            url: String,
            postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Ajout de l'ID du participant qui a posté la photo
            comments: [
                {
                    content: String,
                    commenter: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
                }
            ],
        }
    ],
});

module.exports = mongoose.model('PhotoAlbum', photoAlbumSchema);
