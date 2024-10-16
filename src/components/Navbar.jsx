import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import profileimg from "../../public/assets/images/profileimg.svg";

const Navbar = () => {
	const [showUserProfile, setShowUserProfile] = useState(false);
	const dropdownRef = useRef(null); // Ref to keep track of the dropdown
	const location = useLocation();
	const profileTitle = location.pathname;
	// console.log(profileTitle);

	const logic = () => {
		if (profileTitle.includes("profile")) {
			("Profile");
			return "Profile";
		}
		if (profileTitle.includes("budget")) {
			("Budget");
			return "Budget";
		}
		if (profileTitle.includes("settings")) {
			("Settings");
			return "Settings";
		} else {
			return "Dashboard";
		}
	};

	// Toggle the visibility of the user profile dropdown
	function HandleShowProfile() {
		setShowUserProfile(!showUserProfile);
	}

	// Close the dropdown if the user clicks outside of it
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target)
			) {
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
		<div className="flex justify-between items-center bg-white font-Montserrat h-[80px] border-b border-[#49505A] px-4 z-1000">
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
	);
};

export default Navbar;
