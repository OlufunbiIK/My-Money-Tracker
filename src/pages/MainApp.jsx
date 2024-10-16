import { useEffect, useState } from "react"; // Import useEffect and useState
import { BiRefresh } from "react-icons/bi";
import TransactionPart from "../components/TransactionPart";
import AddTransactionForm from "../components/AddTransactionForm";
import Transactions from "../components/Transactions";
import { auth } from "../Firebase";
import { onAuthStateChanged } from "firebase/auth";

export const TransData = [
	{
		date: "10th, July 2021",
		time: "9:52am",
		type: "income",
		purpose: "salary",
		amount: "#30,000",
	},
	{
		date: "16, July 2021",
		time: "9:52am",
		type: "Expense",
		purpose: "Transportation",
		amount: "#17,000",
	},
];
const AccountCard = ({ type, amount }) => {
	return (
		<div>
			<h1 className="text-[18px] font-semibold text-white mt-4 ml-2">
				{type}
			</h1>
			<p className="text-[24px] font-bold text-white mt-2 ml-2">
				{amount}
			</p>
		</div>
	);
};

const Dashboard = () => {
	const [isVisible, setIsVisible] = useState(false); // State for animation visibility
	const [user, setUser] = useState(null);
	const [transactionData, setTransactionData] = useState(TransData);

	// Function to add a new transaction from the form
	const addTransaction = (newTransaction) => {
		setTransactionData([...transactionData, newTransaction]);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => unsubscribe();
	}, []);
	console.log(user);

	const dashboardData = [
		{ type: "Total Income", amount: "N30,000" },
		{ type: "Total Expenses", amount: "N17,000" },
		{ type: "Balance", amount: "N13,000" },
	];

	useEffect(() => {
		// Set to true to trigger animation
		const timer = setTimeout(() => setIsVisible(true), 100); // Delay for effect
		return () => clearTimeout(timer); // Cleanup on unmount
	}, []);

	return (
		<div
			className={`flex-col md:flex-row mt-6 transition-opacity duration-500 z-0 ${
				isVisible
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-10"
			}`}
		>
			<div className="flex justify-between text-[#49505A]">
				{user ? (
					<p className="md:text-[20px] text-[16px]">
						Welcome, {user.email}
					</p>
				) : (
					<p>Please log in</p>
				)}
				<p className="text-[#49505A] md:text-[20px] text-[14px] hidden md:block">
					<span className="text-[#49505A] md:text-[20px] text-[14px]">
						Monday,
					</span>
					5th September, 2021
				</p>
			</div>

			<div className="flex flex-col lg:flex-row gap-4">
				<div className="lg:w-[70%]">
					<div className="flex gap-6 flex-col xl:flex-row mt-2 w-full">
						{/* Loop through the dashboard data */}
						{dashboardData.map((data, index) => (
							<div
								data-aos="zoom-in"
								data-aos-duration="1000"
								key={index}
								className="bg-[#034AB3] rounded-[8px] px-4 py-4 h-[142px] w-full  mx-auto  mb-4 mt-4 items-center xl:[400px] 2xl:w-[450px]"
							>
								<AccountCard
									type={data.type}
									amount={data.amount}
								/>
							</div>
						))}
					</div>
					<div className="flex justify-between items-center px-3">
						<p className="text-[#121417] text-[20px]">
							Transaction
						</p>
						<button className="bg-[#034AB3] gap-1 text-white flex items-center rounded-[4px] px-2 py-1 transition-transform transform hover:scale-105">
							Refresh <BiRefresh className="hover:animate-spin" />
						</button>
					</div>
					<Transactions TransData={transactionData} />
				</div>
				<div className="flex flex-col w-full lg:w-[30%] ">
					<TransactionPart />
					<AddTransactionForm addTransaction={addTransaction} />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
