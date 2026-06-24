import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <div className="navbar">

      <h2>Hospital Management</h2>

      <div>

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/doctors">
          Doctors
        </Link>

        <Link to="/patients">
          Patients
        </Link>

        <Link to="/appointments">
          Appointments
        </Link>

        <button onClick={logout}>
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;