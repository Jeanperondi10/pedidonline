const mongoose = require('mongoose');

const enderecoSchema = mongoose.Schema({
    endereco: {
        type: String,
        required: true
      },
      referencia: {
        type: String
      },
      complemento: {
        type: String
      },
      cep: {
        type: String
      },
      cidade: {
        type: String,
        required: true
      },
      uf: {
        type: String,
        required: true
      },
      numero: {
        type: String
      }
});

module.exports = mongoose.model('endereco', enderecoSchema, 'enderecos');