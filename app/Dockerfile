FROM python:3.11-slim

# Prevent Python from writing .pyc files and enable unbuffered logs
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Install dependencies
COPY BACKEND/requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend code
COPY BACKEND/ .

# Expose the port (Koyeb will inject PORT)
EXPOSE 8000

# Run with Gunicorn using config file that reads PORT at runtime
CMD ["gunicorn", "app:app", "-c", "gunicorn.conf.py"]
