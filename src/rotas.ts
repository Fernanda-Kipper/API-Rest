const express2 = require('express');
const nodemailer = require('nodemailer');

const rotas = express2.Router();
const db = require(__dirname +'/database/db.ts')

const {getEquipe, postEquipe, getParticipante, deleteParticipante, updateParticipante} = require(__dirname + '/controllers/equipeController.js')


rotas.get("/", (req, res) => {
    return res.send('<h1> Api no Ar</h1>')
})

//equipe no geral
rotas.post("/equipe", postEquipe);
rotas.get("/equipe", getEquipe);
//participante específico
rotas.get("/equipe/:participante", getParticipante);
rotas.delete("/equipe/:id", deleteParticipante);
rotas.put("/equipe/:id", updateParticipante);


//contato único
rotas.post("/contato", (req, res)=>{
    const {
        name,
        email,
        tel,
        message
    } = req.body
    const transporter = nodemailer.createTransport({
        host: process.env.HOST_MAIL,
        port: 587,
        secure: false,
        auth: {user: process.env.USER_MAIL, pass: process.env.KEY_MAIL}
    });
    transporter.sendMail({
        from: `${name} <${process.env.USER_MAIL}>`,
        to: `${process.env.USER_MAIL}`,
        subject: 'Contato através do Site CrIE',
        replyTo: email,
        text: `${message}. Telefone: ${tel}`
    }).then(message => {
        console.log(message)
        res.status(202).send("Mensagem enviada!")
    }).catch(err =>{
        console.log(err)
        res.status(400).send("Erro ao enviar mensagem")
    })
});

module.exports = rotas;

