<h1 align="center">Documentação - pedidOnline</h1>

<h5 align="center">API de Pedidos de Produtos em NodeJS, para o DevEvolution<h5>
  
## 📦 Introdução

A execução do projeto constroi um servidor local acessivel pelo link https://localhost:3000 (porta web 3000), que permite através de autenticação JWT, acessar rotas CRUD(Create, Read, Update,Delete) para obter informações e manipular dados relacionados a <i>produtos, pedidos, usuarios, grupodeusuarios, anunciantes, ramo, endereco</i>.<br/><br/>
<b><u>Como obter token de acesso JWT?</u></b><br/>
Cadastrando um novo usuario, através da rota pública <i><b>POST /acesso/registro</b></i> enviando os dados: <code>{nome:"", email:"", senha:""}</code></i><br/> 
<b>Verificação por email!</b> o token(temporário) é enviado para o e-mail do usuario cadastrado, assim como um botão que direciona para a rota de validação(verificado por e-mail) que é publica: <i><b>POST /acesso/valida/:token</b></i>. <br/>
<b>Atenção!</b> o login através da rota <i><b>POST /acesso/login/</b></i>(p/ obter novo token) somente é permitido para usuarios verificados por e-mail.<br/>


## 🚀 Preparar Lançamento

<ul>
  <li>Baixe o arquivo zipado do projeto, e descompacte na sua máquina local.</li>
  <li>Instale o NVM(Gerenciador de pacotes), caso não tiver.<br>Com <b>wGet</b>:<code>wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash</code><br/>Ou com <b>Curl</b>:<code>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
</code></li>
  <li>Instale o Nodejs na versão <b>16.18.0</b>(mais adequada), utilizando o nvm.<br/><code>nvm install 16.18.0</code></li>
  <li>Instale o NPM, caso não tiver, com o comando <code>npm install npm -g</code><br/> E no diretório raiz do projeto execute o comando:<code>npm install</code><br/> para instalar todos os pacotes necessários descritos no arquivo <i>packtage.json</i>.</li>
  <li>Instale o banco de dados <b>MongoDB</b>, através do site oficial: https://www.mongodb.com/</li>
  <li>Opcionalmente pode ser instalado ferramentas facilitadoras de inicialização do servidor.<br/>
  <b>Nodemon:</b><code>npm install nodemon --savedev</code> e <b>Pm2:</b><code>npm install pm2 -g</code></li>
  <li>No terminal acesse o diretório raiz do projeto e execute: <code>node index.js</code></li>
  <li>Show! agora o servidor deve estar acessivel pelo link: https://localhost:3000 <br/>para testar requisições instale o PostMan ou outro programa similar, e consulte as diferentes rotas e funções a seguir.</li>
</ul>
  
## 📋 Listagem de Rotas
  
Consulte as rotas disponiveis para requisitar a Api
<br/>
<br/>
### Para acesso e inicialização
  
| Método | URL requisição | Descrição |  Body Envio  |
|  :---: | ------------------ | ------------------ | ------------------ |
| <b>POST</b>   | ```/acesso/registro```  | Cadastra novo usuario e envia e-mail | ```{email:"", senha:"", nome:""}``` |
| <b>POST</b>   | ```/acesso/login```      | Login obtem novo token valido        | ```{email:"", senha:""}```          |
| <b>GET</b>    | ```/acesso/valida```     | Verifica usuario por email           | ```/:token```                       |
| <b>POST</b>   | ```/api/init```          | *Alimenta o banco com infos padrão   | Requer autenticação                 |
| <b>POST</b>   | ```/api/reset```         | *Limpa o banco de dados              | Requer autenticação                 |
<p>*Exceto para os cadastros do usuario e pedido</p>


### Para CRUD de cadastros
| Método | URL requisição | Descrição | 
|  :---: | ------------------ | ------------------ |
| <b>POST</b>   | ```/api/{cadastro}/```           | Cria um novo registro | 
| <b>GET</b>    | ```/api/{cadastro}/```           | Obtem todos os registros |
| <b>GET</b>    | ```/api/{cadastro}/:id```        | Obtem um registro do documento, com o ID na URL | 
| <b>GET</b>    | ```/api/pop/{cadastro}/```       | Obtem todos os registros <b>populados</b>(campo ID que referencia) | 
| <b>GET</b>    | ```/api/pop/{cadastro}/:id```    | Obtem um unico registro <b>populado</b>, com o ID na URL | 
| <b>PUT</b>    | ```/api/{cadastro}/:id```        | Atualiza um registro, com o ID na URL |
| <b>DELETE</b> | ```/api/{cadastro}/```           | Deleta alguns registos correspondentes ao JSON enviado no body <br/><b>Atenção!</b> use com cautela, para evitar perda de dados|
| <b>DELETE</b> | ```/api/{cadastro}/:id```        | Deleta um único registro, com o ID na URL |
| <b>POST</b>   | ```/api/agrupa/{cadastro}/:cmp```| Retorna agrupamento, que conta infos iguais em um campo(na URL) |
| <b>POST</b>   | ```/api/match/{oper}/{cadastro}/:cmp``` |  Retorna os registros que corresponde a uma operação<br><b>Obs.</b> É preciso enviar um JSON na requisição, com o atributo valor.<br/>Por exemplo: <code>{ valor: "" }</code> ou <code>{ valor: [""] }</code><br/><br/><b>Operações {oper} =</b><br/>"igual","naoigual","maior","maiorigual","menor","menorigual","contem","naocontem", "existe"}; 
| 


### Tipos de {cadastro} e informações
  
| Cadastro     | Campos |
| --------     | --------   |
| usuario      | <code>nome: String,</code><br/><code>email: {type: String, required: true, unique: true, lowercase: true},</code><br/><code>senha: {type: String, required: true},</code><br/><code>grupousuario: {type: String, ref: 'grupousuario'},</code><br/><code>endereco: {type: String, ref: 'endereco'}</code>|
| grupousuario | <code>nome: {type: String, required: true},</code><br/><code>desc: String,</code><br/><code>permpost: {type: Boolean,required: true},</code><br/><code>permget: {type: Boolean,required: true},</code><br/><code>permput: {type: Boolean,required: true},</code><br/><code>permdel: {type: Boolean,required: true}</code> |
| produto      | <code>nome: {type: String,required: true},</code><br/><code>categoria: {type: String,default:"outros"},</code><br/><code>anunciante: {type: String,ref: 'anunciante'},</code><br/><code>custo: {type: Number,default:0,min: 0},</code><br/><code>preco: {type: Number,default:0,min: 0},</code><br/><code>quantidade: {type: Number,default:0,min: 0},</code><br/><code>relevancia: {type: Number,min: 0,default:1},</code><br/><code>datavalidade: {type: Date},</code><br/><code>linkimagem: {type: String}</code> |
| pedido       | <code>status: {type:Boolean, default: false},</code><br/><code>data: {type:Date, default: Date.now()},</code><br/><code>usuario: {type: String, ref: 'usuario'},</code><br/><code>produto: {type: String, ref: 'produto'},</code><br/><code>quantidade: {type:Number, default: 0}</code> |
| anunciante   | <code>nome: {type:String, required: true},</code><br/><code>cnpj: String,</code><br/><code>ramo: String,</code><br/><code>telefone: String,</code><br/><code>celular: String,</code><br/><code>email: String,</code><br/><code>endereco: {type: String, ref: 'endereco'},</code><br/><code>linklogo: String</code> |
| ramo         | <code>nome: {type:String, required: true},</code><br/><code>desc: String,</code><br/><code>percimpos: Number</code> |
| endereco      | <code>endereco: {type: String,required: true},</code><br/><code>referencia: {type: String},</code><br/><code>complemento: {type: String},</code><br/><code>cep: {type: String},</code><br/><code>cidade: {type: String,required: true},</code><br/><code>uf: {type: String,required: true},</code><br/><code>numero: {type: String}</code> |

 
## 🛠️ Arquitetura do Software
O arquivo nomeado como "index.js" que fica localizado na pasta raiz do projeto, cria um  o servidor importando as blibiotecas necessárias e definindo o roteamento da API.<br/>

### Estruturação de diretórios

<b>/src</b><br/>
Configura, autentica e define diferentes fluxos de comunicação para a consulta da API no banco mongoDB;<br/>

<b>/src/routes</b><br/>
Define os dois diferentes tipos de rotas da aplicação(CRUD e Acesso) e envia para o controller praticamente tudo recebe.<br/>

<b>/src/controllers</b><br/>
Filtra os dados que serão utilizados para a consulta porterior, e retorna para a rota a resposta quando finalizado.<br/>

<b>/src/services</b><br/>
Recebe somente os dados necessários para efetuar a consulta no banco, se ocorrer tudo certo retorna para o controller os dados esperados<br/>

<b>/src/setup</b><br/>
Configura o Banco de dados, armazena dados padrões(de alimentação por rota) e o mais importante define os nomes dos documentos/rotas do crud <br/>







## 📌 Versão - 1.0.0


## ✒️ Autor

* **Jean Perondi** - *Projeto Completo - pedidOnline* - [perondjean](https://github.com/Jeanperondi10)


