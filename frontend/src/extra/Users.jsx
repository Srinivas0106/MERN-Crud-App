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
      <div className="container mt-4">
        <div className="p-4 bg-light rounded">
          <div className="d-flex justify-content-start">
            <Link to="/create" className="btn btn-success">
              Add +
            </Link>
          </div>

          <table className="table table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>

                    <td>
                      <Link
                        to={`/update/${user._id}`}
                        className="btn btn-warning btn-sm me-2"
                      >
                
                        Update
                      </Link>
                      <button className="btn btn-danger btm-sm me-2"
                      onClick={() => handleDelete(user._id)}> 
                        Delete</button>
          
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Users1;
