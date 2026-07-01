# 🏥 Hospital Management System

A full-stack **Hospital Management System** built using the **MERN Stack (MongoDB, Express.js, React.js, and Node.js)**. The system is designed to streamline hospital operations by managing doctors, patients, appointments, medical records, and administrative tasks through a secure and responsive web application.

---

# 📋 Internship Details

| Field             | Details                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Intern ID**     | **CITS5513**                                                                                                                                                                                                                                                                                                                                                                               |
| **Full Name**     | **Anup Kumar**                                                                                                                                                                                                                                                                                                                                                                                      |
| **No. of Weeks**  | *6 Weeks*                                                                                                                                                                                                                                                                                                                                                    |
| **Project Name**  | **Hospital Management System**                                                                                                                                                                                                                                                                                                                                                                      |
| **Project Scope** | Designed and developed a full-stack Hospital Management System to automate hospital operations, including doctor and patient management, appointment scheduling, medical record maintenance, and administrative activities. The system features secure authentication, RESTful APIs, MongoDB database integration, responsive dashboards, and efficient healthcare management using the MERN Stack. |

---

# 📖 Project Overview

The **Hospital Management System** is a web-based application developed to simplify hospital administration by providing a centralized platform for administrators, doctors, and patients. It enables efficient management of patient information, doctor schedules, appointments, and healthcare records while ensuring secure access and data management.

---

# ✨ Features

## 👨‍⚕️ Administrator Features

* Secure Admin Authentication
* Dashboard Overview
* Manage Doctors
* Manage Patients
* Manage Appointments
* View Hospital Statistics
* User Management
* Activity Monitoring

---

## 🩺 Doctor Features

* Doctor Login
* View Assigned Patients
* Manage Appointments
* Update Patient Records
* Write Prescriptions
* View Medical History

---

## 🧑 Patient Features

* Patient Registration
* Secure Login
* Book Appointments
* View Appointment History
* Access Medical Records
* View Prescriptions
* Update Profile

---

# 🛠 Technology Stack

## Frontend

* React.js
* React Router DOM
* Axios
* Vite
* CSS

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* dotenv

---

# 📂 Project Structure

```text
hospital-management-system/

├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/ANUPKUMAR130013/hospital-management-system.git

cd hospital-management-system
```

---

## Install Backend Dependencies

```bash
cd backend
npm install
```

Create a `.env` file inside the **backend** directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Run the backend server.

```bash
npm run dev
```

Expected Output:

```text
MongoDB Connected
Server Running on Port 5000
```

---

## Install Frontend Dependencies

```bash
cd frontend
npm install
```

Run the frontend.

```bash
npm run dev
```

Open your browser:

```text
http://localhost:5173
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint             |
| ------ | -------------------- |
| POST   | `/api/auth/register` |
| POST   | `/api/auth/login`    |

## Doctors

| Method | Endpoint           |
| ------ | ------------------ |
| GET    | `/api/doctors`     |
| POST   | `/api/doctors`     |
| PUT    | `/api/doctors/:id` |
| DELETE | `/api/doctors/:id` |

## Patients

| Method | Endpoint            |
| ------ | ------------------- |
| GET    | `/api/patients`     |
| POST   | `/api/patients`     |
| PUT    | `/api/patients/:id` |
| DELETE | `/api/patients/:id` |

## Appointments

| Method | Endpoint                |
| ------ | ----------------------- |
| GET    | `/api/appointments`     |
| POST   | `/api/appointments`     |
| PUT    | `/api/appointments/:id` |
| DELETE | `/api/appointments/:id` |

---

# 🔐 Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

> **Note:** Never commit your `.env` file or sensitive credentials to GitHub.

---

# 📦 Core Modules

* Authentication
* Admin Dashboard
* Doctor Management
* Patient Management
* Appointment Scheduling
* Medical Records
* Prescription Management
* Reports & Analytics
* User Profile
* Responsive User Interface

---

# 🚀 Future Enhancements

* Online Appointment Booking
* Video Consultation
* Laboratory Management
* Pharmacy Management
* Medical Billing System
* Electronic Health Records (EHR)
* Email & SMS Notifications
* Reports & Analytics Dashboard
* Role-Based Access Control
* Mobile Application

---

# 🤝 Contributing

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

# 👨‍💻 Author

**Anup Kumar**

**B.Tech – Information Technology**

**Rajkiya Engineering College Banda**

**Dr. A.P.J. Abdul Kalam Technical University (AKTU)**

**GitHub:** https://github.com/ANUPKUMAR130013

---

# 📄 License

This project is developed for educational, internship, and academic purposes.
