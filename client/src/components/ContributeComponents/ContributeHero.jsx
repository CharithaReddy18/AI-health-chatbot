import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const ContributeHero = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, threshold: 0.2 });

  // Prevent scroll jumping
  useEffect(() => {
    if (heroRef.current) {
      window.scrollTo({ top: window.scrollY, behavior: 'instant' });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-20 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Enhanced floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          <div className="w-full h-full bg-gradient-to-r from-teal-200/40 to-emerald-200/40 rounded-full blur-3xl"></div>
        </motion.div>
        
        {/* Floating contribution icons */}
        {['🤝', '💻', '📚', '🔧', '🎨'].map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-10"
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + Math.random() * 50}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 1.5,
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-7xl mx-auto text-center"
      >
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={heroInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-md border border-teal-200/50 rounded-full shadow-lg mb-8"
        >
          <motion.div 
            className="w-4 h-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="font-bold text-slate-700">Open Source • GSSoC 2025</span>
          <div className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full">
            <span className="text-sm font-bold text-emerald-700">17+ Contributors</span>
          </div>
        </motion.div>
        
        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight">
          <span className="block text-slate-800 mb-4">Join the</span>
          <span className="block bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
            MediBot Community
          </span>
        </h1>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl sm:text-2xl lg:text-3xl text-slate-600 max-w-5xl mx-auto leading-relaxed mb-12"
        >
          Help us build the future of accessible healthcare AI. Your expertise in development, 
          design, documentation, or medical knowledge can make a real difference.
        </motion.p>

        {/* Contribution Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-8 max-w-4xl mx-auto mb-12"
        >
          {[
            { label: 'Active Contributors', value: '17+', icon: '👥', color: 'from-blue-500 to-purple-500' },
            { label: 'Open Issues', value: '12', icon: '🐛', color: 'from-red-500 to-pink-500' },
            { label: 'Pull Requests', value: '45+', icon: '🔀', color: 'from-green-500 to-emerald-500' },
            { label: 'Code Commits', value: '150+', icon: '💻', color: 'from-teal-500 to-cyan-500' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <motion.div
                className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-white text-xl sm:text-2xl mx-auto mb-3 shadow-lg`}
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.4 }}
              >
                {stat.icon}
              </motion.div>
              <div className="font-black text-2xl sm:text-3xl text-slate-800 mb-1">
                {stat.value}
              </div>
              <div className="font-semibold text-xs sm:text-sm text-slate-600 leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="https://github.com/CharithaReddy18/AI-health-chatbot"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-bold rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-2">
              🚀 Start Contributing
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </span>
          </motion.a>
          
          <motion.a
            href="https://github.com/CharithaReddy18/AI-health-chatbot/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/80 hover:bg-white border-2 border-slate-200 hover:border-teal-300 text-slate-700 hover:text-teal-700 font-semibold rounded-2xl text-lg transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-2">
              🐛 Report Issues
            </span>
          </motion.a>
        </motion.div>

        {/* Community Info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-slate-500 text-sm mt-6"
        >
          Part of GirlScript Summer of Code 2025 • MIT Licensed • Welcoming community
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ContributeHero;
