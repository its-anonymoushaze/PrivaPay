import React from "react";
import Hero from "../components/landing/hero";
import Feature from "../components/landing/features";
import AleoAdvantage from "../components/landing/aleo-advantage";
import HowItWorks from "../components/landing/how-it-works";
import Usecase from "../components/landing/usecase";
import CTA from "../components/landing/cta";

// Placeholder Image URLs
const placeholderImage = "https://via.placeholder.com/150"; // Replace with your actual image URLs

const LandingPage = () => {
  return (
    <div className="font-sans  text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6  shadow-md">
        <div className="logo">
          <img src={placeholderImage} alt="PrivaPay Logo" className="h-12" />
        </div>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <a
                href="#features"
                className="text-gray-300 hover:text-orange-500"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="text-gray-300 hover:text-orange-500"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#adopters"
                className="text-gray-300 hover:text-orange-500"
              >
                Adopters
              </a>
            </li>
            <li>
              <a
                href="#use-cases"
                className="text-gray-300 hover:text-orange-500"
              >
                Use Cases
              </a>
            </li>
            <li>
              <a
                href="#get-started"
                className="text-gray-300 hover:text-orange-500"
              >
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <Hero />
      <Feature />
      <AleoAdvantage />
      <HowItWorks />
      <Usecase/>
      <CTA/>
    
      {/* Footer */}
      <footer className="py-6  text-white text-center">
        <p>
          Built on Aleo blockchain • Zero-knowledge proofs • Programmable
          privacy • Confidential transactions
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
