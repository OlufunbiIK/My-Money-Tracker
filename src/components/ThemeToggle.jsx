import { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";

const ThemeToggle = () => {
	const [theme, setTheme] = useState("light"); // Default theme
	const [selectedTheme, setSelectedTheme] = useState(theme); // Initialize selected theme with default theme

	// Update the theme in the document when the theme state changes
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	// Handle theme selection
	const handleThemeChange = (selected) => {
		setTheme(selected);
		setSelectedTheme(selected); // Update selected theme state
	};

	return (
		<div className="flex flex-col w-full md:ml-10">
			<div className="flex md:gap-36 gap-16">
				<h1 className="mb-4 text-left">Theme</h1>
				<form>
					{/* Group for theme selection */}
					{[
						"Light",
						"wireframe",
						"lemonade",
						"valentine",
						"retro",
					].map((theme) => (
						<div
							className="flex items-center flex-row mb-2"
							key={theme}
						>
							{/* Added items-center for vertical alignment */}
							<input
								type="radio"
								name="theme" // Same name for all theme options
								className="border border-[#A8B1BD] rounded-[8px]"
								value={theme} // Set value to the theme
								checked={selectedTheme === theme} // Check if this is the selected theme
								onChange={() => handleThemeChange(theme)} // Update state on change
								required
							/>

							<label className="flex items-center text-sm font-medium text-[#1F2329] ml-2">
								{theme}
								{selectedTheme === theme && (
									<span className="ml-2 text-blue-500">
										<TiTick />
									</span>
								)}
							</label>
						</div>
					))}
				</form>
			</div>
		</div>
	);
};

export default ThemeToggle;
