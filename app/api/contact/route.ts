import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';


export async function POST(request: NextRequest){

    const { name, email, message } = await request.json();
    console.log(name, email, message);
    
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New message from ${name} at ${email}`,
        text: message
    }

    try{
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true });

    } catch(e: any){
        console.log(e);
        return NextResponse.json({ success: false });
    }

}