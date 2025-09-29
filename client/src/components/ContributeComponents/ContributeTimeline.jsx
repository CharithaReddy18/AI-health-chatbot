import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// Enhanced Code Block Component
const CodeBlock = ({ children, language = 'bash' }) => {
  const [copyText, setCopyText] = useState('📋 Copy');
  const textToCopy = Array.isArray(children) ? children.join('') : children;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopyText('✅ Copied!');
      setTimeout(() => setCopyText('📋 Copy'), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopyText('✅ Copied!');
      setTimeout(() => setCopyText('📋 Copy'), 2000);
    }
  };

  return (
    <div className="relative group mt-4">
      <div className="bg-slate-900 rounded-xl overflow-hidden shadow-xl">
        <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
          <span className="text-slate-400 text-sm font-medium">{language}</span>
          <motion.button
            onClick={handleCopy}
            className="text-xs px-3 py-1 bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white rounded-md transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {copyText}
          </motion.button>
        </div>
        <pre className="text-green-400 p-4 overflow-x-auto text-sm leading-relaxed">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
};

// Enhanced Timeline Step Component
const TimelineStep = ({ step, index, isLast }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      className="relative mb-12 last:mb-0"
    >
      <div className="flex items-center">
        {/* Timeline Line */}
        {!isLast && (
          <div className="absolute left-8 sm:left-1/2 top-20 w-0.5 h-full bg-gradient-to-b from-teal-500 to-emerald-500 -translate-x-1/2"></div>
        )}
        
        {/* Icon Circle */}
        <motion.div
          className="z-10 absolute left-8 sm:left-1/2 -translate-x-1/2"
          whileHover={{ scale: 1.1 }}
        >
          <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white text-2xl shadow-xl`}>
            {step.icon}
          </div>
          {/* Step Number */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-white text-slate-800 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
            {index + 1}
          </div>
        </motion.div>
        
        {/* Content Card */}
        <div className={`w-full ${
          index % 2 === 0 ? 'sm:pl-24' : 'sm:text-right sm:pr-24'
        } pl-24`}>
          <motion.div
            className={`inline-block w-full sm:w-5/12 bg-white/90 backdrop-blur-md border border-white/60 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ${
              index % 2 !== 0 ? 'sm:ml-auto' : ''
            }`}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            <div className={index % 2 !== 0 ? 'sm:text-left' : ''}>
              <h3 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                {step.title}
                {step.difficulty && (
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${step.difficulty.style}`}>
                    {step.difficulty.label}
                  </span>
                )}
              </h3>
              
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                {step.description}
              </p>
              
              {/* Additional Details */}
              {step.details && (
                <div className="space-y-2 mb-4">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-teal-500 mt-0.5">•</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Code Block */}
              {step.code && (
                <CodeBlock language={step.language || 'bash'}>
                  {step.code}
                </CodeBlock>
              )}
              
              {/* Expandable Section */}
              {step.expandable && (
                <div className="mt-4">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center gap-1"
                  >
                    {isExpanded ? '↑ Show Less' : '↓ Show More Details'}
                  </button>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 p-4 bg-slate-50 rounded-lg"
                      >
                        <div className="text-sm text-slate-600 space-y-2">
                          {step.expandable.map((item, itemIndex) => (
                            <p key={itemIndex}>{item}</p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
              
              {/* Action Links */}
              {step.links && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {step.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${link.style}`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ContributeTimeline = () => {
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, threshold: 0.2 });

  // Honest contribution steps based on actual MediBot repo
  const contributionSteps = [
    {
      title: "Explore & Understand",
      icon: "🔍",
      gradient: "from-blue-500 to-cyan-600",
      difficulty: { label: "Beginner", style: "bg-green-100 text-green-800" },
      description: "Start by exploring the MediBot repository, understanding the codebase, and identifying areas where you can contribute.",
      details: [
        "Read the comprehensive README.md documentation",
        "Explore the React frontend and FastAPI backend structure",
        "Check existing issues and discussions",
        "Join our community channels for questions"
      ],
      links: [
        { label: "📚 Repository", url: "https://github.com/CharithaReddy18/AI-health-chatbot", style: "bg-blue-100 text-blue-800 hover:bg-blue-200" },
        { label: "📋 Issues", url: "https://github.com/CharithaReddy18/AI-health-chatbot/issues", style: "bg-green-100 text-green-800 hover:bg-green-200" }
      ],
      expandable: [
        "The repository contains both frontend (React + Vite) and backend (FastAPI + Python) components.",
        "Medical knowledge is stored in structured JSON format with vector embeddings.",
        "The project uses Google Gemini AI for intelligent medical responses.",
        "Docker containers ensure consistent development environments."
      ]
    },
    {
      title: "Fork & Clone Repository",
      icon: "🍴",
      gradient: "from-purple-500 to-indigo-600",
      difficulty: { label: "Easy", style: "bg-blue-100 text-blue-800" },
      description: "Create your own copy of the MediBot repository to start making changes safely without affecting the main project.",
      code: `# Fork the repo on GitHub first, then clone your fork
git clone https://github.com/YOUR_USERNAME/AI-health-chatbot.git
cd AI-health-chatbot

# Add the original repo as upstream
git remote add upstream https://github.com/CharithaReddy18/AI-health-chatbot.git`,
      language: "bash",
      details: [
        "Click 'Fork' button on the GitHub repository page",
        "Clone your forked repository to your local machine",
        "Set up the upstream remote for syncing with main repo",
        "Verify your local setup is working correctly"
      ],
      links: [
        { label: "🍴 Fork Now", url: "https://github.com/CharithaReddy18/AI-health-chatbot/fork", style: "bg-purple-100 text-purple-800 hover:bg-purple-200" }
      ]
    },
    {
      title: "Setup Development Environment",
      icon: "⚙️",
      gradient: "from-orange-500 to-red-600",
      difficulty: { label: "Intermediate", style: "bg-yellow-100 text-yellow-800" },
      description: "Install dependencies and set up your local development environment for both frontend and backend components.",
      code: `# Backend Setup (Python + FastAPI)
cd backend
pip install -r requirements.txt

# Frontend Setup (React + Vite)
cd ../client
npm install

# Environment Variables
cp backend/.env.example backend/.env
# Add your Google Gemini API key to .env file`,
      language: "bash",
      details: [
        "Install Python 3.11+ and Node.js 16+",
        "Set up virtual environment for Python dependencies",
        "Install React dependencies with npm",
        "Configure environment variables for API keys",
        "Install Docker Desktop for containerized development"
      ],
      expandable: [
        "The backend requires Google Gemini API key for AI functionality.",
        "Frontend uses Vite for fast development and hot reload.",
        "Docker Compose orchestrates multiple services (API, DB, Frontend).",
        "Environment variables handle sensitive configuration data."
      ]
    },
    {
      title: "Choose Your Contribution Type",
      icon: "🎯",
      gradient: "from-teal-500 to-emerald-600",
      difficulty: { label: "Various", style: "bg-gray-100 text-gray-800" },
      description: "Select the type of contribution that matches your skills and interests. MediBot welcomes all kinds of contributions.",
      details: [
        "🐛 Bug Fixes: Identify and resolve existing issues",
        "✨ New Features: Implement medical chatbot enhancements",
        "📚 Documentation: Improve README, guides, and code comments",
        "🎨 UI/UX: Enhance user interface and experience",
        "🔧 DevOps: Improve deployment and infrastructure",
        "🧪 Testing: Add unit tests and integration tests"
      ],
      links: [
        { label: "🐛 Good First Issues", url: "https://github.com/CharithaReddy18/AI-health-chatbot/labels/good%20first%20issue", style: "bg-green-100 text-green-800 hover:bg-green-200" },
        { label: "✨ Feature Requests", url: "https://github.com/CharithaReddy18/AI-health-chatbot/labels/enhancement", style: "bg-blue-100 text-blue-800 hover:bg-blue-200" }
      ],
      expandable: [
        "Good first issues are specially marked for new contributors.",
        "Feature requests include UI improvements, new medical features, and AI enhancements.",
        "Documentation improvements are always welcome and valued.",
        "Testing contributions help ensure reliability and quality."
      ]
    },
    {
      title: "Create Feature Branch",
      icon: "🌿",
      gradient: "from-green-500 to-teal-600",
      difficulty: { label: "Easy", style: "bg-green-100 text-green-800" },
      description: "Create a dedicated branch for your changes to keep your work organized and separate from the main codebase.",
      code: `# Sync with upstream first
git fetch upstream
git checkout main
git merge upstream/main

# Create and switch to feature branch
git checkout -b feature/your-feature-name
# or for bug fixes:
git checkout -b fix/bug-description`,
      language: "bash",
      details: [
        "Use descriptive branch names (feature/*, fix/*, docs/*)",
        "Always sync with upstream before creating new branches",
        "Keep branches focused on single features or bug fixes",
        "Use conventional naming for easier project management"
      ]
    },
    {
      title: "Make Your Changes",
      icon: "💻",
      gradient: "from-indigo-500 to-purple-600",
      difficulty: { label: "Intermediate", style: "bg-yellow-100 text-yellow-800" },
      description: "Implement your changes following the project's coding standards and best practices for maintainable code.",
      details: [
        "Follow existing code style and patterns",
        "Write clear, descriptive commit messages",
        "Add comments for complex logic",
        "Update documentation if needed",
        "Test your changes locally before pushing"
      ],
      code: `# Run tests locally
npm run test        # Frontend tests
python -m pytest   # Backend tests

# Check code formatting
npm run lint        # Frontend linting
black .            # Python formatting`,
      language: "bash",
      expandable: [
        "Frontend uses ESLint and Prettier for code formatting.",
        "Backend follows PEP 8 Python style guidelines with Black formatter.",
        "All new features should include appropriate tests.",
        "Medical functionality requires extra validation and safety checks."
      ]
    },
    {
      title: "Test & Commit Changes",
      icon: "🧪",
      gradient: "from-pink-500 to-rose-600",
      difficulty: { label: "Important", style: "bg-red-100 text-red-800" },
      description: "Thoroughly test your changes and commit them with clear, descriptive messages following conventional commit format.",
      code: `# Stage your changes
git add .

# Commit with conventional format
git commit -m "feat: add symptom analysis feature"
git commit -m "fix: resolve chat interface bug"
git commit -m "docs: update contribution guidelines"

# Push to your fork
git push origin feature/your-feature-name`,
      language: "bash",
      details: [
        "Use conventional commit format: feat:, fix:, docs:, style:, refactor:, test:",
        "Write clear commit messages explaining what and why",
        "Test both frontend and backend functionality",
        "Ensure medical features include appropriate disclaimers",
        "Verify responsiveness and accessibility"
      ],
      links: [
        { label: "📝 Commit Convention", url: "https://www.conventionalcommits.org/", style: "bg-pink-100 text-pink-800 hover:bg-pink-200" }
      ]
    },
    {
      title: "Submit Pull Request",
      icon: "🚀",
      gradient: "from-violet-500 to-purple-600",
      difficulty: { label: "Final Step", style: "bg-purple-100 text-purple-800" },
      description: "Create a comprehensive pull request with clear description, screenshots, and proper linking to related issues.",
      details: [
        "Write a clear PR title and description",
        "Link related issues using keywords (fixes #123)",
        "Add screenshots for UI changes",
        "Request review from maintainers",
        "Be responsive to feedback and suggestions"
      ],
      code: `# PR Template Information:
## Description
Brief description of your changes

## Changes Made
- Added symptom analysis feature
- Updated UI components
- Fixed responsiveness issues

## Testing
- [ ] Tested locally
- [ ] Added unit tests
- [ ] Verified medical accuracy

## Screenshots (if applicable)
[Add screenshots here]`,
      language: "markdown",
      links: [
        { label: "🔄 Create PR", url: "https://github.com/CharithaReddy18/AI-health-chatbot/compare", style: "bg-violet-100 text-violet-800 hover:bg-violet-200" }
      ],
      expandable: [
        "Pull requests are reviewed by project maintainers and community members.",
        "Feedback is provided to help improve code quality and functionality.",
        "Medical features undergo additional review for accuracy and safety.",
        "Successful contributors are recognized in the project README."
      ]
    }
  ];

  return (
    <motion.section
      ref={timelineRef}
      className="relative z-10 py-16 sm:py-24 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={timelineInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-slate-800 mb-6">
            Contribution Process
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Follow these step-by-step instructions to contribute effectively to MediBot. 
            From setup to pull request, we'll guide you through the entire process.
          </p>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative">
          {contributionSteps.map((step, index) => (
            <TimelineStep
              key={index}
              step={step}
              index={index}
              isLast={index === contributionSteps.length - 1}
            />
          ))}
        </div>
        
        {/* Completion Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={timelineInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border-2 border-teal-200 rounded-3xl p-8">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-teal-800 mb-4">
              Congratulations! You're now a MediBot contributor!
            </h3>
            <p className="text-teal-700 text-lg leading-relaxed">
              Thank you for helping make healthcare AI more accessible and reliable. 
              Your contribution matters and helps improve lives around the world.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContributeTimeline;
