import { useEffect, useState } from "react";

const BodyFatCalculator = () => {
    const [gender, setGender] = useState('male');
    const [height, setHeight] = useState(170);
    const [waist, setWaist] = useState(80);
    const [neck, setNeck] = useState(38);
    const [hip, setHip] = useState(90);
    const [bodyFat, setBodyFat] = useState(0);
    const [category, setCategory] = useState('');

    useEffect(() => {
        let fat = 0;
        if (gender === 'male' && height > 0 && waist > 0 && neck > 0) {
            fat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
        } else if (gender === 'female' && height > 0 && waist > 0 && neck > 0 && hip > 0) {
            fat = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
        }
        
        const fatPercent = fat > 0 ? fat.toFixed(1) : 0;
        setBodyFat(fatPercent);
        
        // Body fat categories
        if (gender === 'male') {
            if (fatPercent < 6) setCategory('Essential Fat');
            else if (fatPercent < 14) setCategory('Athletes');
            else if (fatPercent < 18) setCategory('Fitness');
            else if (fatPercent < 25) setCategory('Average');
            else setCategory('Obese');
        } else {
            if (fatPercent < 16) setCategory('Essential Fat');
            else if (fatPercent < 20) setCategory('Athletes');
            else if (fatPercent < 25) setCategory('Fitness');
            else if (fatPercent < 32) setCategory('Average');
            else setCategory('Obese');
        }
    }, [gender, height, waist, neck, hip]);

    const getCategoryColor = () => {
        if (category === 'Essential Fat' || category === 'Athletes') return 'text-green-600';
        if (category === 'Fitness') return 'text-emerald-600';
        if (category === 'Average') return 'text-yellow-600';
        return 'text-red-600';
    };

    return (
        <div className="group relative bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 w-full overflow-hidden col-span-full lg:col-span-3 xl:col-span-4">
            {/* Hover Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none"></div>
            
            {/* Content Container */}
            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                        📏
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-800">Body Fat Estimator (U.S. Navy Method)</h3>
                        <span className="text-sm px-3 py-1 bg-pink-100 text-pink-700 rounded-full font-medium">
                            Professional Assessment
                        </span>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* Controls Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <label className="text-sm font-medium text-slate-600 mb-2 block">Gender</label>
                            <select 
                                value={gender} 
                                onChange={(e) => setGender(e.target.value)} 
                                className="w-full bg-slate-50 text-slate-800 p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all"
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-slate-600 mb-2 block">Height: {height} cm</label>
                                <input 
                                    type="range" 
                                    min="120" 
                                    max="220" 
                                    value={height} 
                                    onChange={(e) => setHeight(Number(e.target.value))}
                                    className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    style={{
                                        background: `linear-gradient(to right, #ec4899 0%, #ec4899 ${((height - 120) / (220 - 120)) * 100}%, #e2e8f0 ${((height - 120) / (220 - 120)) * 100}%, #e2e8f0 100%)`
                                    }}
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-slate-600 mb-2 block">Waist: {waist} cm</label>
                                <input 
                                    type="range" 
                                    min="60" 
                                    max="150" 
                                    value={waist} 
                                    onChange={(e) => setWaist(Number(e.target.value))}
                                    className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    style={{
                                        background: `linear-gradient(to right, #ec4899 0%, #ec4899 ${((waist - 60) / (150 - 60)) * 100}%, #e2e8f0 ${((waist - 60) / (150 - 60)) * 100}%, #e2e8f0 100%)`
                                    }}
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-slate-600 mb-2 block">Neck: {neck} cm</label>
                                <input 
                                    type="range" 
                                    min="25" 
                                    max="50" 
                                    value={neck} 
                                    onChange={(e) => setNeck(Number(e.target.value))}
                                    className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    style={{
                                        background: `linear-gradient(to right, #ec4899 0%, #ec4899 ${((neck - 25) / (50 - 25)) * 100}%, #e2e8f0 ${((neck - 25) / (50 - 25)) * 100}%, #e2e8f0 100%)`
                                    }}
                                />
                            </div>
                            {gender === 'female' && (
                                <div>
                                    <label className="text-sm font-medium text-slate-600 mb-2 block">Hip: {hip} cm</label>
                                    <input 
                                        type="range" 
                                        min="70" 
                                        max="150" 
                                        value={hip} 
                                        onChange={(e) => setHip(Number(e.target.value))}
                                        className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-500"
                                        style={{
                                            background: `linear-gradient(to right, #ec4899 0%, #ec4899 ${((hip - 70) / (150 - 70)) * 100}%, #e2e8f0 ${((hip - 70) / (150 - 70)) * 100}%, #e2e8f0 100%)`
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    
                    {/* Results Section */}
                    <div className="text-center">
                        <p className="text-slate-600 text-sm uppercase tracking-wide mb-2">Estimated Body Fat</p>
                        <p className="text-6xl sm:text-7xl font-black bg-gradient-to-br from-slate-800 to-pink-600 bg-clip-text text-transparent mb-2">{bodyFat}%</p>
                        <p className={`text-lg font-bold ${getCategoryColor()}`}>{category}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BodyFatCalculator;
