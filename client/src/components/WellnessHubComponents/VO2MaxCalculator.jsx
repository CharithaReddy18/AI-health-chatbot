import { useEffect, useState } from "react";

const VO2MaxCalculator = () => {
    const [gender, setGender] = useState('male');
    const [age, setAge] = useState(30);
    const [restingHR, setRestingHR] = useState(70);
    const [maxHR, setMaxHR] = useState(190);
    const [vo2Max, setVO2Max] = useState(0);
    const [fitnessLevel, setFitnessLevel] = useState('');

    useEffect(() => {
        // Using the Jack Daniels formula approximation
        const hrReserve = maxHR - restingHR;
        let vo2 = 15.6 * (hrReserve / restingHR);
        
        if (gender === 'female') {
            vo2 *= 0.9; // Adjust for gender
        }
        
        setVO2Max(Math.round(vo2));
        
        // Fitness level based on age and gender
        let excellent, good, fair;
        if (gender === 'male') {
            if (age < 30) { excellent = 52; good = 47; fair = 42; }
            else if (age < 40) { excellent = 50; good = 45; fair = 40; }
            else if (age < 50) { excellent = 48; good = 43; fair = 38; }
            else { excellent = 45; good = 40; fair = 35; }
        } else {
            if (age < 30) { excellent = 45; good = 40; fair = 35; }
            else if (age < 40) { excellent = 43; good = 38; fair = 33; }
            else if (age < 50) { excellent = 40; good = 35; fair = 30; }
            else { excellent = 38; good = 33; fair = 28; }
        }
        
        if (vo2 >= excellent) setFitnessLevel('Excellent');
        else if (vo2 >= good) setFitnessLevel('Good');
        else if (vo2 >= fair) setFitnessLevel('Fair');
        else setFitnessLevel('Needs Improvement');
        
    }, [gender, age, restingHR, maxHR]);

    const getFitnessColor = () => {
        if (fitnessLevel === 'Excellent') return 'text-green-600';
        if (fitnessLevel === 'Good') return 'text-yellow-600';
        if (fitnessLevel === 'Fair') return 'text-orange-600';
        return 'text-red-600';
    };

    return (
        <div className="group relative bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 w-full h-80 overflow-hidden">
            {/* Hover Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none"></div>
            
            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                        🫁
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="text-base font-bold text-slate-800 truncate">VO2 Max Estimator</h3>
                        <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full font-medium">
                            Cardio Fitness
                        </span>
                    </div>
                </div>
                
                {/* Results Display */}
                <div className="text-center mb-4 flex-shrink-0">
                    <p className="text-slate-600 text-xs">Cardiovascular Fitness</p>
                    <p className="text-3xl font-black text-slate-800">{vo2Max}</p>
                    <p className="text-emerald-600 font-medium text-xs mb-1">ml/kg/min</p>
                    <p className={`text-sm font-bold ${getFitnessColor()}`}>{fitnessLevel}</p>
                </div>

                {/* Input Controls - Flex grow to fill remaining space */}
                <div className="flex-grow flex flex-col justify-end space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-xs font-medium text-slate-600 mb-1 block">Gender</label>
                            <select 
                                value={gender} 
                                onChange={(e) => setGender(e.target.value)} 
                                className="w-full bg-slate-50 text-slate-800 p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs font-medium text-slate-600 mb-1 block">Age</label>
                            <input 
                                type="number" 
                                value={age} 
                                onChange={(e) => setAge(Number(e.target.value) || 30)} 
                                className="w-full bg-slate-50 text-slate-800 p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-slate-600 mb-1 block">Resting HR</label>
                            <input 
                                type="number" 
                                value={restingHR} 
                                onChange={(e) => setRestingHR(Number(e.target.value) || 70)} 
                                className="w-full bg-slate-50 text-slate-800 p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-slate-600 mb-1 block">Max HR</label>
                            <input 
                                type="number" 
                                value={maxHR} 
                                onChange={(e) => setMaxHR(Number(e.target.value) || (220 - age))} 
                                placeholder={220 - age} 
                                className="w-full bg-slate-50 text-slate-800 p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VO2MaxCalculator;
