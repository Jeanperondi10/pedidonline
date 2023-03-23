const crudNames = require('../setup/crudvars');

//Importa todos os documentos crudvars
let modelCrud = [];
crudNames.forEach((crudName)=>{
    modelCrud[crudName]=require('../models/'+crudName);
});

module.exports = class Crud {

    async create(crudName, body) {
        try{
            return await modelCrud[crudName].create(body);
        }catch(err){
            return err;
        }
        
    }
    async insertmany(crudName, documents) {
        try{
            return await modelCrud[crudName].insertMany(documents);
        }catch(err){
            return err;
        }
    }

    async find(crudName, filter) {
        try{
            return await modelCrud[crudName].find(filter);
        }catch(err){
            return err;
        }
    }

    async findOne(crudName, idCrud) {
        try{
            return await modelCrud[crudName].findOne({_id: idCrud});
        }catch(err){
            return err;
        }
    }

    async findPop(crudName, filter) {
        try{
            let cadastrosid = await modelCrud[crudName].find(filter);//Obtem todos os elementos
            let cadastro = await modelCrud[crudName].findOne({_id: cadastrosid[0]._id});//obtem um unico
            let popArrayvalido=Object.keys(cadastro.toObject());//obtem as keys do objeto
            let cadastros = await modelCrud[crudName].find(filter).populate(popArrayvalido);//popula os campos
            return cadastros;
        }catch(err){
            return err;
        }
    }

    async findOnePop(crudName, idCrud) {
        try{
            let cadastro = await modelCrud[crudName].findOne({_id: idCrud});//Obtem o elemento
            let popArrayvalido=Object.keys(cadastro.toObject());//obtem as keys do objeto
            return cadastro.populate(popArrayvalido);//retorna tudo populado
        }catch(err){
            return err;
        }
        
    }
    async updateOne(crudName, idCrud, body) {
        try{
            return await modelCrud[crudName].updateOne({_id: idCrud}, {$set: body});
        }catch(err){
            return err;
        }
    }

    async deleteOne(crudName, idCrud) {
        try{
            return await modelCrud[crudName].deleteOne({_id: idCrud});
        }catch(err){
            return err;
        }
    }

    async deleteMany(crudName, objdelete) {
        try{
            return await modelCrud[crudName].deleteMany(objdelete);
        }catch(err){
            return err;
        }
    }

    async agregaGroup(crudName, cmpName) {
        try{
            cmpName="$"+cmpName;
            const cadastro = await modelCrud[crudName].aggregate([
                { $group: { _id: cmpName, total: { $sum: 1 } } }
            ]);
            return cadastro;
        }catch(err){
            return err;
        }
    }
    
    async match(crudName, operName, valor, campo) {
        try{
            const cadastro = await modelCrud[crudName].aggregate([
                {
                    $match: {
                        [campo]: { [operName]: valor }
                    }
                }
            ]);
            return cadastro;
        }catch(err){
            return err;
        }
    }

};