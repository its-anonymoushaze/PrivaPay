import { Toaster } from "sonner";
import AppRouter from "./routes";
import { BrowserRouter } from "react-router-dom";
import WalletProvider from "./providers/wallet.providers";

function App() {
  return (
    <WalletProvider>
      <BrowserRouter>
        <AppRouter />
        <Toaster richColors position="top-right" />
      </BrowserRouter>
    </WalletProvider>
  );
}

export default App;
