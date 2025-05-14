import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="text-center py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-mono font-bold text-white mb-6">
        Private, Programmable
        <br />
        Payroll on Aleo Blockchain
      </h1>
      <p className="text-gray-300 italic mb-10 max-w-2xl mx-auto">
        "The future of confidential payroll management with
        <br />
        zero-knowledge-proof technology"
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md flex items-center justify-center">
          Create your Payroll Account
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </button>
        <button className="border border-gray-600 hover:border-gray-400 text-white px-6 py-3 rounded-md">
          Schedule a Demo
        </button>
      </div>
    </section>
  );
};

export default Hero;
