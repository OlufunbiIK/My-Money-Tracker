// export default function Settings() {
// 	return (
// 		<div className="flex flex-col w-full md:ml-10">
// 			<div>
// 				<p className="flex ">Monday 5th September, 2021 </p>
// 				<div className="flex gap-32">
// 					<h1>Select Currency</h1>
// 					<form>
// 						<div>
// 							<p>NGN</p>
// 							<p>Default</p>
// 						</div>

// 						{/* Group for currency selection */}
// 						<div className="flex">
// 							<input
// 								type="radio"
// 								name="currency" // Same name for all currency options
// 								className="border border-[#A8B1BD] rounded-[8px]"
// 								required
// 							/>
// 							<label className="block text-sm font-medium text-[#1F2329] ">
// 								USD - US Dollars
// 							</label>
// 						</div>

// 						<div className="flex">
// 							<input
// 								type="radio"
// 								name="currency" // Same name for all currency options
// 								className="border border-[#A8B1BD] rounded-[8px]"
// 								required
// 							/>
// 							<label className="block text-sm font-medium text-[#1F2329] ">
// 								Euro - Euro
// 							</label>
// 						</div>

// 						<div className="flex">
// 							<input
// 								type="radio"
// 								name="currency" // Same name for all currency options
// 								className="border border-[#A8B1BD] rounded-[8px]"
// 								required
// 							/>
// 							<label className="block text-sm font-medium text-[#1F2329] ">
// 								GBP - British Pound Sterling
// 							</label>
// 						</div>

// 						<div className="flex">
// 							<input
// 								type="radio"
// 								name="currency" // Same name for all currency options
// 								className="border border-[#A8B1BD] rounded-[8px]"
// 								required
// 							/>
// 							<label className="block text-sm font-medium text-[#1F2329] ">
// 								NGN - Nigerian Naira
// 							</label>
// 						</div>

// 						<div className="flex">
// 							<input
// 								type="radio"
// 								name="currency" // Same name for all currency options
// 								className="border border-[#A8B1BD] rounded-[8px]"
// 								required
// 							/>
// 							<label className="block text-sm font-medium text-[#1F2329] ">
// 								ZAR - South African Rand
// 							</label>
// 						</div>

// 						<div className="flex">
// 							<input
// 								type="radio"
// 								name="currency" // Same name for all currency options
// 								className="border border-[#A8B1BD] rounded-[8px]"
// 								required
// 							/>
// 							<label className="block text-sm font-medium text-[#1F2329] ">
// 								JPY - Japanese Yen
// 							</label>
// 						</div>

// 						<div className="flex">
// 							<input
// 								type="radio"
// 								name="currency" // Same name for all currency options
// 								className="border border-[#A8B1BD] rounded-[8px]"
// 								required
// 							/>
// 							<label className="block text-sm font-medium text-[#1F2329] ">
// 								BTC - Bitcoin
// 							</label>
// 						</div>
// 					</form>
// 				</div>
// 			</div>

// 			<div className="flex flex-row gap-48">
// 				<div>
// 					<h1>Theme</h1>
// 				</div>
// 				<form>
// 					{/* Group for theme selection */}
// 					<div className="flex">
// 						<input
// 							type="radio"
// 							name="theme" // Same name for all theme options
// 							className="border border-[#A8B1BD] rounded-[8px]"
// 							required
// 						/>
// 						<label className="block text-sm font-medium text-[#1F2329] ">
// 							Light
// 						</label>
// 					</div>

// 					<div className="flex">
// 						<input
// 							type="radio"
// 							name="theme" // Same name for all theme options
// 							className="border border-[#A8B1BD] rounded-[8px]"
// 							required
// 						/>
// 						<label className="block text-sm font-medium text-[#1F2329] ">
// 							Dark
// 						</label>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// }
import { useState, useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle";
import SaveButton from "../components/SaveButton";

export default function Settings() {
	const [selectedCurrency, setSelectedCurrency] = useState(""); // State for selected currency
	const [selectedTheme, setSelectedTheme] = useState(""); // State for selected theme
	const [animate, setAnimate] = useState(false); // State to trigger animation

	// Trigger animation when the component mounts
	useEffect(() => {
		setAnimate(true);
	}, []);

	return (
		<div
			className={`flex flex-col w-full md:ml-10 mt-5 ${
				animate ? "animate-fade-slide-up" : ""
			}`}
		>
			<div className="">
				<p className="text-right mb-5">Monday 5th September, 2021</p>
				<div className="flex md:gap-32">
					<h1>Select Currency</h1>
					<form>
						<div className="flex gap-4">
							<p className="text-[#1F2329]">NGN</p>
							<p className="text-[#034AB3] italic">Default</p>
						</div>

						{/* Group for currency selection */}
						<p className="text-[#034AB3]">
							Change Default Currency
						</p>
						{["USD", "EUR", "GBP", "NGN", "ZAR", "JPY", "BTC"].map(
							(currency) => (
								<div
									className={`flex mb-5 ${
										animate ? "animate-fade-slide-up" : ""
									}`}
									key={currency}
								>
									<input
										type="radio"
										name="currency" // Same name for all currency options
										className="border border-[#A8B1BD] rounded-[8px]"
										value={currency} // Set value to the currency
										checked={selectedCurrency === currency} // Check if this is the selected currency
										onChange={() =>
											setSelectedCurrency(currency)
										} // Update state on change
										required
									/>
									<label className="block text-sm font-medium text-[#1F2329] ">
										{currency}
										{currency === "USD"
											? "US Dollars"
											: currency === "EUR"
											? "Euro"
											: currency === "GBP"
											? "British Pound Sterling"
											: currency === "NGN"
											? "Nigerian Naira"
											: currency === "ZAR"
											? "South African Rand"
											: currency === "JPY"
											? "Japanese Yen"
											: "Bitcoin"}
										{/* Render tick mark if this currency is selected */}
										{selectedCurrency === currency && (
											<span className="ml-2 text-blue-500">
												✔️
											</span>
										)}
									</label>
								</div>
							)
						)}
					</form>
				</div>
			</div>

			<ThemeToggle />
			<div className="flex justify-center items-center">
				<SaveButton />
			</div>
		</div>
	);
}
