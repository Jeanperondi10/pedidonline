<h1 align="center">Documentação - pedidOnline</h1>

<h5 align="center">API de Pedidos de Produtos em NodeJS, para o DevEvolution<h5>
  
## 📦 Introdução

A execução do projeto constroi um servidor local no link https://localhost:3000 (porta web 3000), que permite através de autenticação JWT, acessar rotas CRUD(Create, Read, Update,Delete) para obter informações e manipular dados relacionados a <i>produtos, pedidos, marcas, usuarios, grupodeusuarios</i>.<br/><br/>
<b><u>Como obter token de acesso JWT?</u></b><br/>
Cadastrando um novo usuario, atraves da rota pública <i><b>POST /acesso/registro</b></i> informando os dados: <i>{nome:"", email:"", senha:""}</i><br/> 
<b>Verificação por email!</b> o token(temporário) é enviado para o e-mail do usuario cadastrado, assim como um botão que direciona para a rota de validação(verificado por e-mail) que é publica: <i><b>POST /acesso/valida/:token</b></i>. <br/>
<b>Atenção!</b> o login através da rota <i><b>POST /acesso/login/</b></i>(p/ obter novo token) somente é permitido para usuarios verificados por e-mail.<br/>


## 🚀 Preparar Lançamento

<ul>
  <li>Baixe o arquivo zipado do projeto, e descompacte na sua máquina local.</li>
  <li>Instale o NVM(Gerenciador de pacotes), caso não tiver.<br>Utilizando <b>wGet</b>:<code>wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash</code><br/>Ou utilizando <b>Curl</b>:<code>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
</code></li>
  <li>Instale o Nodejs na versão <b>16.18.0</b>(mais adequada), utilizando o nvm.<br/><code>nvm install 16.18.0</code></li>
  <li>Instale o NPM, caso não tiver, com o comando <code>npm install npm -g</code><br/> E no diretório raiz do projeto execute o comando:<code>npm install</code><br/> para instalar todos os pacotes necessários descritos no arquivo <i>packtage.json</i>.</li>
  <li>Opcionalmente pode ser instalado ferramentas facilitadoras de inicialização do servidor.<br/>
  <b>Nodemon:</b><code>npm install nodemon --savedev</code> e <b>Pm2:</b><code>npm install pm2 -g</code></li>
  <li>No terminal acesse o diretório raiz do projeto e execute: <code>node index.js</code></li>
  <li>Show! agora o servidor deve estar acessivel pelo link: https://localhost:3000 <br/>para testar requisições instale o PostMan ou outro programa similar, e consulte as diferentes rotas e funções a seguir.</li>
</ul>

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.
  
## 📋 Listagem de Rotas
  
De que coisas você precisa para instalar o software e como instalá-lo?

```
GET /api/usuario
```
<code>
  Um código Json aqui
</code>

### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

Diga como essa etapa será:

```
Dar exemplos
```

E repita:

```
Até finalizar
```

Termine com um exemplo de como obter dados do sistema ou como usá-los para uma pequena demonstração.

## ⚙️ Executando os testes

Explicar como executar os testes automatizados para este sistema.

### 🔩 Analise os testes de ponta a ponta

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

### ⌨️ E testes de estilo de codificação

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

## 📦 Implantação

Adicione notas adicionais sobre como implantar isso em um sistema ativo

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - O framework web usado
* [Maven](https://maven.apache.org/) - Gerente de Dependência
* [ROME](https://rometools.github.io/rome/) - Usada para gerar RSS

## 🖇️ Colaborando

Por favor, leia o [COLABORACAO.md](https://gist.github.com/usuario/linkParaInfoSobreContribuicoes) para obter detalhes sobre o nosso código de conduta e o processo para nos enviar pedidos de solicitação.

## 📌 Versão

Nós usamos [SemVer](http://semver.org/) para controle de versão. Para as versões disponíveis, observe as [tags neste repositório](https://github.com/suas/tags/do/projeto). 

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Um desenvolvedor** - *Trabalho Inicial* - [umdesenvolvedor](https://github.com/linkParaPerfil)
* **Fulano De Tal** - *Documentação* - [fulanodetal](https://github.com/linkParaPerfil)

Você também pode ver a lista de todos os [colaboradores](https://github.com/usuario/projeto/colaboradores) que participaram deste projeto.

## 📄 Licença

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.

## 🎁 Expressões de gratidão

* Conte a outras pessoas sobre este projeto 📢;
* Convide alguém da equipe para uma cerveja 🍺;
* Um agradecimento publicamente 🫂;
* etc.


---
⌨️ com ❤️ por [Armstrong Lohãns](https://gist.github.com/lohhans) 😊
