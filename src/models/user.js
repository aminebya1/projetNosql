// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    groups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Group' }],  // Référence aux groupes
});

module.exports = mongoose.model('User', userSchema);
