import React from "react";

const ValueProposition = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-mono font-bold text-white mb-10">
        Value Proposition
      </h2>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 mb-8 md:mb-0">
          <h3 className="text-xl text-white mb-4">
            Revolutionize Organizational Operations With Privacy First
            Technology
          </h3>
          <ul className="text-orange-500 list-disc pl-5">
            <li className="mb-2">
              <span className="text-gray-300">
                Benefits Of Aleo Privacy And Payroll Fusion
              </span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div className="relative">
            <div className="h-32 w-32 border-4 border-orange-500 rounded-full"></div>
            <div className="absolute top-0 left-0 h-32 w-32 border-4 border-orange-500 rounded-full transform rotate-45"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
