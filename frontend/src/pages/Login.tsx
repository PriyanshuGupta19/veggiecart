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
    const { email, password} = loginInfo;
    if ( !email || !password) {
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
          navigate('/home')
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
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Enter your email..."
          value={loginInfo.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Enter your password..."
          value={loginInfo.password}
          />
        </div>
        <button type="submit">Login</button>
        <span>Don't have an account ?
          <Link to="/signup">Sign-Up</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Login