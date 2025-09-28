import { useEffect, useState } from "react";

const HeartRateCalculator = () => {
    const [age, setAge] = useState(30);
    const [zones, setZones] = useState({});

    useEffect(() => {
        const maxHr = 220 - age;
        setZones({
            max: maxHr,
            fat: `${Math.round(maxHr * 0.5)} - ${Math.round(maxHr * 0.6)}`,
            moderate: `${Math.round(maxHr * 0.6)} - ${Math.round(maxHr * 0.7)}`,
            cardio: `${Math.round(maxHr * 0.7)} - ${Math.round(maxHr * 0.85)}`,
            peak: `${Math.round(maxHr * 0.85)} - ${maxHr}`
        });
    }, [age]);
    
    return (
        <div className="group relative bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 w-full h-80 overflow-x-hidden overflow-y-scroll">
            {/* Hover Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none"></div>
            
            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                        ❤️
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="text-base font-bold text-slate-800 truncate">Heart Rate Zones</h3>
                        <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full font-medium">
                            Training Zones
                        </span>
                    </div>
                </div>
                
                {/* Age Input */}
                <div className="mb-4 flex-shrink-0">
                    <label className="text-xs font-medium text-slate-600 mb-2 block">Your Age: {age}</label>
                    <input 
                        type="range" 
                        min="18" 
                        max="80" 
                        value={age} 
                        onChange={(e) => setAge(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
                        style={{
                            background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${((age - 18) / (80 - 18)) * 100}%, #e2e8f0 ${((age - 18) / (80 - 18)) * 100}%, #e2e8f0 100%)`
                        }}
                    />
                </div>
                
                {/* Max HR Display */}
                <div className="text-center mb-4 flex-shrink-0">
                    <p className="text-slate-600 text-xs">Max Heart Rate</p>
                    <p className="text-2xl font-black text-slate-800">{zones.max}</p>
                    <p className="text-red-600 text-xs font-medium">BPM</p>
                </div>
                
                {/* Heart Rate Zones - Flex grow to fill remaining space */}
                <div className="flex-grow flex flex-col justify-end space-y-2">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200">
                        <p className="font-semibold text-blue-700 text-xs">Fat Burn (50-60%)</p>
                        <p className="font-bold text-slate-800 text-xs">{zones.fat}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200">
                        <p className="font-semibold text-emerald-700 text-xs">Moderate (60-70%)</p>
                        <p className="font-bold text-slate-800 text-xs">{zones.moderate}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200">
                        <p className="font-semibold text-orange-700 text-xs">Cardio (70-85%)</p>
                        <p className="font-bold text-slate-800 text-xs">{zones.cardio}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-gradient-to-r from-red-50 to-red-100 border border-red-200">
                        <p className="font-semibold text-red-700 text-xs">Peak (85-100%)</p>
                        <p className="font-bold text-slate-800 text-xs">{zones.peak}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeartRateCalculator;
