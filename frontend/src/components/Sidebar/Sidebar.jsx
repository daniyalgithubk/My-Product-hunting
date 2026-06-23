import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaUserSecret,
  FaUserCog,
  FaThList,
} from "react-icons/fa";
import log2 from '../../images/log2.png'
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, setIsOpen }) => {

  const manageButton = () => {
    setIsOpen(!isOpen)
  }

  // Single helper to show/hide text
  const showText = isOpen ? "block" : "hidden";

  return (
    <aside className="h-screen text-white overflow-hidden w-full">
      <img src={log2} alt="Logo" className="w-70 h-10 mx-auto bg-white" />

      <div className="flex flex-col h-full mt-18 space-y-2 md:mt-[-6px] lg:mt-26 lg:gap-10">

        {/* Logo / Header */}
        <div className="flex items-center justify-between px-6 h-20">
          <h1 className={`text-4xl font-bold md:font-medium md:text-xl lg:text-3xl ${showText}`}>PH</h1>
          <span className="text-3xl font-bold cursor-pointer md:font-medium md:text-xl" onClick={manageButton}>
            <FaBars className="lg:text-3xl" />
          </span>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col mt-1 space-y-1 md:mt-[-18px] lg:gap-8">

          <Link to="/">
            <div className="flex items-center gap-4 px-6 py-3 hover:bg-gray-300 cursor-pointer">
              <FaTh className="text-2xl w-6 md:text-sm md:font-medium lg:text-2xl" />
              <h2 className={`text-xl font-semibold md:text-sm md:font-medium lg:text-2xl ${showText}`}>Dashboard</h2>
            </div>
          </Link>

          <Link to="/about">
            <div className="flex items-center gap-4 px-6 py-3 hover:bg-gray-300 cursor-pointer">
              <FaUserAlt className="text-2xl w-6 md:text-sm md:font-medium lg:text-2xl" />
              <h2 className={`text-xl font-semibold md:text-sm md:font-medium lg:text-2xl ${showText}`}>About</h2>
            </div>
          </Link>

          <Link>
            <div className="flex items-center gap-4 px-6 py-3 hover:bg-gray-300 cursor-pointer">
              <FaUserSecret className="text-2xl w-6 md:text-sm md:font-medium lg:text-2xl" />
              <h2 className={`text-xl font-semibold md:text-sm md:font-medium lg:text-2xl ${showText}`}>Security</h2>
            </div>
          </Link>

          <Link>
            <div className="flex items-center gap-4 px-6 py-3 hover:bg-gray-300 cursor-pointer">
              <FaThList className="text-2xl w-6 md:text-sm md:font-medium lg:text-2xl" />
              <h2 className={`text-xl font-semibold md:text-sm md:font-medium lg:text-2xl ${showText}`}>Orders</h2>
            </div>
          </Link>

          <Link>
            <div className="flex items-center gap-4 px-6 py-3 hover:bg-gray-300 cursor-pointer">
              <FaUserCog className="text-2xl w-6 md:text-sm md:font-medium lg:text-2xl" />
              <h2 className={`text-xl font-semibold md:text-sm md:font-medium lg:text-2xl ${showText}`}>Admin</h2>
            </div>
          </Link>

        </div>
      </div>
    </aside>
  )
}

export default Sidebar;