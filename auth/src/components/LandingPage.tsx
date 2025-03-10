import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 text-gray-800">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to VeggieCart! 🥦🍎</h1>
          <p className="text-lg mb-8">
            Fresh, organic, and locally sourced food for everyone.  
          </p>
  
          {/* Buttons */}
          <div className="flex space-x-4">
            <Link to="/signup">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg transition">
                Sign Up
              </button>
            </Link>
  
            <Link to="/login">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg transition">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default LandingPage;
