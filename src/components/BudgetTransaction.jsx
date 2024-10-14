import BudgetChart from "./BudgetChart";

export default function BudgetTransaction() {
	return (
		<div>
			<button className="text-[#F8F9FB] w-full text-[20px] flex justify-between items-center mb-1 h-[68px] px-4 bg-[#034AB3] border border-[#6A7381] rounded-[8px] ">
				Budget
				<img src="assets/images/dropdownimg.svg" />
			</button>
			<BudgetChart />
		</div>
	);
}
