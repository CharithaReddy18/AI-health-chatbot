import React from 'react';

// SVG Icon for the disclaimer section for better visual cue
const WarningIcon = () => (
    <svg 
        className="w-16 h-16 text-amber-500 mx-auto mb-4" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        ></path>
    </svg>
);


const Disclaimer = () => {
    return (
        <section id="disclaimer" className="bg-slate-100 py-16 sm:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* Warning Icon */}
                <WarningIcon />

                {/* Section Header */}
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                    Important Disclaimer
                </h2>

                {/* Disclaimer Text */}
                <p className="text-lg text-slate-700 max-w-2xl mx-auto mb-6">
                    Medibot is an AI-powered informational tool and is not a substitute for professional medical advice, diagnosis, or treatment. The guidance provided is for educational purposes only.
                </p>
                <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                    Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this platform.
                </p>

                {/* Call to action in case of emergency */}
                <div className="mt-8 bg-red-100 border-l-4 border-red-500 text-red-800 p-4 rounded-md text-left max-w-2xl mx-auto">
                    <p className="font-bold">
                        If you are experiencing a medical emergency, please call your local emergency services immediately or visit the nearest emergency room.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Disclaimer;
