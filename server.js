const express = require("express");
const app = express();
const server = require("http").Server(app);
var nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    post: 465,
    host:"smtg.gmail.com",
    auth:{
        user : '',
        pass: ' ',
    },
    secure:true,
});

app.use(express.json())

server.listen(process.env.PORT || 3030);