from flask import Flask, request, jsonify
from flask_cors import CORS
from chatbot.hf_model import run_model  # AI logic using Gemini

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return 'Flask API is running!'


@app.route('/api/message', methods=['POST'])
def message():
    data = request.json
    user_message = data.get('message', '')
    bot_response = run_model(user_message)
    return jsonify({'response': bot_response})

if __name__ == '__main__':
    app.run(debug=True)
