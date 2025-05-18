import { BadgeDollarSign, Globe, Handshake } from "lucide-react";
import { PrivaPay } from "../../assets/illustrations";

const globalCompFeatures = [
  {
    title: "Global Remote Teams",
    description:
      "Confidentially manage international compensation while enabling instant access to funds across borders without revealing sensitive payment information.",
    icon: <Globe size={32} />,
    position: "bottom-0 left-1/2 -translate-x-1/2",
  },
  {
    title: "Confidential Contractor Payments",
    description:
      "Pay freelancers and contractors with privacy-preserving transactions that protect rate information while providing verification of payment.",
    icon: <Handshake size={32} />,
    position: "top-1/2 right-0 -translate-y-1/2",
  },
  {
    title: "Salary Discretion",
    description:
      "Maintain confidentiality around compensation structures while still operating on a verifiable blockchain system.",
    icon: <BadgeDollarSign size={32} />,
    position: "top-1/2 left-0 -translate-y-1/2",
  },
];

const Usecase = () => {
  return (
    <section className="py-12 px-4 w-[80vw] mx-auto h-[600px] my-8">
      <h2 className="text-3xl font-mono font-bold text-white mb-10 w-full text-center">
        Use Cases
      </h2>

      <div className="relative w-full  gap-8 flex justify-center items-center text-white h-full">
        {/* Center logo */}
        <div className="absolute z-10 mb-60">
          <img src={PrivaPay} className="w-32 h-32 text-orange-500" />
        </div>

        {/* Reason Cards */}
        {globalCompFeatures.map((reason, index) => (
          <div
            key={index}
            className={`absolute ${reason.position} transform p-6 flex flex-col gap-4 items-center justify-center w-[400px]  border border-orange-500 rounded-md  text-center`}
          >
            <div className="text-orange-500">{reason.icon}</div>
            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-white">
                {reason.title}
              </h3>
              <p className="text-gray-400 text-balance">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Usecase;
