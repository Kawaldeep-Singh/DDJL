import React, { useState, useEffect, useRef } from 'react';
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
  const timerRef = useRef(null);

  const schedulePopup = (delay) => {
    // Pehle se chal raha timer clear karo
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setShowModal(true);
    }, delay);
  };

  useEffect(() => {
    // Page load ke 15 second baad pehli baar popup
    schedulePopup(15000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleClose = () => {
    setShowModal(false);
    // Close karne ke 45 second baad phir popup
    schedulePopup(45000);
  };

  const handleSuccess = () => {
    setShowModal(false);
    // Form submit ho gaya — ab popup band, timer clear
    if (timerRef.current) clearTimeout(timerRef.current);
  };

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
          onClose={handleClose}
          onSuccess={handleSuccess}
        />
      </div>
    </ModalContext.Provider>
  );
}

export default App;EnquiryModal
