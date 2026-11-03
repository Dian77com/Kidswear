from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={r"/api/*": {"origins": "http://localhost:8081"}})

@app.route("/api/hello", methods=["GET"])
def hello():    
    return jsonify(message="message from backend")
def produktet():
    return jsonify(produktet=[
         {
            "id": 1,
            "emri": "Set për bebe",
            "kategoria": "Bebe",
            "cmimi": 24.90
        },
        {
            "id": 2,
            "emri": "Fustan me lule",
            "kategoria": "Vajza",
            "cmimi": 28.90
        },
        {
            "id": 3,
            "emri": "Duks për djem",
            "kategoria": "Djem",
            "cmimi": 22.90
        }
    ])

if __name__ == "__main__":
    app.run(port=5000, debug=True)