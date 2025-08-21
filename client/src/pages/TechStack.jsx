import React from 'react';

// Custom SVG Logos for a consistent look
const PythonLogo = () => <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto text-blue-600"><path fill="currentColor" d="M12.51 19.14c.73-.3 1.16-.76 1.35-1.39a2.3 2.3 0 0 0-.43-2.14c-.58-.58-1.4-.84-2.34-.78l-3.03.2c-.36.02-.62.33-.58.68.04.35.35.6.68.58l3.03-.2c.6-.04 1.1.13 1.46.49.37.36.5.8.43 1.25a1.23 1.23 0 0 1-.72.91c-.4.2-.84.2-1.22.03l-2.43-1.1c-.34-.16-.73.05-.88.39-.15.34.05.73.39.88l2.43 1.1c.52.24 1.1.26 1.68.1zM11.49 4.86c-.73.3-1.16.76-1.35 1.39a2.3 2.3 0 0 0 .43 2.14c.58.58 1.4.84 2.34.78l3.03-.2c.36-.02.62-.33.58-.68a.63.63 0 0 0-.68-.58l-3.03.2c-.6.04-1.1-.13-1.46-.49-.37-.36-.5-.8-.43-1.25a1.23 1.23 0 0 1 .72-.91c.4-.2.84-.2 1.22-.03l2.43 1.1c.34.16.73-.05.88-.39.15-.34-.05-.73-.39-.88l-2.43-1.1c-.52-.24-1.1-.26-1.68-.1zM19.14 11.49c.3-.73.76-1.16 1.39-1.35a2.3 2.3 0 0 0 2.14-.43c.58-.58.84-1.4.78-2.34l-.2-3.03c-.02-.36-.33-.62-.68-.58a.63.63 0 0 0-.58.68l.2 3.03c.04.6-.13 1.1-.49 1.46-.36.37-.8.5-1.25.43a1.23 1.23 0 0 1-.91-.72c-.2-.4-.2-.84.03-1.22l1.1-2.43c.16-.34-.05-.73-.39-.88-.34-.15-.73.05-.88.39l-1.1 2.43c-.24.52-.26 1.1-.1 1.68zM4.86 12.51c-.3.73-.76 1.16-1.39 1.35a2.3 2.3 0 0 0-2.14.43c-.58.58-.84 1.4-.78 2.34l.2 3.03c.02.36.33.62.68.58.35-.04.6-.35.58-.68l-.2-3.03c-.04-.6.13-1.1.49-1.46.36-.37.8-.5 1.25-.43a1.23 1.23 0 0 1 .91.72c.2.4.2.84-.03 1.22l-1.1 2.43c-.16.34.05.73.39.88.34.15.73-.05.88-.39l1.1-2.43c.24-.52.26-1.1.1-1.68z" /></svg>;
const LangChainLogo = () => <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto text-blue-600"><path fill="currentColor" d="M16.83 14.92a.5.5 0 0 0-.43-.25l-2.81-.57a.5.5 0 0 0-.48.13l-1.33 1.33a.5.5 0 0 1-.71 0l-3.26-3.26a.5.5 0 0 1 0-.71l1.33-1.33a.5.5 0 0 0 .13-.48L8.7 7.1a.5.5 0 0 0-.25-.43L6.08 5.17a.5.5 0 0 0-.6.1L4.14 6.6a.5.5 0 0 0-.1.45c.16 2.53 1.48 5.8 4.7 9.02s6.49 4.54 9.02 4.7c.18.03.35-.04.45-.14l1.33-1.33a.5.5 0 0 0 .1-.6l-1.5-2.37zM8.2 3h7.6c.22 0 .4.18.4.4v1.2c0 .22-.18.4-.4.4H8.2c-.22 0-.4-.18-.4-.4V3.4c0-.22.18-.4.4-.4z" /></svg>;
const GroqLogo = () => <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto text-blue-600"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1.29 14.71a1 1 0 0 1-1.42-1.42l4.3-4.29a1 1 0 1 1 1.41 1.41l-4.29 4.3zm5.3-1.42a1 1 0 0 1-1.42 1.42l-4.29-4.3a1 1 0 0 1 1.41-1.41l4.3 4.29z" /></svg>;
const FaissLogo = () => <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto text-blue-600"><path fill="currentColor" d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>;
const HuggingFaceLogo = () => <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto text-blue-600"><path fill="currentColor" d="M12 2.32c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zm4.03 7.53c-.34-.34-.78-.53-1.26-.53H9.23c-.48 0-.92.19-1.26.53-.34.34-.53.78-.53 1.26v3.72c0 .97.79 1.76 1.76 1.76h.04c.4 0 .78-.13 1.08-.36l1.2-1.2v2.1c0 .41.34.75.75.75s.75-.34.75-.75v-2.1l1.2 1.2c.3.23.68.36 1.08.36h.04c.97 0 1.76-.79 1.76-1.76v-3.72c0-.48-.19-.92-.53-1.26z" /></svg>;
const StreamlitLogo = () => <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto text-blue-600"><path fill="currentColor" d="M12 2L1 9l11 7 11-7L12 2zm0 11.31L3.93 9 12 4.69 20.07 9 12 13.31zM3.5 10.74L12 16.26l8.5-5.52v3.02L12 19.28l-8.5-5.52v-3.02z" /></svg>;

const TechCard = ({ logo, name, description }) => (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300">
        {logo}
        <h3 className="text-center text-xl font-bold text-slate-800 mt-4">{name}</h3>
        <p className="text-center text-slate-600 mt-2 text-sm">{description}</p>
    </div>
);

const TechStack = () => {
    const technologies = [
        { logo: <PythonLogo />, name: "Python", description: "The core programming language for all backend logic, data processing, and AI orchestration." },
        { logo: <StreamlitLogo />, name: "Streamlit", description: "Powers the interactive and user-friendly web interface for the chatbot." },
        { logo: <LangChainLogo />, name: "LangChain", description: "The framework used to build and orchestrate the entire Retrieval-Augmented Generation (RAG) pipeline." },
        { logo: <GroqLogo />, name: "Groq", description: "The high-performance LLM used for generating fast and context-aware natural language responses." },
        { logo: <FaissLogo />, name: "FAISS", description: "A vector database from Meta AI, used for efficient similarity searches in our medical knowledge base." },
        { logo: <HuggingFaceLogo />, name: "Hugging Face", description: "Provides the sentence-transformer models for converting medical texts into vector embeddings." },
    ];

    return (
        <div className="relative bg-slate-50 overflow-hidden pt-20">
             <div 
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d1d5db' fill-opacity='0.6' fill-rule='evenodd'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.59l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
            ></div>
            <div className="relative">
                {/* Page Header */}
                <div className="bg-white border-b border-slate-200">
                    <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                            Technology Stack
                        </h1>
                        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                            Medibot is built on a foundation of powerful, open-source technologies to deliver a reliable and intelligent experience.
                        </p>
                    </div>
                </div>

                {/* Technology Grid */}
                <div className="max-w-7xl mx-auto py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {technologies.map((tech, index) => (
                            <TechCard key={index} logo={tech.logo} name={tech.name} description={tech.description} />
                        ))}
                    </div>
                </div>

                {/* Architecture Diagram Section */}
                <div className="bg-white border-t border-slate-200">
                    <div className="max-w-5xl mx-auto py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
                            How It Works: The RAG Pipeline
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-4 text-center">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center">
                                <div className="p-4 bg-blue-100 text-blue-700 rounded-full text-lg font-bold w-24 h-24 flex items-center justify-center border-4 border-white shadow-md">User Query</div>
                                <p className="text-sm text-slate-600 mt-2">"I have a headache..."</p>
                            </div>
                            <div className="text-2xl text-slate-400 md:rotate-0 rotate-90">→</div>
                            {/* Step 2 */}
                            <div className="flex flex-col items-center">
                                <div className="p-4 bg-blue-100 text-blue-700 rounded-full text-lg font-bold w-24 h-24 flex items-center justify-center border-4 border-white shadow-md">FAISS Search</div>
                                <p className="text-sm text-slate-600 mt-2">Finds relevant medical documents</p>
                            </div>
                            <div className="text-2xl text-slate-400 md:rotate-0 rotate-90">→</div>
                            {/* Step 3 */}
                            <div className="flex flex-col items-center">
                                <div className="p-4 bg-blue-100 text-blue-700 rounded-full text-lg font-bold w-24 h-24 flex items-center justify-center border-4 border-white shadow-md">Groq LLM</div>
                                <p className="text-sm text-slate-600 mt-2">Generates response using context</p>
                            </div>
                             <div className="text-2xl text-slate-400 md:rotate-0 rotate-90">→</div>
                            {/* Step 4 */}
                            <div className="flex flex-col items-center">
                                <div className="p-4 bg-green-100 text-green-800 rounded-full text-lg font-bold w-24 h-24 flex items-center justify-center border-4 border-white shadow-md">Final Answer</div>
                                <p className="text-sm text-slate-600 mt-2">Provides helpful guidance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechStack;
