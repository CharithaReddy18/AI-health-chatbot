import { useEffect, useState } from "react";

const MacroCalculator = () => {
    const [weight, setWeight] = useState(70);
    const [goal, setGoal] = useState('maintain');
    const [calories, setCalories] = useState(2000);
    const [macros, setMacros] = useState({ protein: 0, carbs: 0, fats: 0 });

    useEffect(() => {
        let proteinPercent = 0.25, carbPercent = 0.45, fatPercent = 0.30;
        
        if (goal === 'lose') {
            proteinPercent = 0.35; carbPercent = 0.35; fatPercent = 0.30;
        } else if (goal === 'muscle') {
            proteinPercent = 0.30; carbPercent = 0.40; fatPercent = 0.30;
        } else if (goal === 'keto') {
            proteinPercent = 0.25; carbPercent = 0.10; fatPercent = 0.65;
        }
        
        const protein = Math.round((calories * proteinPercent) / 4);
        const carbs = Math.round((calories * carbPercent) / 4);
        const fats = Math.round((calories * fatPercent) / 9);
        
        setMacros({ protein, carbs, fats });
    }, [calories, goal]);

    return (
        <div className="group relative bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 w-full h-80 overflow-hidden">
            {/* Hover Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none"></div>
            
            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                        🍽️
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="text-base font-bold text-slate-800 truncate">Macro Calculator</h3>
                        <span className="text-xs px-2 py-1 bg-teal-100 text-teal-700 rounded-full font-medium">
                            Macronutrients
                        </span>
                    </div>
                </div>
                
                {/* Input Controls */}
                <div className="space-y-3 mb-4 flex-shrink-0">
                    <div>
                        <label className="text-xs font-medium text-slate-600 mb-2 block">Daily Calories: {calories}</label>
                        <input 
                            type="range" 
                            min="1200" 
                            max="4000" 
                            step="50" 
                            value={calories} 
                            onChange={(e) => setCalories(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500"
                            style={{
                                background: `linear-gradient(to right, #14b8a6 0%, #14b8a6 ${((calories - 1200) / (4000 - 1200)) * 100}%, #e2e8f0 ${((calories - 1200) / (4000 - 1200)) * 100}%, #e2e8f0 100%)`
                            }}
                        />
                    </div>
                    <div>
                        <label className="text-xs font-medium text-slate-600 mb-1 block">Goal</label>
                        <select 
                            value={goal} 
                            onChange={(e) => setGoal(e.target.value)} 
                            className="w-full bg-slate-50 text-slate-800 p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all"
                        >
                            <option value="maintain">Maintain Weight</option>
                            <option value="lose">Lose Weight</option>
                            <option value="muscle">Build Muscle</option>
                            <option value="keto">Keto Diet</option>
                        </select>
                    </div>
                </div>
                
                {/* Macro Results - Flex grow to fill remaining space */}
                <div className="flex-grow flex flex-col justify-end">
                    <div className="grid grid-cols-3 gap-2">
                        <div className="text-center p-3 bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg">
                            <p className="text-red-700 text-xs font-medium">Protein</p>
                            <p className="text-lg font-bold text-slate-800">{macros.protein}g</p>
                        </div>
                        <div className="text-center p-3 bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg">
                            <p className="text-yellow-700 text-xs font-medium">Carbs</p>
                            <p className="text-lg font-bold text-slate-800">{macros.carbs}g</p>
                        </div>
                        <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg">
                            <p className="text-blue-700 text-xs font-medium">Fats</p>
                            <p className="text-lg font-bold text-slate-800">{macros.fats}g</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MacroCalculator;
