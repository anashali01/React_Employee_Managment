import React from "react";

const AddEmp = ({ handleChange, handleSubmit, employees, hobbies , error }) => {
  const cities = ["Surat", "Ahmadabad", "Vadodara", "Chennai"];
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <h1 className="text-center fw-bolder mb-3">Add Employee Data</h1>

            <form action="" method="post" onSubmit={handleSubmit}>
              {/* Image Url  */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Image URL :
                </label>
                <input
                  type="url"
                  name="image"
                  onChange={handleChange}
                  className="form-control"
                  value={employees.image || ""}
                />
                <span className="text-danger">{error.image || ''}</span>
              </div>
              {/* Name  */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name :
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  className="form-control"
                  value={employees.name || ""}
                />
                <span className="text-danger">{error.name || ''}</span>

              </div>
              {/* Email  */}
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email :
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="form-control"
                  value={employees.email || ""}
                />
                <span className="text-danger">{error.email || ''}</span>

              </div>
              {/* Password  */}
              <div>
                <label className="form-label" htmlFor="password">
                  Password :
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="form-control"
                  value={employees.password || ""}
                />
                <span className="text-danger">{error.password || ''}</span>

              </div>
              {/* Gender  */}
              <div className="mt-3">
                <label className="form-label me-2" htmlFor="gender">
                  Gender
                </label>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value={"male"}
                  checked={employees.gender == "male"}
                  onChange={handleChange}
                />
                <label className="form-label me-2" htmlFor="gender">
                  Male
                </label>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value={"female"}
                  checked={employees.gender == "female"}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="gender">
                  Female
                </label>
                <span className="text-danger">{error.gender || ''}</span>

              </div>
              {/* Hobby  */}
              <div className="mt-3">
                <label className="form-label me-2" htmlFor="hobby">
                  Hobby :
                </label>
                <input
                  type="checkbox"
                  onChange={handleChange}
                  checked={hobbies?.includes("dancing")}
                  name="hobby"
                  value="dancing"
                  id="dancing"
                />
                <label className="form-label me-2" htmlFor="dancing">
                  Dancing
                </label>
                <input
                  type="checkbox"
                  onChange={handleChange}
                  checked={hobbies?.includes("singing")}
                  name="hobby"
                  value="singing"
                  id="singing"
                />
                <label className="form-label me-2" htmlFor="singing">
                  Singing
                </label>
                <input
                  type="checkbox"
                  onChange={handleChange}
                  checked={hobbies?.includes("reading")}
                  name="hobby"
                  value="reading"
                  id="reading"
                />
                <label className="form-label" htmlFor="reading">
                  Reading
                </label>
                <span className="text-danger">{error.hobby || ''}</span>

              </div>
              {/* City  */}
              <div className="mt-3">
                <label className="form-label me-2" htmlFor="city">
                  City :
                </label>
                <select
                  name="city"
                  id="city"
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="" selected>
                    Select City
                  </option>
                  {cities.map((c) => (
                    <option value={c} selected={employees.city === c}>
                      {c}
                    </option>
                  ))}
                </select>
                <span className="text-danger">{error.city || ''}</span>

              </div>
              {/* TextArea  */}
              <div className="mt-3">
                <label htmlFor="address" className="form-label">
                  Address :
                </label>
                <textarea
                  name="address"
                  id="address"
                  className="form-control"
                  value={employees.address || ""}
                  onChange={handleChange}
                />
                <span className="text-danger">{error.address || ''}</span>

              </div>
              {/* Button  */}
              <button type="submit" className="btn btn-info mt-3">
                Add Employee
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEmp;
