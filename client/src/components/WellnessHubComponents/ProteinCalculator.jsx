import { useEffect, useState } from "react";

const ProteinCalculator = () => {
    const [weight, setWeight] = useState(70);
    const [goal, setGoal] = useState('maintain');
    const [activityLevel, setActivityLevel] = useState(1.2);
    const [protein, setProtein] = useState(0);

    useEffect(() => {
        let baseProtein = weight * 0.8;
        
        if (goal === 'muscle') baseProtein = weight * 1.6;
        else if (goal === 'lose') baseProtein = weight * 1.2;
        else if (goal === 'athlete') baseProtein = weight * 2.0;
        
        baseProtein *= activityLevel;
        setProtein(Math.round(baseProtein));
    }, [weight, goal, activityLevel]);

    return (
        <div className="group relative bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 w-full h-80 overflow-x-hidden overflow-y-scroll">
            {/* Hover Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none"></div>
            
            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                        🥩
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="text-base font-bold text-slate-800 truncate">Protein Calculator</h3>
                        <span className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded-full font-medium">
                            Daily Needs
                        </span>
                    </div>
                </div>
                
                {/* Results Display */}
                <div className="text-center mb-4 flex-shrink-0">
                    <p className="text-slate-600 text-xs uppercase tracking-wide mb-1">Daily Requirement</p>
                    <p className="text-3xl font-black bg-gradient-to-br from-slate-800 to-amber-600 bg-clip-text text-transparent">{protein}g</p>
                    <p className="text-amber-600 font-medium text-xs">per day</p>
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
                            className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500"
                            style={{
                                background: `linear-gradient(to right, #f59e0b 0%, #f59e0b ${((weight - 40) / (150 - 40)) * 100}%, #e2e8f0 ${((weight - 40) / (150 - 40)) * 100}%, #e2e8f0 100%)`
                            }}
                        />
                    </div>
                    <div>
                        <label className="text-xs font-medium text-slate-600 mb-1 block">Goal</label>
                        <select 
                            value={goal} 
                            onChange={(e) => setGoal(e.target.value)} 
                            className="w-full bg-slate-50 text-slate-800 p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                        >
                            <option value="maintain">Maintain weight</option>
                            <option value="lose">Lose weight</option>
                            <option value="muscle">Build muscle</option>
                            <option value="athlete">Athletic performance</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-xs font-medium text-slate-600 mb-1 block">Activity Level</label>
                        <select 
                            value={activityLevel} 
                            onChange={(e) => setActivityLevel(Number(e.target.value))} 
                            className="w-full bg-slate-50 text-slate-800 p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                        >
                            <option value={1}>Sedentary</option>
                            <option value={1.2}>Lightly active</option>
                            <option value={1.4}>Moderately active</option>
                            <option value={1.6}>Very active</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProteinCalculator;
