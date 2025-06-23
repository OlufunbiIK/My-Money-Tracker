import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

const DashboardLayout = ({ theme, handleThemeChange }) => {
  return (
    <div className={`min-h-screen w-full ${theme}`}>
      {/* Sidebar - Fixed positioned */}
      <SideBar theme={theme} />

      {/* Main Content Container - positioned to avoid sidebar */}
      <div className="md:ml-[205px] ml-0 min-h-screen flex flex-col">
        {/* Navbar - Fixed at top of main content */}
        <div className="sticky top-0 z-30">
          <Navbar theme={theme} handleThemeChange={handleThemeChange} />
        </div>

        {/* Scrollable Main content area */}
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
