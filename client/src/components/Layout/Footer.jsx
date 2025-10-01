import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Enhanced SVG Icons
const GithubIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
    </svg>
);

const TwitterIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
);

const LinkedInIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
    </svg>
);

const EmailIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const footerRef = useRef(null);
    const isInView = useInView(footerRef, { once: true, threshold: 0.1 });

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) return;
        
        setIsSubmitting(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsSubscribed(true);
        setIsSubmitting(false);
        setEmail('');
        
        // Reset after 3 seconds
        setTimeout(() => setIsSubscribed(false), 3000);
    };

    const footerSections = [
        {
            title: "Health Services",
            links: [
                { name: "Symptom Checker", href: "/symptom-checker" },
                { name: "Health Topics", href: "/hub" },
                { name: "Drug Information", href: "/hub/medication-guide" },
                { name: "Find Specialists", href: "/specialists" }
            ]
        },
        {
            title: "Resources",
            links: [
                { name: "Health Library", href: "/library" },
                { name: "Medical News", href: "/news" },
                { name: "Wellness Tips", href: "/wellness" },
                { name: "Emergency Guide", href: "/emergency" }
            ]
        },
        {
            title: "Platform",
            links: [
                { name: "How It Works", href: "/how-it-works" },
                { name: "AI Technology", href: "/technology" },
                { name: "FAQ", href: "/faq" },
                { name: "API Documentation", href: "/docs" }
            ]
        },
        {
            title: "Support",
            links: [
                { name: "Help Center", href: "/help" },
                { name: "Contact Us", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" }
            ]
        }
    ];

    return (
        <footer 
            ref={footerRef}
            className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-slate-300 overflow-hidden"
        >
            {/* Medical Cross Pattern Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314b8a6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }}></div>
            </div>

            {/* Top Border - Healthcare Theme */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    
                    {/* Brand and Newsletter Section */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            {/* Brand */}
                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">MediCore</h3>
                                        <p className="text-sm text-teal-400">Health Intelligence</p>
                                    </div>
                                </div>
                                
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    Empowering individuals with intelligent health insights through advanced AI technology. 
                                    Your trusted companion for informed healthcare decisions.
                                </p>
                            </div>

                            {/* Newsletter Signup */}
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                    <EmailIcon />
                                    Stay Informed
                                </h4>
                                <p className="text-slate-400 mb-4">
                                    Get health insights, platform updates, and wellness tips delivered to your inbox.
                                </p>

                                {!isSubscribed ? (
                                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                                        <div className="flex-1">
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter your email address"
                                                required
                                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center gap-2">
                                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                    Joining...
                                                </div>
                                            ) : (
                                                'Subscribe'
                                            )}
                                        </button>
                                    </form>
                                ) : (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="flex items-center gap-2 px-4 py-3 bg-green-600/20 border border-green-500/30 rounded-lg"
                                    >
                                        <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-green-400 font-medium">Successfully subscribed!</span>
                                    </motion.div>
                                )}

                                <p className="text-xs text-slate-500 mt-3">
                                    We respect your privacy. Unsubscribe at any time.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Links Sections */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {footerSections.map((section, sectionIndex) => (
                                <motion.div
                                    key={section.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.2 + sectionIndex * 0.1 }}
                                >
                                    <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                                        {section.title}
                                    </h4>
                                    <ul className="space-y-3">
                                        {section.links.map((link, linkIndex) => (
                                            <li key={linkIndex}>
                                                <a 
                                                    href={link.href} 
                                                    className="text-slate-400 hover:text-teal-400 transition-colors duration-300 text-sm leading-relaxed"
                                                >
                                                    {link.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12 lg:mt-16 pt-8 border-t border-slate-700"
                >
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        
                        {/* Social Links */}
                        <div className="flex items-center gap-6">
                            <p className="text-sm text-slate-400">Connect with us:</p>
                            <div className="flex space-x-4">
                                {[
                                    { Icon: GithubIcon, href: "#", label: "GitHub" },
                                    { Icon: TwitterIcon, href: "#", label: "Twitter" },
                                    { Icon: LinkedInIcon, href: "#", label: "LinkedIn" }
                                ].map(({ Icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        className="text-slate-400 hover:text-teal-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-700"
                                        aria-label={label}
                                    >
                                        <Icon />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Copyright and Compliance */}
                        <div className="flex flex-col lg:flex-row items-center gap-4 text-center lg:text-right">
                            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                                <span className="flex items-center gap-1">
                                    <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    HIPAA Compliant
                                </span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                    <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    Privacy Protected
                                </span>
                            </div>
                            
                            <p className="text-sm text-slate-500">
                                © {new Date().getFullYear()} MediCore Health Intelligence. All rights reserved.
                            </p>
                        </div>
                    </div>

                    {/* Legal Disclaimer */}
                    <div className="mt-6 pt-6 border-t border-slate-800">
                        <p className="text-xs text-slate-500 text-center leading-relaxed">
                            <strong>Medical Disclaimer:</strong> This platform provides general health information for educational purposes only. 
                            It is not intended to replace professional medical advice, diagnosis, or treatment. 
                            Always consult with qualified healthcare providers for medical concerns.
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
