import { Navigate, Route, Routes } from 'react-router-dom';
import './index.css'
import Login from './pages/Login'
import Signup from './pages/Signup';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard'; 
import { ReactElement, useState } from 'react';
import RefreshHandler from './RefreshHandler';
import AddProduct from './components/Addproduct';
import Shop from './components/shop';
import Home from './pages/Home';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }: {element: ReactElement}) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }

  return (
    <div className='App'>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>
        <Routes>
            <Route path='/' element={<Navigate to="/login" />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/home' element={<PrivateRoute element={<Home />} />} />
            <Route path='/dashboard' element={<PrivateRoute element={<Dashboard />} />} />
           <Route path='/cart' element={<Cart />} />
           <Route path='/addProduct' element={<AddProduct/>} />
            <Route path='/shop' element={<Shop/>} />
          
        </Routes>
    </div>
  );
}

export default App;