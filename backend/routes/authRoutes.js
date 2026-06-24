const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Admin = require("../models/Admin");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password } =
    req.body;

  const hashedPassword =
    await bcrypt.hash(password, 10);

  const admin = await Admin.create({
    name,
    email,
    password: hashedPassword
  });

  res.json(admin);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const admin =
    await Admin.findOne({ email });

  if (!admin) {
    return res.status(400).json({
      message: "Admin Not Found"
    });
  }

  const match =
    await bcrypt.compare(
      password,
      admin.password
    );

  if (!match) {
    return res.status(400).json({
      message: "Wrong Password"
    });
  }

  const token = jwt.sign(
    { id: admin._id },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d"
    }
  );

  res.json({
    token
  });
});

module.exports = router;