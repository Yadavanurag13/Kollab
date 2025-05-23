import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import Button from "../common/Button";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="Kollab Logo" className="h-[95px] w-auto" />
              </Link>
            </div>
            <div className="hidden md:ml-12 md:flex md:space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors ${
                    isActive
                      ? "text-gray-900 border-brand-purple"
                      : "text-gray-500 border-transparent hover:border-brand-purple hover:text-gray-900"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/brands"
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors ${
                    isActive
                      ? "text-gray-900 border-brand-purple"
                      : "text-gray-500 border-transparent hover:border-brand-purple hover:text-gray-900"
                  }`
                }
              >
                For Brands
              </NavLink>
              <NavLink
                to="/creators"
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors ${
                    isActive
                      ? "text-gray-900 border-brand-purple"
                      : "text-gray-500 border-transparent hover:border-brand-purple hover:text-gray-900"
                  }`
                }
              >
                For Creators
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors ${
                    isActive
                      ? "text-gray-900 border-brand-purple"
                      : "text-gray-500 border-transparent hover:border-brand-purple hover:text-gray-900"
                  }`
                }
              >
                About
              </NavLink>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-white">
                    {user.name?.[0]?.toUpperCase() || <User size={20} />}
                  </div>
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      {user.name || user.email}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <LogOut size={16} className="mr-2" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/signin">
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="primary" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-purple"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive
                  ? "text-brand-purple bg-purple-50 border-brand-purple"
                  : "text-gray-600 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
              }`
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/brands"
            className={({ isActive }) =>
              `block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive
                  ? "text-brand-purple bg-purple-50 border-brand-purple"
                  : "text-gray-600 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
              }`
            }
            onClick={toggleMenu}
          >
            For Brands
          </NavLink>
          <NavLink
            to="/creators"
            className={({ isActive }) =>
              `block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive
                  ? "text-brand-purple bg-purple-50 border-brand-purple"
                  : "text-gray-600 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
              }`
            }
            onClick={toggleMenu}
          >
            For Creators
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive
                  ? "text-brand-purple bg-purple-50 border-brand-purple"
                  : "text-gray-600 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
              }`
            }
            onClick={toggleMenu}
          >
            About
          </NavLink>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          {user ? (
            <div className="flex items-center px-4 space-x-3">
              <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-white">
                {user.name?.[0]?.toUpperCase() || <User size={20} />}
              </div>
              <div>
                <div className="text-sm font-medium text-gray-800">{user.name || user.email}</div>
                <button
                  onClick={handleLogout}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center px-4 space-x-3">
              <Link to="/signin" className="flex-1" onClick={toggleMenu}>
                <Button variant="outline" size="sm" isFullWidth>
                  Sign In
                </Button>
              </Link>
              <Link to="/signup" className="flex-1" onClick={toggleMenu}>
                <Button variant="primary" size="sm" isFullWidth>
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
