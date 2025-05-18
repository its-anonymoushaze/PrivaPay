import { PrivaPay } from "../../assets/illustrations";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6">
      <div className="flex gap-2 items-center">
        <div className="flex items-center ">
          <img src={PrivaPay} alt="logo" className="w-8 h-8" />
          <span className="ml-2 font-mono font-bold text-white">PrivaPay</span>
        </div>
        <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded">
          BETA
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
