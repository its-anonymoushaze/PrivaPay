import { PrivaPay } from "../../assets/illustrations";
import { ArrowUpRight } from "lucide-react";

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

      <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md flex items-center">
        Sign Up Free
        <ArrowUpRight className="ml-1 h-4 w-4" />
      </button>
    </nav>
  );
};

export default Navbar;
