import React, { useContext } from 'react';
import { siteConfig, projectInfo } from './data/mockData';
import { FileText, Award, Building, Grid, MapPin } from 'lucide-react';
import { ModalContext } from './App';
const ProjectDetails = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
      <div className='flex items-between justify-center gap-4 mb-6'>


        {/* Live Current Badge */}
        <div className="inline-block bg-black text-white px-4 py-2 rounded   font-semibold">
          Live Current (1)
        </div>

        <div className="relative inline-block">
  {/* Live badge */}
  <span className="absolute -top-2.5 -right-2.5 bg-[#FFC107] text-black text-[10px] font-black px-2 py-0.5 rounded-full z-10 uppercase tracking-wide shadow">
    FREE
  </span>
  <button
    onClick={openModal}
    className="relative bg-[#D32F2F] text-white px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-wider border-2 border-red-400 shadow-[0_0_15px_rgba(211,47,47,0.5)] hover:shadow-[0_0_25px_rgba(211,47,47,0.8)] hover:bg-[#B71C1C] hover:-translate-y-0.5 transition-all duration-200"
  >
    ENQUIRE NOW
  </button>
</div>

        </div>

        {/* Project Info Box */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            1) Project : {siteConfig.reraNumber}
          </h3>
          <div className="space-y-2 text-gray-700">
            <p className="flex items-start">
              <span className="mr-2">📌</span>
              <span>
                <strong>PROJECT NAME :</strong> {siteConfig.projectName}
              </span>
            </p>
            <p className="flex items-start">
              <span className="mr-2">📌</span>
              <span>
                <strong>Online Application Start Date & Time :</strong>{' '}
                {projectInfo.startDate}
              </span>
            </p>
            <p className="flex items-start">
              <span className="mr-2">📌</span>
              <span>
                <strong>Online Application End Date & Time :</strong>{' '}
                {projectInfo.endDate}
              </span>
            </p>
            <p className="flex items-start">
              <span className="mr-2">📌</span>
              <span>
                <strong>Unit Allotment Date & Time :</strong>{' '}
                {projectInfo.allocationDate}
              </span>
            </p>
            <p className="flex items-start">
              <span className="mr-2">📌</span>
              <span>
                <strong>LOCATION :</strong> {siteConfig.location}
              </span>
            </p>
            <p className="flex items-start">
              <span className="mr-2">📌</span>
              <span>
                <strong>RATE :</strong> ₹52,000 per Sq. Yd.
              </span>
            </p>
            <p className="flex items-start">
              <span className="mr-2">📌</span>
              <span>
                <strong>CONSTRUCTION :</strong> Stilt + 4 Floors Approved
              </span>
            </p>
            <p className="flex items-start">
              <span className="mr-2">📌</span>
              <span>
                <strong>REGISTRATION AMOUNT :</strong>{' '}
                {projectInfo.registrationAmount} (Fully Refundable if
                Unsuccessful)
              </span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            <a
              href="https://www.deendayaljanawasyojanajhajjar.com/assets/pricelist.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2E7D32] text-white px-4 py-2 rounded hover:bg-[#1B5E20] transition-colors text-sm font-medium flex items-center justify-center gap-2"
            >
              <FileText size={16} />
              Price List
            </a>
            <a
              href="https://www.deendayaljanawasyojanajhajjar.com/assets/rera.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0066B2] text-white px-4 py-2 rounded hover:bg-[#004D8C] transition-colors text-sm font-medium flex items-center justify-center gap-2"
            >
              <Award size={16} />
              HRERA Certificate
            </a>
            <a
              href="https://www.deendayaljanawasyojanajhajjar.com/assets/broucher.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0066B2] text-white px-4 py-2 rounded hover:bg-[#004D8C] transition-colors text-sm font-medium flex items-center justify-center gap-2"
            >
              <Building size={16} />
              Brochure
            </a>
            <a
              href="https://www.deendayaljanawasyojanajhajjar.com/assets/layout.png"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0066B2] text-white px-4 py-2 rounded hover:bg-[#004D8C] transition-colors text-sm font-medium flex items-center justify-center gap-2"
            >
              <Grid size={16} />
              Layout Plan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
