import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products from localStorage
    const storedProducts = localStorage.getItem("products");

    // Parse the data (fallback to an empty array if null or invalid)
    let parsedProducts: Product[] = [];
    try {
      parsedProducts = storedProducts ? JSON.parse(storedProducts) : [];
    } catch (error) {
      console.error("Error parsing products from localStorage:", error);
    }

    // Validate the data
    const validProducts = parsedProducts.filter(
      (product) =>
        product.id &&
        typeof product.name === "string" &&
        typeof product.price === "number" &&
        typeof product.image === "string"
    );

    // Update the state with valid products
    setProducts(validProducts);
  }, []);

  const handleAddToCart = (product: Product) => {
    // Fetch the current cart from localStorage
    const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if the product is already in the cart
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // If the product is already in the cart, increase the quantity
      existingItem.quantity += 1;
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      cart.push({ ...product, quantity: 1 });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Show a success message
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 1000,
    });

    console.log("Updated Cart:", cart); 
  };
    // deleting the localStorage data
    const handleClearLocalStorage = () => {
      localStorage.removeItem("products");
      localStorage.removeItem("cart");
      toast.success("LocalStorage cleared successfully!", {
        position: "top-center",
        autoClose: 1000,
      });
    };


  return (
    <>
    <div className="min-h-screen bg-gray-100 p-6">
      <ToastContainer />
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
              <h2 className="text-xl font-semibold text-gray-800 mt-4">{product.name}</h2>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No products available.</p>
        )}
      </div>
    </div>
    <div className="flex justify-center pb-10">
    <button
      onClick={handleClearLocalStorage}
      className=" bg-red-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-red-600 transition duration-300 "
    >
      Clear Data
    </button>
  </div>
    </>
  );
};

export default Shop;