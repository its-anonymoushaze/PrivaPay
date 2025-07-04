import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import { WalletMultiButton } from "@demox-labs/aleo-wallet-adapter-reactui";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CatAstro } from "../assets/illustrations";
import Loader from "../components/loader.component";

const Login = () => {
  const { connected, connecting } = useWallet();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/dashboard";

  useEffect(() => {
    if (connected) {
      navigate(from, { replace: true });
    }
  }, [connected, from, navigate]);

  if (connecting) {
    return <Loader />;
  }
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
