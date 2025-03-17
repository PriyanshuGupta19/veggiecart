import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const AddProduct = () => {
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    price: 0,
    image: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) : value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProduct((prev) => ({
          ...prev,
          image: event.target?.result as string,
        }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!product.name || !product.price || !product.image) {
      toast.error("Please fill out all fields and upload an image", {
        position: "top-center",
        autoClose: 1000,
      });
      return;
    }

    // Create new product
    const newProduct = { ...product, id: Date.now() };

    // Get existing products from localStorage
    const existingProducts = JSON.parse(localStorage.getItem("products") || "[]");

    // Update the product list
    const updatedProducts = [...existingProducts, newProduct];

    // Save to localStorage
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    // Show success message
    toast.success(`Item added successfully! ${product.name}`, {
      position: "top-center",
      autoClose: 1000,
    });

    // Delay navigation to ensure localStorage updates
    setTimeout(() => {
      navigate("/shop");
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add Product</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Price</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {product.image && (
            <img src={product.image} alt="Preview" className="mt-4 rounded-md shadow-md" width={150} />
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-3 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;