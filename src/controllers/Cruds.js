const CrudService = new (require('../services/Crud'));

module.exports = class Cruds {
    async create(crudName, req, res) {
        const retorno = await CrudService.create(crudName,req.body);
        res.json(retorno);
    }
    async insertmany(crudName, req, res) {
        try {
            const retorno = await CrudService.insertmany(crudName,req.body);
            if (!res.headersSent) {
                res.json(retorno);
            }
        } catch (err) {
            res.send("Erro insertmany: "+err);
            console.log("Erro insertmany: "+err);
        }
    }
    async find(crudName, req, res) {
        const retorno = await CrudService.find(crudName,req.body);
        res.json(retorno);
    }

    async findOne(crudName, req, res) {
        const retorno = await CrudService.findOne(crudName,req.params.id);
        res.json(retorno);
    }

    async findPop(crudName, req, res) {
        let body=req.body;
        const retorno = await CrudService.findPop(crudName,body);
        res.json(retorno);
    }

    async findOnePop(crudName, req, res) {
        let idCrud=req.params.id;
        const retorno = await CrudService.findOnePop(crudName,idCrud);
        res.json(retorno);
    }
    async updateOne(crudName, req, res) {
        const retorno = await CrudService.updateOne(crudName,req.params.id, req.body);
        res.json(retorno);
    }
    
    async deleteOne(crudName, req, res) {
        const retorno = await CrudService.deleteOne(crudName,req.params.id);
        res.json(retorno);
    }
    async deleteMany(crudName, req, res) {
        try {
            const retorno = await CrudService.deleteMany(crudName, req.body);
            if (!res.headersSent) {
              res.json(retorno);
            }
        } catch (err) {
            res.send("Erro DeleteMany: "+err);
            console.log("Erro DeleteMany: "+err);
        }
    }
    async agregaGroup(crudName, req, res) {
        try {
            const retorno = await CrudService.agregaGroup(crudName, req.params.cmp);
            if (!res.headersSent) {
                res.json(retorno);
            }
        } catch (err) {
            res.send("Erro AgregaGroup: "+err);
            console.log("Erro AgregaGroup: "+err);
        }
    }
    async match(crudName, rotaName, req, res) {
        try {
            const retorno = await CrudService.match(crudName, operName, req.body.valor, req.params.cmp);
            if (!res.headersSent) {
                res.json(retorno);
            }
        } catch (err) {
            res.send("Erro Match: "+err);
            console.log("Erro Match: "+err);
        }
    }
};