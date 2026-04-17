import React from 'react';
import { siteConfig, projectInfo } from './data/mockData';
import EnquiryForm from './EnquiryForm';

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Deen Dayal Plots Haryana
            </h2>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Shree Krishna Heritage is a plotted society under Deen Dayal Jan
                Awas Yojna (DDJAY), located in Sector 9A, Jhajjar, Haryana.
                Surrounded by a rapidly developing NCR corridor, the project
                offers premium plots with Stilt + 4 Floor construction approval.
                Shree Krishna Heritage is a HRERA-registered housing society,
                which means all project details are also available on the state
                HRERA website for end-users and investors. The HRERA registration
                number of this project is {siteConfig.reraNumber}.
              </p>
              <p>
                Whether you are looking for a peaceful residential retreat or a
                profitable investment, Jhajjar promises to deliver. With its
                strategic location near the KMP Expressway, National Cancer
                Institute (AIIMS), and Reliance MET City, the township is
                undoubtedly one of Haryana's fastest-growing real estate
                destinations.
              </p>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              ENQUIRE NOW
            </h3>
            <p className="text-gray-600 mb-4">पूछताछ करें</p>
            <EnquiryForm />
          </div>
        </div>

        {/* Info Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="bg-[#0066B2] text-white py-4 px-6 rounded-lg text-center">
            <p className="text-xl font-bold">
              APPLICATION INVITED FOR {projectInfo.totalPlots} PLOTS ONLY
            </p>
          </div>
          <div className="bg-[#0066B2] text-white py-4 px-6 rounded-lg text-center">
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-xl font-bold hover:underline"
            >
              Helpline No. {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
