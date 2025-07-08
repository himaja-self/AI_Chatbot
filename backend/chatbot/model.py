import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

gemini_api_key = os.getenv("GEMINI_API_KEY")

# Set your API key (better to load this from .env in production)
genai.configure(api_key=gemini_api_key)

# Load the Gemini model
model = genai.GenerativeModel("gemini-2.5-flash")

def generate_response(user_input):
    try:
        response = model.generate_content(user_input)
        return response.text
    except Exception as e:
        return f"Error: {str(e)}"
