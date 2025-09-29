import React, { useEffect } from "react";
import RoadmapHero from "../components/RoadMapComponents/RoadmapHero";
import RoadmapTimeline from "../components/RoadMapComponents/RoadmapTimeline";
import RoadmapGallery from "../components/RoadMapComponents/RoadmapGallery";
// import RoadmapHero from './components/RoadmapHero';
// import RoadmapTimeline from './components/RoadmapTimeline';
// import RoadmapGallery from './components/RoadmapGallery';

const RoadMap = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      {/* Hero Section */}
      <RoadmapHero />

      {/* Main Roadmap Timeline */}
      <RoadmapTimeline />

      {/* Gallery Carousel Section */}
      {/* <RoadmapGallery /> */}
    </div>
  );
};

export default RoadMap;
