const mongoose = require('mongoose');

const pedidoSchema = mongoose.Schema({
    status: {type:Boolean, default: false},
    data: {type:Date, default: Date.now()},
    usuario: {type: mongoose.Schema.Types.ObjectId, ref: 'usuario'},
    produto: {type: mongoose.Schema.Types.ObjectId, ref: 'produto'},
    quantidade: {type:Number, default: 0}
});

module.exports = mongoose.model('pedido', pedidoSchema, 'pedidos');