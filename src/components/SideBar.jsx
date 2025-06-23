import { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { GrPlan } from "react-icons/gr";
import { RxAvatar } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logowhite from "../../public/assets/images/logoWhite.svg";

const SideBar = ({ theme }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleNavigation = (title, path) => {
    navigate(path);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed left-0 top-0 z-40 w-[205px] h-screen bg-[#034AB3] text-white overflow-y-auto">
        <div className="p-4">
          <div className="mt-8">
            <div className="flex justify-center mt-2">
              <img src={logowhite} alt="Logo" />
            </div>
            <p className="text-center mt-4 mb-4">My Money Tracker</p>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex flex-col space-y-4 mx-4 my-2">
            <Link
              to="/dashboard/"
              className={`hover:bg-blue-500 p-2 rounded flex gap-4 text-[16px] items-center mb-1 ${
                pathname === "/dashboard/"
                  ? "bg-[#2F73DA] text-white"
                  : "text-white"
              }`}
              onClick={() => handleNavigation("Dashboard", "/dashboard/")}
            >
              <LuLayoutDashboard /> Dashboard
            </Link>
            <Link
              to="/dashboard/budget"
              className={`hover:bg-blue-500 p-2 rounded flex gap-4 text-[16px] items-center mb-1 ${
                pathname === "/dashboard/budget"
                  ? "bg-[#2F73DA] text-white"
                  : "text-white"
              }`}
              onClick={() => handleNavigation("Budget", "/dashboard/budget")}
            >
              <GrPlan /> Budget
            </Link>
            <Link
              to="/dashboard/profile"
              className={`hover:bg-blue-500 p-2 rounded flex gap-4 text-[16px] items-center mb-1 ${
                pathname === "/dashboard/profile"
                  ? "bg-[#2F73DA] text-white"
                  : "text-white"
              }`}
              onClick={() => handleNavigation("Profile", "/dashboard/profile")}
            >
              <RxAvatar /> Profile
            </Link>
            <Link
              to="/dashboard/settings"
              className={`hover:bg-blue-500 p-2 rounded flex gap-4 text-[16px] items-center mb-1 ${
                pathname === "/dashboard/settings"
                  ? "bg-[#2F73DA] text-white"
                  : "text-white"
              }`}
              onClick={() =>
                handleNavigation("Settings", "/dashboard/settings")
              }
            >
              <IoSettingsOutline /> Settings
            </Link>
          </nav>

          {/* Bottom navigation - positioned at bottom */}
          <nav className="absolute bottom-4 left-4 right-4 flex flex-col space-y-2">
            <li className="hover:bg-blue-500 p-2 rounded flex gap-4 text-[16px] items-center cursor-pointer">
              <IoSettingsOutline /> Help
            </li>
            <li className="hover:bg-blue-500 p-2 rounded flex gap-4 text-[16px] items-center cursor-pointer">
              <FiLogOut /> Logout
            </li>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideBar;
