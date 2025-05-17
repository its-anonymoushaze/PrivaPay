import { Navigate, useRoutes } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";
import LandingPage from "../pages/Landing";
import Login from "../pages/login";
import Bridge from "../pages/Bridge";
import { useWallet as useAleoWallet } from "@demox-labs/aleo-wallet-adapter-react";
import NotFound from "../pages/NotFound";
import Voting from "../pages/Voting";

export default function AppRouter() {
  const { connected: isWalletConnected } = useAleoWallet();
  const publicRoutes = [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ];

  const privateRoutes = [
    {
      path: "/dashboard",
      element: isWalletConnected ? <Dashboard /> : <Navigate to="/login" />,
    },
    {
      path: "/voting",
      element: isWalletConnected ? <Voting /> : <Navigate to="/login" />,
    },
    {
      path: "/bridge",
      element: isWalletConnected ? <Bridge /> : <Navigate to="/login" />,
    },
  ];

  const routes = useRoutes([...publicRoutes, ...privateRoutes]);

  return routes;
}
