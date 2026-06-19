import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black h-20 text-xl text-white flex items-center justify-center px-6 font-extrabold">
      
      <div className="flex gap-60">
        <Link to="/about">About</Link>
        <Link to="/competitors">Competitors</Link>
        <Link to="/marketplace">Marketplace</Link>
        <Link to="/signup">Sign up</Link>
        <Link to="/signin">Sign in</Link>
      </div>

    </nav>
  );
};

export default Navbar;