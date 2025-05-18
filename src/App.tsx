import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Dashboard from "./pages/dashboard/dashboard";
import LandingPage from "./pages/Landing";
import Login from "./pages/login";
import { RecordContextProvider } from "./providers/record.providers";
import { ProposalContextProvider } from "./providers/proposal.providers";
import WalletProvider from "./providers/wallet.providers";
import ProtectedRoute from "./routes/protected-routes";
import Voting from "./pages/Voting";
import Bridge from "./pages/Bridge";

function App() {
  return (
    <WalletProvider>
      <RecordContextProvider>
        <ProposalContextProvider>
          <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />

              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/voting" element={<Voting />} />
                <Route path="/bridge" element={<Bridge />} />
                {/* Add more protected routes here */}
              </Route>

              {/* Redirect for any unmatched routes */}
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
            <Toaster richColors position="top-right" />
          </BrowserRouter>
        </ProposalContextProvider>
      </RecordContextProvider>
    </WalletProvider>
  );
}

export default App;
