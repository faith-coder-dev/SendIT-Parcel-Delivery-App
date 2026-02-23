import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base

# Load environment variables from .env (for local dev)
load_dotenv()

# Detect environment
env_name = (os.getenv("FLASK_ENV") or os.getenv("APP_ENV") or os.getenv("ENV") or "development").lower()
is_production = env_name == "production"

# Get DATABASE_URL from environment
DATABASE_URL = os.getenv("DATABASE_URL")
if not DATABASE_URL:
    if is_production:
        raise RuntimeError("DATABASE_URL is required in production")
    DATABASE_URL = "sqlite:///sendit.db"

# Validate connection string
if DATABASE_URL.startswith("http://") or DATABASE_URL.startswith("https://"):
    raise RuntimeError("DATABASE_URL must be a database connection string, not an HTTP URL")

# Normalize Postgres connection string for SQLAlchemy + psycopg2
if DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql+psycopg2://", 1)
elif DATABASE_URL.startswith("postgresql://"):
    DATABASE_URL = DATABASE_URL.replace("postgresql://", "postgresql+psycopg2://", 1)

# Engine configuration
engine_kwargs = {"echo": False}
if DATABASE_URL.startswith("sqlite"):
    engine_kwargs["connect_args"] = {"check_same_thread": False}

engine = create_engine(DATABASE_URL, **engine_kwargs)
SessionLocal = sessionmaker(bind=engine)

def init_db():
    Base.metadata.create_all(bind=engine)
