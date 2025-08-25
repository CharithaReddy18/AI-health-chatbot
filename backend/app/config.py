from pydantic_settings import BaseSettings
from functools import lru_cache

class Settings(BaseSettings):
    # add keys here if needed
    GROQ_API_KEY: str | None = None

    class Config:
        env_file = ".env"

@lru_cache
def get_settings():
    return Settings()
