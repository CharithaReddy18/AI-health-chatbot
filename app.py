!pip install streamlit
import streamlit as st
import nltk
from transformers import pipeline
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

# Load a pre-trained Hugging Face model
chatbot = pipeline("text-generation", model='distilgpt2')

# Define healthcare-specific response logic (or use a model to generate responses)
def healthcare_chatbot(user_input):
    user_input = user_input.lower()  # Normalize input for keyword matching
    if "symptom" in user_input:
        return "Please consult a doctor for accurate advice."
    elif "appointment" in user_input:
        return "Would you like to schedule an appointment with the doctor?"
    elif "medication" in user_input:
        return "It is important to take prescribed medicines regularly. If you have any concerns, consult your doctor."
    else:
        # Use the model to generate a response for general input
        response = chatbot(user_input, max_length=100, num_return_sequences=1)
        return response[0]['generated_text']

# Streamlit web app interface  
def main():
    st.title("Healthcare Assistant Chatbot")
    user_input = st.text_input("How can I assist you today?")
    
    if st.button("Submit"):
        if user_input.strip():
            st.write("**User:**", user_input)
            with st.spinner("Processing your query... Please wait."):
                response = healthcare_chatbot(user_input)
            st.write("**Healthcare Assistant:**", response)
        else:
            st.warning("Please enter a message to get a response.")

if __name__ == "__main__":
    main()
