from fastapi import FastAPI
from app.routers import disease, chat, health
from app.config import get_settings
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="AI Health Assistant Backend")

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize settings at startup
settings = get_settings()

# include routers
app.include_router(disease.router, prefix="/api", tags=["disease"])
app.include_router(chat.router, prefix="/api", tags=["chat"])
app.include_router(health.router, prefix="/api", tags=["health"])

@app.get("/")
def root():
    return {"message": "AI Health Assistant Backend is running"}