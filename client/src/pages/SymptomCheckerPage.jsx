// client/src/pages/SymptomCheckerPage.js
import React, { useState, useEffect } from "react";
import ChatWindow from "../components/SymptomCheckerComponents/ChatWindow";
import ChatInput from "../components/SymptomCheckerComponents/ChatInput";
import { sendMessage } from "../api/ChatAPI"; // import API

const SymptomCheckerPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I am Medibot, your AI Health Assistant. How can I help you today? Please describe your symptoms.",
      sender: "bot",
      feedback: null,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (text) => {
    const newUserMessage = { id: Date.now(), text, sender: "user" };
    setMessages((prev) => [...prev, newUserMessage]);

    setIsLoading(true);

    try {
      const result = await sendMessage(text); // call backend
      const botResponse = {
        id: Date.now(),
        text: result.response, // backend returns {response: "..."}
        sender: "bot",
        feedback: null,
      };
      setMessages((prev) => [...prev, botResponse]);
    } catch (err) {
      console.error("Chat API error:", err);
      const errorResponse = {
        id: Date.now(),
        text: "⚠️ Sorry, I couldn't process your request. Please try again.",
        sender: "bot",
        feedback: null,
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFeedback = (messageId, feedbackType) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === messageId ? { ...msg, feedback: feedbackType } : msg
      )
    );
  };

  return (
    <div
      className="flex flex-col pt-14"
      style={{ height: "calc(100vh - 3rem)" }}
    >
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Symptom Checker
          </h1>
          <p className="mt-2 text-lg text-slate-600 max-w-2xl mx-auto">
            This is an AI-powered tool for informational purposes only. It is
            not a substitute for professional medical advice.
          </p>
        </div>
      </div>
      <div className="flex-grow flex flex-col max-w-4xl w-full mx-auto p-4 overflow-hidden">
        <ChatWindow
          messages={messages}
          isLoading={isLoading}
          onFeedback={handleFeedback}
        />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default SymptomCheckerPage;
