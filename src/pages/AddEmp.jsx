import React from "react";

const AddEmp = () => {
  return (
    <>
      <form action="" method="post">
        <div>
          <label htmlFor="name">Name :</label>
          <input type="text" />
        </div>
        {/* Email  */}
        <div>
          <label htmlFor="email">Email :</label>
          <input type="email" />
        </div>
        {/* Password  */}
        <div>
          <label htmlFor="password">Password :</label>
          <input type="password" />
        </div>
        {/* Gender  */}
        <div>
          <label htmlFor="gender">Gender</label>
          <input type="radio" name="gender" id="male" value={"male"} />
          <label htmlFor="gender">Male</label>
          <input type="radio" name="gender" id="female" value={"female"} />
          <label htmlFor="gender">Female</label>
        </div>
        {/* Hobby  */}
        <div>
          <label htmlFor="hobby">Hobby :</label>
          <input type="checkbox" name="dancing" id="dancing" />
          <label htmlFor="dancing">Dancing</label>
          <label htmlFor="hobby">Hobby :</label>
          <input type="checkbox" name="singing" id="singing" />
          <label htmlFor="singing">Singing</label>
          <label htmlFor="hobby">Hobby :</label>
          <input type="checkbox" name="reading" id="reading" />
          <label htmlFor="reading">Reading</label>
        </div>
        {/* City  */}
        <div>
          <select name="city" id="city">
            <option value="" selected disabled>
              Select City
            </option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="bangalore">Bangalore</option>
          </select>
        </div>
        {/* Button  */}
        <button type="submit">Add Employee</button>
      </form>
    </>
  );
};

export default AddEmp;
