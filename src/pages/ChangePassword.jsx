import { useState } from "react";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // New Password validation
    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters long";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.newPassword)) {
      newErrors.newPassword =
        "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (validateForm()) {
      // Form is valid - handle password change
      console.log("Password change successful:", formData);
      alert("Password changed successfully!");
      // Reset form
      setFormData({ newPassword: "", confirmPassword: "" });
      setIsSubmitted(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row mt-10 px-2 md:px-8 md:gap-4 items-center justify-center min-h-screen bg-white font-Montserrat">
      <div className="w-full max-w-md p-8 space-y-6 md:w-[50%]">
        <h1 className="text-center text-[39px] text-[#49505A] mb-4">
          Change Password
        </h1>
        <div className="space-y-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#1F2329] mb-4">
              New Password*
            </label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              className={`w-full p-3 border rounded-[8px] mb-2 ${
                errors.newPassword
                  ? "border-red-500 focus:border-red-500"
                  : "border-[#A8B1BD] focus:border-blue-500"
              } focus:outline-none focus:ring-1 ${
                errors.newPassword
                  ? "focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
              placeholder="Enter new password"
            />
            {errors.newPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-[#1F2329] mb-4">
              Confirm Password*
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={`w-full p-3 border rounded-[8px] mb-2 ${
                errors.confirmPassword
                  ? "border-red-500 focus:border-red-500"
                  : "border-[#A8B1BD] focus:border-blue-500"
              } focus:outline-none focus:ring-1 ${
                errors.confirmPassword
                  ? "focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
              placeholder="Confirm new password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full p-3 mt-4 text-white bg-[#034AB3] rounded-[8px] hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
