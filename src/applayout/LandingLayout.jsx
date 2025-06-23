import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import WhyUs from "../components/WhyUs";
import { useRef } from "react";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  const heroRef = useRef(null);
  const howItWorksRef = useRef(null);
  const whyUsRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="flex flex-col w-full">
      <Header
        heroRef={heroRef}
        howItWorksRef={howItWorksRef}
        whyUsRef={whyUsRef}
        pricingRef={pricingRef}
        contactRef={contactRef}
      />
      <main>
        {/* Hero Section - Full viewport height */}
        <div
          ref={heroRef}
          className="min-h-screen flex items-center justify-center px-3 md:px-20"
        >
          <HeroSection />
        </div>

        {/* How It Works Section - Full viewport height */}
        <div
          ref={howItWorksRef}
          className="min-h-screen flex items-center justify-center px-3 md:px-20 bg-[#FAFAFA]"
        >
          <HowItWorks />
        </div>

        {/* Why Us Section - Full viewport height */}
        <div
          ref={whyUsRef}
          className="min-h-screen flex items-center justify-center px-3 md:px-20 z-0"
        >
          <WhyUs />
        </div>

        {/* Pricing Section - Full viewport height */}
        <div
          ref={pricingRef}
          className="min-h-screen flex items-center justify-center px-3 md:px-20 bg-[#FAFAFA]"
        >
          <Pricing />
        </div>
      </main>

      {/* Footer */}
      <div ref={contactRef}>
        <Footer />
      </div>

      {/* This is where the child routes will be rendered */}
      <Outlet />
    </div>
  );
};

export default LandingLayout;
