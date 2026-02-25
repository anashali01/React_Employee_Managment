import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddEmp from "./pages/addEmp";
import ViewEmp from "./pages/viewEmp";

const App = () => {
  const [employees, setEmployees] = useState({});
  const [list, setList] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    let { name, value, checked } = e.target;

    let newHobby = [...hobbies];
    if (name == "hobby") {
      if (checked) {
        newHobby = [...hobbies, value]; //Set Checked Values
      } else {
        newHobby.filter((item) => item != value); //Remove Unchecked Value
      }

      value = newHobby;
      setHobbies(newHobby);
    }

    setEmployees({ ...employees, [name]: value });
  };

  const validation = () => {
    let err = {};

    if (!employees.image) err.image = "Please Enter Proper URL.";
    if (!employees.name) err.name = "Please Enter Name.";
    if (!employees.email) err.email = "Please Enter Email.";
    if (!employees.password) err.password = "Please Enter Password.";
    if (!employees.gender) err.gender = "Please Select Gender.";
    if (!employees.city) err.city = "Please Select City.";
    if (!employees.hobby || employees.hobby.length == 0) err.hobby = "Please Select Hobby.";
    if (!employees.address) err.address = "Please Enter Address.";
    setError(err);

    return Object.keys(err).length == 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validation()) return;
    let newList = [...list , {...employees , id : Date.now()}]
    setList(newList)
    setEmployees({});
    setHobbies([]);

    
  };
  console.log(list);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <AddEmp
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              employees={employees}
              hobbies={hobbies}
              error={error}
            />
          }
        />
        <Route path="/viewEmp" element={<ViewEmp />} />
      </Routes>
    </>
  );
};

export default App;
