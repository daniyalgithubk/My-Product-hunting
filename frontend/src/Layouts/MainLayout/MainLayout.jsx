import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Home from '../../pages/Home Pages/Home';
import About from '../../pages/About Pages/About';

const MainLayout = () => {
  return (
     <div className="flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        {/* Pages render here */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;