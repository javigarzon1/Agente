import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();

  const backendUrl = process.env.AGENT_API_URL;

  if (!backendUrl) {
    return NextResponse.json({
      response: `Recibido: ${message}`,
    });
  }

  const upstream = await fetch(`${backendUrl}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  if (!upstream.ok) {
    return NextResponse.json(
      { error: "Backend error" },
      { status: 502 }
    );
  }

  const data = await upstream.json();
  return NextResponse.json(data);
}