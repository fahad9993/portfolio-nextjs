import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import mongoose from "mongoose";
import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";

export async function POST(req: NextRequest) {
  const { fullname, email, message } = await req.json();
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await connectDB();
    await Contact.create({ fullname, email, message });

    // Send acknowledgment email==
    // Create a Nodemailer transporter using the SMTP settings
    // const transporter = nodemailer.createTransport({
    //   host: "smtp.office365.com",
    //   port: 587,
    //   secure: false, // true for 465, false for other ports
    //   auth: {
    //     user: process.env.EMAIL_USERNAME,
    //     pass: process.env.EMAIL_PASSWORD,
    //   },
    // });

    // const mailOptions = {
    //   from: process.env.EMAIL_USERNAME,
    //   to: email, // Use the user's email from the contact form
    //   subject: "Thank you for contacting me!",
    //   html: `<p>Hello ${fullname},</p>
    //   <p>Thank you for contacting me. I will get back to you soon.</p>
    //   <p>Best Regards,</p>
    //   <p style="color: blue;">Md. Fahad Rahman</p>`,
    // };

    // await transporter.sendMail(mailOptions);
    // await wrapedSendMail(mailOptions);

    await resend.emails.send({
      from: "Md. Fahad Rahman | Portfolio <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting me!",
      react: EmailTemplate({ fullname: fullname }),
    });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      // console.error("Unable to send message:", error);
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}
