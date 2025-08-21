import React, { useState } from 'react';

// Specialist Card Component
const SpecialistCard = ({ specialist }) => (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-bold text-blue-700">{specialist.name}</h3>
        <p className="mt-2 text-slate-600">{specialist.description}</p>
        <div className="mt-4">
            <h4 className="font-semibold text-slate-800">Common Conditions Treated:</h4>
            <ul className="mt-2 space-y-1 list-disc list-inside text-slate-600">
                {specialist.conditions.map((condition, index) => (
                    <li key={index}>{condition}</li>
                ))}
            </ul>
        </div>
    </div>
);

// Main Doctor Recommender Page Component
const DoctorRecommender = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [searched, setSearched] = useState(false);

    // Mock data for demonstration purposes
    const mockData = {
        'headache': [
            { name: 'Neurologist', description: 'Specializes in disorders of the nervous system, including the brain, spinal cord, and nerves.', conditions: ['Migraines', 'Epilepsy', 'Stroke', 'Multiple Sclerosis'] },
            { name: 'General Practitioner', description: 'Provides primary care and can diagnose and treat a wide range of common health issues.', conditions: ['Tension Headaches', 'Common Cold', 'Flu', 'Minor Injuries'] }
        ],
        'heart pain': [
            { name: 'Cardiologist', description: 'Specializes in diagnosing and treating diseases of the heart and blood vessels.', conditions: ['Heart Attack', 'Heart Failure', 'Arrhythmia', 'High Blood Pressure'] },
        ],
        'skin rash': [
            { name: 'Dermatologist', description: 'Focuses on conditions involving the skin, hair, and nails.', conditions: ['Eczema', 'Psoriasis', 'Acne', 'Skin Cancer'] },
            { name: 'Allergist', description: 'Specializes in diagnosing and treating allergies and related conditions.', conditions: ['Hives', 'Allergic Reactions', 'Asthma'] }
        ]
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearched(true);
        const term = searchTerm.toLowerCase();
        setResults(mockData[term] || []);
    };

    return (
        <div className="relative bg-slate-50 min-h-screen pt-20">
            {/* Subtle background pattern */}
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
                            Find the Right Specialist
                        </h1>
                        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                            Enter a symptom or condition below to get a recommendation for the type of medical specialist you should consult.
                        </p>
                    </div>
                </div>

                {/* Search Section */}
                <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="e.g., 'headache', 'skin rash', 'heart pain'"
                            className="w-full px-5 py-3 text-lg border-slate-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-300 shadow-md"
                        >
                            Search
                        </button>
                    </form>
                </div>

                {/* Results Section */}
                <div className="max-w-7xl mx-auto pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8">
                    {searched && results.length > 0 && (
                        <>
                            <h2 className="text-2xl font-bold text-slate-800 mb-6">Recommendations for "{searchTerm}"</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {results.map((specialist, index) => (
                                    <SpecialistCard key={index} specialist={specialist} />
                                ))}
                            </div>
                        </>
                    )}
                    {searched && results.length === 0 && (
                        <div className="text-center bg-white p-12 rounded-lg border border-slate-200">
                            <h3 className="text-xl font-semibold text-slate-800">No Recommendations Found</h3>
                            <p className="mt-2 text-slate-600">We couldn't find a specialist for "{searchTerm}". Please try a different term or consult a General Practitioner.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DoctorRecommender;
