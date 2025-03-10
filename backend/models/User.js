const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    category: { type: String, required: true, enum: ["Farmer", "Consumer"] },
    farmerCategory: {
      type: String,
      enum: ["Marginal", "small", "Semi Medium", "Medium", "Large"],
    },
    products: { type: [String] },
    consumerCategory: {
      type: String,
      enum: ["Self-Consumption", "Retailer", "Wholesaler"],
    },
    createdAt: { type: Date, default: Date.now },
  },
  { collection: "users" }
);

// Pre-save validation to enforce required fields based on category
UserSchema.pre("save", function (next) {
  if (this.category === "Farmer") {
    if (!this.farmerCategory) {
      return next(new Error("Farmer category is required for Farmers."));
    }
    if (!this.products || this.products.length === 0) {
      return next(
        new Error("At least one product must be selected for Farmers.")
      );
    }
    this.consumerCategory = undefined; // Ensure no consumer category is stored
  } else if (this.category === "Consumer") {
    if (!this.consumerCategory) {
      return next(new Error("Consumer category is required for Consumers."));
    }
    this.farmerCategory = undefined;
    this.products = undefined;
  }
  next();
});

module.exports = mongoose.model("User", UserSchema);
