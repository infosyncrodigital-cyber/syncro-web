require('dotenv').config(); // Carga las claves secretas
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json()); // Permite recibir datos JSON
app.use(cors()); // Permite que el Frontend (puerto 5173) hable con el Backend (puerto 3000)

// Configuración de DonDominio (SMTP)
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, 
    port: 587, // Puerto seguro SSL habitual en DonDominio
    secure: false, 
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
    tls: {
        ciphers: 'SSLv3'
    }
});

// Verificamos la conexión al arrancar
transporter.verify((error, success) => {
    if (error) {
        console.error('❌ Error conectando al servidor de correo:', error);
    } else {
        console.log('✅ Servidor de correo listo para enviar mensajes');
    }
});

// Ruta API
app.post('/api/enviar', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Faltan datos' });
    }

    try {
        const info = await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_USER}>`, // OJO: El remitente debe ser TU correo para evitar bloqueos de spam
            replyTo: email, // Si le das a "responder", responderás al cliente
            to: process.env.SMTP_USER, // Te lo envías a ti mismo
            subject: `🚀 Nuevo contacto web: ${name}`,
            text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
            html: `
                <h3>Nuevo mensaje desde la web</h3>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <hr>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        });

        console.log('📩 Email enviado:', info.messageId);
        res.status(200).json({ message: 'Email enviado correctamente' });

    } catch (error) {
        console.error('❌ Error enviando email:', error);
        res.status(500).json({ error: 'No se pudo enviar el email' });
    }
});

// Arrancar servidor
app.listen(PORT, () => {
    console.log(`🚀 Backend corriendo en http://localhost:${PORT}`);
});