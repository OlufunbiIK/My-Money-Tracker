import { useNavigate } from "react-router-dom";

export default function SaveButton() {
	const navigate = useNavigate();
	return (
		<div>
			<button
				onClick={() => navigate("/dashboard/")}
				type="submit"
				className="w-full px-3 py-2 mt-10 md:w-[305px] md:h-[40px] text-white bg-[#034AB3] rounded-md hover:bg-blue-700"
			>
				Save
			</button>
		</div>
	);
}
