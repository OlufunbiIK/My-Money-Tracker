import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EmailSuccess = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleLoginClick = () => {
    // Handle navigation to login page
    console.log("Navigating to login page...");
    // You can use router navigation here
    navigate("/login");
    alert("Redirecting to login page...");
  };

  return (
    <div className="flex flex-col lg:flex-row mt-10 px-2 md:px-8 md:gap-4 items-center justify-center min-h-screen bg-white font-Montserrat">
      <div
        className={`w-full max-w-md p-8 space-y-6 md:w-[50%] transition-all duration-500 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div
            className={`relative transition-all duration-700 transform ${
              isVisible ? "scale-100 rotate-0" : "scale-75 rotate-12"
            }`}
          >
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            {/* Animated success ring */}
            <div
              className={`absolute inset-0 border-4 border-green-200 rounded-full transition-all duration-1000 ${
                isVisible ? "scale-125 opacity-0" : "scale-100 opacity-100"
              }`}
            ></div>
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center space-y-4">
          <h2
            className={`text-2xl font-bold text-[#49505A] transition-all duration-500 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Success!
          </h2>
          <p
            className={`text-[#1F2329] text-lg transition-all duration-500 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Email was successfully changed!
          </p>
          <p
            className={`text-[#A8B1BD] text-sm transition-all duration-500 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            You can now log in with your new email address.
          </p>
        </div>

        {/* Login Button */}
        <div
          className={`transition-all duration-500 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            type="button"
            onClick={handleLoginClick}
            className="w-full p-3 mt-6 text-white bg-[#034AB3] rounded-[8px] hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 active:scale-95"
          >
            Continue to Login
          </button>
        </div>

        {/* Additional Actions */}
        <div
          className={`text-center transition-all duration-500 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            className="text-[#034AB3] text-sm hover:underline focus:outline-none focus:underline"
            onClick={() => {
              console.log("Resend confirmation email...");
              alert("Confirmation email sent!");
            }}
          >
            Didn't receive confirmation? Resend email
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailSuccess;
