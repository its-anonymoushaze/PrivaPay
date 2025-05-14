import React from 'react'

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 ">
      <h2 className="text-3xl text-center font-semibold mb-8 text-orange-500">
        How It Works
      </h2>
      <ol className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300">
        <li>
          <strong>Private Organization Setup:</strong> Create your organization
          with Aleo's privacy controls
        </li>
        <li>
          <strong>Secure Team Management:</strong> Add employees and set
          salaries with encrypted data
        </li>
        <li>
          <strong>Protected Fund Allocation:</strong> Deposit assets with
          privacy-preserving transactions
        </li>
        <li>
          <strong>Confidential Withdrawals:</strong> Employees access earnings
          without exposing financial details
        </li>
      </ol>
    </section>
  );
}

export default HowItWorks