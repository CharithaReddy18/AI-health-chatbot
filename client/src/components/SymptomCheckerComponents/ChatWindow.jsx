import React, { useEffect, useRef } from 'react';
import Message from './Message';
import TypingIndicator from '../UI/TypingIndicator';

const ChatWindow = ({ messages, isLoading, onFeedback }) => {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // useEffect(scrollToBottom, [messages, isLoading]);

    return (
        <div className="flex-grow bg-white border border-slate-200 rounded-t-lg p-6 overflow-y-auto">
            <div className="space-y-6">
                {messages.map(msg => (
                    <Message key={msg.id} message={msg} onFeedback={onFeedback} />
                ))}
                {isLoading && <TypingIndicator />}
                <div ref={messagesEndRef} />
            </div>
        </div>
    );
};
export default ChatWindow;
