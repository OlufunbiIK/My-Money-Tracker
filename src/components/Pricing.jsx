const PricingCard = ({
	plan,
	price,
	description,
	features,
	buttonColor,
	planColor,
	starImage,
}) => {
	return (
		<div
			className="bg-white p-4 h-[650px] rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 flex flex-col items-center mb-2 font-montserrat transition-transform transform hover:scale-105"
			id="pricing"
		>
			<h3
				className={`text-lg text-center md:text-center font-semibold mb-8 mt-8 ${planColor}`}
			>
				{plan}
			</h3>
			<p className="text-[18px] text-gray-600 mb-8">{description}</p>
			<div className="w-[248px] flex justify-center mt-4 mb-2">
				<div className="font-bold mb-8 text-[64px]">{price}</div>
				<p className="text-gray-400 text-sm mt-8">
					/ {plan === "Free" ? "forever" : "month"}
				</p>
			</div>
			<button
				className={`${buttonColor} text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 h-[58px] mb-12 mt-10 w-[200px] transition-all duration-500 ease-in-out `}
			>
				Start for Free
			</button>
			<ul className="space-y-2 text-gray-700">
				{features.map((feature, index) => (
					<li
						key={index}
						className="flex items-center justify-center space-x-2"
					>
						{/* <span>⭐</span> */}
						<span>{starImage}</span>
						<span>{feature}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

const Pricing = () => {
	const pricingData = [
		{
			plan: "Free",
			planColor: "text-[#165ECC]", // Blue color for the Free plan
			price: "₦0",
			description: "Start budgeting your expenses and save a lot",
			features: ["3 Accounts", "Reminders"],
			buttonColor: "bg-[#034AB3]", // Blue button
			starImage: <img src="assets/images/bluestar.svg" />,
		},
		{
			plan: "Standard",
			planColor: "text-[#52D858]", // Green color for the Standard plan
			price: "₦900",
			description: "Start budgeting your expenses and save a lot",
			features: ["5 Accounts", "Reminders"],
			buttonColor: "bg-[#52D858]", // Green button
			starImage: <img src="assets/images/greenstar.svg" />,
		},
	];

	return (
		<section className="py-12 px-6 md:px-12 lg:px-24 text-center ">
			<h2 className="text-3xl font-bold mb-12 text-center">Pricing</h2>
			<div className="flex flex-col md:flex-row justify-center md:space-x-32 space-y-8 md:space-y-0 ">
				{pricingData.map((card, index) => (
					<PricingCard
						key={index}
						plan={card.plan}
						price={card.price}
						description={card.description}
						features={card.features}
						buttonColor={card.buttonColor}
						planColor={card.planColor}
						starImage={card.starImage}
					/>
				))}
			</div>
		</section>
	);
};

export default Pricing;
