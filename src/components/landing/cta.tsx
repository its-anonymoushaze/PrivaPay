import React from 'react'

const CTA = () => {
  return (
    <section
      id="get-started"
      className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-center text-white"
    >
      <h2 className="text-3xl font-semibold mb-8">
        Ready to Transform Your Payroll with Privacy?
      </h2>
      <a
        href="#signup"
        className="bg-white text-orange-600 py-3 px-6 rounded-lg text-xl hover:bg-orange-200"
      >
        Get Started with PrivaPay
      </a>
    </section>
  );
}

export default CTA