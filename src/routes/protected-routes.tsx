import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const { connected } = useWallet();
  const location = useLocation();

  // If not authenticated, redirect to login and pass the current location in state
  if (!connected) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // Render the protected content if authenticated
  return <Outlet />;
};

export default ProtectedRoute;
