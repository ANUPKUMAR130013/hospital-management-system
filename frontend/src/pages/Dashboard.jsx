import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="card">
          <h1>Hospital Dashboard</h1>

          <p>Manage Doctors</p>
          <p>Manage Patients</p>
          <p>Manage Appointments</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;