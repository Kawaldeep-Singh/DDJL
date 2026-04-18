import React, { useContext } from 'react';
import { paymentPlans } from './data/mockData';
import { ModalContext } from './App';
const PaymentPlan = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <section id="payment-plan" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
      <div className='flex items-between justify-center gap-4 mb-6' >

        <h2 className="text-3xl font-bold text-gray-900 text-center  ">
          Payment Plan
        </h2>

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

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#0066B2] text-white">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                  Plot Size (Sq. Yd.)
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                  Rate / Sq. Yd.
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                  Registration
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                  10% On Allotment
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                  40% Within 30 Days
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                  25% Within 90 Days
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                  25% On Possession
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                  Total Cost
                </th>
              </tr>
            </thead>
            <tbody>
              {paymentPlans.map((plan, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                >
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    {plan.sizeYard}
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    {plan.ratePerYard}
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    {plan.registration}
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    {plan.payment10}
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    {plan.payment40}
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    {plan.payment25_1}
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    {plan.payment25_2}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-[#2E7D32]">
                    {plan.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {paymentPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-md"
            >
              <h3 className="text-xl font-bold text-[#0066B2] mb-3">
                {plan.sizeYard} Sq. Yd.
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">
                    Rate / Sq. Yd.:
                  </span>
                  <span className="font-semibold">{plan.ratePerYard}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">
                    Registration:
                  </span>
                  <span className="font-semibold">{plan.registration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">
                    10% On Allotment:
                  </span>
                  <span className="font-semibold">{plan.payment10}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">
                    40% (30 Days):
                  </span>
                  <span className="font-semibold">{plan.payment40}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">
                    25% (90 Days):
                  </span>
                  <span className="font-semibold">{plan.payment25_1}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">
                    25% On Possession:
                  </span>
                  <span className="font-semibold">{plan.payment25_2}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                  <span className="font-bold text-gray-900">Total Cost:</span>
                  <span className="font-bold text-[#2E7D32] text-lg">
                    {plan.total}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-4 italic">
          *Refer Disclaimer — Other Charges Extra
        </p>

        {/* Banks Loan Approved */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Pre-Approved Home Loans Available
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {/* ICICI Bank */}
            <div className="bg-white border border-none rounded-lg p-0   flex flex-col items-center justify-center min-w-[320px]">
              <img src="/icici.jpg" className="w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPlan;
