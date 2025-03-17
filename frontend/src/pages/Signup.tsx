import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { handleError, handleSuccess } from "../utils";

interface SignupInfo {
  name: string;
  email: string;
  password: string;
}

function Signup() {
  const [signupInfo, setSignupInfo] = useState<SignupInfo>({
    name: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Ensure name is a key of LoginInfo
    const key = name as keyof SignupInfo;
    setSignupInfo(prev => ({
      ...prev,
      [key]: value
    }));
  }
  const handleSignup = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const {name, email, password} = signupInfo;
    if (!name || !email || !password) {
      return handleError('name, email and password are required');
    }
    try {
      const url = "http://localhost:8080/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupInfo)
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/login')
        }, 1000)
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
      console.log(result);
    } catch (err) {
      handleError(String(err));
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      {/* Sign-Up Heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign-Up</h1>
  
      {/* Sign-Up Form */}
      <form onSubmit={handleSignup} className="flex flex-col space-y-4">
        {/* Name Field */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 font-medium">Name</label>
          <input
            value={signupInfo.name}
            onChange={handleChange}
            type="text"
            name="name"
            autoFocus
            placeholder="Enter your name..."
            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        {/* Email Field */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter your email..."
            value={signupInfo.email}
            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        {/* Password Field */}
        <div className="flex flex-col">
          <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter your password..."
            value={signupInfo.password}
            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        {/* Signup Button */}
        <button 
          type="submit" 
          className="bg-blue-500 text-white font-semibold py-3 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        >
          Sign-Up
        </button>
  
        {/* Login Link */}
        <span className="text-gray-600 text-center">
          Already have an account? 
          <Link to="/login" className="text-blue-500 font-medium hover:underline ml-1">Login</Link>
        </span>
      </form>
  
      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  </div>
  
  )
}

export default Signup;