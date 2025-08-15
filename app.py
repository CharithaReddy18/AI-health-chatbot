import streamlit as st
from transformers import pipeline
import datetime
from medical_agent import chatbot

# Load a pre-trained Hugging Face model
##chatbot = pipeline("text-generation", model='distilgpt2')
# 🌙 Dark Mode Toggle Setup
if "dark_mode" not in st.session_state:
    st.session_state.dark_mode = False

# Sidebar toggle
st.sidebar.title("🛠 Settings")
st.session_state.dark_mode = st.sidebar.checkbox("🌙 Enable Dark Mode", value=st.session_state.dark_mode)

# Inject CSS based on toggle
if st.session_state.dark_mode:
    st.markdown("""
        <style>
            body, .main { background-color: #121212; color: #e0e0e0; }
            .stButton>button { background-color: #333; color: white; }
            .stTextInput>div>div>input { background-color: #1e1e1e; color: white; }
        </style>
    """, unsafe_allow_html=True)
else:
    st.markdown("""
        <style>
            body, .main { background-color: #ffffff; color: #000000; }
        </style>
    """, unsafe_allow_html=True)

# Health Information Library
health_info = {
    "Common Cold": "The common cold is a viral infection of your nose and throat (upper respiratory tract). It's usually harmless, although it might not feel that way. Many types of viruses can cause a common cold.",
    "Influenza (Flu)": "The flu is a contagious respiratory illness caused by influenza viruses that infect the nose, throat, and sometimes the lungs. It can cause mild to severe illness, and at times can lead to death.",
    "Diabetes": "Diabetes is a chronic (long-lasting) health condition that affects how your body turns food into energy. Most of the food you eat is broken down into sugar (also called glucose) and released into your bloodstream.",
    "Hypertension (High Blood Pressure)": "Hypertension is a condition in which the force of the blood against the artery walls is too high. Usually, hypertension is defined as blood pressure above 140/90, and is considered severe if the pressure is above 180/120.",
    "Allergies": "Allergies are a number of conditions caused by hypersensitivity of the immune system to something in the environment that usually causes little or no problem in most people. These diseases include hay fever, food allergies, atopic dermatitis, allergic asthma, and anaphylaxis.",
    "Asthma": "Asthma is a long-term disease of the lungs. It causes your airways to get inflamed and narrow and makes it hard to breathe. Severe asthma can cause trouble talking or being active."
}

# Symptom checker conversation flows
symptom_flows = {
    "headache": {
        "questions": [
            ("headache_severity", "I see you have a headache. On a scale of 1-10, how severe is it?"),
            ("headache_location", "Where is the headache located? (e.g., forehead, temples, back of the head)")
        ],
        "summary": "Thank you for the information. You've reported a headache with a severity of {headache_severity} located at the {headache_location}. Please remember, this is not a diagnosis. It is important to see a doctor."
    },
    "fever": {
        "questions": [
            ("fever_duration", "I understand you have a fever. How many days have you had it?"),
            ("fever_other_symptoms", "Are you experiencing any other symptoms, like a cough or sore throat?")
        ],
        "summary": "Thank you. You've reported a fever for {fever_duration} with the following other symptoms: {fever_other_symptoms}. Please consult a doctor for advice."
    },
    "cough": {
        "questions": [
            ("cough_type", "I see you have a cough. Is it a dry cough or a wet cough?"),
            ("cough_duration", "How long have you had this cough?")
        ],
        "summary": "Thank you. You've reported a {cough_type} cough for {cough_duration}. It is important to see a doctor for a proper diagnosis and treatment."
    }
}

# Refactored symptom checker logic
def symptom_checker(user_input):
    user_input = user_input.lower()
    flow = st.session_state.get('symptom_flow', None)
    question_index = st.session_state.get('question_index', 0)
    symptoms_data = st.session_state.get('symptoms_data', {})

    # If not in a flow, check for keywords to start one
    if flow is None:
        for keyword, data in symptom_flows.items():
            if keyword in user_input:
                st.session_state['symptom_flow'] = keyword
                st.session_state['question_index'] = 0
                st.session_state['symptoms_data'] = {}
                # Ask the first question
                question_key, question_text = data["questions"][0]
                st.session_state['current_question_key'] = question_key
                return question_text
        return None  # No keyword matched

    # If in a flow, process the answer
    current_flow_data = symptom_flows[flow]
    last_question_key = st.session_state.get('current_question_key')

    # Save the answer
    if last_question_key:
        symptoms_data[last_question_key] = user_input

    # Check if there are more questions
    if question_index < len(current_flow_data["questions"]):
        # Ask the next question
        question_key, question_text = current_flow_data["questions"][question_index]
        st.session_state['current_question_key'] = question_key
        st.session_state['question_index'] += 1
        st.session_state['symptoms_data'] = symptoms_data
        return question_text
    else:
        # End of flow, provide summary
        summary = current_flow_data["summary"].format(**symptoms_data)
        # Reset flow state
        st.session_state['symptom_flow'] = None
        st.session_state['question_index'] = 0
        st.session_state['symptoms_data'] = {}
        st.session_state['current_question_key'] = None
        return summary

# Define healthcare-specific response logic
def healthcare_chatbot(user_input):
    # First, try the symptom checker
    symptom_response = symptom_checker(user_input)
    if symptom_response:
        return symptom_response

    user_input = user_input.lower()  # Normalize input for keyword matching

    # Enhanced rule-based responses
    if "symptom" in user_input:
        return "I am not a doctor, but I can provide some general information. However, it is crucial to consult a doctor for an accurate diagnosis and treatment."
    elif "appointment" in user_input:
        return "I can help you schedule an appointment. Please provide your preferred date and time."
    elif "medication" in user_input:
        return "Please follow your doctor's prescription. Do not self-medicate. If you have questions, consult your pharmacist or doctor."
    elif "flu" in user_input:
        return "Flu symptoms often include fever, cough, sore throat, and body aches. Rest and fluids are important. Antiviral drugs may be prescribed by a doctor."
    else:
        # Use the model to generate a response for general input
        response = chatbot(user_input)
        return response

# Function to export chat history
def export_chat_history(chat_history):
    timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"chat_history_{timestamp}.txt"
    with open(filename, "w") as f:
        for role, message in chat_history:
            f.write(f"{role}: {message}\n")
    return filename

# Streamlit web app interface
def main():
    st.set_page_config(layout="wide")
    st.title("AI Health Assistant")
    st.warning("**Disclaimer:** This chatbot is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.")


    with st.sidebar:
        st.header("Health Information")
        selected_topic = st.selectbox("Choose a topic", list(health_info.keys()))
        if selected_topic:
            st.info(health_info[selected_topic])

        st.header("Chat Controls")
        if st.button("Clear Chat"):
            st.session_state.chat_history = []
            st.session_state.symptom_flow = None
            st.session_state.question_index = 0
            st.session_state.symptoms_data = {}
            st.session_state.current_question_key = None
        
        if st.button("Export Chat"):
            if 'chat_history' in st.session_state and st.session_state.chat_history:
                filename = export_chat_history(st.session_state.chat_history)
                st.success(f"Chat history exported to {filename}")
            else:
                st.warning("Chat history is empty.")


    chat_container = st.container()

    if 'chat_history' not in st.session_state:
        st.session_state.chat_history = []
    if 'symptom_flow' not in st.session_state:
        st.session_state.symptom_flow = None
    if 'question_index' not in st.session_state:
        st.session_state.question_index = 0
    if 'symptoms_data' not in st.session_state:
        st.session_state.symptoms_data = {}
    if 'current_question_key' not in st.session_state:
        st.session_state.current_question_key = None

    with chat_container:
        for role, message in st.session_state.chat_history:
            if role == "User":
                st.chat_message("user").write(message)
            else:
                st.chat_message("assistant").write(message)

    user_input = st.chat_input("How can I assist you today?")

    if user_input:
        st.session_state.chat_history.append(("User", user_input))
        with st.spinner("Processing your query..."):
            response = healthcare_chatbot(user_input)
            st.session_state.chat_history.append(("Assistant", response))
        st.rerun()

if __name__ == "__main__":
    main()

