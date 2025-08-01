import streamlit as st

def healthcare_chatbot(user_input):
    user_input = user_input.lower()
    if "fever" in user_input or "temperature" in user_input:
        return (
            "I'm sorry you're feeling unwell. For fever, please rest, drink plenty of fluids, and monitor your temperature regularly. "
            "If your fever is high or lasts more than 3 days, please consult a doctor."
        )
    elif "cough" in user_input or "cold" in user_input:
        return (
            "Coughs and colds are common. Try to stay hydrated, rest, and use warm fluids like soup or tea. "
            "If your cough is severe, persistent, or accompanied by difficulty breathing, please see a doctor."
        )
    elif "headache" in user_input:
        return (
            "Headaches can have many causes. Try to rest in a quiet, dark room and drink water. "
            "If your headache is severe, sudden, or happens frequently, please consult a healthcare professional."
        )
    elif "pain" in user_input:
        return (
            "I'm sorry to hear you're in pain. Can you tell me where it hurts and how severe it is? "
            "For severe or persistent pain, please consult a doctor."
        )
    elif "vomit" in user_input or "nausea" in user_input:
        return (
            "If you're experiencing nausea or vomiting, try sipping water slowly and eat light foods. "
            "If you can't keep fluids down or feel very weak, please seek medical advice."
        )
    elif "diarrhea" in user_input:
        return (
            "For diarrhea, stay hydrated with water or oral rehydration solutions. Avoid spicy or oily foods. "
            "If it lasts more than 2 days or you notice blood, consult a doctor."
        )
    elif "stomach" in user_input or "abdomen" in user_input or "stomach ache" in user_input:
        return (
            "Stomach pain can have many causes. Rest and avoid heavy meals. "
            "If the pain is severe, persistent, or comes with vomiting or fever, please consult a doctor."
        )
    elif "chest pain" in user_input:
        return (
            "Chest pain can be serious. If you have severe chest pain, difficulty breathing, or pain spreading to your arm or jaw, "
            "please seek emergency medical help immediately."
        )
    elif "breathless" in user_input or "shortness of breath" in user_input:
        return (
            "Shortness of breath can be serious. If it is sudden, severe, or with chest pain, seek emergency care. "
            "Otherwise, rest and monitor your symptoms."
        )
    elif "rash" in user_input or "skin" in user_input:
        return (
            "For skin rashes, avoid scratching and keep the area clean. "
            "If the rash spreads, is painful, or comes with fever, please consult a doctor."
        )
    elif "dizzy" in user_input or "dizziness" in user_input or "faint" in user_input:
        return (
            "If you feel dizzy or faint, sit or lie down immediately and drink water. "
            "If this happens often or you lose consciousness, please consult a doctor."
        )
    elif "burn" in user_input:
        return (
            "For minor burns, cool the area under running water for 10-20 minutes. Do not apply ice. "
            "For severe burns, blisters, or burns on the face/hands/genitals, seek medical help."
        )
    elif "injury" in user_input or "wound" in user_input or "cut" in user_input:
        return (
            "For minor injuries, clean the wound with water and apply a sterile bandage. "
            "For deep, bleeding, or infected wounds, please consult a doctor."
        )
    elif "back pain" in user_input:
        return (
            "For back pain, rest and avoid heavy lifting. Gentle stretching may help. "
            "If pain is severe, radiates to your legs, or comes with numbness, consult a doctor."
        )
    elif "eye" in user_input or "vision" in user_input:
        return (
            "For eye discomfort, avoid rubbing and rinse with clean water. "
            "If you have vision loss, severe pain, or injury, seek medical attention."
        )
    elif "ear" in user_input:
        return (
            "For ear pain or discomfort, avoid inserting objects. "
            "If pain is severe, with fever, or hearing loss, consult a doctor."
        )
    elif "throat" in user_input or "sore throat" in user_input:
        return (
            "For sore throat, drink warm fluids and rest your voice. "
            "If you have difficulty swallowing, breathing, or a high fever, consult a doctor."
        )
    elif "symptom" in user_input or "unwell" in user_input or "sick" in user_input:
        return (
            "I'm sorry to hear that. Please describe your symptoms in detail so I can assist you better."
        )
    elif "appointment" in user_input:
        return (
            "Would you like to schedule an appointment with the doctor? I can help you with that."
        )
    elif "medication" in user_input or "medicine" in user_input:
        return (
            "Take only prescribed medicines. If you have doubts about your medication or experience side effects, consult your doctor."
        )
    elif "covid" in user_input or "corona" in user_input:
        return (
            "If you suspect COVID-19, isolate yourself, wear a mask, and get tested. "
            "Monitor your symptoms and consult a doctor if you have difficulty breathing."
        )
    elif "depression" in user_input or "anxiety" in user_input or "mental" in user_input:
        return (
            "Mental health is important. If you're feeling low, anxious, or overwhelmed, consider talking to a mental health professional or someone you trust."
        )
    elif "thank" in user_input:
        return (
            "You're welcome! If you have any more questions or concerns, feel free to ask. Take care and get well soon."
        )
    elif "hello" in user_input or "hi" in user_input:
        return (
            "Hello! I'm your healthcare assistant. How can I help you today?"
        )
    else:
        return (
            "I'm here to help with your health queries. Please provide more details about your issue or symptoms."
        )

def main():
    st.set_page_config(page_title="Healthcare Assistant Chatbot", page_icon="💬")
    st.markdown(
        """
        <style>
        body {
            background-color: #f3f6fa;
        }
        .main {
            background-color: #f3f6fa;
        }
        .chat-container {
            max-height: 400px;
            overflow-y: auto;
            padding: 20px 15px 20px 15px;
            background-color: #fff;
            border-radius: 18px;
            margin-bottom: 30px;
            border: 1px solid #e0e0e0;
            box-shadow: 0 4px 24px 0 rgba(60,72,88,.08);
        }
        .user-bubble {
            background: linear-gradient(90deg, #e7f0fd 60%, #d2e3fc 100%);
            color: #1a73e8;
            padding: 12px 18px;
            border-radius: 22px 22px 4px 22px;
            margin: 10px 0 10px 80px;
            text-align: right;
            font-weight: 500;
            font-size: 1.05rem;
            box-shadow: 0 2px 8px 0 rgba(60,72,88,.06);
        }
        .bot-bubble {
            background: linear-gradient(90deg, #eafbe7 60%, #d2f8d2 100%);
            color: #34a853;
            padding: 12px 18px;
            border-radius: 22px 22px 22px 4px;
            margin: 10px 80px 10px 0;
            text-align: left;
            font-weight: 500;
            font-size: 1.05rem;
            box-shadow: 0 2px 8px 0 rgba(60,72,88,.06);
        }
        .stTextInput>div>div>input {
            font-size: 1.1rem;
            border-radius: 10px;
            padding: 10px;
        }
        .stButton>button {
            background-color: #1a73e8;
            color: white;
            border-radius: 8px;
            padding: 8px 28px;
            font-size: 1.1rem;
            border: none;
            margin-top: 10px;
        }
        .stButton>button:hover {
            background-color: #155ab6;
            color: #fff;
        }
        </style>
        """,
        unsafe_allow_html=True,
    )

    st.markdown(
        "<h1 style='text-align: center; color: #22223b; margin-bottom: 30px;'>Healthcare Assistant Chatbot</h1>",
        unsafe_allow_html=True,
    )

    if "messages" not in st.session_state:
        st.session_state.messages = []

    st.markdown("<div class='chat-container'>", unsafe_allow_html=True)
    for sender, msg in st.session_state.messages:
        if sender == "User":
            st.markdown(f"<div class='user-bubble'><b>{sender}:</b> {msg}</div>", unsafe_allow_html=True)
        else:
            st.markdown(f"<div class='bot-bubble'><b>{sender}:</b> {msg}</div>", unsafe_allow_html=True)
    st.markdown("</div>", unsafe_allow_html=True)

    user_input = st.text_input("How can I assist you today?", key="input")
    col1, col2, col3 = st.columns([2, 1, 2])
    with col2:
        if st.button("Submit"):
            if user_input:
                st.session_state.messages.append(("User", user_input))
                with st.spinner("Processing your query..."):
                    response = healthcare_chatbot(user_input)
                st.session_state.messages.append(("Healthcare Assistant", response))
            else:
                st.warning("Please enter a message to get a response.")

    st.markdown(
        "<div style='text-align:center; color: #888; margin-top: 40px; font-size: 0.95rem;'>"
        "⚠️ This chatbot provides general information and is not a substitute for professional medical advice. "
        "Always consult your doctor for serious symptoms."
        "</div>",
        unsafe_allow_html=True,
    )

if __name__ == "__main__":
    main()