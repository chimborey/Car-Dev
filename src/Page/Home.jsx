import React from 'react'
import Hero from '../Components/Hero'
import AboutUs from '../Components/AboutUs'
import OurCars from '../Components/OurCars'
import ServicesUs from '../Components/ServicesUs'
import FeatureUs from '../Components/FeatureUs'
import SupportUs from '../Components/SupportUs'
import MissionUs from '../Components/MissionUs'

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <FeatureUs />
      <MissionUs />
      <OurCars />
      <ServicesUs />
      <SupportUs />
    </main>
  )
}

export default Home