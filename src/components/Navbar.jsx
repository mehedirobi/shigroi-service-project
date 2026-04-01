import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Dashboard", path: "/dashboard" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative px-1 py-1 transition ${
      isActive
        ? "text-indigo-600 border-b-2 border-indigo-600"
        : "text-gray-600 hover:text-indigo-600"
    }`;

  const handleClose = () => setIsOpen(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-bold text-indigo-600">
          ShigroiService
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.div
              key={link.path}
              whileHover={{ y: -2, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <NavLink to={link.path} className={linkClass}>
                {link.name}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/login"
              className="px-5 py-2 border border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition"
            >
              Login
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/register"
              className="px-5 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Register
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white border-t px-6 py-4 space-y-3"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={handleClose}
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "text-indigo-600 font-semibold" : "text-gray-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="pt-4 flex flex-col gap-3">
            <Link
              to="/login"
              onClick={handleClose}
              className="w-full text-center border border-indigo-600 text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={handleClose}
              className="w-full text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Register
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;