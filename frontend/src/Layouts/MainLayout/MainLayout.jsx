import { Outlet } from "react-router-dom";
import Navbar from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-black transition-all duration-300 z-50 ${
          isOpen ? "w-40 lg:w-64" : "w-20"
        }`}
      >
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Main Area */}
      <div
        className={`flex flex-col flex-1 min-h-screen ${
          isOpen ? "ml-40 lg:ml-64" : "ml-20"
        }`}
      >
        <Navbar />

        <main className="flex-1 flex flex-col">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;