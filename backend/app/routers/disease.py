from fastapi import APIRouter
from app.models.schemas import SymptomsRequest, DiseasePrediction
from app.services.disease_predictor import predict_diseases

router = APIRouter()

@router.post("/predict", response_model=list[DiseasePrediction])
async def predict_disease(req: SymptomsRequest):
    return predict_diseases(req.symptoms, req.threshold)
