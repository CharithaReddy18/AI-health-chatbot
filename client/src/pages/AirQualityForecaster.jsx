import React, { useState, useEffect, useRef } from 'react';

// --- Particle Animation Component ---
const ParticleCanvas = ({ aqi }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        
        const getParticleConfig = () => {
            if (aqi <= 50) return { color: "rgba(0, 255, 255, 0.7)", speed: 0.5, count: 50 }; // Good - Cyan
            if (aqi <= 100) return { color: "rgba(255, 255, 0, 0.7)", speed: 1, count: 75 }; // Moderate - Yellow
            if (aqi <= 150) return { color: "rgba(255, 165, 0, 0.7)", speed: 1.5, count: 100 }; // Unhealthy for Sensitive - Orange
            return { color: "rgba(255, 0, 0, 0.7)", speed: 2, count: 125 }; // Unhealthy - Red
        };

        const config = getParticleConfig();

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = [];
            for (let i = 0; i < config.count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * config.speed,
                    vy: (Math.random() - 0.5) * config.speed,
                    radius: Math.random() * 1.5 + 1,
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = config.color;

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        animate();
        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [aqi]);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};


// --- Main Air Quality Forecaster Page ---
const AirQualityForecaster = () => {
    // Mock data - in a real app, this would come from an API call
    const [weatherData, setWeatherData] = useState({
        location: "Dhanbad, Jharkhand",
        aqi: 85,
        pollen: "Moderate",
        uvIndex: "High",
        recommendations: [
            "Consider wearing a mask outdoors.",
            "Good day for indoor workouts.",
            "Keep windows closed to reduce indoor pollutants."
        ],
        forecast: [
            { day: "Fri", aqi: 90 },
            { day: "Sat", aqi: 75 },
            { day: "Sun", aqi: 60 },
        ]
    });

    const getAqiInfo = (aqi) => {
        if (aqi <= 50) return { level: "Good", color: "text-cyan-400", bg: "bg-cyan-500/20", border: "border-cyan-500/30" };
        if (aqi <= 100) return { level: "Moderate", color: "text-yellow-400", bg: "bg-yellow-500/20", border: "border-yellow-500/30" };
        if (aqi <= 150) return { level: "Unhealthy for Sensitive Groups", color: "text-orange-400", bg: "bg-orange-500/20", border: "border-orange-500/30" };
        return { level: "Unhealthy", color: "text-red-400", bg: "bg-red-500/20", border: "border-red-500/30" };
    };

    const aqiInfo = getAqiInfo(weatherData.aqi);

    return (
        <div className="relative bg-slate-900 pt-20 min-h-screen text-white overflow-hidden">
            <ParticleCanvas aqi={weatherData.aqi} />
            
            <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
                <div className={`w-full max-w-4xl bg-slate-800/60 backdrop-blur-2xl border ${aqiInfo.border} rounded-3xl shadow-2xl p-8`}>
                    {/* Header */}
                    <div>
                        <p className="text-lg text-slate-300">{weatherData.location}</p>
                        <p className="text-sm text-slate-400">Thursday, 7:52 PM</p>
                    </div>

                    {/* Main Display */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                        <div className="text-center md:text-left">
                            <p className="text-slate-400">Air Quality Index (AQI)</p>
                            <p className={`text-8xl font-extrabold ${aqiInfo.color}`}>{weatherData.aqi}</p>
                            <p className={`text-2xl font-bold ${aqiInfo.color}`}>{aqiInfo.level}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div className={`p-4 rounded-xl ${aqiInfo.bg}`}>
                                <p className="text-slate-300 text-sm">Pollen</p>
                                <p className="text-3xl font-bold">{weatherData.pollen}</p>
                            </div>
                            <div className={`p-4 rounded-xl ${aqiInfo.bg}`}>
                                <p className="text-slate-300 text-sm">UV Index</p>
                                <p className="text-3xl font-bold">{weatherData.uvIndex}</p>
                            </div>
                        </div>
                    </div>

                    {/* Recommendations */}
                    <div>
                        <h3 className="font-bold text-lg">Health Recommendations</h3>
                        <ul className="mt-2 space-y-2">
                            {weatherData.recommendations.map((rec, index) => (
                                <li key={index} className="flex items-center text-slate-300">
                                    <svg className={`w-4 h-4 mr-3 flex-shrink-0 ${aqiInfo.color}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    {rec}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Forecast */}
                    <div className="mt-8 border-t border-slate-700 pt-6">
                         <h3 className="font-bold text-lg text-center">3-Day AQI Forecast</h3>
                         <div className="grid grid-cols-3 gap-4 mt-4">
                            {weatherData.forecast.map((day, index) => {
                                const dayAqiInfo = getAqiInfo(day.aqi);
                                return (
                                    <div key={index} className={`p-4 rounded-xl text-center ${dayAqiInfo.bg}`}>
                                        <p className="font-bold text-slate-200">{day.day}</p>
                                        <p className={`text-3xl font-bold ${dayAqiInfo.color}`}>{day.aqi}</p>
                                    </div>
                                )
                            })}
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AirQualityForecaster;
