from fastapi import APIRouter
from pydantic import BaseModel
from agente import ai

router = APIRouter()

class ChatRequest(BaseModel):
    message: str

@router.post("/")
def chat(req: ChatRequest):
    response = ai.run(req.message)  # adapta esto a tu lógica real
    return {"response": response}