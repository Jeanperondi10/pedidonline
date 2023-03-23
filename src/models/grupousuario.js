const mongoose = require('mongoose');

const grupousuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    desc: String,
    permpost: {
        type: Boolean,
        required: true,
    },
    permget: {
        type: Boolean,
        required: true,
    },
    permput: {
        type: Boolean,
        required: true,
    },
    permdel: {
        type: Boolean,
        required: true,
    }
});

module.exports = mongoose.model('grupousuario', grupousuarioSchema, 'grupousuarios');