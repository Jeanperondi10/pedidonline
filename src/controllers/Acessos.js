const AcessoService = new (require('../services/Acesso'));

module.exports = class Acessos {

    async registro(req, res) {
        //Tentar criar usuario Banco
        let retornoBanco = await AcessoService.registro(req.body);
        //Gerar o token de acesso 
        let infToken=await AcessoService.token(retornoBanco);
        //Enviar o e-mail de verificação
        let enviaEmail=await AcessoService.enviaEmail(retornoBanco.email,infToken.token);
        res.json({dados:retornoBanco, email:enviaEmail});
    }
    async login(req, res) {
        let buscauser=await AcessoService.findOne(req.body);
        if(buscauser.status){
            let infToken=await AcessoService.token(req.body);
            res.json(infToken);
        }else{
            res.json({message: "E-mail não validado"});
        }
    }
    async validaUser(token,res) {
        let mensagem=await AcessoService.validaUser(token);
        let corFundo="red", infotela="Tela de verificação de usuario";
        console.log(mensagem)
        if(mensagem.status){
            corFundo="green"
        }
        if(mensagem.message){
            infotela=mensagem.message;
        }
        res.send("<body><h2>"+infotela+"</h2><p><b>Token JWT:</b><br/> "+token+"</p></body><style>body{margin:0px; width:100vw; height:100vh; background:"+corFundo+";}h2{font-family:helvetica; color:white; font-size:4vh; text-align:center; padding:35vh 5vh;}p{font-family:helvetica; color:white; font-size:2vh; text-align:center; margin:0px;padding: 5vh 0px;position:absolute; bottom:0; left:0; right:0; background:black}</style>");
    }
};