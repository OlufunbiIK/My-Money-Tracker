import { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { GrPlan } from "react-icons/gr";
import { RxAvatar } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import logowhite from "../../public/assets/images/logoWhite.svg";
import logo from "../../public/assets/images/logo.svg";

const App = () => {
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

	const navigate = useNavigate(); // Add useNavigate for programmatic navigation
	const { pathname } = useLocation();

	const toggleMobileNav = () => {
		setIsMobileNavOpen(!isMobileNavOpen);
	};

	const handleNavigation = (title, path) => {
		// setCurrentPageTitle(title);
		navigate(path);
	};

	return (
		<div className="flex">
			{/* Navbar */}
			<Navbar />

			{/* Mobile Nav */}
			<div
				className={`fixed z-10 top-0 left-0 w-full px-4 z-1000 py-5 md:hidden transition-colors duration-300  ${
					isMobileNavOpen ? "bg-[#034AB3]" : "bg-[#FAFAFA]"
				}`}
			>
				<div className="flex justify-between items-center">
					<div className="w-[66px] h-[64px] cursor-pointer">
						<img
							src={
								isMobileNavOpen
									? "/assets/images/logoWhite.svg"
									: "/assets/images/logo.svg"
							}
							alt="Logo"
						/>
					</div>
					<button
						onClick={toggleMobileNav}
						className="focus:outline-none"
					>
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
							onClick={() =>
								handleNavigation("Dashboard", "/dashboard/")
							}
						>
							Dashboard
						</li>
						<li
							className="cursor-pointer text-lg text-[#ffffff]"
							onClick={() =>
								handleNavigation("Budget", "/dashboard/budget")
							}
						>
							Budget
						</li>
						<li
							className="cursor-pointer text-lg text-[#ffffff]"
							onClick={() =>
								handleNavigation(
									"Profile",
									"/dashboard/profile"
								)
							}
						>
							Profile
						</li>
						<li
							className="cursor-pointer text-lg text-[#ffffff]"
							onClick={() =>
								handleNavigation(
									"Settings",
									"/dashboard/settings"
								)
							}
						>
							Settings
						</li>
						<li
							className="cursor-pointer text-lg text-[#ffffff]"
							onClick={() =>
								handleNavigation("Help", "/dashboard/help")
							}
						>
							Help
						</li>
						<li
							className="cursor-pointer text-lg text-[#ffffff]"
							onClick={() =>
								handleNavigation("Logout", "/dashboard/logout")
							}
						>
							Logout
						</li>
					</ul>
				)}
			</div>

			{/* Sidebar */}
			<div className="hidden md:block fixed inset-0 z-40 w-[205px] h-full bg-[#034AB3] text-white p-4">
				<div className="mt-8">
					<div className="flex justify-center mt-2">
						<img src="assets/images/logoWhite.svg" alt="Logo" />
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
						onClick={() =>
							handleNavigation("Dashboard", "/dashboard/")
						}
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
						onClick={() =>
							handleNavigation("Budget", "/dashboard/budget")
						}
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
						onClick={() =>
							handleNavigation("Profile", "/dashboard/profile")
						}
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
				<nav className="flex flex-col space-y-2 mx-4 my-1 md:mt-52">
					<li className="hover:bg-blue-500 p-2 rounded flex gap-4 text-[16px] items-center">
						<IoSettingsOutline /> Help
					</li>
					<li className="hover:bg-blue-500 p-2 rounded flex gap-4 text-[16px] items-center">
						<FiLogOut /> Logout
					</li>
				</nav>
			</div>
		</div>
	);
};

export default App;
