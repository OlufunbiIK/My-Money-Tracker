import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import profileimg from "../../public/assets/images/profileimg.svg";
import logowhite from "../../public/assets/images/logoWhite.svg";
import logo from "../../public/assets/images/logo.svg";

const Navbar = () => {
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref to keep track of the dropdown
  const location = useLocation();
  const navigate = useNavigate();
  const profileTitle = location.pathname;

  const logic = () => {
    // Fix the conditional logic - use else if instead of separate if statements
    if (profileTitle.includes("profile")) {
      return "Profile";
    } else if (profileTitle.includes("budget")) {
      return "Budget";
    } else if (profileTitle.includes("settings")) {
      return "Settings";
    } else {
      return "Dashboard";
    }
  };

  // Toggle the visibility of the user profile dropdown
  function HandleShowProfile() {
    setShowUserProfile(!showUserProfile);
  }

  // Toggle mobile navigation
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  // Handle navigation
  const handleNavigation = (title, path) => {
    navigate(path);
    setIsMobileNavOpen(false); // Close mobile nav after navigation
  };

  // Close the dropdown if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowUserProfile(false); // Close the dropdown
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <>
      {/* Mobile Navigation */}
      <div
        className={`fixed z-50 top-0 left-0 w-full px-4 py-5 md:hidden transition-colors duration-300  ${
          isMobileNavOpen ? "bg-[#034AB3]" : "bg-[#FAFAFA]"
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="w-[66px] h-[64px] cursor-pointer">
            <img src={isMobileNavOpen ? logowhite : logo} alt="Logo" />
          </div>
          <button onClick={toggleMobileNav} className="focus:outline-none">
            <img
              src={
                isMobileNavOpen
                  ? "/assets/images/cancel.svg"
                  : "/assets/images/menu.svg"
              }
              alt="Menu"
              className="w-8 h-8"
            />
          </button>
        </div>

        {/* Mobile Navigation Items */}
        {isMobileNavOpen && (
          <ul className="mt-5 space-y-4 p-4 rounded-md">
            <li
              className="cursor-pointer text-lg text-[#ffffff]"
              onClick={() => handleNavigation("Dashboard", "/dashboard/")}
            >
              Dashboard
            </li>
            <li
              className="cursor-pointer text-lg text-[#ffffff]"
              onClick={() => handleNavigation("Budget", "/dashboard/budget")}
            >
              Budget
            </li>
            <li
              className="cursor-pointer text-lg text-[#ffffff]"
              onClick={() => handleNavigation("Profile", "/dashboard/profile")}
            >
              Profile
            </li>
            <li
              className="cursor-pointer text-lg text-[#ffffff]"
              onClick={() =>
                handleNavigation("Settings", "/dashboard/settings")
              }
            >
              Settings
            </li>
            <li
              className="cursor-pointer text-lg text-[#ffffff]"
              onClick={() => handleNavigation("Help", "/dashboard/help")}
            >
              Help
            </li>
            <li
              className="cursor-pointer text-lg text-[#ffffff]"
              onClick={() => handleNavigation("Logout", "/dashboard/logout")}
            >
              Logout
            </li>
          </ul>
        )}
      </div>

      {/* Desktop Navbar */}
      <div
        className={`flex justify-between items-center bg-white font-Montserrat h-[80px] border-b border-[#49505A] px-4 z-30 ${
          isMobileNavOpen ? "md:block hidden" : "block"
        }`}
      >
        <p className="text-xl font-bold leading-[24px] text-[#1F2329]">
          {logic()}
        </p>
        <div
          className="relative flex items-center space-x-4"
          onClick={HandleShowProfile}
        >
          <img
            src={profileimg}
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer hidden md:block"
          />
          {/* User profile dropdown */}
          {showUserProfile && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-20 w-48 bg-white border border-[#A8B1BD] rounded-md shadow-lg z-[9999]"
            >
              <ul className="py-2 flex flex-col">
                <Link
                  to="/dashboard/profile"
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  View Profile
                </Link>
                <Link
                  to="/dashboard/settings"
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Settings
                </Link>
                <Link className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
