import Testimonials from "./TestimonyPage";

const WhyUs = () => {
	const features = [
		{
			title: "Recurring Transactions",
			description:
				"Worry less about having to input expenses that is necessary",
			imgSrc: "assets/images/recurring.svg",
			bgColor: "bg-white",
		},
		{
			title: "Get a quick overview",
			description:
				"About your total incomes and expenses at a glance all in one place",
			imgSrc: "assets/images/review.svg",
			bgColor: "bg-[#8CE590]",
		},
		{
			title: "Easy Data Backup",
			description:
				"Backup your data easily and have all your data available even when you change devices",
			imgSrc: "assets/images/backup.svg",
			bgColor: "bg-white",
		},
	];

	return (
		<section
			className="py-16 px-2 text-center mx-auto mt-20 font-montserrat z-1"
			id="why-us"
		>
			<h2 className="text-3xl font-bold mb-12">Why Us</h2>
			<div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-8 md:space-y-0 items-center relative z-0 ">
				{features.map((feature, index) => (
					<div
						data-aos="flip-left"
						data-aos-duration="1000"
						key={index}
						className={`relative ${feature.bgColor} p-6 rounded-lg shadow-md flex flex-col w-[305px] items-center border-t-4 ${feature.borderColor} h-[282px] z-1`}
					>
						<div
							data-aos="flip-left"
							className="absolute -top-8 left-5 w-16 h-16 rounded-full flex items-center justify-center"
						>
							<img
								src={feature.imgSrc}
								alt={feature.title}
								className="w-8 h-8"
							/>
						</div>
						<h3 className="text-xl font-semibold mt-12 mb-2">
							{feature.title}
						</h3>
						<p className="text-gray-600">{feature.description}</p>
					</div>
				))}
			</div>
			<div className="mt-32">
				<Testimonials />
			</div>
		</section>
	);
};

export default WhyUs;
