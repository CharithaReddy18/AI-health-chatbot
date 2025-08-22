import React from 'react';

const Message = ({ message, onFeedback }) => {
    const isBot = message.sender === 'bot';

    const handleFeedbackClick = (feedbackType) => {
        // Prevent giving feedback twice
        if (message.feedback) return;
        onFeedback(message.id, feedbackType);
    };

    return (
        <div className={`flex flex-col ${isBot ? 'items-start' : 'items-end'}`}>
            <div className={`flex items-end gap-3 ${isBot ? 'justify-start' : 'justify-end'}`}>
                {isBot && (
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                        M
                    </div>
                )}
                <div
                    className={`px-4 py-3 rounded-2xl max-w-md md:max-w-lg ${
                        isBot
                            ? 'bg-slate-100 text-slate-800 rounded-bl-none'
                            : 'bg-blue-600 text-white rounded-br-none'
                    }`}
                >
                    <p>{message.text}</p>
                </div>
            </div>
            {/* Feedback Buttons for Bot Messages */}
            {isBot && !message.feedback && (
                 <div className="flex items-center gap-2 mt-2 ml-12">
                    <button onClick={() => handleFeedbackClick('liked')} className="text-slate-400 hover:text-blue-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 18.437V10h2L12 4l2 6z"></path></svg>
                    </button>
                    <button onClick={() => handleFeedbackClick('disliked')} className="text-slate-400 hover:text-red-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.738 3h4.017c.163 0 .326.02.485.06L17 5.563V14h-2L12 20l-2-6z"></path></svg>
                    </button>
                </div>
            )}
             {isBot && message.feedback && (
                <div className="flex items-center gap-2 mt-2 ml-12">
                    <button className={message.feedback === 'liked' ? 'text-blue-600' : 'text-slate-300 cursor-not-allowed'}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333V17a1 1 0 001 1h6.768a2 2 0 001.945-1.556l1.29-5.162A2 2 0 0015.263 8h-3.018a1 1 0 01-.844-.445L10 3.667l-2.41 4.218a1 1 0 01-.844.445H3.5a1 1 0 00-1 1.447l2.5 4.889z"></path></svg>
                    </button>
                    <button className={message.feedback === 'disliked' ? 'text-red-600' : 'text-slate-300 cursor-not-allowed'}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667V3a1 1 0 00-1-1H6.232a2 2 0 00-1.945 1.556L3.002 8.58A2 2 0 004.736 12h3.018a1 1 0 01.844.445L10 16.333l2.41-4.218a1 1 0 01.844-.445H16.5a1 1 0 001-1.447l-2.5-4.889z"></path></svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Message;