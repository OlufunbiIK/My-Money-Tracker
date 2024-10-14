import { Navigate } from "react-router-dom";

export default function HeroSection() {
	return (
		<div
			id="hero"
			className="flex items-center justify-center mx-auto mt-32 my-6 px-4 py-6 bg-white text-[#1F2329] font-montserrat max-w-full "
		>
			<div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-10">
				{/* Image Section */}
				<div
					data-aos="fade-right"
					data-aos-duration="600"
					className="w-full lg:w-[50%]"
				>
					<img
						src="assets/images/herosectionimg.svg"
						alt="Hero Image"
						className="mx-auto max-w-full h-auto"
					/>
				</div>

				{/* Text and Button Section */}
				<div
					data-aos="fade-left"
					data-aos-duration="600"
					className="flex flex-col items-center lg:items-start w-full lg:w-[50%] gap-2 lg:gap-3"
				>
					<h1 className="text-[28px] sm:text-[32px] lg:text-[48px] font-bold text-center lg:text-left leading-10 lg:leading-none">
						<span className="text-green-300">Experience</span> a
						fresh way to manage money
					</h1>
					<p className="text-[14px] sm:text-[16px] lg:text-[18px] text-center lg:text-left mb-4 leading-6">
						Reach your goal with personalized insights, custom
						budgets, <br className="hidden lg:block" />
						spend tracking, and subscription monitoring — all for
						free
					</p>
					{/* Sign Up Button */}
					<button className="text-white rounded-[8px] w-full sm:w-[300px] hover:hover:bg-[#6fa7fc] lg:w-[400px] h-[48px] sm:h-[58px] bg-[#034AB3] mx-auto lg:mx-0 transition-all duration-500 ease-in-out">
						Sign Up
					</button>
					{/* Icons */}
					<div className="flex gap-4 justify-center lg:justify-start -mt-10">
						<img
							src="assets/images/appstore.svg"
							alt="Icon 1"
							className="md:w-[190px] w-[142px]"
						/>
						<img
							src="assets/images/playstore.svg"
							alt="Icon 2"
							className="md:w-[190px] w-[142px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
