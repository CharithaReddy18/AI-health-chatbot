import { useEffect, useState } from "react";

const SleepCalculator = () => {
    const [wakeUpTime, setWakeUpTime] = useState('07:00');
    const [bedtimes, setBedtimes] = useState([]);

    useEffect(() => {
        const calculateBedtimes = () => {
            const [hours, minutes] = wakeUpTime.split(':').map(Number);
            const wakeUpMinutes = hours * 60 + minutes;
            
            const cycleDuration = 90;
            const fallAsleepTime = 15;
            const cycles = [6, 5, 4];
            
            const times = cycles.map(cycleCount => {
                const totalSleepMinutes = cycleCount * cycleDuration;
                const bedtimeMinutes = wakeUpMinutes - totalSleepMinutes - fallAsleepTime;
                
                let bedHours = Math.floor(bedtimeMinutes / 60);
                let bedMins = bedtimeMinutes % 60;
                
                if (bedHours < 0) bedHours += 24;
                if (bedMins < 0) {
                    bedMins += 60;
                    bedHours -= 1;
                }
                
                const formattedTime = `${String(bedHours).padStart(2, '0')}:${String(bedMins).padStart(2, '0')}`;
                return { time: formattedTime, cycles: cycleCount, hours: cycleCount * 1.5 };
            });
            
            setBedtimes(times);
        };
        
        calculateBedtimes();
    }, [wakeUpTime]);

    return (
        <div className="group relative bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 w-full h-80 overflow-x-hidden overflow-y-scroll">
            {/* Hover Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none"></div>
            
            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                        😴
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="text-base font-bold text-slate-800 truncate">Sleep Cycle Calculator</h3>
                        <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full font-medium">
                            Optimal Bedtime
                        </span>
                    </div>
                </div>
                
                {/* Wake Up Time Input */}
                <div className="mb-4 flex-shrink-0">
                    <label className="text-xs font-medium text-slate-600 mb-2 block">Wake up time</label>
                    <input 
                        type="time" 
                        value={wakeUpTime} 
                        onChange={(e) => setWakeUpTime(e.target.value)} 
                        className="w-full bg-slate-50 text-slate-800 p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"
                    />
                </div>
                
                {/* Bedtime Suggestions - Flex grow to fill remaining space */}
                <div className="flex-grow flex flex-col justify-end space-y-2">
                    <p className="text-slate-600 text-xs font-medium mb-1">Suggested bedtimes:</p>
                    {bedtimes.map((bedtime, index) => (
                        <div key={index} className="p-3 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200">
                            <p className="font-bold text-slate-800 text-lg">{bedtime.time}</p>
                            <p className="text-indigo-700 text-xs">{bedtime.cycles} cycles • {bedtime.hours} hours</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SleepCalculator;
