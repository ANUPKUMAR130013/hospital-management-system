import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  const [form, setForm] = useState({
    name: "",
    specialization: "",
    experience: "",
    phone: "",
  });

  const fetchDoctors = async () => {
    const res = await API.get("/doctors");
    setDoctors(res.data);
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    await API.post("/doctors", form);

    setForm({
      name: "",
      specialization: "",
      experience: "",
      phone: "",
    });

    fetchDoctors();
  };

  return (
    <>
      <Navbar />

      <div className="container">

        <div className="card">
          <h2>Add Doctor</h2>

          <form onSubmit={submitHandler}>
            <input
              placeholder="Doctor Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              placeholder="Specialization"
              value={form.specialization}
              onChange={(e) =>
                setForm({
                  ...form,
                  specialization: e.target.value,
                })
              }
            />

            <input
              placeholder="Experience"
              value={form.experience}
              onChange={(e) =>
                setForm({
                  ...form,
                  experience: e.target.value,
                })
              }
            />

            <input
              placeholder="Phone"
              value={form.phone}
              onChange={(e) =>
                setForm({
                  ...form,
                  phone: e.target.value,
                })
              }
            />

            <button>Add Doctor</button>
          </form>
        </div>

        <div className="card">
          <h2>Doctors List</h2>

          {doctors.map((doctor) => (
            <div key={doctor._id}>
              <h4>{doctor.name}</h4>
              <p>{doctor.specialization}</p>
              <hr />
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default Doctors;