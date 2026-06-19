import React from 'react'
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaUserSecret,
  FaUserCog,
  FaThList,
} from "react-icons/fa";
import log2 from '../../images/log2.png'



const Sidebar = () => {

  return(

  <aside className="w-60 bg-black text-white h-screen">

   <img src={log2} alt="Logo" className="w-70 h-20 mx-auto bg-white" />

  <div className="flex flex-col h-full mt-18 space-y-2 ">

    {/* Logo / Header */}
    <div className="flex items-center justify-between px-6 h-20 ">
      <h1 className="text-4xl font-bold">PH</h1>
      <span className="text-3xl font-bold cursor-pointer">
        <FaBars />
      </span>
    </div>

    {/* Menu Items */}
    <div className="flex flex-col mt-6 space-y-2">

      <div className="flex items-center gap-4 px-6 py-3 hover:bg-gray-300 cursor-pointer">
        <FaTh className="text-2xl w-6" />
        <h2 className="text-xl font-semibold">Dashboard</h2>
      </div>

      <div className="flex items-center gap-4 px-6 py-3 hover:bg-gray-300 cursor-pointer">
        <FaUserAlt className="text-2xl w-6" />
        <h2 className="text-xl font-semibold">About</h2>
      </div>

      <div className="flex items-center gap-4 px-6 py-3 hover:bg-gray-300 cursor-pointer">
        <FaUserSecret className="text-2xl w-6" />
        <h2 className="text-xl font-semibold">Security</h2>
      </div>

      <div className="flex items-center gap-4 px-6 py-3 hover:bg-gray-300 cursor-pointer">
        <FaThList className="text-2xl w-6" />
        <h2 className="text-xl font-semibold">Orders</h2>
      </div>

      <div className="flex items-center gap-4 px-6 py-3 hover:bg-gray-300 cursor-pointer">
        <FaUserCog className="text-2xl w-6" />
        <h2 className="text-xl font-semibold">Admin</h2>
      </div>

    </div>
  </div>
</aside>
  )
}


export default Sidebar;