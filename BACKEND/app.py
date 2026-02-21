import os
from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from database import init_db, SessionLocal
from config import SECRET_KEY, CORS_ORIGINS

# Load environment variables
load_dotenv()

# Create Flask app
app = Flask(__name__)
app.config["SECRET_KEY"] = SECRET_KEY

# Enable CORS for your frontend
CORS(app, origins=CORS_ORIGINS)

# Initialize database
init_db()

# Root route
@app.route("/")
def index():
    return "SendIT backend is running and connected to Supabase!"

# Health check route
@app.route("/health")
def health_check():
    try:
        db = SessionLocal()
        db.execute("SELECT 1")
        db.close()
        return jsonify({"status": "ok", "database": "connected"})
    except Exception as e:
        return jsonify({"status": "error", "database": str(e)})

# Example protected route (JWT logic would go here)
@app.route("/profile")
def profile():
    return jsonify({"message": "This would return user profile data"})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
