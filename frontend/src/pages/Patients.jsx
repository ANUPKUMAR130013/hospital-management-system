import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Patients() {
  const [patients, setPatients] = useState([]);

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
  });

  const fetchPatients = async () => {
    const res = await API.get("/patients");
    setPatients(res.data);
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    await API.post("/patients", form);

    setForm({
      name: "",
      age: "",
      gender: "",
      phone: "",
    });

    fetchPatients();
  };

  return (
    <>
      <Navbar />

      <div className="container">

        <div className="card">
          <h2>Add Patient</h2>

          <form onSubmit={submitHandler}>

            <input
              placeholder="Name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
            />

            <input
              placeholder="Age"
              value={form.age}
              onChange={(e) =>
                setForm({
                  ...form,
                  age: e.target.value,
                })
              }
            />

            <input
              placeholder="Gender"
              value={form.gender}
              onChange={(e) =>
                setForm({
                  ...form,
                  gender: e.target.value,
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

            <button>Add Patient</button>

          </form>
        </div>

        <div className="card">
          <h2>Patient List</h2>

          {patients.map((patient) => (
            <div key={patient._id}>
              <h4>{patient.name}</h4>
              <p>{patient.phone}</p>
              <hr />
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default Patients;