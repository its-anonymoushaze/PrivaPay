import EmployeeContainer from "../../components/admin/employee-container";
import InfoCard from "../../components/admin/info-card";
import AdminLayout from "../../layouts/AdminLayout";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-10 p-8">
        <div className="flex justify-between gap-6 w-full">
          <InfoCard
            title="Total Employee"
            value={20}
            valueChange="2 people"
            valueUnit="people"
          />
          <InfoCard
            title="Total Employee"
            value={20}
            valueChange="2 people"
            valueUnit="people"
          />
          <InfoCard
            title="Total Employee"
            value={20}
            valueChange="2 people"
            valueUnit="people"
          />
        </div>
        <EmployeeContainer />
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
