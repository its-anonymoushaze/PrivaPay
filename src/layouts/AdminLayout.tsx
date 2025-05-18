import React from "react";
import Header from "../components/header.component";
import Sidebar from "../components/sidebar.component";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className=" w-full flex">
        <Sidebar />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
