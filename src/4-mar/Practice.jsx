import React, { useContext } from "react";
import { EmployeeContext, UserContext } from "./context/context";

const FormPage = () => {
  const { userData, handleChange } = useContext(UserContext);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(userData);
  }
  console.log("form page");
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={(e) => handleChange(e)}
          placeholder="name"
        />
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={(e) => handleChange(e)}
          placeholder="email"
        />
        <input
          type="text"
          value={userData.empId}
          name="empId"
          onChange={(e) => handleChange(e)}
          placeholder="empId"
        />
        <button type="submit">submit</button>
      </form>
      <br />
      <DisplayData />
    </div>
  );
};

export default FormPage;

const DisplayData = () => {
  const { userData } = useContext(UserContext);
  console.log("display data ");

  return (
    <div>
      <p>username: {userData.name}</p>
      <p>email: {userData.email}</p>
      <p>employee ID: {userData.empId}</p>
    </div>
  );
};

export const DisplayEmployee = () => {
  const { employeeData } = useContext(EmployeeContext);
console.log("displayemployee")
  return (
    <div>
      <p>Employee name: {employeeData.empName}</p>
      <p>email: {employeeData.email}</p>
      <p>employee ID: {employeeData.empId}</p>
    </div>
  );
};
