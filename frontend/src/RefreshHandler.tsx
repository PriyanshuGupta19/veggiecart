import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// Specify the type for setIsAuthenticated as a function that takes a boolean
interface RefreshHandlerProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

function RefreshHandler({ setIsAuthenticated }: RefreshHandlerProps) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsAuthenticated(true);
            if (location.pathname === '/' ||
                location.pathname === '/login' ||
                location.pathname === '/signup'
            ) {
                navigate('/dashboard', { replace: false });
            }
        }
    }, [location, navigate, setIsAuthenticated])

    return (
        null
    )
}

export default RefreshHandler