import Bridge from "../pages/Bridge";
import Dashboard from "../pages/dashboard/dashboard";
import Employee from "../pages/Employee";
import LandingPage from "../pages/Landing";
import Login from "../pages/login";
import NotFound from "../pages/NotFound";
import { Navigate, useRoutes } from "react-router-dom";

export default function AppRouter() {
  const publicRoutes = [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/employee",
      element: <Employee />,
    },
    {
      path: "/bridge",
      element: <Bridge />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/login",
      element: <Login />
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
