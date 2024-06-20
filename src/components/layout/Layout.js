import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navigation } from "../../components";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
