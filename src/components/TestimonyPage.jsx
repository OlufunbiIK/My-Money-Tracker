import { useState, useEffect } from "react";

const Testimonials = () => {
	const [testimonials, setTestimonials] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	// Fetch user data from the Random User Generator API
	const fetchTestimonials = async () => {
		const response = await fetch("https://randomuser.me/api/?results=3");
		const data = await response.json();
		const fetchedTestimonials = data.results.map((user) => ({
			id: user.login.uuid,
			name: `${user.name.first} ${user.name.last}`,
			image: user.picture.large,
			rating: Math.floor(Math.random() * 5) + 1, // Random rating between 1 and 5
			message:
				"This application has made a huge difference in my life, making it extremely easy to record all my expenses and especially keep track of each individual wallet.",
		}));
		setTestimonials(fetchedTestimonials);
	};

	const nextTestimonial = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
		);
	};

	useEffect(() => {
		fetchTestimonials(); // Fetch testimonials on component mount
		const interval = setInterval(() => {
			nextTestimonial();
		}, 10000); // Change testimonial every 10 seconds

		return () => clearInterval(interval); // Cleanup on unmount
	}, [testimonials.length]);

	const handleDotClick = (index) => {
		setCurrentIndex(index);
	};

	// Ensure we have testimonials before rendering
	if (testimonials.length === 0) {
		return <p>Loading...</p>;
	}

	return (
		<section className="flex items-center justify-center bg-white shadow-lg py-8 md:py-16 px-1 md:px-0 font-montserrat z-1">
			<div className="bg-gradient-to-r from-[#165ECC] to-[#8CE590] rounded-lg p-4 md:p-6 w-full max-w-3xl text-white shadow-md flex flex-col items-center">
				<div className="w-full text-center mb-6">
					<span className="text-lg font-semibold">Testimonial</span>
				</div>

				<div className="flex flex-col items-center">
					<div>
						<img
							src="assets/images/left-quote 1.svg"
							alt="quote"
							className="mt-2 md:mt-4 w-8 h-8 md:w-12 md:h-12"
						/>
					</div>
					<p className="mt-4 md:mt-6 text-center px-4 text-sm md:text-base">
						{testimonials[currentIndex].message}
					</p>
					<div>
						<img
							src="assets/images/left-quote 2.svg"
							alt="quote"
							className="w-8 h-8 md:w-12 md:h-12"
						/>
					</div>
					<img
						src={testimonials[currentIndex].image}
						alt={testimonials[currentIndex].name}
						className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white mb-4 md:mt-4"
					/>
					<div className="flex justify-center mt-1">
						{Array.from(
							{ length: testimonials[currentIndex].rating },
							(_, index) => (
								<svg
									key={index}
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 md:h-5 md:w-5 text-yellow-500"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M10 15.27L16.18 18 15.64 11.97 20 7.24l-7.19-.61L10 1 8.19 6.63 1 7.24l5.36 4.73L4.82 18z"
										clipRule="evenodd"
									/>
								</svg>
							)
						)}
						{Array.from(
							{ length: 5 - testimonials[currentIndex].rating },
							(_, index) => (
								<svg
									key={index}
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 md:h-5 md:w-5 text-gray-400"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M10 15.27L16.18 18 15.64 11.97 20 7.24l-7.19-.61L10 1 8.19 6.63 1 7.24l5.36 4.73L4.82 18z"
										clipRule="evenodd"
									/>
								</svg>
							)
						)}
					</div>
				</div>

				<div className="flex justify-center space-x-2 mt-4">
					{testimonials.map((_, index) => (
						<button
							key={index}
							className={`w-3 h-3 rounded-full ${
								currentIndex === index
									? "bg-white"
									: "bg-gray-300"
							}`}
							onClick={() => handleDotClick(index)}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
