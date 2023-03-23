const mongoose = require('mongoose');

const produtoSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        default:"outros"
    },
    anunciante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'anunciante'
    },
    custo: {
        type: Number,
        default:0,
        min: 0
    },
    preco: {
        type: Number,
        default:0,
        min: 0
    },
    quantidade: {
        type: Number,
        default:0,
        min: 0
    },
    datavalidade: {
        type: Date
    },
    relevancia: {
        type: Number,
        min: 0,
        default:1
    },
    linkimagem: {
        type: String,
        match: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
    }
});

module.exports = mongoose.model('produto', produtoSchema, 'produtos');