import { WalletMultiButton } from "@demox-labs/aleo-wallet-adapter-reactui";
import { CatAstro } from "../assets/illustrations";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import { useEffect } from "react";
import { useRouter } from "../routes/hooks";

const Login = () => {
  const { connected } = useWallet();
  const { push } = useRouter();

  useEffect(() => {
    if (connected) {
      push("/dashboard");
    }
  }, [connected]);
  return (
    <div className="flex items-center justify-center gap-16 w-screen h-screen">
      <div>
        <img src={CatAstro} alt="cat-astro" />
      </div>
      <div className="flex flex-col gap-8 w-96">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-1 items-center">
            <h2 className="text-xl font-bold text-center">Welcome to</h2>
            <h2 className="text-4xl text-center">
              Your Private <span className="text-orange-500">PrivaPay</span>{" "}
              <span className="text-orange-500">Space</span>
            </h2>
          </div>
          <p className=" text-gray-600 text-center">
            Quickly connect your wallet and experience the power of confidential
            compensation management with PrivaPay.{" "}
          </p>
        </div>

        <WalletMultiButton
          style={{
            backgroundColor: "#FF7A05",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default Login;
