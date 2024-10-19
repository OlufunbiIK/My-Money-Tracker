import { useEffect, useState } from "react";
import AvatarWithIcon from "../components/AvatarWithIcon";
import padlockimg from "../../public/assets/images/padlockimg.svg";
import nextimg from "../../public/assets/images/nextimg.svg";
import SaveButton from "../components/SaveButton";
import { getAuth } from "firebase/auth/web-extension";
import { Firestore } from "firebase/firestore/lite";
import { useLocation } from "react-router-dom";

export default function Profile() {
	const [dropOtherOptions, setDropOtherOptions] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [animate, setAnimate] = useState(false);
	const [user, setUser] = useState(null); // State to hold user data
	const [loading, setLoading] = useState(true); // Loading state
	const location = useLocation();
	const { firstName, lastName } = location.state || {
		firstName: "",
		lastName: "",
	};

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), 100);
		return () => clearTimeout(timer);
	}, []);

	const HandleDropOptions = () => {
		setDropOtherOptions(!dropOtherOptions);
	};

	useEffect(() => {
		setAnimate(true);
	}, []);

	useEffect(() => {
		// Fetch user information from Firebase Auth
		const currentUser = getAuth.currentUser;
		if (currentUser) {
			setUser(currentUser);
			// Optionally fetch more user details from Firestore if needed
			Firestore.collection("users")
				.doc(currentUser.uid)
				.get()
				.then((doc) => {
					if (doc.exists) {
						setUser({ ...currentUser, ...doc.data() });
					}
				})
				.finally(() => setLoading(false));
		} else {
			setLoading(false); // If no user is found, set loading to false
		}
	}, []);

	if (loading) {
		return <div>Loading...</div>; // Show a loading state while fetching data
	}

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
				<div className="flex flex-col md:flex-row md:w-full w-full md:gap-10">
					<div className="w-full">
						<label className="block mb-1 text-sm font-medium text-[#49505A] text-[16px]">
							First Name
						</label>
						<input
							type="text"
							className="w-full p-3 border border-[#A8B1BD] rounded-md"
							placeholder={firstName}
							defaultValue={user?.firstName || ""}
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
							placeholder={lastName}
							defaultValue={user?.lastName || ""}
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
							className="w-full p-3 border border-[#A8B1BD] rounded-md"
							placeholder="Email Address"
							defaultValue={user?.email || ""}
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
			<div className="mx-auto w-full md:flex md:justify-center">
				<SaveButton />
			</div>
		</div>
	);
}
