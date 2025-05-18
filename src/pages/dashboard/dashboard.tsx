import UserDashboard from "./user-dashboard";
import AdminDashboard from "./admin-dashboard";
import useRecordProvider from "../../providers/record.providers";

const Dashboard = () => {
  const { isAdmin } = useRecordProvider();

  console.log("isAdmin", isAdmin);

  return (
    <div className="w-full h-full">
      {isAdmin ? <AdminDashboard /> : <UserDashboard />}
    </div>
  );
};

export default Dashboard;
