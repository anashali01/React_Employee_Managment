import React, { useState } from 'react'
import { Route, Router } from 'react-router-dom'
import AddEmp from './pages/addEmp'
import ViewEmp from './pages/viewEmp'

const App = () => {

  const [employees , setEmployees] = useState({});
  const [list , setList] = useState([]);

  const handleChange = (e) => {
    const {name , value} = e.target;
    setEmployees({...employees , [name] : value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(list);
    
  }
  return (
    <>
      <Router>
        <Route path='/' element={<AddEmp/>}/>
        <Route path='/viewEmp' element={<ViewEmp/>}/>
      </Router>
    </>
  )
}

export default App
