import { Toaster } from "sonner";
import AppRouter from "./routes";
import { BrowserRouter } from "react-router-dom";
import WalletProvider from "./providers/wallet.providers";
import { RecordContextProvider } from "./providers/record.providers";
import { ProposalContextProvider } from "./providers/proposal.providers";

function App() {
  return (
    <WalletProvider>
      <RecordContextProvider>
        <ProposalContextProvider>
          <BrowserRouter>
            <AppRouter />
            <Toaster richColors position="top-right" />
          </BrowserRouter>
        </ProposalContextProvider>
      </RecordContextProvider>
    </WalletProvider>
  );
}

export default App;
