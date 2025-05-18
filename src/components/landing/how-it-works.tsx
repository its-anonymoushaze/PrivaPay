import { Building2, Users, Wallet, EyeOff, Vote } from "lucide-react";

const orgFeatures = [
  {
    title: "Private Organization Setup",
    description: "Create your organization with Aleo's privacy controls",
    icon: <Building2 size={32} />,
  },
  {
    title: "Secure Team Management",
    description: "Add employees and set salaries with encrypted data",
    icon: <Users size={32} />,
  },
  {
    title: "Protected Fund Allocation",
    description: "Deposit assets with privacy-preserving transactions",
    icon: <Wallet size={32} />,
  },
  {
    title: "Confidential Withdrawals",
    description: "Employees access earnings without exposing financial details",
    icon: <EyeOff size={32} />,
  },
  {
    title: "Private Voting System",
    description: "Employees vote on proposals without revealing identities",
    icon: <Vote size={32} />,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 px-4 w-[80vw] mx-auto">
      <h2 className="text-3xl font-mono font-bold text-white mb-10">
        How does it work?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {orgFeatures.map((feature, index) => (
          <div
            key={index}
            className=" p-6 rounded-lg shadow-md flex items-start space-x-4 justify-between border border-gray-800/80 relative"
          >
            <div className="flex gap-2 items-center">
              <div className=" -top-2 right-0 p-2 text-orange-500/10  font-bold text-4xl">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
            <div className="text-orange-500">{feature.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
