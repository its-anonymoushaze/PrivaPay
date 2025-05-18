import React from "react";
import AdminLayout from "../layouts/AdminLayout";

const Bridge = () => {
  return (
    <AdminLayout>
      <iframe
        src="https://dev.verulink.com"
        title="Bridge"
        className="w-full h-[90vh]"
      />
    </AdminLayout>
  );
};

export default Bridge;
