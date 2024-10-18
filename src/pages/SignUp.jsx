import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
	auth,
	db,
	signInWithGoogle,
	signInWithFacebook,
	signInWithTwitter,
} from "../Firebase";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore/lite";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignUp = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmpassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const provider = new GoogleAuthProvider();

	const handleSignUp = async (e) => {
		e.preventDefault();
		setLoading(true);
		if (password !== confirmpassword) {
			setError("Passwords do not match");
			toast.error("Passwords do not match");
			setLoading(false);
			return;
		} else {
			setError(""); // Reset error state
		}

		try {
			// Step 1: Create user with Firebase Authentication
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;

			// Step 2: Save user details in Firestore
			await setDoc(doc(db, "users", user.uid), {
				firstName: firstName,
				lastName: lastName,
				email: email,
				createdAt: new Date(),
			});
			console.log(user);
			setLoading(false);
			toast.success("User registered successfully");
			navigate("/login");
		} catch (error) {
			toast.error(error.message); // Error toast
			console.log(error.message);
			setLoading(false); // Reset loading state
		}
	};

	const handleGoogleSignIn = async () => {
		try {
			const result = await signInWithPopup(auth, provider);
			console.log(result.user);
			// Handle post-sign-in actions here
		} catch (error) {
			toast.error(error.message);
		}
	};

	const handleFacebookSignIn = async () => {
		try {
			const result = await signInWithFacebook();
			console.log(result.user);
			// Handle post-sign-in actions here
		} catch (error) {
			toast.error(error.message);
		}
	};

	const handleTwitterSignIn = async () => {
		try {
			const result = await signInWithTwitter();
			console.log(result.user);
			// Handle post-sign-in actions here
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<div className="flex flex-col lg:flex-row md:mt-20 mt-24 px-2 md:px-8 md:gap-4 items-center justify-center min-h-screen bg-white font-Montserrat">
			<div className="flex flex-col gap-3 md:w-[50%] w-full">
				<Header />
				<ToastContainer />
				<h1 className="md:text-[48px] text-[28px] text-center">
					<span className="text-green-300 ">Create</span> Personal
					Account
				</h1>
				<div>
					<img
						src="assets/images/amico.svg"
						className="w-[200px] h-[200px] md:w-[500px] md:h-[500px] md:block m-auto"
					/>
				</div>
			</div>
			<div className="w-full max-w-md p-8 space-y-6 md:w-[50%] mt-10">
				<form className="space-y-4" onSubmit={handleSignUp}>
					<div>
						<label className="block mb-1 text-sm font-medium">
							First Name
						</label>
						<input
							type="text"
							className="w-full p-3 border border-[#A8B1BD] rounded-md"
							placeholder="First Name"
							onChange={(e) => setFirstName(e.target.value)}
							required
						/>
					</div>
					<div>
						<label className="block mb-1 text-sm font-medium">
							Last Name
						</label>
						<input
							type="text"
							className="w-full p-3 border border-[#A8B1BD] rounded-md"
							placeholder="Last Name"
							onChange={(e) => setLastName(e.target.value)}
							required
						/>
					</div>
					<div>
						<label className="block mb-1 text-sm font-medium">
							Email Address*
						</label>
						<input
							type="email"
							className="w-full p-3 border border-[#A8B1BD] rounded-md"
							placeholder="Email Address"
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div>
						<label className="block mb-1 text-sm font-medium">
							Password
						</label>
						<input
							type="password"
							className="w-full p-3 border border-[#A8B1BD] rounded-md"
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<div>
						<label className="block mb-1 text-sm font-medium">
							Confirm Password
						</label>
						<input
							type="password"
							className="w-full p-3 border border-[#A8B1BD] rounded-md"
							placeholder="Password"
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
					</div>
					<button
						type="submit"
						disabled={loading}
						className="w-full p-3 mt-4 text-white bg-[#034AB3] rounded-md hover:bg-blue-700"
					>
						Create Account
					</button>
					{error && <p className="text-red-500">{error}</p>}
				</form>
				<p className="mt-4 text-center">or sign up with</p>
				<div className="flex justify-center mt-2 space-x-4">
					<button
						onClick={handleGoogleSignIn}
						className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full bg-[#EAF1FB] hover:bg-gray-200"
					>
						<FaGoogle className="text-blue-500" />
					</button>
					<button
						onClick={handleFacebookSignIn}
						className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full bg-[#EAF1FB] hover:bg-gray-200"
					>
						<FaFacebook className="text-blue-600" />
					</button>
					<button
						onClick={handleTwitterSignIn}
						className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full bg-[#EAF1FB] hover:bg-gray-200"
					>
						<FaTwitter className="text-blue-400" />
					</button>
				</div>
				<p className="mt-4 text-center text-sm">
					Already have an account?{" "}
					<a href="/login" className="text-blue-600">
						Login In
					</a>
				</p>
			</div>
		</div>
	);
};

export default SignUp;
