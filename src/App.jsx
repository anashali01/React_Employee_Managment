import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AddEmp from "./pages/addEmp";
import ViewEmp from "./pages/viewEmp";
import Header from "./components/Header";

const App = () => {
  const [employees, setEmployees] = useState({});
  const [list, setList] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [error, setError] = useState({});
  const navigator = useNavigate();
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
    if (!employees.hobby || employees.hobby.length == 0)
      err.hobby = "Please Select Hobby.";
    if (!employees.address) err.address = "Please Enter Address.";
    setError(err);

    return Object.keys(err).length == 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validation()) return;


    let newList = [...list];
    if (employees.id) {
      newList = newList.map((item)=>{
        if(item.id == employees.id) return employees
        return item;
      })
    } else {
      newList = [...list, { ...employees, id: Date.now() }];
    }
    setList(newList);

    localStorage.setItem("employeeList", JSON.stringify(newList));
    navigator("/viewEmp");
    setEmployees({});
    setHobbies([]);
  };

  const handleDelete = (id) => {
    let newList = list.filter((item) => item.id != id);
    setList(newList);
    localStorage.setItem("employeeList", JSON.stringify(newList));
  };

  const handleEdit = (id) => {
    let data = list.find((item) => item.id === id);
    setEmployees(data);
    navigator('/')
  };

  useEffect(() => {
    let oldList = JSON.parse(localStorage.getItem("employeeList")) || [];
    setList(oldList);
  }, []);

  return (
    <>
      <Header />
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
        <Route
          path="/viewEmp"
          element={<ViewEmp list={list} handleDelete={handleDelete} handleEdit={handleEdit} />}
        />
      </Routes>
    </>
  );
};

export default App;
