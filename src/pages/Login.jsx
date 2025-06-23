import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../Firebase"; // Import your Firebase configuration
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });
  const navigate = useNavigate();

  // Clear specific field error when user starts typing
  const clearFieldError = (field) => {
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  // Validate individual fields
  const validateField = (field, value) => {
    let error = "";

    switch (field) {
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;
      case "password":
        if (!value.trim()) {
          error = "Password is required";
        } else if (value.length < 6) {
          error = "Password must be at least 6 characters";
        }
        break;
    }

    return error;
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {
      email: validateField("email", email),
      password: validateField("password", password),
      general: "",
    };

    setErrors(newErrors);

    // Return true if no errors
    return !newErrors.email && !newErrors.password;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Clear previous general error
    setErrors((prev) => ({ ...prev, general: "" }));

    // Validate form
    if (!validateForm()) {
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully");
      navigate("/dashboard/");
    } catch (error) {
      // Handle specific Firebase auth errors
      let errorMessage = "Error logging in";

      switch (error.code) {
        case "auth/user-not-found":
          errorMessage = "No account found with this email address";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address";
          break;
        case "auth/user-disabled":
          errorMessage = "This account has been disabled";
          break;
        case "auth/too-many-requests":
          errorMessage = "Too many failed attempts. Please try again later";
          break;
        default:
          errorMessage = error.message;
      }

      setErrors((prev) => ({ ...prev, general: errorMessage }));
      toast.error("Error logging in");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    clearFieldError("email");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    clearFieldError("password");
  };

  return (
    <div className="flex flex-col lg:flex-row md:mt-16 mt-28 px-2 md:px-8 md:gap-4 items-center justify-center min-h-screen bg-white font-Montserrat">
      <Header />
      <div className="flex flex-col gap-3 md:w-[50%] w-full">
        <ToastContainer />
        <div>
          <h1 className="md:text-[48px] text-[28px] text-center mb-4">
            <span className="text-green-300 ">Welcome</span> Back
          </h1>
          <p className="#49505A text-center mb-4">
            Kindly fill in details to sign in
          </p>
          <div>
            <img
              src="assets/images/amico copy.svg"
              className="w-[150px] h-[150px] md:w-[399px] md:h-[314px] md:block m-auto"
            />
          </div>
        </div>
      </div>
      <div className="w-full max-w-md p-8 space-y-6 md:w-[50%]">
        <form className="space-y-7" onSubmit={handleLogin}>
          <div>
            <label className="block mb-1 text-sm font-medium">
              Email Address*
            </label>
            <input
              type="email"
              className={`w-full p-3 border rounded-md ${
                errors.email
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-[#A8B1BD] focus:border-blue-500 focus:ring-blue-500"
              }`}
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Password*</label>
            <input
              type="password"
              className={`w-full p-3 border rounded-md ${
                errors.password
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-[#A8B1BD] focus:border-blue-500 focus:ring-blue-500"
              }`}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <div className="flex justify-end">
            <Link
              to="/forgotpassword"
              className="flex text-right text-[#034AB3] cursor-pointer"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full p-3 mt-4 text-white bg-[#034AB3] rounded-md hover:bg-blue-700 transition-colors"
          >
            Log in
          </button>
          {errors.general && (
            <p className="text-red-500 text-center mt-2">{errors.general}</p>
          )}
        </form>

        <p className="mt-4 text-center text-sm">
          Do not have an account?{" "}
          <Link to="/signup" className="text-blue-600">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
