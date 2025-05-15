import { Navigate, useRoutes } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";
import LandingPage from "../pages/Landing";
import Login from "../pages/login";
import NotFound from "../pages/NotFound";
import Bridge from "../pages/Bridge";

export default function AppRouter() {
  const publicRoutes = [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/bridge",
      element: <Bridge />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/404",
      element: <NotFound />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ];

  const routes = useRoutes([...publicRoutes]);

  return routes;
}
