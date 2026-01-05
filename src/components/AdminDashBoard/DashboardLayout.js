import React from "react";
import Sidebar from "./Sidebar";
import DashboardRoutes from "./DashboardRoutes";
import "../../Styles/DashboardLayout.css";



function DashboardLayout() {
  return (
    <div className="admin-layout">
      <Sidebar/>
      <main className="admin-main-content">
        <DashboardRoutes/>
      </main>
    </div>
  );
}

export default DashboardLayout;
