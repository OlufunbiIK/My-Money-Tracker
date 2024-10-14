import { useState } from "react";
import plusimg from "../../public/assets/images/plusimg.svg";
export default function AddTransactionForm({ addTransaction }) {
	const [showTransaction, setShowTransaction] = useState(false);
	const [formData, setFormData] = useState({
		date: "",
		time: "",
		type: "",
		purpose: "",
		amount: "",
		description: "",
	});

	function handleTransaction() {
		setShowTransaction(!showTransaction);
	}
	function handleSubmit(e) {
		e.preventDefault();
		const newTransaction = {
			...formData,
			time: new Date().toLocaleTimeString(),
		};
		console.log("New Transaction:", newTransaction); // Add this line
		addTransaction(newTransaction); // Update state in parent
		setFormData({
			date: "",
			time: "",
			type: "",
			purpose: "",
			amount: "",
			description: "",
		});
	}

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	return (
		<div className="mt-4">
			<button
				onClick={handleTransaction}
				className="bg-[#034AB3] text-[20px] py-2 px-4 rounded-lg w-full mt-5 h-[75px] text-[#FFFFFF] flex justify-between items-center transition-transform transform hover:scale-105"
			>
				Add Transaction <img src={plusimg} />
			</button>
			{showTransaction && (
				<form className="space-y-4 mt-4" onSubmit={handleSubmit}>
					<div>
						<label className="block mb-1 text-sm font-medium">
							Type
						</label>
						<input
							type="text"
							className="w-full p-3 border border-[#A8B1BD] rounded-md"
							name="type"
							value={formData.type}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label className="block mb-1 text-sm font-medium">
							Amount
						</label>
						<input
							type="number"
							className="w-full p-3 border border-[#A8B1BD] rounded-md"
							name="amount"
							value={formData.amount}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label className="block mb-1 text-sm font-medium">
							Category
						</label>
						<input
							type="text"
							className="w-full p-3 border border-[#A8B1BD] rounded-md"
							name="purpose"
							value={formData.purpose}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label className="block mb-1 text-sm font-medium">
							Date
						</label>
						<input
							type="date"
							className="w-full p-3 border border-[#A8B1BD] rounded-md"
							name="date"
							value={formData.date}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label className="block mb-1 text-sm font-medium">
							Description
						</label>
						<textarea
							className="w-full p-3 border border-[#A8B1BD] rounded-md h-[150px]"
							name="description"
							value={formData.description}
							onChange={handleChange}
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full p-3 mt-4 text-white bg-[#034AB3] rounded-md hover:bg-blue-700"
					>
						Save
					</button>
				</form>
			)}
		</div>
	);
}
