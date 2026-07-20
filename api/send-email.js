import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { name, email, assunto, message } = req.body;

  // Bloco de CSS idêntico para os dois e-mails para garantir a mesma identidade visual
  const cssStyles = `
    /* Reset básico para clientes de e-mail */
    body, p, h1, h2, div { margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
    body { background-color: #F9F8F6; color: #1a1a1a; padding: 40px 20px; }
    
    /* Container Principal */
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid #eaeaea; }
    
    /* Cabeçalho */
    .header { background-color: #71562C; padding: 40px; text-align: left; }
    .header h1 { color: #ffffff; font-size: 16px; font-weight: 600; letter-spacing: 4px; text-transform: uppercase; margin: 0; }
    .header span { color: #e6d5b8; opacity: 0.7; } /* Cor clara para dar contraste no fundo marrom */
    
    /* Corpo do E-mail */
    .content { padding: 40px; }
    .field { margin-bottom: 30px; }
    .field:last-child { margin-bottom: 0; }
    
    /* Textos (Adicionado para o segundo e-mail) */
    .text-block { font-size: 15px; line-height: 1.8; color: #444444; margin-bottom: 20px; }
    
    /* Labels e Caixas de Valor */
    .label { font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #888888; margin-bottom: 10px; font-weight: bold; }
    .value { font-size: 16px; color: #1a1a1a; line-height: 1.5; padding: 16px 20px; background-color: #F9F8F6; border-radius: 8px; border-left: 4px solid #71562c; }
    .message-box { padding: 24px; background-color: #F9F8F6; border-radius: 12px; font-size: 15px; line-height: 1.8; color: #333333; border: 1px solid #f0f0f0; white-space: pre-wrap; }
    
    /* Rodapé */
    .footer { padding: 30px 40px; background-color: #fafafa; border-top: 1px solid #eaeaea; text-align: center; font-size: 10px; color: #aaaaaa; letter-spacing: 1px; text-transform: uppercase; line-height: 1.8; }
    .footer-links a { color: #71562c; text-decoration: none; font-weight: bold; margin: 0 10px; letter-spacing: 2px; }
  `;

  try {
    console.log("=== DADOS CHEGANDO NO BACKEND ===");
    console.log("Nome:", name);
    console.log("Email do Cliente:", email);
    console.log("=================================");

    // 1. E-MAIL INTERNO (O que você recebe)
    const data = await resend.emails.send({
      from: "Portfólio <site@andrestudio.com.br>",
      to: ["contato@andrestudio.com.br"],
      replyTo: email,
      subject: `[Novo Contato] ${assunto}`,
      html: `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${cssStyles}</style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Novo Contato <span>//</span></h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Nome do Cliente</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">E-mail para Retorno</div>
              <div class="value">
                <a href="mailto:${email}" style="color: #1a1a1a; text-decoration: none; font-weight: 500;">${email}</a>
              </div>
            </div>
            <div class="field">
              <div class="label">Assunto / Interesse</div>
              <div class="value">${assunto}</div>
            </div>
            <div class="field">
              <div class="label">Mensagem</div>
              <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
            </div>
          </div>
          <div class="footer">
            André Santos Studio • E-mail Automático Interno
          </div>
        </div>
      </body>
      </html>
      `,
    });

    // 2. E-MAIL DO CLIENTE (O que o cliente recebe)
    await resend.emails.send({
      from: "AS Design <design@andrestudio.com.br>",
      to: [email],
      subject: `Recebemos sua mensagem, ${name.split(" ")[0]}!`,
      html: `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${cssStyles}</style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Mensagem Recebida </h1>
          </div>
          <div class="content">
            <p class="text-block" style="font-size: 20px; font-weight: bold; color: #1a1a1a;">
              Olá, ${name.split(" ")[0]}!
            </p>
            <p class="text-block">
              Obrigado por entrar em contato. Este é um e-mail automático apenas para confirmar que recebi a sua mensagem referente a <strong>${assunto}</strong>.
            </p>
            <p class="text-block">
              Vou analisar os detalhes com calma e retornarei o mais breve possível neste mesmo e-mail para darmos o próximo passo no seu projeto.
            </p>

            <div class="field" style="margin-top: 40px;">
              <div class="label">Resumo da sua mensagem</div>
              <div class="message-box" style="font-style: italic;">${message.replace(/\n/g, "<br>")}</div>
            </div>
          </div>
          <div class="footer">
            André Santos Studio <br>• Este  é um e-mail automático e não deve ser respondido.
            
          </div>
        </div>
      </body>
      </html>
      `,
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}
