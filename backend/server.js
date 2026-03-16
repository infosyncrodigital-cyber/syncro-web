require('dotenv').config(); // Carga las claves secretas
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = 3000;

// Middleware global
app.use(cors()); // CORS estándar para cuando estemos en producción
app.use(express.json());

// Configuración del Limitador (DESACTIVADO PARA PRUEBAS)
/*
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, 
    max: 100, 
    message: { error: 'Demasiadas peticiones. Inténtalo en un minuto.' },
    standardHeaders: true, 
    legacyHeaders: false,
});

app.use('/api/enviar', limiter);
*/

// Configuración de DonDominio (SMTP)
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, 
    port: 587, 
    secure: false, 
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
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
        console.error('❌ Error detallado enviando email:', {
            message: error.message,
            code: error.code,
            command: error.command,
            response: error.response
        });
        res.status(500).json({ 
            error: 'No se pudo enviar el email',
            details: error.message 
        });
    }
});

// Arrancar servidor
app.listen(PORT, () => {
    console.log(`🚀 Backend corriendo en http://localhost:${PORT}`);
});