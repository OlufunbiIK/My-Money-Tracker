import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import dropdownimg from "../../public/assets/images/dropdownimg.svg";

// Register components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
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
		labels: ["Salary", "Business", "Crypto Investment", "Cash Gift"],
		datasets: [
			{
				label: "My First Dataset",
				data: [10000, 10000, 5000, 5000],
				backgroundColor: ["#52D858", "#D26767", "#2F73DA", "#AC2EB7"],
				hoverOffset: 4,
			},
		],
	};

	return (
		<div className="flex flex-col justify-center">
			<button className="flex items-center gap-2 md:hidden sm:block">
				Overview
				<img src={dropdownimg} alt="Dropdown icon" />
			</button>
			<Doughnut
				data={data}
				options={options}
				plugins={[centerTextPlugin]}
			/>
		</div>
	);
}
