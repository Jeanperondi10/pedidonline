const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");
  
const modelAcesso=require('../models/usuario');


module.exports = class Acesso {

    async registro(dadosUser) {
        try{
            //Caso existir remove atributo que valida usuario por e-mail
            if (dadosUser.status) {
                delete dadosUser.status;
            }
            let cadastro = await modelAcesso.create(dadosUser);
            return cadastro;
        }catch(err){
            return err;
        }
    }

    async findOne(filter) {
        let cadastro;
        const emailuser = filter.email;
        const senhauser = filter.senha;
        try{
            return await modelAcesso.findOne({email: emailuser, senha: senhauser});
        }catch(err){
            return err;
        }
    }

    async validaUser(token) {
        try {
            const decodedToken = jwt.verify(token, 'senhasecreta'); // verifica se o token é válido e decodifica
            const userId = decodedToken.sub; // obtem o ID do usuário
            if (!userId) {
              console.log("Token inválido ou não contém userId");
              return {status:false,message:"Token inválido ou não contém userId"};
            } else {
              try {
                const user = await modelAcesso.findById(userId);
                if (!user) {
                  console.log("Não encontrou o usuário:" + userId);
                  return {status:false,message:"Ops! não encontrado o usuário"};
                } else {
                    user.status=true
                    let cadastro;
                    try{
                        cadastro = await modelAcesso.updateOne({_id: userId}, {$set: user});
                        console.error("Usuario verificado ID: "+userId);
                        return {status:true,message:"Sucesso! seu usuario foi verificado por e-mail"};
                    }catch(err){
                        return {status:false,message:"Erro! não foi possivel alterar status usuario"};
                    }
                    
                }
              } catch (err) {
                console.log("Ocorreu um problema ao decodificar o token\n" + error);
                return {status:false,message:"Ocorreu um problema ao decodificar o token\n"+ error}
              }
            }
          } catch (error) {
            // erro ao verificar o token
            console.log("Ocorreu um problema com a requisicao\n" + error);
            return {status:false,message:"Ocorreu um problema com a requisicao\n" + error};
          }
    }

    async token(body) {
        try{
            const email = body.email;
            const senha = body.senha;

            const usuario = await modelAcesso.findOne({email: email, senha: senha});

            if (usuario) {
                const expiracao = Math.floor(Date.now() / 1000) + (60 * 60); // expiração definida para 1 hora a partir do momento atual
                return {token: jwt.sign({
                    sub: usuario._id,
                    exp: expiracao
                }, 'senhasecreta')}; //assinatura do token
            } else {
                console.log("Ops deu ruim no token");
                return {"error": "Dados invalidos!"};
            }
        }catch(err){
            return err
        }

    }

    async enviaEmail(email, infoToken) {
        //Variaveis do e-mail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: 'pedidonlinedev@gmail.com',
            pass: 'fthvlkkzoevyetlo'
            }
        });
        const linkbotao='http://localhost:3000/acesso/valida/'+infoToken
        const mailOptions = {
            from: 'pedidonlinedev@gmail.com',
            to: email,
            subject: 'Sistema de Pedidos: Valide seu usuário',
            html: `<div style="text-align: center;">
                    <h1>Validação de Conta</h1>
                    <p>Olá, obrigado por se cadastrar em nosso sistema. Para validar a sua conta, clique no botão abaixo:</p>
                    <a href="`+linkbotao+`" class="button" style="background-color: black; color: white; padding: 12px 24px; text-align: center; text-decoration: none; display: inline-block; border-radius: 20px;font-size: 16px;cursor:pointer">Validar Conta</a><p>Se o botão acima não funcionar, você pode copiar e colar o token abaixo:</p>
                    <p style="padding:9px; border-radius:9px; background-color:gray; color:whitefont-size: 12px;display: block;width: 50% !important;margin: auto;">`+infoToken+`</p>
                </div>`
        };
        try{
            transporter.sendMail(mailOptions, (error, info) => {
                console.log("Enviando e-mail params["+email+","+infoToken+"]")
                if (error) {
                    console.log('Ops! não enviado e-mail '+error);
                    return "Falha ao enviar e-mail";
                } else {
                    console.log('E-mail enviado: ' + info.response);
                    return "Sucesso! e-mail enviado";
                }
            });
        }catch(err){
            return err;
        }
    }
};