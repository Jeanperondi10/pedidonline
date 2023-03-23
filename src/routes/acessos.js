const express = require("express");
const router = express.Router();

const AcessoController = new (require('../controllers/Acessos'));

    //Criar um novo registro
    router.post('/registro', (req, res) => {
        let criounovouser=AcessoController.registro(req, res);
        return criounovouser;
    });
    //Fazer Login / Obter Token
    router.post('/login', (req, res) => {
        AcessoController.login(req, res);
    });
    //validar usuario
    router.get('/valida/:token', (req, res) => {
        AcessoController.validaUser(req.params.token,res);
    });


module.exports = router;