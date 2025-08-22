import React from 'react';

const TypingIndicator = () => (
    <div className="flex items-end gap-3 justify-start">
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0">
            M
        </div>
        <div className="px-4 py-3 rounded-2xl bg-slate-100 rounded-bl-none">
            <div className="flex items-center justify-center space-x-1">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
            </div>
        </div>
    </div>
);

export default TypingIndicator;