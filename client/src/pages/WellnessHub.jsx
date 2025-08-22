import React, { useState, useEffect } from 'react';

// --- BMI Calculator Component ---
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
        // Scale BMI (10-40) to rotation angle (-90 to 90 degrees)
        const clampedBmi = Math.max(10, Math.min(40, bmi));
        return (clampedBmi - 10) / 30 * 180 - 90;
    };
    
    const getBmiColor = () => {
        if (category === 'Underweight') return 'text-yellow-400';
        if (category === 'Normal weight') return 'text-green-400';
        if (category === 'Overweight') return 'text-orange-400';
        return 'text-red-500';
    };

    return (
        <div className="relative bg-slate-800/50 p-6 rounded-2xl border border-slate-700 backdrop-blur-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <h3 className="text-xl font-bold text-cyan-400">BMI Calculator</h3>
            <div className="h-40 w-full flex items-center justify-center my-4">
                <div className="relative w-48 h-24">
                    <div className="absolute bottom-0 left-0 w-full h-full border-4 border-slate-700 rounded-t-full border-b-0"></div>
                    <div className="absolute bottom-0 left-0 w-full h-full rounded-t-full overflow-hidden">
                         <div className="absolute bottom-0 left-0 w-1/4 h-full bg-yellow-400/50"></div>
                         <div className="absolute bottom-0 left-1/4 w-1/4 h-full bg-green-400/50"></div>
                         <div className="absolute bottom-0 left-2/4 w-1/4 h-full bg-orange-400/50"></div>
                         <div className="absolute bottom-0 left-3/4 w-1/4 h-full bg-red-500/50"></div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 w-1 h-4 bg-white rounded-full transition-transform duration-500" style={{ transform: `translateX(-50%) rotate(${getBmiRotation()}deg) translateY(-5rem)`}}></div>
                    <div className="absolute bottom-1 left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2"></div>
                </div>
            </div>
            <div className="text-center -mt-4">
                <p className="text-5xl font-extrabold text-white">{bmi}</p>
                <p className={`font-semibold ${getBmiColor()}`}>{category}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                    <label className="text-sm font-medium text-slate-400">Height: {height} cm</label>
                    <input type="range" min="120" max="220" value={height} onChange={e => setHeight(e.target.value)} className="w-full mt-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"/>
                </div>
                <div>
                    <label className="text-sm font-medium text-slate-400">Weight: {weight} kg</label>
                    <input type="range" min="40" max="150" value={weight} onChange={e => setWeight(e.target.value)} className="w-full mt-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"/>
                </div>
            </div>
        </div>
    );
};

// --- Daily Calorie Calculator ---
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
        setCalories((bmr * activity).toFixed(0));
    }, [age, gender, weight, height, activity]);

    return (
        <div className="relative bg-slate-800/50 p-6 rounded-2xl border border-slate-700 backdrop-blur-xl overflow-hidden hover:border-green-500/50 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
            <h3 className="text-xl font-bold text-green-400">Daily Calorie Needs</h3>
             <div className="text-center my-6">
                <p className="text-slate-400">Maintenance Calories</p>
                <p className="text-6xl font-extrabold text-white">{calories}</p>
                <p className="text-sm text-slate-500">kcal / day</p>
            </div>
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-medium text-slate-400">Age</label>
                        <input type="number" value={age} onChange={e => setAge(e.target.value)} className="w-full bg-slate-700 text-white mt-1 p-2 border border-slate-600 rounded-md"/>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-slate-400">Gender</label>
                        <select value={gender} onChange={e => setGender(e.target.value)} className="w-full bg-slate-700 text-white mt-1 p-2 border border-slate-600 rounded-md">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-slate-400">Height (cm)</label>
                        <input type="number" value={height} onChange={e => setHeight(e.target.value)} className="w-full bg-slate-700 text-white mt-1 p-2 border border-slate-600 rounded-md"/>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-slate-400">Weight (kg)</label>
                        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} className="w-full bg-slate-700 text-white mt-1 p-2 border border-slate-600 rounded-md"/>
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium text-slate-400">Activity Level</label>
                    <select value={activity} onChange={e => setActivity(parseFloat(e.target.value))} className="w-full bg-slate-700 text-white mt-1 p-2 border border-slate-600 rounded-md">
                        <option value={1.2}>Sedentary</option>
                        <option value={1.375}>Lightly active</option>
                        <option value={1.55}>Moderately active</option>
                        <option value={1.725}>Very active</option>
                        <option value={1.9}>Extra active</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

// --- Heart Rate Zone Calculator ---
const HeartRateCalculator = () => {
    const [age, setAge] = useState(30);
    const [zones, setZones] = useState({});

    useEffect(() => {
        const maxHr = 220 - age;
        setZones({
            max: `${maxHr} BPM`,
            moderate: `${Math.round(maxHr * 0.5)} - ${Math.round(maxHr * 0.7)} BPM`,
            cardio: `${Math.round(maxHr * 0.7)} - ${Math.round(maxHr * 0.85)} BPM`,
        });
    }, [age]);
    
    return (
        <div className="relative bg-slate-800/50 p-6 rounded-2xl border border-slate-700 backdrop-blur-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <h3 className="text-xl font-bold text-purple-400">Target Heart Rate Zones</h3>
             <div className="mt-4">
                <label className="text-sm font-medium text-slate-400">Your Age: {age}</label>
                <input type="range" min="18" max="80" value={age} onChange={e => setAge(e.target.value)} className="w-full mt-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"/>
            </div>
            <div className="text-center my-4">
                <p className="text-slate-400">Max Heart Rate</p>
                <p className="text-4xl font-extrabold text-white">{zones.max}</p>
            </div>
            <div className="mt-4 space-y-3">
                <div className="p-3 rounded-md bg-yellow-400/10 border border-yellow-400/30">
                    <p className="font-semibold text-yellow-400">Moderate Intensity (50-70%)</p>
                    <p className="font-bold text-white text-lg">{zones.moderate}</p>
                </div>
                 <div className="p-3 rounded-md bg-orange-400/10 border border-orange-400/30">
                    <p className="font-semibold text-orange-400">Cardio / Vigorous (70-85%)</p>
                    <p className="font-bold text-white text-lg">{zones.cardio}</p>
                </div>
            </div>
        </div>
    );
};

// --- Body Fat Calculator ---
const BodyFatCalculator = () => {
    const [gender, setGender] = useState('male');
    const [height, setHeight] = useState(170);
    const [waist, setWaist] = useState(80);
    const [neck, setNeck] = useState(38);
    const [hip, setHip] = useState(90); // Only for female
    const [bodyFat, setBodyFat] = useState(0);

    useEffect(() => {
        let fat = 0;
        if (gender === 'male' && height > 0 && waist > 0 && neck > 0) {
            fat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
        } else if (gender === 'female' && height > 0 && waist > 0 && neck > 0 && hip > 0) {
            fat = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
        }
        setBodyFat(fat > 0 ? fat.toFixed(1) : 0);
    }, [gender, height, waist, neck, hip]);

    return (
        <div className="relative bg-slate-800/50 p-6 rounded-2xl border border-slate-700 backdrop-blur-xl overflow-hidden hover:border-pink-500/50 transition-all duration-300 lg:col-span-3">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
            <h3 className="text-xl font-bold text-pink-400">Body Fat Estimator (U.S. Navy Method)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-4">
                <div className="md:col-span-2 grid grid-cols-2 gap-4">
                    <select value={gender} onChange={e => setGender(e.target.value)} className="col-span-2 w-full bg-slate-700 text-white p-2 border border-slate-600 rounded-md">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <div>
                        <label className="text-sm font-medium text-slate-400">Height (cm)</label>
                        <input type="number" value={height} onChange={e => setHeight(e.target.value)} className="w-full bg-slate-700 text-white mt-1 p-2 border border-slate-600 rounded-md"/>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-slate-400">Waist (cm)</label>
                        <input type="number" value={waist} onChange={e => setWaist(e.target.value)} className="w-full bg-slate-700 text-white mt-1 p-2 border border-slate-600 rounded-md"/>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-slate-400">Neck (cm)</label>
                        <input type="number" value={neck} onChange={e => setNeck(e.target.value)} className="w-full bg-slate-700 text-white mt-1 p-2 border border-slate-600 rounded-md"/>
                    </div>
                    {gender === 'female' && (
                        <div>
                            <label className="text-sm font-medium text-slate-400">Hip (cm)</label>
                            <input type="number" value={hip} onChange={e => setHip(e.target.value)} className="w-full bg-slate-700 text-white mt-1 p-2 border border-slate-600 rounded-md"/>
                        </div>
                    )}
                </div>
                <div className="text-center">
                    <p className="text-slate-400">Estimated Body Fat</p>
                    <p className="text-6xl font-extrabold text-white">{bodyFat}%</p>
                </div>
            </div>
        </div>
    );
};

// --- Main Wellness Hub Page ---
const WellnessHub = () => {
    return (
        <div className="bg-slate-900 pt-20 min-h-screen">
            {/* Page Header */}
            <div className="border-b border-slate-800">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        Wellness Hub
                    </h1>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                        Interactive tools to help you understand and monitor key health metrics.
                    </p>
                </div>
            </div>

            {/* Calculators Grid */}
            <div className="max-w-7xl mx-auto py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                    <BMICalculator />
                    <CalorieCalculator />
                    <HeartRateCalculator />
                    <BodyFatCalculator />
                </div>
            </div>
        </div>
    );
};

export default WellnessHub;
