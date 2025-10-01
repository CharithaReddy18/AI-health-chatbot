import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const EmergencyProtocols = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, threshold: 0.3 });
  const contentInView = useInView(contentRef, { once: true, threshold: 0.1 });

  const [selectedCountry, setSelectedCountry] = useState('us');

  // Expanded and verified emergency numbers
  const emergencyNumbers = {
    us: { emergency: '911', poison: '1-800-222-1222', suicide: '988', flag: '🇺🇸', name: 'United States' },
    india: { emergency: '108', police: '100', fire: '101', ambulance: '102', flag: '🇮🇳', name: 'India' },
    uk: { emergency: '999', nhs: '111', flag: '🇬🇧', name: 'United Kingdom' },
    canada: { emergency: '911', poison: '1-800-268-9017', flag: '🇨🇦', name: 'Canada' },
    australia: { emergency: '000', lifeline: '13 11 14', flag: '🇦🇺', name: 'Australia' }
  };

  // Expanded critical emergencies list
  const criticalEmergencies = [
    {
      icon: '🫀',
      title: 'Cardiac Arrest / Attack',
      symptoms: ['Chest pain/discomfort radiating to jaw/arm/back', 'Sudden dizziness or fainting', 'Severe shortness of breath', 'Cold sweat, nausea, vomiting'],
      action: 'Call emergency services immediately. Keep person still and calm. Offer aspirin if non-allergic and advised by emergency operator.'
    },
    {
      icon: '🧠',
      title: 'Stroke Signs (F.A.S.T.)',
      symptoms: ['Face drooping on one side', 'Arm weakness/numbness, inability to lift both arms', 'Speech difficulty (slurring, confusion)', 'Sudden, severe headache or loss of balance'],
      action: 'F.A.S.T. - Call {currentEmergencyNumber} immediately. Note the time symptoms started.'
    },
    {
      icon: '🩸',
      title: 'Uncontrolled Hemorrhage',
      symptoms: ['Blood spurting or profusely flowing', 'Bleeding that doesn\'t stop after 10 min of firm pressure', 'Blood soaking through bandages quickly', 'Signs of shock (rapid heart rate, confusion)'],
      action: 'Apply firm, continuous direct pressure to the wound. Elevate the limb if possible. Call {currentEmergencyNumber} immediately.'
    },
    {
      icon: '🫁',
      title: 'Severe Respiratory Distress',
      symptoms: ['Labored, gasping, or extremely shallow breathing', 'Inability to speak in full sentences', 'Blue or gray discoloration of lips/nail beds (cyanosis)', 'Choking (complete inability to cough or breathe)'],
      action: 'Call {currentEmergencyNumber}. Assist the person into a comfortable position (sitting up). Begin Heimlich if choking is confirmed.'
    },
    {
      icon: '💉',
      title: 'Severe Allergic Reaction (Anaphylaxis)',
      symptoms: ['Swelling of face/throat/tongue', 'Difficulty breathing or wheezing', 'Rapid pulse, severe drop in blood pressure', 'Hives, severe itching, or sudden vomiting/diarrhea'],
      action: 'If an EpiPen is available, administer immediately. Call {currentEmergencyNumber} even if symptoms improve.'
    },
    {
      icon: '🤕',
      title: 'Traumatic Head Injury',
      symptoms: ['Loss of consciousness, even briefly', 'Pupils of unequal size', 'Clear fluid or blood leaking from nose/ears', 'Repeated vomiting or severe confusion/seizures'],
      action: 'Stabilize the neck and head. Do not move the person. Call {currentEmergencyNumber} immediately.'
    },
  ];

  // Expanded first aid basics with detailed steps
  const firstAidBasics = [
    {
      title: 'CPR: Adult Unresponsive',
      icon: '🫀',
      steps: [
        'Ensure the scene is safe, then check for breathing and responsiveness.',
        'If no response/breathing, call emergency services ({currentEmergencyNumber}) and retrieve an AED if available.',
        'Start **Chest Compressions**: Push hard and fast (100–120 compressions per minute) in the center of the chest.',
        'Deliver 30 compressions, then 2 rescue breaths (if trained and willing).',
        'Continue 30:2 cycles until professional help arrives or the person revives.'
      ]
    },
    {
      title: 'Seizure Management',
      icon: '⚡',
      steps: [
        'Protect the person from injury; move hard or sharp objects away.',
        'Place something soft and flat under their head (jacket, towel).',
        'Turn them gently onto their side to keep the airway clear.',
        'Do NOT hold them down or put anything in their mouth.',
        'Note the duration. Call {currentEmergencyNumber} if the seizure lasts > 5 minutes, if the person is injured, or if it is their first seizure.'
      ]
    },
    {
      title: 'Choking (Heimlich Maneuver)',
      icon: '🗣️',
      steps: [
        'Ask, "Are you choking?" If they can cough or speak, encourage them to keep coughing.',
        'If the person cannot cough, speak, or breathe: deliver 5 firm **back blows** between the shoulder blades.',
        'Follow with 5 **abdominal thrusts** (Heimlich): stand behind, fist above navel, thrust inward and upward.',
        'Repeat the cycle of 5 back blows and 5 thrusts until the object is expelled or they become unresponsive.'
      ]
    },
    {
      title: 'Severe Burns Protocol',
      icon: '🔥',
      steps: [
        'Stop the burning process (smother flames, remove chemical source).',
        'Cool the burn with **cool running water** for a minimum of 10-20 minutes.',
        'Remove any jewelry or tight clothing *before* swelling begins.',
        'Cover the burn lightly with a sterile, non-fluffy dressing (or clean plastic wrap).',
        'Do NOT pop blisters. Do NOT use ice, butter, or creams. Seek professional medical attention.'
      ]
    }
  ];

  const nonEmergencies = [
    { icon: '🤧', title: 'Viral Symptoms', description: 'Colds, flu-like symptoms, or general malaise where fever is manageable and breathing is normal.' },
    { icon: '💊', title: 'Medication Info', description: 'General OTC queries, nutritional supplement safety, or drug interaction information.' },
    { icon: '🥗', title: 'Nutrition Guidance', description: 'Customized dietary recommendations, calculating nutritional needs, or healthy eating plans.' },
    { icon: '🏃', title: 'Exercise Planning', description: 'Fitness recommendations, routine creation, or safe warm-up/cool-down techniques.' },
    { icon: '😴', title: 'Sleep Tips', description: 'Guidance on improving sleep hygiene, understanding cycles, and optimizing rest.' },
    { icon: '🧘', title: 'Mental Wellness', description: 'Stress reduction techniques, guided mindfulness, and general anxiety coping strategies.' }
  ];

  const currentEmergencyNumber = emergencyNumbers[selectedCountry].emergency;
  const selectedCountryData = emergencyNumbers[selectedCountry];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden font-inter">
      
      {/* Background elements - Muted and subtle */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl opacity-30 transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Hero Header */}
      <motion.header
        ref={heroRef}
        initial={{ opacity: 0, y: 30 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-slate-900"
          >
            Emergency & Safety <br className="sm:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-800 to-red-900">
              Protocol Manual
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl sm:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-medium px-4"
          >
            Immediate, high-stakes information to guide rapid response and essential first aid steps during a medical crisis.
          </motion.p>
        </div>
      </motion.header>

      {/* Main Content: Protocols */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16" ref={contentRef}>
        
        {/* 1. EMERGENCY CALL CONSOLE (Primary Focus) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={contentInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-24 bg-rose-50/70 backdrop-blur-sm border-4 border-rose-600 rounded-3xl shadow-2xl shadow-rose-300/50 p-6 sm:p-12"
        >
          <div className="text-center mb-10">
            <span className="text-lg font-black uppercase text-rose-800 tracking-wider inline-flex items-center gap-2">
              <span className="w-3 h-3 bg-rose-600 rounded-full animate-pulse"></span>
              ACTION REQUIRED: DO NOT HESITATE
            </span>
            <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 mt-3">
              CALL {currentEmergencyNumber} NOW
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Country Selector */}
            <div className="lg:col-span-1 border-b lg:border-r lg:border-b-0 border-rose-200 pb-6 lg:pb-0 lg:pr-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                {selectedCountryData.flag} Select Region
              </h3>
              <div className="flex flex-wrap gap-2">
                {Object.entries(emergencyNumbers).map(([key, data]) => (
                  <motion.button
                    key={key}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCountry(key)}
                    className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md ${
                      selectedCountry === key
                        ? 'bg-rose-700 text-white shadow-rose-500/50'
                        : 'bg-white text-slate-700 border border-slate-300 hover:bg-rose-100 hover:border-rose-400'
                    }`}
                  >
                    {data.flag} {data.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Contacts & Primary Call Button */}
            <motion.div
              key={selectedCountry}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-2 space-y-6 lg:pl-8"
            >
              <h3 className="text-xl font-bold text-slate-800">
                Dedicated Helplines for {selectedCountryData.name}
              </h3>
              
              <a
                href={`tel:${currentEmergencyNumber}`}
                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-rose-700 to-red-900 text-white font-black text-3xl py-6 rounded-2xl hover:from-rose-800 hover:to-red-900 transition-all duration-300 shadow-2xl shadow-rose-600/50 group"
              >
                <div className="flex items-center gap-4 group-hover:scale-[1.02] transition-transform">
                  <div className="text-4xl animate-pulse">📞</div> 
                  <div>
                    <span className="block text-base font-medium uppercase">Primary Emergency</span>
                    <span className="block">{currentEmergencyNumber}</span>
                  </div>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-4">
                {Object.entries(selectedCountryData)
                  .filter(([key]) => !['flag', 'name', 'emergency'].includes(key))
                  .map(([type, number]) => (
                    <a
                      key={type}
                      href={`tel:${number}`}
                      className="flex flex-col items-center justify-center bg-rose-100 hover:bg-rose-200 rounded-xl p-4 transition-all duration-300 border border-rose-300 shadow-sm"
                    >
                      <span className="font-semibold uppercase text-xs text-rose-800">{type}</span>
                      <span className="text-2xl font-extrabold text-rose-900">{number}</span>
                    </a>
                  ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 2. CRITICAL WARNINGS */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 border-b-4 border-rose-500 pb-1 inline-block">
              Immediate Danger: Recognized Clinical Signs
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              These symptoms indicate a high-risk medical emergency. Call immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {criticalEmergencies.map((emergency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="bg-white rounded-3xl border-2 border-rose-200 p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl mb-3">{emergency.icon}</div>
                <h3 className="text-xl font-bold text-rose-700 mb-3">{emergency.title}</h3>
                <ul className="space-y-1 mb-4 pl-4 list-disc text-sm text-slate-600">
                  {emergency.symptoms.map((symptom, i) => (
                    <li key={i}>{symptom}</li>
                  ))}
                </ul>
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                  <p className="font-extrabold text-rose-800 text-sm leading-relaxed">
                    {emergency.action.replace('{currentEmergencyNumber}', currentEmergencyNumber)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 3. FIRST AID PROCEDURES */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 border-b-4 border-sky-500 pb-1 inline-block">
              Stabilization: Essential First Aid Steps
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Clear, step-by-step actions to perform while waiting for professional help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {firstAidBasics.map((aid, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
                className="bg-white rounded-3xl border-2 border-sky-300 p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`text-4xl p-3 rounded-xl bg-sky-100 border border-sky-300`}>{aid.icon}</div>
                  <h3 className="text-xl font-extrabold text-slate-900">{aid.title}</h3>
                </div>
                <ol className="space-y-4">
                  {aid.steps.map((step, i) => (
                    <li key={i} className="text-base text-slate-700 flex items-start">
                      <span className="font-extrabold text-sky-700 mr-3 text-lg flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-sky-50 border border-sky-300">{i + 1}</span>
                      <span className="flex-1 leading-relaxed">{step.replace('{currentEmergencyNumber}', currentEmergencyNumber)}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 4. NON-EMERGENCY */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 border-b-4 border-emerald-500 pb-1 inline-block">
              ✅ Routine Health: When to Use MediBot
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Use MediBot for general knowledge, wellness planning, and non-urgent health inquiries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {nonEmergencies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                className="bg-white rounded-xl border border-emerald-300 p-4 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 hidden sm:block">{item.description.split('.')[0]}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 5. FINAL DISCLAIMER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-gradient-to-r from-rose-50 to-red-100 border-2 border-rose-300 rounded-3xl p-8 text-center shadow-2xl shadow-rose-200/50"
        >
          <div className="text-7xl mb-4">⚕️</div>
          <h3 className="text-3xl sm:text-4xl font-black text-rose-900 mb-3">
            HONEST DISCLOSURE: MEDIBOT IS EDUCATIONAL ONLY
          </h3>
          <p className="text-lg text-rose-800 mb-6 max-w-4xl mx-auto font-medium">
            This tool is designed for **informational and educational purposes only** and **must not** be used for self-diagnosis, treatment, or replacement of licensed medical advice. For all health concerns, consult a qualified healthcare provider.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${currentEmergencyNumber}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-700 to-red-900 text-white font-bold py-4 px-8 rounded-xl hover:from-rose-800 hover:to-red-900 transition-all duration-300 shadow-xl shadow-rose-600/50"
            >
              📞 Call {currentEmergencyNumber} IMMEDIATELY
            </a>
            <a
              href="/symptom-checker"
              className="inline-flex items-center gap-2 bg-white text-sky-700 font-semibold py-4 px-8 rounded-xl border-2 border-sky-300 hover:border-sky-400 hover:bg-sky-50 transition-all duration-300 shadow-lg"
            >
              🩺 Non-Emergency: Use Symptom Checker
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden opacity-5">
        {[
          { icon: '🚨', top: '15%', left: '5%', delay: 0 },
          { icon: '⚕️', top: '25%', right: '8%', delay: 2 },
          { icon: '🩺', bottom: '30%', left: '3%', delay: 4 },
          { icon: '💊', bottom: '20%', right: '5%', delay: 1 },
          { icon: '🫀', top: '60%', left: '7%', delay: 3 }
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

export default EmergencyProtocols;
