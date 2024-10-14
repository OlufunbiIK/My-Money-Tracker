import { BiRefresh } from "react-icons/bi";
import Transactions from "../components/Transactions";
import BudgetChart from "../components/BudgetChart";
import { useEffect, useState } from "react";
import { TransData } from "./MainApp";

export default function Budget() {
	const [isVisible, setIsVisible] = useState(false); // State for animation visibility
	const [transactionData, setTransactionData] = useState(TransData);

	useEffect(() => {
		// Set to true to trigger animation
		const timer = setTimeout(() => setIsVisible(true), 100); // Delay for effect
		return () => clearTimeout(timer); // Cleanup on unmount
	}, []);
	return (
		<div
			className={`w-full transition-opacity duration-500 ${
				isVisible
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-10"
			}`}
		>
			<div className="flex justify-between md:px-4 mb-4 text-[#49505A] md:text-[20px] sm:text-[18px] mt-6 px-2 transition-opacity duration-500">
				<p className="text-[#121417] md:text-[18px] text-[14px]">
					History
				</p>
				<p className="md:text-[18px] text-[14px]">
					Monday 5th September, 2021{" "}
				</p>
			</div>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-[4fr_1fr] w-full">
				<div>
					<div className="flex gap-10 items-center px-3 w-full justify-between">
						<p className="text-[#121417] text-[20px]">
							Transaction
						</p>
						<button className="bg-[#034AB3] gap-1 text-white flex items-center rounded-[4px] px-2 py-1">
							Refresh <BiRefresh />
						</button>
					</div>
					<Transactions TransData={TransData} />
				</div>
				<BudgetChart />
			</div>
		</div>
	);
}
