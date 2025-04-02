import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getUser/${id}`)
      .then((result) => {
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/updateUser/${id}`, { name, email, age })
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 vw-100"
      style={{ backgroundColor: "#1c1e21" }}
    >
      <div
        className="card p-5 shadow-lg"
        style={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "#f8f9fa",
          borderRadius: "10px",
        }}
      >
        <h2 className="mb-4 text-center fw-bold text-info">Update User</h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label className="form-label fw-semibold text-success">Name</label>
            <input
              type="text"
              className="form-control border-danger"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold text-success">Email</label>
            <input
              type="email"
              className="form-control border-success"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="form-label fw-semibold text-success">Age</label>
            <input
              type="number"
              className="form-control border-warning"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-danger w-100 py-2 text-white fw-bold"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
