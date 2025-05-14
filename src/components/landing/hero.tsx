import React from 'react';

const placeholderImage = "https://via.placeholder.com/150";

const Hero = () => {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600 text-white">
      <h1 className="text-4xl font-bold mb-4">PrivaPay</h1>
      <p className="text-xl mb-6">
        Your Private, Programmable Payroll on Aleo Blockchain
      </p>
      <img
        src={placeholderImage}
        alt="Blockchain Illustration"
        className="mx-auto w-64 mb-6"
      />
      <a
        href="#get-started"
        className="bg-orange-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-orange-700"
      >
        Get Started
      </a>
    </section>
  );
}

export default Hero