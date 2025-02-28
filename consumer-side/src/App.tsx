import { Routes, Route } from "react-router-dom";
import LandingPage from "../auth/LandingPage"; // Import from auth
import SignUp from "../auth/SignUp";
import Login from "../auth/Login";
import Dashboard from "./components/Dashboard";
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
};

export default App;
