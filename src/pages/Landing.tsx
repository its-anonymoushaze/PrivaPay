import {
  ArrowUpRight,
  Facebook,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import AleoAdvantage from "../components/landing/aleo-advantage";
import CTA from "../components/landing/cta";
import Feature from "../components/landing/features";
import Hero from "../components/landing/hero";
import HowItWorks from "../components/landing/how-it-works";
import Usecase from "../components/landing/usecase";
import ValueProposition from "../components/landing/value-prop";
import { PrivaPay } from "../assets/illustrations";

// Placeholder Image URLs

const LandingPage = () => {
  return (
    <div className="font-sans  text-white">
      {/* Header */}
      <nav className="flex justify-between items-center py-4 px-6">
        <div className="flex gap-2 items-center">
          <div className="flex items-center ">
            <img src={PrivaPay} alt="logo" className="w-8 h-8" />
            <span className="ml-2 font-mono font-bold text-white">
              PrivaPay
            </span>
          </div>
          <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded">
            BETA
          </span>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md flex items-center">
          Sign Up Free
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </button>
      </nav>
      <Hero />
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
  );
};

export default LandingPage;
