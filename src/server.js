const express = require("express");
const cors = require("cors");
const router = express.Router();
const nodemailer=require("nodemailer");

//Mandar email
const app = express();
app.use("/", router);
const port = 5000;
app.listen(port, () => console.log(`Servidor rodando em: localhost${port}`));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "************@gmail.com",
        pass: ""
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Pode mandar o e-mail")
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: "***************@gmail.com",
        subject: "Mensagem enviada pelo portfolio",
        html: `<p>Nome:${name}</p>
        <p>Email:${email}</p>
        <p>Nome:${name}</p>
        <p>Telefone:${phone}</p>
        <p>Mensagem:${message}</p>`
            
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error)
        } else {
            res.json({ code: 200, status: "Mensagem enviada" });
        }
    });
});
