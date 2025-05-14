import React from "react";
import Header from "../components/header.component";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="px-40 mt-8 w-full">{children}</div>
    </div>
  );
};

export default AdminLayout;
