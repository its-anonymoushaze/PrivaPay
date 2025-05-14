import React from "react";
import { TrendingUp } from "lucide-react";

type StatCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  total?: string;
  percentage: number;
};

const StatCard = ({ icon, label, value, total, percentage }: StatCardProps) => {
  const isPositive = percentage >= 0;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      {/* Icon and Percentage */}
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-gray-50 rounded-lg">{icon}</div>
        <div
          className={`px-3 py-1 rounded-full text-sm flex items-center gap-1
          ${
            isPositive ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
          }`}
        >
          <TrendingUp className={`w-4 h-4 ${!isPositive && "rotate-180"}`} />
          {Math.abs(percentage)}%
        </div>
      </div>

      {/* Label */}
      <div className="text-gray-500 text-sm mb-2">{label}</div>

      {/* Value */}
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-semibold">{value}</span>
        {total && <span className="text-gray-400 text-lg">/{total}</span>}
      </div>
    </div>
  );
};

// Example usage
export default function Example() {
  return (
    <div className="w-72">
      <StatCard
        icon={<div className="w-6 h-6 text-gray-700">📊</div>}
        label="Total revenue"
        value="$53,900"
        percentage={12}
      />
    </div>
  );
}
