// import Footer from "../components/Footer";
// import Header from "../components/Header";
// import HeroSection from "../components/HeroSection";
// import HowItWorks from "../components/HowItWorks";
// import Pricing from "../components/Pricing";
// import WhyUs from "../components/WhyUs";
// import { useRef } from "react";

// const LandingLayout = ({ children }) => {
// 	const heroRef = useRef(null);
// 	const howItWorksRef = useRef(null);
// 	const whyUsRef = useRef(null);
// 	const pricingRef = useRef(null);
// 	const contactRef = useRef(null);
// 	const homeRef = useRef(null);

// 	return (
// 		<div className="flex flex-col w-full min-h-screen">
// 			{/* You can add any common elements for the landing layout */}
// 			<Header
// 				heroRef={heroRef}
// 				howItWorksRef={howItWorksRef}
// 				whyUsRef={whyUsRef}
// 				pricingRef={pricingRef}
// 				contactRef={contactRef}
// 				homeRef={homeRef}
// 			/>
// 			<main className="mx-3 md:mx-20">
// 				<div ref={heroRef}>
// 					<HeroSection />
// 				</div>
// 				<div className="bg-[#FAFAFA] w-[1300] h-[94px]"></div>
// 				<div ref={howItWorksRef}>
// 					<HowItWorks />
// 				</div>
// 				<div className="bg-[#FAFAFA] w-[1300] h-[94px] z-0"></div>
// 				<div ref={whyUsRef}>
// 					<WhyUs />
// 				</div>
// 				<div className="bg-[#FAFAFA] w-[1300] h-[94px]"></div>
// 				<div ref={pricingRef}>
// 					<Pricing />
// 				</div>
// 			</main>
// 			<div ref={contactRef}>
// 				<Footer />
// 			</div>
// 		</div>
// 	);
// };

// export default LandingLayout;

import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import WhyUs from "../components/WhyUs";
import { useRef } from "react";
import { Outlet } from "react-router-dom"; // Import Outlet

const LandingLayout = () => {
	const heroRef = useRef(null);
	const howItWorksRef = useRef(null);
	const whyUsRef = useRef(null);
	const pricingRef = useRef(null);
	const contactRef = useRef(null);

	return (
		<div className="flex flex-col w-full min-h-screen">
			<Header
				heroRef={heroRef}
				howItWorksRef={howItWorksRef}
				whyUsRef={whyUsRef}
				pricingRef={pricingRef}
				contactRef={contactRef}
			/>
			<main className="mx-3 md:mx-20">
				<div ref={heroRef}>
					<HeroSection />
				</div>
				<div className="bg-[#FAFAFA] w-full h-[94px]"></div>
				<div ref={howItWorksRef}>
					<HowItWorks />
				</div>
				<div className="bg-[#FAFAFA] w-full h-[94px] "></div>
				<div ref={whyUsRef} className="z-0">
					<WhyUs />
				</div>
				<div className="bg-[#FAFAFA] w-full h-[94px]"></div>
				<div ref={pricingRef}>
					<Pricing />
				</div>
			</main>
			<div ref={contactRef}>
				<Footer />
			</div>
			{/* This is where the child routes will be rendered */}
			<Outlet />
		</div>
	);
};

export default LandingLayout;
