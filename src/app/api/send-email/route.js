// app/api/send-email/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
    const { name, email, message, subject } = await req.json();
    const transporter = nodemailer.createTransport({
        service: "gmail", // یا smtp مخصوص هاست خودت
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER, // فرستنده واقعی
        to: process.env.EMAIL_RECEIVER, // آدرس ایمیل تو
        subject: subject,
        text: `
        👤 نام: ${name}
        📧 ایمیل: ${email}
    
        📝 پیام:
        ${message}
      `,
      }

      try {
        await transporter.sendMail(mailOptions)
        return Response.json({ message: 'پیام با موفقیت ارسال شد' })
      } catch (err) {
        console.error('خطا در ارسال ایمیل:', err) // لاگ دقیق‌تر
        return Response.json({ message: 'خطا در ارسال ایمیل', error: err.message }, { status: 500 })
      }
}
