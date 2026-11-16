require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { rateLimit, ipKeyGenerator } = require('express-rate-limit');

const app = express();
const PORT = 3000;

app.use(cors({ origin: ['https://syncrodigital.es', 'https://www.syncrodigital.es', 'http://localhost:5173'] }));
app.use(express.json({ limit: '20kb' }));

// The site goes Cloudflare -> nginx -> here, and nginx does not forward the
// visitor's IP. Cloudflare sends it in CF-Connecting-IP; without it (local
// tests) fall back to the socket address.
const visitorIp = (req) => req.get('cf-connecting-ip') || req.socket.remoteAddress || 'unknown';

// 5 messages every 10 minutes per visitor
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  limit: 5,
  keyGenerator: (req) => ipKeyGenerator(visitorIp(req)),
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { error: 'Has enviado varios mensajes seguidos. Prueba de nuevo en unos minutos.' },
});
app.use('/api/enviar', limiter);

// SMTP de DonDominio
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

transporter.verify((error) => {
  if (error) console.error('SMTP no disponible:', error.message);
  else console.log('SMTP listo');
});

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const oneLine = (s) => String(s).replace(/[\r\n]+/g, ' ').trim();
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

app.post('/api/enviar', async (req, res) => {
  const { name, email, message, website } = req.body || {};

  // honeypot: a person never fills this field; pretend it went fine
  if (website) return res.status(200).json({ ok: true });

  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
    return res.status(400).json({ error: 'Faltan datos.' });
  }
  const n = oneLine(name).slice(0, 100);
  const e = oneLine(email).slice(0, 200);
  const m = message.trim().slice(0, 5000);
  if (!n || !m) return res.status(400).json({ error: 'Falta el nombre o el mensaje.' });
  if (!EMAIL.test(e)) return res.status(400).json({ error: 'El email no parece correcto.' });

  try {
    await transporter.sendMail({
      from: `"Web Syncro Digital" <${process.env.SMTP_USER}>`,
      replyTo: { name: n, address: e },
      to: process.env.SMTP_USER,
      subject: `Nuevo contacto web: ${n}`,
      text: `Nombre: ${n}\nEmail: ${e}\n\n${m}`,
      html: `<h3>Nuevo mensaje desde la web</h3>
        <p><strong>Nombre:</strong> ${escapeHtml(n)}</p>
        <p><strong>Email:</strong> ${escapeHtml(e)}</p>
        <hr>
        <p>${escapeHtml(m).replace(/\n/g, '<br>')}</p>`,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Error enviando email:', { message: err.message, code: err.code, response: err.response });
    res.status(500).json({ error: 'No se ha podido enviar el mensaje.' });
  }
});

app.listen(PORT, () => console.log(`Backend en http://localhost:${PORT}`));
