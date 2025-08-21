import React, { useEffect } from 'react';

// Feature Card Component
const FeatureCard = ({ icon, title, children }) => {
    // This effect adds the mouse-following gradient effect to each card
    useEffect(() => {
        const cards = document.querySelectorAll('.feature-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    }, []);

    return (
        <div className="feature-card relative bg-slate-800/50 p-8 rounded-2xl overflow-hidden border border-slate-700 transition-all duration-300 hover:border-slate-500">
            {/* The gradient glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                 style={{
                     background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(239, 68, 68, 0.15), transparent 80%)`,
                 }}>
            </div>
            <div className="relative z-10">
                <div className="text-red-500 mb-4">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-slate-400">{children}</p>
            </div>
        </div>
    );
};


// Main Features Section Component
const Features = () => {
    const featureData = [
        {
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12h.01M12 12h.01M9 12h.01"></path></svg>,
            title: "Intuitive Symptom Checker",
            description: "Describe your symptoms in natural language. Our system understands and analyzes your input to provide immediate, relevant insights."
        },
        {
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>,
            title: "Doctor Specialist Recommendation",
            description: "Based on your symptoms, Medibot intelligently suggests the right type of medical specialist to consult, saving you time and confusion."
        },
        {
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>,
            title: "Secure & Private",
            description: "Your privacy is paramount. We ensure your health data is handled with the utmost security and confidentiality. Your trust is our priority."
        },
        {
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477zM12 12a3 3 0 100-6 3 3 0 000 6z"></path></svg>,
            title: "Powered by Advanced AI",
            description: "Leveraging a state-of-the-art RAG pipeline with the Groq LLM, Medibot delivers responses that are both fast and contextually accurate."
        }
    ];

    return (
        <section id="features" className="bg-slate-800 py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        An Assistant You Can Rely On
                    </h2>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                        Medibot is built with powerful features to provide you with clear,
                        understandable, and actionable health guidance.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 group">
                    {featureData.map((feature, index) => (
                        <FeatureCard key={index} icon={feature.icon} title={feature.title}>
                            {feature.description}
                        </FeatureCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
