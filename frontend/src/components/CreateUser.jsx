import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/createUser", { name, email, age })
      .then((res) => {
        console.log(res);
        Navigate("/");
      })
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
        <h2 className="mb-4 text-center fw-bold text-primary">Create User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold text-danger">Name</label>
            <input
              type="text"
              className="form-control border-danger"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold text-success">Email</label>
            <input
              type="email"
              className="form-control border-success"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="form-label fw-semibold text-warning">Age</label>
            <input
              type="number"
              className="form-control border-warning"
              placeholder="Enter age"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-info w-100 py-2 text-white fw-bold"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
