import { env } from "@/env";
import { NextRequest, NextResponse } from "next/server";

const webhookUrl = env.DISCORD_WEBHOOK_URL;

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    console.log(name, email, message);
    if (!webhookUrl) {
      return NextResponse.json(
        { error: "No webhook URL provided." },
        { status: 500 },
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "2x-Contact",
        avatar_url: "https://i.imgur.com/4M34hi2.png",
        embeds: [
          {
            title: "New Contact Form Submission",
            description:
              "You received a new message from 2xDevs.com contact form. Here are the details:",
            color: Math.floor(Math.random() * 16777215),
            fields: [
              {
                name: "Name",
                value: name,
                inline: true,
              },
              {
                name: "Email",
                value: email,
                inline: true,
              },
              {
                name: "Message",
                value: message.replace(/\n/g, "\n> "),
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error("something went wrong");
    }
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
