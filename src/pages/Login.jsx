import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../Firebase"; // Import your Firebase configuration
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, email, password);
			toast.success("Logged in successfully");
			// alert("Logged in successfully");
			navigate("/dashboard/");
		} catch (error) {
			setError(error.message);
			toast.error("Error logging in");
		}
	};

	return (
		<div className="flex flex-col lg:flex-row md:mt-16 mt-28 px-2 md:px-8 md:gap-4 items-center justify-center min-h-screen bg-white font-Montserrat">
			<Header />
			<div className="flex flex-col gap-3 md:w-[50%] w-full">
				<ToastContainer />
				<div>
					<h1 className="md:text-[48px] text-[28px] text-center mb-4">
						<span className="text-green-300 ">Welcome</span> Back
					</h1>
					<p className="#49505A text-center mb-4">
						Kindly fill in details to sign in
					</p>
					<div>
						<img
							src="assets/images/amico copy.svg"
							className="w-[150px] h-[150px] md:w-[399px] md:h-[314px] md:block m-auto"
						/>
					</div>
				</div>
			</div>
			<div className="w-full max-w-md p-8 space-y-6 md:w-[50%]">
				<form className="space-y-7" onSubmit={handleLogin}>
					<div>
						<label className="block mb-1 text-sm font-medium">
							Email Address*
						</label>
						<input
							type="email"
							className="w-full p-3 border border-[#A8B1BD] rounded-md"
							placeholder="Email Address"
							value={email}
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
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<div className="flex justify-end">
						<Link
							to="/forgotpassword"
							className="flex text-right text-[#034AB3] cursor-pointer"
						>
							Forgot Password?
						</Link>
					</div>
					<button
						type="submit"
						className="w-full p-3 mt-4 text-white bg-[#034AB3] rounded-md hover:bg-blue-700"
					>
						Log in
					</button>
					{error && (
						<p className="text-[#034AB3] text-center mt-2">
							{error}
						</p>
					)}
				</form>

				<p className="mt-4 text-center text-sm">
					Do not have an account?
					<Link to="/signup" className="text-blue-600">
						Sign Up
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
