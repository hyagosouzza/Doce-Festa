// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

'use strict';
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.enviarEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    let remetente = '"Doce & Festa" <docefestasuporte@gmail.com>';

    let assunto = 'Contato Doce & Festa';
    let destinatarios = req.body['destinatarios']; // lista de e-mails destinatarios separados por ,
    let corpo = req.body['corpo'];
    let telefone = req.body['telefone'];
    let nome = req.body['nome'];
    let msg = '<b>Cliente:</b> ' + nome + '<br><b>Telefone:</b> ' + telefone + '<br><b>Email:</b> ' + destinatarios + '<br><br>' + corpo;
    let corpoConfirm = 'A <b>Doce & Festa</b> agradece seu contato e informa que fará um retorno em até 2 dias úteis.<br><br><font size="2" color="#ff0066"><b>Atenciosamente,<br>Equipe Doce & Festa<br>(62) 3373-2854<br>Av. José Bonifácio, Nº373 - Central, Jussara - GO, 76270-000<br>docefesta.jsa@gmail.com</b></font>';

    let emailConfirm = {
      from: remetente,
      to: destinatarios,
      subject: assunto,
      html: corpoConfirm
    };

    let selfEmail = {
      from: remetente,
      to: remetente,
      subject: assunto,
      html: msg
    };

    transporter.sendMail(emailConfirm, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Mensagem Confirmação %s enviada: %s', info.messageId, info.response);
    });

    transporter.sendMail(selfEmail, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Mensagem Self %s enviada: %s', info.messageId, info.response);
    });
    res.redirect('back');
  });
});