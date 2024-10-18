import { useState } from "react";
import plusimg from "../../public/assets/images/plusimg.svg";

export default function AddTransactionForm({ addTransaction }) {
	const [showTransaction, setShowTransaction] = useState(false);
	const [formData, setFormData] = useState({
		date: "",
		time: "",
		type: "",
		currencySymbol: "",
		amount: "",
		purpose: "", // Category field in formData
		description: "",
	});

	function handleTransaction() {
		setShowTransaction(!showTransaction);
	}

	function handleSubmit(e) {
		e.preventDefault();
		const newTransaction = {
			...formData,
			time: new Date().toLocaleTimeString(), // Automatically add current time
			date: new Date().toISOString().split("T")[0], // Automatically add current date
		};

		console.log("Form Data before submit:", formData); // Debugging
		console.log("New Transaction:", newTransaction); // Debugging

		addTransaction(newTransaction); // Update state in parent

		// Reset form data
		setFormData({
			date: "",
			time: "",
			type: "",
			purpose: "", // Reset category
			currencySymbol: "", // Reset currency symbol
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
				Add Transaction <img src={plusimg} alt="plus" />
			</button>
			{showTransaction && (
				<form className="space-y-4 mt-4" onSubmit={handleSubmit}>
					<div>
						<label className="block mb-1 text-sm font-medium">
							Type
						</label>
						<div className="flex gap-4">
							<select
								className="w-full p-3 border border-[#A8B1BD] rounded-md"
								name="type"
								value={formData.type}
								onChange={handleChange}
								required
							>
								<option value="">Select Type</option>
								<option value="income">Income</option>
								<option value="expense">Expense</option>
							</select>
						</div>
					</div>

					<div>
						<label className="block mb-1 text-sm font-medium">
							Amount
						</label>
						<div className="flex items-center gap-2">
							<select
								className="p-3 border border-[#A8B1BD] rounded-md"
								name="currencySymbol"
								value={formData.currencySymbol}
								onChange={handleChange}
								required
							>
								<option value="NGN">#</option>
								<option value="USD">$</option>
								<option value="EUR">€</option>
								<option value="GBP">£</option>
								<option value="JPY">¥</option>
							</select>
							<input
								type="number"
								className="w-full p-3 border border-[#A8B1BD] rounded-md"
								name="amount"
								value={formData.amount}
								onChange={handleChange}
								placeholder="Enter amount"
								required
							/>
						</div>
					</div>

					<div>
						<label className="block mb-1 text-sm font-medium">
							Category
						</label>
						<select
							className="w-full p-3 border border-[#A8B1BD] rounded-md"
							name="purpose"
							value={formData.purpose}
							onChange={handleChange}
							required
						>
							<option value="">Select Category</option>
							<option value="transportation">
								Transportation
							</option>
							<option value="feeding">Feeding</option>
							<option value="school fees">School Fees</option>
							<option value="medical bills">Medical Bills</option>
							<option value="savings">Savings</option>
							<option value="insurance">Insurance</option>
							<option value="utilities">Utilities</option>
							<option value="urgent home repairs">
								Urgent Home Repairs
							</option>
						</select>
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
