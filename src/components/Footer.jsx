import { FaFacebook } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaArrowAltCircleUp } from "react-icons/fa";
export default function Footer() {
	return (
		<footer className="relative left-0 right-0 bg-[#0052CC] text-white py-16 px-4 md:h-[535px] items-center">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
				{/* Contact Us Section */}
				<div>
					<img
						src="/assets/images/logoWhite.svg"
						alt="Logo"
						className="mb-2"
					/>
					<h3 className="font-bold mb-8 mt-6 text-[24px]">
						Contact Us
					</h3>
					<ul className="space-y-2 text-[18px]">
						<li className="flex items-center mb-8">
							<img
								src="/assets/images/telephone.svg"
								alt="Phone"
								className="mr-2 text-[18px] "
							/>
							+2348176904582
						</li>
						<li className="flex items-center mb-8">
							<img
								src="/assets/images/email 1.svg"
								alt="Email"
								className="mr-2 text-[18px]"
							/>
							mymoney@gmail.com
						</li>
					</ul>
				</div>

				{/* Information Section */}
				<div>
					<h3 className="font-bold mb-4 text-[24px]">Information</h3>
					<ul className="space-y-2 text-[18px]">
						<li className="mb-4">Services</li>
						<li className="mb-4">Support</li>
						<li className="mb-4">Terms & Condition</li>
						<li className="mb-4">Privacy & Policy</li>
					</ul>
				</div>

				{/* Helpful Links Section */}
				<div>
					<h3 className="font-bold mb-4 text-[24px]">
						Helpful Links
					</h3>
					<ul className="space-y-2 text-[18px]">
						<li className="mb-4">Services</li>
						<li className="mb-4">Support</li>
						<li className="mb-4">Terms & Condition</li>
						<li className="mb-4">Privacy & Policy</li>
					</ul>
				</div>

				{/* Subscribe Section */}
				<div>
					<h3 className="font-bold mb-4 text-[24px]">
						Subscribe more Info
					</h3>
					<div className="flex items-center bg-white text-black rounded-md p-2 h-[65px]">
						<img
							src="/assets/images/blueEmail.svg"
							alt="Email Icon"
							className="mr-2"
						/>
						<input
							type="email"
							placeholder="Enter your email"
							className="flex-1 w-1 outline-none"
						/>
					</div>
					<button className="bg-[#034AB3] text-white rounded-md w-auto px-8 h-[55px] py-2 mt-4">
						Subscribe
					</button>
				</div>
			</div>

			{/* Back to top button */}
			<div className="flex float-right mx-5 my-5">
				<a
					href="#top"
					className="block mt-6 text-center text-white bg-[#034AB3] rounded-full w-10 h-10 leading-10 mx-auto"
				>
					{/* &#8679; */}
					<FaArrowAltCircleUp className="ml-3 mt-3" />
				</a>
			</div>

			{/* Footer Bottom Section */}
			<div className="w-full border-t border-gray-300 mt-10 pt-4 flex gap-4 md:gap-0 flex-col md:flex-row items-center justify-between bottom-0 px-4">
				{/* Empty div for alignment */}
				<div className="flex-1"></div>

				{/* Social Icons */}
				<div className="flex justify-center space-x-4 items-center">
					<a href="#">
						<FaFacebook size={43} />
					</a>
					<a href="#">
						<LuTwitter size={43} />
					</a>
					<a href="#">
						<AiOutlineInstagram size={43} />
					</a>
				</div>

				<div className="flex-1 text-right">
					<p className="text-sm">
						&copy; 2021 MMT. All Rights Reserved
					</p>
				</div>
			</div>
		</footer>
	);
}
