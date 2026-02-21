import os


SECRET_KEY = os.getenv("SECRET_KEY", "a_very_long_secret_key_for_jwt_123456")

_cors_origins_raw = os.getenv("CORS_ORIGINS", "*")
CORS_ORIGINS = [origin.strip() for origin in _cors_origins_raw.split(",") if origin.strip()]
if not CORS_ORIGINS:
	CORS_ORIGINS = ["*"]
