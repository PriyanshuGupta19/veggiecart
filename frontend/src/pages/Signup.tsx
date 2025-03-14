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
    <div className="container">
      <h1>Sign-Up</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="name">Name</label>
          <input
          value={signupInfo.name}
          onChange={handleChange}
          type="text"
          name="name"
          autoFocus
          placeholder="Enter your name..."
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Enter your email..."
          value={signupInfo.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Enter your password..."
          value={signupInfo.password}
          />
        </div>
        <button type="submit">Signup</button>
        <span>Already have an account ?
          <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Signup