import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import AddTransactionForm from "./AddTransactionForm";
import dropdownimg from "../../public/assets/images/dropdownimg.svg";

// Register components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function BudgetChart() {
	const [budgetDrop, setBudgetDrop] = useState(true);
	function HandleBudget() {
		setBudgetDrop(!budgetDrop);
	}
	const centerTextPlugin = {
		id: "centerText",
		beforeDraw: (chart) => {
			const { width, height, ctx } = chart;
			ctx.restore();
			const total = chart.data.datasets[0].data.reduce(
				(a, b) => a + b,
				0
			);
			const text = `N${total}`;
			const fontSize = (height / 200).toFixed(2);
			ctx.font = `${fontSize}em sans-serif`;
			ctx.textBaseline = "middle";

			const textX = Math.round((width - ctx.measureText(text).width) / 2);
			const textY = height / 2;

			ctx.fillText(text, textX, textY);
			ctx.save();
		},
	};
	const options = {
		plugins: {
			legend: {
				display: false, // This hides the legend
			},
		},
	};

	const data = {
		labels: [
			"Rent",
			"Food",
			"Health",
			"Data",
			"Entertainment",
			"Clothing",
			"Others",
		],
		datasets: [
			{
				label: "My First Dataset",
				data: [2000, 2000, 1500, 1000, 3000, 3500, 2000],
				backgroundColor: ["#52D858", "#D26767", "#2F73DA", "#AC2EB7"],
				hoverOffset: 4,
			},
		],
	};

	return (
		<div className="flex flex-col justify-center">
			<p>Overview</p>
			<button
				onClick={HandleBudget}
				className="bg-[#034AB3] text-[20px] py-2 px-4 rounded-lg md:w-[330px] mt-5 h-[75px] mb-1 text-[#FFFFFF] flex justify-between items-center w-full transition-transform transform hover:scale-105"
			>
				Budget <img src={dropdownimg} />
			</button>
			{budgetDrop && (
				<div className="bg-white rounded shadow-lg p-3 border-[0.5px] border-[#6A7381] w-full">
					<ul className="space-y-2 mb-4">
						<Doughnut
							data={data}
							options={options}
							plugins={[centerTextPlugin]}
						/>
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
			<AddTransactionForm />
		</div>
	);
}
