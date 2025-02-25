import React, { useState } from "react";

const SignUp: React.FC = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    category: "",
    password: "",
    confirmPassword: "",
    farmerCategory: "",
    products: [] as string[],
    consumerCategory: "",
  });

  // Validation helpers
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone: string) => /^\d{3}-\d{3}-\d{4}$/.test(phone);
  const isStrongPassword = (password: string) => 
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user modifies field
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      products: checked ? [...prev.products, value] : prev.products.filter(p => p !== value)
    }));
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = "Invalid format (XXX-XXX-XXXX)";
    }
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!isStrongPassword(formData.password)) {
      newErrors.password = "Password must include uppercase, lowercase, number, and be at least 8 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) return;

    // Step 2 validation
    const step2Errors: Record<string, string> = {};
    if (formData.category === "Farmer") {
      if (!formData.farmerCategory) step2Errors.farmerCategory = "Farmer category required";
      if (formData.products.length === 0) step2Errors.products = "Select at least one product";
    } else {
      if (!formData.consumerCategory) step2Errors.consumerCategory = "Consumer category required";
    }

    if (Object.keys(step2Errors).length > 0) {
      setErrors(step2Errors);
      return;
    }

    setLoading(true);
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert("Form submitted successfully!");
      // Reset form or redirect here
    } catch (error) {
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-green-700 text-center">Sign Up</h2>

        <form className="mt-4" onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              {["name", "email", "phone", "state", "city"].map((field) => (
                <div key={field}>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)}${field === "phone" ? " (XXX-XXX-XXXX)" : ""}`}
                    className="w-full p-2 border rounded mt-2"
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                  />
                  {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
                </div>
              ))}

              <div className="mt-2">
                <select
                  name="category"
                  className="w-full p-2 border rounded"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select Category</option>
                  <option value="Farmer">Farmer</option>
                  <option value="Consumer">Consumer</option>
                </select>
                {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
              </div>

              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-2 border rounded"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>

              <div className="mt-2">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full p-2 border rounded"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
              </div>

              <button
                type="button"
                onClick={() => validateStep1() && setStep(2)}
                className="mt-4 w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              >
                Next
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              {formData.category === "Farmer" ? (
                <>
                  <div>
                    <select
                      name="farmerCategory"
                      className="w-full p-2 border rounded mt-2"
                      value={formData.farmerCategory}
                      onChange={handleChange}
                    >
                      <option value="">Select Farm Size</option>
                      <option value="Marginal">Marginal Farmer (Below 1.00 hectare)</option>
                      <option value="Small">Small Farmer (1-2 hectare)</option>
                      <option value="Semi Medium">Semi Medium (2-4 hectare)</option>
                      <option value="Medium">Medium (4-10 hectare)</option>
                      <option value="Large">Large (10+ hectare)</option>
                    </select>
                    {errors.farmerCategory && <p className="text-red-500 text-sm">{errors.farmerCategory}</p>}
                  </div>

                  <div className="mt-4">
                    <label className="block font-bold mb-2">Products:</label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Vegetables", "Fruits", "Grains", "Herbs", "Nuts", "Seeds", "Dairy"].map((item) => (
                        <label key={item} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            name="products"
                            value={item}
                            checked={formData.products.includes(item)}
                            onChange={handleCheckboxChange}
                          />
                          <span>{item}</span>
                        </label>
                      ))}
                    </div>
                    {errors.products && <p className="text-red-500 text-sm">{errors.products}</p>}
                  </div>
                </>
              ) : (
                <div>
                  <select
                    name="consumerCategory"
                    className="w-full p-2 border rounded mt-2"
                    value={formData.consumerCategory}
                    onChange={handleChange}
                  >
                    <option value="">Select Consumer Type</option>
                    <option value="Self-Consumption">Self-Consumption</option>
                    <option value="Retailer">Retailer</option>
                    <option value="Wholesaler">Wholesaler</option>
                  </select>
                  {errors.consumerCategory && <p className="text-red-500 text-sm">{errors.consumerCategory}</p>}
                </div>
              )}

              <div className="flex gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 bg-gray-600 text-white p-2 rounded hover:bg-gray-700"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-green-600 text-white p-2 rounded hover:bg-green-700 disabled:bg-gray-400"
                >
                  {loading ? "Submitting..." : "Complete"}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;