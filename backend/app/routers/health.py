from fastapi import APIRouter
from app.services.health_info import get_health_info

router = APIRouter()

@router.get("/health-info")
async def health_info(topic: str = None):
    return get_health_info(topic)
