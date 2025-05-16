import { WalletMultiButton } from "@demox-labs/aleo-wallet-adapter-reactui";
import "@demox-labs/aleo-wallet-adapter-reactui/dist/styles.css";
import Organization from "./admin/organization";
import { PrivaPay } from "../assets/illustrations";
import { usePathname } from "../routes/hooks";
import useRecordProvider from "../providers/record.providers";

const Header = () => {
  const pathname = usePathname();
  const { isAdmin } = useRecordProvider();
  return (
    <header className="flex items-center justify-between py-3 border-b border-gray-800 w-full mx-auto px-40">
      <h1 className="text-xl font-medium">
        <a href={"/"}>
          <div className="flex items-center ">
            <img src={PrivaPay} alt="logo" className="w-8 h-8" />
            <span className="ml-2 font-mono font-bold text-white">
              PrivaPay
            </span>
          </div>
        </a>
      </h1>

      <div className="flex gap-4 items-center">
        <div className="flex gap-6">
          {pathname !== "/dashboard" && (
            <a href={"/dashboard"} className="hover:text-orange-500">
              Dashboard
            </a>
          )}
          {isAdmin && (
            <a href={"/bridge"} className="hover:text-orange-500">
              Brigde
            </a>
          )}
        </div>
        <WalletMultiButton
          style={{
            border: "1px solid #1E2839",
            backgroundColor: "transparent",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        />
        {isAdmin && <Organization />}
      </div>
    </header>
  );
};

export default Header;
