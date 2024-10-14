import { useState } from "react";
import MobileNav from "./MobileNav";
import { Link, useNavigate } from "react-router-dom";

export default function Header({
	howItWorksRef,
	pricingRef,
	contactRef,
	whyUsRef,
}) {
	const [isOpen, setIsOpen] = useState(false);

	const handleScrollToSection = (ref) => {
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	const navigation = useNavigate();
	console.log(isOpen);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<div className="fixed top-0 left-0 right-0 h-[94px] max-w-auto mx-auto bg-[#FAFAFA] px-16 py-5 shadow-md z-50">
				<div className="flex justify-between items-center">
					{/* Logo and toggle button */}
					<div className="w-[66px] h-[64px] cursor-pointer">
						{/* Large screen logo - Always blue logo */}
						<img
							src="/assets/images/logo.svg" // Blue logo for big screen
							alt="logo"
							className="hidden md:block" // Only show on md and larger
						/>

						{/* Small and medium screen logo */}
						<img
							src={
								isOpen
									? "/assets/images/logoWhite.svg" // Show white logo when menu is open
									: "/assets/images/logo.svg" // Show blue logo when menu is closed
							}
							alt="logo"
							className="md:hidden" // Only show on small and medium screens
							onClick={toggleMenu} // Toggle menu when clicked
						/>
					</div>

					{/* Hamburger / Close Button */}
					<div className="flex items-center lg:hidden">
						{/* Button toggles between Hamburger and Close */}
						<button
							onClick={toggleMenu}
							className="focus:outline-none"
						>
							<img
								src="/assets/images/menu.svg" // Correct path from public
								alt="Hamburger Menu"
								className="w-8 h-8"
							/>
						</button>
					</div>

					{/* Desktop menu */}
					<div className="hidden lg:flex flex-row gap-20 items-center">
						<ul className="flex gap-8 cursor-pointer list-none text-[18px] leading-[21.94px] text-[#1F2329]">
							<Link
								to="/"
								className="hover:border-b-[3px] hover:border-[#034AB3] transition-all duration-300 ease-in-out pb-1"
								onClick={() =>
									handleScrollToSection(howItWorksRef)
								}
							>
								How it works
							</Link>
							<Link
								to="/"
								className="hover:border-b-[3px] hover:border-[#034AB3] transition-all duration-300 ease-in-out pb-1"
								onClick={() => handleScrollToSection(whyUsRef)}
							>
								Why Us
							</Link>
							<Link
								to="/"
								className="hover:border-b-[3px] hover:border-[#034AB3] transition-all duration-300 ease-in-out pb-1"
								onClick={() =>
									handleScrollToSection(pricingRef)
								}
							>
								Pricing
							</Link>
							<Link
								to="/"
								className="hover:border-b-[3px] hover:border-[#034AB3] transition-all duration-300 ease-in-out pb-1"
								onClick={() =>
									handleScrollToSection(contactRef)
								}
							>
								Contact Us
							</Link>
						</ul>
						<div className="flex gap-5">
							<button
								onClick={() => navigation("/login")}
								className="bg-[#FFFFFF] text-[14px] border-[2px] hover:bg-[#034AB3] transition-all duration-500 ease-in-out hover:text-white border-[#034AB3] text-[#1F2329] rounded-[8px] px-[16px] py-[12px]"
							>
								Log in
							</button>
							<button
								className="bg-[#034AB3] text-[14px] hover:bg-[#6fa7fc] hover:border-[#6fa7fc] transition-all duration-500 ease-in-out border-[2px] border-[#034AB3] text-[#FFFFFF] rounded-[8px] px-[16px] py-[12px]"
								onClick={() => navigation("/signup")}
							>
								Sign Up
							</button>
						</div>
					</div>
				</div>

				{/* Mobile menu */}
				{isOpen && (
					<MobileNav
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						toggleMenu={toggleMenu}
					/>
				)}
			</div>
		</>
	);
}
