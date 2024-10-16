const HowItWorks = () => {
	return (
		<div
			className="w-full py-16 bg-white font-montserrat"
			id="how-it-works "
		>
			<div className="container mx-auto px-6 md:px-12 lg:px-16">
				<h2
					data-aos="fade-right"
					className="text-center text-3xl md:text-4xl font-bold mb-8"
				>
					How It Works
				</h2>
				<div className="flex gap-4">
					<div
						data-aos="fade-right"
						data-aos-duration="600"
						className="flex md:flex-col flex-col gap-10 w-[1270px] items-center justify-center space-y-12 md:space-y-0 md:space-x-8 lg:space-x-16"
					>
						{/* Step 1 */}
						<div>
							<div className="flex flex-col items-center md:items-start text-center md:text-left 2xl:-ml-24">
								<div className="flex items-center mb-4">
									<div className="rounded-full bg-blue-600 text-white w-12 h-12 flex justify-center items-center text-lg font-bold">
										1
									</div>
									<div className="ml-4">
										<h3 className="font-bold text-lg">
											Sign Up & Download the free App
										</h3>
									</div>
								</div>
								<p className="text-gray-600">
									Join our 1 million users and start managing
									your money with ease today.
								</p>
							</div>
							<div className="flex-1"></div>
						</div>

						{/* Step 2 */}
						<div className="flex flex-row justify-center gap-9">
							<img
								src="assets/images/arrow1.svg"
								className="flex md:ml-16 w-[41px] md:w-[109px] "
							/>

							<div className="flex flex-col items-center md:items-start text-center md:text-left">
								<div className="flex items-center mb-4">
									<div className="rounded-full bg-blue-600 text-white w-12 h-12 flex justify-center items-center text-lg font-bold">
										2
									</div>
									<div className="ml-4">
										<h3 className="font-bold text-lg">
											Set up your MMT account
										</h3>
									</div>
								</div>
								<p className="text-gray-600">
									Join our 1 million users and start managing
									your money with ease today.
								</p>
							</div>
						</div>
						{/* Step 3 */}
						<div className="flex">
							<div className="flex flex-col items-center md:items-start text-center md:text-left">
								<div className="flex items-center mb-4">
									<div className="rounded-full bg-blue-600 text-white w-12 h-12 flex justify-center items-center text-lg font-bold">
										3
									</div>
									<div className="ml-4">
										<h3 className="font-bold text-lg">
											Start managing your expenses
										</h3>
									</div>
								</div>
								<p className="text-gray-600">
									Join our 1 million users and start managing
									your money with ease today.
								</p>
							</div>
							<div>
								<img
									src="assets/images/arrow2.svg"
									className="flex md:ml-16 w-[41px] md:w-[109px]"
								/>
							</div>
						</div>
					</div>
					<div data-aos="fade-left" data-aos-duration="600">
						<img
							src="assets/images/howitworksimg.svg"
							className="w-[500px] h-[500px] hidden md:block"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowItWorks;
