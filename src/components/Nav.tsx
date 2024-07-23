import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const getButtonStyle = (path: string) => {
    return location.pathname === path
      ? "bg-black text-white"
      : "bg-transparent text-gray-600";
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-white shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="index.html" className="flex items-center space-x-2 font-noto">
          <img src="\assets\icon\blackicon.png" alt="Logo" className="h-8" />
          <h1 className="text-xl font-bold font-noto">UikazE</h1>
        </a>

        <nav className="hidden md:flex space-x-4">
          <a
            href="index.html#home"
            className={`py-2 px-4 rounded ${getButtonStyle("/landingpage")}`}
          >
            Home
          </a>
          <a
            href="index.html#about"
            className={`py-2 px-4 rounded ${getButtonStyle("/count")}`}
          >
            About
          </a>
          <a
            href="index.html#features"
            className={`py-2 px-4 rounded ${getButtonStyle("/pokemon")}`}
          >
            Features
          </a>
          <a
            href="index.html#services"
            className={`py-2 px-4 rounded ${getButtonStyle("/contact")}`}
          >
            Services
          </a>
          <a
            href="index.html#pricing"
            className={`py-2 px-4 rounded ${getButtonStyle("/pricing")}`}
          >
            Pricing
          </a>
          <a
            href="index.html#contact"
            className={`py-2 px-4 rounded ${getButtonStyle("/contact")}`}
          >
            Contact
          </a>
        </nav>

        <a
          className="hidden md:inline-block px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          href="index.html#about"
        >
          Get Started
        </a>

        <button
          className="md:hidden flex items-center text-gray-600 text-2xl"
          onClick={toggleDrawer(true)}
        >
          <i className="bi bi-list"></i>
        </button>

        {/* Mobile Drawer */}
        {drawerOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
            <div className="absolute right-0 w-64 bg-white h-full shadow-md">
              <button className="p-4" onClick={toggleDrawer(false)}>
                <i className="bi bi-x text-black text-2xl"></i>
              </button>
              <nav>
                <a
                  href="index.html#home"
                  className={`block px-4 py-2 ${getButtonStyle(
                    "/landingpage"
                  )}`}
                  onClick={toggleDrawer(false)}
                >
                  Home
                </a>
                <a
                  href="index.html#about"
                  className={`block px-4 py-2 ${getButtonStyle("/count")}`}
                  onClick={toggleDrawer(false)}
                >
                  About
                </a>
                <a
                  href="index.html#features"
                  className={`block px-4 py-2 ${getButtonStyle("/pokemon")}`}
                  onClick={toggleDrawer(false)}
                >
                  Features
                </a>
                <a
                  href="index.html#services"
                  className={`block px-4 py-2 ${getButtonStyle("/contact")}`}
                  onClick={toggleDrawer(false)}
                >
                  Services
                </a>
                <a
                  href="index.html#pricing"
                  className={`block px-4 py-2 ${getButtonStyle("/pricing")}`}
                  onClick={toggleDrawer(false)}
                >
                  Pricing
                </a>
                <a
                  href="index.html#contact"
                  className={`block px-4 py-2 ${getButtonStyle("/contact")}`}
                  onClick={toggleDrawer(false)}
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Nav;
