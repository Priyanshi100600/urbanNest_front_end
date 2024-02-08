import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-gray-800 py-6">
      <div className="container mx-auto flex justify-between items-center">
      
        <span className="text-3xl pl-5 md:text-xl text-white font-bold tracking-tight">
          <Link to="/">UrbanNest.com</Link>
        </span>

        {/* Mobile menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white px-2 py-2">
            Menu
          </button>
          {isMenuOpen && (
            <div className="absolute top-16 right-0 bg-white p-4 shadow-md">
              {/* Menu items */}
              <Link to="/aboutus" className="block mb-2 text-green-800 font-bold">
                About&nbsp;us
              </Link>
              <Link to="/contactus" className="block mb-2 text-green-800 font-bold">
                Contact&nbsp;us
              </Link>
              {isLoggedIn ? (
                <>
                  <Link
                    to="/my-bookings"
                    className="block mb-2 text-green-800 font-bold"
                  >
                    My Bookings
                  </Link>
                  <Link
                    to="/my-hotels"
                    className="block mb-2 text-green-800 font-bold"
                  >
                    My Hotels
                  </Link>
                  <SignOutButton />
                </>
              ) : (
                <Link
                  to="/sign-in"
                  className="block mb-2 text-green-800 font-bold"
                >
                  Login
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Desktop view */}
        <span className="hidden md:flex space-x-2">
          {/* Menu items */}
          <Link
            className="flex items-center text-white px-3 md:px-6 font-bold hover:bg-green-600"
            to="/aboutus"
          >
            About us
          </Link>
          <Link
            className="flex items-center text-white px-3 md:px-6 font-bold hover:bg-green-600"
            to="/contactus"
          >
            Contact us
          </Link>
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-white px-3 md:px-6 font-bold hover:bg-green-600"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-white px-3 md:px-6 font-bold hover:bg-green-600"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex items-center bg-white text-green px-3 md:px-6 font-bold"
            >
              Login
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
