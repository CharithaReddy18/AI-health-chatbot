import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const heroRef = useRef(null);
  const faqRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, threshold: 0.3 });
  const faqInView = useInView(faqRef, { once: true, threshold: 0.1 });
  
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqData = [
    {
      category: "About MediBot",
      icon: "🤖",
      questions: [
        {
          q: "What is MediBot?",
          a: "MediBot is an AI-powered health assistant built using React, FastAPI, and Google Gemini AI. It provides educational health information through conversational interactions. It's currently an open-source project under active development as part of GirlScript Summer of Code (GSSoC) 2025."
        },
        {
          q: "Is MediBot a replacement for professional medical advice?",
          a: "No, absolutely not. MediBot is designed for educational and informational purposes only. It is NOT a replacement for professional medical advice, diagnosis, or treatment. Always consult qualified healthcare providers for medical concerns, especially for serious symptoms or emergencies."
        },
        {
          q: "Who created MediBot?",
          a: "MediBot is created and maintained by Nayini Charitha Reddy as the project admin, with mentorship from Anshi Agarwal through GSSoC 2025. The project has received contributions from 17+ developers worldwide, making it a true community-driven healthcare AI initiative."
        }
      ]
    },
    {
      category: "Features & Capabilities",
      icon: "✨",
      questions: [
        {
          q: "What can MediBot do?",
          a: "MediBot currently offers: AI-powered chat for health questions, symptom checker, doctor specialist recommendations, human body explorer, wellness hub with health calculators, and air quality forecasting. All features include appropriate medical disclaimers and safety warnings."
        },
        {
          q: "How accurate is MediBot's health information?",
          a: "MediBot uses Google Gemini AI with a curated medical knowledge base. However, as an AI system under development, it should NOT be relied upon for medical decisions. Always verify important health information with qualified healthcare professionals and consult your doctor for medical advice."
        },
        {
          q: "Does MediBot provide emergency medical assistance?",
          a: "No. MediBot is NOT designed for medical emergencies. If you're experiencing a medical emergency (chest pain, difficulty breathing, severe bleeding, etc.), call your local emergency services immediately (911 in the US, 108 in India) or go to the nearest emergency room."
        },
        {
          q: "Can MediBot diagnose medical conditions?",
          a: "No, MediBot cannot and does not diagnose medical conditions. It can provide general educational information about symptoms and health topics, but only licensed healthcare professionals can provide proper medical diagnoses through clinical examination and testing."
        }
      ]
    },
    {
      category: "Technology & Development",
      icon: "🛠️",
      questions: [
        {
          q: "What technology stack does MediBot use?",
          a: "MediBot is built with React 18 and Vite for the frontend, FastAPI and Python 3.11+ for the backend, Google Gemini AI for conversational intelligence, Qdrant for vector database, and Docker for containerization. The entire tech stack is open source and documented on GitHub."
        },
        {
          q: "Is MediBot's code open source?",
          a: "Yes! MediBot is completely open source under the MIT License. You can view, fork, and contribute to the code on GitHub at github.com/CharithaReddy18/AI-health-chatbot. We welcome contributions from developers of all skill levels."
        },
        {
          q: "How can I contribute to MediBot?",
          a: "You can contribute by fixing bugs, adding features, improving documentation, or enhancing UI/UX. Check out the Contributing page and GitHub issues for open tasks. The project is part of GSSoC 2025, making it perfect for both beginners and experienced developers."
        },
        {
          q: "What's the development roadmap for MediBot?",
          a: "Current focus includes enhancing the medical knowledge base, improving RAG pipeline accuracy, and adding conversation memory. Future plans include multilingual support, user authentication, voice interactions, and telemedicine features. Check our Roadmap page for detailed timelines."
        }
      ]
    },
    {
      category: "Privacy & Data",
      icon: "🔒",
      questions: [
        {
          q: "Does MediBot store my medical conversations?",
          a: "MediBot currently processes conversations in real-time through the API. The project is under active development, and data handling practices are being established. As we develop user accounts, we'll implement clear privacy policies and data retention guidelines that comply with healthcare privacy standards."
        },
        {
          q: "Is my health information secure?",
          a: "We take security seriously. Conversations are processed through secure API endpoints. However, as an open-source project under development, we recommend not sharing sensitive personal health information until we implement full user authentication and HIPAA-compliant data handling."
        },
        {
          q: "Do you share my data with third parties?",
          a: "MediBot uses Google Gemini AI for processing conversations, which means your queries are sent to Google's API for AI responses. We don't sell or share your data with other third parties. For detailed information, refer to our Privacy Policy (currently under development)."
        }
      ]
    },
    {
      category: "Usage & Support",
      icon: "💡",
      questions: [
        {
          q: "Do I need to create an account to use MediBot?",
          a: "Currently, no account is required to use MediBot's core features like the AI chat, symptom checker, and health calculators. User authentication and account features are planned for future releases to enable conversation history and personalized features."
        },
        {
          q: "Is MediBot free to use?",
          a: "Yes, MediBot is completely free and open source. There are no subscription fees, hidden charges, or premium tiers. The project is maintained by volunteers and open-source contributors as an educational healthcare technology initiative."
        },
        {
          q: "What browsers does MediBot support?",
          a: "MediBot works best on modern browsers including Chrome, Firefox, Safari, and Edge (latest versions). The application is built with React and responsive design, making it accessible on desktop, tablet, and mobile devices."
        },
        {
          q: "I found a bug or have a feature suggestion. How do I report it?",
          a: "We appreciate bug reports and feature suggestions! Please create an issue on our GitHub repository (github.com/CharithaReddy18/AI-health-chatbot/issues) with detailed information. For questions, use GitHub Discussions or reach out through our Contact page."
        },
        {
          q: "Does MediBot work offline?",
          a: "No, MediBot requires an internet connection to function as it relies on backend API calls to Google Gemini AI and the Qdrant vector database for generating responses. Offline functionality is not currently planned due to the AI processing requirements."
        }
      ]
    },
    {
      category: "Medical Safety",
      icon: "⚕️",
      questions: [
        {
          q: "When should I see a real doctor instead of using MediBot?",
          a: "Always see a doctor for: new or worsening symptoms, persistent pain, fever lasting more than 3 days, difficulty breathing, chest pain, severe bleeding, pregnancy concerns, medication management, or any condition requiring diagnosis or treatment. MediBot is for education only, not medical care."
        },
        {
          q: "Can I use MediBot for mental health support?",
          a: "While MediBot can provide general educational information about mental health topics, it is NOT a substitute for professional mental health care. If you're experiencing mental health issues, please contact a licensed therapist, counselor, or psychiatrist. For crisis support, contact local mental health hotlines."
        },
        {
          q: "Can children use MediBot?",
          a: "MediBot is designed for general audiences but parental supervision is strongly recommended for children. Parents should review all health information with children and consult pediatricians for any child health concerns. MediBot cannot provide pediatric-specific medical advice."
        }
      ]
    }
  ];

  const filteredFAQs = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      item =>
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden font-inter">
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl opacity-50 transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <motion.header
        ref={heroRef}
        initial={{ opacity: 0, y: 30 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 pt-20 sm:pt-32 pb-12 sm:pb-24 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 border border-teal-300 rounded-full mb-6 shadow-md"
          >
            <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-teal-800 tracking-wide">FAQ CENTER</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-slate-900"
          >
            Got Questions? We Have 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
              Answers.
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light px-4"
          >
            Find comprehensive answers about MediBot's features, development status, safety limitations, and how we leverage AI for healthcare education.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 max-w-xl mx-auto relative group"
          >
            <input
              type="text"
              placeholder="Search by keyword (e.g., 'diagnosis', 'open source', 'emergency')"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pr-12 rounded-full text-slate-800 placeholder-slate-400 bg-white border border-slate-200 focus:outline-none focus:ring-4 focus:ring-teal-200 focus:border-teal-400 shadow-xl shadow-slate-200/50 group-hover:shadow-teal-300/50 transition-all duration-300 text-base"
            />
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-teal-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </motion.div>
        </div>
      </motion.header>

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        {filteredFAQs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-3xl border border-slate-200 shadow-2xl"
          >
            <svg className="w-16 h-16 text-slate-400 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h.01M12 12h.01M12 20h.01M7 20a4 4 0 100-8 4 4 0 000 8zm10 0a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
            <p className="text-slate-600 text-xl font-medium">No results found for "{searchQuery}". Try a different keyword.</p>
          </motion.div>
        ) : (
          <motion.div
            ref={faqRef}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            className="space-y-16"
          >
            {filteredFAQs.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: categoryIndex * 0.15 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-4xl">{category.icon}</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 border-b-4 border-teal-400 pb-1">
                    {category.category}
                  </h2>
                </div>

                <div className="space-y-3">
                  {category.questions.map((item, qIndex) => {
                    const globalIndex = `${categoryIndex}-${qIndex}`;
                    const isActive = activeIndex === globalIndex;

                    return (
                      <motion.div
                        key={qIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={faqInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: (categoryIndex * 0.15) + (qIndex * 0.05) }}
                        className={`bg-white rounded-2xl border transition-all duration-300 ${isActive ? 'border-teal-400 shadow-2xl shadow-teal-100' : 'border-slate-200 shadow-md hover:shadow-lg'}`}
                      >
                        <button
                          onClick={() => toggleQuestion(globalIndex)}
                          className={`w-full px-6 py-5 text-left flex items-center justify-between transition-colors duration-200 ${isActive ? 'bg-teal-50 rounded-t-2xl' : 'hover:bg-slate-50 rounded-2xl'}`}
                        >
                          <span className={`font-semibold pr-8 text-base sm:text-lg leading-relaxed ${isActive ? 'text-teal-700' : 'text-slate-800'}`}>
                            {item.q}
                          </span>
                          <motion.svg
                            animate={{ rotate: isActive ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`w-6 h-6 flex-shrink-0 transition-colors ${isActive ? 'text-teal-600' : 'text-slate-400'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </motion.svg>
                        </button>

                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4 text-sm sm:text-base">
                                {item.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={faqInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-red-100/70 to-orange-100/70 border-2 border-red-300 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-red-200/50"
        >
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg">
                ⚠️
              </div>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-red-800 mb-2">Medical Emergency Disclaimer</h3>
              <p className="text-red-700 leading-relaxed text-base sm:text-lg">
                <strong>MediBot is NOT for emergencies.</strong> If you're experiencing a medical emergency, call your local emergency services immediately (911 in the US, 108 in India) or go to the nearest emergency room. Don't wait for AI responses when immediate medical care is needed.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={faqInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-16 text-center bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-2xl"
        >
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Still have questions?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Can't find the answer you're looking for? Reach out to our community or file an issue directly on GitHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/CharithaReddy18/AI-health-chatbot/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold rounded-xl hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-teal-400/50 hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
              Join Discussions
            </a>
            <a
              href="https://github.com/CharithaReddy18/AI-health-chatbot/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-teal-700 font-bold rounded-xl border-2 border-teal-300 hover:border-teal-400 hover:bg-teal-50 transition-all duration-300 shadow-md"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
              Create Issue
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden opacity-5">
        {[
          { icon: '❓', top: '15%', left: '5%', delay: 0, size: 'text-6xl' },
          { icon: '💡', top: '25%', right: '8%', delay: 2, size: 'text-8xl' },
          { icon: '🩺', bottom: '30%', left: '3%', delay: 4, size: 'text-5xl' },
          { icon: '⚕️', bottom: '20%', right: '5%', delay: 1, size: 'text-7xl' },
          { icon: '🔍', top: '60%', left: '7%', delay: 3, size: 'text-9xl' }
        ].map((item, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.2, 0.1],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut"
            }}
            className={`absolute ${item.size}`}
            style={{
              top: item.top,
              bottom: item.bottom,
              left: item.left,
              right: item.right
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
