import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Users1 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light" style={{ width: "100vw" ,background: "linear-gradient(135deg, #1e3c72, #2a5298)" }}>
        <div className="p-5 bg-light rounded shadow-lg w-75" style={{ maxWidth: "800px" }}>
          <div className="d-flex justify-content-start mb-3">
            <Link to="/create" className="btn btn-success">
              Add +
            </Link>
          </div>
  
          <table className="table table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th className="fs-5">Name</th>
                <th className="fs-5">Email</th>
                <th className="fs-5">Age</th>
                <th className="fs-5">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="fw-bold">{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link to={`/update/${user._id}`} className="btn btn-warning btn-sm me-2">
                      Update
                    </Link>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
  
  
};

export default Users1;
