import { useEffect, useState } from "react";

const CalorieCalculator = () => {
    const [age, setAge] = useState(30);
    const [gender, setGender] = useState('male');
    const [weight, setWeight] = useState(70);
    const [height, setHeight] = useState(170);
    const [activity, setActivity] = useState(1.55);
    const [calories, setCalories] = useState(0);

    useEffect(() => {
        let bmr;
        if (gender === 'male') {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }
        setCalories(Math.round(bmr * activity));
    }, [age, gender, weight, height, activity]);

    return (
        <div className="group relative bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 w-full h-80 overflow-hidden">
            {/* Hover Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none"></div>
            
            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                        🔥
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="text-base font-bold text-slate-800 truncate">Daily Calories</h3>
                        <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full font-medium">
                            Energy Needs
                        </span>
                    </div>
                </div>
                
                {/* Results Display */}
                <div className="text-center mb-4 flex-shrink-0">
                    <p className="text-slate-600 text-xs uppercase tracking-wide mb-1">Maintenance</p>
                    <p className="text-3xl font-black bg-gradient-to-br from-slate-800 to-emerald-600 bg-clip-text text-transparent">{calories}</p>
                    <p className="text-emerald-600 font-medium text-xs">kcal / day</p>
                </div>
                
                {/* Input Controls - Flex grow to fill remaining space */}
                <div className="flex-grow flex flex-col justify-end space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-xs font-medium text-slate-600 mb-1 block">Age</label>
                            <input 
                                type="number" 
                                value={age} 
                                onChange={(e) => setAge(Number(e.target.value) || 30)} 
                                className="w-full bg-slate-50 text-slate-800 p-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-slate-600 mb-1 block">Gender</label>
                            <select 
                                value={gender} 
                                onChange={(e) => setGender(e.target.value)} 
                                className="w-full bg-slate-50 text-slate-800 p-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-xs font-medium text-slate-600 mb-1 block">Height (cm)</label>
                            <input 
                                type="number" 
                                value={height} 
                                onChange={(e) => setHeight(Number(e.target.value) || 170)} 
                                className="w-full bg-slate-50 text-slate-800 p-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-slate-600 mb-1 block">Weight (kg)</label>
                            <input 
                                type="number" 
                                value={weight} 
                                onChange={(e) => setWeight(Number(e.target.value) || 70)} 
                                className="w-full bg-slate-50 text-slate-800 p-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
                            />
                        </div>
                    </div>
                    
                    <div>
                        <label className="text-xs font-medium text-slate-600 mb-1 block">Activity Level</label>
                        <select 
                            value={activity} 
                            onChange={(e) => setActivity(Number(e.target.value))} 
                            className="w-full bg-slate-50 text-slate-800 p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
                        >
                            <option value={1.2}>Sedentary</option>
                            <option value={1.375}>Light active</option>
                            <option value={1.55}>Moderate active</option>
                            <option value={1.725}>Very active</option>
                            <option value={1.9}>Extra active</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalorieCalculator;
