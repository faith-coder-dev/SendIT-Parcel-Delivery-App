FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY BACKEND/requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt

COPY BACKEND/ /app/

CMD ["sh", "-c", "gunicorn app:app --bind 0.0.0.0:${PORT:-8000}"]