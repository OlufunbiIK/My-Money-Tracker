import { useState } from "react";
import profileimage from "../../public/assets/images/profileimage.svg";
import photoimg from "../../public/assets/images/photoimg.svg";

const AvatarWithIcon = () => {
	const [selectedImage, setSelectedImage] = useState(null);

	// Handle file input change
	const handleImageUpload = (event) => {
		const file = event.target.files[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			setSelectedImage(imageUrl); // Update the avatar image
		}
	};

	return (
		<div className="flex z-0">
			<div className="relative">
				{/* Avatar Circle */}
				<div className="w-24 h-24 bg-gray-200 rounded-full flex justify-center items-center">
					{/* Show uploaded image if available, else default avatar */}
					<img
						src={selectedImage ? selectedImage : profileimage}
						alt="profile"
						className="w-24 h-24 rounded-full object-cover"
					/>
				</div>

				{/* Hidden file input */}
				<input
					type="file"
					id="fileInput"
					accept="image/*"
					style={{ display: "none" }}
					onChange={handleImageUpload}
				/>

				{/* Camera icon in the bottom-right corner */}
				<button
					className="absolute bottom-0 right-0 bg-[#034AB3] p-2 rounded-full border-4 border-white z-0"
					onClick={() => document.getElementById("fileInput").click()} // Trigger file input
				>
					<img src={photoimg} alt="Upload" />
				</button>
			</div>
		</div>
	);
};

export default AvatarWithIcon;
