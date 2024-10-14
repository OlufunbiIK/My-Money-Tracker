import Header from "../components/Header";

const ChangePassword = () => {
	return (
		<div className="flex flex-col lg:flex-row mt-10 px-2 md:px-8 md:gap-4 items-center justify-center min-h-screen bg-white font-Montserrat">
			<Header />
			<div className="w-full max-w-md p-8 space-y-6 md:w-[50%]">
				<h1 className="text-center text-[39px] text-[#034AB3] mb-4">
					Reset your Password
				</h1>
				<p className="text-center text-[24px] px-4">
					We’ll email you a link to reset your password
				</p>
				<form className="space-y-4">
					<div className="mb-4">
						<label className="block text-sm font-medium text-[#1F2329] mb-4"></label>
						<input
							type="email"
							className="w-full p-3 border border-[#A8B1BD] rounded-[8px] mb-4"
							placeholder="Enter email address*"
							required
						/>
					</div>

					<button
						type="submit"
						className="w-full p-3 mt-4 text-white bg-[#034AB3] rounded-[8px] hover:bg-blue-700"
					>
						Change Password
					</button>
				</form>
			</div>
		</div>
	);
};

export default ChangePassword;
