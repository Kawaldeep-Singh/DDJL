import React from 'react';
import Header from './Header';
import MarqueeBanner from './MarqueeBanner';
import HeroSection from './HeroSection';
import ProjectDetails from './ProjectDetails';
import AboutSection from './AboutSection';
import PaymentPlan from './PaymentPlan';
import Amenities from './Amenities';
import ProjectTabs from './ProjectTabs';
import Gallery from './Gallery';
import ContactSection from './ContactSection';
import Footer from './Footer';
import FloatingCallButton from './FloatingCallButton';
// import { Toaster } from './toaster';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MarqueeBanner />
      <HeroSection />
      <ProjectDetails />
      <AboutSection />
      <PaymentPlan />
      <Amenities />
      <ProjectTabs />
      <Gallery />
      <ContactSection />
      <Footer />
      <FloatingCallButton />
      {/* <Toaster /> */}
    </div>
  );
}

export default App;
