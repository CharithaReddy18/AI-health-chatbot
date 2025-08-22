import React, { useState } from 'react';

// --- Organ Data ---
const organData = {
    brain: {
        name: "Brain",
        description: "The command center of the nervous system, responsible for thought, memory, emotion, and controlling the body.",
        conditions: ["Migraines", "Stroke", "Dementia", "Concussion"],
        color: "purple",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 8h6M9 12h6m-6 4h6M4 16V8a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4H8a4 4 0 01-4-4z" />,
    },
    lungs: {
        name: "Lungs",
        description: "A pair of essential respiratory organs responsible for exchanging oxygen and carbon dioxide with the blood.",
        conditions: ["Asthma", "Pneumonia", "Bronchitis", "COPD"],
        color: "cyan",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    },
    heart: {
        name: "Heart",
        description: "A muscular organ that pumps blood through the circulatory system by rhythmic contraction and dilation.",
        conditions: ["Heart Attack", "Arrhythmia", "Heart Failure", "High Blood Pressure"],
        color: "red",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />,
    },
    liver: {
        name: "Liver",
        description: "A large organ that plays a vital role in metabolism, detoxification, and protein synthesis.",
        conditions: ["Hepatitis", "Cirrhosis", "Fatty Liver Disease", "Jaundice"],
        color: "orange",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />,
    },
    stomach: {
        name: "Stomach",
        description: "An internal organ in which the major part of the digestion of food occurs.",
        conditions: ["Gastritis", "Ulcers", "Acid Reflux (GERD)", "Indigestion"],
        color: "green",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 12h4" />,
    },
    intestines: {
        name: "Intestines",
        description: "The lower part of the alimentary canal, responsible for the absorption of nutrients and water.",
        conditions: ["Irritable Bowel Syndrome (IBS)", "Crohn's Disease", "Celiac Disease"],
        color: "yellow",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l-2 5L4 4l5 5-2 5l5-5l5 5l-2-5z" />,
    },
    skeletalSystem: {
        name: "Skeletal System",
        description: "The framework of the body, consisting of bones and other connective tissues, which protects and supports the body tissues and internal organs.",
        conditions: ["Osteoporosis", "Arthritis", "Fractures", "Scoliosis"],
        color: "blue",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16M8 4v16m8-16v16" />,
    },
    muscularSystem: {
        name: "Muscular System",
        description: "Composed of specialized cells called muscle fibers. Their predominant function is contractibility.",
        conditions: ["Strains & Sprains", "Tendonitis", "Muscular Dystrophy", "Fibromyalgia"],
        color: "pink",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />,
    },
    nervousSystem: {
        name: "Nervous System",
        description: "A complex network of nerves and cells that carry messages to and from the brain and spinal cord to various parts of the body.",
        conditions: ["Epilepsy", "Multiple Sclerosis (MS)", "Parkinson's Disease", "Neuropathy"],
        color: "indigo",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />,
    },
};

// --- Organ Card Component ---
const OrganCard = ({ organKey, data, onCardClick }) => {
    const colors = {
        purple: { text: 'text-purple-400', border: 'hover:border-purple-500/50', shadow: 'hover:shadow-purple-500/20' },
        cyan: { text: 'text-cyan-400', border: 'hover:border-cyan-500/50', shadow: 'hover:shadow-cyan-500/20' },
        red: { text: 'text-red-400', border: 'hover:border-red-500/50', shadow: 'hover:shadow-red-500/20' },
        orange: { text: 'text-orange-400', border: 'hover:border-orange-500/50', shadow: 'hover:shadow-orange-500/20' },
        green: { text: 'text-green-400', border: 'hover:border-green-500/50', shadow: 'hover:shadow-green-500/20' },
        yellow: { text: 'text-yellow-400', border: 'hover:border-yellow-500/50', shadow: 'hover:shadow-yellow-500/20' },
        blue: { text: 'text-blue-400', border: 'hover:border-blue-500/50', shadow: 'hover:shadow-blue-500/20' },
        pink: { text: 'text-pink-400', border: 'hover:border-pink-500/50', shadow: 'hover:shadow-pink-500/20' },
        indigo: { text: 'text-indigo-400', border: 'hover:border-indigo-500/50', shadow: 'hover:shadow-indigo-500/20' },
    };

    return (
        <button
            onClick={() => onCardClick(organKey)}
            className={`group bg-slate-800/50 p-6 rounded-2xl border border-slate-700 backdrop-blur-xl text-left transition-all duration-300 ${colors[data.color].border} ${colors[data.color].shadow}`}
        >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-slate-800 transition-colors duration-300 group-hover:bg-slate-700 ${colors[data.color].text}`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">{data.icon}</svg>
            </div>
            <h3 className="mt-4 text-xl font-bold text-white">{data.name}</h3>
            <p className="mt-1 text-slate-400 text-sm">{data.description.split('.')[0]}.</p>
        </button>
    );
};

// --- Organ Detail Modal ---
const OrganModal = ({ organ, onClose }) => {
    if (!organ) return null;

    const colors = {
        purple: { text: 'text-purple-400', border: 'border-purple-500/50' },
        cyan: { text: 'text-cyan-400', border: 'border-cyan-500/50' },
        red: { text: 'text-red-400', border: 'border-red-500/50' },
        orange: { text: 'text-orange-400', border: 'border-orange-500/50' },
        green: { text: 'text-green-400', border: 'border-green-500/50' },
        yellow: { text: 'text-yellow-400', border: 'border-yellow-500/50' },
        blue: { text: 'text-blue-400', border: 'border-blue-500/50' },
        pink: { text: 'text-pink-400', border: 'border-pink-500/50' },
        indigo: { text: 'text-indigo-400', border: 'border-indigo-500/50' },
    };

    return (
        <div 
            onClick={onClose}
            className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 transition-opacity duration-300"
        >
            <div 
                onClick={(e) => e.stopPropagation()}
                className={`w-full max-w-lg bg-slate-800/80 backdrop-blur-2xl border ${colors[organ.color].border} rounded-2xl shadow-2xl p-8 transition-all duration-300 scale-95 animate-in fade-in-0 zoom-in-95`}
            >
                <div className="flex justify-between items-center">
                    <h2 className={`text-3xl font-bold ${colors[organ.color].text}`}>{organ.name}</h2>
                    <button onClick={onClose} className="text-slate-400 hover:text-white">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <p className="mt-4 text-slate-300">{organ.description}</p>
                <h3 className="mt-8 text-lg font-semibold text-white">Common Conditions</h3>
                <ul className="mt-2 space-y-2">
                    {organ.conditions.map((condition, index) => (
                        <li key={index} className="flex items-center text-slate-400">
                            <svg className={`w-4 h-4 mr-3 flex-shrink-0 ${colors[organ.color].text}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            {condition}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


// --- Main Human Body Explorer Page ---
const HumanBodyExplorer = () => {
    const [selectedOrganKey, setSelectedOrganKey] = useState(null);

    return (
        <div className="bg-slate-900 pt-20 min-h-screen">
            {/* Page Header */}
            <div className="border-b border-slate-800">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        Body Explorer
                    </h1>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                        Select a system or organ to learn more about its function and related health conditions.
                    </p>
                </div>
            </div>

            {/* Explorer Grid */}
            <div className="max-w-7xl mx-auto py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(organData).map(([key, data]) => (
                        <OrganCard key={key} organKey={key} data={data} onCardClick={setSelectedOrganKey} />
                    ))}
                </div>
            </div>
            
            <OrganModal organ={selectedOrganKey ? organData[selectedOrganKey] : null} onClose={() => setSelectedOrganKey(null)} />
        </div>
    );
};

export default HumanBodyExplorer;
