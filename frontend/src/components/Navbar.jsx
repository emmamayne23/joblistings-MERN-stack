import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/home" className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="w-12 h-12" />
          <span className="text-xl font-semibold">JobConnect</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/home" className="hover:text-yellow-400 font-medium">
            Home
          </Link>
          <Link to="/jobs" className="hover:text-yellow-400 font-medium">
            View Jobs
          </Link>
          <Link to="/add-job" className="hover:text-yellow-400 font-medium">
            Add Job
          </Link>
          <Link to="/" className="hover:text-yellow-400 font-medium">
            Sign In
          </Link>
          
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            className="block focus:outline-none"
            onClick={() =>
              document.getElementById("mobile-menu")?.classList.toggle("hidden")
            }
          >
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>

      {/** Dropdown for Mobile */}
      <div
        id="mobile-menu"
        className="hidden bg-secondary text-white text-center md:hidden border border-primary"
      >
        <Link to="/home" className="block py-2 hover:bg-primary">
          Home
        </Link>
        <Link to="/jobs" className="block py-2 hover:bg-primary">
          View Jobs
        </Link>
        <Link to="/add-job" className="block py-2 hover:bg-primary">
          Add Job
        </Link>
        <Link to="/" className="block py-2 hover:bg-primary">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
