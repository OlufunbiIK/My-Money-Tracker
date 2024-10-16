import { useState } from "react";
import DoughnutChart from "./DoughnutChart";
import dropdownimg from "../../public/assets/images/dropdownimg.svg";

export default function TransactionPart() {
	const [showIncome, setShowIncome] = useState(false);
	function handleShow() {
		setShowIncome(!showIncome);
	}
	return (
		<div className="mt-4 w-full">
			<p className="text-[#49505A] text-[20px]">Overview</p>

			<button
				onClick={handleShow}
				className="text-[#F8F9FB] w-full text-[20px] flex justify-between items-center mb-1 h-[68px] px-4 bg-[#034AB3] border border-[#6A7381] rounded-[8px] transition-transform transform hover:scale-105"
			>
				Income
				<img src={dropdownimg} />
			</button>

			{/* Income Breakdown */}
			{showIncome && (
				<div className="bg-white rounded shadow-lg p-6 border-[0.5px] border-[#6A7381]">
					<DoughnutChart />
					<ul className="space-y-2 mb-4">
						<li className="flex items-center">
							<span className="w-4 h-4 bg-[#52D858] rounded-full mr-2"></span>
							<span className="text-[#1F2329]">Salary</span>
							<span className="ml-auto text-[#1F2329]">
								N10,000
							</span>
						</li>
						<li className="flex items-center">
							<span className="w-4 h-4 bg-[#D26767] rounded-full mr-2"></span>
							<span className="text-[#1F2329] text-[16px]">
								Business
							</span>
							<span className="ml-auto text-[#1F2329] text-[16px]">
								N10,000
							</span>
						</li>
						<li className="flex items-center">
							<span className="w-4 h-4 bg-[#2F73DA] rounded-full mr-2"></span>
							<span className="text-[#1F2329] text-[16px]">
								Crypto Investment
							</span>
							<span className="ml-auto [#1F2329] text-[16px]">
								N5,000
							</span>
						</li>
						<li className="flex items-center">
							<span className="w-4 h-4 bg-[#AC2EB7] rounded-full mr-2"></span>
							<span className="text-[#1F2329] text-[16px]">
								Cash Gift
							</span>
							<span className="ml-auto [#1F2329] text-[16px]">
								N5,000
							</span>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}
