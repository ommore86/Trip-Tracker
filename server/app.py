from flask import Flask
from flask_pymongo import PyMongo
from flask_cors import CORS
import os
from dotenv import load_dotenv

from routes.trip_routes import trips_bp  # ✅ Import here

load_dotenv()
app = Flask(__name__)
CORS(app)

app.config["MONGO_URI"] = os.getenv("MONGO_URI")
mongo = PyMongo(app)
db = mongo.db

app.register_blueprint(trips_bp, url_prefix="/trips")  # ✅ Register route

@app.route("/")
def home():
    return "Trip Tracker Flask API is running!"

if __name__ == "__main__":
    app.run(debug=True)
