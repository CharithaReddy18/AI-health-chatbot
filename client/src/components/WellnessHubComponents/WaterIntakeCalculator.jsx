import { useEffect, useState } from "react";

const WaterIntakeCalculator = () => {
    const [weight, setWeight] = useState(70);
    const [activityLevel, setActivityLevel] = useState(1.2);
    const [climate, setClimate] = useState(1);
    const [waterNeeded, setWaterNeeded] = useState(2.5);

    useEffect(() => {
        let baseWater = weight * 0.033;
        baseWater *= activityLevel;
        baseWater *= climate;
        setWaterNeeded(parseFloat(baseWater.toFixed(1)));
    }, [weight, activityLevel, climate]);

    return (
        <div className="group relative bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 w-full h-80 overflow-x-hidden overflow-y-scroll">
            {/* Hover Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none"></div>
            
            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                        💧
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="text-base font-bold text-slate-800 truncate">Water Intake</h3>
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                            Daily Hydration
                        </span>
                    </div>
                </div>
                
                {/* Results Display */}
                <div className="text-center mb-4 flex-shrink-0">
                    <p className="text-slate-600 text-xs uppercase tracking-wide mb-1">Daily Need</p>
                    <p className="text-3xl font-black bg-gradient-to-br from-slate-800 to-blue-600 bg-clip-text text-transparent">{waterNeeded}L</p>
                    <p className="text-blue-600 font-medium text-xs">{(waterNeeded * 4.227).toFixed(0)} cups</p>
                </div>

                {/* Controls - Flex grow to fill remaining space */}
                <div className="flex-grow flex flex-col justify-end space-y-3">
                    <div>
                        <label className="text-xs font-medium text-slate-600 mb-2 block">Weight: {weight} kg</label>
                        <input 
                            type="range" 
                            min="40" 
                            max="150" 
                            value={weight} 
                            onChange={(e) => setWeight(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                            style={{
                                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((weight - 40) / (150 - 40)) * 100}%, #e2e8f0 ${((weight - 40) / (150 - 40)) * 100}%, #e2e8f0 100%)`
                            }}
                        />
                    </div>
                    <div>
                        <label className="text-xs font-medium text-slate-600 mb-1 block">Activity</label>
                        <select 
                            value={activityLevel} 
                            onChange={(e) => setActivityLevel(Number(e.target.value))} 
                            className="w-full bg-slate-50 text-slate-800 p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                        >
                            <option value={1.2}>Sedentary</option>
                            <option value={1.375}>Light activity</option>
                            <option value={1.55}>Moderate activity</option>
                            <option value={1.725}>High activity</option>
                            <option value={1.9}>Very high activity</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-xs font-medium text-slate-600 mb-1 block">Climate</label>
                        <select 
                            value={climate} 
                            onChange={(e) => setClimate(Number(e.target.value))} 
                            className="w-full bg-slate-50 text-slate-800 p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                        >
                            <option value={1}>Normal climate</option>
                            <option value={1.15}>Hot/humid climate</option>
                            <option value={1.3}>Very hot climate</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaterIntakeCalculator;
