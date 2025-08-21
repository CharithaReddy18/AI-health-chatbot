import React, { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // SVG Icon components for clarity and reuse
    const StethoscopeIcon = () => (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0021.5 5.5V3.935m-13.483 0a1.5 1.5 0 01-1.06.44m1.06-.44l-.25 1.007a1.5 1.5 0 01-2.927 0l-.25-1.007m3.427 0a1.5 1.5 0 00-1.06-.44m1.06.44a1.5 1.5 0 011.06.44m0 0l.25 1.007a1.5 1.5 0 012.927 0l.25-1.007M10.5 8h4.5a2 2 0 110 4h-4.5a2 2 0 110-4z"></path></svg>
    );

    const UserGroupIcon = () => (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
    );

    const CodeBracketIcon = () => (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 12"></path></svg>
    );

    const MapIcon = () => (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
    );
    
    const HeartIcon = () => (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    );

    const HomeIcon = () => (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
    );

    const NavLink = ({ href, children, isCurrent }) => (
        <a href={href} className={`relative group flex items-center ${isCurrent ? 'text-red-600' : 'text-slate-900'} hover:text-red-600 font-medium text-sm md:text-base`}>
            {children}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
    );

    return (
        <header className="flex shadow-[0px_0px_16px_rgba(17,_17,_26,_0.1)] py-4 px-4 sm:px-6 bg-white min-h-[70px] tracking-wide fixed w-full z-50">
            <div className="flex flex-wrap items-center justify-between gap-4 w-full max-w-screen-xl mx-auto">
                {/* Logo updated for Medibot */}
                <a href="/" className="group inline-block text-slate-800 hover:text-slate-900 transition-colors duration-300">
                    <div className="flex items-center space-x-3">
                        {/* New Logo SVG Icon */}
                        <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM17 13h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                            <path d="M15.24 7.24l-2.47 2.47-1.41-1.41-1.06 1.06 2.47 2.47-2.47 2.47 1.06 1.06 2.47-2.47 2.47 2.47 1.06-1.06-2.47-2.47 2.47-2.47-1.06-1.06-2.47 2.47z" opacity="0.5"/>
                        </svg>

                        <div>
                            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                                Medibot
                            </div>
                            <div className="text-xs sm:text-sm font-medium text-slate-500 tracking-widest uppercase -mt-1">
                                AI Health Assistant
                            </div>
                        </div>
                    </div>
                </a>

                {/* Menu items updated for Medibot features */}
                <div
                    className={`${isMenuOpen ? "block" : "hidden"} max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto max-lg:z-50 lg:flex lg:items-center`}
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="lg:hidden fixed top-4 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="black" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <ul className="lg:flex gap-x-8 max-lg:space-y-4">
                        <li className="mb-6 hidden max-lg:block"></li>

                        <li className="max-lg:border-b max-lg:pb-4">
                            <NavLink href="/" isCurrent={true}><HomeIcon /> Overview</NavLink>
                        </li>
                        <li className="max-lg:border-b max-lg:py-3">
                            <NavLink href="/symptom-checker"><StethoscopeIcon /> Symptom Checker</NavLink>
                        </li>
                        <li className="max-lg:border-b max-lg:py-3">
                            <NavLink href="/doctor-recommender"><UserGroupIcon /> Doctor Recommender</NavLink>
                        </li>
                        <li className="max-lg:border-b max-lg:py-3">
                            <NavLink href="/tech-stack"><CodeBracketIcon /> Tech Stack</NavLink>
                        </li>
                        <li className="max-lg:border-b max-lg:py-3">
                            <NavLink href="/wellness-hub"><HeartIcon /> Wellness Hub</NavLink>
                        </li>
                        <li className="max-lg:border-b max-lg:py-3">
                            <NavLink href="/human-body-explorer"><HeartIcon /> Body Explorer</NavLink>
                        </li>
                        <li className="max-lg:border-b max-lg:py-3">
                            <NavLink href="/air-quality-forecaster"><MapIcon /> Air Quality</NavLink>
                        </li>
                        {/* <li className="max-lg:border-b max-lg:py-3">
                            <NavLink href="/clinical-trial-finder"><MapIcon /> ClinicalTrialFinder</NavLink>
                        </li> */}
                        <li className="max-lg:border-b max-lg:py-3">
                            <NavLink href="/roadmap"><MapIcon /> Roadmap</NavLink>
                        </li>
                        <li className="max-lg:border-b max-lg:py-3">
                            <NavLink href="/contribute"><HeartIcon /> Contribute</NavLink>
                        </li>
                    </ul>
                </div>

                {/* Hamburger Icon */}
                <div className="flex items-center max-lg:ml-auto space-x-4">
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="lg:hidden cursor-pointer"
                    >
                        <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
