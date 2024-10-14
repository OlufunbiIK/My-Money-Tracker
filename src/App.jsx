import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"; // Import useState and useEffect
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import LandingLayout from "./applayout/LandingLayout";
import DashboardLayout from "./applayout/DashboardLayout";
import "./App.css";
import MainApp from "./pages/MainApp";
import Budget from "./pages/Budget";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import "@fontsource/montserrat"; // Defaults to weight 400 (regular)
import ChangePassword from "./pages/ChangePassword";
import PasswordSuccess from "./pages/PasswordSuccess";
import EmailSuccess from "./pages/EmailSuccess";
import ResetPassword from "./pages/ResetPassword";
import EmailVerification from "./components/EmailVerification";
import EmailSent from "./components/EmailSent";
import LandingPage from "./pages/LandingPage";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function App() {
	AOS.init();

	// You can also pass an optional settings object
	// below listed default settings
	AOS.init({
		// Global settings:
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
		initClassName: "aos-init", // class applied after initialization
		animatedClassName: "aos-animate", // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 400, // values from 0 to 3000, with step 50ms
		easing: "ease", // default easing for AOS animations
		once: false, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
	});
	const [theme, setTheme] = useState("light"); // Default theme

	// Update the theme in the document when the theme state changes
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	// Handle theme change
	const handleThemeChange = (selected) => {
		setTheme(selected);
	};

	return (
		<Router>
			<Routes>
				{/* Landing page route */}
				<Route
					path="/"
					element={
						<LandingLayout
							theme={theme}
							handleThemeChange={handleThemeChange}
						/>
					}
				/>
				<Route path="/signup" element={<SignUp />} />
				<Route path="/login" element={<Login />} />
				<Route path="/changepassword" element={<ChangePassword />} />
				<Route path="/passwordsuccess" element={<PasswordSuccess />} />
				<Route path="/emailsuccess" element={<EmailSuccess />} />
				<Route path="/forgotpassword" element={<ResetPassword />} />
				<Route path="/landingpage" element={<LandingPage />} />
				<Route
					path="/emailverification"
					element={<EmailVerification />}
				/>
				<Route path="/emailsent" element={<EmailSent />} />

				{/* Dashboard Layout with nested routes */}
				<Route
					path="/dashboard/"
					element={
						<DashboardLayout
							theme={theme}
							handleThemeChange={handleThemeChange}
						/>
					}
				>
					<Route index element={<MainApp />} /> {/* Default route */}
					<Route path="/dashboard/budget" element={<Budget />} />
					<Route path="/dashboard/profile" element={<Profile />} />
					<Route path="/dashboard/settings" element={<Settings />} />
					{/* Another nested route */}
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
