export async function sendMessage(message: string) {
  const res = await fetch("/api/chat", {
    method: "POST",
    body: JSON.stringify({ message }),
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
}