import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import WhyUs from "../components/WhyUs";
import Pricing from "../components/Pricing";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LandingPage() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Main Content */}
			<main className="flex-grow mx-3 md:mx-20">
				<Header />

				<section>
					<HeroSection />
					<div className="bg-[#FAFAFA] w-full h-[94px] "></div>
				</section>
				<section>
					<HowItWorks />
					<div className="bg-[#FAFAFA] w-full h-[94px]"></div>
				</section>
				<section>
					<WhyUs />
				</section>
				<section>
					<Pricing />
				</section>
			</main>
			<Footer />
		</div>
	);
}
