import google.generativeai as genai
import os

# Set your API key (better to load this from .env in production)
genai.configure(api_key="AIzaSyDD0PvL3a5UpE58vz-LEwh_VWzS_A3aS4g")

# Load the Gemini model
model = genai.GenerativeModel("gemini-2.5-flash")

def generate_response(user_input):
    try:
        response = model.generate_content(user_input)
        return response.text
    except Exception as e:
        return f"Error: {str(e)}"
