import { Request, Response } from "express";
import transport from "../service/mail";

export default async function FeedBackMidll(req: Request, res: Response) {
  const { feedback } = req.body;

  if (!feedback) return res.status(400).send("Feedback inválido");
  try {
    const email = await transport.sendMail({
      from: process.env.USERMAIL,
      to: process.env.GMAIL,
      subject: "Fitness-app feedback",
      text: feedback,
    });

    if (email.accepted.length > 0) {
      return res.status(200).send("Feedback enviado com sucesso");
    }
    return res
      .status(400)
      .send("Não foi possível enviar o feedback, tente mais tarde");
  } catch (error) {
    return res
      .status(400)
      .send("Não foi possível enviar o feedback, tente mais tarde");
  }
}
