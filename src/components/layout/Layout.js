import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return <div>
    <Outlet />
    {/* footer */}
  </div>;
};

export default Layout;
