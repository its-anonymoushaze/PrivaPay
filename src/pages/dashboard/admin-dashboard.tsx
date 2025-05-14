import InfoCard from '../../components/admin/info-card';
import AdminLayout from '../../layouts/AdminLayout';

const AdminDashboard = () => {
  return (
    <AdminLayout>
    <div className="flex justify-between gap-6 w-full">
        <InfoCard title='Total Employee' value={20} valueChange='2 people' valueUnit='people'/>
        <InfoCard title='Total Employee' value={20} valueChange='2 people' valueUnit='people'/>
        <InfoCard title='Total Employee' value={20} valueChange='2 people' valueUnit='people'/>
    </div>
    </AdminLayout>
  );
}

export default AdminDashboard