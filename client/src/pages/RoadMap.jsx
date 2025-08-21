import React from 'react';

// Icon for roadmap items
const TargetIcon = ({ colorClass }) => (
    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${colorClass} bg-opacity-10`}>
        <svg className={`w-5 h-5 ${colorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
        </svg>
    </div>
);

// Main Roadmap Page Component
const Roadmap = () => {
    const roadmapData = [
        {
            phase: "Phase 1",
            title: "Core Functionality",
            color: "blue",
            items: [
                "Refactor symptom checker for scalability.",
                "Expand symptom flows with more conditions.",
                "Implement robust NLP for keyword extraction.",
                "Improve rule-based responses.",
            ]
        },
        {
            phase: "Phase 2",
            title: "Advanced Features",
            color: "green",
            items: [
                "Integrate with a medical knowledge base API.",
                "Implement secure user profiles for chat history.",
                "Add a feature for medication reminders.",
            ]
        },
        {
            phase: "Phase 3",
            title: "Model & Deployment",
            color: "purple",
            items: [
                "Fine-tune a specialized medical LLM.",
                "Deploy application to a cloud platform.",
                "Implement a user feedback mechanism.",
            ]
        }
    ];

    const phaseColors = {
        blue: { text: 'text-blue-500', border: 'border-blue-500', shadow: 'shadow-blue-500/20' },
        green: { text: 'text-green-500', border: 'border-green-500', shadow: 'shadow-green-500/20' },
        purple: { text: 'text-purple-500', border: 'border-purple-500', shadow: 'shadow-purple-500/20' },
    };

    return (
        <div className="bg-slate-100 pt-20 min-h-screen">
            {/* Page Header */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Our Development Roadmap
                    </h1>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        A clear view of our priorities as we build a more intelligent health assistant.
                    </p>
                </div>
            </div>

            {/* Roadmap Columns */}
            <div className="max-w-7xl mx-auto py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {roadmapData.map((phase, index) => (
                        <div 
                            key={index} 
                            className={`bg-white/60 backdrop-blur-xl p-6 rounded-2xl border ${phaseColors[phase.color].border} border-opacity-30 shadow-lg ${phaseColors[phase.color].shadow}`}
                        >
                            <h2 className={`text-sm font-bold uppercase tracking-widest ${phaseColors[phase.color].text}`}>{phase.phase}</h2>
                            <h3 className="text-2xl font-bold text-slate-800 mt-1">{phase.title}</h3>
                            <div className="mt-6 space-y-4">
                                {phase.items.map((item, itemIndex) => (
                                    <div 
                                        key={itemIndex} 
                                        className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <TargetIcon colorClass={phaseColors[phase.color].text} />
                                        <p className="ml-4 text-slate-700 font-medium">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
