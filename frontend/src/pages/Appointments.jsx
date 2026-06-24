import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  const [form, setForm] = useState({
    patientName: "",
    doctorName: "",
    appointmentDate: "",
  });

  const fetchAppointments = async () => {
    const res = await API.get("/appointments");
    setAppointments(res.data);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    await API.post("/appointments", form);

    setForm({
      patientName: "",
      doctorName: "",
      appointmentDate: "",
    });

    fetchAppointments();
  };

  return (
    <>
      <Navbar />

      <div className="container">

        <div className="card">

          <h2>Book Appointment</h2>

          <form onSubmit={submitHandler}>

            <input
              placeholder="Patient Name"
              value={form.patientName}
              onChange={(e) =>
                setForm({
                  ...form,
                  patientName: e.target.value,
                })
              }
            />

            <input
              placeholder="Doctor Name"
              value={form.doctorName}
              onChange={(e) =>
                setForm({
                  ...form,
                  doctorName: e.target.value,
                })
              }
            />

            <input
              type="date"
              value={form.appointmentDate}
              onChange={(e) =>
                setForm({
                  ...form,
                  appointmentDate: e.target.value,
                })
              }
            />

            <button>Book Appointment</button>

          </form>
        </div>

        <div className="card">

          <h2>Appointments List</h2>

          {appointments.map((appointment) => (
            <div key={appointment._id}>
              <h4>{appointment.patientName}</h4>

              <p>Doctor: {appointment.doctorName}</p>

              <p>Date: {appointment.appointmentDate}</p>

              <p>Status: {appointment.status}</p>

              <hr />
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default Appointments;