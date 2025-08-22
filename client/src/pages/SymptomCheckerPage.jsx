import React, { useState, useEffect, useRef } from 'react';
import ChatWindow from '../components/SymptomCheckerComponents/ChatWindow';
// import ChatWindow from '../components/SymptomCheckerComponents/ChatWindow';
import ChatInput from '../components/SymptomCheckerComponents/ChatInput';

const SymptomCheckerPage = () => {
    const [messages, setMessages] = useState([
        { 
            id: 1, 
            text: "Hello! I am Medibot, your AI Health Assistant. How can I help you today? Please describe your symptoms.", 
            sender: 'bot',
            feedback: null // 'liked', 'disliked', or null
        }
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSendMessage = (text) => {
        const newUserMessage = { id: Date.now(), text, sender: 'user' };
        setMessages(prevMessages => [...prevMessages, newUserMessage]);
    };

    const handleFeedback = (messageId, feedbackType) => {
        setMessages(prevMessages =>
            prevMessages.map(msg =>
                msg.id === messageId ? { ...msg, feedback: feedbackType } : msg
            )
        );
    };

    useEffect(() => {
        const lastMessage = messages[messages.length - 1];
        if (lastMessage && lastMessage.sender === 'user') {
            setIsLoading(true);
            setTimeout(() => {
                const botResponse = { 
                    id: Date.now(), 
                    text: "Thank you for sharing. Based on what you've told me, I'd like to ask a few more questions to understand your situation better. Can you tell me when these symptoms started?", 
                    sender: 'bot',
                    feedback: null
                };
                setMessages(prevMessages => [...prevMessages, botResponse]);
                setIsLoading(false);
            }, 1500);
        }
    }, [messages]);

    return (
        <div className="flex flex-col pt-14" style={{ height: 'calc(100vh - 3rem)' }}>
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                        Symptom Checker
                    </h1>
                    <p className="mt-2 text-lg text-slate-600 max-w-2xl mx-auto">
                        This is an AI-powered tool for informational purposes only. It is not a substitute for professional medical advice.
                    </p>
                </div>
            </div>
            <div className="flex-grow flex flex-col max-w-4xl w-full mx-auto p-4 overflow-hidden">
                <ChatWindow messages={messages} isLoading={isLoading} onFeedback={handleFeedback} />
                <ChatInput onSendMessage={handleSendMessage} />
            </div>
        </div>
    );
};

export default SymptomCheckerPage;