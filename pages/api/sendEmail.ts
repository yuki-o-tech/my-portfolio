import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
    res.status(500).json({
      error: "The server is not properly configured to send emails.",
    })
    return
  }

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  })

  const { email, fullName, message } = req.body

  let mailOptions = {
    from: `"Yuki Otsubo" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,
    subject: `[Portfolio website] New message contact form`,
    text: `
      From: ${fullName} <${email}>
      Message: ${message}`,
    replyTo: email,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ status: "Email sent" })
  } catch (error: any) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}
