const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({      
    email: String,
    login: String,
    senha: String
});

module.exports = mongoose.model('usuario', UserSchema);