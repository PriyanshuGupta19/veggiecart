import { Routes, Route } from "react-router-dom";
import LandingPage from "../../auth/LandingPage"; // Import from auth
import SignUp from "../../auth/SignUp";
import Login from "../../auth/Login";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default App;
