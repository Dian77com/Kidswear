from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={r"/api/*": {"origins": "http://localhost:8081"}})

@app.route("/api/hello", methods=["GET"])
def hello():
    return jsonify(message="message from backend")

if __name__ == "__main__":
    app.run(port=5000, debug=True)