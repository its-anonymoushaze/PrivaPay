import { Toaster } from "sonner";
import AppRouter from "./routes";
import { BrowserRouter } from "react-router-dom";
import WalletProvider from "./providers/wallet.providers";
import { RecordContextProvider } from "./providers/record.providers";

function App() {
  return (
    <WalletProvider>
      <RecordContextProvider>
        <BrowserRouter>
          <AppRouter />
          <Toaster richColors position="top-right" />
        </BrowserRouter>
      </RecordContextProvider>
    </WalletProvider>
  );
}

export default App;
