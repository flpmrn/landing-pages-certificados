import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    console.log("[LEAD API] Requisição recebida");
    console.log("[LEAD API] SMTP_HOST:", process.env.SMTP_HOST);
    console.log("[LEAD API] SMTP_PORT:", process.env.SMTP_PORT);
    console.log("[LEAD API] SMTP_USER:", process.env.SMTP_USER);
    console.log("[LEAD API] SMTP_PASS:", process.env.SMTP_PASS ? "***definida***" : "NÃO DEFINIDA");
    console.log("[LEAD API] NOTIFY_EMAIL:", process.env.NOTIFY_EMAIL);

    try {
        const body = await req.json();
        const { name, email, whatsapp } = body;
        console.log("[LEAD API] Lead recebido:", { name, email, whatsapp });

        if (!name || !email || !whatsapp) {
            return NextResponse.json({ error: "Dados incompletos" }, { status: 400 });
        }

        const smtpHost = process.env.SMTP_HOST || "mail.itcia.com.br";
        const smtpPort = Number(process.env.SMTP_PORT) || 465;
        const smtpUser = process.env.SMTP_USER || "sync@itcia.com.br";
        const smtpPass = process.env.SMTP_PASS;
        const notifyEmail = process.env.NOTIFY_EMAIL || "compras@itcia.com.br";

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: { user: smtpUser, pass: smtpPass },
            connectionTimeout: 10000,
            greetingTimeout: 10000,
            socketTimeout: 15000,
            tls: {
                rejectUnauthorized: false,
            },
        });

        console.log("[LEAD API] Tentando conectar ao SMTP...");

        await transporter.sendMail({
            from: `"e-CNPJ Digital" <${smtpUser}>`,
            to: notifyEmail,
            subject: `🎯 Novo Lead e-CNPJ: ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
                    <div style="background: #0F172A; padding: 20px; border-radius: 12px 12px 0 0; text-align: center;">
                        <h1 style="color: #FF5722; margin: 0; font-size: 24px;">🎯 Novo Lead e-CNPJ!</h1>
                    </div>
                    <div style="background: white; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e0e0e0;">
                        <p style="color: #555; font-size: 16px; margin-top: 0;">Um visitante preencheu o formulário em <strong>cnpjdigital.com.br</strong>:</p>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background: #f5f5f5;">
                                <td style="padding: 12px; font-weight: bold; color: #0F172A; width: 30%;">Nome</td>
                                <td style="padding: 12px; color: #333;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px; font-weight: bold; color: #0F172A;">E-mail</td>
                                <td style="padding: 12px; color: #333;">${email}</td>
                            </tr>
                            <tr style="background: #f5f5f5;">
                                <td style="padding: 12px; font-weight: bold; color: #0F172A;">WhatsApp</td>
                                <td style="padding: 12px; color: #333;">${whatsapp}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px; font-weight: bold; color: #0F172A;">Produto</td>
                                <td style="padding: 12px; color: #FF5722; font-weight: bold;">e-CNPJ A1 Digital</td>
                            </tr>
                            <tr style="background: #f5f5f5;">
                                <td style="padding: 12px; font-weight: bold; color: #0F172A;">Data/Hora</td>
                                <td style="padding: 12px; color: #333;">${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</td>
                            </tr>
                        </table>
                        <div style="margin-top: 24px; text-align: center;">
                            <a href="https://wa.me/5516988443346?text=Olá ${encodeURIComponent(name)}, vi que você preencheu o formulário do e-CNPJ Digital!"
                               style="background: #25D366; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px;">
                                📱 Abrir WhatsApp com o cliente
                            </a>
                        </div>
                    </div>
                </div>
            `,
        });

        console.log("[LEAD API] E-mail enviado com sucesso para", notifyEmail);
        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("[LEAD API] ERRO ao enviar e-mail:", error);
        return NextResponse.json({ success: false, error: String(error) });
    }
}
