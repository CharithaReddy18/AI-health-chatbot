import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const RoadmapHero = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { 
    once: true, 
    threshold: 0.1,
    margin: "0px 0px -100px 0px"
  });

  // Force scroll to top on mount to prevent auto-scroll
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* FIXED: Changed from fixed to absolute positioning */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          <div className="w-full h-full bg-gradient-to-r from-teal-200/40 to-emerald-200/40 rounded-full blur-3xl"></div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 opacity-15"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 5 }}
        >
          <div className="w-full h-full bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-2xl"></div>
        </motion.div>
        
        {/* FIXED: Reduced number of floating icons and made them less aggressive */}
        {[
          { icon: '🚀', top: '15%', left: '8%', delay: 0 },
          { icon: '⚛️', top: '25%', right: '10%', delay: 3 },
          { icon: '🤖', bottom: '20%', right: '12%', delay: 2 },
          { icon: '📊', top: '65%', left: '6%', delay: 4 }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-2xl sm:text-3xl opacity-8"
            style={{
              top: item.top,
              bottom: item.bottom,
              left: item.left,
              right: item.right
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 8, -8, 0],
              opacity: [0.08, 0.15, 0.08],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8 + index,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut"
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Hero Content - FIXED: Removed aggressive animations that cause layout shifts */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 pt-20 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 min-h-screen flex flex-col justify-center"
      >
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Project Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/80 backdrop-blur-md border border-teal-200/50 rounded-full shadow-lg text-base sm:text-lg">
              <motion.div 
                className="w-4 h-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-bold text-slate-700">MediBot Development Journey</span>
              <div className="flex items-center gap-2">
                <div className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full">
                  <span className="text-sm font-bold text-green-700">Active</span>
                </div>
                <div className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                  <span className="text-sm font-bold text-blue-700">GSSoC 2025</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Main Hero Title - FIXED: Reduced initial animation displacement */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight">
              <span className="block text-slate-800 mb-4">Development</span>
              <span className="block bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Roadmap 2025
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl sm:text-2xl lg:text-3xl text-slate-600 max-w-5xl mx-auto leading-relaxed mb-12"
            >
              Follow our transparent journey from basic medical chatbot to comprehensive 
              <span className="font-bold text-teal-600"> AI Healthcare Platform</span>
            </motion.p>
          </motion.div>

          {/* Project Statistics - FIXED: Reduced scale animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 max-w-6xl mx-auto mb-16"
          >
            {[
              { label: 'GitHub Stars', value: '8', icon: '⭐', color: 'from-yellow-500 to-orange-500' },
              { label: 'Contributors', value: '17+', icon: '👥', color: 'from-blue-500 to-purple-500' },
              { label: 'Forks', value: '28', icon: '🍴', color: 'from-green-500 to-emerald-500' },
              { label: 'Languages', value: '3', icon: '💻', color: 'from-indigo-500 to-blue-500' },
              { label: 'Issues Fixed', value: '25+', icon: '🐛', color: 'from-red-500 to-pink-500' },
              { label: 'Features', value: '15+', icon: '✨', color: 'from-teal-500 to-cyan-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="group bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -4, scale: 1.02 }} // FIXED: Reduced hover scale
              >
                <motion.div
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-white text-xl sm:text-2xl mx-auto mb-3 shadow-lg`}
                  whileHover={{ rotate: 180 }} // FIXED: Reduced rotation
                  transition={{ duration: 0.4 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="font-black text-2xl sm:text-3xl lg:text-4xl text-slate-800 mb-1">
                  {stat.value}
                </div>
                <div className="font-semibold text-xs sm:text-sm text-slate-600 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technology Stack Preview - FIXED: Simplified animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-white/70 backdrop-blur-md border border-white/60 rounded-3xl p-6 sm:p-8 shadow-xl max-w-4xl mx-auto"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-8">
              Built with Modern Technologies
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {[
                { name: 'React', icon: '⚛️', desc: 'Frontend UI' },
                { name: 'FastAPI', icon: '🚀', desc: 'Backend API' },
                { name: 'Python', icon: '🐍', desc: 'Core Logic' },
                { name: 'Gemini AI', icon: '🤖', desc: 'LLM Model' },
                { name: 'Qdrant', icon: '🗄️', desc: 'Vector DB' }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="group text-center p-4 bg-slate-50 rounded-2xl hover:bg-white transition-all duration-300"
                  whileHover={{ y: -2, scale: 1.02 }} // FIXED: Reduced hover effects
                >
                  <motion.div
                    className="text-3xl sm:text-4xl mb-3"
                    whileHover={{ rotate: 180, scale: 1.1 }} // FIXED: Reduced rotation
                    transition={{ duration: 0.4 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <div className="font-bold text-slate-800 text-sm sm:text-base mb-1">
                    {tech.name}
                  </div>
                  <div className="text-xs text-slate-600">
                    {tech.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action - FIXED: Simplified animations */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center mt-16"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-bold rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -1 }} // FIXED: Reduced scale and movement
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2">
                  🚀 View Full Roadmap
                  <motion.div
                    animate={{ x: [0, 3, 0] }} // FIXED: Reduced movement
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </span>
              </motion.button>
              
              <motion.a
                href="https://github.com/CharithaReddy18/AI-health-chatbot"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white/80 hover:bg-white border-2 border-slate-200 hover:border-teal-300 text-slate-700 hover:text-teal-700 font-semibold rounded-2xl text-lg transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.02, y: -1 }} // FIXED: Reduced scale and movement
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2">
                  📂 GitHub Repository
                </span>
              </motion.a>
            </div>
            
            <motion.p
              className="text-slate-500 text-sm mt-4 max-w-md mx-auto"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Open source • MIT Licensed • Community driven
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default RoadmapHero;
