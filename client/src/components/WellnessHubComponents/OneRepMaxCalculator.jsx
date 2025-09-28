import { useEffect, useState } from "react";

const OneRepMaxCalculator = () => {
    const [weight, setWeight] = useState(100);
    const [reps, setReps] = useState(5);
    const [oneRepMax, setOneRepMax] = useState(0);
    const [percentages, setPercentages] = useState({});

    useEffect(() => {
        // Using Brzycki formula: 1RM = weight / (1.0278 - (0.0278 × reps))
        const oneRM = weight / (1.0278 - (0.0278 * reps));
        setOneRepMax(Math.round(oneRM));
        
        setPercentages({
            ninety: Math.round(oneRM * 0.9),
            eighty: Math.round(oneRM * 0.8),
            seventy: Math.round(oneRM * 0.7),
            sixty: Math.round(oneRM * 0.6)
        });
    }, [weight, reps]);

    return (
        <div className="group relative bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 w-full h-80 overflow-x-hidden overflow-y-scroll">
            {/* Hover Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none"></div>
            
            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                        🏋️
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="text-base font-bold text-slate-800 truncate">One Rep Max</h3>
                        <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">
                            Strength Test
                        </span>
                    </div>
                </div>
                
                {/* Results Display */}
                <div className="text-center mb-4 flex-shrink-0">
                    <p className="text-slate-600 text-xs">Estimated 1RM</p>
                    <p className="text-4xl font-black text-slate-800">{oneRepMax}</p>
                    <p className="text-orange-600 font-medium text-sm">kg</p>
                </div>

                {/* Input Controls */}
                <div className="grid grid-cols-2 gap-3 mb-4 flex-shrink-0">
                    <div>
                        <label className="text-xs font-medium text-slate-600 mb-2 block">Weight: {weight} kg</label>
                        <input 
                            type="range" 
                            min="20" 
                            max="300" 
                            step="5" 
                            value={weight} 
                            onChange={(e) => setWeight(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500"
                            style={{
                                background: `linear-gradient(to right, #f97316 0%, #f97316 ${((weight - 20) / (300 - 20)) * 100}%, #e2e8f0 ${((weight - 20) / (300 - 20)) * 100}%, #e2e8f0 100%)`
                            }}
                        />
                    </div>
                    <div>
                        <label className="text-xs font-medium text-slate-600 mb-2 block">Reps: {reps}</label>
                        <input 
                            type="range" 
                            min="1" 
                            max="15" 
                            value={reps} 
                            onChange={(e) => setReps(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500"
                            style={{
                                background: `linear-gradient(to right, #f97316 0%, #f97316 ${((reps - 1) / (15 - 1)) * 100}%, #e2e8f0 ${((reps - 1) / (15 - 1)) * 100}%, #e2e8f0 100%)`
                            }}
                        />
                    </div>
                </div>
                
                {/* Percentage Results - Flex grow to fill remaining space */}
                <div className="flex-grow flex flex-col justify-end">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="text-center p-2 bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg">
                            <p className="text-red-700 text-xs font-medium">90%</p>
                            <p className="text-sm font-bold text-slate-800">{percentages.ninety} kg</p>
                        </div>
                        <div className="text-center p-2 bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg">
                            <p className="text-orange-700 text-xs font-medium">80%</p>
                            <p className="text-sm font-bold text-slate-800">{percentages.eighty} kg</p>
                        </div>
                        <div className="text-center p-2 bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg">
                            <p className="text-yellow-700 text-xs font-medium">70%</p>
                            <p className="text-sm font-bold text-slate-800">{percentages.seventy} kg</p>
                        </div>
                        <div className="text-center p-2 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg">
                            <p className="text-green-700 text-xs font-medium">60%</p>
                            <p className="text-sm font-bold text-slate-800">{percentages.sixty} kg</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneRepMaxCalculator;
