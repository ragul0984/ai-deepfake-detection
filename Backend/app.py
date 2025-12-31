from flask import Flask, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)  # allows React to talk to backend

@app.route("/predict", methods=["POST"])
def predict():
    # Prototype logic (fake AI for now)
    confidence = round(random.uniform(0.6, 0.95), 2)
    result = "Fake" if confidence > 0.75 else "Real"

    return jsonify({
        "result": result,
        "confidence": confidence
    })

if __name__ == "__main__":
    app.run(debug=True)
