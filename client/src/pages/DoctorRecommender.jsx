import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import { predictDisease } from "../api/ChatAPI";

// Enhanced Specialist Card with micro-animations
const SpecialistCard = ({ specialist, index, onConsult }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 30, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -30, scale: 0.95 }}
      transition={{ 
        delay: index * 0.15, 
        duration: 0.7,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white/90 backdrop-blur-md border border-white/40 rounded-2xl p-5 hover:bg-white transition-all duration-500 overflow-hidden cursor-pointer"
      style={{
        boxShadow: isHovered 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(20, 184, 166, 0.1)' 
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated gradient border */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        animate={{
          background: isHovered 
            ? ['linear-gradient(45deg, #14b8a6, #10b981, #06b6d4)', 
               'linear-gradient(45deg, #10b981, #06b6d4, #14b8a6)', 
               'linear-gradient(45deg, #06b6d4, #14b8a6, #10b981)']
            : 'linear-gradient(45deg, #14b8a6, #10b981, #06b6d4)'
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400 rounded-full opacity-0 group-hover:opacity-60"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={isHovered ? {
              y: [0, -50, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10">
        {/* Header with enhanced animation */}
        <motion.div 
          className="flex items-center gap-4 mb-4"
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="relative"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 via-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-lg shadow-lg">
              🩺
            </div>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-2xl opacity-0 group-hover:opacity-30 blur"
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          <div className="flex-1">
            <motion.h3 
              className="font-bold text-slate-800 text-lg leading-tight"
              animate={{ color: isHovered ? '#0f766e' : '#1e293b' }}
            >
              {specialist.Specialist || "General Practitioner"}
            </motion.h3>
            <motion.div
              className="flex items-center gap-2 mt-1"
              initial={{ opacity: 0.7 }}
              animate={{ opacity: isHovered ? 1 : 0.7 }}
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-emerald-600 font-medium">Available for Consultation</span>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Description with fade animation */}
        <motion.p 
          className="text-sm text-slate-600 mb-4 leading-relaxed line-clamp-3"
          animate={{ opacity: isHovered ? 1 : 0.8 }}
        >
          {specialist.Description || "Comprehensive medical evaluation with evidence-based treatment recommendations and personalized care approach."}
        </motion.p>
        
        {/* Enhanced condition display */}
        <motion.div 
          className="space-y-3 mb-5"
          animate={{ y: isHovered ? -2 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="relative z-10">
              <p className="text-xs font-semibold text-blue-700 mb-1">Suggested Condition</p>
              <p className="text-sm text-slate-800 font-medium">{specialist.Disease}</p>
            </div>
          </div>
          
          {/* Enhanced confidence meter */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-600">Match Confidence</span>
              <motion.span 
                className="text-sm font-bold text-slate-800"
                animate={{ 
                  scale: isHovered ? 1.1 : 1,
                  color: isHovered ? '#0f766e' : '#1e293b'
                }}
              >
                {specialist.Chances.toFixed(0)}%
              </motion.span>
            </div>
            <div className="relative h-2 bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${specialist.Chances}%` }}
                transition={{ duration: 1.5, delay: index * 0.1 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full"
                animate={{
                  x: isHovered ? ['0%', '100%', '0%'] : '0%'
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
        
        {/* Enhanced action button */}
        <motion.button
          className="w-full relative overflow-hidden py-3 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 text-white rounded-xl font-semibold text-sm shadow-lg"
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 10px 30px -10px rgba(20, 184, 166, 0.4)'
          }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onConsult?.(specialist)}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
            animate={{
              x: isHovered ? ['0%', '100%', '0%'] : '0%'
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="relative z-10">Schedule Consultation</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

const DoctorRecommender = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState(false);
  
  const textareaRef = useRef(null);
  const resultRef = useRef(null);

  // Enhanced spring physics for smoother animations
  const springConfig = { 
    type: "spring", 
    stiffness: 120, 
    damping: 20, 
    mass: 1.2 
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setSearched(true);
    setLoading(true);

    // Smooth scroll to results
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);

    try {
      const res = await predictDisease([searchTerm.trim()]);
      setResults(res);
    } catch (err) {
      console.error("Error fetching doctor recommendations:", err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickSymptom = (symptom) => {
    setSearchTerm(symptom);
    textareaRef.current?.focus();
  };

  const popularSymptoms = [
    { text: "Persistent headaches", icon: "🤕", color: "from-red-400 to-pink-400" },
    { text: "Chest discomfort", icon: "💔", color: "from-orange-400 to-red-400" },
    { text: "Unusual fatigue", icon: "😴", color: "from-blue-400 to-indigo-400" },
    { text: "Skin changes", icon: "✋", color: "from-purple-400 to-pink-400" },
    { text: "Digestive issues", icon: "🤢", color: "from-yellow-400 to-orange-400" },
    { text: "Sleep problems", icon: "🌙", color: "from-indigo-400 to-purple-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 overflow-hidden">
      {/* Enhanced floating background with 3D effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          <div className="w-full h-full bg-gradient-to-r from-teal-200/40 to-emerald-200/40 rounded-full blur-3xl"></div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 opacity-25"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 5 }}
        >
          <div className="w-full h-full bg-gradient-to-r from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl"></div>
        </motion.div>
        
        {/* Floating medical particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-4 h-4 rounded-full opacity-20`}
            style={{
              background: `linear-gradient(45deg, #14b8a6, #10b981)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col xl:flex-row min-h-screen">
        
        {/* LEFT SECTION - Ultra Modern Design */}
        <motion.div 
          className="xl:w-[45%] flex flex-col justify-center p-4 sm:p-6 lg:p-8 xl:p-12 2xl:p-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ...springConfig }}
        >
          <div className="max-w-2xl mx-auto xl:mx-0 w-full">
            
            {/* Floating header elements */}
            <motion.div
              className="mb-6 lg:mb-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Enhanced status badge */}
              <motion.div
                className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-md border border-teal-200/50 rounded-full mb-6 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="w-3 h-3 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-semibold bg-gradient-to-r from-teal-700 to-emerald-700 bg-clip-text text-transparent">
                  Advanced AI Medical Assistant
                </span>
                <motion.div
                  className="px-2 py-0.5 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full"
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-xs font-bold text-emerald-700">BETA</span>
                </motion.div>
              </motion.div>
              
              {/* Enhanced main title with gradient animation */}
              <motion.h1
                className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-6 leading-none"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.span 
                  className="block text-slate-800 mb-2"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Smart Medical
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  Consultation
                </motion.span>
              </motion.h1>
              
              {/* Enhanced subtitle with typing effect */}
              <motion.p
                className="text-lg sm:text-xl xl:text-2xl text-slate-600 leading-relaxed font-light mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Get personalized specialist recommendations powered by advanced AI analysis. 
                <motion.span
                  className="block mt-2 text-slate-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  Professional guidance at your fingertips.
                </motion.span>
              </motion.p>

              {/* Enhanced notice cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <motion.div
                  className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 rounded-2xl backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="flex items-start gap-3">
                    <motion.div 
                      className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center text-white text-xs flex-shrink-0"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                    >
                      ⚠
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-amber-800 text-sm mb-1">AI Guidance</h4>
                      <p className="text-amber-700 text-xs leading-relaxed">
                        Provides preliminary recommendations. Always consult healthcare professionals.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200/50 rounded-2xl backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-start gap-3">
                    <motion.div 
                      className="w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xs flex-shrink-0"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        boxShadow: ['0 0 0 0px rgba(239, 68, 68, 0.4)', '0 0 0 10px rgba(239, 68, 68, 0)', '0 0 0 0px rgba(239, 68, 68, 0)']
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      🚨
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-red-800 text-sm mb-1">Emergency</h4>
                      <p className="text-red-700 text-xs leading-relaxed">
                        Life-threatening symptoms? Call 911/108 immediately.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Ultra-enhanced search form */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form onSubmit={handleSearch} className="space-y-6">
                <div className="relative group">
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Describe your symptoms in detail
                  </label>
                  
                  <motion.div 
                    className="relative"
                    animate={{ 
                      scale: focusedInput ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <textarea
                      ref={textareaRef}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onFocus={() => setFocusedInput(true)}
                      onBlur={() => setFocusedInput(false)}
                      placeholder="Example: I've been experiencing sharp, stabbing chest pain that worsens with deep breathing and physical activity. The pain started 3 days ago and is accompanied by shortness of breath..."
                      rows={5}
                      className="w-full px-6 py-4 bg-white/90 backdrop-blur-md border-2 border-slate-200/50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-400/30 focus:border-teal-400/60 transition-all duration-500 resize-none text-sm leading-relaxed shadow-lg hover:shadow-xl"
                      style={{
                        boxShadow: focusedInput 
                          ? '0 20px 40px -12px rgba(20, 184, 166, 0.2), 0 0 0 1px rgba(20, 184, 166, 0.2)'
                          : '0 4px 20px -8px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    
                    {/* Floating character counter */}
                    <motion.div
                      className="absolute bottom-4 right-4 px-2 py-1 bg-slate-100/80 rounded-lg text-xs text-slate-500"
                      animate={{ opacity: searchTerm.length > 20 ? 1 : 0.5 }}
                    >
                      {searchTerm.length} chars
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Enhanced submit button */}
                <motion.button
                  type="submit"
                  disabled={loading || !searchTerm.trim()}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 hover:from-teal-600 hover:via-emerald-600 hover:to-cyan-600 disabled:from-slate-400 disabled:to-slate-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-500 shadow-xl hover:shadow-2xl disabled:cursor-not-allowed group"
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    boxShadow: loading 
                      ? '0 8px 30px -8px rgba(148, 163, 184, 0.3)'
                      : '0 10px 40px -10px rgba(20, 184, 166, 0.4)'
                  }}
                >
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: loading ? 0 : ['0%', '100%', '200%']
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  <span className="relative z-10 text-lg">
                    {loading ? (
                      <div className="flex items-center justify-center gap-3">
                        <motion.div 
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Analyzing your symptoms...</span>
                      </div>
                    ) : (
                      <>
                        <motion.span
                          animate={{ opacity: [1, 0.8, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Get AI Specialist Recommendation
                        </motion.span>
                      </>
                    )}
                  </span>
                </motion.button>
              </form>

              {/* Enhanced quick examples with modern cards */}
              <motion.div 
                className="mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <p className="text-sm text-slate-500 mb-4 font-medium">Quick symptom examples:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-3">
                  {popularSymptoms.map((symptom, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuickSymptom(symptom.text)}
                      className="group flex items-center gap-3 p-3 bg-white/70 hover:bg-white border border-slate-200/50 rounded-xl text-left transition-all duration-300 backdrop-blur-sm"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: '0 8px 25px -8px rgba(0, 0, 0, 0.15)'
                      }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                    >
                      <motion.div 
                        className={`w-8 h-8 bg-gradient-to-r ${symptom.color} rounded-lg flex items-center justify-center text-white text-sm`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {symptom.icon}
                      </motion.div>
                      <span className="text-sm text-slate-700 group-hover:text-slate-900 font-medium">
                        {symptom.text}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SECTION - Ultra Modern Results */}
        <motion.div 
          ref={resultRef}
          className="xl:w-[55%] bg-white/40 backdrop-blur-xl border-l border-white/30 flex flex-col relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ...springConfig }}
        >
          {/* Modern mesh gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-blue-50/40 to-emerald-50/60 pointer-events-none"></div>
          
          <div className="relative z-10 flex-1 flex flex-col p-4 sm:p-6 lg:p-8 xl:p-10">
            
            <AnimatePresence mode="wait">
              {!searched && (
                <motion.div
                  key="initial"
                  className="flex-1 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-center max-w-lg">
                    <motion.div 
                      className="relative mb-8"
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ duration: 6, repeat: Infinity }}
                    >
                      <div className="w-32 h-32 bg-gradient-to-br from-teal-100 via-emerald-100 to-cyan-100 rounded-3xl flex items-center justify-center text-6xl mx-auto shadow-2xl">
                        🩺
                      </div>
                      <motion.div
                        className="absolute -inset-4 bg-gradient-to-r from-teal-400/20 to-emerald-400/20 rounded-3xl blur-xl"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      />
                    </motion.div>
                    
                    <motion.h3
                      className="text-2xl xl:text-3xl font-bold text-slate-800 mb-4"
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      AI Medical Analysis Ready
                    </motion.h3>
                    
                    <motion.p
                      className="text-slate-600 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      Describe your symptoms in detail for personalized specialist recommendations. 
                      Our advanced AI will analyze your input and provide professional medical guidance.
                    </motion.p>
                    
                    {/* Floating indicators */}
                    <motion.div 
                      className="flex justify-center gap-4 mt-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      {['🧠', '⚕️', '📊'].map((icon, i) => (
                        <motion.div
                          key={i}
                          className="w-12 h-12 bg-white/80 rounded-2xl flex items-center justify-center text-xl shadow-lg"
                          animate={{
                            y: [0, -10, 0],
                            rotateY: [0, 180, 360]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.5
                          }}
                        >
                          {icon}
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {loading && (
                <motion.div
                  key="loading"
                  className="flex-1 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="relative mb-8"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-24 h-24 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl flex items-center justify-center text-white text-3xl mx-auto shadow-2xl">
                        🔬
                      </div>
                      <motion.div
                        className="absolute -inset-2 border-4 border-teal-400/30 rounded-3xl"
                        animate={{ 
                          rotate: -360,
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                          scale: { duration: 1, repeat: Infinity }
                        }}
                      />
                    </motion.div>
                    
                    <motion.h3
                      className="text-xl font-bold text-slate-800 mb-3"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      AI Medical Analysis in Progress
                    </motion.h3>
                    
                    <motion.p
                      className="text-slate-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Processing your symptoms with advanced medical algorithms...
                    </motion.p>
                    
                    {/* Loading progress indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                      {[0, 1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          className="w-3 h-3 bg-teal-500 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.15
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {searched && !loading && results.length > 0 && (
                <motion.div
                  key="results"
                  className="flex-1 overflow-hidden flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl xl:text-3xl font-bold text-slate-800">
                        Specialist Recommendations
                      </h2>
                      <motion.div
                        className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {results.length} Found
                      </motion.div>
                    </div>
                    
                    <motion.p 
                      className="text-slate-600 text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      Analysis based on: <span className="font-medium text-slate-700">"{searchTerm.substring(0, 80)}..."</span>
                    </motion.p>
                  </motion.div>
                  
                  <div 
                    className="flex-1 overflow-y-auto space-y-4 pr-2 pb-4" 
                    style={{ maxHeight: 'calc(100vh - 200px)' }}
                  >
                    <AnimatePresence>
                      {results.map((specialist, index) => (
                        <SpecialistCard 
                          key={`${specialist.Specialist}-${index}`}
                          specialist={specialist} 
                          index={index}
                          onConsult={(spec) => console.log('Consulting:', spec)}
                        />
                      ))}
                    </AnimatePresence>
                  </div>

                  <motion.div 
                    className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="flex items-start gap-3">
                      <motion.div
                        className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 10, repeat: Infinity }}
                      >
                        💡
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-blue-800 text-sm mb-1">Next Steps</h4>
                        <p className="text-blue-700 text-xs leading-relaxed">
                          These AI-generated recommendations are preliminary. Schedule a consultation 
                          with your preferred specialist for comprehensive evaluation and proper diagnosis.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {searched && !loading && results.length === 0 && (
                <motion.div
                  key="no-results"
                  className="flex-1 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-center max-w-md">
                    <motion.div 
                      className="w-20 h-20 bg-gradient-to-br from-slate-400 to-slate-500 rounded-3xl flex items-center justify-center text-white text-3xl mx-auto mb-6 shadow-xl"
                      animate={{ 
                        rotateY: [0, 180, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      🤔
                    </motion.div>
                    
                    <motion.h3
                      className="text-xl font-bold text-slate-800 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      No Specific Match Found
                    </motion.h3>
                    
                    <motion.p
                      className="text-slate-600 leading-relaxed mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Our AI couldn't identify specific specialists for your symptoms. 
                      Consider consulting a General Practitioner for initial evaluation and guidance.
                    </motion.p>
                    
                    <motion.button
                      onClick={() => {setSearchTerm(''); setSearched(false);}}
                      className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Try Different Symptoms
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DoctorRecommender;
