import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// --- Comprehensive Organ Data with Extended Information ---
const organData = {
  brain: {
    name: "Brain & Nervous System",
    shortDesc: "The command center of the nervous system",
    description: "The brain is the most complex organ in the human body, containing approximately 86 billion neurons. It serves as the central processing unit for all bodily functions, controlling everything from conscious thoughts and emotions to involuntary processes like heartbeat and breathing. The brain is divided into several regions, each with specialized functions including the cerebrum for higher-order thinking, the cerebellum for balance and coordination, and the brainstem for vital life functions.",
    keyFunctions: [
      "Conscious thought and decision-making",
      "Memory formation and retrieval", 
      "Emotional processing and regulation",
      "Motor control and coordination",
      "Sensory information processing",
      "Language comprehension and production"
    ],
    conditions: ["Alzheimer's Disease", "Stroke", "Migraines", "Epilepsy", "Parkinson's Disease", "Depression", "Anxiety Disorders", "Traumatic Brain Injury"],
    prevention: [
      "Regular mental stimulation and learning",
      "Adequate sleep (7-9 hours daily)",
      "Regular physical exercise",
      "Healthy Mediterranean-style diet",
      "Social engagement and relationships",
      "Stress management techniques"
    ],
    funFacts: [
      "Uses 20% of your body's total energy despite being only 2% of body weight",
      "Generates about 12-25 watts of electricity - enough to power a low-wattage LED bulb",
      "Has no pain receptors, which is why brain surgery can be performed while awake",
      "Contains more neural connections than there are stars in the Milky Way"
    ],
    color: "purple",
    gradient: "from-purple-500 to-indigo-600",
    icon: "🧠"
  },
  heart: {
    name: "Cardiovascular System",
    shortDesc: "The body's circulation powerhouse",
    description: "The heart is a remarkable muscular organ that pumps approximately 5 liters of blood through your body every minute. This four-chambered organ works tirelessly, beating around 100,000 times per day and 35 million times per year. The cardiovascular system includes not just the heart, but also an extensive network of arteries, veins, and capillaries that transport oxygen, nutrients, hormones, and waste products throughout the body.",
    keyFunctions: [
      "Pumping oxygenated blood to all body tissues",
      "Returning deoxygenated blood to the lungs",
      "Maintaining blood pressure and circulation",
      "Distributing nutrients and hormones",
      "Removing metabolic waste products",
      "Temperature regulation through blood flow"
    ],
    conditions: ["Coronary Heart Disease", "Heart Attack", "Heart Failure", "Arrhythmias", "High Blood Pressure", "Stroke", "Peripheral Artery Disease", "Cardiomyopathy"],
    prevention: [
      "Regular cardiovascular exercise (150+ minutes weekly)",
      "Heart-healthy diet low in saturated fats",
      "Maintain healthy weight and BMI",
      "Don't smoke and limit alcohol consumption",
      "Manage stress effectively",
      "Monitor blood pressure and cholesterol"
    ],
    funFacts: [
      "Beats approximately 2.5 billion times in an average lifetime",
      "Pumps about 1.5 gallons of blood per minute",
      "The heart's electrical system can continue beating even outside the body",
      "Women's hearts typically beat faster than men's hearts"
    ],
    color: "red",
    gradient: "from-red-500 to-pink-600",
    icon: "❤️"
  },
  lungs: {
    name: "Respiratory System", 
    shortDesc: "Essential oxygen exchange organs",
    description: "The respiratory system consists of the lungs and associated structures that facilitate the vital process of gas exchange. Your lungs contain approximately 300-500 million tiny air sacs called alveoli, which provide an enormous surface area (about the size of a tennis court) for oxygen to enter the bloodstream and carbon dioxide to be removed. The respiratory system also plays crucial roles in maintaining pH balance, vocalization, and protecting against airborne pathogens.",
    keyFunctions: [
      "Oxygen absorption from inhaled air",
      "Carbon dioxide removal from the blood",
      "Maintaining blood pH balance",
      "Filtering airborne particles and pathogens",
      "Vocalization and speech production",
      "Regulation of body temperature through breathing"
    ],
    conditions: ["Asthma", "Chronic Obstructive Pulmonary Disease (COPD)", "Pneumonia", "Lung Cancer", "Tuberculosis", "Pulmonary Embolism", "Sleep Apnea", "Bronchitis"],
    prevention: [
      "Avoid smoking and secondhand smoke exposure",
      "Regular exercise to strengthen respiratory muscles",
      "Maintain good indoor air quality",
      "Get vaccinated against respiratory infections",
      "Practice deep breathing exercises",
      "Avoid exposure to air pollutants and chemicals"
    ],
    funFacts: [
      "You breathe approximately 20,000 times per day",
      "The right lung has three lobes while the left has only two to make room for the heart",
      "Lungs are the only organs that can float on water due to air content",
      "The surface area of lungs is roughly equivalent to a tennis court"
    ],
    color: "cyan",
    gradient: "from-cyan-500 to-blue-600",
    icon: "🫁"
  },
  digestive: {
    name: "Digestive System",
    shortDesc: "Complex nutrient processing system",
    description: "The digestive system is a sophisticated network of organs working together to break down food, absorb nutrients, and eliminate waste. This system includes the mouth, esophagus, stomach, small intestine, large intestine, liver, pancreas, and gallbladder. The entire digestive process from eating to elimination typically takes 24-72 hours, during which complex carbohydrates, proteins, and fats are broken down into molecules small enough for cellular absorption.",
    keyFunctions: [
      "Mechanical and chemical food breakdown",
      "Nutrient absorption into bloodstream",
      "Water and electrolyte balance",
      "Waste elimination and detoxification",
      "Immune system support through gut bacteria",
      "Hormone production affecting appetite and metabolism"
    ],
    conditions: ["Irritable Bowel Syndrome (IBS)", "Crohn's Disease", "Ulcerative Colitis", "GERD", "Peptic Ulcers", "Gallstones", "Celiac Disease", "Inflammatory Bowel Disease"],
    prevention: [
      "Eat a fiber-rich, balanced diet",
      "Stay adequately hydrated",
      "Regular meal timing and portion control",
      "Limit processed foods and excessive fats",
      "Maintain healthy gut microbiome",
      "Manage stress levels effectively"
    ],
    funFacts: [
      "The small intestine is about 20 feet long when fully extended",
      "Your stomach produces 2-3 liters of gastric acid daily",
      "The gut contains more bacteria than there are human cells in your body",
      "Food spends only 2-6 hours in the stomach but 12-48 hours in the intestines"
    ],
    color: "green",
    gradient: "from-green-500 to-emerald-600", 
    icon: "🥗"
  },
  musculoskeletal: {
    name: "Musculoskeletal System",
    shortDesc: "Framework and movement system",
    description: "The musculoskeletal system combines the skeletal system (206 bones in adults) with over 600 skeletal muscles to provide structure, support, and movement to the human body. This system also includes tendons, ligaments, cartilage, and joints. Beyond providing mechanical support, bones serve as mineral reservoirs for calcium and phosphorus, produce blood cells in the bone marrow, and protect vital organs. Muscles generate force and motion while maintaining posture and generating heat.",
    keyFunctions: [
      "Structural support and body framework",
      "Movement and locomotion",
      "Protection of internal organs",
      "Mineral storage (calcium, phosphorus)",
      "Blood cell production in bone marrow",
      "Heat generation through muscle contractions"
    ],
    conditions: ["Osteoporosis", "Arthritis", "Osteoarthritis", "Rheumatoid Arthritis", "Fractures", "Muscle Strains", "Tendonitis", "Fibromyalgia"],
    prevention: [
      "Weight-bearing exercises and strength training",
      "Adequate calcium and vitamin D intake",
      "Maintain healthy body weight",
      "Good posture and ergonomics",
      "Avoid smoking and excessive alcohol",
      "Regular stretching and flexibility exercises"
    ],
    funFacts: [
      "Bones are 5 times stronger than steel by weight",
      "You have the same number of bones in your neck as a giraffe (7 vertebrae)",
      "The human skeleton completely renews itself every 10 years",
      "Your thigh bone (femur) can support 30 times your body weight"
    ],
    color: "blue",
    gradient: "from-blue-500 to-indigo-600",
    icon: "🦴"
  },
  liver: {
    name: "Liver & Detoxification",
    shortDesc: "Body's chemical processing plant",
    description: "The liver is the largest internal organ and performs over 500 different functions essential for life. This remarkable organ acts as the body's chemical factory, filtering toxins, producing bile for fat digestion, synthesizing proteins, storing glucose as glycogen, and metabolizing medications. The liver has an extraordinary ability to regenerate itself, being able to restore up to 75% of its mass when damaged, making it unique among human organs.",
    keyFunctions: [
      "Detoxification and toxin neutralization",
      "Protein synthesis including blood clotting factors",
      "Glucose regulation and glycogen storage",
      "Bile production for fat digestion",
      "Medication and hormone metabolism",
      "Immune system support"
    ],
    conditions: ["Hepatitis (A, B, C)", "Fatty Liver Disease", "Cirrhosis", "Liver Cancer", "Hemochromatosis", "Wilson's Disease", "Primary Biliary Cholangitis", "Liver Failure"],
    prevention: [
      "Limit alcohol consumption",
      "Maintain healthy weight and diet",
      "Avoid exposure to toxins and chemicals",
      "Get vaccinated against hepatitis A and B", 
      "Use medications responsibly",
      "Practice safe behaviors to prevent hepatitis C"
    ],
    funFacts: [
      "Can regenerate up to 75% of its tissue when damaged",
      "Processes over 1 liter of blood per minute",
      "Produces 800-1000ml of bile daily",
      "Performs over 500 different metabolic functions"
    ],
    color: "orange",
    gradient: "from-orange-500 to-red-600",
    icon: "🫘"
  },
  kidneys: {
    name: "Renal System",
    shortDesc: "Body's filtration and waste removal",
    description: "The kidneys are two bean-shaped organs that serve as the body's sophisticated filtration system. Each kidney contains approximately one million nephrons, microscopic filtering units that remove waste products, excess water, and toxins from the blood to produce urine. Beyond waste removal, the kidneys play crucial roles in maintaining blood pressure, producing red blood cells, activating vitamin D, and maintaining the body's delicate electrolyte and acid-base balance.",
    keyFunctions: [
      "Blood filtration and waste removal",
      "Fluid and electrolyte balance maintenance",
      "Blood pressure regulation",
      "Red blood cell production stimulation",
      "Vitamin D activation for bone health",
      "Acid-base balance maintenance"
    ],
    conditions: ["Chronic Kidney Disease", "Kidney Stones", "Urinary Tract Infections", "Glomerulonephritis", "Polycystic Kidney Disease", "Kidney Cancer", "Acute Kidney Injury", "Diabetic Nephropathy"],
    prevention: [
      "Stay well-hydrated with adequate water intake",
      "Maintain healthy blood pressure and diabetes control",
      "Eat a balanced diet low in sodium",
      "Avoid overuse of pain medications",
      "Don't smoke and limit alcohol consumption",
      "Regular exercise and weight management"
    ],
    funFacts: [
      "Filter about 50 gallons of blood daily",
      "Can function normally with just 10% of normal kidney function",
      "Produce about 1-2 liters of urine daily",
      "Each kidney weighs only about 5 ounces but receives 20% of heart's blood output"
    ],
    color: "teal",
    gradient: "from-teal-500 to-cyan-600",
    icon: "🫘"
  },
  endocrine: {
    name: "Endocrine System",
    shortDesc: "Body's chemical messenger network",
    description: "The endocrine system is a complex network of glands that produce and secrete hormones directly into the bloodstream. These chemical messengers regulate virtually every aspect of body function, including metabolism, growth and development, reproduction, mood, and stress response. Major endocrine glands include the pituitary (master gland), thyroid, adrenals, pancreas, ovaries, and testes. This system works closely with the nervous system to maintain homeostasis.",
    keyFunctions: [
      "Hormone production and regulation",
      "Metabolism and energy balance control",
      "Growth and development regulation",
      "Reproductive function control",
      "Stress response management",
      "Calcium and bone metabolism regulation"
    ],
    conditions: ["Diabetes", "Thyroid Disorders", "Adrenal Insufficiency", "Growth Hormone Deficiency", "Polycystic Ovary Syndrome (PCOS)", "Osteoporosis", "Cushing's Syndrome", "Hormone Imbalances"],
    prevention: [
      "Maintain healthy diet and regular exercise",
      "Manage stress through relaxation techniques",
      "Get adequate sleep (7-9 hours nightly)",
      "Avoid endocrine-disrupting chemicals",
      "Regular health screenings and monitoring",
      "Maintain healthy body weight"
    ],
    funFacts: [
      "The pituitary gland is only pea-sized but controls most other glands",
      "Hormones can affect your body in amounts as small as one part per trillion",
      "The thyroid gland uses iodine to make hormones that control metabolism",
      "Adrenaline can increase your strength by up to 15% in emergency situations"
    ],
    color: "yellow",
    gradient: "from-yellow-500 to-orange-600",
    icon: "⚡"
  },
  immune: {
    name: "Immune System",
    shortDesc: "Body's defense and protection network",
    description: "The immune system is your body's sophisticated defense network that protects against pathogens, toxins, and abnormal cells. It consists of white blood cells, antibodies, lymph nodes, spleen, bone marrow, and other specialized tissues. The immune system has two main components: innate immunity (immediate, non-specific response) and adaptive immunity (specific, memory-based response that provides long-term protection). This system constantly surveils for threats while distinguishing between self and non-self.",
    keyFunctions: [
      "Pathogen recognition and elimination",
      "Tissue repair and wound healing",
      "Cancer cell surveillance and destruction",
      "Allergic reaction management",
      "Immunological memory formation",
      "Inflammation regulation and resolution"
    ],
    conditions: ["Autoimmune Diseases", "Immunodeficiency Disorders", "Allergies", "Asthma", "Rheumatoid Arthritis", "Multiple Sclerosis", "Lupus", "HIV/AIDS"],
    prevention: [
      "Balanced nutrition with vitamins and minerals",
      "Regular moderate exercise",
      "Adequate sleep and stress management",
      "Vaccination according to schedule",
      "Good hygiene practices",
      "Avoid smoking and limit alcohol"
    ],
    funFacts: [
      "Your immune system has a memory that can last a lifetime",
      "Produces about 25 billion new white blood cells daily",
      "The appendix may serve as a reservoir for beneficial bacteria",
      "Stress can suppress immune function for days or weeks"
    ],
    color: "indigo",
    gradient: "from-indigo-500 to-purple-600",
    icon: "🛡️"
  }
};

// --- Enhanced Organ Card Component ---
const OrganCard = ({ organKey, data, onCardClick, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.8,
        type: "spring",
        stiffness: 100 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onCardClick(organKey)}
      className="group cursor-pointer"
    >
      <motion.div
        className="relative bg-white/90 backdrop-blur-md border border-white/60 rounded-3xl p-6 sm:p-8 hover:bg-white transition-all duration-500 overflow-hidden"
        style={{
          boxShadow: isHovered 
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.15)' 
            : '0 8px 25px -8px rgba(0, 0, 0, 0.1)'
        }}
        whileHover={{ y: -12, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Animated gradient border */}
        <motion.div
          className={`absolute -inset-1 bg-gradient-to-r ${data.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r ${data.gradient} rounded-full opacity-0 group-hover:opacity-60`}
              style={{
                left: `${20 + i * 30}%`,
                top: `${15 + i * 25}%`,
              }}
              animate={isHovered ? {
                y: [0, -30, 0],
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
          {/* Icon */}
          <motion.div
            className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${data.gradient} rounded-2xl flex items-center justify-center text-white text-3xl sm:text-4xl shadow-lg mb-6`}
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.8 }}
          >
            {data.icon}
          </motion.div>
          
          {/* Title */}
          <motion.h3
            className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-800 mb-4 leading-tight"
            animate={{ 
              color: isHovered ? '#0f766e' : '#1e293b'
            }}
          >
            {data.name}
          </motion.h3>
          
          {/* Description */}
          <motion.p
            className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed mb-6"
            animate={{ opacity: isHovered ? 1 : 0.8 }}
          >
            {data.shortDesc}
          </motion.p>
          
          {/* Condition Count */}
          <div className="flex items-center gap-3">
            <div className={`px-3 py-2 bg-gradient-to-r ${data.gradient} bg-opacity-10 rounded-full`}>
              <span className="text-xs sm:text-sm font-semibold text-slate-700">
                {data.conditions.length} Conditions
              </span>
            </div>
            
            <motion.div
              className="text-slate-400"
              animate={{ x: isHovered ? 10 : 0 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Comprehensive Organ Detail Modal ---
const OrganModal = ({ organ, onClose }) => {
  if (!organ) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-4xl max-h-[90vh] bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-y-auto"
        >
          {/* Header */}
          <div className={`bg-gradient-to-r ${organ.gradient} p-6 sm:p-8 text-white`}>
            <div className="flex justify-between items-start">
              <div>
                <div className="text-5xl sm:text-6xl mb-4">{organ.icon}</div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3">{organ.name}</h2>
                <p className="text-lg sm:text-xl opacity-90">{organ.shortDesc}</p>
              </div>
              <button 
                onClick={onClose} 
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Description */}
            <section>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                📖 Overview
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">{organ.description}</p>
            </section>
            
            {/* Key Functions */}
            <section>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                ⚙️ Key Functions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {organ.keyFunctions.map((func, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200"
                  >
                    <div className={`w-8 h-8 bg-gradient-to-r ${organ.gradient} rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1`}>
                      ✓
                    </div>
                    <span className="text-slate-700 text-sm sm:text-base leading-relaxed">{func}</span>
                  </motion.div>
                ))}
              </div>
            </section>
            
            {/* Common Conditions */}
            <section>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                🩺 Common Conditions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {organ.conditions.map((condition, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-3 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <span className="text-red-800 text-sm sm:text-base font-medium">{condition}</span>
                  </motion.div>
                ))}
              </div>
            </section>
            
            {/* Prevention Tips */}
            <section>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                🛡️ Prevention & Care
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {organ.prevention.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-200"
                  >
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                      💚
                    </div>
                    <span className="text-green-800 text-sm sm:text-base leading-relaxed">{tip}</span>
                  </motion.div>
                ))}
              </div>
            </section>
            
            {/* Fun Facts */}
            <section>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                🤔 Amazing Facts
              </h3>
              <div className="space-y-4">
                {organ.funFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">🔍</div>
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed">{fact}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
            
            {/* Medical Disclaimer */}
            <section className="border-t border-slate-200 pt-6">
              <div className="p-4 sm:p-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">⚕️</div>
                  <div>
                    <h4 className="font-bold text-amber-800 text-lg mb-2">Medical Disclaimer</h4>
                    <p className="text-amber-700 text-sm sm:text-base leading-relaxed">
                      This information is for educational purposes only and should not replace professional medical advice. 
                      Always consult healthcare professionals for accurate diagnosis, treatment recommendations, and medical care. 
                      If you experience symptoms or health concerns, seek appropriate medical attention promptly.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// --- Main Human Body Explorer Component ---
const HumanBodyExplorer = () => {
  const [selectedOrganKey, setSelectedOrganKey] = useState(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  
  const headerInView = useInView(headerRef, { once: true, threshold: 0.3 });
  const gridInView = useInView(gridRef, { once: true, threshold: 0.2 });

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
          <div className="w-full h-full bg-gradient-to-r from-blue-200/40 to-purple-200/40 rounded-full blur-3xl"></div>
        </motion.div>
        
        {/* Floating medical icons */}
        {['🩺', '🫀', '🧠', '🫁', '💊'].map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10"
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + Math.random() * 50}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 15, -15, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              delay: i * 2,
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Enhanced Header */}
      <motion.header
        ref={headerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 pt-20 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 text-center"
      >
        <div className="max-w-6xl mx-auto">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-md border border-blue-200/50 rounded-full mb-8 shadow-lg text-base sm:text-lg"
          >
            <motion.div 
              className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-semibold text-slate-700">Interactive Medical Education</span>
            <div className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
              <span className="text-sm font-bold text-blue-700">Explore</span>
            </div>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight"
          >
            Human Body
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Explorer
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl sm:text-2xl lg:text-3xl text-slate-600 max-w-5xl mx-auto leading-relaxed mb-12"
          >
            Discover the incredible complexity and beauty of human anatomy. 
            Learn about organ systems, their functions, common conditions, and how to maintain optimal health.
          </motion.p>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-6 text-lg sm:text-xl"
          >
            {[
              { label: 'Body Systems', value: '9' },
              { label: 'Health Conditions', value: '70+' },
              { label: 'Prevention Tips', value: '50+' },
              { label: 'Amazing Facts', value: '35+' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="px-6 py-3 bg-white/70 backdrop-blur-sm border border-white/60 rounded-xl shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="font-black text-2xl sm:text-3xl text-blue-600">{stat.value}</div>
                <div className="font-semibold text-slate-700">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.header>

      {/* Enhanced Grid Section */}
      <motion.section
        ref={gridRef}
        className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={gridInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-slate-800 mb-6">
            Explore Body Systems
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Click on any system to learn about its functions, common conditions, prevention strategies, and fascinating facts.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {Object.entries(organData).map(([key, data], index) => (
            <OrganCard 
              key={key} 
              organKey={key} 
              data={data} 
              onCardClick={setSelectedOrganKey}
              index={index}
            />
          ))}
        </div>
      </motion.section>
      
      {/* Educational Footer */}
      <div className="relative z-10 bg-gradient-to-r from-slate-100 to-blue-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-3xl p-8 sm:p-12"
          >
            <div className="flex items-start gap-6">
              <motion.div
                className="text-5xl sm:text-6xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🎓
              </motion.div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4">Educational Purpose</h3>
                <p className="text-blue-700 text-lg sm:text-xl leading-relaxed mb-6">
                  The Human Body Explorer is designed to provide comprehensive educational information about human anatomy and physiology. 
                  This interactive learning tool helps users understand how their bodies work and promotes health awareness.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-200 text-blue-800 rounded-full font-semibold">Anatomy Education</span>
                  <span className="px-4 py-2 bg-purple-200 text-purple-800 rounded-full font-semibold">Health Awareness</span>
                  <span className="px-4 py-2 bg-teal-200 text-teal-800 rounded-full font-semibold">Prevention Focus</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <OrganModal 
        organ={selectedOrganKey ? organData[selectedOrganKey] : null} 
        onClose={() => setSelectedOrganKey(null)} 
      />
    </div>
  );
};

export default HumanBodyExplorer;
