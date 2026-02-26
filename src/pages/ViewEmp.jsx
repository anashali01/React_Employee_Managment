import React, { useState } from "react";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const ViewEmp = ({ list , handleDelete , handleEdit}) => {
  const [pass, setPass] = useState({});

  const handleViewPass = (id) => {
    if (pass.id) {
      setPass({});
    } else {
      setPass({ id });
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <table className="table table-primary table-bordered table-striped text-center">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Gender</th>
                  <th>Hobby</th>
                  <th>City</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {list.map((emp, idx) => {
                  return (
                    <tr key={emp.id}>
                      <td>{idx + 1}</td>
                      <td>
                        <img
                          src={emp.image}
                          alt={emp.name}
                          className="w-50 h-50 mt-4"
                        />
                      </td>
                      <td>{emp.name}</td>
                      <td>{emp.email}</td>
                      <td>
                        <div className="d-flex">
                          <input type={emp.id === pass.id ? "text" : "password"} value={emp.password} />
                          <button className="btn btn-dark" onClick={() => handleViewPass(emp.id)}>
                            {emp.id === pass.id ? (
                              <IoIosEyeOff />
                            ) : (
                              <IoIosEye />
                            )}
                          </button>
                        </div>
                      </td>
                      <td>{emp.gender}</td>
                      <td>{emp.hobby.join(" , ")}</td>
                      <td>{emp.city}</td>
                      <td>{emp.address}</td>
                      <td>
                        <button className="btn btn-info" onClick={()=> handleEdit(emp.id)}>Edit</button>
                        <button className="btn btn-danger" onClick={()=> handleDelete(emp.id)}>Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmp;
