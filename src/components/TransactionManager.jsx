import { useState } from "react";
import Transactions from "./Transactions";
import AddTransactionForm from "./AddTransactionForm";

export default function TransactionManager() {
	const [transData, setTransData] = useState([
		{
			date: "1st, July 2021",
			time: "9:52am",
			type: "income",
			purpose: "salary",
			amount: "#30,000",
		},
		//... (other initial data)
	]);

	// Function to add a new transaction
	const addTransaction = (newTransaction) => {
		setTransData((prevTransData) => [newTransaction, ...prevTransData]);
	};

	return (
		<div>
			<AddTransactionForm addTransaction={addTransaction} />
			<Transactions transData={transData} />
		</div>
	);
}
