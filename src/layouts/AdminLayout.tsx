import React from "react";
import Header from "../components/header.component";
import Sidebar from "../components/sidebar.component";
import useRecordProvider from "../providers/record.providers";
import Loader from "../components/loader.component";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { isFetching } = useRecordProvider();
  if (isFetching) {
    return <Loader />;
  }
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className=" w-full flex h-full">
        <Sidebar />
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
