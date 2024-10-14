// import { useState } from "react";

// export default function MobileNav() {
// 	const [isOpen, setIsOpen] = useState(false);
// 	const [activeNav, setActiveNav] = useState(null); // State to track the active navigation item

// 	// Function to toggle menu
// 	const toggleMenu = () => {
// 		setIsOpen(!isOpen);
// 	};

// 	// Function to set active navigation item
// 	const handleNavClick = (navItem) => {
// 		setActiveNav(navItem);
// 		toggleMenu(); // Close the menu after an item is clicked
// 	};

// 	return (
// 		<div
// 			className={`fixed top-0 left-0 right-0 font-montserrat w-full px-4 py-5 lg:hidden transition-colors duration-300 ${
// 				isOpen ? "bg-[#034AB3]" : "bg-[#FAFAFA]"
// 			}`}
// 		>
// 			<div className="flex justify-between items-center">
// 				{/* Logo - Changes based on isOpen */}
// 				<div className="w-[66px] h-[64px] cursor-pointer">
// 					<img
// 						src={
// 							isOpen
// 								? "/public/assets/images/logoWhite.svg"
// 								: "public/assets/images/logo.svg"
// 						}
// 						alt="Logo"
// 					/>
// 				</div>

// 				{/* Hamburger / Close Button */}
// 				<div className="flex items-center">
// 					{/* Button toggles between Hamburger and Close */}
// 					<button
// 						onClick={toggleMenu}
// 						className="focus:outline-none "
// 					>
// 						{isOpen ? (
// 							<img
// 								src="/public/assets/images/cancel.svg"
// 								alt="Close Menu"
// 								className="w-8 h-8"
// 							/>
// 						) : (
// 							<img
// 								src="/public/assets/images/menu.svg"
// 								alt="Hamburger Menu"
// 								className="w-8 h-8 items-center"
// 							/>
// 						)}
// 					</button>
// 				</div>
// 			</div>

// 			{/* Navigation List (shown when isOpen is true) */}
// 			{isOpen && (
// 				<ul className="mt-5 space-y-4 p-4 rounded-md">
// 					<li
// 						className={`cursor-pointer text-lg ${
// 							activeNav === "How it works"
// 								? "bg-white text-[#034AB3]"
// 								: "text-[#ffffff]"
// 						}`}
// 						onClick={() => handleNavClick("How it works")}
// 					>
// 						How it works
// 					</li>
// 					<li
// 						className={`cursor-pointer text-lg ${
// 							activeNav === "Why Us"
// 								? "bg-white text-[#034AB3]"
// 								: "text-[#ffffff]"
// 						}`}
// 						onClick={() => handleNavClick("Why Us")}
// 					>
// 						Why Us
// 					</li>
// 					<li
// 						className={`cursor-pointer text-lg ${
// 							activeNav === "Pricing"
// 								? "bg-white text-black"
// 								: "text-[#ffffff]"
// 						}`}
// 						onClick={() => handleNavClick("Pricing")}
// 					>
// 						Pricing
// 					</li>
// 					<li
// 						className={`cursor-pointer text-lg ${
// 							activeNav === "Contact Us"
// 								? "bg-white text-black"
// 								: "text-[#ffffff]"
// 						}`}
// 						onClick={() => handleNavClick("Contact Us")}
// 					>
// 						Contact Us
// 					</li>
// 					<li
// 						className={`cursor-pointer text-lg ${
// 							activeNav === "Log in"
// 								? "bg-white text-[#034AB3]"
// 								: "text-[#ffffff]"
// 						}`}
// 						onClick={() => handleNavClick("Log in")}
// 					>
// 						Log in
// 					</li>
// 					<li
// 						className={`cursor-pointer text-lg ${
// 							activeNav === "Sign Up"
// 								? "bg-white text-[#034AB3]"
// 								: "text-[#ffffff]"
// 						}`}
// 						onClick={() => handleNavClick("Sign Up")}
// 					>
// 						Sign Up
// 					</li>
// 				</ul>
// 			)}
// 		</div>
// 	);
// }

import { useState } from "react";

export default function MobileNav({ isOpen, setIsOpen, toggleMenu }) {
	const [activeNav, setActiveNav] = useState(null); // State to track the active navigation item

	// Function to toggle menu

	// Function to set active navigation item
	const handleNavClick = (navItem) => {
		setActiveNav(navItem);
		toggleMenu(); // Close the menu after an item is clicked
	};

	return (
		<div
			className={`fixed top-0 left-0 right-0 font-montserrat w-full px-4 py-5 lg:hidden transition-colors duration-300 ${
				isOpen ? "bg-[#034AB3]" : "bg-[#FAFAFA]"
			}`}
		>
			<div className="flex justify-between items-center">
				{/* Logo - Changes based on isOpen */}
				<div className="w-[66px] h-[64px] cursor-pointer">
					<img
						src={
							isOpen
								? "/assets/images/logoWhite.svg" // Correct path from public
								: "/assets/images/logo.svg" // Correct path from public
						}
						alt="Logo"
					/>
				</div>
				<button onClick={toggleMenu}>
					<img
						src="/assets/images/cancel.svg" // Correct path from public
						alt="Hamburger Menu"
						className="w-8 h-8"
					/>
				</button>
			</div>

			{/* Navigation List (shown when isOpen is true) */}
			{isOpen && (
				<ul className="mt-5 space-y-4 p-4 rounded-md">
					<li
						className={`cursor-pointer text-lg ${
							activeNav === "How it works"
								? "bg-white text-[#034AB3]"
								: "text-[#ffffff]"
						}`}
						onClick={() => handleNavClick("How it works")}
					>
						How it works
					</li>
					<li
						className={`cursor-pointer text-lg ${
							activeNav === "Why Us"
								? "bg-white text-[#034AB3]"
								: "text-[#ffffff]"
						}`}
						onClick={() => handleNavClick("Why Us")}
					>
						Why Us
					</li>
					<li
						className={`cursor-pointer text-lg ${
							activeNav === "Pricing"
								? "bg-white text-black"
								: "text-[#ffffff]"
						}`}
						onClick={() => handleNavClick("Pricing")}
					>
						Pricing
					</li>
					<li
						className={`cursor-pointer text-lg ${
							activeNav === "Contact Us"
								? "bg-white text-black"
								: "text-[#ffffff]"
						}`}
						onClick={() => handleNavClick("Contact Us")}
					>
						Contact Us
					</li>
					<li
						className={`cursor-pointer text-lg ${
							activeNav === "Log in"
								? "bg-white text-[#034AB3]"
								: "text-[#ffffff]"
						}`}
						onClick={() => handleNavClick("Log in")}
					>
						Log in
					</li>
					<li
						className={`cursor-pointer text-lg ${
							activeNav === "Sign Up"
								? "bg-white text-[#034AB3]"
								: "text-[#ffffff]"
						}`}
						onClick={() => handleNavClick("Sign Up")}
					>
						Sign Up
					</li>
				</ul>
			)}
		</div>
	);
}
