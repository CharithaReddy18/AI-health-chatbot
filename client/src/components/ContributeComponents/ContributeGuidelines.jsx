import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const GuidelineCard = ({ guideline, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-white/90 backdrop-blur-md border border-white/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -4, scale: 1.02 }}
    >
      <div className={`w-12 h-12 bg-gradient-to-br ${guideline.gradient} rounded-xl flex items-center justify-center text-white text-2xl mb-4`}>
        {guideline.icon}
      </div>
      
      <h3 className="text-xl font-bold text-slate-800 mb-3">
        {guideline.title}
      </h3>
      
      <p className="text-slate-600 leading-relaxed mb-4">
        {guideline.description}
      </p>
      
      {guideline.points && (
        <ul className="space-y-2">
          {guideline.points.map((point, pointIndex) => (
            <li key={pointIndex} className="flex items-start gap-2 text-sm text-slate-600">
              <span className="text-teal-500 mt-0.5">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
      
      {guideline.link && (
        <a
          href={guideline.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors"
        >
          {guideline.link.label} →
        </a>
      )}
    </motion.div>
  );
};

const ContributeGuidelines = () => {
  const guidelinesRef = useRef(null);
  const guidelinesInView = useInView(guidelinesRef, { once: true, threshold: 0.2 });

  const guidelines = [
    {
      title: "Code Quality Standards",
      icon: "⚡",
      gradient: "from-blue-500 to-cyan-600",
      description: "Maintain high code quality with proper formatting, testing, and documentation to ensure the project remains maintainable.",
      points: [
        "Follow existing code style and conventions",
        "Write meaningful commit messages using conventional format",
        "Include appropriate tests for new features",
        "Add documentation for complex functionality",
        "Use TypeScript for better code reliability"
      ]
    },
    {
      title: "Medical Accuracy & Safety",
      icon: "🏥",
      gradient: "from-red-500 to-pink-600",
      description: "Healthcare AI requires special attention to accuracy, safety, and responsible information delivery to protect users.",
      points: [
        "Include medical disclaimers for all health-related features",
        "Verify medical information with reliable sources",
        "Implement emergency escalation for serious symptoms",
        "Test medical features thoroughly before submission",
        "Follow healthcare compliance and privacy guidelines"
      ]
    },
    {
      title: "Community Guidelines",
      icon: "🤝",
      gradient: "from-green-500 to-emerald-600",
      description: "Foster a welcoming, inclusive, and collaborative environment where all contributors feel valued and respected.",
      points: [
        "Be respectful and constructive in all interactions",
        "Help newcomers and answer questions patiently",
        "Provide helpful feedback during code reviews",
        "Celebrate others' contributions and achievements",
        "Follow our Code of Conduct in all communications"
      ],
      link: {
        label: "Read Code of Conduct",
        url: "https://github.com/CharithaReddy18/AI-health-chatbot/blob/main/CODE_OF_CONDUCT.md"
      }
    },
    {
      title: "Issue Reporting",
      icon: "🐛",
      gradient: "from-orange-500 to-red-600",
      description: "Help improve MediBot by reporting bugs and suggesting enhancements with clear, detailed information.",
      points: [
        "Search existing issues before creating new ones",
        "Use descriptive titles and detailed descriptions",
        "Include steps to reproduce bugs",
        "Provide system information and error messages",
        "Add screenshots or videos for UI issues"
      ],
      link: {
        label: "Report an Issue",
        url: "https://github.com/CharithaReddy18/AI-health-chatbot/issues/new"
      }
    },
    {
      title: "Documentation Standards",
      icon: "📚",
      gradient: "from-purple-500 to-indigo-600",
      description: "Clear documentation helps users and contributors understand and use MediBot effectively.",
      points: [
        "Write clear, concise documentation",
        "Update README when adding new features",
        "Include code examples and usage instructions",
        "Document API endpoints and parameters",
        "Keep installation guides up to date"
      ]
    },
    {
      title: "Recognition & Rewards",
      icon: "🏆",
      gradient: "from-yellow-500 to-orange-600",
      description: "We appreciate and recognize all contributors through various acknowledgments and opportunities.",
      points: [
        "Contributors are listed in the project README",
        "Outstanding contributors receive special recognition",
        "GSSoC 2025 participants earn certificates and swag",
        "Opportunity to become a project maintainer",
        "LinkedIn recommendations for significant contributions"
      ],
      link: {
        label: "See Contributors",
        url: "https://github.com/CharithaReddy18/AI-health-chatbot/graphs/contributors"
      }
    }
  ];

  return (
    <motion.section
      ref={guidelinesRef}
      className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-r from-slate-50 to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={guidelinesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-slate-800 mb-6">
            Guidelines & Best Practices
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Follow these guidelines to ensure your contributions are valuable, 
            safe, and aligned with our mission to build responsible healthcare AI.
          </p>
        </motion.div>
        
        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guidelines.map((guideline, index) => (
            <GuidelineCard
              key={index}
              guideline={guideline}
              index={index}
            />
          ))}
        </div>
        
        {/* Contact & Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={guidelinesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-white/80 backdrop-blur-md border border-white/60 rounded-3xl p-8 sm:p-12 text-center shadow-xl">
            <div className="text-4xl mb-6">💬</div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              Need Help Getting Started?
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Our community is here to help! Whether you're a first-time contributor or an experienced developer, 
              don't hesitate to reach out for guidance and support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/CharithaReddy18/AI-health-chatbot/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold rounded-xl transition-all duration-300"
              >
                💬 Join Discussions
              </a>
              <a
                href="https://github.com/CharithaReddy18/AI-health-chatbot/labels/good%20first%20issue"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-teal-300 text-slate-700 hover:text-teal-700 font-semibold rounded-xl transition-all duration-300"
              >
                🚀 Find First Issue
              </a>
            </div>
            
            {/* Maintainer Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-slate-500 mb-4">Project maintained by</p>
              <div className="flex justify-center items-center gap-4">
                <div className="text-center">
                  <h4 className="font-semibold text-slate-700">Nayini Charitha Reddy</h4>
                  <p className="text-sm text-slate-500">Project Admin</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-slate-700">Anshi Agarwal</h4>
                  <p className="text-sm text-slate-500">GSSoC Mentor</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContributeGuidelines;
