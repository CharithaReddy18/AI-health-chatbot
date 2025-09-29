import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// Enhanced Status Icon Component - Fully Responsive
const StatusIcon = ({ status, gradient, phase }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getIcon = () => {
    switch(status) {
      case 'completed': return '✅';
      case 'in-progress': return '🔄';
      case 'planned': return '📋';
      case 'future': return '🔮';
      default: return '⭕';
    }
  };

  return (
    <motion.div
      className={`relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center text-white text-lg sm:text-xl lg:text-2xl shadow-xl`}
      whileHover={{ 
        scale: 1.1, 
        rotate: 180,
        boxShadow: '0 20px 40px -12px rgba(20, 184, 166, 0.4)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        animate={{ scale: isHovered ? 1.2 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {getIcon()}
      </motion.div>
      
      {/* Phase number badge - Responsive */}
      <motion.div
        className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 bg-white text-slate-800 rounded-full flex items-center justify-center text-xs sm:text-sm font-black shadow-lg border-2 border-white"
        animate={{ rotate: isHovered ? -180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {phase}
      </motion.div>
    </motion.div>
  );
};

// Enhanced Feature Item Component - Fully Responsive with Scrollable Content
const FeatureItem = ({ item, index, phaseGradient }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group relative bg-white/80 backdrop-blur-sm border border-white/60 rounded-xl lg:rounded-2xl p-3 sm:p-4 hover:bg-white transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ x: 4, scale: 1.01 }}
    >
      {/* Animated border effect */}
      <motion.div
        className={`absolute -inset-1 bg-gradient-to-r ${phaseGradient} rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-500`}
      />
      
      <div className="relative z-10 flex items-start gap-3 sm:gap-4">
        {/* Status icon - Responsive */}
        <motion.div
          className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${phaseGradient} rounded-xl lg:rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg`}
          whileHover={{ rotate: 90, scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-xs sm:text-sm font-bold">{item.status}</span>
        </motion.div>
        
        <div className="flex-1 min-w-0 overflow-hidden"> {/* FIXED: Added min-w-0 and overflow-hidden */}
          {/* Feature title - Responsive */}
          <h4 className="font-bold text-slate-800 text-sm sm:text-base lg:text-lg mb-1 sm:mb-2 group-hover:text-teal-700 transition-colors leading-tight break-words"> {/* FIXED: Added break-words */}
            {item.feature}
          </h4>
          
          {/* Feature description - Responsive and scrollable if needed */}
          <div className="max-h-16 sm:max-h-20 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent"> {/* FIXED: Added scrollable container */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-2 break-words"> {/* FIXED: Added break-words */}
              {item.description}
            </p>
          </div>
          
          {/* Technical details (expandable) - Responsive */}
          <AnimatePresence>
            {isExpanded && item.technical && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 sm:mt-3"
              >
                <div className="max-h-24 sm:max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100 p-2 sm:p-3 bg-slate-50 rounded-lg border border-slate-200"> {/* FIXED: Added scrollable container */}
                  <p className="text-xs leading-relaxed text-slate-600 break-words"> {/* FIXED: Added break-words */}
                    <strong>Technical:</strong> {item.technical}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Progress indicator for in-progress items - Responsive */}
          {item.progress && (
            <div className="mt-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-slate-600">Progress</span>
                <span className="text-xs font-bold text-slate-800">{item.progress}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-1.5">
                <motion.div
                  className={`h-1.5 bg-gradient-to-r ${phaseGradient} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${item.progress}%` }}
                  transition={{ duration: 1.2, delay: index * 0.1 }}
                />
              </div>
            </div>
          )}
          
          {/* Expand indicator - Responsive */}
          {item.technical && (
            <motion.div
              className="text-xs text-teal-600 font-medium mt-1 sm:mt-2 flex items-center gap-1"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="truncate"> {/* FIXED: Added truncate for long text */}
                {isExpanded ? '↑ Less details' : '↓ Technical details'}
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Enhanced Roadmap Phase Card Component - Fully Responsive with Scrollable Content
const RoadmapPhaseCard = ({ phase, index }) => {
  const [isExpanded, setIsExpanded] = useState(index === 1);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: index * 0.2, 
        duration: 0.7,
        type: "spring",
        stiffness: 100 
      }}
      className="group relative h-full"
    >
      <motion.div
        className="bg-white/90 backdrop-blur-md border border-white/60 rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl h-full flex flex-col"
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated gradient border */}
        <motion.div
          className={`absolute -inset-1 bg-gradient-to-r ${phase.gradient} rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        />
        
        {/* Card Header - Responsive and Fixed Height */}
        <div className="relative z-10 p-4 sm:p-6 lg:p-8 flex-shrink-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-4 sm:mb-6">
            <StatusIcon 
              status={phase.status} 
              gradient={phase.gradient} 
              phase={index + 1}
            />
            
            <motion.div
              className={`px-3 sm:px-4 py-1 sm:py-2 rounded-xl lg:rounded-2xl text-xs sm:text-sm font-bold ${phase.statusStyle} shadow-lg self-start sm:self-auto`}
              whileHover={{ scale: 1.05, y: -1 }}
            >
              <span className="whitespace-nowrap">{phase.statusLabel}</span> {/* FIXED: Added whitespace-nowrap */}
            </motion.div>
          </div>
          
          {/* Phase Title & Timeframe - Responsive with Scrollable Content */}
          <div className="mb-4 sm:mb-6">
            <div className="mb-3 sm:mb-4">
              {/* FIXED: Made title responsive and scrollable if needed */}
              <div className="max-h-20 sm:max-h-24 lg:max-h-none overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-slate-800 leading-tight break-words"> {/* FIXED: Added break-words */}
                  {phase.title}
                </h3>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mt-2 sm:mt-3">
                <span className="text-slate-500 font-semibold text-sm sm:text-base lg:text-lg whitespace-nowrap"> {/* FIXED: Added whitespace-nowrap */}
                  {phase.timeframe}
                </span>
                {phase.progress !== undefined && (
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-bold text-teal-600 whitespace-nowrap">
                      {phase.progress}% Complete
                    </span>
                  </div>
                )}
              </div>
            </div>
            
            {/* FIXED: Made description scrollable on mobile */}
            <div className="max-h-16 sm:max-h-20 lg:max-h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed break-words"> {/* FIXED: Added break-words */}
                {phase.description}
              </p>
            </div>
          </div>
          
          {/* Progress Bar for active phases - Responsive */}
          {phase.progress !== undefined && (
            <div className="mb-4 sm:mb-6">
              <div className="w-full bg-slate-200 rounded-full h-2 sm:h-3 overflow-hidden">
                <motion.div
                  className={`h-2 sm:h-3 bg-gradient-to-r ${phase.gradient} rounded-full relative`}
                  initial={{ width: 0 }}
                  animate={{ width: `${phase.progress}%` }}
                  transition={{ duration: 1.5, delay: index * 0.3 }}
                >
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['0%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 2 }}
                  />
                </motion.div>
              </div>
            </div>
          )}
          {!phase.progress && <div className="mb-4 sm:mb-6 h-0"></div>}
        </div>

        {/* Features List - Responsive with Scrollable Container */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 flex-1 flex flex-col min-h-0"> {/* FIXED: Added min-h-0 */}
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-3 sm:mb-4 flex-shrink-0">
              <h4 className="text-base sm:text-lg font-bold text-slate-800">
                Key Features & Milestones
              </h4>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs sm:text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors flex items-center gap-1 self-start sm:self-auto"
              >
                <span className="whitespace-nowrap"> {/* FIXED: Added whitespace-nowrap */}
                  {isExpanded ? 'Show Less' : `Show All (${phase.items.length})`}
                </span>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ↓
                </motion.div>
              </button>
            </div>
            
            {/* FIXED: Scrollable features container with responsive height */}
            <div className="flex-1 min-h-0 overflow-hidden">
              <div className="h-full max-h-[300px] sm:max-h-[350px] lg:max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100 pr-2"> {/* FIXED: Added scrollable container */}
                <div className="space-y-2 sm:space-y-3">
                  <AnimatePresence>
                    {phase.items.slice(0, isExpanded ? phase.items.length : 3).map((item, itemIndex) => (
                      <FeatureItem
                        key={itemIndex}
                        item={item}
                        index={itemIndex}
                        phaseGradient={phase.gradient}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
          
          {/* Phase Summary Stats - Responsive and Fixed at Bottom */}
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-200 flex-shrink-0">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
              <div className="p-2 sm:p-3 bg-slate-50 rounded-lg sm:rounded-xl">
                <div className="font-black text-lg sm:text-xl text-slate-800">
                  {phase.items.filter(item => item.status === '✓').length}
                </div>
                <div className="text-xs text-slate-600 leading-tight">Completed</div>
              </div>
              <div className="p-2 sm:p-3 bg-slate-50 rounded-lg sm:rounded-xl">
                <div className="font-black text-lg sm:text-xl text-slate-800">
                  {phase.items.filter(item => item.status === '🔄').length}
                </div>
                <div className="text-xs text-slate-600 leading-tight">In Progress</div>
              </div>
              <div className="p-2 sm:p-3 bg-slate-50 rounded-lg sm:rounded-xl">
                <div className="font-black text-lg sm:text-xl text-slate-800">
                  {phase.items.length}
                </div>
                <div className="text-xs text-slate-600 leading-tight">Total Items</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const RoadmapTimeline = () => {
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { 
    once: true, 
    threshold: 0.05,
    margin: "0px 0px -200px 0px"
  });

  useEffect(() => {
    const timelineElement = timelineRef.current;
    if (timelineElement) {
      window.scrollTo({ top: window.scrollY, behavior: 'instant' });
    }
  }, []);

  // **HONEST ROADMAP DATA** - Same as before
  const roadmapPhases = [
    {
      title: "Foundation & Core Infrastructure",
      timeframe: "Completed (2024)",
      status: "completed",
      statusLabel: "✅ Completed",
      statusStyle: "bg-green-100 text-green-800",
      gradient: "from-green-500 to-emerald-600",
      progress: 100,
      description: "Established comprehensive foundation with cutting-edge technology stack, robust AI integration, and core medical assistance functionality for delivering reliable healthcare information through intelligent conversation interfaces.",
      items: [
        {
          feature: "React Frontend Architecture with Modern Tooling",
          description: "State-of-the-art UI development using React 18, Vite build system, Tailwind CSS styling framework, and fully responsive design patterns optimized for medical interfaces",
          status: "✓",
          technical: "Implemented with React 18 featuring modern hooks architecture, component-based design patterns, TypeScript integration for enhanced development experience, comprehensive error boundaries, and performance optimization with code splitting and lazy loading for better user experience."
        },
        {
          feature: "FastAPI Backend Development with Production Features", 
          description: "Enterprise-grade Python API architecture featuring asynchronous request handling, comprehensive auto-documentation, and robust error management systems",
          status: "✓",
          technical: "Built using FastAPI framework with Pydantic data validation, async/await patterns for concurrent request handling, comprehensive middleware stack for error handling, request logging, CORS management, and automatic OpenAPI documentation generation."
        },
        {
          feature: "Google Gemini AI Integration for Medical Responses",
          description: "Advanced large language model integration specifically tuned for contextual medical conversations and healthcare guidance delivery",
          status: "✓",
          technical: "Seamlessly integrated Google's Gemini Pro model with sophisticated prompt engineering techniques, custom response validation pipelines for medical accuracy, temperature control for consistent outputs, and safety filters for responsible AI healthcare interactions."
        },
        {
          feature: "Containerized Development with Docker Orchestration",
          description: "Production-ready containerization setup ensuring consistent development environments and streamlined deployment processes",
          status: "✓",
          technical: "Multi-stage Docker build configurations, comprehensive docker-compose orchestration for local development, volume mounting strategies for efficient development workflows, environment variable management, and production-optimized container configurations."
        },
        {
          feature: "Comprehensive Medical Knowledge Base System",
          description: "Structured medical information repository with advanced vector embeddings for semantic search and contextual information retrieval",
          status: "✓",
          technical: "JSON-structured medical knowledge base with sentence-transformer embeddings using all-MiniLM-L6-v2 model, implementing both FAISS and Qdrant vector databases for efficient semantic search capabilities, context chunking strategies, and relevance scoring algorithms."
        }
      ]
    },
    {
      title: "Enhanced Medical Features & AI Capabilities",
      timeframe: "Active Development (Q1 2025)",
      status: "in-progress", 
      statusLabel: "🔄 In Progress",
      statusStyle: "bg-blue-100 text-blue-800",
      gradient: "from-blue-500 to-cyan-600",
      progress: 75,
      description: "Significantly expanding medical capabilities through advanced AI features, dramatically improved user experience patterns, and specialized healthcare functionalities designed for comprehensive patient assistance and medical information delivery.",
      items: [
        {
          feature: "Advanced RAG Pipeline with Qdrant Vector Database",
          description: "Production-grade Retrieval-Augmented Generation system utilizing cutting-edge vector database technology for superior medical information retrieval",
          status: "✓",
          progress: 90,
          technical: "Implemented Qdrant vector database for production-grade semantic search capabilities, enhanced embedding models with optimized chunking strategies, context-aware retrieval algorithms, relevance scoring mechanisms, and sophisticated query processing pipelines for medical information."
        },
        {
          feature: "Intelligent Doctor Specialist Recommendation Engine",
          description: "AI-powered medical specialist matching system based on comprehensive symptom analysis and sophisticated medical condition correlation algorithms",
          status: "🔄",
          progress: 80,
          technical: "Machine learning models for symptom-to-specialist mapping using decision trees and neural networks, confidence scoring algorithms, integration with comprehensive medical specialty databases, geographic location matching, and availability scheduling systems."
        },
        {
          feature: "Comprehensive Medical Safety and Compliance Framework",
          description: "Industry-standard medical disclaimers, emergency situation detection, and responsible AI healthcare response management systems",
          status: "✓",
          technical: "Automated medical disclaimer injection systems, emergency keyword detection using NLP techniques, escalation protocol implementations, responsible AI response filtering mechanisms, and compliance with healthcare communication standards and regulations."
        },
        {
          feature: "Advanced Disease Prediction and Analysis System",
          description: "Sophisticated symptom-based disease identification with statistical probability scoring and confidence-based medical recommendations",
          status: "🔄",
          progress: 60,
          technical: "Implementation of decision tree algorithms and Bayesian networks, symptom correlation analysis using medical literature, integration with comprehensive medical condition databases, confidence scoring systems, and evidence-based recommendation engines."
        },
        {
          feature: "Next-Generation Chat Interface with Enhanced UX",
          description: "Modernized conversational user interface featuring improved accessibility standards, intuitive interaction patterns, and comprehensive mobile optimization",
          status: "🔄",
          progress: 70,
          technical: "Real-time typing indicators with WebSocket integration, persistent message history with local storage, comprehensive accessibility improvements following WCAG 2.1 AA standards, mobile-first responsive design optimization, and progressive web app capabilities."
        }
      ]
    },
    {
      title: "Scalability, Personalization & User Experience Revolution",
      timeframe: "Planned (Q2-Q3 2025)",
      status: "planned",
      statusLabel: "📋 Planned", 
      statusStyle: "bg-yellow-100 text-yellow-800",
      gradient: "from-yellow-500 to-orange-600",
      progress: 25,
      description: "Strategic focus on comprehensive scalability improvements, robust user authentication systems, advanced personalization capabilities, and significantly expanding platform capabilities for enhanced healthcare assistance and meaningful user engagement across diverse demographics.",
      items: [
        {
          feature: "Enterprise-Grade User Authentication and Security System",
          description: "Comprehensive secure user account management with encrypted medical history storage and personalized healthcare recommendations based on user profiles",
          status: "📋",
          technical: "JWT-based authentication with refresh token rotation, bcrypt password hashing with salt rounds, OAuth 2.0 integration for social login, GDPR-compliant data handling with encryption at rest, comprehensive user profile management with medical history tracking, and role-based access control systems."
        },
        {
          feature: "Advanced Conversation Memory and Contextual Understanding",
          description: "Sophisticated persistent chat history system with intelligent contextual conversation understanding and seamless session management across devices",
          status: "📋",
          technical: "Redis-based session management with clustering support, conversation context retention using transformer models, automatic conversation summarization algorithms, cross-device synchronization capabilities, and intelligent context switching for complex medical discussions."
        },
        {
          feature: "Comprehensive Multilingual Support and Localization",
          description: "Full internationalization support for Hindi, Spanish, French, German, and other major world languages with cultural context awareness",
          status: "📋",
          technical: "React i18n implementation with namespace organization, automatic language detection using browser preferences and IP geolocation, integration with Google Translate API and DeepL for medical terminology, multilingual medical knowledge bases, and cultural context adaptation for healthcare communication."
        },
        {
          feature: "Advanced Healthcare Analytics and Insights Dashboard",
          description: "Comprehensive user health insights platform with trend analysis capabilities and personalized health recommendations based on interaction patterns",
          status: "📋",
          technical: "Data visualization using D3.js and Chart.js libraries, health metrics tracking with time-series databases, machine learning algorithms for trend analysis, privacy-preserving analytics with differential privacy techniques, and predictive health modeling capabilities."
        },
        {
          feature: "Production-Ready API Scaling and Performance Optimization",
          description: "Enterprise-level scaling architecture with intelligent rate limiting, comprehensive caching strategies, and performance monitoring systems",
          status: "📋",
          technical: "Redis-based distributed rate limiting with sliding window algorithms, horizontal scaling with load balancing using nginx, database optimization with query caching and connection pooling, comprehensive monitoring with Prometheus and Grafana, and auto-scaling capabilities with Kubernetes."
        }
      ]
    },
    {
      title: "Advanced AI Integration & Healthcare Ecosystem Connectivity",
      timeframe: "Future Vision (Q4 2025 & Beyond)",
      status: "future",
      statusLabel: "🔮 Future Vision",
      statusStyle: "bg-purple-100 text-purple-800",
      gradient: "from-purple-500 to-indigo-600",
      progress: 10,
      description: "Revolutionary integration with comprehensive healthcare ecosystems, cutting-edge AI capabilities including medical imaging analysis, and professional medical collaboration features for delivering comprehensive healthcare solutions that bridge AI technology with traditional medical practice.",
      items: [
        {
          feature: "AI-Powered Medical Image Analysis and Diagnostic Support",
          description: "Advanced computer vision system for analyzing medical images, X-rays, MRI scans, and other diagnostic imaging with AI-assisted interpretation",
          status: "🔮",
          technical: "Convolutional neural networks trained on medical imaging datasets, DICOM file format support with metadata extraction, integration with radiology information systems, automated abnormality detection algorithms, and collaboration tools for radiologists and healthcare providers."
        },
        {
          feature: "Electronic Health Record System Integration and Interoperability",
          description: "Comprehensive EHR system compatibility with secure medical data exchange capabilities and healthcare provider integration",
          status: "🔮",
          technical: "HL7 FHIR standards implementation for healthcare interoperability, secure medical data exchange protocols with end-to-end encryption, API integrations with major EHR systems like Epic and Cerner, patient consent management systems, and audit logging for compliance."
        },
        {
          feature: "Integrated Telemedicine Platform with Healthcare Provider Network",
          description: "Complete telemedicine solution connecting patients with verified healthcare professionals for real-time consultations and medical advice",
          status: "🔮",
          technical: "WebRTC-based video calling with medical-grade encryption, appointment scheduling systems with calendar integration, secure messaging with HIPAA compliance, payment processing integration, healthcare provider verification systems, and electronic prescription capabilities."
        },
        {
          feature: "IoT Health Monitoring and Wearable Device Integration",
          description: "Comprehensive integration with wearable devices and IoT health monitoring systems for continuous patient health tracking and alerts",
          status: "🔮",
          technical: "API integrations with major wearable platforms like Apple Health and Google Fit, real-time health data processing with stream analytics, machine learning models for health anomaly detection, automated alert systems for healthcare providers, and predictive health analytics."
        },
        {
          feature: "Enterprise Healthcare Provider API and White-Label Solutions",
          description: "Enterprise-grade API platform designed for healthcare institutions and medical practices with comprehensive white-label customization options",
          status: "🔮",
          technical: "RESTful API design with comprehensive OpenAPI documentation, enterprise-grade security with OAuth 2.0 and API key management, comprehensive audit logging and compliance reporting, white-label customization capabilities, and dedicated enterprise support infrastructure."
        }
      ]
    }
  ];

  return (
    <motion.section
      ref={timelineRef}
      className="relative z-10 py-8 sm:py-16 lg:py-24 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={timelineInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-800 mb-4 sm:mb-6 leading-tight">
            Development Timeline
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed break-words">
              Our transparent journey from concept to comprehensive medical AI platform, 
              with honest progress tracking and realistic timelines.
            </p>
          </div>
        </motion.div>
        
        {/* Timeline Grid - Responsive with Equal Heights */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          {roadmapPhases.map((phase, index) => (
            <RoadmapPhaseCard key={index} phase={phase} index={index} />
          ))}
        </div>
        
        {/* Community Contribution Call - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={timelineInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 sm:mt-12 lg:mt-16 bg-gradient-to-r from-teal-50 to-emerald-50 border-2 border-teal-200 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8"
        >
          <div className="text-center">
            <motion.div
              className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl lg:rounded-2xl flex items-center justify-center text-white text-xl sm:text-2xl mx-auto mb-4"
              animate={{ rotate: [0, 180] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              🤝
            </motion.div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-800 mb-3 sm:mb-4">
              Join Our Development Journey
            </h3>
            <div className="max-w-2xl mx-auto mb-4 sm:mb-6">
              <p className="text-teal-700 text-base sm:text-lg leading-relaxed break-words">
                MediBot is part of **GirlScript Summer of Code (GSSoC) 2025**. We welcome contributions 
                from developers worldwide to help build the future of accessible healthcare AI.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-teal-200 text-teal-800 rounded-full font-semibold text-xs sm:text-sm whitespace-nowrap">
                Open Source
              </span>
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-emerald-200 text-emerald-800 rounded-full font-semibold text-xs sm:text-sm whitespace-nowrap">
                MIT Licensed
              </span>
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-200 text-blue-800 rounded-full font-semibold text-xs sm:text-sm whitespace-nowrap">
                GSSoC 2025
              </span>
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-purple-200 text-purple-800 rounded-full font-semibold text-xs sm:text-sm whitespace-nowrap">
                17+ Contributors
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RoadmapTimeline;
