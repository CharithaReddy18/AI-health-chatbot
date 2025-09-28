import { useEffect, useState } from "react";

const BMICalculator = () => {
    const [height, setHeight] = useState(170);
    const [weight, setWeight] = useState(70);
    const [bmi, setBmi] = useState(24.2);
    const [category, setCategory] = useState('Normal weight');

    useEffect(() => {
        if (height > 0 && weight > 0) {
            const heightInMeters = height / 100;
            const calculatedBmi = parseFloat((weight / (heightInMeters * heightInMeters)).toFixed(1));
            setBmi(calculatedBmi);

            if (calculatedBmi < 18.5) setCategory('Underweight');
            else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) setCategory('Normal weight');
            else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) setCategory('Overweight');
            else setCategory('Obesity');
        }
    }, [height, weight]);

    const getBmiRotation = () => {
        const clampedBmi = Math.max(10, Math.min(40, bmi));
        return (clampedBmi - 10) / 30 * 180 - 90;
    };
    
    const getBmiColor = () => {
        if (category === 'Underweight') return 'text-amber-600';
        if (category === 'Normal weight') return 'text-emerald-600';
        if (category === 'Overweight') return 'text-orange-600';
        return 'text-red-600';
    };

    return (
        <div className="group relative bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 w-full h-80 overflow-hidden">
            {/* Hover Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none"></div>
            
            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                        📏
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="text-base font-bold text-slate-800 truncate">BMI Calculator</h3>
                        <span className="text-xs px-2 py-1 bg-teal-100 text-teal-700 rounded-full font-medium">
                            Body Mass Index
                        </span>
                    </div>
                </div>
                
                {/* BMI Gauge */}
                <div className="relative h-20 w-full flex items-center justify-center mb-4 flex-shrink-0">
                    <div className="relative w-36 h-18">
                        <div className="absolute bottom-0 left-0 w-full h-full border-4 border-slate-300 rounded-t-full border-b-0"></div>
                        <div className="absolute bottom-0 left-0 w-full h-full rounded-t-full overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-1/4 h-full bg-gradient-to-t from-amber-400/60 to-amber-400/20"></div>
                            <div className="absolute bottom-0 left-1/4 w-1/4 h-full bg-gradient-to-t from-emerald-400/60 to-emerald-400/20"></div>
                            <div className="absolute bottom-0 left-2/4 w-1/4 h-full bg-gradient-to-t from-orange-400/60 to-orange-400/20"></div>
                            <div className="absolute bottom-0 left-3/4 w-1/4 h-full bg-gradient-to-t from-red-500/60 to-red-500/20"></div>
                        </div>
                        <div 
                            className="absolute bottom-0 left-1/2 w-1 h-4 bg-slate-800 rounded-full transition-transform duration-700 shadow-lg" 
                            style={{ transform: `translateX(-50%) rotate(${getBmiRotation()}deg) translateY(-3rem)`}}
                        ></div>
                        <div className="absolute bottom-1 left-1/2 w-4 h-4 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full -translate-x-1/2 shadow-lg"></div>
                    </div>
                </div>
                
                {/* Results */}
                <div className="text-center mb-4 flex-shrink-0">
                    <p className="text-3xl font-black text-slate-800 mb-1">{bmi}</p>
                    <p className={`text-sm font-bold ${getBmiColor()}`}>{category}</p>
                </div>
                
                {/* Controls - Flex grow to fill remaining space */}
                <div className="flex-grow flex flex-col justify-end space-y-3">
                    <div>
                        <label className="text-xs font-medium text-slate-600 mb-2 block">Height: {height} cm</label>
                        <input 
                            type="range" 
                            min="120" 
                            max="220" 
                            value={height} 
                            onChange={(e) => setHeight(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500"
                            style={{
                                background: `linear-gradient(to right, #14b8a6 0%, #14b8a6 ${((height - 120) / (220 - 120)) * 100}%, #e2e8f0 ${((height - 120) / (220 - 120)) * 100}%, #e2e8f0 100%)`
                            }}
                        />
                    </div>
                    <div>
                        <label className="text-xs font-medium text-slate-600 mb-2 block">Weight: {weight} kg</label>
                        <input 
                            type="range" 
                            min="40" 
                            max="150" 
                            value={weight} 
                            onChange={(e) => setWeight(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500"
                            style={{
                                background: `linear-gradient(to right, #14b8a6 0%, #14b8a6 ${((weight - 40) / (150 - 40)) * 100}%, #e2e8f0 ${((weight - 40) / (150 - 40)) * 100}%, #e2e8f0 100%)`
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BMICalculator;
