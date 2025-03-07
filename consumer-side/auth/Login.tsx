import React, { useState } from "react";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.email.includes("@") || formData.password.length < 6) {
      setError("Invalid email format or password too short.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      // Backend API call (to be implemented)
      console.log("Logging in:", formData);
      // Redirect based on user role (to be implemented)
    } catch (error) {
      setError("Failed to log in. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-green-700 text-center">Login</h2>

        <form className="mt-4" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-center">{error}</p>}

          <input
            type="email"
            name="email"
            placeholder="Gmail"
            required
            className="w-full p-2 border rounded mt-2"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full p-2 border rounded mt-2"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className={`mt-4 w-full p-2 rounded ${
              loading ? "bg-gray-400" : "bg-green-600 text-white"
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
