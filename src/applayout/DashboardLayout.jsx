// import { Outlet } from "react-router-dom";
// import SideBar from "../components/SideBar";
// import Navbar from "../components/Navbar";

// const DashboardLayout = () => {
// 	return (
// 		<div className="flex min-h-screen w-full">
// 			{/* Sidebar */}
// 			<div className="md:w-[205px] w-0">
// 				<SideBar />
// 			</div>

// 			{/* Main Content */}
// 			<div className="flex flex-col flex-1 md:ml-[205px] lg:-ml-3 xl:ml-0 ">
// 				{/* Navbar */}
// 				<Navbar />

// 				{/* Outlet for nested routes */}
// 				<main className="p-4">
// 					<Outlet />
// 				</main>
// 			</div>
// 		</div>
// 	);
// };

// export default DashboardLayout;

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
			<div className="flex flex-col flex-1 md:ml-[100px] xl:ml-0 ">
				{/* Navbar */}
				<Navbar theme={theme} handleThemeChange={handleThemeChange} />
				{/* Pass theme and handler to Navbar */}
				{/* Outlet for nested routes */}
				<main className="p-4">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default DashboardLayout;
