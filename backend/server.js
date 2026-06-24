require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB =
  require("./config/db");

const authRoutes =
  require("./routes/authRoutes");

const doctorRoutes =
  require("./routes/doctorRoutes");

const patientRoutes =
  require("./routes/patientRoutes");

const appointmentRoutes =
  require("./routes/appointmentRoutes");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/doctors", doctorRoutes);

app.use("/api/patients", patientRoutes);

app.use(
  "/api/appointments",
  appointmentRoutes
);

app.get("/", (req, res) => {
  res.send("Hospital API Running");
});

app.listen(
  process.env.PORT,
  () => {
    console.log(
      `Server Running on Port ${process.env.PORT}`
    );
  }
);