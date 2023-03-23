const express = require('express');
const router = express.Router();

    router.get('/login', (req, res) => {
        res.render('acesso.ejs', { 
            idElemento: "login",
            rotaReq: ""
        });
    });
    router.get('/registro', (req, res) => {
        res.render('acesso.ejs', { 
            idElemento: "registro",
            rotaReq: ""
        });
    });
    
    router.get('/registro', (req, res) => {
        res.render('acesso.ejs', { 
            aluno: 'Jean Perondi',
            aulas: ["Node", "PHP"]
        });
    });

module.exports = router;