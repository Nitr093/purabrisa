import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombre, empresa, email, tipoServicio, mensaje } = body;

    // Validación básica de campos requeridos
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son obligatorios." },
        { status: 400 }
      );
    }

    // Validación simple de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "El email ingresado no es válido." },
        { status: 400 }
      );
    }

    // Transporte SMTP configurado vía variables de entorno
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, // true para puerto 465, false para el resto
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const destinatario = process.env.MAIL_TO || process.env.SMTP_USER;
    const remitente = process.env.MAIL_FROM || process.env.SMTP_USER;

    await transporter.sendMail({
      from: `"Web Nítida - Formulario de contacto" <${remitente}>`,
      to: destinatario,
      replyTo: email,
      subject: `Nueva consulta: ${empresa || nombre} — ${tipoServicio || "Sin especificar"}`,
      text: `
Nombre: ${nombre}
Empresa: ${empresa || "No especificada"}
Email: ${email}
Tipo de servicio: ${tipoServicio || "No especificado"}

Mensaje:
${mensaje}
      `.trim(),
      html: `
        <h2>Nueva consulta desde la web</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Empresa:</strong> ${empresa || "No especificada"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tipo de servicio:</strong> ${tipoServicio || "No especificado"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json(
      { message: "Mensaje enviado correctamente." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Intentá de nuevo más tarde." },
      { status: 500 }
    );
  }
}
