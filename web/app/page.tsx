"use client";

import { useState } from "react";
import { sendMessage } from "../lib/api";

export default function Home() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    const res = await sendMessage(message);
    setResponse(res.response);
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Agente IA</h1>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={handleSend}>Enviar</button>

      <pre>{response}</pre>
    </main>
  );
}