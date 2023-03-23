const express = require("express");
const validate = require('./auth/validate');

const CrudController = new (require('../controllers/Cruds'));

//Define a variavel que define rotas e opercoes match
const rotasmach={"igual":'eq',"naoigual":'ne',"maior":'gt',"maiorigual":'gte',"menor":'lt',"menorigual":'lte',"contem":'in',"naocontem":'nin', "existe":'exists'}; 

const router = express.Router();

// Obtem o array de nomes de cadastros
//Percorre cada nome adicionando
const crudNames = require('../setup/crudvars');
crudNames.forEach((crudName)=>{//Percorre cada nomecadastro
    console.log("Criando rotas "+crudName);
    //Criar um novo registro
    router.post('/'+crudName+'/', validate(), (req, res) => {
        //console.log("Rota de cria��o ", req.body);
        CrudController.create(crudName, req, res);
    });

    //Ler todos os registros
    router.get('/'+crudName+'/', validate(), (req, res) => {
        CrudController.find(crudName, req, res);
    });
    
    //Ler um registro
    router.get('/'+crudName+'/:id', validate(), (req, res) => {
        CrudController.findOne(crudName, req, res);
    });

    //Ler todos os registros
    router.get('/pop/'+crudName+'/', validate(), (req, res) => {
        console.log("Populando geral de"+crudName)
        CrudController.findPop(crudName, req, res);
    });

    //Ler um registro
    router.get('/pop/'+crudName+'/:id', validate(), (req, res) => {
        CrudController.findOnePop(crudName, req, res);
    });

    //Atualizar um registro
    router.put('/'+crudName+'/:id', validate(), (req, res) => {
        console.log("Rota de update ", req.params.id);
        CrudController.updateOne(crudName, req, res);
    });

    //Deletar alguns registros
    router.delete('/'+crudName+'/', validate(), (req, res) => {
        CrudController.deleteMany(crudName, req, res);
    });
    //Deletar um registro
    router.delete('/'+crudName+'/:id', validate(), (req, res) => {
        CrudController.deleteOne(crudName, req, res);
    });

    //Agrupa dados com mesmo valor campo
    router.post('/agrupa/'+crudName+'/:cmp', validate(), (req, res) => {
        CrudController.agregaGroup(crudName, req, res);
    });

    Object.keys(rotasmach).forEach((rotaName)=>{
        //Agrupa dados com mesmo valor campo
        router.post('/match/'+rotaName+'/'+crudName+'/:cmp', validate(), (req, res) => {
            CrudController.match(crudName, rotasmach[rotaName], req, res);
        });
    })
    
});


//insere dados inicial no banco de dados
router.post('/init/', validate(), (req, res) => {
    let dados = require('../setup/dados');
    Object.keys(dados).forEach((key)=>{
        console.log("Alimentando documento ",key);
        CrudController.insertmany(key,{body:dados[key]},res)//insere novos
    });
});


//Remove dados menos de usuarios e pedidos
router.post('/reset/', validate(), (req, res) => {
    let dados = require('../setup/dados');
    Object.keys(dados).forEach((key)=>{
        console.log("Limpando documento ",key);
        CrudController.deleteMany(key,{body:{}},res)//insere novos
    });
});

module.exports = router;
