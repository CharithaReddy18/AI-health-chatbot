import React from 'react';
import ContributeHero from '../components/ContributeComponents/ContributeHero';
import ContributeTimeline from '../components/ContributeComponents/ContributeTimeline';
import ContributeGuidelines from '../components/ContributeComponents/ContributeGuidelines';

const Contribute = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white text-slate-800">
      <ContributeHero />

      <ContributeTimeline />

      <ContributeGuidelines />

      {/* <ContributorHallOfFame /> */}
    </div>
  );
};

export default Contribute;
