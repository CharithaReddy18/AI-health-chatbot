import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Professional Tech Icons Component
const TechIcon = ({ icon, gradient, name }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg mx-auto mb-4 transition-all duration-500`}
      whileHover={{ 
        scale: 1.1, 
        rotate: 360,
        boxShadow: '0 20px 40px -12px rgba(20, 184, 166, 0.4)'
      }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{ 
          scale: isHovered ? 1.2 : 1,
          rotateY: isHovered ? 360 : 0 
        }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>
    </motion.div>
  );
};

// Enhanced Tech Card Component
const TechCard = ({ tech, index, category }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: index * 0.1, 
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
      {/* Animated border */}
      <motion.div
        className={`absolute -inset-0.5 bg-gradient-to-r ${tech.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
      />
      
      <div className="relative z-10 text-center">
        <TechIcon icon={tech.icon} gradient={tech.gradient} name={tech.name} />
        
        {/* Category Badge */}
        <motion.div
          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${tech.categoryStyle}`}
          animate={{ scale: isHovered ? 1.05 : 1 }}
        >
          {category}
        </motion.div>
        
        {/* Tech Name */}
        <motion.h3
          className="text-xl font-bold text-slate-800 mb-3"
          animate={{ 
            color: isHovered ? '#0f766e' : '#1e293b',
            scale: isHovered ? 1.05 : 1
          }}
        >
          {tech.name}
        </motion.h3>
        
        {/* Description */}
        <motion.p
          className="text-sm text-slate-600 leading-relaxed"
          animate={{ opacity: isHovered ? 1 : 0.8 }}
        >
          {tech.description}
        </motion.p>
        
        {/* Usage Badge */}
        {tech.usage && (
          <motion.div
            className="mt-3 inline-block px-2 py-1 bg-gradient-to-r from-slate-100 to-slate-200 rounded-lg text-xs font-medium text-slate-700"
            whileHover={{ scale: 1.1 }}
          >
            {tech.usage}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const TechStack = () => {
  const headerRef = useRef(null);
  const techRef = useRef(null);
  const architectureRef = useRef(null);
  
  const headerInView = useInView(headerRef, { once: true, threshold: 0.3 });
  const techInView = useInView(techRef, { once: true, threshold: 0.2 });
  const architectureInView = useInView(architectureRef, { once: true, threshold: 0.3 });

  // **HONEST TECH STACK** - Based on actual repository analysis
  const technologies = {
    frontend: [
      {
        name: "React 18",
        icon: "⚛️",
        gradient: "from-cyan-500 to-blue-500",
        categoryStyle: "bg-cyan-100 text-cyan-700",
        usage: "Frontend UI",
        description: "Main frontend framework for building the user interface with modern React features and hooks for interactive chat components."
      },
      {
        name: "Vite",
        icon: "⚡",
        gradient: "from-purple-500 to-violet-500", 
        categoryStyle: "bg-purple-100 text-purple-700",
        usage: "Build Tool",
        description: "Lightning-fast build tool and development server providing hot module replacement and optimized production builds."
      },
      {
        name: "Tailwind CSS",
        icon: "🎨",
        gradient: "from-teal-500 to-emerald-500", 
        categoryStyle: "bg-teal-100 text-teal-700",
        usage: "Styling",
        description: "Utility-first CSS framework for rapid UI development with responsive design and modern styling patterns."
      }
    ],
    backend: [
      {
        name: "FastAPI",
        icon: "🚀",
        gradient: "from-green-500 to-emerald-600",
        categoryStyle: "bg-green-100 text-green-700",
        usage: "API Framework",
        description: "High-performance Python web framework with automatic API documentation and async support for medical chat endpoints."
      },
      {
        name: "Python 3.11+",
        icon: "🐍",
        gradient: "from-blue-600 to-indigo-600",
        categoryStyle: "bg-blue-100 text-blue-700",
        usage: "Backend Language",
        description: "Core programming language powering the backend services, AI integration, and medical data processing logic."
      },
      {
        name: "Pydantic",
        icon: "✅",
        gradient: "from-orange-500 to-red-500",
        categoryStyle: "bg-orange-100 text-orange-700",
        usage: "Data Validation",
        description: "Data validation and settings management using Python type annotations for API request/response schemas."
      }
    ],
    ai: [
      {
        name: "Google Gemini",
        icon: "🤖",
        gradient: "from-indigo-500 to-purple-600",
        categoryStyle: "bg-indigo-100 text-indigo-700",
        usage: "LLM Provider",
        description: "Primary large language model for generating intelligent, contextually aware medical responses and health guidance."
      },
      {
        name: "LangChain",
        icon: "🔗",
        gradient: "from-blue-600 to-cyan-600",
        categoryStyle: "bg-blue-100 text-blue-700",
        usage: "LLM Framework",
        description: "Framework for building LLM applications, handling prompt engineering and response processing for medical queries."
      },
      {
        name: "Sentence Transformers",
        icon: "🧬",
        gradient: "from-violet-500 to-purple-600",
        categoryStyle: "bg-violet-100 text-violet-700",
        usage: "Text Embeddings",
        description: "Text embedding models (all-MiniLM-L6-v2) for converting medical documents and queries into vector representations."
      }
    ],
    database: [
      {
        name: "Qdrant",
        icon: "🗄️",
        gradient: "from-teal-600 to-cyan-600",
        categoryStyle: "bg-teal-100 text-teal-700",
        usage: "Vector DB",
        description: "Modern vector database for storing and searching medical knowledge embeddings with high-performance semantic search."
      },
      {
        name: "FAISS",
        icon: "🔍",
        gradient: "from-yellow-500 to-orange-500",
        categoryStyle: "bg-yellow-100 text-yellow-700",
        usage: "Legacy Search",
        description: "Facebook AI similarity search library for vector indexing - being phased out in favor of Qdrant vector database."
      }
    ],
    tools: [
      {
        name: "Docker",
        icon: "🐳",
        gradient: "from-blue-500 to-blue-600",
        categoryStyle: "bg-blue-100 text-blue-700",
        usage: "Containerization",
        description: "Containerization platform with Docker Compose for consistent development and deployment of backend services."
      },
      {
        name: "Loguru",
        icon: "📝",
        gradient: "from-slate-600 to-slate-700",
        categoryStyle: "bg-slate-100 text-slate-700",
        usage: "Logging",
        description: "Advanced Python logging library providing structured logging, request tracking, and system monitoring capabilities."
      }
    ]
  };

  // **ACTUAL ARCHITECTURE** - Based on repository structure
  const architectureSteps = [
    {
      title: "User Query",
      icon: "👤",
      gradient: "from-blue-500 to-cyan-500",
      description: "Patient submits health question through React frontend"
    },
    {
      title: "FastAPI Processing", 
      icon: "🚀",
      gradient: "from-green-500 to-emerald-500",
      description: "Backend validates request and processes medical query"
    },
    {
      title: "Vector Search",
      icon: "🔍",
      gradient: "from-teal-500 to-cyan-500", 
      description: "Qdrant searches medical knowledge base for relevant context"
    },
    {
      title: "Gemini LLM",
      icon: "🤖",
      gradient: "from-indigo-500 to-purple-500",
      description: "Google Gemini generates contextual medical response"
    },
    {
      title: "Safe Response",
      icon: "🏥",
      gradient: "from-emerald-500 to-teal-500",
      description: "Response with medical disclaimers delivered to user"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 text-slate-800 overflow-x-hidden">
      
      {/* Enhanced floating elements */}
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
          <div className="w-full h-full bg-gradient-to-r from-teal-200/40 to-emerald-200/40 rounded-full blur-3xl"></div>
        </motion.div>
        
        {/* Floating medical/tech icons */}
        {['🩺', '⚛️', '🐍', '🤖', '🏥'].map((icon, i) => (
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

      {/* Header */}
      <motion.header
        ref={headerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 pt-16 sm:pt-24 pb-12 px-4 sm:px-6 text-center"
      >
        <div className="max-w-6xl mx-auto">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-md border border-teal-200/50 rounded-full mb-6 shadow-lg"
          >
            <motion.div 
              className="w-3 h-3 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-semibold text-slate-700">MediBot AI Technology Stack</span>
            <div className="px-2 py-0.5 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full">
              <span className="text-xs font-bold text-emerald-700">v2.0</span>
            </div>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight"
          >
            MediBot
            <br />
            <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              Technology Architecture
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Built with modern full-stack technologies including React, FastAPI, and Google Gemini AI 
            to deliver intelligent healthcare assistance through advanced RAG implementation.
          </motion.p>
          
          {/* Tech Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 text-sm"
          >
            {[
              { label: 'Languages', value: 'Python, JavaScript' },
              { label: 'Framework', value: 'React + FastAPI' },
              { label: 'AI Model', value: 'Google Gemini' },
              { label: 'Database', value: 'Qdrant Vector DB' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="px-4 py-2 bg-white/70 backdrop-blur-sm border border-white/60 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <span className="font-semibold text-slate-800">{stat.label}:</span>
                <span className="ml-1 text-teal-600">{stat.value}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.header>

      {/* Technology Categories */}
      <motion.section
        ref={techRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20"
      >
        {Object.entries(technologies).map(([category, techs], categoryIndex) => (
          <div key={category} className="mb-16">
            
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={techInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-lg">
                  {category === 'frontend' ? '🎨' : 
                   category === 'backend' ? '⚙️' : 
                   category === 'ai' ? '🧠' : 
                   category === 'database' ? '🗄️' : '🔧'}
                </div>
                <h2 className="text-2xl font-bold text-slate-800 capitalize">
                  {category === 'ai' ? 'AI & Machine Learning' : 
                   category === 'tools' ? 'DevOps & Tools' :
                   category} Technologies
                </h2>
              </div>
            </motion.div>
            
            {/* Tech Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techs.map((tech, index) => (
                <TechCard
                  key={tech.name}
                  tech={tech}
                  index={index + categoryIndex * 3}
                  category={category.charAt(0).toUpperCase() + category.slice(1)}
                />
              ))}
            </div>
          </div>
        ))}
      </motion.section>

      {/* Architecture Section */}
      <motion.section
        ref={architectureRef}
        initial={{ opacity: 0, y: 50 }}
        animate={architectureInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-white/50 backdrop-blur-sm py-16 mb-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={architectureInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              MediBot RAG Architecture
            </motion.h2>
            <motion.p
              className="text-lg text-slate-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={architectureInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Retrieval-Augmented Generation pipeline for accurate medical information delivery
            </motion.p>
          </div>
          
          {/* Architecture Flow */}
          <div className="relative">
            {/* Desktop Flow */}
            <div className="hidden md:flex items-center justify-between">
              {architectureSteps.map((step, index) => (
                <React.Fragment key={index}>
                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={architectureInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.3, duration: 0.8 }}
                  >
                    <motion.div
                      className={`w-24 h-24 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white font-bold shadow-xl mb-4`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-1">{step.icon}</div>
                        <div className="text-xs">{step.title}</div>
                      </div>
                    </motion.div>
                    <p className="text-sm text-slate-600 text-center max-w-32">{step.description}</p>
                  </motion.div>
                  
                  {index < architectureSteps.length - 1 && (
                    <motion.div
                      className="text-4xl text-teal-400 mx-4"
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      →
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>
            
            {/* Mobile Flow */}
            <div className="md:hidden space-y-8">
              {architectureSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={architectureInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white mb-3`}>
                    <div className="text-center">
                      <div className="text-xl mb-1">{step.icon}</div>
                      <div className="text-xs font-semibold">{step.title}</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 text-center max-w-48">{step.description}</p>
                  {index < architectureSteps.length - 1 && (
                    <div className="text-2xl text-teal-400 mt-2">↓</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Project Info Footer */}
      <div className="relative z-10 bg-gradient-to-r from-slate-100 to-blue-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity }}
              >
                🏥
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Open Source Medical AI</h3>
                <p className="text-blue-700 leading-relaxed mb-4">
                  MediBot is an open-source project built with modern web technologies and responsible AI practices. 
                  The application provides health information for educational purposes and includes appropriate medical disclaimers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">MIT License</span>
                  <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-medium">GSSoC 2025</span>
                  <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-medium">17+ Contributors</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
