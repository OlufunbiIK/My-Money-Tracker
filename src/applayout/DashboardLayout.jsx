import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

const DashboardLayout = ({ theme, handleThemeChange }) => {
	return (
		<div className={`flex min-h-screen w-full ${theme}`}>
			{/* Sidebar */}
			<div className="md:w-[205px] w-0">
				<SideBar theme={theme} /> {/* Pass theme to SideBar */}
			</div>

			{/* Main Content */}
			<div className="flex flex-col flex-1  xl:ml-0 w-full">
				{/* Navbar */}
				<Navbar theme={theme} handleThemeChange={handleThemeChange} />

				<main className="p-4">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default DashboardLayout;
