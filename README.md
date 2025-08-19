# 🤖 Medibot: AI Health Assistant 🩺

An **AI-Powered Health Assistant** that provides users with **health-related guidance**, **symptom analysis**, and **basic medical recommendations**.

It uses **rule-based logic** and a **RAG** (Retrieval-Augmented Generation) pipeline powered by a Groq LLM. When rule-based response fails, RAG fetches data from trusted medical databases to provide relevant answers for unhandled queries.

> ⚠️ **Disclaimer:** This chatbot is **not a replacement** for professional medical advice. Always consult a qualified healthcare provider for serious or persistent health issues.

---

## 💡 Overview

**Medibot** bridges the gap between users and healthcare professionals by offering:

* Understanding of user health queries
* Symptom analysis with possible next steps
* Rule-based responses for common health questions
* AI-powered fallback responses using Groq
* Efficient medical data retrieval via FAISS-based database
* Doctor specialist recommendations based on symptoms/diseases
* A user-friendly Streamlit web interface

---

## 🚀 Features

1. **Symptom Checker** - Check symptoms and answer health-related queries
2. **Rule Based Response** - Provides predefined answers for common health queries
3. **RAG Fallback** - Retrieves relevant details from the medical database when no rules match
4. **Doctor Specialist Recommendation** - Suggests specialists based on disease/symptom mapping

---

## 🧰 Tech Stack

* **Streamlit** – Interactive web app framework for the chatbot UI
* **Python** – Core programming language for backend logic
* **LangChain** – Orchestration framework for building the RAG pipeline
* **Groq API** – High-performance LLM used for natural language responses
* **FAISS** – Vector database for fast similarity search in retrieved documents
* **Hugging Face Transformers** – Embedding model for converting medical texts into vector representations

---

## 📂 Project Structure

```plaintext
AI-health-chatbot/
│   .gitignore
│   app.py                     # Main Streamlit application
│   chat_history_2025...txt    # Stored user chat history
│   CODE_OF_CONDUCT.md         # Contribution guidelines for behavior
│   CONTRIBUTING.md            # Steps for contributing to the project
│   LICENSE                    # MIT License
│   medical_agent.py           # AI agent logic for health queries
│   README.md                  # Project documentation
│   requirements.txt           # Python dependencies
│   ROADMAP.md                 # Future development plans
│   ✨ Add Web-Based Interface with Streamlit
│
├───Build
│       temp                   # Build-related files
│
├───DoctorSpecialistRecommend
│       Disease_Description.csv
│       doctor_spec.py         # Doctor recommendation logic
│       Doctor_Specialist.csv
│       Doctor_Versus_Disease.csv
│       Original_Dataset.csv
│
├───Medical_DataBase
│       index.faiss            # FAISS index for vector search
│       index.pkl              # Pickled embeddings
```

---

## ⚡ Installation & Setup

**1️⃣ Clone the repository**

```bash
git clone https://github.com/yourusername/AI-health-chatbot.git
cd AI-health-chatbot
```

**2️⃣ Install dependencies**

```bash
pip install -r requirements.txt
```

**3️⃣ Set Environment Variables**

```env
GROQ_API_KEY=your_groq_api_key
HUGGINGFACE_API_KEY=your_api_key
```

**4️⃣ Run the Streamlit app**

```bash
streamlit run app.py
```

---

## 🚀 Future Advancements

* **Multi-language Support** – Enable chatbot to respond in multiple languages for broader accessibility.
* **Voice Input & Output** – Add speech-to-text and text-to-speech for hands-free interaction.
* **Conversational Memory** – Enable LLM to remember previous interactions and maintain context.
* **Mobile App Integration** – Bring Medibot to Android/iOS platforms.

---

## 🤝 Contributing

We welcome contributions! Please check out the following documents:

* [Contributing Guidelines](./CONTRIBUTING.md)
* [Code of Conduct](./CODE_OF_CONDUCT.md)

---

## 📜 License

This project is licensed under the terms of the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

## 📌 Roadmap

See the [ROADMAP.md](./ROADMAP.md) for upcoming features and plans.

---
