const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    nome: {
      type: String,
      required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
          validator: function(value) {
            // Regex de validação de endereço de email
            return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
          },
          message: props => `${props.value} não é um endereço de email válido!`
        }
    },
    senha: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default:false
    },
    grupousuario: {type: mongoose.Schema.Types.ObjectId, ref: 'grupousuario'},
    endereco: {type: mongoose.Schema.Types.ObjectId,ref: 'endereco'}
});

module.exports = mongoose.model('usuario', usuarioSchema, 'usuarios');