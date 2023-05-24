import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_USER,
      pass: process.env.NEXT_PUBLIC_MAIL_PASS,
    },
  })

  const { email, fullName, message } = req.body

  let mailOptions = {
    from: email,
    to: process.env.NEXT_PUBLIC_MAIL_USER,
    subject: `[Portfolio website] New message from ${fullName}`,
    text: message,
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
