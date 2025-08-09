# 🤖 Medibot: AI Health Assistant 🩺

An **AI-Powered Health Assistant** that provides users with **health-related guidance**, **symptom analysis**, and **basic medical recommendations**.

It uses **rule-based logic** and a **RAG** (Retrieval-Augmented Generation) pipeline powered by a Groq LLM. When rule based response fails , RAG fetches data from trusted medical databases to provide relevant answers for unhandled queries.

> ⚠️ **Disclaimer:** This chatbot is **not a replacement** for professional medical advice. Always consult a qualified healthcare provider for serious or persistent health issues.

---

## 💡 Overview

**Medibot** bridges the gap between users and healthcare professionals by offering:

- Understanding of user health queries 
- Symptom analysis with possible next steps
- Rule-based responses for common health questions
- AI-powered fallback responses using Groq 
- Efficient medical data retrieval via FAISS-based database
- A user-friendly Streamlit web interface
---

## 🚀 Features

1. **Symptom Checker** - Check symptoms and answer health-related queries

2. **Rule Based Response** - If keywords like "flu", "fever", or "appointment" are detected, it provides predefined answers.

3. **RAG Fallback** - If no rule matches the chatbot retrieves relevant details from medical database to answer user query.

---

## 🧰 Tech Stack

- **Streamlit** – Interactive web app framework for the chatbot UI

- **Python** – Core programming language for backend logic

- **LangChain** – Orchestration framework for building the RAG pipeline

- **Groq API** – High-performance LLM used for natural language responses

- **FAISS** – Vector database for fast similarity search in retrieved documents

- **Hugging Face Transformers** – Embedding model for converting medical texts into vector representations
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

**3️⃣Set Environment Variables**
```env
GROQ_API_KEY=your_groq_api_key

HUGGINGFACE_API_KEY=your_api_key

```

**4️⃣ Run the Streamlit app**
```bash
streamlit run app.py
```


## 🚀 Future Advancements
- Multi-language Support – Enable chatbot to respond in multiple languages for broader accessibility.

- Voice Input & Output – Add speech-to-text and text-to-speech for hands-free interaction.

- Conversational Memory - to  enable LLM remember previous interactions and maintain context over time.


## 🤝 Contributing
We welcome contributions! Please refer to CONTRIBUTING.md and CODE_OF_CONDUCT.md for guidelines on how to get involved.


## 📝 License

This project is licensed under the terms of the **MIT License.**

