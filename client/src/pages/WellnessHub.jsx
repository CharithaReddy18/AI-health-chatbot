import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import BMICalculator from '../components/WellnessHubComponents/BMICalculator';
import CalorieCalculator from '../components/WellnessHubComponents/CalorieCalculator';
import HeartRateCalculator from '../components/WellnessHubComponents/HeartRateCalculator';
import WaterIntakeCalculator from '../components/WellnessHubComponents/WaterIntakeCalculator';
import SleepCalculator from '../components/WellnessHubComponents/SleepCalculator';
import ProteinCalculator from '../components/WellnessHubComponents/ProteinCalculator';
import MacroCalculator from '../components/WellnessHubComponents/MacroCalculator';
import VO2MaxCalculator from '../components/WellnessHubComponents/VO2MaxCalculator';
import BSACalculator from '../components/WellnessHubComponents/BSACalculator';
import CaffeineCalculator from '../components/WellnessHubComponents/CaffeineCalculator';
import OneRepMaxCalculator from '../components/WellnessHubComponents/OneRepMaxCalculator';
import RunningPaceCalculator from '../components/WellnessHubComponents/RunningPaceCalculator';
import BodyFatCalculator from '../components/WellnessHubComponents/BodyFatCalculator';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 12,
        },
    },
};

// --- Main Wellness Hub Page ---
const WellnessHub = () => {
    const headerRef = useRef(null);
    const gridRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true, threshold: 0.5 });
    const gridInView = useInView(gridRef, { once: true, threshold: 0.1 });

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 text-slate-800 overflow-x-hidden">
            {/* Medical-themed Floating Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-teal-100/40 to-emerald-100/40 rounded-full blur-2xl"></div>
                <div className="absolute top-1/3 left-10 w-48 h-48 bg-gradient-to-r from-blue-100/30 to-cyan-100/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-100/25 to-purple-100/25 rounded-full blur-3xl"></div>
                
                {/* Medical Cross Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-1/4 left-1/4 w-6 h-20 bg-teal-600 rounded-full"></div>
                    <div className="absolute top-1/3 left-1/4 w-20 h-6 bg-teal-600 rounded-full"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-4 h-16 bg-emerald-600 rounded-full"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-16 h-4 bg-emerald-600 rounded-full"></div>
                </div>
            </div>

            {/* Hero Header Section */}
            <motion.header
                ref={headerRef}
                initial={{ opacity: 0, y: 30 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative z-10 pt-16 sm:pt-24 pb-12 sm:pb-20 px-4 sm:px-6"
            >
                <div className="max-w-6xl mx-auto text-center">
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full mb-6"
                    >
                        <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-teal-700">Advanced Health Analytics</span>
                    </motion.div>
                    
                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-800"
                    >
                        Advanced Wellness
                        <br />
                        <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                            Calculation Hub
                        </span>
                    </motion.h1>
                    
                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light px-4"
                    >
                        Comprehensive collection of scientifically-backed health calculators and wellness tools 
                        to help you monitor, understand, and optimize your health metrics with medical precision.
                    </motion.p>

                    {/* Feature Pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8"
                    >
                        {[
                            { icon: '📊', text: 'Real-time Results' },
                            { icon: '🧬', text: 'Scientific Formulas' },
                            { icon: '⚕️', text: 'Medical Grade' },
                            { icon: '📱', text: 'Mobile Friendly' }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={headerInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                                className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-white/80 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                                <span className="text-lg">{feature.icon}</span>
                                <span className="text-sm font-medium text-slate-700">{feature.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.header>

            {/* Calculators Grid Section */}
            <div className="relative z-10 max-w-7xl mx-auto py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={gridRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={gridInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 auto-rows-max"
                >
                    <motion.div variants={itemVariants}><BMICalculator /></motion.div>
                    <motion.div variants={itemVariants}><CalorieCalculator /></motion.div>
                    <motion.div variants={itemVariants}><HeartRateCalculator /></motion.div>
                    <motion.div variants={itemVariants}><WaterIntakeCalculator /></motion.div>
                    <motion.div variants={itemVariants}><SleepCalculator /></motion.div>
                    <motion.div variants={itemVariants}><ProteinCalculator /></motion.div>
                    <motion.div variants={itemVariants}><MacroCalculator /></motion.div>
                    <motion.div variants={itemVariants}><VO2MaxCalculator /></motion.div>
                    <motion.div variants={itemVariants}><BSACalculator /></motion.div>
                    <motion.div variants={itemVariants}><CaffeineCalculator /></motion.div>
                    <motion.div variants={itemVariants}><OneRepMaxCalculator /></motion.div>
                    <motion.div variants={itemVariants}><RunningPaceCalculator /></motion.div>
                    <motion.div variants={itemVariants} className="col-span-full lg:col-span-3 xl:col-span-4">
                        <BodyFatCalculator />
                    </motion.div>
                </motion.div>
            </div>

            {/* Medical Disclaimer Footer */}
            <div className="relative z-10 bg-gradient-to-r from-slate-100 to-blue-100 border-t border-slate-200">
                <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        {/* Warning Card */}
                        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-8">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0">
                                        ⚠️
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-red-700">Medical Disclaimer</h3>
                                </div>
                                
                                {/* Evidence Badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 rounded-full">
                                    <span className="text-xs font-medium text-blue-700">Educational Purpose Only</span>
                                </div>
                            </div>
                            
                            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                                <strong className="text-red-600">Important Notice:</strong> These health calculators are designed for 
                                educational and informational purposes only. They utilize established medical formulas but should never 
                                replace professional medical advice, diagnosis, or treatment. Always consult qualified healthcare 
                                professionals for personalized medical guidance, especially before making significant changes to your 
                                diet, exercise routine, or health management plan. Individual results may vary based on personal health 
                                conditions, genetics, and other factors.
                            </p>
                            
                            {/* Trust Indicators */}
                            <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-red-200">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    <span className="text-sm text-slate-600 font-medium">Evidence-Based Formulas</span>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    <span className="text-sm text-slate-600 font-medium">Privacy Protected</span>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm text-slate-600 font-medium">Medically Reviewed</span>
                                </div>
                            </div>
                        </div>

                        {/* Footer Credits */}
                        {/* <div className="text-center">
                            <p className="text-slate-500 text-sm">
                                Built with ❤️ for better health • © 2025 MediCore Wellness Hub • 
                                <span className="text-teal-600 font-medium"> Empowering Health Through Technology</span>
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Floating Health Icons */}
            <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
                {[
                    { icon: '🫀', top: '15%', left: '5%', delay: 0 },
                    { icon: '💊', top: '25%', right: '8%', delay: 2 },
                    { icon: '🩺', bottom: '30%', left: '3%', delay: 4 },
                    { icon: '⚕️', bottom: '20%', right: '5%', delay: 1 },
                    { icon: '🧬', top: '60%', left: '7%', delay: 3 }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        animate={{
                            y: [0, -15, 0],
                            opacity: [0.1, 0.3, 0.1],
                            rotate: [0, 5, 0]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            delay: item.delay,
                            ease: "easeInOut"
                        }}
                        className="absolute text-2xl sm:text-3xl opacity-10"
                        style={{
                            top: item.top,
                            bottom: item.bottom,
                            left: item.left,
                            right: item.right
                        }}
                    >
                        {item.icon}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WellnessHub;
