import React from 'react';

// SVG Icons for Social Links
const GithubIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
    </svg>
);

const TwitterIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 border-t-4 border-red-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* Stay In Touch Section */}
                    <div className="lg:col-span-5">
                        <h3 className="text-lg font-semibold text-white tracking-wider uppercase">Stay In Touch</h3>
                        <p className="mt-4 text-slate-400">Get the latest updates on new features, health tips, and project developments delivered to your inbox.</p>
                        <form className="mt-4 flex flex-col sm:flex-row gap-2">
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                type="email"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                required
                                className="w-full px-4 py-2 text-slate-900 bg-white rounded-md border-gray-300 focus:ring-red-500 focus:border-red-500"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Links Sections */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Navigation</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="/symptom-checker" className="text-base text-slate-400 hover:text-red-500">Symptom Checker</a></li>
                                <li><a href="/features" className="text-base text-slate-400 hover:text-red-500">Features</a></li>
                                <li><a href="/tech-stack" className="text-base text-slate-400 hover:text-red-500">Tech Stack</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">About</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="/roadmap" className="text-base text-slate-400 hover:text-red-500">Roadmap</a></li>
                                <li><a href="/contribute" className="text-base text-slate-400 hover:text-red-500">Contribute</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#disclaimer" className="text-base text-slate-400 hover:text-red-500">Disclaimer</a></li>
                                <li><a href="/privacy" className="text-base text-slate-400 hover:text-red-500">Privacy Policy</a></li>
                                <li><a href="/terms" className="text-base text-slate-400 hover:text-red-500">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-4">
                        <a href="#" className="text-slate-400 hover:text-red-500"><span className="sr-only">GitHub</span><GithubIcon /></a>
                        <a href="#" className="text-slate-400 hover:text-red-500"><span className="sr-only">Twitter</span><TwitterIcon /></a>
                    </div>
                    <p className="mt-4 md:mt-0 text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} Medibot Project. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
