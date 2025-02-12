import streamlit as st
import nltk
from transformers import pipeline
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize


# Load a pre-trained Hugging Face model
chatbot = pipeline("text-generation",model='distilgpt2')


# Define healthcare-specific response logic (or use a model to generate responses)
def healthcare_chatbot(user_input):
    # Simple rule-based keywords to respond
    if "symptom" in user_input:
        return "Please consult Doctor for accurate advice"
    elif "appointment " in user_input:
        return "Would you like to schedule an appointment with the doctor?"
    elif "medication" in user_input:
        return "It is important to take prescribed medicines regularly.If you have any concerns,consult your doctor."
    else:
        # For other inputs, use the Hugging Face model to generate a response
        response = chatbot(user_input,max_length = 300,num_return_sequences=1)
        # Specifies the maximum length of the generayed text response, including the input and the generated tokens.
        # If set to 3, the model generates three different possible responses based on the input.
        return response[0]['generated_text']
    

# Streamlit web app interface  
def main():
    st.title("Healthcare Assistant Chatbot")
    user_input = st.text_input("How can I assistant you today?")
    if st.button("Submit"):
        if user_input:
            st.write("User : ",user_input)
            with st.spinner("Processing your query .....,Please wait...."):
               response=healthcare_chatbot(user_input)
            st.write("Healthcare Assistant : ",response)
            print(response)
        else:
            st.write("Please enter a message to get a response.")

main()