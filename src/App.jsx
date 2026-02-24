import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddEmp from "./pages/addEmp";
import ViewEmp from "./pages/viewEmp";

const App = () => {
  const [employees, setEmployees] = useState({});
  const [list, setList] = useState([]);
  const [hobbies, setHobbies] = useState([]);

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
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(employees);
    setEmployees({});
    setHobbies([])
  };
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
            />
          }
        />
        <Route path="/viewEmp" element={<ViewEmp />} />
      </Routes>
    </>
  );
};

export default App;
