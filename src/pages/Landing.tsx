import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { PrivaPay } from "../assets/illustrations";
import AleoAdvantage from "../components/landing/aleo-advantage";
import CTA from "../components/landing/cta";
import Feature from "../components/landing/features";
import HowItWorks from "../components/landing/how-it-works";
import CustomParticleAnimation from "../components/landing/particles";
import Usecase from "../components/landing/usecase";
import ValueProposition from "../components/landing/value-prop";

// Placeholder Image URLs

const LandingPage = () => {
  return (
    <div className="font-sans  text-white">
      {/* Header */}
      <CustomParticleAnimation />
      <div className="bg-[#0a0a0a] z-10">
        <ValueProposition />
        <Feature />
        <AleoAdvantage />
        <CTA />
        <HowItWorks />
        <Usecase />
        {/* Footer */}
        <footer className="py-8 px-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <img src={PrivaPay} alt="logo" className="w-8 h-8" />
                <span className="ml-2 font-mono font-bold text-white">
                  PrivaPay
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 PrivaPay. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
