const ChangePassword = () => {
	return (
		<div className="flex flex-col lg:flex-row mt-10 px-2 md:px-8 md:gap-4 items-center justify-center min-h-screen bg-white font-Montserrat">
			<div className="w-full max-w-md p-8 space-y-6 md:w-[50%]">
				<h1 className="text-center text-[39px] text-[#49505A] mb-4">
					Change Password
				</h1>
				<form className="space-y-4">
					<div className="mb-4">
						<label className="block text-sm font-medium text-[#1F2329] mb-4">
							New Password*
						</label>
						<input
							type="email"
							className="w-full p-3 border border-[#A8B1BD] rounded-[8px] mb-4"
							placeholder="Email Address"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-sm font-medium text-[#1F2329] mb-4">
							Confirm Password
						</label>
						<input
							type="password"
							className="w-full p-3 border border-[#A8B1BD] rounded-[8px] mb-4"
							placeholder="Password"
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
