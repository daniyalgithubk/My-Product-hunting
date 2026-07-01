import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white w-full px-6 py-4 flex items-center justify-center">
      <div className="flex gap-6 text-sm md:gap-10 md:text-base lg:gap-14 lg:text-xl font-extrabold">
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