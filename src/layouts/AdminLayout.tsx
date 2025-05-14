import React from 'react'
import Header from '../components/header.component';
import Sidebar from '../components/admin/sidebar.component';


const AdminLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <Header />
      <div className='flex gap-1 w-full'>
      <Sidebar />
    <div className='p-4 mt-4 w-full'>{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout