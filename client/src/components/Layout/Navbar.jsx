import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState('/');

    // Update current path (Using window.location is fine for a single file component)
    useEffect(() => {
        // Fallback for environments where window/pathname might not be immediately available
        if (typeof window !== 'undefined') {
            setCurrentPath(window.location.pathname);
        }
    }, []);

    // --- Icon Components (unchanged) ---
    const HomeIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m3 12 2-2m0 0 7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11 2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6" />
        </svg>
    );

    const HealthIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.3M14.25 3.104c.251.023.501.05.75.082M19.8 14.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8-.2a3 3 0 1 1-5.6-2.4c0-1.98.97-3.735 2.46-4.8a22.58 22.58 0 0 1 1.94-1.3c.445-.295.94-.569 1.45-.813M5 14.5a3 3 0 1 0 5.6-2.4c0-1.98-.97-3.735-2.46-4.8a22.648 22.648 0 0 0-1.94-1.3c-.445-.295-.94-.569-1.45-.813" />
        </svg>
    );

    const StethoscopeIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 0 0-1.022-.547l-2.387-.477a6 6 0 0 0-3.86.517l-.318.158a6 6 0 0 1-3.86.517L6.05 15.21a2 2 0 0 0-1.806.547M8 4h8l-1 1v5.172a2 2 0 0 0 .586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 0 0 9 10.172V5L8 4z" />
        </svg>
    );

    const CalculatorIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25z" />
        </svg>
    );

    const UserGroupIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" />
        </svg>
    );

    const BodyIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
    );

    const CloudIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15z" />
        </svg>
    );

    const CodeIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 12" />
        </svg>
    );

    const MapIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
        </svg>
    );

    const HeartIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
    );
    // --- End Icon Components ---

    // Professional NavLink component (Revised for Green Theme and Consistency)
    const NavLink = ({ href, children, isCurrent, onClick }) => (
        <a 
            href={href} 
            onClick={onClick}
            className={`
                // Base structure for mobile (block/full-width) and desktop (inline-flex/auto-width)
                block lg:inline-flex w-full lg:w-auto items-center justify-start lg:justify-center
                px-3 py-2 rounded-lg text-sm font-medium 
                
                // Smooth transition for all properties (color, background, shadow)
                transition-all duration-300
                
                // Consistency fix: Always set a transparent border to reserve space and prevent vertical layout shift when active
                border border-transparent

                ${isCurrent 
                    // Active State: Green Theme
                    ? 'bg-green-50 text-green-700 border-green-300' 
                    // Inactive State: Green Theme, smooth hover, gentle shadow
                    : 'text-slate-600 hover:text-green-700 hover:bg-green-50 hover:shadow-sm'
                }
            `}
        >
            <span className="flex items-center">
                {children}
            </span>
        </a>
    );

    return (
        // The header must be relative for the absolute mobile menu positioning to work inside it
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Bar - Fixed Height */}
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section - Green Theme */}
                    <a href="/" className="flex items-center space-x-3 text-slate-900 hover:text-slate-700 transition-colors">
                        {/* Medical Plus Icon - Green Theme */}
                        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center shadow-sm">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        
                        {/* Brand Text */}
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-slate-900">MediBot</span>
                            <span className="text-xs text-slate-500 -mt-1 hidden sm:block">AI Health Assistant</span>
                        </div>
                    </a>

                    {/* Desktop Navigation (Used lg:space-x-2 for better spacing) */}
                    <nav className="hidden lg:flex items-center space-x-2">
                        <NavLink href="/" isCurrent={currentPath === '/'}>
                            <HomeIcon /> Home
                        </NavLink>
                        <NavLink href="/hub" isCurrent={currentPath === '/hub'}>
                            <HealthIcon /> Health Hub
                        </NavLink>
                        <NavLink href="/symptom-checker" isCurrent={currentPath === '/symptom-checker'}>
                            <StethoscopeIcon /> Symptom Checker
                        </NavLink>
                        <NavLink href="/wellness-hub" isCurrent={currentPath === '/wellness-hub'}>
                            <CalculatorIcon /> Wellness Hub
                        </NavLink>
                        <NavLink href="/doctor-recommender" isCurrent={currentPath === '/doctor-recommender'}>
                            <UserGroupIcon /> Find Doctors
                        </NavLink>
                        <NavLink href="/human-body-explorer" isCurrent={currentPath === '/human-body-explorer'}>
                            <BodyIcon /> Body Explorer
                        </NavLink>
                        <NavLink href="/air-quality-forecaster" isCurrent={currentPath === '/air-quality-forecaster'}>
                            <CloudIcon /> Air Quality
                        </NavLink>
                        <NavLink href="/tech-stack" isCurrent={currentPath === '/tech-stack'}>
                            <CodeIcon /> Tech Stack
                        </NavLink>
                        <NavLink href="/roadmap" isCurrent={currentPath === '/roadmap'}>
                            <MapIcon /> Roadmap
                        </NavLink>
                        <NavLink href="/contribute" isCurrent={currentPath === '/contribute'}>
                            <HeartIcon /> Contribute
                        </NavLink>
                    </nav>

                    {/* Mobile Menu Button - Green Theme */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-green-600 hover:bg-green-50 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu - ABSOLUTE POSITIONED to fix shifting issue */}
            {isMenuOpen && (
                <div 
                    className="
                        lg:hidden 
                        absolute top-16 left-0 right-0 z-40 // Positioned below the main bar (h-16)
                        bg-white shadow-xl 
                        max-h-[80vh] overflow-y-auto // Allows scrolling if links exceed screen height
                        border-t border-slate-200
                    "
                >
                    <div className="py-4 space-y-1 px-4">
                        {/* NavLinks now take full width and show green hover cleanly */}
                        <NavLink 
                            href="/" 
                            isCurrent={currentPath === '/'} 
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <HomeIcon /> Home
                        </NavLink>
                        <NavLink 
                            href="/hub" 
                            isCurrent={currentPath === '/hub'} 
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <HealthIcon /> Health Hub
                        </NavLink>
                        <NavLink 
                            href="/symptom-checker" 
                            isCurrent={currentPath === '/symptom-checker'} 
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <StethoscopeIcon /> Symptom Checker
                        </NavLink>
                        <NavLink 
                            href="/wellness-hub" 
                            isCurrent={currentPath === '/wellness-hub'} 
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <CalculatorIcon /> Wellness Hub
                        </NavLink>
                        <NavLink 
                            href="/doctor-recommender" 
                            isCurrent={currentPath === '/doctor-recommender'} 
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <UserGroupIcon /> Find Doctors
                        </NavLink>
                        <NavLink 
                            href="/human-body-explorer" 
                            isCurrent={currentPath === '/human-body-explorer'} 
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <BodyIcon /> Body Explorer
                        </NavLink>
                        <NavLink 
                            href="/air-quality-forecaster" 
                            isCurrent={currentPath === '/air-quality-forecaster'} 
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <CloudIcon /> Air Quality
                        </NavLink>
                        <NavLink 
                            href="/tech-stack" 
                            isCurrent={currentPath === '/tech-stack'} 
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <CodeIcon /> Tech Stack
                        </NavLink>
                        <NavLink 
                            href="/roadmap" 
                            isCurrent={currentPath === '/roadmap'} 
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <MapIcon /> Roadmap
                        </NavLink>
                        <NavLink 
                            href="/contribute" 
                            isCurrent={currentPath === '/contribute'} 
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <HeartIcon /> Contribute
                        </NavLink>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
