from pydantic import BaseModel
from typing import List, Optional

class SymptomsRequest(BaseModel):
    symptoms: List[str]
    threshold: float = 20.0

class DiseasePrediction(BaseModel):
    Disease: str
    Chances: float
    Specialist: Optional[str] = None
    Description: Optional[str] = None

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str
