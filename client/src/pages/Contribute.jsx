import React, { useState } from 'react';

// Helper component for code blocks with a non-alert copy button
const CodeBlock = ({ children }) => {
    const [copyText, setCopyText] = useState('Copy');
    const textToCopy = Array.isArray(children) ? children.join('') : children;

    const handleCopy = () => {
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            setCopyText('Copied!');
            setTimeout(() => setCopyText('Copy'), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
        document.body.removeChild(textArea);
    };

    return (
        <div className="relative group mt-2">
            <pre className="bg-slate-800 text-white p-4 rounded-lg overflow-x-auto text-sm">
                <code>{children}</code>
            </pre>
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 bg-slate-600 hover:bg-slate-700 text-white text-xs font-semibold py-1 px-3 rounded-md transition-all duration-300"
            >
                {copyText}
            </button>
        </div>
    );
};

// Main Contribute Page Component
const Contribute = () => {
    const steps = [
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>,
            title: "Discuss Your Idea",
            description: "Before making a major change, please open an issue to discuss what you would like to change. You can also join our Discord community for discussions.",
        },
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>,
            title: "Fork & Clone",
            description: "Get a copy of the project on your local machine to get started.",
            code: `git clone https://github.com/YOUR_USERNAME/medibot.git\ncd medibot`,
        },
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>,
            title: "Create a Branch",
            description: "Work on a separate branch to keep your changes organized and isolated.",
            code: `git checkout -b feature/your-awesome-idea`,
        },
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 12L3 8m4 8l4-8m4 8V4m0 12l4-8m-4 8l-4-8"></path></svg>,
            title: "Commit & Push",
            description: "Write meaningful commit messages and push your changes to your fork.",
            code: `git commit -m "feat: Describe your new feature"\ngit push origin feature/your-awesome-idea`,
        },
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>,
            title: "Submit a Pull Request",
            description: "Open a pull request to the `main` branch. Provide a clear description of your changes and link any related issues.",
        },
    ];

    return (
        <div className="bg-slate-50 pt-20">
            {/* Page Header */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Become a Contributor
                    </h1>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Your help is essential for making Medibot better. We welcome all contributions, from code and documentation to new ideas.
                    </p>
                </div>
            </div>

            {/* Contribution Timeline Section */}
            <div className="max-w-4xl mx-auto py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
                    Our Contribution Process
                </h2>
                <div className="relative">
                    {/* The vertical line for the timeline */}
                    <div className="absolute left-9 sm:left-1/2 top-4 h-[calc(100%-2rem)] w-1 bg-slate-200 rounded -translate-x-1/2"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative mb-12">
                            <div className="flex items-center">
                                {/* Icon and Circle */}
                                <div className="z-10 bg-white p-4 rounded-full border-4 border-slate-200 absolute left-9 sm:left-1/2 -translate-x-1/2">
                                    <div className="text-red-500">{step.icon}</div>
                                </div>
                                {/* Card Content */}
                                <div className={`w-full ${index % 2 === 0 ? 'sm:pl-24' : 'sm:text-right sm:pr-24'} pl-24`}>
                                    <div className={`inline-block p-6 rounded-lg border border-slate-200 bg-white w-full sm:w-5/12`}>
                                        <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                                        <p className="mt-2 text-slate-600">{step.description}</p>
                                        {step.code && <CodeBlock>{step.code}</CodeBlock>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Additional Guidelines Section */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-slate-800">
                            Additional Guidelines
                        </h2>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                            <h3 className="text-xl font-semibold text-slate-900">Reporting Issues</h3>
                            <p className="mt-2 text-slate-600">Found a bug? Check existing issues first. If it's new, open an issue with a clear title and steps to reproduce the problem.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                            <h3 className="text-xl font-semibold text-slate-900">Community and Conduct</h3>
                            <p className="mt-2 text-slate-600">Be respectful and collaborative. All interactions must adhere to our <a href="#" className="text-red-600 hover:underline font-medium">Code of Conduct</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contribute;
