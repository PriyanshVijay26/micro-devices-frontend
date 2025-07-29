import { Link, NavLink } from "react-router-dom";
import logo from "../assets/microid_logo.png";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { ProfileDropdown } from "../components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Menu items array
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Products", path: "/products" },
    { name: "Support", path: "/support" },
    { name: "Contact", path: "/contact-us" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md pt-4 pb-4 flex justify-between items-center z-50">
      {/* Logo Section */}
      <div className="text-gray-900 text-2xl font-bold flex items-center gap-2 ml-2 sm:ml-4 md:ml-6 lg:ml-12">
        <NavLink
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={logo}
            alt="MicroID Logo"
            className="h-6 sm:h-8 md:h-10 lg:h-12"
          />
        </NavLink>
      </div>

      {/* Navigation Links for Medium & Large Screens */}
      <div className="hidden md:flex gap-8 text-gray-700 font-medium items-center">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-[#D40057] font-semibold"
                  : "hover:text-[#D40057] transition"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}

        {/* Profile Icon - Navigates to Login Directly */}
        <ProfileDropdown />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-gray-900 text-2xl mr-2 sm:mr-4 md:mr-6 lg:mr-12"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          {/* Mobile Menu Container */}
          <div className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center shadow-lg z-50">
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-3xl text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes color="#D40057" />
            </button>

            {/* Profile Icon - Centered Horizontally in Mobile Menu */}
            <ProfileDropdown className="text-4xl text-gray-700 mb-6" />

            {/* Navigation Links */}
            <div className="flex flex-col gap-6 text-xl text-gray-700 font-medium mt-10">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#D40057] font-semibold"
                      : "hover:text-[#D40057] transition"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
