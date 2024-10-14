const PasswordSuccess = () => {
	return (
		<div className="flex flex-col lg:flex-row mt-10 px-2 md:px-8 md:gap-4 items-center justify-center min-h-screen bg-white font-Montserrat">
			<div className="w-full  max-w-md p-8 space-y-6 md:w-[50%]">
				<div>
					<img
						src="assets/images/success.svg"
						className="mx-auto mb-16"
					/>
				</div>
				<p className="mx-auto text-center">
					Password was successfully changed!
				</p>
				<button
					type="submit"
					className="w-full p-3 mt-4 text-white bg-[#034AB3] rounded-[8px] hover:bg-blue-700 mx-auto"
				>
					Log in
				</button>
			</div>
		</div>
	);
};

export default PasswordSuccess;
