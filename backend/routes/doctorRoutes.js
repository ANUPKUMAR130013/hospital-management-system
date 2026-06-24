const express = require("express");

const Doctor =
  require("../models/Doctor");

const protect =
  require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, async (req, res) => {
  const doctor =
    await Doctor.create(req.body);

  res.json(doctor);
});

router.get("/", async (req, res) => {
  const doctors =
    await Doctor.find();

  res.json(doctors);
});

module.exports = router;