import React, { useState } from 'react';

// --- Mock Data for Clinical Trials ---
const mockTrials = [
    { id: 1, title: "A Study of a New Drug for Migraine Prevention", condition: "Migraine", location: "New York, NY", status: "Recruiting", lat: 40.7128, lng: -74.0060 },
    { id: 2, title: "Evaluating a Novel Therapy for Type 2 Diabetes", condition: "Diabetes", location: "Chicago, IL", status: "Recruiting", lat: 41.8781, lng: -87.6298 },
    { id: 3, title: "Asthma Control in Urban Environments", condition: "Asthma", location: "Los Angeles, CA", status: "Active, not recruiting", lat: 34.0522, lng: -118.2437 },
    { id: 4, title: "A Trial of a Device for Heart Failure Patients", condition: "Heart Failure", location: "Houston, TX", status: "Recruiting", lat: 29.7604, lng: -95.3698 },
    { id: 5, title: "Early Detection of Alzheimer's Disease Study", condition: "Alzheimer's", location: "Phoenix, AZ", status: "Recruiting", lat: 33.4484, lng: -112.0740 },
];

// --- Map Pin Component ---
const MapPin = ({ trial }) => (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 group">
        <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-cyan-400/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max bg-slate-700 text-white text-xs font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {trial.title}
        </div>
    </div>
);

// --- Trial Card Component ---
const TrialCard = ({ trial }) => (
    <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:bg-slate-700/50 transition-colors duration-300">
        <h3 className="font-bold text-white">{trial.title}</h3>
        <p className="text-sm text-slate-400 mt-1">{trial.location}</p>
        <div className="flex justify-between items-center mt-3">
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${trial.status === 'Recruiting' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                {trial.status}
            </span>
            <button className="text-sm font-semibold text-cyan-400 hover:text-cyan-300">View Details</button>
        </div>
    </div>
);


// --- Main Clinical Trial Finder Page ---
const ClinicalTrialFinder = () => {
    // In a real app, you would manage search state and API calls here
    const [searchTerm, setSearchTerm] = useState("Heart Failure");

    return (
        <div className="bg-slate-900 pt-20 min-h-screen flex flex-col">
            {/* Page Header */}
            <div className="border-b border-slate-800 text-center">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        Clinical Trial Finder
                    </h1>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                        Explore ongoing medical research studies. Enter a condition to find relevant clinical trials near you.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
                {/* Left Panel: Search and Results */}
                <div className="w-full md:w-1/3 lg:w-1/4 h-full flex flex-col p-4">
                    <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 flex-grow flex flex-col">
                        {/* Search and Filters */}
                        <div>
                            <input 
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search by condition (e.g., Diabetes)"
                                className="w-full bg-slate-700 text-white p-3 border border-slate-600 rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
                            />
                            <div className="mt-4">
                                <label className="text-sm font-medium text-slate-400">Status</label>
                                <select className="w-full bg-slate-700 text-white mt-1 p-2 border border-slate-600 rounded-md">
                                    <option>All</option>
                                    <option>Recruiting</option>
                                    <option>Active, not recruiting</option>
                                </select>
                            </div>
                        </div>
                        
                        {/* Results List */}
                        <div className="mt-6 flex-grow overflow-y-auto pr-2">
                            <p className="text-sm text-slate-400 mb-2">Showing {mockTrials.length} results</p>
                            <div className="space-y-3">
                                {mockTrials.map(trial => (
                                    <TrialCard key={trial.id} trial={trial} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel: Map */}
                <div className="flex-grow h-[400px] md:h-full">
                    <div className="w-full h-full bg-slate-800 rounded-lg relative overflow-hidden">
                        {/* This is a placeholder for a real map library like Leaflet or Google Maps */}
                        <div 
                            className="w-full h-full bg-cover bg-center opacity-30"
                            style={{ backgroundImage: `url('https://i.imgur.com/5V13t42.png')` }}
                        ></div>
                         {/* Mock Pins - positions would be calculated based on lat/lng */}
                        <div style={{ position: 'absolute', top: '40%', left: '30%' }}><MapPin trial={mockTrials[0]} /></div>
                        <div style={{ position: 'absolute', top: '35%', left: '50%' }}><MapPin trial={mockTrials[1]} /></div>
                        <div style={{ position: 'absolute', top: '60%', left: '20%' }}><MapPin trial={mockTrials[2]} /></div>
                        <div style={{ position: 'absolute', top: '75%', left: '45%' }}><MapPin trial={mockTrials[3]} /></div>
                        <div style={{ position: 'absolute', top: '65%', left: '35%' }}><MapPin trial={mockTrials[4]} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClinicalTrialFinder;
