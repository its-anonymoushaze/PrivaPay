interface InfoCardProps {
  title: string;
  value: number;
  valueUnit: string;
  valueChange: string;
}
const InfoCard = ({ title, value, valueChange, valueUnit }: InfoCardProps) => {
  return (
    <div className="bg-black text-white p-6 rounded-lg w-full h-fit border border-gray-800 space-y-1">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-3xl font-bold mt-2">
        {value} {valueUnit}
      </p>
      <p className="text-sm mt-1 text-gray-400">{valueChange} since 1 month</p>
    </div>
  );
};

export default InfoCard;
