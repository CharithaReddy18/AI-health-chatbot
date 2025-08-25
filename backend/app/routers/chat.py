from fastapi import APIRouter
from app.models.schemas import ChatRequest, ChatResponse
from app.services.medical_agent import chatbot
from app.services.symptom_checker import symptom_checker

router = APIRouter()
# keep a simple session store (in-memory)
sessions = {}

@router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(req: ChatRequest, session_id: str = "default"):
    session = sessions.get(session_id, {})
    response, updated_session = symptom_checker(req.message, session)
    if not response:
        response = chatbot(req.message)
    sessions[session_id] = updated_session
    return {"response": response}
