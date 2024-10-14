export default function TransactionPartReal() {
	return (
		<div className="w-[330px] mt-4">
			<p className="text-[#49505A] text-[20px]">Overview</p>
			<div className="flex justify-between items-center mb-1 h-[68px] px-4 bg-[#034AB3] border border-[#6A7381] rounded-[8px]">
				<div className="text-[#F8F9FB] text-[20px]">Income</div>
				<img src="assets/images/dropdownimg.svg" />
			</div>

			<button className="bg-[#034AB3] text-[20px] py-2 px-4 rounded-lg w-full mt-5 h-[75px] text-[#FFFFFF] flex justify-between items-center transition-transform transform hover:scale-105">
				Add Transaction <img src="assets/images/plusimg.svg" />
			</button>
		</div>
	);
}
