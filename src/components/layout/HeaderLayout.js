import React from "react";
import { Outlet } from "react-router-dom";
import { PageHeader } from "../../components";

const HeaderLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10rem",
        backgroundColor: "var(--primaryBackgroundColor)",
      }}
    >
      <PageHeader />
      <Outlet />
    </div>
  );
};

export default HeaderLayout;
