// const demoData = {
//   name: "John Doe",
//   email: "johndoe@example.com",
//   password: "password123",
//   phone: "1234567890",
//   state: "California",
//   city: "Los Angeles",
//   category: "Farmer", // or "Consumer"
//   farmerCategory: "small", // Only required if category is "Farmer"
//   products: ["Tomatoes", "Potatoes"], // Only required if category is "Farmer"
// };

// fetch("http://localhost:5000/api/auth/signup", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(demoData),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Success:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });



fetch("http://localhost:5000/api/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "johndoe@example.com",
    password: "password123",
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Login Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
