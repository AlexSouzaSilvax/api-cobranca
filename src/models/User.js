const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({      
    nome: String,
    email: String,
    login: String,
    senha: String
});

module.exports = mongoose.model('usuarios', UserSchema);