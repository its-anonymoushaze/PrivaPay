import { WalletMultiButton } from "@demox-labs/aleo-wallet-adapter-reactui";
import "@demox-labs/aleo-wallet-adapter-reactui/dist/styles.css";
import { PrivaPay } from "../assets/illustrations";
import useRecordProvider from "../providers/record.providers";
import { useRouter } from "../routes/hooks";
import Organization from "./admin/organization";

const Header = () => {
  const { isAdmin } = useRecordProvider();
  const router = useRouter();
  return (
    <header className="flex items-center justify-between py-3 border-b border-gray-800 w-full mx-auto px-8">
      <h1 className="text-xl font-medium">
        <button onClick={() => router.replace("/")}>
          <div className="flex items-center ">
            <img src={PrivaPay} alt="logo" className="w-8 h-8" />
            <span className="ml-2 font-mono font-bold text-white">
              PrivaPay
            </span>
          </div>
        </button>
      </h1>

      <div className="flex gap-4 items-center">
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
