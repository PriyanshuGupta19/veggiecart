import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { handleError, handleSuccess } from "../utils";

interface LoginInfo {
  email: string;
  password: string;
}

function Login() {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: '',
    password: ''
  })

  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Ensure name is a key of LoginInfo
    const key = name as keyof LoginInfo;
    setLoginInfo(prev => ({
      ...prev,
      [key]: value
    }));
  }
  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError('email and password are required');
    }
    try {
      const url = "http://localhost:8080/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
      });
      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        setTimeout(() => {
          navigate('/dashboard'); // Redirect to /dashboard instead of /home
        }, 1000);
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
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      {/* Login Heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h1>
  
      {/* Login Form */}
      <form onSubmit={handleLogin} className="flex flex-col space-y-4">
        {/* Email Field */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter your email..."
            value={loginInfo.email}
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
            value={loginInfo.password}
            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        {/* Login Button */}
        <button 
          type="submit" 
          className="bg-blue-500 text-white font-semibold py-3 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
  
        {/* Signup Link */}
        <span className="text-gray-600 text-center">
          Don't have an account? 
          <Link to="/signup" className="text-blue-500 font-medium hover:underline ml-1">Sign-Up</Link>
        </span>
      </form>
  
      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  </div>
  
  )
}

export default Login;