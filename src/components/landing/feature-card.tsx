import type React from "react";

interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
  features: string[];
}

const FeatureCard = ({ title, icon, features }: FeatureCardProps) => {
  return (
    <div className="rounded-md p-4 flex flex-col h-full border border-gray-700 shadow-2xl shadow-orange-500/10 py-6">
      <div className="mb-4 flex justify-center mb-4">{icon}</div>
      <h4 className="text-2xl text-center text-white mb-3 ">{title}</h4>
      <ul className="text-gray-400 text-md space-y-2 list-disc px-4">
        {features?.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};
export default FeatureCard;
