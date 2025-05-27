from flask import Flask
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/triptracker"
mongo = PyMongo(app)

# Trips collection example schema stored as JSON docs in MongoDB
