from huggingface_hub import InferenceClient
from dotenv import load_dotenv
import os

load_dotenv()
token = os.getenv("HF_TOKEN")


client = InferenceClient(
    provider = "novita",
    api_key= token,
)

def run_model(user_input):
    completion = client.chat.completions.create(
        model = "mistralai/Mistral-7B-Instruct-v0.3",
        messages = [
            {
                "role": "system",
                "content": "your a smart and helpful ai assitant"
            },
            {
                "role":"user",
                "content": user_input
            }
        ]
    )
    return completion.choices[0].message['content']

