from fastapi import FastAPI
from api.routes import chat, agents, documents

app = FastAPI()

app.include_router(chat.router, prefix="/api/chat")
app.include_router(agents.router, prefix="/api/agents")
app.include_router(documents.router, prefix="/api/documents")


@app.get("/")
def root():
    return {"status": "ok"}