import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Navbar = ({ username: usernameProp }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const logoutMenuRef = useRef(null);

  useEffect(() => {
    // Get username from prop or localStorage
    const storedUsername = localStorage.getItem('username');
    if (usernameProp) {
      setUsername(usernameProp);
    } else if (storedUsername) {
      setUsername(storedUsername);
    }
  }, [usernameProp]);

  useEffect(() => {
    // Handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close logout menu when clicking outside
    const handleClickOutside = (event) => {
      if (logoutMenuRef.current && !logoutMenuRef.current.contains(event.target)) {
        setShowLogoutMenu(false);
      }
    };

    if (showLogoutMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLogoutMenu]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername("");
    setShowLogoutMenu(false);
    navigate('/login');
  };

  const toggleLogoutMenu = () => {
    setShowLogoutMenu(!showLogoutMenu);
  };

  return (
    <header className={`w-full shadow-lg sticky top-0 z-50 animate-[slideInDown_0.5s_ease-out] transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-emerald-400/80 via-teal-400/80 to-cyan-400/80 backdrop-blur-md' 
        : 'bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400'
    }`}>
      <nav className="mx-auto flex w-full items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-white group">
          <img
            className="h-15 w-15 rounded-xl shadow-md transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-white/30"
            src="/images/logo.png"
            alt="AST logo"
          />
          <span className="text-2xl font-bold tracking-wide transition-all duration-300 group-hover:text-white group-hover:scale-110">AST</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-white">
          <Link className="relative px-3 py-2 text-base font-semibold transition-all duration-300 hover:scale-110 group" to={username ? "/home" : "/start"}>
            <span className="relative z-10">Home</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute inset-0 rounded-lg bg-white/0 transition-all duration-300 group-hover:bg-white/20 group-hover:shadow-lg"></span>
          </Link>
          <Link className="relative px-3 py-2 text-base font-semibold transition-all duration-300 hover:scale-110 group" to="/about">
            <span className="relative z-10">About</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute inset-0 rounded-lg bg-white/0 transition-all duration-300 group-hover:bg-white/20 group-hover:shadow-lg"></span>
          </Link>
          <Link className="relative px-3 py-2 text-base font-semibold transition-all duration-300 hover:scale-110 group" to="/contact">
            <span className="relative z-10">Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute inset-0 rounded-lg bg-white/0 transition-all duration-300 group-hover:bg-white/20 group-hover:shadow-lg"></span>
          </Link>
          {username ? (
            <div className="relative" ref={logoutMenuRef}>
              <button
                onClick={toggleLogoutMenu}
                className="rounded-lg bg-white/20 px-4 py-2 text-base font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-lg hover:shadow-white/20 cursor-pointer"
              >
                👤 {username}
              </button>
              {showLogoutMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 animate-[scaleIn_0.2s_ease-out]">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span>🚪</span>
                    <span className="font-semibold">Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="relative rounded-lg bg-white px-4 py-2 text-base font-semibold text-emerald-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/30 hover:scale-105 active:scale-95 overflow-hidden group"
            >
              <span className="relative z-10">Sign In / Sign Up</span>
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700"></span>
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 text-white focus:outline-none z-50 relative"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Side Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 shadow-2xl transform transition-transform duration-300 ease-in-out z-40 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <Link
            to={username ? "/home" : "/start"}
            onClick={closeMenu}
            className="text-white text-lg font-semibold py-4 px-4 rounded-lg hover:bg-white/20 transition-all duration-300 mb-2"
          >
            🏠 Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="text-white text-lg font-semibold py-4 px-4 rounded-lg hover:bg-white/20 transition-all duration-300 mb-2"
          >
            ℹ️ About
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="text-white text-lg font-semibold py-4 px-4 rounded-lg hover:bg-white/20 transition-all duration-300 mb-2"
          >
            📞 Contact
          </Link>
          
          <div className="mt-6 pt-6 border-t border-white/30">
            {username ? (
              <div className="space-y-2">
                <div className="text-white text-lg font-semibold py-4 px-4 rounded-lg bg-white/20">
                  👤 {username}
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    closeMenu();
                  }}
                  className="w-full text-white text-lg font-semibold py-4 px-4 rounded-lg bg-red-500/80 hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>🚪</span>
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={closeMenu}
                className="block text-center bg-white text-emerald-600 text-lg font-bold py-4 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Sign In / Sign Up
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="md:hidden fixed inset-0 bg-black/50 z-30 transition-opacity duration-300"
        ></div>
      )}
    </header>
  );
};

export default Navbar;
