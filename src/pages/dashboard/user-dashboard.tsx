import InfoCard from "../../components/admin/info-card";
import UserContainer from "../../components/user/user-container";
import AdminLayout from "../../layouts/AdminLayout";

const UserDashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-10">
        <div className="flex justify-between gap-6 w-full">
          <InfoCard
            title="Total Organization Joined"
            value={20}
            valueChange="2 people"
            valueUnit="people"
          />
          <InfoCard
            title="Total Amount Claimed"
            value={20}
            valueChange="2 people"
            valueUnit="people"
          />
        </div>
        <UserContainer />
      </div>
    </AdminLayout>
  );
};

export default UserDashboard;
