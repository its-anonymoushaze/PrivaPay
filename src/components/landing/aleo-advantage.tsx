import { Code2, EyeOff, Lock, ShieldCheck, Zap } from "lucide-react";

const advantages = [
  {
    title: "Zero-Knowledge Proofs",
    description: "Verify transactions without revealing underlying data",
    icon: <Lock size={24} />,
  },
  {
    title: "Programmable Privacy",
    description: "Control exactly what information remains confidential",
    icon: <EyeOff size={24} />,
  },
  {
    title: "LEO Programming Language",
    description: "Custom-built for privacy-preserving applications",
    icon: <Code2 size={24} />,
  },
  {
    title: "High Performance",
    description: "Fast transaction processing with minimal fees",
    icon: <Zap size={24} />,
  },
  {
    title: "Decentralized Security",
    description: "Robust protection without centralized vulnerabilities",
    icon: <ShieldCheck size={24} />,
  },
];

const AleoAdvantage = () => {
  return (
    <section className="py-12 px-4 w-[80vw] mx-auto ">
      <div className="flex justify-between gap-16 items-center">
        <div className="space-y-1 w-1/2">
          <h2 className="text-3xl font-mono font-bold text-white">
            The Aleo Advantage
          </h2>
          <p className="text-gray-300 mb-6">
            Aleo's zero-knowledge technology empowers organizations to create
            private, programmable payroll systems. With Aleo, you can:
          </p>
        </div>
        <div className="flex flex-col gap-4 w-1/2">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="flex items-center  p-4 rounded-md shadow-md border border-orange-500/30"
            >
              <div className="text-orange-500 mr-4">{advantage.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {advantage.title}
                </h3>
                <p className="text-gray-400">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AleoAdvantage;
