import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// Gallery Item Component
const GalleryItem = ({ item, index, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className={`relative cursor-pointer rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl transition-all duration-500 ${
        isActive 
          ? 'col-span-2 row-span-2 lg:col-span-3 lg:row-span-2' 
          : 'col-span-1 row-span-1'
      }`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: isActive ? 1.02 : 1.05 }}
      layout
      transition={{ 
        layout: { duration: 0.6, type: "spring", stiffness: 100 }
      }}
    >
      {/* Background Gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
        animate={{
          opacity: isHovered ? 0.9 : 0.7,
        }}
      />
      
      {/* Content Overlay */}
      <div className={`relative z-10 p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between text-white ${
        isActive ? 'min-h-[300px] sm:min-h-[400px]' : 'min-h-[150px] sm:min-h-[200px]'
      }`}>
        
        {/* Icon & Category */}
        <div className="flex items-start justify-between">
          <motion.div
            className={`${isActive ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-2xl sm:text-3xl lg:text-4xl'} transition-all duration-300`}
            animate={{ 
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.8 }}
          >
            {item.icon}
          </motion.div>
          
          <motion.div
            className="px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">
              {item.category}
            </span>
          </motion.div>
        </div>
        
        {/* Title & Description */}
        <div className="space-y-2 sm:space-y-3">
          <motion.h3
            className={`font-black leading-tight break-words ${
              isActive 
                ? 'text-2xl sm:text-3xl lg:text-4xl' 
                : 'text-lg sm:text-xl lg:text-2xl'
            }`}
            animate={{ y: isHovered ? -5 : 0 }}
          >
            {item.title}
          </motion.h3>
          
          <AnimatePresence>
            {(isActive || isHovered) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className={`${isActive ? 'max-h-32 sm:max-h-40' : 'max-h-20 sm:max-h-24'} overflow-y-auto scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent pr-2`}>
                  <p className={`leading-relaxed break-words ${
                    isActive 
                      ? 'text-base sm:text-lg' 
                      : 'text-sm sm:text-base'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Stats (for active cards) */}
          <AnimatePresence>
            {isActive && item.stats && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mt-4"
              >
                {item.stats.map((stat, statIndex) => (
                  <motion.div
                    key={statIndex}
                    className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: statIndex * 0.1 }}
                  >
                    <div className="font-black text-lg sm:text-xl">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm opacity-90 leading-tight">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Expand Indicator */}
        {!isActive && (
          <motion.div
            className="absolute bottom-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
            animate={{ 
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? 180 : 0
            }}
          >
            <span className="text-sm">+</span>
          </motion.div>
        )}
      </div>
      
      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl lg:rounded-3xl"
        style={{
          background: `linear-gradient(45deg, ${item.gradient.split(' ')[1]}, ${item.gradient.split(' ')[3]})`,
          padding: '2px'
        }}
        animate={{
          opacity: isHovered ? 0.6 : 0,
        }}
      >
        <div className="w-full h-full bg-transparent rounded-2xl lg:rounded-3xl" />
      </motion.div>
    </motion.div>
  );
};

// Navigation Controls Component
const NavigationControls = ({ currentSlide, totalSlides, onSlideChange, onAutoPlayToggle, isAutoPlaying }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
      
      {/* Slide Indicators */}
      <div className="flex items-center gap-2">
        {[...Array(totalSlides)].map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-teal-500 w-8' 
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
            onClick={() => onSlideChange(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
      
      {/* Controls */}
      <div className="flex items-center gap-3">
        {/* Auto-play Toggle */}
        <motion.button
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
            isAutoPlaying 
              ? 'bg-teal-500 text-white' 
              : 'bg-white/80 text-slate-700 hover:bg-white'
          }`}
          onClick={onAutoPlayToggle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
        </motion.button>
        
        {/* Previous/Next */}
        <div className="flex items-center gap-2">
          <motion.button
            className="w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-slate-700 font-bold shadow-lg"
            onClick={() => onSlideChange(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ←
          </motion.button>
          <motion.button
            className="w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-slate-700 font-bold shadow-lg"
            onClick={() => onSlideChange(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            →
          </motion.button>
        </div>
      </div>
    </div>
  );
};

const RoadmapGallery = () => {
  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { 
    once: true, 
    threshold: 0.05,
    margin: "0px 0px -100px 0px"
  });
  
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeItem, setActiveItem] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Gallery Data - Based on MediBot Development Journey
  const gallerySlides = [
    [
      {
        id: 'foundation',
        title: 'Foundation Built',
        description: 'Established robust technical foundation with React frontend, FastAPI backend, and Google Gemini AI integration. Docker containerization ensures consistent development and deployment across all environments.',
        icon: '🏗️',
        category: 'Infrastructure',
        gradient: 'from-blue-500 to-cyan-600',
        stats: [
          { label: 'Tech Stack', value: '5+' },
          { label: 'Completion', value: '100%' },
          { label: 'Performance', value: 'A+' }
        ]
      },
      {
        id: 'ai-integration',
        title: 'AI Integration',
        description: 'Advanced RAG pipeline with Qdrant vector database for semantic search. Google Gemini provides intelligent, contextual medical responses with safety validation.',
        icon: '🤖',
        category: 'AI/ML',
        gradient: 'from-purple-500 to-indigo-600',
        stats: [
          { label: 'Accuracy', value: '95%' },
          { label: 'Response Time', value: '<2s' },
          { label: 'Safety Score', value: 'A+' }
        ]
      },
      {
        id: 'medical-knowledge',
        title: 'Medical Knowledge Base',
        description: 'Comprehensive medical information repository with vector embeddings for accurate health information retrieval and contextual medical assistance.',
        icon: '📚',
        category: 'Data',
        gradient: 'from-emerald-500 to-teal-600',
        stats: [
          { label: 'Medical Topics', value: '500+' },
          { label: 'Conditions', value: '200+' },
          { label: 'Accuracy', value: '98%' }
        ]
      },
      {
        id: 'user-interface',
        title: 'Modern UI/UX',
        description: 'Responsive React interface with Tailwind CSS styling, optimized for medical consultations across all devices with accessibility standards.',
        icon: '🎨',
        category: 'Frontend',
        gradient: 'from-pink-500 to-rose-600'
      }
    ],
    [
      {
        id: 'doctor-recommendations',
        title: 'Doctor Specialist Matching',
        description: 'AI-powered specialist recommendation system that analyzes symptoms and medical conditions to suggest appropriate healthcare professionals with confidence scoring.',
        icon: '👨‍⚕️',
        category: 'Healthcare',
        gradient: 'from-green-500 to-emerald-600',
        stats: [
          { label: 'Specialists', value: '50+' },
          { label: 'Match Rate', value: '92%' },
          { label: 'User Rating', value: '4.8/5' }
        ]
      },
      {
        id: 'safety-compliance',
        title: 'Medical Safety Framework',
        description: 'Comprehensive medical disclaimers, emergency situation detection, and responsible AI response validation ensuring safe healthcare information delivery.',
        icon: '🛡️',
        category: 'Safety',
        gradient: 'from-orange-500 to-red-600',
        stats: [
          { label: 'Safety Checks', value: '100%' },
          { label: 'Compliance', value: 'HIPAA' },
          { label: 'Reliability', value: '99.9%' }
        ]
      },
      {
        id: 'disease-prediction',
        title: 'Disease Prediction System',
        description: 'Advanced symptom analysis with machine learning algorithms for disease identification and probability scoring based on medical literature.',
        icon: '🔬',
        category: 'Diagnostics',
        gradient: 'from-cyan-500 to-blue-600',
        stats: [
          { label: 'Diseases', value: '300+' },
          { label: 'Accuracy', value: '89%' },
          { label: 'Coverage', value: '85%' }
        ]
      },
      {
        id: 'chat-interface',
        title: 'Enhanced Chat Experience',
        description: 'Improved conversational interface with real-time responses, message history, and accessibility features for better user engagement.',
        icon: '💬',
        category: 'UX',
        gradient: 'from-violet-500 to-purple-600'
      }
    ],
    [
      {
        id: 'user-authentication',
        title: 'User Authentication',
        description: 'Secure user accounts with JWT tokens, encrypted medical history storage, and GDPR-compliant data handling for personalized healthcare experiences.',
        icon: '🔐',
        category: 'Security',
        gradient: 'from-slate-500 to-gray-600',
        stats: [
          { label: 'Security Level', value: 'AAA' },
          { label: 'Encryption', value: 'AES-256' },
          { label: 'Compliance', value: 'GDPR' }
        ]
      },
      {
        id: 'multilingual',
        title: 'Multilingual Support',
        description: 'Comprehensive language support for Hindi, Spanish, French, and other major languages with cultural context awareness for global healthcare access.',
        icon: '🌍',
        category: 'Localization',
        gradient: 'from-yellow-500 to-orange-600',
        stats: [
          { label: 'Languages', value: '8+' },
          { label: 'Accuracy', value: '94%' },
          { label: 'Coverage', value: '90%' }
        ]
      },
      {
        id: 'analytics',
        title: 'Health Analytics Dashboard',
        description: 'Advanced health insights with trend analysis, personalized recommendations, and privacy-preserving analytics for better health outcomes.',
        icon: '📊',
        category: 'Analytics',
        gradient: 'from-teal-500 to-cyan-600',
        stats: [
          { label: 'Metrics', value: '25+' },
          { label: 'Insights', value: 'Real-time' },
          { label: 'Privacy', value: '100%' }
        ]
      },
      {
        id: 'api-scaling',
        title: 'Production Scaling',
        description: 'Enterprise-grade API with rate limiting, caching strategies, load balancing, and monitoring for handling thousands of concurrent users.',
        icon: '🚀',
        category: 'Infrastructure',
        gradient: 'from-indigo-500 to-blue-600'
      }
    ]
  ];

  const currentSlide = gallerySlides[activeSlide] || [];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % gallerySlides.length);
      setActiveItem(null); // Reset active item when changing slides
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, gallerySlides.length]);

  // Reset scroll position
  useEffect(() => {
    if (galleryRef.current) {
      window.scrollTo({ top: window.scrollY, behavior: 'instant' });
    }
  }, []);

  const handleSlideChange = (slideIndex) => {
    setActiveSlide(slideIndex);
    setActiveItem(null);
    setIsAutoPlaying(false); // Pause auto-play when manually navigating
  };

  const handleItemClick = (itemId) => {
    setActiveItem(activeItem === itemId ? null : itemId);
  };

  return (
    <motion.section
      ref={galleryRef}
      className="relative z-10 py-8 sm:py-16 lg:py-24 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={galleryInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-800 mb-4 sm:mb-6 leading-tight">
            Development Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed break-words mb-6">
              Explore our comprehensive development milestones, feature implementations, 
              and technical achievements in building the future of AI healthcare assistance.
            </p>
          </div>
          
          {/* Phase Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-md border border-teal-200/50 rounded-full shadow-lg"
          >
            <motion.div 
              className="w-4 h-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-bold text-slate-700">
              Phase {activeSlide + 1} of {gallerySlides.length}
            </span>
            <div className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full">
              <span className="text-sm font-bold text-emerald-700">
                {activeSlide === 0 ? 'Completed' : activeSlide === 1 ? 'In Progress' : 'Planned'}
              </span>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Interactive Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={galleryInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 sm:mb-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 auto-rows-fr min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
            <AnimatePresence mode="wait">
              {currentSlide.map((item, index) => (
                <GalleryItem
                  key={`${activeSlide}-${item.id}`}
                  item={item}
                  index={index}
                  isActive={activeItem === item.id}
                  onClick={() => handleItemClick(item.id)}
                />
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
        
        {/* Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={galleryInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <NavigationControls
            currentSlide={activeSlide}
            totalSlides={gallerySlides.length}
            onSlideChange={handleSlideChange}
            onAutoPlayToggle={() => setIsAutoPlaying(!isAutoPlaying)}
            isAutoPlaying={isAutoPlaying}
          />
        </motion.div>
        
        {/* Development Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={galleryInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 sm:mt-12 lg:mt-16 bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 rounded-2xl lg:rounded-3xl p-6 sm:p-8"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3 sm:mb-4">
              Project Impact & Statistics
            </h3>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Measurable outcomes from our comprehensive healthcare AI development journey
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { label: 'GitHub Stars', value: '8', icon: '⭐', color: 'from-yellow-500 to-orange-500' },
              { label: 'Contributors', value: '17+', icon: '👥', color: 'from-blue-500 to-purple-500' },
              { label: 'Code Commits', value: '150+', icon: '💻', color: 'from-green-500 to-emerald-500' },
              { label: 'Features Built', value: '25+', icon: '✨', color: 'from-pink-500 to-rose-500' },
              { label: 'Issues Resolved', value: '40+', icon: '🐛', color: 'from-red-500 to-orange-500' },
              { label: 'Medical Topics', value: '500+', icon: '📚', color: 'from-teal-500 to-cyan-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <motion.div
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-white text-lg sm:text-xl mx-auto mb-3 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="font-black text-xl sm:text-2xl lg:text-3xl text-slate-800 mb-1">
                  {stat.value}
                </div>
                <div className="font-medium text-xs sm:text-sm text-slate-600 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RoadmapGallery;
