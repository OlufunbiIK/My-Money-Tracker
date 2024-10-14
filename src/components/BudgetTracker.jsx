import { useState } from "react";

const BudgetTracker = () => {
	const [transactions, setTransactions] = useState([
		{
			date: "30 July, 2021",
			time: "9:52 AM",
			type: "Income",
			category: "Salary",
			amount: 30000,
		},
		{
			date: "30 July, 2021",
			time: "9:52 AM",
			type: "Expenses",
			category: "Transportation",
			amount: 7000,
		},
		{
			date: "30 July, 2021",
			time: "9:52 AM",
			type: "Expenses",
			category: "Food",
			amount: 5000,
		},
		{
			date: "30 July, 2021",
			time: "9:52 AM",
			type: "Expenses",
			category: "School Fees",
			amount: 10000,
		},
	]);

	const [newTransaction, setNewTransaction] = useState({
		date: "",
		time: "",
		type: "",
		category: "",
		amount: "",
	});

	const handleChange = (e) => {
		setNewTransaction({
			...newTransaction,
			[e.target.name]: e.target.value,
		});
	};

	const handleAddTransaction = (e) => {
		e.preventDefault();
		if (
			newTransaction.date &&
			newTransaction.time &&
			newTransaction.type &&
			newTransaction.category &&
			newTransaction.amount
		) {
			setTransactions([
				...transactions,
				{ ...newTransaction, amount: Number(newTransaction.amount) },
			]);
			setNewTransaction({
				date: "",
				time: "",
				type: "",
				category: "",
				amount: "",
			}); // Reset form
		}
	};

	return (
		<div className="container">
			<h2>Budget Tracker</h2>
			<form onSubmit={handleAddTransaction}>
				<input
					type="date"
					name="date"
					value={newTransaction.date}
					onChange={handleChange}
					required
				/>
				<input
					type="time"
					name="time"
					value={newTransaction.time}
					onChange={handleChange}
					required
				/>
				<select
					name="type"
					value={newTransaction.type}
					onChange={handleChange}
					required
				>
					<option value="">Select Type</option>
					<option value="Income">Income</option>
					<option value="Expenses">Expenses</option>
				</select>
				<input
					type="text"
					name="category"
					placeholder="Category"
					value={newTransaction.category}
					onChange={handleChange}
					required
				/>
				<input
					type="number"
					name="amount"
					placeholder="Amount"
					value={newTransaction.amount}
					onChange={handleChange}
					required
				/>
				<button type="submit">Add Transaction</button>
			</form>

			<div className="transactions">
				{transactions.map((transaction, index) => (
					<div key={index} className="transaction">
						<span>
							{transaction.date} {transaction.time}
						</span>
						<span
							className={
								transaction.type === "Income"
									? "income"
									: "expense"
							}
						>
							{transaction.type}
						</span>
						<span>{transaction.category}</span>
						<span>₦{transaction.amount.toLocaleString()}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default BudgetTracker;
