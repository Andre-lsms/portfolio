// /api/send-email.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Apenas o método POST é permitido' });
  }

  const { name, email, assunto, message } = req.body;

  if (!name || !email || !assunto || !message) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    secure: true,
    port: 465,
    auth: {
      user: process.env.ZOHO_EMAIL_USER,
      pass: process.env.ZOHO_EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Seu Portfólio" <${process.env.ZOHO_EMAIL_USER}>`,
      to: process.env.ZOHO_EMAIL_USER, // O e-mail vai para você mesmo
      replyTo: email, // Permite responder diretamente para o visitante
      subject: `Nova mensagem do Portfólio: ${assunto}`,
      html: `
        <div style="font-family: sans-serif; font-size: 16px; color: #333;">
          <h2>Nova mensagem de contato recebida</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Assunto:</strong> ${assunto}</p>
          <hr>
          <p><strong>Mensagem:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return res.status(500).json({ message: 'Ocorreu um erro ao enviar a mensagem.' });
  }
}