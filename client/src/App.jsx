import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import MainLayout from './components/Layout/MainLayout'
import Contribute from './pages/Contribute'
import TechStack from './pages/TechStack'
import DoctorRecommender from './pages/DoctorRecommender'
import SymptomCheckerPage from './pages/SymptomCheckerPage'
import NotFoundPage from './pages/NotFoundPage'
import Roadmap from './pages/RoadMap'
import WellnessHub from './pages/WellnessHub'
import HumanBodyExplorer from './pages/HumanBodyExplorer'
import AirQualityForecaster from './pages/AirQualityForecaster'
import ClinicalTrialFinder from './pages/ClinicalTrialFinder'


const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />} >
          <Route path="/" element={<Landing />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/symptom-checker" element={<SymptomCheckerPage />} />
          <Route path="/doctor-recommender" element={<DoctorRecommender />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/wellness-hub" element={<WellnessHub />} />
          <Route path="/human-body-explorer" element={<HumanBodyExplorer />} />
          <Route path="/air-quality-forecaster" element={<AirQualityForecaster />} />
          <Route path="/clinical-trial-finder" element={<ClinicalTrialFinder />} />
          <Route path="*" element={<NotFoundPage/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
