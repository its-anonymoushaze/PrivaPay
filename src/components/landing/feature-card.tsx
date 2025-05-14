import { Lock } from "lucide-react";

const FeatureCard = () => {
  return (
    <div className="bg-gray-900 rounded-md p-4 flex flex-col h-full border border-gray-700">
      <div className="mb-4 flex justify-center">
        <Lock className="h-6 w-6 text-white" />
      </div>
      <h4 className="text-sm text-center text-white mb-3">
        Private Computation
      </h4>
      <ul className="text-gray-400 text-xs space-y-2">
        <li>• Bullet Point</li>
        <li>• Bullet Point</li>
        <li>• Bullet Point</li>
        <li>• Bullet Point</li>
      </ul>
    </div>
  );
};
export default FeatureCard;
