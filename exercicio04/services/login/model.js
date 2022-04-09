const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nome : {type : String, required : true},
    email: {type: String, required:true},
    senha: {type: String, required:true}
});

const model = mongoose.model('usuarios', UsuarioSchema);
exports.UsuarioModel = model