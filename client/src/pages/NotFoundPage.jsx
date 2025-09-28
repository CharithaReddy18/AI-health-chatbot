import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

// Enhanced Medical EKG Animation
const MedicalEKGCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    let width, height;
    const points = [];
    const segmentWidth = 3;
    let time = 0;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      
      points.length = 0;
      for (let i = 0; i <= Math.ceil(width / segmentWidth); i++) {
        points.push({ x: i * segmentWidth, y: height / 2 });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Enhanced gradient stroke
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, 'rgba(20, 184, 166, 0.8)'); // teal
      gradient.addColorStop(0.5, 'rgba(16, 185, 129, 0.9)'); // emerald
      gradient.addColorStop(1, 'rgba(6, 182, 212, 0.8)'); // cyan
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3;
      ctx.shadowBlur = 15;
      ctx.shadowColor = 'rgba(20, 184, 166, 0.4)';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);

      // Shift points smoothly
      for (let i = 1; i < points.length; i++) {
        points[i - 1].y = points[i].y;
      }

      // Generate sophisticated EKG pattern
      const lastPoint = points[points.length - 1];
      let newY = height / 2;
      
      // Professional EKG heartbeat pattern
      const cycleLength = points.length * 1.5;
      const phase = time % cycleLength;
      const beatPosition = cycleLength * 0.7;
      
      if (Math.abs(phase - beatPosition) < 25) {
        const diff = phase - beatPosition;
        if (diff > -3 && diff < 3) {
          newY -= 80; // Main R-wave peak
        } else if (diff > -8 && diff < -3) {
          newY += 20; // Q-wave
        } else if (diff > 3 && diff < 8) {
          newY -= 25; // S-wave
        } else if (diff > 8 && diff < 15) {
          newY += 15; // T-wave
        }
      }

      // Subtle baseline variation
      newY += Math.sin(time / 30) * 3;
      newY += (Math.random() - 0.5) * 2;
      
      // Occasional professional "artifact"
      if (Math.random() > 0.998) {
        newY += (Math.random() - 0.5) * 40;
      }

      lastPoint.y = Math.max(50, Math.min(height - 50, newY));
      
      // Smooth curve drawing
      for (let i = 1; i < points.length; i++) {
        if (i === 1) {
          ctx.lineTo(points[i].x, points[i].y);
        } else {
          const xc = (points[i - 1].x + points[i].x) / 2;
          const yc = (points[i - 1].y + points[i].y) / 2;
          ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc);
        }
      }

      ctx.stroke();
      
      // Add grid lines for medical authenticity
      ctx.strokeStyle = 'rgba(20, 184, 166, 0.1)';
      ctx.lineWidth = 1;
      ctx.shadowBlur = 0;
      
      // Horizontal grid lines
      for (let y = 0; y < height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      
      // Vertical grid lines
      for (let x = 0; x < width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      time++;
      animationFrameId = requestAnimationFrame(draw);
    };

    resizeCanvas();
    draw();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

// Professional Medical Floating Elements
const MedicalFloatingElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Professional gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-teal-100/30 to-emerald-100/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-100/25 to-cyan-100/25 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -25, 0],
          y: [0, 15, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Floating medical icons */}
      {[
        { icon: '🫀', top: '10%', left: '10%', delay: 0 },
        { icon: '🩺', top: '20%', right: '15%', delay: 2 },
        { icon: '⚕️', bottom: '25%', left: '8%', delay: 4 },
        { icon: '🧬', bottom: '15%', right: '10%', delay: 1 },
        { icon: '💊', top: '60%', left: '12%', delay: 3 }
      ].map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl opacity-15"
          style={{
            top: item.top,
            bottom: item.bottom,
            left: item.left,
            right: item.right
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.25, 0.1],
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
  );
};

const NotFoundPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const containerInView = useInView(containerRef, { once: true });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 text-slate-800 overflow-hidden">
      {/* Professional floating elements */}
      <MedicalFloatingElements />
      
      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={containerInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full max-w-6xl"
        >
          
          {/* Medical status indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={containerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-md border border-red-200/50 rounded-full shadow-lg">
              <motion.div
                className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-semibold text-slate-700">System Status: Page Not Found</span>
            </div>
          </motion.div>

          {/* Main error display card */}
          <div className="bg-white/90 backdrop-blur-md border border-white/60 rounded-3xl shadow-2xl overflow-hidden">
            
            {/* EKG Monitor Section */}
            <div className="relative h-64 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200">
              <MedicalEKGCanvas />
              
              {/* Monitor overlay */}
              <div className="absolute top-4 left-6 z-10">
                <div className="flex items-center gap-2 text-teal-600">
                  <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold">MEDICAL MONITOR</span>
                </div>
              </div>
              
              <div className="absolute top-4 right-6 z-10">
                <div className="text-right">
                  <div className="text-xs text-slate-500">HEART RATE</div>
                  <motion.div
                    className="text-lg font-bold text-teal-600"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    -- BPM
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 sm:p-12 text-center">
              
              {/* 404 Display */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={containerInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-8"
              >
                <motion.h1
                  className="text-8xl sm:text-9xl lg:text-[12rem] font-black leading-none mb-4"
                  style={{
                    background: 'linear-gradient(135deg, #14b8a6, #10b981, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  404
                </motion.h1>
                
                <motion.div
                  className="flex items-center justify-center gap-3 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={containerInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center text-white">
                    ⚠️
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">
                    Medical Record Not Found
                  </h2>
                </motion.div>
              </motion.div>

              {/* Professional description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={containerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="mb-10"
              >
                <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
                  The requested medical resource or page could not be located in our healthcare system database. 
                  This may indicate the page has been moved, archived, or is currently under medical review.
                </p>
                
                {/* Medical-style status indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                  {[
                    { label: 'System Status', value: 'Active', color: 'from-emerald-500 to-teal-500', icon: '✓' },
                    { label: 'Page Status', value: 'Missing', color: 'from-red-500 to-orange-500', icon: '✗' },
                    { label: 'Connection', value: 'Stable', color: 'from-blue-500 to-cyan-500', icon: '●' }
                  ].map((status, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={containerInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
                      className="p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-slate-200"
                    >
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <div className={`w-6 h-6 bg-gradient-to-r ${status.color} rounded-lg flex items-center justify-center text-white text-xs`}>
                          {status.icon}
                        </div>
                        <span className="text-xs font-semibold text-slate-600">{status.label}</span>
                      </div>
                      <p className="text-sm font-bold text-slate-800">{status.value}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Professional action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={containerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link to="/">
                  <motion.button
                    className="group relative overflow-hidden bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 hover:from-teal-600 hover:via-emerald-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {/* Button shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: isHovered ? ['0%', '100%', '200%'] : '0%'
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: isHovered ? Infinity : 0,
                        ease: "linear"
                      }}
                    />
                    
                    <span className="relative z-10 flex items-center gap-2">
                      <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs">
                        🏥
                      </div>
                      Return to Medical Dashboard
                    </span>
                  </motion.button>
                </Link>
                
                <motion.button
                  className="bg-white/80 hover:bg-white border-2 border-slate-200 hover:border-teal-300 text-slate-700 hover:text-teal-700 font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.history.back()}
                >
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-slate-200 rounded-full flex items-center justify-center text-xs">
                      ←
                    </div>
                    Go Back
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Professional footer message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={containerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-xs">
                ⚕️
              </div>
              <p className="text-sm text-slate-600">
                Need medical assistance? Contact our <span className="font-semibold text-blue-600">24/7 Support Team</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
