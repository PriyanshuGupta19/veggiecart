import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { handleError } from "../utils";

// Define a type for your product items
interface Product {
  name: string;
  price: number;
  // Add other properties as needed
}

function Home() {
  const [loggedInUser, setLoggedInUser] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]); // Initialize as empty array with Product type
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    setLoggedInUser(user || '');
  }, []);

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');

    setTimeout(() => {
      navigate('/login');
    }, 1000)
  }

  const fetchProducts = async () => {
    try {
      const url = "http://localhost:8080/products";
      const token = localStorage.getItem('token');
      const headers = {
        headers : {
          'Authorization': token || ''
        }
      }
      const response = await fetch(url, headers);
      const result = await response.json();
      console.log(result);
      setProducts(result); // Now this will set an array of Product objects
    } catch (err) {
      handleError(String(err));
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div className="border-2 border-gray-300 p-4 rounded-lg shadow-md flex flex-col items-center bg-white">
  <h1 className="text-xl font-semibold text-gray-700">{loggedInUser}</h1>
  <button 
    className="mt-2 px-4 py-2 bg-red-500 text-white font-medium rounded-md shadow-md hover:bg-red-600 transition duration-300"
    onClick={handleLogout}
  >
    Logout
  </button>
</div>
  )
}

export default Home