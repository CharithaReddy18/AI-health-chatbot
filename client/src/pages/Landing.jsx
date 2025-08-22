import React from 'react'
import Hero from '../components/LandingPageComponents/Hero'
import Disclaimer from '../components/LandingPageComponents/Disclaimer'
import Features from '../components/LandingPageComponents/Features'
import CTA from '../components/LandingPageComponents/CTA'
// import Hero from '../components/LandingPageComponents/Hero'
// import AboutMe from '../components/LandingPageComponents/AboutMe'
// import SkillSection from '../components/LandingPageComponents/SkillSection'
// import ProjectShow from '../components/LandingPageComponents/ProjectShow'

const Landing = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <CTA/>
      <Disclaimer/>
    </div>
  )
}

export default Landing
