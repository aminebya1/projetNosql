// models/Question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    options: [{
        text: String,
        votes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    }],
    sondage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sondage'
    }
});

module.exports = mongoose.model('Question', questionSchema);
