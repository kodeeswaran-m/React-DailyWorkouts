import { createContext, useState } from "react";

export const UserContext = createContext();
export const EmployeeContext= createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    empId: "",
  });
  // console.log("user context");
  
  const handleChange=(e)=>{
    const {name,value}=e.target;
    console.log("from context",name, value);
    setUserData((prev)=>({...prev,[name]:value}));

  }

  return(
    <UserContext.Provider value={{userData,handleChange}}>
        {children}
    </UserContext.Provider>
  )
};
export const EmployeeProvider = ({ children }) => {
  const [employeeData, setEmployeeData] = useState({
    empName: "raj",
    email: "raj@gmail.com",
    empId: "ace202092",
  });
  console.log("employee context")
  const handleChange=(e)=>{
    const {name,value}=e.target;
    console.log("from context",name, value);
    setUserData((prev)=>({...prev,[name]:value}));

  }

  return(
    <EmployeeContext.Provider value={{employeeData,handleChange}}>
        {children}
    </EmployeeContext.Provider>
  )
};
