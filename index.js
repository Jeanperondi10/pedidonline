const express = require("express");
const os = require('os');
const bodyParser = require("body-parser");
const path = require('path');
const app = express();

app.use(bodyParser.json()); //Processar dados em JSON


app.listen(3000, () => {
   const interfaces = os.networkInterfaces();
   const addresses = [];
 
   for (const name in interfaces) {
     for (const iface of interfaces[name]) {
       if (iface.family === 'IPv4' && !iface.internal) {
         addresses.push(iface.address);
       }
     }
   }
 
   console.log(`Servidor rodando em http://${addresses[0]}:3000`);
});

//Habilita conexao Banco Dados
const DB = require('./src/setup/DB');
DB.connect();

const crudRoutes = require('./src/routes/cruds'); //require do arquivo de rotas Crud
app.use('/api', crudRoutes); //defini��o do arquivo de rotas Crud
const acessoRoutes = require('./src/routes/acessos'); //require do arquivo de rotas dos usuarios
app.use('/acesso', acessoRoutes); //defini��o do arquivo de rotas dos usuarios


//Em Desenvolvimento... ...
//const interfaceRoutes = require('./src/routes/interfaces'); //require do arquivo de rotas dos usuarios
//app.use('/', interfaceRoutes); //defini��o do arquivo de rotas interface

//Rota arquivos estaticos
//app.use('/arquivo', express.static('public'));
