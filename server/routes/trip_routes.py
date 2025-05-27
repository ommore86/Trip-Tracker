from flask import Blueprint, request, jsonify
from db import db  # this imports your MongoDB client

trips_bp = Blueprint('trips', __name__)

@trips_bp.route("/add", methods=["POST"])
def add_trip():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data sent"}), 400

    trip = {
        "destination": data.get("destination"),
        "startDate": data.get("startDate"),
        "endDate": data.get("endDate"),
        "travelType": data.get("travelType"),
        "costs": data.get("costs", {}),
        "notes": data.get("notes", "")
    }

    db.trips.insert_one(trip)
    return jsonify({"message": "Trip added successfully"}), 201

@trips_bp.route("/all", methods=["GET"])
def get_trips():
    trips = list(db.trips.find())
    for trip in trips:
        trip["_id"] = str(trip["_id"])  # Convert ObjectId to string
    return jsonify(trips)
def home():
    return jsonify({"message": "Trip Tracker API is running"})