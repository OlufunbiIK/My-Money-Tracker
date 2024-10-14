import { useEffect, useState } from "react";
import AvatarWithIcon from "../components/AvatarWithIcon";
import padlockimg from "../../public/assets/images/padlockimg.svg";
import nextimg from "../../public/assets/images/nextimg.svg";
import SaveButton from "../components/SaveButton";

export default function Profile() {
	const [dropOtherOptions, setDropOtherOptions] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [animate, setAnimate] = useState(false); // State to trigger animation
	useEffect(() => {
		// Set to true to trigger animation
		const timer = setTimeout(() => setIsVisible(true), 100); // Delay for effect
		return () => clearTimeout(timer); // Cleanup on unmount
	}, []);
	function HandleDropOptions() {
		setDropOtherOptions(!dropOtherOptions);
	}
	useEffect(() => {
		setAnimate(true);
	}, []);
	return (
		<div
			className={`w-full md:px-20 mt-10 ${
				animate ? "animate-fade-slide-up" : ""
			}`}
		>
			<div>
				<p className="text-right">Monday 5th September, 2021 </p>
			</div>
			<AvatarWithIcon />
			<form className="space-y-4 mt-4">
				<div className="flex flex-col md:flex-row md:w-full w-full md:gap-10 ">
					<div className="w-full">
						<label className="block mb-1 text-sm font-medium text-[#49505A] text-[16px]">
							First Name
						</label>
						<input
							type="text"
							className="w-full p-3 border border-[#A8B1BD] rounded-md "
							placeholder="First Name"
							required
						/>
					</div>
					<div className="w-full">
						<label className="block mb-1 text-sm font-medium text-[#49505A] text-[16px]">
							Last Name
						</label>
						<input
							type="text"
							className="w-full p-3 border border-[#A8B1BD] rounded-md"
							placeholder="Last Name"
							required
						/>
					</div>
				</div>
				<div className="flex w-full gap-10">
					<div className="w-full">
						<label className="block mb-1 text-sm font-medium text-[#49505A] text-[16px]">
							Email Address*
						</label>
						<input
							type="email"
							className="w-full p-3 border border-[#A8B1BD] rounded-md "
							placeholder="Email Address"
							required
						/>
					</div>
					<div className="w-full md:block hidden"></div>
				</div>
				<div className="flex gap-8 items-center cursor-pointer">
					<img src={padlockimg} />
					<p>Change Password</p>
					<img
						src={nextimg}
						alt="next"
						className="ml-4"
						onClick={HandleDropOptions}
					/>
				</div>
			</form>
			{dropOtherOptions && (
				<form>
					{/* <div></div> */}
					<div className="flex flex-col w-full gap-10 mt-8 md:flex-row">
						<div className="w-full">
							<label className="block mb-1 text-sm font-medium text-[#49505A] text-[16px]">
								Current Password
							</label>
							<input
								type="password"
								className="w-full p-3 border border-[#A8B1BD] rounded-md mb-1"
								placeholder="Current Password"
								required
							/>
						</div>
						<div className="w-full hidden md:block"></div>
					</div>
					<div className="flex flex-col md:flex-row w-full md:gap-10">
						<div className="w-full">
							<label className="block mb-1 text-sm font-medium text-[#49505A] text-[16px]">
								New Password
							</label>
							<input
								type="password"
								className="w-full p-3 border border-[#A8B1BD] rounded-md mb-1"
								placeholder="New Password"
								required
							/>
						</div>
						<div className="w-full">
							<label className="block mb-1 text-sm font-medium text-[#49505A] text-[16px]">
								Confirm Password
							</label>
							<input
								type="password"
								className="w-full p-3 border border-[#A8B1BD] rounded-md"
								placeholder="Confirm Password"
								required
							/>
						</div>
					</div>
				</form>
			)}
			<div className="flex justify-center items-center">
				<SaveButton />
			</div>
		</div>
	);
}
