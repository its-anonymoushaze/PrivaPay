import UserDashboard from "./user-dashboard";
import AdminDashboard from "./admin-dashboard";
import useRecordProvider from "../../providers/record.providers";

const Dashboard = () => {
  const { isAdmin } = useRecordProvider();

  return isAdmin ? <AdminDashboard /> : <UserDashboard />;
};

export default Dashboard;
