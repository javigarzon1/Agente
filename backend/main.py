from fastapi import FastAPI # type: ignore
from pydantic import BaseModel # pyright: ignore[reportMissingImports]

app = FastAPI()

class Message(BaseModel):
    message: str

@app.get("/")
def health():
    return {"status": "ok"}

@app.post("/chat")
def chat(data: Message):
    return {"response": f"Backend: {data.message}"}