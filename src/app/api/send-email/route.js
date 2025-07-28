import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log('requeted data from frontend:', body)
    const { firstName, lastName, email, phone, service, message } = body;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "omaissatti42@gmail.com",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    return Response.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false, message: "Failed to send email." }), {
      status: 500,
    });
  }
}
