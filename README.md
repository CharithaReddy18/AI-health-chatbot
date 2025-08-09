# 🤖 Medibot: Your AI-Powered Health Assistant 🩺

An **AI-Powered Health Assistant** that provides users with **health-related guidance**, **symptom analysis**, and **basic medical recommendations** using advanced **Natural Language Processing (NLP)**.

Built with **Streamlit** for the frontend and **Hugging Face Transformers** for intelligent responses, this chatbot aims to improve **accessibility to preliminary healthcare advice**, especially for individuals without immediate access to medical professionals.

> ⚠️ **Disclaimer:** This chatbot is **not a replacement** for professional medical advice. Always consult a qualified healthcare provider for serious or persistent health issues.

---

## 💡 Overview

In an increasingly connected world, access to immediate health guidance is crucial. **Medibot** bridges the gap between users and professional medical advice by providing a virtual health assistant that offers:

-   Understanding user queries about medical symptoms or health issues.
-   **Rule-based** recommendations for common medical questions.
-   **AI-powered, context-aware responses** for general health inquiries.
-   Assisting users with **appointment guidance**, **medication reminders**, and **basic symptom checks**.

---

## 🚀 Features

-   💬 **Interactive NLP Chatbot** – Understands and responds to user health queries in natural language.
-   🧪 **Symptom Analysis** – Describe your symptoms, and the chatbot will provide possible next steps based on your input.
-   📅 **Appointment Guidance** – Helps in planning visits to doctors or medical centers.
-   💊 **Medication Reminders** – Assists users in remembering their prescribed medications.
-   🔁 **Fallback AI Mode** – Uses Hugging Face's `distilgpt2` to handle a wide range of general health questions, ensuring you get a helpful response even when a specific rule isn't found.
-   🖥️ **Streamlit Web App** – Easy-to-use, browser-accessible interface.
-   📜 **Chat History Storage** – Saves conversations for later reference.
-   🗄 **Medical Database Integration** – Stores and retrieves relevant medical data from FAISS indexes for efficient information retrieval.

---

## 🧰 Tech Stack

-   **Programming Language:** Python 3
-   **Frontend:** [Streamlit](https://streamlit.io/) – For its simplicity and speed, allowing us to turn a Python script into a beautiful web app instantly.
-   **NLP Models:** [Hugging Face Transformers](https://huggingface.co/transformers/) (`distilgpt2`) – Leveraging pre-trained models gives us access to state-of-the-art NLP capabilities for intelligent, context-aware responses.
-   **Database:** FAISS (`index.faiss`, `index.pkl`) – For efficient similarity search and indexing of medical data.
-   **Utilities:** NLTK (optional in current version)
-   **Version Control:** Git & GitHub

---

## 📂 Project Structure

```plaintext
AI-health-chatbot/
│
├── __pycache__/              # Compiled Python cache files
├── Build/                    # Build-related files
├── Medical_DataBase/         # Medical database indexes
│   ├── index.faiss
│   └── index.pkl
│
├── .gitignore                # Git ignore file
├── app.py                    # Main Streamlit application
├── chat_history_202...       # Stored user chat history
├── CODE_OF_CONDUCT.md        # Contribution guidelines for behavior
├── CONTRIBUTING.md           # Steps for contributing to the project
├── LICENSE                   # MIT License
├── medical_agent.py          # AI agent logic for health queries
├── README.md                 # Project documentation
├── requirements.txt          # Python dependencies
└── ROADMAP.md                # Future development plans
```

## ⚡ Installation & Setup

**1️⃣ Clone the repository**

```bash
git clone https://github.com/yourusername/AI-health-chatbot.git 
cd AI-health-chatbot
```

**2️⃣Install dependencies**

```bash
pip install -r requirements.txt
```

**3️⃣ Run the Streamlit app**
```bash
streamlit run app.py
```

**4️⃣ Access in your browser**

The app will open in your default browser, typically at:

```plaintext
http://localhost:8501
```


## 🎯How to use
1. Open the app in your browser.

2. Enter your health-related question in the chat input.

3. The chatbot will provide rule-based suggestions for known queries or use AI-generated responses for more general or complex questions.

4. Use features like medication reminders or appointment guidance as needed.


## 🛠 Roadmap
- Integration with voice input & output for hands-free usage.

- More advanced medical knowledge base with updated disease data.

- Multilingual support for wider accessibility.

- Secure storage and encryption of chat histories.

## 📝 License

This project is licensed under the terms of the **MIT License.**

You are free to use, modify, and distribute this project with proper attribution.


## 🙏Acknowledgements

- **Streamlit** – For providing a simple yet powerful way to create web-based interfaces.

- **Hugging Face** – For their open-source NLP models and resources.

- **FAISS** – For efficient similarity search and indexing.

- **Python Community** – For the vast collection of libraries and open-source tools.

- All contributors and testers who helped improve the project.