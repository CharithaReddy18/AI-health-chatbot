import { useEffect, useState } from "react";

const CaffeineCalculator = () => {
    const [weight, setWeight] = useState(70);
    const [tolerance, setTolerance] = useState('normal');
    const [timing, setTiming] = useState('morning');
    const [recommendations, setRecommendations] = useState({});

    useEffect(() => {
        let safeDose = weight * 6; // 6mg per kg body weight (FDA recommendation)
        let maxDose = weight * 9; // Upper limit
        
        if (tolerance === 'low') {
            safeDose *= 0.7;
            maxDose *= 0.7;
        } else if (tolerance === 'high') {
            safeDose *= 1.3;
            maxDose *= 1.3;
        }
        
        let cutoffTime = '14:00';
        if (timing === 'early') cutoffTime = '12:00';
        else if (timing === 'late') cutoffTime = '16:00';
        
        setRecommendations({
            safe: Math.round(safeDose),
            max: Math.round(maxDose),
            cutoff: cutoffTime,
            cups: Math.round(safeDose / 95) // Average coffee has ~95mg caffeine
        });
    }, [weight, tolerance, timing]);

    return (
        <div className="group relative bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 w-full h-80 overflow-x-hidden overflow-y-scroll">
            {/* Hover Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none"></div>
            
            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                        ☕
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="text-base font-bold text-slate-800 truncate">Caffeine Calculator</h3>
                        <span className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded-full font-medium">
                            Safe Intake
                        </span>
                    </div>
                </div>
                
                {/* Results Display */}
                <div className="text-center mb-4 flex-shrink-0">
                    <p className="text-slate-600 text-xs">Safe Daily Intake</p>
                    <p className="text-3xl font-black text-slate-800">{recommendations.safe}</p>
                    <p className="text-amber-600 font-medium text-xs">mg / day</p>
                    <p className="text-slate-500 text-xs">≈ {recommendations.cups} cups of coffee</p>
                </div>

                {/* Controls */}
                <div className="space-y-3 mb-4 flex-shrink-0">
                    <div>
                        <label className="text-xs font-medium text-slate-600 mb-2 block">Weight: {weight} kg</label>
                        <input 
                            type="range" 
                            min="40" 
                            max="120" 
                            value={weight} 
                            onChange={(e) => setWeight(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-600"
                            style={{
                                background: `linear-gradient(to right, #d97706 0%, #d97706 ${((weight - 40) / (120 - 40)) * 100}%, #e2e8f0 ${((weight - 40) / (120 - 40)) * 100}%, #e2e8f0 100%)`
                            }}
                        />
                    </div>
                    <div>
                        <label className="text-xs font-medium text-slate-600 mb-1 block">Caffeine Tolerance</label>
                        <select 
                            value={tolerance} 
                            onChange={(e) => setTolerance(e.target.value)} 
                            className="w-full bg-slate-50 text-slate-800 p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-amber-600 transition-all"
                        >
                            <option value="low">Low (sensitive)</option>
                            <option value="normal">Normal</option>
                            <option value="high">High (regular consumer)</option>
                        </select>
                    </div>
                </div>
                
                {/* Summary Cards - Flex grow to fill remaining space */}
                <div className="flex-grow flex flex-col justify-end">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="text-center p-3 bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg">
                            <p className="text-red-700 text-xs font-medium">Max Limit</p>
                            <p className="text-sm font-bold text-slate-800">{recommendations.max} mg</p>
                        </div>
                        <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg">
                            <p className="text-blue-700 text-xs font-medium">Cut-off Time</p>
                            <p className="text-sm font-bold text-slate-800">{recommendations.cutoff}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaffeineCalculator;
