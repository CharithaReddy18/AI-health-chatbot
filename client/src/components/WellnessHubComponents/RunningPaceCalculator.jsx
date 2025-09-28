import { useEffect, useState } from "react";

const RunningPaceCalculator = () => {
    const [distance, setDistance] = useState(5);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [pace, setPace] = useState({ min: 0, sec: 0 });
    const [speed, setSpeed] = useState(0);

    useEffect(() => {
        if (distance > 0) {
            const totalSeconds = (hours * 3600) + (minutes * 60) + parseInt(seconds);
            const totalMinutes = totalSeconds / 60;
            
            // Pace per kilometer
            const paceMinutes = totalMinutes / distance;
            const paceMin = Math.floor(paceMinutes);
            const paceSec = Math.round((paceMinutes - paceMin) * 60);
            
            setPace({ min: paceMin, sec: paceSec });
            
            // Speed in km/h
            const calculatedSpeed = (distance / totalMinutes) * 60;
            setSpeed(calculatedSpeed.toFixed(1));
        }
    }, [distance, hours, minutes, seconds]);

    return (
        <div className="group relative bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 w-full h-80 overflow-hidden">
            {/* Hover Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-lime-500 to-green-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none"></div>
            
            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-lime-500 to-green-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                        🏃
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="text-base font-bold text-slate-800 truncate">Running Pace</h3>
                        <span className="text-xs px-2 py-1 bg-lime-100 text-lime-700 rounded-full font-medium">
                            Performance
                        </span>
                    </div>
                </div>
                
                {/* Results Display */}
                <div className="grid grid-cols-2 gap-4 mb-4 flex-shrink-0">
                    <div className="text-center">
                        <p className="text-slate-600 text-xs">Pace per km</p>
                        <p className="text-2xl font-black text-slate-800">{pace.min}:{pace.sec.toString().padStart(2, '0')}</p>
                        <p className="text-lime-600 font-medium text-xs">min/km</p>
                    </div>
                    <div className="text-center">
                        <p className="text-slate-600 text-xs">Average Speed</p>
                        <p className="text-2xl font-black text-slate-800">{speed}</p>
                        <p className="text-lime-600 font-medium text-xs">km/h</p>
                    </div>
                </div>

                {/* Distance Control */}
                <div className="mb-4 flex-shrink-0">
                    <label className="text-xs font-medium text-slate-600 mb-2 block">Distance: {distance} km</label>
                    <input 
                        type="range" 
                        min="1" 
                        max="42.2" 
                        step="0.1" 
                        value={distance} 
                        onChange={(e) => setDistance(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-lime-500"
                        style={{
                            background: `linear-gradient(to right, #84cc16 0%, #84cc16 ${((distance - 1) / (42.2 - 1)) * 100}%, #e2e8f0 ${((distance - 1) / (42.2 - 1)) * 100}%, #e2e8f0 100%)`
                        }}
                    />
                </div>
                
                {/* Time Controls - Flex grow to fill remaining space */}
                <div className="flex-grow flex flex-col justify-end">
                    <div className="grid grid-cols-3 gap-2">
                        <div>
                            <label className="text-xs font-medium text-slate-600 mb-1 block">Hours</label>
                            <input 
                                type="number" 
                                min="0" 
                                max="12" 
                                value={hours} 
                                onChange={(e) => setHours(Number(e.target.value) || 0)} 
                                className="w-full bg-slate-50 text-slate-800 p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-slate-600 mb-1 block">Minutes</label>
                            <input 
                                type="number" 
                                min="0" 
                                max="59" 
                                value={minutes} 
                                onChange={(e) => setMinutes(Number(e.target.value) || 0)} 
                                className="w-full bg-slate-50 text-slate-800 p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-slate-600 mb-1 block">Seconds</label>
                            <input 
                                type="number" 
                                min="0" 
                                max="59" 
                                value={seconds} 
                                onChange={(e) => setSeconds(Number(e.target.value) || 0)} 
                                className="w-full bg-slate-50 text-slate-800 p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition-all"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RunningPaceCalculator;
