import React, { useState } from 'react';
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
import BottomBar from './BottomBar';
import EnquiryModal from './EnquiryModal';

export const ModalContext = React.createContext();

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal: () => setShowModal(true) }}>
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
        <BottomBar />

        {/* Global Enquiry Modal */}
        <EnquiryModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      </div>
    </ModalContext.Provider>
  );
}

export default App;
