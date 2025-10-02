import React, { useState, useEffect } from "react";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // State to track which desktop dropdown is open (e.g., 'tools', 'safety', 'project')
    const [activeDropdown, setActiveDropdown] = useState(null);
    // State to track which mobile dropdown is open
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
    const [currentPath, setCurrentPath] = useState('/');

    // Update current path
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentPath(window.location.pathname);
        }
    }, []);

    // --- Icon Components (Expanded) ---

    const HomeIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="m3 12 2-2m0 0 7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11 2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6" /></svg>
    );

    const HealthIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.3M14.25 3.104c.251.023.501.05.75.082M19.8 14.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8-.2a3 3 0 1 1-5.6-2.4c0-1.98.97-3.735 2.46-4.8a22.58 22.58 0 0 1 1.94-1.3c.445-.295.94-.569 1.45-.813M5 14.5a3 3 0 1 0 5.6-2.4c0-1.98-.97-3.735-2.46-4.8a22.648 22.648 0 0 0-1.94-1.3c-.445-.295-.94-.569-1.45-.813" /></svg>
    );

    const StethoscopeIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 0 0-1.022-.547l-2.387-.477a6 6 0 0 0-3.86.517l-.318.158a6 6 0 0 1-3.86.517L6.05 15.21a2 2 0 0 0-1.806.547M8 4h8l-1 1v5.172a2 2 0 0 0 .586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 0 0 9 10.172V5L8 4z" /></svg>
    );

    const CalculatorIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25z" /></svg>
    );

    const UserGroupIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" /></svg>
    );

    const BodyIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
    );

    const CloudIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15z" /></svg>
    );

    const CodeIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 12" /></svg>
    );

    const MapIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" /></svg>
    );

    const HeartIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
    );

    const ShieldIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75V15m3-2.25V15m3-2.25V15M3 12c0-1.25.132-2.486.386-3.673A7.5 7.5 0 0 1 12 1.5c4.01 0 7.424 2.828 8.164 6.827A12 12 0 0 1 21 12c0 3.978-.857 7.728-2.38 10.235-.494.846-1.536.846-2.03 0C15.42 19.728 14.562 16 12 16c-2.56 0-3.418 3.728-4.59 5.867-.494.846-1.536.846-2.03 0C3.857 19.728 3 15.978 3 12z" /></svg>
    );

    const BookOpenIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25m0 0l-3 1.5M12 12.75l3 1.5m-3-1.5c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5 7.5 3.358 7.5 7.5-3.358 7.5-7.5 7.5z" /></svg>
    );

    const EnvelopeIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5V6.75M21.75 6.75h-19.5m19.5 0L12 12.75l-9.75-6M4.5 17.25H21" /></svg>
    );

    const UsersIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.125l-7.5-7.5 7.5-7.5" /></svg>
    );

    const QuestionMarkIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h9m-9 3.75h9m-13.5 3.75h9M12 12v3M9 12h.008v.008H9V12z" /></svg>
    );
    
    // NEW ICONS
    const GitBranchIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-6 6m0 0V9m0 12h12m-6-6h6m-12 0h-3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3m0 0v3m0 12v-3" /></svg>
    );

    const ScaleIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 14 2.5 10.5M15 14 21.5 10.5M12 4.5v15M10.5 20.25h3M21 14H3" /></svg>
    );

    const LockClosedIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V8.25a4.5 4.5 0 1 0-9 0v2.25m9 0H21a1.5 1.5 0 0 1 1.5 1.5v6.75a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-6.75a1.5 1.5 0 0 1 1.5-1.5h12.75z" /></svg>
    );

    const TargetIcon = () => (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z" /></svg>
    );
    // END NEW ICONS

    const ChevronDownIcon = ({ isOpen }) => (
        <svg
            className={`w-3 h-3 ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
    // --- End Icon Components ---


    // Professional NavLink component (Used for all individual links)
    const NavLink = ({ href, children, isCurrent, onClick, isSubLink = false, isExternal = false }) => (
        <a 
            href={href} 
            onClick={onClick}
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={`
                // Base structure for mobile (block/full-width) and desktop (inline-flex/auto-width)
                block w-full items-center justify-start
                px-3 py-2 rounded-lg text-sm font-medium 
                transition-all duration-300
                border border-transparent // Consistency fix
                
                ${isSubLink ? 'pl-8 lg:pl-3 lg:w-full' : 'lg:inline-flex lg:w-auto lg:justify-center'}
                
                ${isCurrent 
                    ? 'bg-green-100 text-green-800 border-green-400 font-semibold' 
                    : 'text-slate-600 hover:text-green-700 hover:bg-green-50 hover:shadow-sm'
                }
            `}
        >
            <span className="flex items-center">
                {children}
            </span>
        </a>
    );

    // Desktop Dropdown Component
    const DropdownMenu = ({ title, category, icon: Icon, links }) => {
        const isOpen = activeDropdown === category;

        return (
            <div
                className="relative h-full"
                // The onMouseLeave is now on the encompassing div, which is visually continuous 
                // between the button and the dropdown content (due to absolute positioning)
                onMouseEnter={() => setActiveDropdown(category)}
                onMouseLeave={() => setActiveDropdown(null)}
            >
                {/* Dropdown Button */}
                <button
                    className={`inline-flex items-center justify-center h-full px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-transparent 
                        ${activeDropdown === category 
                            ? 'bg-green-50 text-green-700 border-green-300' 
                            : 'text-slate-600 hover:text-green-700 hover:bg-green-50'
                        }`}
                >
                    <Icon />
                    {title}
                    <ChevronDownIcon isOpen={isOpen} />
                </button>

                {/* Dropdown Content - Adjusted positioning to ensure smooth transition area */}
                {isOpen && (
                    <div
                        // Key fix: mt-0.5 helps visually connect the space, but the primary fix is the single outer div handling hover.
                        className="absolute left-1/2 transform -translate-x-1/2 mt-0.5 w-60 bg-white border border-slate-200 rounded-xl shadow-2xl p-2 z-50 animate-fade-in"
                        style={{ animationDuration: '0.2s' }}
                    >
                        <div className="space-y-1">
                            {links.map(link => (
                                <NavLink
                                    key={link.href}
                                    href={link.href}
                                    isCurrent={currentPath === link.href}
                                    onClick={() => setActiveDropdown(null)}
                                    isSubLink={true}
                                    isExternal={link.isExternal}
                                >
                                    {link.icon} {link.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    };


    // Mobile Dropdown/Accordion Component
    const MobileAccordion = ({ title, category, icon: Icon, links }) => {
        const isOpen = activeMobileDropdown === category;

        const toggle = (e) => {
            e.preventDefault();
            setActiveMobileDropdown(isOpen ? null : category);
        };

        return (
            <div className="w-full">
                <button 
                    onClick={toggle}
                    className={`flex justify-between items-center w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 
                        ${isOpen ? 'bg-green-100 text-green-800 font-semibold' : 'text-slate-700 hover:bg-green-50'}`}
                >
                    <span className="flex items-center"><Icon /> {title}</span>
                    <ChevronDownIcon isOpen={isOpen} />
                </button>
                
                {/* Accordion Content */}
                <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}
                    style={{ 
                        // To ensure smooth height transition, max-h-96 is used. 
                        // We set a height large enough to contain all content.
                        transitionProperty: 'max-height, opacity, margin',
                    }}
                >
                    <div className="pl-4 py-1 space-y-1 border-l-2 border-green-200 ml-3">
                        {links.map(link => (
                            <NavLink
                                key={link.href}
                                href={link.href}
                                isCurrent={currentPath === link.href}
                                onClick={() => setIsMenuOpen(false)}
                                isSubLink={true}
                                isExternal={link.isExternal}
                            >
                                {link.icon} {link.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        );
    };


    // Unified Link Data Structure
    const linkGroups = {
        tools: {
            title: "Tools & Calculators",
            icon: CalculatorIcon,
            links: [
                { href: '/symptom-checker', label: 'Symptom Checker', icon: <StethoscopeIcon /> },
                { href: '/wellness-hub', label: 'Wellness Hub', icon: <CalculatorIcon /> },
                { href: '/human-body-explorer', label: 'Body Explorer', icon: <BodyIcon /> },
                { href: '/air-quality-forecaster', label: 'Air Quality', icon: <CloudIcon /> },
                { href: '/doctor-recommender', label: 'Find Doctors', icon: <UserGroupIcon /> },
            ]
        },
        safety: {
            title: "Safety & Guides",
            icon: ShieldIcon,
            links: [
                { href: '/emer-pro', label: 'Emergency Guide and Protocols', icon: <ShieldIcon /> },
                { href: '/first-aid', label: 'First Aid Basics', icon: <StethoscopeIcon /> },
                { href: '/faq', label: 'FAQ (Questions)', icon: <QuestionMarkIcon /> },
            ]
        },
        project: {
            title: "Project & Community",
            icon: BookOpenIcon,
            links: [
                // NEW: Teams & Mission
                { href: '/team', label: 'Teams', icon: <UsersIcon /> },
                { href: '/mission', label: 'Mission', icon: <TargetIcon /> },
                
                // Existing
                { href: '/about-us', label: 'About Us', icon: <UsersIcon /> },
                { href: '/contact-us', label: 'Contact Us', icon: <EnvelopeIcon /> },
                
                // NEW: Legal and External
                { href: '/privacy', label: 'Privacy Policy', icon: <LockClosedIcon /> },
                { href: '/terms', label: 'Terms of Service', icon: <ScaleIcon /> },
                { href: 'https://github.com/CharithaReddy18/AI-health-chatbot', label: 'GitHub Repository', icon: <GitBranchIcon />, isExternal: true },
                
                // Existing
                { href: '/documentation', label: 'Documentation', icon: <BookOpenIcon /> },
                { href: '/tech-stack', label: 'Tech Stack', icon: <CodeIcon /> },
                { href: '/roadmap', label: 'Roadmap', icon: <MapIcon /> },
                { href: '/contribute', label: 'Contribute', icon: <HeartIcon /> },
            ]
        }
    };


    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm relative">
            <style>
                {`
                    /* Keyframe for smooth fade-in */
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(-10px) translateX(-50%); }
                        to { opacity: 1; transform: translateY(0) translateX(-50%); }
                    }
                    .animate-fade-in {
                        animation: fadeIn 0.2s ease-out forwards;
                    }
                `}
            </style>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Bar */}
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section - Green Theme */}
                    <a href="/" className="flex items-center space-x-3 text-slate-900 hover:text-slate-700 transition-colors">
                        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center shadow-sm">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-slate-900">MediBot</span>
                            <span className="text-xs text-slate-500 -mt-1 hidden sm:block">AI Health Assistant</span>
                        </div>
                    </a>


                    {/* Desktop Navigation (w/ Dropdowns) */}
                    <nav className="hidden lg:flex items-center space-x-2 h-full">
                        <NavLink href="/" isCurrent={currentPath === '/'} isSubLink={false}>
                            <HomeIcon /> Home
                        </NavLink>
                        <NavLink href="/hub" isCurrent={currentPath === '/hub'} isSubLink={false}>
                            <HealthIcon /> Health Hub
                        </NavLink>
                        
                        {/* Dropdown 1: Tools & Calculators */}
                        <DropdownMenu
                            title={linkGroups.tools.title}
                            category="tools"
                            icon={linkGroups.tools.icon}
                            links={linkGroups.tools.links}
                        />

                        {/* Dropdown 2: Safety & Guides */}
                        <DropdownMenu
                            title={linkGroups.safety.title}
                            category="safety"
                            icon={linkGroups.safety.icon}
                            links={linkGroups.safety.links}
                        />

                        {/* Dropdown 3: Project & Community */}
                        <DropdownMenu
                            title={linkGroups.project.title}
                            category="project"
                            icon={linkGroups.project.icon}
                            links={linkGroups.project.links}
                        />
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
                        absolute top-16 left-0 right-0 z-40
                        bg-white shadow-xl 
                        max-h-[80vh] overflow-y-auto 
                        border-t border-slate-200
                    "
                >
                    <div className="py-4 space-y-1 px-4">
                        {/* Direct Links */}
                        <NavLink href="/" isCurrent={currentPath === '/'} onClick={() => setIsMenuOpen(false)}>
                            <HomeIcon /> Home
                        </NavLink>
                        <NavLink href="/hub" isCurrent={currentPath === '/hub'} onClick={() => setIsMenuOpen(false)}>
                            <HealthIcon /> Health Hub
                        </NavLink>

                        {/* Mobile Accordions/Dropdowns */}
                        <MobileAccordion
                            title={linkGroups.safety.title}
                            category="safety"
                            icon={linkGroups.safety.icon}
                            links={linkGroups.safety.links}
                        />
                        <MobileAccordion
                            title={linkGroups.tools.title}
                            category="tools"
                            icon={linkGroups.tools.icon}
                            links={linkGroups.tools.links}
                        />
                         <MobileAccordion
                            title={linkGroups.project.title}
                            category="project"
                            icon={linkGroups.project.icon}
                            links={linkGroups.project.links}
                        />

                    </div>
                </div>
            )}
        </header>
    );
};


export default Navbar;
