import Verification from "../../public/assets/images/Verification.svg";
const EmailVerification = () => {
	return (
		<div className="flex flex-col lg:flex-row mt-10 px-2 md:px-8 md:gap-4 text-center items-center justify-center min-h-screen bg-white font-Montserrat">
			<div className="w-full max-w-md p-8 space-y-6 md:w-[50%]">
				<div className="flex justify-center items-center">
					<img src={Verification} />
				</div>
				<h1 className="text-center text-[39px] text-[#034AB3] mb-4">
					Email Verification
				</h1>
				<div className="text-center text-[20px] px-8 py-8 bg-[#EAF1FB] rounded-[8px] text-[#2F73DA]">
					We’ve sent a verification code to your email address
				</div>
				<form className="space-y-4">
					<div className="mb-4">
						<input
							type="email"
							className="w-full p-3 border border-[#A8B1BD] text-[#49505A] rounded-[8px] mb-4 text-[16px]"
							placeholder="Enter email Verification*"
							required
						/>
					</div>
					<div className="flex flex-row gap-4 justify-center items-center text-center">
						<p className="text-[#49505A] text-[16px] md:text-[20px]">
							Did not recieve the mail?
						</p>
						<p className="text-[#034AB3] text-[16px] md:text-[20px]">
							RESEND
						</p>
					</div>
					<button
						type="submit"
						className="w-full p-3 mt-4 text-white bg-[#034AB3] rounded-[8px] hover:bg-blue-700 text-[14px]"
					>
						Verify
					</button>
					<p className="text-[#EA5230] text-[25px]"> CANCEL</p>
				</form>
			</div>
		</div>
	);
};

export default EmailVerification;
