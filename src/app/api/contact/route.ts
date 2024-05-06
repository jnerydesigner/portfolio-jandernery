import { color } from "framer-motion";
import { NextResponse } from "next/server";
import { z } from "zod";
import axios from "axios";

const bodySchema = z.object({
  name: z.string(),
  phone: z.string(),
  mail: z.string(),
  messenger: z.string(),
});

type MenssengerDiscordType = {};

const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL_DISCORD!;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { mail, messenger, name, phone } = bodySchema.parse(body);

    const mesengerData = {
      embeds: [
        {
          type: "rich",
          title: "Mensagem de Contato do Portfolio",
          description: `Mensagem do ${name}`,
          color: 0x00ff00,
          fields: [
            {
              inline: true,
              name: "Nome",
              value: name,
            },
            {
              inline: true,
              name: "Email",
              value: mail,
            },
            {
              inline: true,
              name: "Telefone",
              value: phone,
            },
            {
              inline: true,
              name: "Mensagem",
              value: messenger,
            },
          ],
        },
      ],
    };

    await axios.post(WEBHOOK_URL, mesengerData);

    return NextResponse.json({ message: "Mensagem enviada com sucesso" });
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}
