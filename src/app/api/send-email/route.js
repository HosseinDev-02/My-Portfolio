// app/api/send-email/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
    const { name, email, message, subject } = await req.json();
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // SSL
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER, // فرستنده واقعی
        to: process.env.EMAIL_RECEIVER, // آدرس ایمیل تو
        subject: subject,
        html: `
          <div style="direction: rtl;">
            <h6 style="font-size: 16px; margin-bottom: 16px;">
              ${name} برای شما پیامی ارسال کرد
            </h6>
            <div style="margin-bottom: 8px;">
              <span>نشانی : ${email}</span>
            </div>
            <p style="margin: 0; padding: 0;">
              متن پیام : ${message}
            </p>
          </div>
        `, // قالب ایمیلی که کاربر بهت ارسال میکنه
    };

    try {
        await transporter.sendMail(mailOptions);
        return Response.json({ message: "پیام با موفقیت ارسال شد" });
    } catch (err) {
        console.error("خطا در ارسال ایمیل:", err); // لاگ دقیق‌تر
        return Response.json(
            { message: "خطا در ارسال ایمیل", error: err.message },
            { status: 500 }
        );
    }
}
