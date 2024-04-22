import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  return (
    <div className="flex w-full relative">
      {/* Dashboard sidebar  */}
      <div className={` ${isSidebarOpen ? "md:w-[15%]" : "md:w-[6%]"} transition-all duration-300  bg-white hidden md:block`}>
        <Sidebar stateData={{ isSidebarOpen }} />
      </div>

      < div className={`w-full ${isSidebarOpen ? "md:w-[85%]" : "md:w-[94%]"} transition-all duration-300  flex flex-col`}>
        {/* dashboard navbar  */}
        <Navbar stateData={{ setIsSidebarOpen, isSidebarOpen }} />

        <div className="bg-[#F5F5F5] min-h-[1000px] w-full px-4 md:px-12 pt-4 md:pt-12">
          <Outlet />
        </div>
      </div >
    </div >
  );
}
