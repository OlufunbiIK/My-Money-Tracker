import emailsent from "../../public/assets/images/emailsent.svg";
const EmailSent = () => {
	return (
		<div className="flex flex-col lg:flex-row mt-10 px-2 md:px-8 md:gap-4 text-center items-center justify-center min-h-screen bg-white font-Montserrat">
			<div className="w-full max-w-md p-8 space-y-6 md:w-[50%]">
				<div className="flex justify-center items-center">
					<img src={emailsent} />
				</div>
				<p className="text-center text-[20px] text-[#034AB3] mb-4">
					Please check your email
				</p>
				<p className="text-[14px] text-[#1F2329] mb-20">
					A password reset link has been sent to your email Please
					check
					<span className="text-[#034AB3]">samson419@gmail.com</span>
					for link
				</p>
				<p className="14px text-[#1F2329] mt-20">
					Did not get an email?
					<span className="[text-[#2F73DA]]">Resend</span>
				</p>
			</div>
		</div>
	);
};

export default EmailSent;
