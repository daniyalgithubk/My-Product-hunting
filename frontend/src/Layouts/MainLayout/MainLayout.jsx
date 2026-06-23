import { Outlet } from "react-router-dom";
import Navbar from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-black transition-all duration-300 ${
          isOpen ? "w-40 lg:w-64" : "w-20 lg:w-20"
        }`}
      >
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${
          isOpen ? "ml-40 lg:ml-64" : "ml-20 lg:ml-20"
        }`}
      >
        <Navbar />
        <main className="flex-1 pt-20 md:pt-10 flex flex-col">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;