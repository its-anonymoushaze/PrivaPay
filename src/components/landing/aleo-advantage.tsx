import { ChevronDown } from "lucide-react";
import React from "react";

const AleoAdvantage = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-mono font-bold text-white mb-10">
        The Aleo Advantage
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button className="flex items-center justify-between bg-gray-900 hover:bg-gray-800 border border-gray-700 rounded-md px-4 py-3">
          <span className="text-white">ZK Proofs</span>
          <ChevronDown className="h-5 w-5 text-white" />
        </button>
        <button className="flex items-center justify-between bg-gray-900 hover:bg-gray-800 border border-gray-700 rounded-md px-4 py-3">
          <span className="text-white">ZK Proofs</span>
          <ChevronDown className="h-5 w-5 text-white" />
        </button>
        <button className="flex items-center justify-between bg-gray-900 hover:bg-gray-800 border border-gray-700 rounded-md px-4 py-3">
          <span className="text-white">ZK Proofs</span>
          <ChevronDown className="h-5 w-5 text-white" />
        </button>
      </div>
    </section>
  );
};

export default AleoAdvantage;
