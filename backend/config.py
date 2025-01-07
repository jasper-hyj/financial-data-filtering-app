from pydantic_settings import BaseSettings, SettingsConfigDict

# Load environmental variables from .env file
class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file="../.env")