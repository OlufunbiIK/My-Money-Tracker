import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  auth,
  db,
  signInWithGoogle,
  signInWithFacebook,
  signInWithTwitter,
} from "../Firebase";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore/lite";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    general: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

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
  const validateField = (field, value, compareValue = null) => {
    let error = "";

    switch (field) {
      case "firstName":
        if (!value.trim()) {
          error = "First name is required";
        } else if (value.trim().length < 2) {
          error = "First name must be at least 2 characters";
        }
        break;
      case "lastName":
        if (!value.trim()) {
          error = "Last name is required";
        } else if (value.trim().length < 2) {
          error = "Last name must be at least 2 characters";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;
      case "password":
        if (!value) {
          error = "Password is required";
        } else if (value.length < 6) {
          error = "Password must be at least 6 characters";
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
          error =
            "Password must contain at least one uppercase letter, one lowercase letter, and one number";
        }
        break;
      case "confirmPassword":
        if (!value) {
          error = "Please confirm your password";
        } else if (compareValue && value !== compareValue) {
          error = "Passwords do not match";
        }
        break;
    }

    return error;
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {
      firstName: validateField("firstName", firstName),
      lastName: validateField("lastName", lastName),
      email: validateField("email", email),
      password: validateField("password", password),
      confirmPassword: validateField(
        "confirmPassword",
        confirmpassword,
        password
      ),
      general: "",
    };

    setErrors(newErrors);

    // Return true if no errors
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Clear previous general error
    setErrors((prev) => ({ ...prev, general: "" }));

    // Validate form
    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      // Step 1: Create user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Step 2: Save user details in Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        createdAt: new Date(),
      });
      console.log(user);
      setLoading(false);
      toast.success("User registered successfully");
      navigate("/login");
    } catch (error) {
      // Handle specific Firebase auth errors
      let errorMessage = "Error creating account";

      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "An account with this email address already exists";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address";
          break;
        case "auth/weak-password":
          errorMessage = "Password is too weak";
          break;
        case "auth/operation-not-allowed":
          errorMessage = "Email/password accounts are not enabled";
          break;
        default:
          errorMessage = error.message;
      }

      setErrors((prev) => ({ ...prev, general: errorMessage }));
      toast.error("Error creating account");
      console.log(error.message);
      setLoading(false);
    }
  };

  // Handle input changes with validation clearing
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    clearFieldError("firstName");
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    clearFieldError("lastName");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    clearFieldError("email");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    clearFieldError("password");
    // Also clear confirm password error if passwords now match
    if (confirmpassword && e.target.value === confirmpassword) {
      clearFieldError("confirmPassword");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    clearFieldError("confirmPassword");
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      toast.success("Signed in with Google successfully");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      const result = await signInWithFacebook();
      console.log(result.user);
      toast.success("Signed in with Facebook successfully");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleTwitterSignIn = async () => {
    try {
      const result = await signInWithTwitter();
      console.log(result.user);
      toast.success("Signed in with Twitter successfully");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row md:mt-20 mt-24 px-2 md:px-8 md:gap-4 items-center justify-center min-h-screen bg-white font-Montserrat">
      <div className="flex flex-col gap-3 md:w-[50%] w-full">
        <Header />
        <ToastContainer />
        <h1 className="md:text-[48px] text-[28px] text-center">
          <span className="text-green-300 ">Create</span> Personal Account
        </h1>
        <div>
          <img
            src="assets/images/amico.svg"
            className="w-[200px] h-[200px] md:w-[500px] md:h-[500px] md:block m-auto"
          />
        </div>
      </div>
      <div className="w-full max-w-md p-8 space-y-6 md:w-[50%] mt-10">
        <form className="space-y-4" onSubmit={handleSignUp}>
          <div>
            <label className="block mb-1 text-sm font-medium">
              First Name*
            </label>
            <input
              type="text"
              className={`w-full p-3 border rounded-md ${
                errors.firstName
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-[#A8B1BD] focus:border-blue-500 focus:ring-blue-500"
              }`}
              placeholder="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Last Name*</label>
            <input
              type="text"
              className={`w-full p-3 border rounded-md ${
                errors.lastName
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-[#A8B1BD] focus:border-blue-500 focus:ring-blue-500"
              }`}
              placeholder="Last Name"
              value={lastName}
              onChange={handleLastNameChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
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
          <div>
            <label className="block mb-1 text-sm font-medium">
              Confirm Password*
            </label>
            <input
              type="password"
              className={`w-full p-3 border rounded-md ${
                errors.confirmPassword
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-[#A8B1BD] focus:border-blue-500 focus:ring-blue-500"
              }`}
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={handleConfirmPasswordChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 mt-4 text-white bg-[#034AB3] rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
          {errors.general && (
            <p className="text-red-500 text-center mt-2">{errors.general}</p>
          )}
        </form>
        <p className="mt-4 text-center">or sign up with</p>
        <div className="flex justify-center mt-2 space-x-4">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full bg-[#EAF1FB] hover:bg-gray-200 transition-colors"
          >
            <FaGoogle className="text-blue-500" />
          </button>
          <button
            onClick={handleFacebookSignIn}
            className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full bg-[#EAF1FB] hover:bg-gray-200 transition-colors"
          >
            <FaFacebook className="text-blue-600" />
          </button>
          <button
            onClick={handleTwitterSignIn}
            className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full bg-[#EAF1FB] hover:bg-gray-200 transition-colors"
          >
            <FaTwitter className="text-blue-400" />
          </button>
        </div>
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600">
            Login In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
