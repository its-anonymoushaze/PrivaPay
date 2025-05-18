import { CreditCard, Shield, Users, Vote } from "lucide-react";
import FeatureCard from "./feature-card";

const featuresData = [
  {
    title: "Private Organization Creation",
    features: [
      "Establish your decentralized organization with complete privacy",
      "Leverage Aleo's zero-knowledge infrastructure for confidential operations",
      "Maintain organizational control with provable ownership",
      "Choose what data to keep private and what to make public",
    ],
    icon: <Shield size={32} className="text-orange-500" />,
  },
  {
    title: "Confidential Employee Management",
    features: [
      "Add team members with encrypted salary information",
      "Set compensation details visible only to authorized parties",
      "Utilize Aleo's programmable privacy to customize access controls",
      "Implement role-based permissions for payroll management",
    ],
    icon: <Users size={32} className="text-orange-500" />,
  },
  {
    title: "Private, On-Demand Salary Access",
    features: [
      "Employees withdraw earnings anytime without revealing balances",
      "Zero-knowledge proofs verify withdrawal eligibility without exposing data",
      "Private transactions shield salary information from public blockchain",
      "Experience the power of confidential financial operations",
    ],
    icon: <CreditCard size={32} className="text-orange-500" />,
  },
  {
    title: "Decentralized Voting System",
    features: [
      "Employees can vote on proposals without revealing their identities",
      "Zero-knowledge proofs ensure vote validity without exposing choices",
      "Private ballots maintain confidentiality in decision-making",
      "Experience a fair and transparent voting process",
    ],
    icon: <Vote size={32} className="text-orange-500" />,
  },
];

const Feature = () => {
  return (
    <section id="features" className="py-20 w-[80vw] mx-auto">
      <div className="py-12 px-4">
        <h2 className="text-3xl font-mono font-bold text-white mb-10">
          Key Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {featuresData.map((feature, index) => (
            <FeatureCard
              title={feature.title}
              icon={feature.icon}
              features={feature.features}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
