const mongoose = require('mongoose');

const ramoSchema = mongoose.Schema({
    nome: {type:String, required: true},
    desc: String,
    percimpos: Number
});

module.exports = mongoose.model('ramo', ramoSchema, 'ramos');