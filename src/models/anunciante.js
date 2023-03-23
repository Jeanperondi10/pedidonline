const mongoose = require('mongoose');

const anuncianteSchema = mongoose.Schema({
    nome: String,
    cnpj: String,
    ramo: String,
    email: String,
    telefone: String,
    celular: String,
    endereco: {type: mongoose.Schema.Types.ObjectId, ref: 'endereco'},
    linklogo: {
        type:String,
        match: /^(https?|http):\/\/[^\s/$.?#].[^\s]*$/i 
    }
});

module.exports = mongoose.model('anunciante', anuncianteSchema, 'anunciantes');