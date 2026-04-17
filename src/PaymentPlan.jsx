import React from 'react';
import { paymentPlans } from './data/mockData';

const PaymentPlan = () => {
  return (
    <section id="payment-plan" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Payment Plan
        </h2>

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
                  <span className="font-medium text-gray-600">Rate / Sq. Yd.:</span>
                  <span className="font-semibold">{plan.ratePerYard}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Registration:</span>
                  <span className="font-semibold">{plan.registration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">10% On Allotment:</span>
                  <span className="font-semibold">{plan.payment10}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">40% (30 Days):</span>
                  <span className="font-semibold">{plan.payment40}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">25% (90 Days):</span>
                  <span className="font-semibold">{plan.payment25_1}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">25% On Possession:</span>
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
          <div className="flex flex-wrap justify-center gap-4">
            <div className="inline-block bg-white border border-gray-200 rounded-lg p-4 shadow-md min-w-[100px]">
              <div className="text-3xl font-bold text-[#0066B2]">SBI</div>
              <p className="text-sm text-gray-600 mt-1">State Bank of India</p>
            </div>
            <div className="inline-block bg-white border border-gray-200 rounded-lg p-4 shadow-md min-w-[100px]">
              <div className="text-3xl font-bold text-[#D32F2F]">HDFC</div>
              <p className="text-sm text-gray-600 mt-1">HDFC Bank</p>
            </div>
            <div className="inline-block bg-white border border-gray-200 rounded-lg p-4 shadow-md min-w-[100px]">
              <div className="text-3xl font-bold text-[#F57C00]">ICICI</div>
              <p className="text-sm text-gray-600 mt-1">ICICI Bank</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPlan;
