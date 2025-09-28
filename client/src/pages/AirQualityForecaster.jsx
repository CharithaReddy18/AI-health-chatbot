import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// Enhanced Medical-themed Floating Elements
const MedicalFloatingElements = ({ aqi }) => {
  const getElementConfig = (aqi) => {
    if (aqi <= 50) return { 
      color: 'from-emerald-400/20 to-teal-400/20', 
      icons: ['🌿', '💨', '🌱', '✨'], 
      count: 8,
      speed: 0.5 
    };
    if (aqi <= 100) return { 
      color: 'from-yellow-400/25 to-orange-400/25', 
      icons: ['⚠️', '💨', '🌤️', '😷'], 
      count: 12,
      speed: 1 
    };
    if (aqi <= 150) return { 
      color: 'from-orange-400/30 to-red-400/30', 
      icons: ['🚨', '😷', '🏥', '⚠️'], 
      count: 16,
      speed: 1.5 
    };
    return { 
      color: 'from-red-400/35 to-red-600/35', 
      icons: ['🚨', '🏥', '⚠️', '😷'], 
      count: 20,
      speed: 2 
    };
  };

  const config = getElementConfig(aqi);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(config.count)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-8 h-8 rounded-full bg-gradient-to-r ${config.color} opacity-60`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Medical Icons */}
      {config.icons.map((icon, i) => (
        <motion.div
          key={`icon-${i}`}
          className="absolute text-2xl opacity-20"
          style={{
            left: `${15 + i * 20}%`,
            top: `${10 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: i * 1.5,
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

// Enhanced AQI Card Component
const AQICard = ({ title, value, subtitle, aqiInfo, index, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: index * 0.15, 
        duration: 0.7,
        type: "spring",
        stiffness: 100 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white/90 backdrop-blur-md border border-white/60 rounded-2xl p-6 hover:bg-white transition-all duration-500 overflow-hidden"
      style={{
        boxShadow: isHovered 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.15)' 
          : '0 8px 25px -8px rgba(0, 0, 0, 0.1)'
      }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Animated gradient border */}
      <motion.div
        className={`absolute -inset-0.5 bg-gradient-to-r ${aqiInfo.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        animate={{
          background: isHovered 
            ? [`linear-gradient(45deg, ${aqiInfo.colors[0]}, ${aqiInfo.colors[1]})`,
               `linear-gradient(45deg, ${aqiInfo.colors[1]}, ${aqiInfo.colors[0]})`]
            : `linear-gradient(45deg, ${aqiInfo.colors[0]}, ${aqiInfo.colors[1]})`
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      <div className="relative z-10 text-center">
        {/* Icon */}
        <motion.div
          className={`w-12 h-12 bg-gradient-to-br ${aqiInfo.gradient} rounded-2xl flex items-center justify-center text-white text-xl mx-auto mb-4 shadow-lg`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          {icon}
        </motion.div>
        
        {/* Title */}
        <p className="text-sm font-medium text-slate-600 mb-2">{title}</p>
        
        {/* Value */}
        <motion.p
          className={`text-3xl font-black ${aqiInfo.textColor} mb-1`}
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            color: isHovered ? aqiInfo.hoverColor : aqiInfo.textColor
          }}
        >
          {value}
        </motion.p>
        
        {/* Subtitle */}
        {subtitle && (
          <p className={`text-xs font-semibold ${aqiInfo.textColor} opacity-80`}>
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
};

// Enhanced Recommendation Card
const RecommendationCard = ({ recommendation, index, aqiInfo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm border border-white/60 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
      whileHover={{ x: 8 }}
    >
      <motion.div
        className={`w-8 h-8 bg-gradient-to-br ${aqiInfo.gradient} rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md`}
        whileHover={{ rotate: 180, scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        ✓
      </motion.div>
      
      <div className="flex-1">
        <p className="text-slate-700 text-sm leading-relaxed group-hover:text-slate-900 transition-colors">
          {recommendation}
        </p>
      </div>
    </motion.div>
  );
};

// Enhanced Forecast Card
const ForecastCard = ({ day, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getAqiInfo = (aqi) => {
    if (aqi <= 50) return { 
      level: "Good", 
      gradient: "from-emerald-500 to-teal-500",
      textColor: "text-emerald-600",
      bgColor: "from-emerald-50 to-teal-50",
      colors: ['#10b981', '#14b8a6']
    };
    if (aqi <= 100) return { 
      level: "Moderate", 
      gradient: "from-yellow-500 to-orange-500",
      textColor: "text-yellow-600",
      bgColor: "from-yellow-50 to-orange-50",
      colors: ['#f59e0b', '#f97316']
    };
    if (aqi <= 150) return { 
      level: "Unhealthy", 
      gradient: "from-orange-500 to-red-500",
      textColor: "text-orange-600",
      bgColor: "from-orange-50 to-red-50",
      colors: ['#f97316', '#ef4444']
    };
    return { 
      level: "Hazardous", 
      gradient: "from-red-500 to-red-700",
      textColor: "text-red-600",
      bgColor: "from-red-50 to-red-100",
      colors: ['#ef4444', '#dc2626']
    };
  };

  const aqiInfo = getAqiInfo(day.aqi);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: index * 0.2, 
        duration: 0.6,
        type: "spring",
        stiffness: 120
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative bg-gradient-to-br ${aqiInfo.bgColor} border border-white/60 rounded-2xl p-6 text-center group cursor-pointer overflow-hidden`}
      whileHover={{ y: -8, scale: 1.05 }}
      style={{
        boxShadow: isHovered 
          ? `0 20px 40px -12px ${aqiInfo.colors[0]}40`
          : '0 4px 15px -4px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Animated background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${aqiInfo.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />
      
      <div className="relative z-10">
        <motion.p 
          className="font-bold text-slate-800 text-lg mb-3"
          animate={{ scale: isHovered ? 1.1 : 1 }}
        >
          {day.day}
        </motion.p>
        
        <motion.p
          className={`text-4xl font-black ${aqiInfo.textColor} mb-2`}
          animate={{ 
            scale: isHovered ? 1.2 : 1,
            rotateY: isHovered ? 360 : 0
          }}
          transition={{ duration: 0.6 }}
        >
          {day.aqi}
        </motion.p>
        
        <p className={`text-xs font-semibold ${aqiInfo.textColor} opacity-80`}>
          {aqiInfo.level}
        </p>
        
        {/* Weather icon based on AQI */}
        <motion.div
          className="mt-3 text-2xl opacity-70"
          animate={{ 
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.2 : 1
          }}
          transition={{ duration: 0.8 }}
        >
          {day.aqi <= 50 ? '🌟' : day.aqi <= 100 ? '⛅' : day.aqi <= 150 ? '🌫️' : '🚨'}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Main Air Quality Forecaster
const AirQualityForecaster = () => {
  const [weatherData, setWeatherData] = useState({
    location: "Dhanbad, Jharkhand",
    aqi: 85,
    pollen: "Moderate",
    uvIndex: "High",
    recommendations: [
      "Consider wearing a mask when outdoors for extended periods",
      "Perfect weather for indoor workouts and activities",
      "Keep windows closed to maintain clean indoor air quality",
      "Limit outdoor exposure during peak pollution hours (6-10 AM)"
    ],
    forecast: [
      { day: "Today", aqi: 85 },
      { day: "Tomorrow", aqi: 72 },
      { day: "Sunday", aqi: 58 },
      { day: "Monday", aqi: 91 },
    ]
  });

  const headerRef = useRef(null);
  const mainRef = useRef(null);
  const forecastRef = useRef(null);
  
  const headerInView = useInView(headerRef, { once: true, threshold: 0.3 });
  const mainInView = useInView(mainRef, { once: true, threshold: 0.3 });
  const forecastInView = useInView(forecastRef, { once: true, threshold: 0.3 });

  const getAqiInfo = (aqi) => {
    if (aqi <= 50) return { 
      level: "Good", 
      gradient: "from-emerald-500 to-teal-500",
      textColor: "text-emerald-600",
      hoverColor: "#059669",
      bgGradient: "from-emerald-50 to-teal-50",
      colors: ['#10b981', '#14b8a6']
    };
    if (aqi <= 100) return { 
      level: "Moderate", 
      gradient: "from-yellow-500 to-orange-500",
      textColor: "text-yellow-600",
      hoverColor: "#d97706",
      bgGradient: "from-yellow-50 to-orange-50",
      colors: ['#f59e0b', '#f97316']
    };
    if (aqi <= 150) return { 
      level: "Unhealthy for Sensitive Groups", 
      gradient: "from-orange-500 to-red-500",
      textColor: "text-orange-600",
      hoverColor: "#dc2626",
      bgGradient: "from-orange-50 to-red-50",
      colors: ['#f97316', '#ef4444']
    };
    return { 
      level: "Unhealthy", 
      gradient: "from-red-500 to-red-700",
      textColor: "text-red-600",
      hoverColor: "#b91c1c",
      bgGradient: "from-red-50 to-red-100",
      colors: ['#ef4444', '#dc2626']
    };
  };

  const aqiInfo = getAqiInfo(weatherData.aqi);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 text-slate-800 overflow-x-hidden">
      {/* Enhanced floating medical elements */}
      <MedicalFloatingElements aqi={weatherData.aqi} />
      
      {/* Enhanced background gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          <div className={`w-full h-full bg-gradient-to-r ${aqiInfo.bgGradient} rounded-full blur-3xl`}></div>
        </motion.div>
      </div>

      <div className="relative z-10 pt-16 sm:pt-24 pb-12 px-4 sm:px-6">
        
        {/* Enhanced Header */}
        <motion.header
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-6xl mx-auto text-center mb-12"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-md border border-white/60 rounded-full mb-6 shadow-lg"
          >
            <motion.div 
              className={`w-3 h-3 bg-gradient-to-r ${aqiInfo.gradient} rounded-full`}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-semibold text-slate-700">Real-time Air Quality Monitoring</span>
            <div className="px-2 py-0.5 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-full">
              <span className="text-xs font-bold text-teal-700">LIVE</span>
            </div>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight"
          >
            Air Quality
            <br />
            <span className={`bg-gradient-to-r ${aqiInfo.gradient} bg-clip-text text-transparent`}>
              Health Monitor
            </span>
          </motion.h1>
          
          {/* Location and Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-600"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xs">
                📍
              </div>
              <span className="font-semibold">{weatherData.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white text-xs">
                🕐
              </div>
              <span>Thursday, 7:52 PM</span>
            </div>
          </motion.div>
        </motion.header>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto">
          
          {/* Main AQI Display */}
          <motion.section
            ref={mainRef}
            initial={{ opacity: 0, y: 50 }}
            animate={mainInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-white/80 backdrop-blur-md border border-white/60 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
              
              {/* Main AQI Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
                
                {/* AQI Display */}
                <div className="text-center lg:text-left">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={mainInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    <p className="text-slate-500 text-lg mb-2 font-medium">Air Quality Index</p>
                    
                    <motion.div
                      className="relative inline-block"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.p
                        className={`text-8xl sm:text-9xl font-black ${aqiInfo.textColor} leading-none`}
                        animate={{ 
                          textShadow: [
                            `0 0 20px ${aqiInfo.colors[0]}40`,
                            `0 0 40px ${aqiInfo.colors[1]}40`,
                            `0 0 20px ${aqiInfo.colors[0]}40`
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {weatherData.aqi}
                      </motion.p>
                      
                      {/* Floating AQI level badge */}
                      <motion.div
                        className={`absolute -top-4 -right-4 px-3 py-1 bg-gradient-to-r ${aqiInfo.gradient} text-white rounded-full text-xs font-bold shadow-lg`}
                        animate={{
                          y: [0, -5, 0],
                          rotate: [0, 2, -2, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        AQI
                      </motion.div>
                    </motion.div>
                    
                    <motion.p
                      className={`text-2xl font-bold ${aqiInfo.textColor} mt-4`}
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {aqiInfo.level}
                    </motion.p>
                  </motion.div>
                </div>
                
                {/* Additional Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <AQICard
                    title="Pollen Count"
                    value={weatherData.pollen}
                    aqiInfo={aqiInfo}
                    index={0}
                    icon="🌸"
                  />
                  <AQICard
                    title="UV Index"
                    value={weatherData.uvIndex}
                    aqiInfo={aqiInfo}
                    index={1}
                    icon="☀️"
                  />
                </div>
              </div>

              {/* Health Recommendations */}
              <div className="border-t border-slate-200 pt-8">
                <motion.h3
                  className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={mainInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white">
                    🏥
                  </div>
                  Health Recommendations
                </motion.h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {weatherData.recommendations.map((rec, index) => (
                    <RecommendationCard
                      key={index}
                      recommendation={rec}
                      index={index}
                      aqiInfo={aqiInfo}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Enhanced Forecast Section */}
          <motion.section
            ref={forecastRef}
            initial={{ opacity: 0, y: 50 }}
            animate={forecastInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={forecastInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                4-Day Air Quality Forecast
              </motion.h2>
              <motion.p
                className="text-slate-600 text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={forecastInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                Plan your activities based on predicted air quality levels
              </motion.p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {weatherData.forecast.map((day, index) => (
                <ForecastCard
                  key={index}
                  day={day}
                  index={index}
                />
              ))}
            </div>
          </motion.section>

          {/* Medical Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity }}
              >
                ⚕️
              </motion.div>
              <div>
                <h4 className="font-bold text-blue-800 text-lg mb-2">Health Advisory</h4>
                <p className="text-blue-700 leading-relaxed">
                  Air quality data is provided for general information purposes. Individual sensitivity to air pollution varies. 
                  Consult healthcare professionals for personalized health advice, especially if you have respiratory conditions, 
                  heart disease, or other health concerns that may be affected by air quality.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AirQualityForecaster;
