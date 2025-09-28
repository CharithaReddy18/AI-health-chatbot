import { useEffect, useState } from "react";

const BSACalculator = () => {
    const [height, setHeight] = useState(170);
    const [weight, setWeight] = useState(70);
    const [bsa, setBsa] = useState(0);

    useEffect(() => {
        // Mosteller formula: BSA = sqrt((height * weight) / 3600)
        const calculatedBSA = Math.sqrt((height * weight) / 3600);
        setBsa(calculatedBSA.toFixed(2));
    }, [height, weight]);

    return (
        <div className="group relative bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 w-full h-80 overflow-x-hidden overflow-y-scroll">
            {/* Hover Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none"></div>
            
            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                        📐
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="text-base font-bold text-slate-800 truncate">Body Surface Area</h3>
                        <span className="text-xs px-2 py-1 bg-rose-100 text-rose-700 rounded-full font-medium">
                            Medical BSA
                        </span>
                    </div>
                </div>
                
                {/* Results Display */}
                <div className="text-center mb-4 flex-shrink-0">
                    <p className="text-slate-600 text-xs uppercase tracking-wide mb-1">BSA (Mosteller Formula)</p>
                    <p className="text-4xl font-black bg-gradient-to-br from-slate-800 to-rose-600 bg-clip-text text-transparent">{bsa}</p>
                    <p className="text-rose-600 font-medium text-sm">m²</p>
                </div>

                {/* Controls */}
                <div className="space-y-3 mb-4 flex-shrink-0">
                    <div>
                        <label className="text-xs font-medium text-slate-600 mb-2 block">Height: {height} cm</label>
                        <input 
                            type="range" 
                            min="120" 
                            max="220" 
                            value={height} 
                            onChange={(e) => setHeight(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-rose-500"
                            style={{
                                background: `linear-gradient(to right, #f43f5e 0%, #f43f5e ${((height - 120) / (220 - 120)) * 100}%, #e2e8f0 ${((height - 120) / (220 - 120)) * 100}%, #e2e8f0 100%)`
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
                            className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-rose-500"
                            style={{
                                background: `linear-gradient(to right, #f43f5e 0%, #f43f5e ${((weight - 40) / (150 - 40)) * 100}%, #e2e8f0 ${((weight - 40) / (150 - 40)) * 100}%, #e2e8f0 100%)`
                            }}
                        />
                    </div>
                </div>
                
                {/* Medical Info - Flex grow to fill remaining space */}
                <div className="flex-grow flex flex-col justify-end">
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <p className="text-slate-600 text-xs">
                            <strong>Medical Use:</strong> BSA is used for calculating medication dosages, chemotherapy protocols, and cardiac output measurements.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BSACalculator;
