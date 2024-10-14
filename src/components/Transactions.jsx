import { useState } from "react";
import nextbtnimg from "../../public/assets/images/nextbtnimg.svg";
import backbtnimg from "../../public/assets/images/backbtnimg.svg";

const TransCard = ({ date, time, type, purpose, amount }) => {
	return (
		<div className="mt-4 mb-4">
			<div className="flex gap-10 mb-4 text-[#49505A]">
				<p>{date}</p>
				<p>{time}</p>
			</div>
			<div className="flex justify-between">
				<div className="flex gap-20">
					<p
						className={`capitalize ${
							type === "income"
								? "text-[#1F8B24]"
								: "text-[#034AB3]"
						}`}
					>
						{type}
					</p>
					<p
						className={`capitalize ${
							type === "income"
								? "text-[#1F8B24]"
								: "text-[#034AB3]"
						}`}
					>
						{purpose}
					</p>
				</div>
				<p
					className={`capitalize ${
						type === "income" ? "text-[#1F8B24]" : "text-[#034AB3]"
					}`}
				>
					{amount}
				</p>
			</div>
		</div>
	);
};

export default function Transactions({ TransData }) {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 8; // Change this to display more items per page if needed

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	console.log(TransData);
	const currentItems = TransData?.slice(indexOfFirstItem, indexOfLastItem);

	const totalPages = Math.ceil(TransData.length / itemsPerPage);

	return (
		<div>
			<div
				data-aos="zoom-out-up"
				data-aos-duration="1000"
				className="bg-white border-[0.5px] border-[#6A7381] rounded-[8px] px-4 mt-4 mx-2 "
			>
				{/* Other components like filters */}
				<div>
					<div className="w-full overflow-auto">
						{currentItems.map((data, index) => (
							<div
								key={index}
								className={`border-b-[0.5px]  ${
									!data.border
										? "border-b-[#6A7381]"
										: "border-b-transparent"
								}`}
							>
								<TransCard
									date={data.date}
									time={data.time}
									type={data.type}
									purpose={data.purpose}
									amount={data.amount}
								/>
							</div>
						))}
					</div>
				</div>
				{/* Pagination Controls */}
				<div className="flex items-center gap-1 justify-end mt-4">
					<button
						onClick={() =>
							setCurrentPage((prev) => Math.max(prev - 1, 1))
						}
						disabled={currentPage === 1}
						className="bg-white rounded-md px-2 py-1 disabled:opacity-50 my-2"
					>
						<img src={backbtnimg} />
					</button>
					<p className="text-[14px]">
						{currentPage} of {totalPages}
					</p>
					<button
						onClick={() =>
							setCurrentPage((prev) =>
								Math.min(prev + 1, totalPages)
							)
						}
						disabled={currentPage === totalPages}
						className="bg-white rounded-md px-2 py-1 disabled:opacity-50 my-2"
					>
						<img src={nextbtnimg} />
					</button>
				</div>
			</div>
		</div>
	);
}
