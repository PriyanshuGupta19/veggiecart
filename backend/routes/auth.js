const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register User
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, phone, state, city, category, farmerCategory, products, consumerCategory } = req.body;

    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Validate required fields for category
    if (category === "Farmer" && (!farmerCategory || !products || products.length === 0)) {
      return res.status(400).json({ error: "Farmer category and products are required for Farmers." });
    }

    if (category === "Consumer" && !consumerCategory) {
      return res.status(400).json({ error: "Consumer category is required for Consumers." });
    }

    // Create new user
    user = new User({
      name,
      email,
      password,
      phone,
      state,
      city,
      category,
      farmerCategory: category === "Farmer" ? farmerCategory : undefined,
      products: category === "Farmer" ? products : undefined,
      consumerCategory: category === "Consumer" ? consumerCategory : undefined,
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    // Create JWT token
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET || "secret",
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error", details: err.message });
  }
});


// Login User
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;