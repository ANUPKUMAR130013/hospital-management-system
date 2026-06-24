# 🏥 Hospital Management System

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) based Hospital Management System developed for managing doctors, patients, and appointments efficiently.

## Features

* 🔐 Secure Admin Authentication
* 👨‍⚕️ Add and Manage Doctors
* 🧑 Add and Manage Patients
* 📅 Book Appointments
* 📋 View Appointment Records
* 💾 MongoDB Database Integration
* 🌐 RESTful API Backend
* ⚛️ React Frontend Interface
* 🔄 Real-Time Data Management

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Vite
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* dotenv

## Project Structure

```text
hospital-management-system/
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── package.json
│   ├── .env
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── .gitignore
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/ANUPKUMAR130013/hospital-management-system.git
cd hospital-management-system
```

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Run Backend:

```bash
npm run dev
```

Expected Output:

```text
MongoDB Connected
Server Running on Port 5000
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open:

```text
http://localhost:5173
```

## API Endpoints

### Authentication

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/auth/register |
| POST   | /api/auth/login    |

### Doctors

| Method | Endpoint     |
| ------ | ------------ |
| GET    | /api/doctors |
| POST   | /api/doctors |

### Patients

| Method | Endpoint      |
| ------ | ------------- |
| GET    | /api/patients |
| POST   | /api/patients |

### Appointments

| Method | Endpoint          |
| ------ | ----------------- |
| GET    | /api/appointments |
| POST   | /api/appointments |

## Environment Variables

The application requires the following environment variables:

```env
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_secret_key>
```

## Future Enhancements

* Doctor Login System
* Patient Login System
* Medical Records Management
* Prescription Management
* Dashboard Analytics
* Appointment Approval Workflow
* Search and Filter Functionality
* Email Notifications
* Reports and Charts
* Role-Based Access Control

## Author

**Anup Kumar**

B.Tech - Information Technology
Rajkiya Engineering College Banda
Dr. A.P.J. Abdul Kalam Technical University

## License

This project is developed for educational and academic purposes.
